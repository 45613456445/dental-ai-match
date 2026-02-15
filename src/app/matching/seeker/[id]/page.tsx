// DentalAI Match - 求職者個別マッチングページ
// 「あなたにおすすめの求人」を上位から表示する
// 使用方法: /matching/seeker/[id] にアクセス

import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllJobs, getSeekerById } from "@/lib/dummy-data";
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

export default async function SeekerMatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seeker = getSeekerById(id);
  if (!seeker) return notFound();

  const jobs = getAllJobs();
  const candidateProfile = seekerToProfile(seeker);

  const results = jobs
    .map((job) => {
      const jobProfile = jobToProfile(job);
      const { score, reasons } = calculateMatchScore(jobProfile, candidateProfile);
      return { job, score, reasons };
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/matching"
            className="inline-flex items-center gap-1.5 text-rose-200 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            マッチング一覧に戻る
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{seeker.name}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-rose-100 text-sm">
                <span>{JOB_TYPE_LABELS[seeker.job_type]}</span>
                <span>|</span>
                <span>経験{seeker.experience_years}年</span>
                <span>|</span>
                <span>{seeker.preferred_city || seeker.preferred_prefecture}</span>
                <span>|</span>
                <span>{EMPLOYMENT_TYPE_LABELS[seeker.preferred_employment_type]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* プロフィールサマリー */}
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-8">
          <h2 className="font-bold text-sm text-gray-500 mb-3">プロフィール</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">スキル: </span>
              <span className="font-medium">{seeker.skills.join("、") || "未登録"}</span>
            </div>
            <div>
              <span className="text-gray-500">希望給与: </span>
              <span className="font-medium">
                {seeker.preferred_salary_min > 0
                  ? seeker.preferred_employment_type === "part_time"
                    ? `時給${seeker.preferred_salary_min.toLocaleString()}円〜`
                    : `月給${(seeker.preferred_salary_min / 10000).toFixed(0)}万円〜`
                  : "こだわらない"}
              </span>
            </div>
            <div>
              <span className="text-gray-500">働き方: </span>
              <span className="font-medium">{seeker.preferred_work_style.join("、") || "未登録"}</span>
            </div>
            <div>
              <span className="text-gray-500">自己PR: </span>
              <span className="font-medium">{seeker.self_introduction.slice(0, 50)}...</span>
            </div>
          </div>
        </div>

        {/* おすすめ求人一覧 */}
        <h2 className="text-xl font-bold mb-6">
          {seeker.name}さんにおすすめの求人
        </h2>
        <div className="space-y-6">
          {results.map(({ job, score, reasons }, rank) => (
            <div
              key={job.id}
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
                      href={`/matching/job/${job.id}`}
                      className="font-bold text-base hover:text-teal-600 transition-colors"
                    >
                      {job.clinic?.name ?? ""}
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{JOB_TYPE_LABELS[job.job_type]}</span>
                      <span>/</span>
                      <span>{job.city}</span>
                      <span>/</span>
                      <span>月給{(job.salary_min / 10000).toFixed(0)}万〜</span>
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

              {/* 求人詳細リンク */}
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <p className="text-xs text-gray-500 truncate mr-2">{job.title}</p>
                <Link
                  href={`/jobs/${job.id}`}
                  className="text-xs text-rose-600 font-medium hover:underline shrink-0"
                >
                  求人詳細 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
