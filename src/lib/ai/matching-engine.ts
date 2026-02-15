// DentalAI Match - マッチングスコア計算ロジック
// 求人と求職者のマッチ度をルールベースで計算する
// 使用方法: import { calculateMatchScore } from "@/lib/ai/matching-engine"

import { CandidateProfile, JobProfile, MatchReason } from "./types";

/** 求人と求職者のマッチ度スコアを計算する */
export function calculateMatchScore(
  job: JobProfile,
  candidate: CandidateProfile
): { score: number; reasons: MatchReason[] } {
  const reasons: MatchReason[] = [];

  // 1. 職種マッチ（最重要：30点）
  const jobTypeScore = job.jobType === candidate.jobType ? 100 : 0;
  reasons.push({
    category: "skills",
    label: "職種マッチ",
    score: jobTypeScore,
    detail: jobTypeScore > 0
      ? `${candidate.name}さんの職種が求人の募集職種と一致しています`
      : "募集職種と異なります",
  });

  // 2. スキルマッチ（20点）
  const matchedSkills = candidate.skills.filter(
    (skill) =>
      job.requirements.includes(skill) ||
      job.description.includes(skill) ||
      job.features.some((f) => f.includes(skill))
  );
  const skillScore =
    candidate.skills.length > 0
      ? Math.round((matchedSkills.length / Math.max(candidate.skills.length, 1)) * 100)
      : 50; // スキル未登録なら中間点
  reasons.push({
    category: "skills",
    label: "スキルマッチ",
    score: skillScore,
    detail:
      matchedSkills.length > 0
        ? `${matchedSkills.join("、")}が求人の要件とマッチしています`
        : "スキル情報を登録するとより正確なマッチングが可能です",
  });

  // 3. 勤務地マッチ（20点）
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

  // 4. 給与マッチ（15点）
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

  // 5. 経験年数マッチ（15点）
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

  // 加重平均でトータルスコアを計算
  const weights = { jobType: 0.3, skill: 0.2, location: 0.2, salary: 0.15, exp: 0.15 };
  const totalScore = Math.round(
    jobTypeScore * weights.jobType +
    skillScore * weights.skill +
    locationScore * weights.location +
    salaryScore * weights.salary +
    expScore * weights.exp
  );

  return { score: totalScore, reasons };
}
