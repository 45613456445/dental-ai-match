// DentalAI Match - 求人詳細ページ
// 求人の詳細情報と応募フォームを表示するページ
"use client";

import { use, useState } from "react";
import Link from "next/link";
import { getJobById } from "@/lib/dummy-data";
import { JOB_TYPE_LABELS, EMPLOYMENT_TYPE_LABELS } from "@/types";

type Props = {
  params: Promise<{ id: string }>;
};

export default function JobDetailPage({ params }: Props) {
  const { id } = use(params);
  const job = getJobById(id);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-4xl mb-4">&#x1f6ab;</div>
        <h1 className="text-2xl font-bold mb-4">求人が見つかりませんでした</h1>
        <Link href="/jobs" className="text-rose-600 hover:underline">
          求人一覧に戻る
        </Link>
      </div>
    );
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setShowApplyForm(false);
  };

  const salaryText =
    job.employment_type === "part_time"
      ? `時給 ${job.salary_min.toLocaleString()}〜${job.salary_max.toLocaleString()}円`
      : `月給 ${(job.salary_min / 10000).toFixed(0)}〜${(job.salary_max / 10000).toFixed(0)}万円`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* パンくず */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-rose-600">
            トップ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/jobs" className="hover:text-rose-600">
            求人一覧
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">求人詳細</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* メインコンテンツ */}
          <div className="flex-1">
            {/* 求人ヘッダー */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-100 text-pink-700">
                  {JOB_TYPE_LABELS[job.job_type]}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                  {EMPLOYMENT_TYPE_LABELS[job.employment_type]}
                </span>
              </div>
              <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-semibold text-gray-900">
                  {job.clinic?.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {job.prefecture} {job.city}
                </span>
              </div>
            </div>

            {/* 給与・勤務条件 */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4 pb-2 border-b">
                募集要項
              </h2>
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                    給与
                  </dt>
                  <dd className="text-rose-600 font-bold text-lg">
                    {salaryText}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                    勤務時間
                  </dt>
                  <dd>{job.working_hours}</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                    休日
                  </dt>
                  <dd>{job.holidays}</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                    勤務地
                  </dt>
                  <dd>{job.address}</dd>
                </div>
              </dl>
            </div>

            {/* 仕事内容 */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4 pb-2 border-b">
                仕事内容
              </h2>
              <p className="whitespace-pre-wrap leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* 応募条件 */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4 pb-2 border-b">
                応募条件
              </h2>
              <p className="whitespace-pre-wrap leading-relaxed">
                {job.requirements}
              </p>
            </div>

            {/* 待遇・福利厚生 */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4 pb-2 border-b">
                待遇・福利厚生
              </h2>
              <p className="whitespace-pre-wrap leading-relaxed">
                {job.benefits}
              </p>
            </div>

            {/* 医院紹介 */}
            {job.clinic && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-bold text-lg mb-4 pb-2 border-b">
                  医院紹介
                </h2>
                <h3 className="font-bold mb-2">{job.clinic.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {job.clinic.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.clinic.features.map((f) => (
                    <span
                      key={f}
                      className="text-sm px-3 py-1 bg-rose-50 text-rose-700 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* サイドバー（応募ボックス） */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-rose-600 mb-1">
                  {salaryText}
                </div>
                <p className="text-sm text-gray-500">
                  {JOB_TYPE_LABELS[job.job_type]} /{" "}
                  {EMPLOYMENT_TYPE_LABELS[job.employment_type]}
                </p>
              </div>

              {applied ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">&#x2705;</div>
                  <p className="font-bold">応募が完了しました！</p>
                  <p className="text-sm mt-1">
                    医院からの連絡をお待ちください
                  </p>
                </div>
              ) : showApplyForm ? (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      お名前
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      メッセージ（任意）
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="自己PRや質問など"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent-apply"
                      required
                      className="mt-1 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="consent-apply" className="text-xs text-gray-600">
                      <Link href="/privacy" target="_blank" className="text-rose-600 underline hover:text-rose-700">プライバシーポリシー</Link>
                      および
                      <Link href="/terms" target="_blank" className="text-rose-600 underline hover:text-rose-700">利用規約</Link>
                      に同意します
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-rose-600 text-white py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors"
                  >
                    応募する
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplyForm(false)}
                    className="w-full text-sm text-gray-500 hover:text-gray-700 py-2"
                  >
                    キャンセル
                  </button>
                </form>
              ) : (
                <>
                  <button
                    onClick={() => setShowApplyForm(true)}
                    className="w-full bg-rose-600 text-white py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors mb-3"
                  >
                    この求人に応募する
                  </button>
                  <p className="text-xs text-center text-gray-400">
                    応募は完全無料です
                  </p>
                </>
              )}

              <div className="mt-6 pt-4 border-t text-xs text-gray-400 space-y-1">
                <p>掲載日: {job.created_at}</p>
                <p>求人ID: {job.id}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
