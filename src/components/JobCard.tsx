// DentalAI Match - 求人カードコンポーネント（求人一覧で使う1枚のカード）
import Link from "next/link";
import { Job, JOB_TYPE_LABELS, EMPLOYMENT_TYPE_LABELS } from "@/types";

type Props = {
  job: Job;
};

/** 給与を表示用にフォーマット */
function formatSalary(min: number, max: number, employmentType: string): string {
  if (employmentType === "part_time") {
    return `時給 ${min.toLocaleString()}〜${max.toLocaleString()}円`;
  }
  return `月給 ${(min / 10000).toFixed(0)}〜${(max / 10000).toFixed(0)}万円`;
}

export default function JobCard({ job }: Props) {
  const jobTypeLabel = JOB_TYPE_LABELS[job.job_type];
  const employmentLabel = EMPLOYMENT_TYPE_LABELS[job.employment_type];

  // 職種ごとのバッジカラー
  const badgeColor: Record<string, string> = {
    dental_hygienist: "bg-pink-50 text-pink-700 border-pink-200",
    dentist: "bg-teal-50 text-teal-700 border-teal-200",
    dental_assistant: "bg-green-50 text-green-700 border-green-200",
    dental_technician: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <Link href={`/jobs/${job.id}`} className="block group">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-rose-200 transition-all duration-200 h-full flex flex-col">
        {/* 上部: バッジ行 + AIおすすめバッジ */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-wrap gap-1.5">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${badgeColor[job.job_type] ?? "bg-gray-50 text-gray-700 border-gray-200"}`}
            >
              {jobTypeLabel}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200">
              {employmentLabel}
            </span>
          </div>
          {/* 新着バッジ */}
          <div className="flex items-center gap-1 bg-teal-50 text-teal-700 px-2 py-1 rounded-lg border border-teal-200 shrink-0">
            <span className="text-[10px] font-bold">NEW</span>
          </div>
        </div>

        {/* タイトル */}
        <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-rose-600 transition-colors">
          {job.title}
        </h3>

        {/* 医院名・場所 */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="truncate">{job.clinic?.name}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{job.prefecture} {job.city}</span>
          </div>
        </div>

        {/* 給与（目立たせる） */}
        <div className="flex items-center gap-2 bg-rose-50 rounded-xl px-4 py-3 mb-4">
          <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-base font-bold text-rose-700">
            {formatSalary(job.salary_min, job.salary_max, job.employment_type)}
          </span>
        </div>

        {/* 特徴タグ（flex-grow で下に固定） */}
        {job.clinic?.features && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-50">
            {job.clinic.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg"
              >
                {feature}
              </span>
            ))}
            {job.clinic.features.length > 4 && (
              <span className="text-xs px-2 py-1 text-gray-400">
                +{job.clinic.features.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
