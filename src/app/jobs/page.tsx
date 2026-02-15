// DentalAI Match - 求人一覧・検索ページ
// 求職者が条件を指定して求人を検索・閲覧するページ
"use client";

import { useState, useMemo } from "react";
import { searchJobs } from "@/lib/dummy-data";
import JobCard from "@/components/JobCard";
import {
  JOB_TYPE_LABELS,
  EMPLOYMENT_TYPE_LABELS,
  PREFECTURES,
} from "@/types";

export default function JobsPage() {
  const [jobType, setJobType] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const results = useMemo(() => {
    return searchJobs({
      jobType: jobType || undefined,
      prefecture: prefecture || undefined,
      employmentType: employmentType || undefined,
      keyword: keyword || undefined,
    });
  }, [jobType, prefecture, employmentType, keyword]);

  const hasFilters = jobType || prefecture || employmentType || keyword;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヘッダー */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">求人を探す</h1>
              <p className="text-gray-500 text-sm">
                {results.length}件の求人が見つかりました
              </p>
            </div>
            {/* モバイルフィルターボタン */}
            <button
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              絞り込み
              {hasFilters && (
                <span className="w-2 h-2 bg-rose-600 rounded-full" />
              )}
            </button>
          </div>

          {/* クイック検索バー */}
          <div className="mt-6">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="キーワードで検索（医院名、エリア、条件など）"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 検索フィルター - デスクトップ */}
          <aside className={`lg:w-72 shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-base flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  条件を絞り込む
                </h2>
                {hasFilters && (
                  <button
                    onClick={() => {
                      setJobType("");
                      setPrefecture("");
                      setEmploymentType("");
                      setKeyword("");
                    }}
                    className="text-xs text-rose-600 hover:text-rose-700 font-medium"
                  >
                    リセット
                  </button>
                )}
              </div>

              {/* 職種 */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  職種
                </label>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50"
                >
                  <option value="">すべての職種</option>
                  {Object.entries(JOB_TYPE_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 都道府県 */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  エリア
                </label>
                <select
                  value={prefecture}
                  onChange={(e) => setPrefecture(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50"
                >
                  <option value="">すべてのエリア</option>
                  {PREFECTURES.map((pref) => (
                    <option key={pref} value={pref}>
                      {pref}
                    </option>
                  ))}
                </select>
              </div>

              {/* 雇用形態 */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  雇用形態
                </label>
                <select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50"
                >
                  <option value="">すべての雇用形態</option>
                  {Object.entries(EMPLOYMENT_TYPE_LABELS).map(
                    ([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* モバイル用閉じるボタン */}
              <button
                className="lg:hidden w-full bg-rose-600 text-white py-2.5 rounded-xl font-bold text-sm mt-2"
                onClick={() => setIsFilterOpen(false)}
              >
                {results.length}件の求人を見る
              </button>

              {/* AIマッチング予告 */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="bg-rose-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-rose-800">AIおすすめ機能</p>
                      <p className="text-xs text-rose-600 mt-1">
                        あなたに合った求人をAIがおすすめする機能を開発中です
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* 求人リスト */}
          <div className="flex-1">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  条件に合う求人が見つかりませんでした
                </h3>
                <p className="text-gray-500 mb-4">
                  検索条件を変更してもう一度お試しください
                </p>
                <button
                  onClick={() => {
                    setJobType("");
                    setPrefecture("");
                    setEmploymentType("");
                    setKeyword("");
                  }}
                  className="text-rose-600 hover:text-rose-700 font-semibold text-sm"
                >
                  条件をリセット
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
