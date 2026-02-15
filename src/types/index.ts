// DentalAI Match - 型定義（データの形を決めるファイル）
// 使用方法: import { Job, Clinic } from "@/types"

/** 求人情報 */
export type Job = {
  id: string;
  clinic_id: string;
  title: string;
  job_type: JobType;
  employment_type: EmploymentType;
  salary_min: number;
  salary_max: number;
  description: string;
  requirements: string;
  benefits: string;
  prefecture: string;
  city: string;
  address: string;
  working_hours: string;
  holidays: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  clinic?: Clinic;
};

/** 職種 */
export type JobType =
  | "dental_hygienist"   // 歯科衛生士
  | "dentist"            // 歯科医師
  | "dental_assistant"   // 歯科助手
  | "dental_technician"; // 歯科技工士

/** 雇用形態 */
export type EmploymentType =
  | "full_time"    // 正社員
  | "part_time"    // パート・アルバイト
  | "contract";    // 契約社員

/** 歯科医院情報 */
export type Clinic = {
  id: string;
  name: string;
  description: string;
  prefecture: string;
  city: string;
  address: string;
  phone: string;
  website?: string;
  employee_count: number;
  established_year: number;
  features: string[];
  image_url?: string;
  created_at: string;
};

/** 求職者情報 */
export type JobSeeker = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  job_type: JobType;
  experience_years: number;
  skills: string[];
  preferred_prefecture: string;
  preferred_city: string;
  preferred_employment_type: EmploymentType;
  preferred_salary_min: number;
  preferred_work_style: string[];
  self_introduction: string;
  motivation?: string;
  created_at: string;
};

/** 応募情報 */
export type Application = {
  id: string;
  job_id: string;
  seeker_id: string;
  message: string;
  status: "pending" | "reviewing" | "interview" | "accepted" | "rejected";
  created_at: string;
};

/** 職種の日本語ラベル */
export const JOB_TYPE_LABELS: Record<JobType, string> = {
  dental_hygienist: "歯科衛生士",
  dentist: "歯科医師",
  dental_assistant: "歯科助手",
  dental_technician: "歯科技工士",
};

/** 雇用形態の日本語ラベル */
export const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  full_time: "正社員",
  part_time: "パート・アルバイト",
  contract: "契約社員",
};

/** 都道府県リスト */
export const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];
