// DentalAI Match - 求職者登録ページ
// 歯科衛生士・歯科医師・歯科助手が自分のプロフィールを登録するページ
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  JOB_TYPE_LABELS,
  EMPLOYMENT_TYPE_LABELS,
  PREFECTURES,
} from "@/types";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: 基本情報
    name: "",
    email: "",
    phone: "",
    jobType: "dental_hygienist",
    // Step 2: 経験・スキル
    experienceYears: "",
    currentStatus: "looking", // looking, employed, not_looking
    licenses: [] as string[],
    skills: [] as string[],
    // Step 3: 希望条件
    preferredPrefecture: "愛知県",
    preferredCity: "",
    preferredEmploymentType: "full_time",
    preferredSalaryMin: "",
    preferredWorkStyle: [] as string[],
    availableDate: "",
    // Step 4: 自己PR
    selfIntroduction: "",
    motivation: "",
  });

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    const current = formData[field as keyof typeof formData] as string[];
    if (current.includes(item)) {
      updateField(field, current.filter((i) => i !== item));
    } else {
      updateField(field, [...current, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return true;
      case 3:
        return formData.preferredPrefecture;
      case 4:
        return true;
      default:
        return false;
    }
  };

  // スキル選択肢（職種ごと）
  const skillOptions: Record<string, string[]> = {
    dental_hygienist: [
      "SRP", "歯周治療", "予防処置", "ホワイトニング",
      "インプラントメンテナンス", "小児対応", "訪問歯科",
      "口腔ケア", "TBI（歯磨き指導）", "レントゲン撮影",
    ],
    dentist: [
      "一般歯科", "小児歯科", "矯正歯科", "口腔外科",
      "インプラント", "審美歯科", "歯周病治療",
      "根管治療", "訪問歯科", "予防歯科",
    ],
    dental_assistant: [
      "受付対応", "レセプト", "アシスト業務", "器具の滅菌",
      "在庫管理", "患者対応", "電話対応", "会計業務",
    ],
    dental_technician: [
      "クラウン・ブリッジ", "義歯", "インプラント上部構造",
      "矯正装置", "CAD/CAM", "セラミック", "金属床",
    ],
  };

  // 希望する働き方
  const workStyleOptions = [
    "残業なし", "週休2日以上", "時短勤務OK", "託児所あり",
    "車通勤OK", "駅近", "研修充実", "ブランクOK",
    "扶養内OK", "副業OK", "見学してから決めたい",
  ];

  const steps = [
    { num: 1, label: "基本情報", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { num: 2, label: "経験・スキル", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { num: 3, label: "希望条件", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { num: 4, label: "自己PR", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
  ];

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">登録が完了しました！</h1>
          <p className="text-gray-600 mb-6">
            あなたの希望条件に合う求人が見つかったら、すぐにお知らせします。
          </p>
          <div className="bg-rose-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-rose-900 mb-4">次のステップ</h3>
            <ul className="space-y-3 text-rose-800">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>プロフィール登録完了</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AIがあなたに合う求人を分析中...（順次導入）</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>マッチする求人が見つかったらメールでお知らせ</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>気になる求人に直接応募</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-rose-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors"
            >
              求人を探してみる
            </Link>
            <Link
              href="/"
              className="border border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors"
            >
              トップに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* ヘッダー + メリット訴求 */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            求職者登録
          </h1>
          <p className="text-gray-500 mb-6">
            あなたに合った求人をAIがお探しします（順次導入）。登録は完全無料です。
          </p>

          {/* 登録メリット */}
          <div className="bg-gradient-to-r from-rose-600 to-rose-700 rounded-2xl p-6 text-white mb-6">
            <h2 className="font-bold text-lg mb-4">登録するメリット</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">希望に合う求人をお知らせ</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">医院と直接やり取り可能</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">すべて完全無料で利用</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">自分のペースで転職活動</span>
              </div>
            </div>
          </div>
        </div>

        {/* 安心ポイント（目立つバナー） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-green-800 text-sm">営業電話は一切なし</p>
              <p className="text-xs text-green-600">しつこい勧誘はしません</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3">
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-rose-800 text-sm">完全無料で利用</p>
              <p className="text-xs text-rose-600">費用は一切かかりません</p>
            </div>
          </div>
        </div>

        {/* ステッププログレス（モダンデザイン） */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      step > s.num
                        ? "bg-green-500 text-white"
                        : step === s.num
                        ? "bg-rose-600 text-white shadow-md shadow-rose-200"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step > s.num ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-[11px] mt-1.5 font-medium ${
                      step >= s.num ? "text-rose-600" : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 3 && (
                  <div
                    className={`hidden sm:block h-0.5 w-full mx-1 rounded transition-colors ${
                      step > s.num ? "bg-green-400" : "bg-gray-100"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: 基本情報 */}
          {step === 1 && (
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                基本情報
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="例: 山田 花子"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="example@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                  <p className="text-xs text-gray-400 mt-1.5">
                    求人のお知らせをお送りします
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    電話番号（任意）
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="090-XXXX-XXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                  <p className="text-xs text-gray-400 mt-1.5">
                    営業電話は一切しません。医院との連絡用です。
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    職種 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.jobType}
                    onChange={(e) => updateField("jobType", e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-base"
                  >
                    {Object.entries(JOB_TYPE_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    現在の状況
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "looking", label: "転職先を探している" },
                      { value: "employed", label: "今は働いているが、良い職場があれば転職したい" },
                      { value: "not_looking", label: "今は転職を考えていないが、情報は見たい" },
                      { value: "blank", label: "ブランクがあり、復職を考えている" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.currentStatus === opt.value
                            ? "border-rose-500 bg-rose-50 shadow-sm"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="currentStatus"
                          value={opt.value}
                          checked={formData.currentStatus === opt.value}
                          onChange={(e) =>
                            updateField("currentStatus", e.target.value)
                          }
                          className="text-rose-600"
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Step 2: 経験・スキル */}
          {step === 2 && (
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                経験・スキル
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    経験年数
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) =>
                      updateField("experienceYears", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-base"
                  >
                    <option value="">選択してください</option>
                    <option value="0">未経験・新卒</option>
                    <option value="1">1年未満</option>
                    <option value="2">1〜3年</option>
                    <option value="5">3〜5年</option>
                    <option value="10">5〜10年</option>
                    <option value="15">10年以上</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    得意なこと・できること（複数選択OK）
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(skillOptions[formData.jobType] || []).map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleArrayItem("skills", skill)}
                        className={`text-sm px-4 py-2 rounded-full border transition-all ${
                          formData.skills.includes(skill)
                            ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                            : "bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Step 3: 希望条件 */}
          {step === 3 && (
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                希望条件
              </h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">
                      希望エリア（都道府県）
                    </label>
                    <select
                      value={formData.preferredPrefecture}
                      onChange={(e) =>
                        updateField("preferredPrefecture", e.target.value)
                      }
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-base"
                    >
                      {PREFECTURES.map((pref) => (
                        <option key={pref} value={pref}>
                          {pref}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">
                      希望エリア（市区町村）
                    </label>
                    <input
                      type="text"
                      value={formData.preferredCity}
                      onChange={(e) =>
                        updateField("preferredCity", e.target.value)
                      }
                      placeholder="例: 名古屋市千種区"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    希望雇用形態
                  </label>
                  <select
                    value={formData.preferredEmploymentType}
                    onChange={(e) =>
                      updateField("preferredEmploymentType", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-base"
                  >
                    {Object.entries(EMPLOYMENT_TYPE_LABELS).map(
                      ([key, label]) => (
                        <option key={key} value={key}>
                          {label}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    希望月給（下限）
                  </label>
                  <select
                    value={formData.preferredSalaryMin}
                    onChange={(e) =>
                      updateField("preferredSalaryMin", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-base"
                  >
                    <option value="">こだわらない</option>
                    <option value="200000">20万円以上</option>
                    <option value="250000">25万円以上</option>
                    <option value="280000">28万円以上</option>
                    <option value="300000">30万円以上</option>
                    <option value="350000">35万円以上</option>
                    <option value="400000">40万円以上</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    希望する働き方（複数選択OK）
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {workStyleOptions.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() =>
                          toggleArrayItem("preferredWorkStyle", style)
                        }
                        className={`text-sm px-4 py-2 rounded-full border transition-all ${
                          formData.preferredWorkStyle.includes(style)
                            ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                            : "bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    入職可能時期
                  </label>
                  <select
                    value={formData.availableDate}
                    onChange={(e) =>
                      updateField("availableDate", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-base"
                  >
                    <option value="">選択してください</option>
                    <option value="immediately">すぐに働ける</option>
                    <option value="1month">1ヶ月以内</option>
                    <option value="2months">2ヶ月以内</option>
                    <option value="3months">3ヶ月以内</option>
                    <option value="undecided">時期は未定</option>
                  </select>
                </div>
              </div>
            </section>
          )}

          {/* Step 4: 自己PR */}
          {step === 4 && (
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                自己PR（任意）
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    自己PR
                  </label>
                  <textarea
                    rows={4}
                    value={formData.selfIntroduction}
                    onChange={(e) =>
                      updateField("selfIntroduction", e.target.value)
                    }
                    placeholder="あなたの強みや経験をアピールしてください。空欄でもOKです。"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    転職で大切にしていること
                  </label>
                  <textarea
                    rows={3}
                    value={formData.motivation}
                    onChange={(e) =>
                      updateField("motivation", e.target.value)
                    }
                    placeholder="例: 人間関係の良い職場で長く働きたい、スキルアップできる環境が良い、など"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                </div>

                {/* 登録内容プレビュー */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-sm mb-3 text-gray-700">
                    登録内容の確認
                  </h3>
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex">
                      <dt className="w-28 text-gray-500 shrink-0">お名前</dt>
                      <dd className="font-medium">{formData.name || "未入力"}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-28 text-gray-500 shrink-0">職種</dt>
                      <dd className="font-medium">
                        {JOB_TYPE_LABELS[formData.jobType as keyof typeof JOB_TYPE_LABELS]}
                      </dd>
                    </div>
                    <div className="flex">
                      <dt className="w-28 text-gray-500 shrink-0">希望エリア</dt>
                      <dd className="font-medium">
                        {formData.preferredPrefecture} {formData.preferredCity}
                      </dd>
                    </div>
                    <div className="flex">
                      <dt className="w-28 text-gray-500 shrink-0">雇用形態</dt>
                      <dd className="font-medium">
                        {EMPLOYMENT_TYPE_LABELS[formData.preferredEmploymentType as keyof typeof EMPLOYMENT_TYPE_LABELS]}
                      </dd>
                    </div>
                    {formData.skills.length > 0 && (
                      <div className="flex">
                        <dt className="w-28 text-gray-500 shrink-0">スキル</dt>
                        <dd className="font-medium">
                          {formData.skills.join("、")}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </section>
          )}

          {/* 同意チェックボックス（最終ステップのみ表示） */}
          {step === 4 && (
            <div className="flex items-start gap-3 mt-8 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <input
                type="checkbox"
                id="consent-register"
                required
                className="mt-1 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
              />
              <label htmlFor="consent-register" className="text-sm text-gray-600">
                <Link href="/privacy" target="_blank" className="text-rose-600 underline hover:text-rose-700">プライバシーポリシー</Link>
                および
                <Link href="/terms" target="_blank" className="text-rose-600 underline hover:text-rose-700">利用規約</Link>
                に同意します
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>
          )}

          {/* ナビゲーションボタン */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                戻る
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                disabled={!canProceed()}
                onClick={() => setStep(step + 1)}
                className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                  canProceed()
                    ? "bg-rose-600 text-white hover:bg-rose-700 shadow-sm hover:shadow-md"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                次へ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="bg-rose-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                登録する（無料）
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
          </div>
        </form>

        {/* 安心ポイント（下部） */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-bold text-center text-sm text-gray-700 mb-4">安心してご利用いただけます</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-3">
              <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">個人情報保護</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                あなたの情報は厳重に管理。
                医院に公開する範囲は自分で選べます。
              </p>
            </div>
            <div className="text-center p-3">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">営業電話なし</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                しつこい電話は一切しません。
                すべて自分のペースで。
              </p>
            </div>
            <div className="text-center p-3">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">完全無料</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                登録も利用もすべて無料。
                費用は一切かかりません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
