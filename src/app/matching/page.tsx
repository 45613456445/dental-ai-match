// DentalAI Match - マッチングダッシュボード
// 全求職者×全求人のマッチ状況一覧を表示する
// 使用方法: /matching にアクセス

import Link from "next/link";
import { getAllJobs, getAllSeekers } from "@/lib/dummy-data";
import { runBatchMatching } from "@/lib/matching";
import { JOB_TYPE_LABELS, EMPLOYMENT_TYPE_LABELS } from "@/types";

/** スコアに応じたバッジカラー */
function scoreBadgeClass(score: number): string {
  if (score >= 80) return "bg-teal-100 text-teal-800";
  if (score >= 60) return "bg-rose-100 text-rose-800";
  return "bg-gray-100 text-gray-600";
}

export default function MatchingDashboard() {
  const jobs = getAllJobs();
  const seekers = getAllSeekers();
  const { bySeekers, byJobs } = runBatchMatching(jobs, seekers);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-sm mb-6 border border-white/10">
            <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            AIマッチングダッシュボード
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            マッチング結果一覧
          </h1>
          <p className="text-rose-100 max-w-2xl mx-auto">
            {seekers.length}名の求職者 x {jobs.length}件の求人 = {seekers.length * jobs.length}ペアの全マッチング結果
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* 統計サマリー */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-rose-600">{seekers.length}</div>
            <div className="text-sm text-gray-500 mt-1">登録求職者</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-teal-600">{jobs.length}</div>
            <div className="text-sm text-gray-500 mt-1">掲載求人</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-rose-600">
              {bySeekers.reduce((sum, s) => sum + s.matches.filter((m) => m.score >= 80).length, 0)}
            </div>
            <div className="text-sm text-gray-500 mt-1">高マッチ（80+）</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-700">
              {seekers.length * jobs.length}
            </div>
            <div className="text-sm text-gray-500 mt-1">分析済みペア</div>
          </div>
        </div>

        {/* 求職者一覧 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            求職者別マッチング
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bySeekers.map(({ seeker, matches }) => {
              const topMatch = matches[0];
              return (
                <Link
                  key={seeker.id}
                  href={`/matching/seeker/${seeker.id}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg group-hover:text-rose-600 transition-colors">
                          {seeker.name}
                        </h3>
                        <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full font-medium">
                          {JOB_TYPE_LABELS[seeker.job_type]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        経験{seeker.experience_years}年 / {seeker.preferred_city || seeker.preferred_prefecture} / {EMPLOYMENT_TYPE_LABELS[seeker.preferred_employment_type]}
                      </p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-lg text-sm font-bold ${scoreBadgeClass(topMatch?.score ?? 0)}`}>
                      最高 {topMatch?.score ?? 0}点
                    </div>
                  </div>
                  {/* トップ3のマッチング */}
                  <div className="space-y-1.5">
                    {matches.slice(0, 3).map((m) => (
                      <div key={m.jobId} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 truncate mr-2">{m.clinicName}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${scoreBadgeClass(m.score)}`}>
                          {m.score}点
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-rose-500 font-medium group-hover:underline">
                    詳細を見る →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 求人一覧 */}
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            求人別マッチング
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {byJobs.map(({ job, matches }) => {
              const topMatch = matches[0];
              return (
                <Link
                  key={job.id}
                  href={`/matching/job/${job.id}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="min-w-0 mr-3">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-base group-hover:text-teal-600 transition-colors truncate">
                          {job.clinic?.name ?? ""}
                        </h3>
                        <span className="text-xs bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full font-medium shrink-0">
                          {JOB_TYPE_LABELS[job.job_type]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {job.city} / {EMPLOYMENT_TYPE_LABELS[job.employment_type]} / 月給{(job.salary_min / 10000).toFixed(0)}万〜
                      </p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-lg text-sm font-bold shrink-0 ${scoreBadgeClass(topMatch?.score ?? 0)}`}>
                      最高 {topMatch?.score ?? 0}点
                    </div>
                  </div>
                  {/* トップ3の候補者 */}
                  <div className="space-y-1.5">
                    {matches.slice(0, 3).map((m) => (
                      <div key={m.seekerId} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{m.seekerName}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${scoreBadgeClass(m.score)}`}>
                          {m.score}点
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-teal-500 font-medium group-hover:underline">
                    詳細を見る →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
