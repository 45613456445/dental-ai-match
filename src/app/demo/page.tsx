// DentalAI Match - デモ体験ページ（使い方シミュレーション）
// 架空キャラクターのストーリーで登録→掲載→検索→応募→マッチング→採用の流れを体験
// 使用方法: /demo にアクセス

import Link from "next/link";
import { getJobById } from "@/lib/dummy-data";
import { calculateMatchScore } from "@/lib/ai/matching-engine";
import type { CandidateProfile, JobProfile } from "@/lib/ai/types";
import { JOB_TYPE_LABELS, EMPLOYMENT_TYPE_LABELS } from "@/types";

// 架空求職者: 佐藤 美咲
const candidate: CandidateProfile = {
  id: "demo-candidate-1",
  name: "佐藤 美咲",
  jobType: "dental_hygienist",
  experienceYears: 5,
  skills: ["歯周病治療", "予防歯科", "SRP", "ホワイトニング"],
  preferredPrefecture: "愛知県",
  preferredCity: "名古屋市",
  preferredSalaryMin: 280000,
  preferredWorkStyle: ["残業なし"],
  preferredEmploymentType: "full_time",
  selfIntroduction:
    "予防歯科に力を入れている医院で、患者さんと長く関われる環境で働きたいと考えています。",
};

export default function DemoPage() {
  // ダミーデータから job-1（さくら歯科クリニック）を取得
  const job = getJobById("job-1")!;
  const clinic = job.clinic!;

  // AIマッチング用のJobProfileを構築
  const jobProfile: JobProfile = {
    id: job.id,
    title: job.title,
    jobType: job.job_type,
    employmentType: job.employment_type,
    salaryMin: job.salary_min,
    salaryMax: job.salary_max,
    prefecture: job.prefecture,
    city: job.city,
    features: clinic.features,
    requirements: job.requirements,
    description: job.description,
    benefits: job.benefits,
    holidays: job.holidays,
    workingHours: job.working_hours,
  };

  // AIマッチングスコアをサーバーサイドで計算
  const matchResult = calculateMatchScore(jobProfile, candidate);

  return (
    <div>
      {/* ===== ヒーローセクション ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-sm mb-8 border border-white/10">
            <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            デモ体験 - 使い方シミュレーション
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            DentalAI Matchの
            <br className="hidden sm:block" />
            <span className="text-teal-300">使い方を体験</span>しよう
          </h1>
          <p className="text-base md:text-lg text-rose-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            架空のキャラクターのストーリーで、登録から採用決定までの
            <br className="hidden md:block" />
            一連の流れをご紹介します。
          </p>
          <p className="text-sm text-rose-200 max-w-xl mx-auto">
            ※ このページの人物・医院はすべて架空のものです。実在の人物・団体とは関係ありません。
          </p>
        </div>
      </section>

      {/* ===== キャラクター紹介 ===== */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-rose-600 font-semibold text-sm mb-6 tracking-wide text-center">CHARACTERS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 佐藤美咲 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">佐藤 美咲</h3>
                    <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full font-medium">求職者</span>
                  </div>
                  <p className="text-sm text-gray-500">28歳・歯科衛生士・臨床経験5年</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 text-xs">&#9679;</span>名古屋市在住
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 text-xs">&#9679;</span>希望月給: 28〜32万円
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 text-xs">&#9679;</span>スキル: 歯周病治療、予防歯科、SRP、ホワイトニング
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 text-xs">&#9679;</span>転職理由: 予防歯科に力を入れている医院で働きたい
                </li>
              </ul>
            </div>

            {/* さくら歯科クリニック */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{clinic.name}</h3>
                    <span className="text-xs bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full font-medium">医院</span>
                  </div>
                  <p className="text-sm text-gray-500">{clinic.city}・院長 山田先生</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs">&#9679;</span>スタッフ{clinic.employee_count}名・開業{new Date().getFullYear() - clinic.established_year}年
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs">&#9679;</span>歯科衛生士を募集中（月給{(job.salary_min / 10000).toFixed(0)}〜{(job.salary_max / 10000).toFixed(0)}万円）
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs">&#9679;</span>特徴: {clinic.features.join("、")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs">&#9679;</span>残業ほぼなし・研修制度充実
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6ステップ ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">DEMO FLOW</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-rose-600">6ステップ</span>で採用完了
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              佐藤さんとさくら歯科クリニックの出会いから採用までの流れを見てみましょう
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* ===== Step 1: 求職者登録 ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-rose-50 px-6 py-4 flex items-center gap-3 border-b border-rose-100">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">佐藤さんが求職者登録する</h3>
                  <p className="text-sm text-gray-500">最短3分で登録完了</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  佐藤さんは、希望条件やスキルを入力して無料で求職者登録します。
                  スマートフォンからでも簡単に入力できます。
                </p>
                {/* モックUI: 登録フォーム */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    画面イメージ（入力済みの状態）
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">お名前</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">佐藤 美咲</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">希望職種</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">歯科衛生士</div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">臨床経験</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">5年</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">希望勤務地</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">愛知県 名古屋市</div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">希望月給</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">28万円〜</div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">スキル・得意分野</label>
                      <div className="flex flex-wrap gap-1.5">
                        {candidate.skills.map((skill) => (
                          <span key={skill} className="bg-rose-50 text-rose-700 text-xs px-2.5 py-1 rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">自己紹介</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">
                        {candidate.selfIntroduction}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="bg-rose-600 text-white text-center py-2.5 rounded-lg text-sm font-bold opacity-80 cursor-default">
                        無料で登録する
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 bg-teal-50 px-4 py-2.5 rounded-lg">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  求職者の登録・利用は完全無料。営業電話も一切ありません。
                </div>
              </div>
            </div>

            {/* ===== Step 2: 求人掲載 ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-teal-50 px-6 py-4 flex items-center gap-3 border-b border-teal-100">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">山田先生が求人を掲載する</h3>
                  <p className="text-sm text-gray-500">最短5分で掲載完了・基本無料</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  山田先生は、さくら歯科クリニックの求人情報を入力して掲載します。
                  法定記載事項も含めた内容で、安心して掲載できます。
                </p>
                {/* モックUI: 求人掲載フォーム */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    画面イメージ（入力済みの状態）
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">求人タイトル</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">{job.title}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">募集職種</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">
                          {JOB_TYPE_LABELS[job.job_type]}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">雇用形態</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">
                          {EMPLOYMENT_TYPE_LABELS[job.employment_type]}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">月給</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">
                          {(job.salary_min / 10000).toFixed(0)}万〜{(job.salary_max / 10000).toFixed(0)}万円
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">勤務地</label>
                        <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">{job.city}</div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">勤務時間</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">{job.working_hours}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">休日</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800">{job.holidays}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">仕事内容</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800 whitespace-pre-line">
                        {job.description}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">福利厚生</label>
                      <div className="bg-white rounded-lg px-3 py-2 text-sm border border-gray-200 text-gray-800 whitespace-pre-line">
                        {job.benefits}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="bg-teal-500 text-white text-center py-2.5 rounded-lg text-sm font-bold opacity-80 cursor-default">
                        求人を掲載する（基本無料）
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 bg-teal-50 px-4 py-2.5 rounded-lg">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  フリープランなら掲載料0円。紹介手数料・成功報酬も一切かかりません。
                </div>
              </div>
            </div>

            {/* ===== Step 3: 求人検索・発見 ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-rose-50 px-6 py-4 flex items-center gap-3 border-b border-rose-100">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">佐藤さんが求人を検索・発見する</h3>
                  <p className="text-sm text-gray-500">条件に合った求人を簡単検索</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  佐藤さんは「歯科衛生士 × 名古屋市」で検索し、条件に合った求人を見つけます。
                </p>
                {/* モックUI: 検索フィルター */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                  <div className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    検索条件
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-rose-100 text-rose-700 text-sm px-3 py-1.5 rounded-lg font-medium">
                      歯科衛生士
                    </span>
                    <span className="bg-rose-100 text-rose-700 text-sm px-3 py-1.5 rounded-lg font-medium">
                      愛知県
                    </span>
                    <span className="bg-rose-100 text-rose-700 text-sm px-3 py-1.5 rounded-lg font-medium">
                      正社員
                    </span>
                  </div>
                </div>
                {/* モックUI: 求人カード */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    検索結果（1件目）
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded font-medium">
                            {JOB_TYPE_LABELS[job.job_type]}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                            {EMPLOYMENT_TYPE_LABELS[job.employment_type]}
                          </span>
                        </div>
                        <h4 className="font-bold text-base text-gray-900">{job.title}</h4>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <p className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {clinic.name}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.city}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        月給 {(job.salary_min / 10000).toFixed(0)}万〜{(job.salary_max / 10000).toFixed(0)}万円
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {clinic.features.map((f) => (
                        <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Step 4: 応募 ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-rose-50 px-6 py-4 flex items-center gap-3 border-b border-rose-100">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">佐藤さんが応募する</h3>
                  <p className="text-sm text-gray-500">仲介者なしで医院に直接応募</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  佐藤さんは求人の詳細を確認し、さくら歯科クリニックに直接応募します。
                  紹介会社を通さないので、スピーディーにやり取りできます。
                </p>
                {/* モックUI: 応募フォーム */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    応募画面イメージ
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 mb-3">
                    <p className="text-xs text-gray-400 mb-1">応募先</p>
                    <p className="font-bold text-sm text-gray-900 mb-3">{clinic.name} — {job.title}</p>
                    <p className="text-xs text-gray-400 mb-1">志望動機・メッセージ</p>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-800 leading-relaxed">
                      はじめまして、佐藤美咲と申します。<br />
                      予防歯科に力を入れておられる貴院の方針に共感し、ぜひ一緒に働かせていただきたいと思い応募しました。<br />
                      臨床経験5年の中で歯周病治療やSRPを中心に取り組んでまいりました。
                      患者さんとじっくり向き合える担当制にも魅力を感じています。<br />
                      まずは見学からでもお願いできれば幸いです。
                    </div>
                  </div>
                  <div className="bg-rose-600 text-white text-center py-2.5 rounded-lg text-sm font-bold opacity-80 cursor-default">
                    この求人に応募する
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 bg-teal-50 px-4 py-2.5 rounded-lg">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  仲介者を通さず直接やり取り。情報が歪まず、スピーディーに進みます。
                </div>
              </div>
            </div>

            {/* ===== Step 5: AIマッチング結果 ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-rose-50 to-teal-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">AIマッチング結果</h3>
                  <p className="text-sm text-gray-500">AIがマッチ度をスコアリング</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  DentalAI MatchのAIエンジンが、佐藤さんとさくら歯科クリニックの相性を分析しました。
                  以下は実際のマッチングエンジンによる計算結果です。
                </p>

                {/* トータルスコア */}
                <div className="bg-gradient-to-br from-rose-50 to-teal-50 rounded-xl p-6 border border-gray-200 mb-5">
                  <div className="text-center mb-5">
                    <p className="text-sm text-gray-500 mb-2">トータルマッチスコア</p>
                    <div className="inline-flex items-baseline gap-1">
                      <span className="text-6xl md:text-7xl font-bold text-rose-600">{matchResult.score}</span>
                      <span className="text-2xl text-gray-400">/100</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {matchResult.score >= 80
                        ? "非常に高いマッチ度です"
                        : matchResult.score >= 60
                        ? "高いマッチ度です"
                        : "マッチの可能性があります"}
                    </p>
                  </div>

                  {/* カテゴリ別スコア */}
                  <div className="space-y-3">
                    {matchResult.reasons.map((reason) => (
                      <div key={reason.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{reason.label}</span>
                          <span className="text-sm font-bold text-gray-900">{reason.score}点</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              reason.score >= 80
                                ? "bg-teal-500"
                                : reason.score >= 60
                                ? "bg-yellow-400"
                                : "bg-gray-400"
                            }`}
                            style={{ width: `${reason.score}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{reason.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2.5 rounded-lg">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  AIマッチング機能は現在開発中です。順次導入を予定しています。
                </div>
              </div>
            </div>

            {/* ===== Step 6: 採用決定 ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-teal-50 px-6 py-4 flex items-center gap-3 border-b border-teal-100">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">採用決定</h3>
                  <p className="text-sm text-gray-500">紹介手数料ゼロ・成功報酬ゼロで採用完了</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  佐藤さんとさくら歯科クリニックは直接やり取りを経て、見学・面接を行い、
                  お互いの相性を確認したうえで採用が決定しました。
                </p>

                {/* フロー図 */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-5">
                  <div className="text-xs text-gray-400 mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    採用までの流れ
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0">
                    {[
                      { label: "応募", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                      { label: "やり取り", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                      { label: "見学", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
                      { label: "面接", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                      { label: "採用決定", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                    ].map((step, i, arr) => (
                      <div key={step.label} className="flex items-center gap-3 md:gap-0 md:flex-1">
                        <div className="flex flex-col items-center gap-1.5 md:flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            i === arr.length - 1 ? "bg-teal-500 text-white" : "bg-white text-gray-600 border border-gray-200"
                          }`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                            </svg>
                          </div>
                          <span className={`text-xs font-medium ${i === arr.length - 1 ? "text-teal-700" : "text-gray-600"}`}>
                            {step.label}
                          </span>
                        </div>
                        {i < arr.length - 1 && (
                          <svg className="w-5 h-5 text-gray-300 shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* コスト強調 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                  <div className="text-center bg-rose-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-rose-600">0円</div>
                    <p className="text-xs text-gray-600 mt-1">紹介手数料</p>
                  </div>
                  <div className="text-center bg-rose-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-rose-600">0円</div>
                    <p className="text-xs text-gray-600 mt-1">成功報酬</p>
                  </div>
                  <div className="text-center bg-teal-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-teal-600">直接</div>
                    <p className="text-xs text-gray-600 mt-1">医院と求職者のやり取り</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-teal-700 bg-teal-50 px-4 py-2.5 rounded-lg">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  従来なら100万円以上かかる紹介手数料が、DentalAI Matchなら0円。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTAセクション ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-rose-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            さあ、始めてみませんか？
          </h2>
          <p className="text-rose-100 mb-10 text-lg max-w-2xl mx-auto">
            佐藤さんのように理想の職場を見つけたい方も、
            山田先生のように良い人材を採用したい方も。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/register"
              className="bg-white text-rose-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              求職者登録（無料）
            </Link>
            <Link
              href="/post"
              className="bg-teal-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              求人を掲載する（基本無料）
            </Link>
          </div>
          <p className="text-rose-200 text-sm">
            求職者登録は完全無料。医院は基本プラン無料から。営業電話は一切ありません。
          </p>
        </div>
      </section>
    </div>
  );
}
