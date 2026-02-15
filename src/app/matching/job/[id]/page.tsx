// DentalAI Match - 求人個別マッチングページ
// 「この求人におすすめの候補者」を上位から表示する
// 使用方法: /matching/job/[id] にアクセス

import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobById, getAllSeekers } from "@/lib/dummy-data";
import { jobToProfile, seekerToProfile } from "@/lib/matching";
import { calculateMatchScore } from "@/lib/ai/matching-engine";
import { JOB_TYPE_LABELS, EMPLOYMENT_TYPE_LABELS } from "@/types";

/** スコアに応じたバッジカラー */
function scoreBadgeClass(score: number): string {
  if (score >= 80) return "bg-teal-100 text-teal-800";
  if (score >= 60) return "bg-rose-100 text-rose-800";
  return "bg-gray-100 text-gray-600";
}

function scoreBarColor(score: number): string {
  if (score >= 80) return "bg-teal-500";
  if (score >= 60) return "bg-rose-400";
  return "bg-gray-400";
}

export default async function JobMatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) return notFound();

  const seekers = getAllSeekers();
  const jobProfile = jobToProfile(job);

  const results = seekers
    .map((seeker) => {
      const candidateProfile = seekerToProfile(seeker);
      const { score, reasons } = calculateMatchScore(jobProfile, candidateProfile);
      return { seeker, score, reasons };
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/matching"
            className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            マッチング一覧に戻る
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{job.clinic?.name ?? ""}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-teal-100 text-sm">
                <span>{JOB_TYPE_LABELS[job.job_type]}</span>
                <span>|</span>
                <span>{EMPLOYMENT_TYPE_LABELS[job.employment_type]}</span>
                <span>|</span>
                <span>{job.city}</span>
                <span>|</span>
                <span>月給{(job.salary_min / 10000).toFixed(0)}万〜{(job.salary_max / 10000).toFixed(0)}万円</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 求人サマリー */}
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-8">
          <h2 className="font-bold text-sm text-gray-500 mb-3">求人情報</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">勤務時間: </span>
              <span className="font-medium">{job.working_hours}</span>
            </div>
            <div>
              <span className="text-gray-500">休日: </span>
              <span className="font-medium">{job.holidays}</span>
            </div>
            <div>
              <span className="text-gray-500">特徴: </span>
              <span className="font-medium">{job.clinic?.features.join("、") ?? ""}</span>
            </div>
            <div>
              <span className="text-gray-500">求人タイトル: </span>
              <span className="font-medium">{job.title.slice(0, 30)}...</span>
            </div>
          </div>
        </div>

        {/* 候補者ランキング */}
        <h2 className="text-xl font-bold mb-6">
          この求人におすすめの候補者
        </h2>
        <div className="space-y-6">
          {results.map(({ seeker, score, reasons }, rank) => (
            <div
              key={seeker.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* ヘッダー */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">
                    {rank + 1}
                  </div>
                  <div>
                    <Link
                      href={`/matching/seeker/${seeker.id}`}
                      className="font-bold text-base hover:text-rose-600 transition-colors"
                    >
                      {seeker.name}
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{JOB_TYPE_LABELS[seeker.job_type]}</span>
                      <span>/</span>
                      <span>経験{seeker.experience_years}年</span>
                      <span>/</span>
                      <span>{seeker.preferred_city || seeker.preferred_prefecture}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-xl text-lg font-bold ${scoreBadgeClass(score)}`}>
                  {score}点
                </div>
              </div>

              {/* 7因子プログレスバー */}
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {reasons.map((reason) => (
                    <div key={reason.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-gray-600">{reason.label}</span>
                        <span className="text-xs font-bold text-gray-800">{reason.score}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${scoreBarColor(reason.score)}`}
                          style={{ width: `${reason.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* スキル・自己PR */}
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {seeker.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{seeker.self_introduction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
