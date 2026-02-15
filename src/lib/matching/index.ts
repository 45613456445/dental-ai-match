// DentalAI Match - バッチマッチングパイプライン
// 全求職者×全求人のマッチングを一括計算する
// 使用方法: import { runBatchMatching, jobToProfile, seekerToProfile } from "@/lib/matching"

import { Job, JobSeeker } from "@/types";
import { CandidateProfile, JobProfile, MatchReason } from "@/lib/ai/types";
import { calculateMatchScore } from "@/lib/ai/matching-engine";

/** 個別のマッチング結果 */
export type MatchResult = {
  seekerId: string;
  seekerName: string;
  jobId: string;
  jobTitle: string;
  clinicName: string;
  score: number;
  reasons: MatchReason[];
};

/** 求職者ごとのマッチング結果 */
export type SeekerMatchResults = {
  seeker: JobSeeker;
  matches: MatchResult[];
};

/** 求人ごとのマッチング結果 */
export type JobMatchResults = {
  job: Job;
  matches: MatchResult[];
};

/** バッチマッチング全体の結果 */
export type BatchMatchResults = {
  bySeekers: SeekerMatchResults[];
  byJobs: JobMatchResults[];
  all: MatchResult[];
};

/** Job → JobProfile 変換 */
export function jobToProfile(job: Job): JobProfile {
  return {
    id: job.id,
    title: job.title,
    jobType: job.job_type,
    employmentType: job.employment_type,
    salaryMin: job.salary_min,
    salaryMax: job.salary_max,
    prefecture: job.prefecture,
    city: job.city,
    features: job.clinic?.features ?? [],
    requirements: job.requirements,
    description: job.description,
    benefits: job.benefits,
    holidays: job.holidays,
    workingHours: job.working_hours,
  };
}

/** JobSeeker → CandidateProfile 変換 */
export function seekerToProfile(seeker: JobSeeker): CandidateProfile {
  return {
    id: seeker.id,
    name: seeker.name,
    jobType: seeker.job_type,
    experienceYears: seeker.experience_years,
    skills: seeker.skills,
    preferredPrefecture: seeker.preferred_prefecture,
    preferredCity: seeker.preferred_city,
    preferredSalaryMin: seeker.preferred_salary_min,
    preferredWorkStyle: seeker.preferred_work_style,
    preferredEmploymentType: seeker.preferred_employment_type,
    selfIntroduction: seeker.self_introduction,
  };
}

/** 全組み合わせのマッチングを一括計算 */
export function runBatchMatching(
  jobs: Job[],
  seekers: JobSeeker[]
): BatchMatchResults {
  const all: MatchResult[] = [];

  for (const seeker of seekers) {
    const candidateProfile = seekerToProfile(seeker);
    for (const job of jobs) {
      const jobProfile = jobToProfile(job);
      const { score, reasons } = calculateMatchScore(jobProfile, candidateProfile);
      all.push({
        seekerId: seeker.id,
        seekerName: seeker.name,
        jobId: job.id,
        jobTitle: job.title,
        clinicName: job.clinic?.name ?? "",
        score,
        reasons,
      });
    }
  }

  // 求職者別にグループ化（スコア降順）
  const bySeekers: SeekerMatchResults[] = seekers.map((seeker) => ({
    seeker,
    matches: all
      .filter((m) => m.seekerId === seeker.id)
      .sort((a, b) => b.score - a.score),
  }));

  // 求人別にグループ化（スコア降順）
  const byJobs: JobMatchResults[] = jobs.map((job) => ({
    job,
    matches: all
      .filter((m) => m.jobId === job.id)
      .sort((a, b) => b.score - a.score),
  }));

  return { bySeekers, byJobs, all };
}
