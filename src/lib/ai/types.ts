// DentalAI Match - AIクライアントの型定義（interface）
// AIマッチング機能で使うデータの形を定義する
// 使用方法: import { AIMatchResult, CandidateProfile } from "@/lib/ai/types"

/** AI分析の結果 */
export type AIMatchResult = {
  candidateId: string;
  candidateName: string;
  matchScore: number;        // 0〜100のマッチ度スコア
  reasons: MatchReason[];    // マッチした理由の配列
  recommendation: string;    // AIからの推薦コメント
};

/** マッチした理由 */
export type MatchReason = {
  category: "skills" | "location" | "culture" | "salary" | "experience" | "job_type" | "work_style" | "employment_type";
  label: string;             // 例: "スキルマッチ"
  score: number;             // 0〜100のカテゴリ別スコア
  detail: string;            // 詳細説明
};

/** 求職者のプロフィール（AI分析用） */
export type CandidateProfile = {
  id: string;
  name: string;
  jobType: string;
  experienceYears: number;
  skills: string[];
  preferredPrefecture: string;
  preferredCity: string;
  preferredSalaryMin: number;
  preferredWorkStyle: string[];
  preferredEmploymentType: string;
  selfIntroduction: string;
};

/** 求人情報（AI分析用） */
export type JobProfile = {
  id: string;
  title: string;
  jobType: string;
  employmentType: string;
  salaryMin: number;
  salaryMax: number;
  prefecture: string;
  city: string;
  features: string[];
  requirements: string;
  description: string;
  benefits: string;
  holidays: string;
  workingHours: string;
};

/** AIクライアントのインターフェース（共通API） */
export interface IAIClient {
  /** 求人に対する候補者のマッチング分析 */
  analyzeMatch(
    job: JobProfile,
    candidates: CandidateProfile[]
  ): Promise<AIMatchResult[]>;

  /** 候補者への推薦コメント生成 */
  generateRecommendation(
    job: JobProfile,
    candidate: CandidateProfile
  ): Promise<string>;
}
