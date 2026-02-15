// DentalAI Match - マッチングスコア計算ロジック（7因子版）
// 求人と求職者のマッチ度をルールベースで計算する
// 使用方法: import { calculateMatchScore } from "@/lib/ai/matching-engine"

import { CandidateProfile, JobProfile, MatchReason } from "./types";

/** 働き方キーワードマッピング（表記揺れを吸収） */
const WORK_STYLE_KEYWORDS: Record<string, string[]> = {
  "託児所あり": ["託児所", "託児", "保育"],
  "車通勤OK": ["車通勤", "駐車場", "マイカー"],
  "駅近": ["駅近", "駅直結", "駅徒歩"],
  "残業なし": ["残業少なめ", "残業なし", "残業ほぼなし", "定時退社"],
  "週休2日以上": ["週休2日", "週休2.5日", "完全週休2日"],
  "時短勤務OK": ["時短", "短時間", "午前のみ", "午後のみ"],
  "研修充実": ["研修", "セミナー", "学会", "教育"],
  "ブランクOK": ["ブランクOK", "ブランク", "未経験OK"],
  "扶養内OK": ["扶養内", "扶養"],
  "副業OK": ["副業", "Wワーク"],
};

/** 求人と求職者のマッチ度スコアを計算する（7因子） */
export function calculateMatchScore(
  job: JobProfile,
  candidate: CandidateProfile
): { score: number; reasons: MatchReason[] } {
  const reasons: MatchReason[] = [];

  // 1. 職種マッチ（25%）
  const jobTypeScore = job.jobType === candidate.jobType ? 100 : 0;
  reasons.push({
    category: "job_type",
    label: "職種マッチ",
    score: jobTypeScore,
    detail: jobTypeScore > 0
      ? `${candidate.name}さんの職種が求人の募集職種と一致しています`
      : "募集職種と異なります",
  });

  // 2. スキルマッチ（15%）
  const searchTarget = `${job.requirements} ${job.description} ${job.features.join(" ")}`;
  const matchedSkills = candidate.skills.filter(
    (skill) => searchTarget.includes(skill)
  );
  const skillScore =
    candidate.skills.length > 0
      ? Math.round((matchedSkills.length / Math.max(candidate.skills.length, 1)) * 100)
      : 50;
  reasons.push({
    category: "skills",
    label: "スキルマッチ",
    score: skillScore,
    detail:
      matchedSkills.length > 0
        ? `${matchedSkills.join("、")}が求人の要件とマッチしています`
        : "スキル情報を登録するとより正確なマッチングが可能です",
  });

  // 3. 勤務地マッチ（18%）
  const prefMatch = job.prefecture === candidate.preferredPrefecture;
  const cityMatch =
    candidate.preferredCity !== "" && job.city.includes(candidate.preferredCity);
  const locationScore = cityMatch ? 100 : prefMatch ? 70 : 20;
  reasons.push({
    category: "location",
    label: "勤務地マッチ",
    score: locationScore,
    detail: cityMatch
      ? "希望エリアと勤務地が一致しています"
      : prefMatch
      ? "同じ都道府県内の求人です"
      : "希望エリアとは異なりますが、条件面で魅力的です",
  });

  // 4. 給与マッチ（12%）
  const salaryScore =
    candidate.preferredSalaryMin === 0 || job.salaryMax >= candidate.preferredSalaryMin
      ? 100
      : job.salaryMin >= candidate.preferredSalaryMin * 0.9
      ? 70
      : 30;
  reasons.push({
    category: "salary",
    label: "給与マッチ",
    score: salaryScore,
    detail:
      salaryScore >= 100
        ? "希望給与額を満たしています"
        : salaryScore >= 70
        ? "希望給与額に近い水準です"
        : "給与条件に差がありますが、他の条件で魅力的です",
  });

  // 5. 経験年数マッチ（10%）
  const expScore =
    candidate.experienceYears >= 5
      ? 100
      : candidate.experienceYears >= 3
      ? 85
      : candidate.experienceYears >= 1
      ? 60
      : 40;
  reasons.push({
    category: "experience",
    label: "経験マッチ",
    score: expScore,
    detail: `臨床経験${candidate.experienceYears}年の実績があります`,
  });

  // 6. 働き方マッチ（12%）— 新規
  const jobText = `${job.benefits} ${job.features.join(" ")} ${job.holidays} ${job.workingHours}`;
  let workStyleMatched = 0;
  const workStyleDetails: string[] = [];
  if (candidate.preferredWorkStyle.length > 0) {
    for (const pref of candidate.preferredWorkStyle) {
      const keywords = WORK_STYLE_KEYWORDS[pref] || [pref];
      if (keywords.some((kw) => jobText.includes(kw))) {
        workStyleMatched++;
        workStyleDetails.push(pref);
      }
    }
  }
  const workStyleScore =
    candidate.preferredWorkStyle.length > 0
      ? Math.round((workStyleMatched / candidate.preferredWorkStyle.length) * 100)
      : 50;
  reasons.push({
    category: "work_style",
    label: "働き方マッチ",
    score: workStyleScore,
    detail:
      workStyleDetails.length > 0
        ? `${workStyleDetails.join("、")}の条件が合っています`
        : candidate.preferredWorkStyle.length > 0
        ? "希望する働き方の条件は一部異なりますが、ご相談可能な場合があります"
        : "働き方の希望を登録するとより正確なマッチングが可能です",
  });

  // 7. 雇用形態マッチ（8%）— 新規
  const employmentTypeScore =
    job.employmentType === candidate.preferredEmploymentType ? 100 : 20;
  reasons.push({
    category: "employment_type",
    label: "雇用形態マッチ",
    score: employmentTypeScore,
    detail:
      employmentTypeScore >= 100
        ? "希望する雇用形態と一致しています"
        : "雇用形態は異なりますが、他の条件で魅力的です",
  });

  // 加重平均でトータルスコアを計算（7因子）
  const weights = {
    jobType: 0.25,
    skill: 0.15,
    location: 0.18,
    salary: 0.12,
    exp: 0.10,
    workStyle: 0.12,
    employmentType: 0.08,
  };
  const totalScore = Math.round(
    jobTypeScore * weights.jobType +
    skillScore * weights.skill +
    locationScore * weights.location +
    salaryScore * weights.salary +
    expScore * weights.exp +
    workStyleScore * weights.workStyle +
    employmentTypeScore * weights.employmentType
  );

  return { score: totalScore, reasons };
}
