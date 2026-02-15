// DentalAI Match - 求人投稿ページ
// 歯科医院が新しい求人を投稿するフォーム
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  JOB_TYPE_LABELS,
  EMPLOYMENT_TYPE_LABELS,
  PREFECTURES,
} from "@/types";

export default function PostJobPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    clinicName: "",
    clinicDescription: "",
    title: "",
    jobType: "dental_hygienist",
    employmentType: "full_time",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    benefits: "",
    // 法定記載事項（職業安定法 2024年改正）
    employmentPeriod: "",
    employmentPeriodDuration: "",
    probationPeriod: "",
    probationPeriodDuration: "",
    probationPeriodConditions: "",
    smokingPrevention: "",
    fixedOvertimePay: "none",
    fixedOvertimePayAmount: "",
    fixedOvertimePayHours: "",
    fixedOvertimePayExcess: "",
    prefecture: "愛知県",
    city: "",
    address: "",
    workingHours: "",
    holidays: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="text-5xl mb-6">&#x1f389;</div>
          <h1 className="text-2xl font-bold mb-4">求人を投稿しました！</h1>
          <p className="text-gray-600 mb-8">
            内容を確認後、掲載を開始します。
            <br />
            通常1営業日以内に掲載されます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors"
            >
              求人一覧を見る
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  clinicName: "",
                  clinicDescription: "",
                  title: "",
                  jobType: "dental_hygienist",
                  employmentType: "full_time",
                  salaryMin: "",
                  salaryMax: "",
                  description: "",
                  requirements: "",
                  benefits: "",
                  employmentPeriod: "",
                  employmentPeriodDuration: "",
                  probationPeriod: "",
                  probationPeriodDuration: "",
                  probationPeriodConditions: "",
                  smokingPrevention: "",
                  fixedOvertimePay: "none",
                  fixedOvertimePayAmount: "",
                  fixedOvertimePayHours: "",
                  fixedOvertimePayExcess: "",
                  prefecture: "愛知県",
                  city: "",
                  address: "",
                  workingHours: "",
                  holidays: "",
                  contactName: "",
                  contactEmail: "",
                  contactPhone: "",
                });
              }}
              className="border border-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
            >
              もう1件投稿する
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            求人を掲載する
          </h1>
          <p className="text-gray-500">
            掲載は完全無料です。紹介手数料もかかりません。
          </p>
        </div>

        {/* 無料アピール */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">&#x1f4a1;</span>
            <div>
              <p className="font-semibold text-rose-900">
                DentalAI Matchは完全無料です
              </p>
              <p className="text-sm text-rose-700 mt-1">
                求人掲載料：0円 / 紹介手数料：0円 / 成功報酬：0円
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 医院情報 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-6 pb-2 border-b">
              医院情報
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  医院名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.clinicName}
                  onChange={(e) => updateField("clinicName", e.target.value)}
                  placeholder="例: さくら歯科クリニック"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  医院の紹介文
                </label>
                <textarea
                  rows={3}
                  value={formData.clinicDescription}
                  onChange={(e) =>
                    updateField("clinicDescription", e.target.value)
                  }
                  placeholder="医院の特徴や雰囲気を教えてください"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* 求人内容 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-6 pb-2 border-b">
              求人内容
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  求人タイトル <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="例: 【残業なし】歯科衛生士募集！アットホームなクリニック"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    職種 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.jobType}
                    onChange={(e) => updateField("jobType", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    {Object.entries(JOB_TYPE_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    雇用形態 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.employmentType}
                    onChange={(e) =>
                      updateField("employmentType", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    給与（下限） <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.salaryMin}
                    onChange={(e) => updateField("salaryMin", e.target.value)}
                    placeholder="例: 280000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    給与（上限） <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.salaryMax}
                    onChange={(e) => updateField("salaryMax", e.target.value)}
                    placeholder="例: 350000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  仕事内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="具体的な仕事内容を記載してください"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  応募条件
                </label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => updateField("requirements", e.target.value)}
                  placeholder="必要な資格や経験を記載してください"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  待遇・福利厚生
                </label>
                <textarea
                  rows={3}
                  value={formData.benefits}
                  onChange={(e) => updateField("benefits", e.target.value)}
                  placeholder="社会保険、交通費、賞与など"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* 法定記載事項（職業安定法 2024年改正） */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-2 pb-2 border-b">
              法定記載事項
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              職業安定法（2024年改正）により、求人票への記載が義務付けられている項目です。
            </p>
            <div className="space-y-6">
              {/* 雇用期間 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  雇用期間 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.employmentPeriod}
                  onChange={(e) => {
                    updateField("employmentPeriod", e.target.value);
                    if (e.target.value !== "fixed_term") {
                      updateField("employmentPeriodDuration", "");
                    }
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="permanent">期間の定めなし</option>
                  <option value="fixed_term">期間の定めあり</option>
                </select>
                {formData.employmentPeriod === "fixed_term" && (
                  <div className="mt-3 ml-4 p-3 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-semibold mb-1.5">
                      契約期間 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.employmentPeriodDuration}
                      onChange={(e) =>
                        updateField("employmentPeriodDuration", e.target.value)
                      }
                      placeholder="例: 1年間（更新あり）"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* 試用期間 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  試用期間 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.probationPeriod}
                  onChange={(e) => {
                    updateField("probationPeriod", e.target.value);
                    if (e.target.value !== "yes") {
                      updateField("probationPeriodDuration", "");
                      updateField("probationPeriodConditions", "");
                    }
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="none">なし</option>
                  <option value="yes">あり</option>
                </select>
                {formData.probationPeriod === "yes" && (
                  <div className="mt-3 ml-4 p-3 bg-gray-50 rounded-lg space-y-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        試用期間の長さ <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.probationPeriodDuration}
                        onChange={(e) =>
                          updateField("probationPeriodDuration", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      >
                        <option value="" disabled>
                          選択してください
                        </option>
                        <option value="1ヶ月">1ヶ月</option>
                        <option value="2ヶ月">2ヶ月</option>
                        <option value="3ヶ月">3ヶ月</option>
                        <option value="6ヶ月">6ヶ月</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        試用期間中の条件が異なる場合はその内容
                      </label>
                      <textarea
                        rows={3}
                        value={formData.probationPeriodConditions}
                        onChange={(e) =>
                          updateField(
                            "probationPeriodConditions",
                            e.target.value
                          )
                        }
                        placeholder="例: 試用期間中は時給1,200円、社会保険加入は試用期間終了後"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 受動喫煙防止措置 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  受動喫煙防止措置 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.smokingPrevention}
                  onChange={(e) =>
                    updateField("smokingPrevention", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="indoor_no_smoking">屋内禁煙</option>
                  <option value="indoor_principle_no_smoking">
                    屋内原則禁煙（喫煙室あり）
                  </option>
                  <option value="premises_no_smoking">敷地内禁煙</option>
                </select>
              </div>

              {/* 固定残業代 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  固定残業代 <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="fixedOvertimePay"
                      value="none"
                      checked={formData.fixedOvertimePay === "none"}
                      onChange={(e) =>
                        updateField("fixedOvertimePay", e.target.value)
                      }
                      className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm">なし</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="fixedOvertimePay"
                      value="yes"
                      checked={formData.fixedOvertimePay === "yes"}
                      onChange={(e) =>
                        updateField("fixedOvertimePay", e.target.value)
                      }
                      className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm">あり</span>
                  </label>
                </div>
                {formData.fixedOvertimePay === "yes" && (
                  <div className="mt-3 ml-4 p-3 bg-gray-50 rounded-lg space-y-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        固定残業代の金額{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          required
                          value={formData.fixedOvertimePayAmount}
                          onChange={(e) =>
                            updateField(
                              "fixedOvertimePayAmount",
                              e.target.value
                            )
                          }
                          placeholder="例: 30000"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600 shrink-0">
                          円
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        相当する時間数{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          required
                          value={formData.fixedOvertimePayHours}
                          onChange={(e) =>
                            updateField(
                              "fixedOvertimePayHours",
                              e.target.value
                            )
                          }
                          placeholder="例: 20"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600 shrink-0">
                          時間
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        超過分の取り扱い{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fixedOvertimePayExcess}
                        onChange={(e) =>
                          updateField(
                            "fixedOvertimePayExcess",
                            e.target.value
                          )
                        }
                        placeholder="例: 超過分は別途全額支給"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 勤務地・勤務時間 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-6 pb-2 border-b">
              勤務地・勤務時間
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    都道府県 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.prefecture}
                    onChange={(e) => updateField("prefecture", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
                    市区町村 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="例: 名古屋市千種区"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  住所
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  placeholder="例: 名古屋市千種区○○町1-2-3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  勤務時間
                </label>
                <input
                  type="text"
                  value={formData.workingHours}
                  onChange={(e) => updateField("workingHours", e.target.value)}
                  placeholder="例: 9:00〜18:00（休憩90分）"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  休日
                </label>
                <input
                  type="text"
                  value={formData.holidays}
                  onChange={(e) => updateField("holidays", e.target.value)}
                  placeholder="例: 木曜・日曜・祝日"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* 担当者情報 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-6 pb-2 border-b">
              ご担当者情報
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  担当者名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => updateField("contactName", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => updateField("contactEmail", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  電話番号
                </label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => updateField("contactPhone", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* プレビューボタン */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="inline-flex items-center gap-2 border border-rose-600 text-rose-600 px-6 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {showPreview ? "プレビューを閉じる" : "掲載イメージをプレビュー"}
            </button>
          </div>

          {/* プレビュー表示 */}
          {showPreview && (
            <section className="border-2 border-rose-300 rounded-xl overflow-hidden">
              <div className="bg-rose-50 px-6 py-3 border-b border-rose-200">
                <p className="font-bold text-rose-800 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  求人ページのプレビュー（実際の表示イメージです）
                </p>
              </div>
              <div className="bg-gray-50 p-4 md:p-6">
                {/* プレビュー：求人ヘッダー */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-100 text-pink-700">
                      {JOB_TYPE_LABELS[formData.jobType as keyof typeof JOB_TYPE_LABELS]}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                      {EMPLOYMENT_TYPE_LABELS[formData.employmentType as keyof typeof EMPLOYMENT_TYPE_LABELS]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {formData.title || "(求人タイトルが入ります)"}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold text-gray-900">
                      {formData.clinicName || "(医院名が入ります)"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      {formData.prefecture} {formData.city || "(市区町村)"}
                    </span>
                  </div>
                </div>

                {/* プレビュー：募集要項 */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                  <h4 className="font-bold text-lg mb-4 pb-2 border-b">
                    募集要項
                  </h4>
                  <dl className="space-y-3">
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                        給与
                      </dt>
                      <dd className="text-rose-600 font-bold text-lg">
                        {formData.salaryMin && formData.salaryMax
                          ? formData.employmentType === "part_time"
                            ? `時給 ${Number(formData.salaryMin).toLocaleString()}〜${Number(formData.salaryMax).toLocaleString()}円`
                            : `月給 ${(Number(formData.salaryMin) / 10000).toFixed(0)}〜${(Number(formData.salaryMax) / 10000).toFixed(0)}万円`
                          : "(給与が入ります)"}
                      </dd>
                    </div>
                    {formData.workingHours && (
                      <div className="flex flex-col sm:flex-row">
                        <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                          勤務時間
                        </dt>
                        <dd>{formData.workingHours}</dd>
                      </div>
                    )}
                    {formData.holidays && (
                      <div className="flex flex-col sm:flex-row">
                        <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                          休日
                        </dt>
                        <dd>{formData.holidays}</dd>
                      </div>
                    )}
                    {formData.address && (
                      <div className="flex flex-col sm:flex-row">
                        <dt className="font-semibold text-gray-700 sm:w-32 shrink-0 mb-1 sm:mb-0">
                          勤務地
                        </dt>
                        <dd>{formData.address}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* プレビュー：法定記載事項 */}
                {(formData.employmentPeriod ||
                  formData.probationPeriod ||
                  formData.smokingPrevention ||
                  formData.fixedOvertimePay === "yes") && (
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                    <h4 className="font-bold text-lg mb-4 pb-2 border-b">
                      法定記載事項
                    </h4>
                    <dl className="space-y-3">
                      {formData.employmentPeriod && (
                        <div className="flex flex-col sm:flex-row">
                          <dt className="font-semibold text-gray-700 sm:w-40 shrink-0 mb-1 sm:mb-0">
                            雇用期間
                          </dt>
                          <dd>
                            {formData.employmentPeriod === "permanent"
                              ? "期間の定めなし"
                              : `期間の定めあり（${formData.employmentPeriodDuration || "未入力"}）`}
                          </dd>
                        </div>
                      )}
                      {formData.probationPeriod && (
                        <div className="flex flex-col sm:flex-row">
                          <dt className="font-semibold text-gray-700 sm:w-40 shrink-0 mb-1 sm:mb-0">
                            試用期間
                          </dt>
                          <dd>
                            {formData.probationPeriod === "none" ? (
                              "なし"
                            ) : (
                              <div>
                                <span>
                                  あり（
                                  {formData.probationPeriodDuration || "未入力"}
                                  ）
                                </span>
                                {formData.probationPeriodConditions && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    {formData.probationPeriodConditions}
                                  </p>
                                )}
                              </div>
                            )}
                          </dd>
                        </div>
                      )}
                      {formData.smokingPrevention && (
                        <div className="flex flex-col sm:flex-row">
                          <dt className="font-semibold text-gray-700 sm:w-40 shrink-0 mb-1 sm:mb-0">
                            受動喫煙防止措置
                          </dt>
                          <dd>
                            {formData.smokingPrevention === "indoor_no_smoking"
                              ? "屋内禁煙"
                              : formData.smokingPrevention ===
                                  "indoor_principle_no_smoking"
                                ? "屋内原則禁煙（喫煙室あり）"
                                : formData.smokingPrevention ===
                                    "premises_no_smoking"
                                  ? "敷地内禁煙"
                                  : ""}
                          </dd>
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row">
                        <dt className="font-semibold text-gray-700 sm:w-40 shrink-0 mb-1 sm:mb-0">
                          固定残業代
                        </dt>
                        <dd>
                          {formData.fixedOvertimePay === "none" ? (
                            "なし"
                          ) : (
                            <div>
                              <span>
                                {formData.fixedOvertimePayAmount
                                  ? `${Number(formData.fixedOvertimePayAmount).toLocaleString()}円`
                                  : "(金額未入力)"}
                                （
                                {formData.fixedOvertimePayHours
                                  ? `${formData.fixedOvertimePayHours}時間分`
                                  : "時間未入力"}
                                ）
                              </span>
                              {formData.fixedOvertimePayExcess && (
                                <p className="text-sm text-gray-600 mt-1">
                                  {formData.fixedOvertimePayExcess}
                                </p>
                              )}
                            </div>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                {/* プレビュー：仕事内容 */}
                {formData.description && (
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                    <h4 className="font-bold text-lg mb-4 pb-2 border-b">
                      仕事内容
                    </h4>
                    <p className="whitespace-pre-wrap leading-relaxed text-gray-700">
                      {formData.description}
                    </p>
                  </div>
                )}

                {/* プレビュー：応募条件 */}
                {formData.requirements && (
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                    <h4 className="font-bold text-lg mb-4 pb-2 border-b">
                      応募条件
                    </h4>
                    <p className="whitespace-pre-wrap leading-relaxed text-gray-700">
                      {formData.requirements}
                    </p>
                  </div>
                )}

                {/* プレビュー：待遇・福利厚生 */}
                {formData.benefits && (
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                    <h4 className="font-bold text-lg mb-4 pb-2 border-b">
                      待遇・福利厚生
                    </h4>
                    <p className="whitespace-pre-wrap leading-relaxed text-gray-700">
                      {formData.benefits}
                    </p>
                  </div>
                )}

                {/* プレビュー：医院紹介 */}
                {formData.clinicDescription && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-4 pb-2 border-b">
                      医院紹介
                    </h4>
                    <h5 className="font-bold mb-2">
                      {formData.clinicName || "(医院名)"}
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      {formData.clinicDescription}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 同意チェックボックス */}
          <div className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
            <input
              type="checkbox"
              id="consent-post"
              required
              className="mt-1 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <label htmlFor="consent-post" className="text-sm text-gray-600">
              <Link href="/privacy" target="_blank" className="text-rose-600 underline hover:text-rose-700">プライバシーポリシー</Link>
              および
              <Link href="/terms" target="_blank" className="text-rose-600 underline hover:text-rose-700">利用規約</Link>
              に同意します
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-rose-600 text-white px-12 py-4 rounded-xl text-lg font-bold hover:bg-rose-700 transition-colors shadow-lg"
            >
              求人を投稿する
            </button>
            <p className="text-sm text-gray-400 mt-3">
              基本プランは無料。紹介手数料・成功報酬は一切かかりません
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
