// DentalAI Match - モッククライアント（ダミー応答を返す）
// APIキーなしで動作する開発用モック。本番ではreal-clientに切り替える
// 使用方法: import { MockAIClient } from "@/lib/ai/mock-client"

import {
  IAIClient,
  AIMatchResult,
  CandidateProfile,
  JobProfile,
} from "./types";
import { calculateMatchScore } from "./matching-engine";

/** ダミー応答を返すモッククライアント */
export class MockAIClient implements IAIClient {
  /** 疑似的な遅延（本番APIっぽく見せる） */
  private async simulateDelay(): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(resolve, 300 + Math.random() * 500)
    );
  }

  /** 求人に対する候補者のマッチング分析 */
  async analyzeMatch(
    job: JobProfile,
    candidates: CandidateProfile[]
  ): Promise<AIMatchResult[]> {
    await this.simulateDelay();

    const results: AIMatchResult[] = candidates
      .map((candidate) => {
        const { score, reasons } = calculateMatchScore(job, candidate);
        return {
          candidateId: candidate.id,
          candidateName: candidate.name,
          matchScore: score,
          reasons,
          recommendation: this.generateMockRecommendation(job, candidate, score),
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore); // スコア順

    return results;
  }

  /** 候補者への推薦コメント生成 */
  async generateRecommendation(
    job: JobProfile,
    candidate: CandidateProfile
  ): Promise<string> {
    await this.simulateDelay();
    const { score } = calculateMatchScore(job, candidate);
    return this.generateMockRecommendation(job, candidate, score);
  }

  /** モック用の推薦コメントを生成 */
  private generateMockRecommendation(
    job: JobProfile,
    candidate: CandidateProfile,
    score: number
  ): string {
    if (score >= 80) {
      return `${candidate.name}さんは${job.title}に非常に適した候補者です。${candidate.experienceYears}年の経験と${candidate.skills.slice(0, 2).join("・")}のスキルが求人要件と高い水準でマッチしています。面接をお勧めします。`;
    }
    if (score >= 60) {
      return `${candidate.name}さんは${job.title}に適した候補者の可能性があります。経験年数は${candidate.experienceYears}年で、${candidate.preferredPrefecture}エリアでの勤務を希望されています。詳細な面談で相性を確認されることをお勧めします。`;
    }
    return `${candidate.name}さんは一部の条件でマッチしています。${candidate.preferredPrefecture}在住で、${candidate.jobType === job.jobType ? "同じ職種" : "異なる職種"}の方です。条件面での調整が可能であればご検討ください。`;
  }
}
