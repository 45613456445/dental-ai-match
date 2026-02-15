// DentalAI Match - 将来のAPI用プロンプトテンプレート
// Claude API を使う際のプロンプトテンプレートを定義する
// 使用方法: import { MATCH_ANALYSIS_PROMPT } from "@/lib/ai/prompts"
//
// 現在はモックモードのため未使用。live モード切り替え時に使用する。

/** 求人と候補者のマッチング分析プロンプト */
export const MATCH_ANALYSIS_PROMPT = `
あなたは歯科業界の採用コンサルタントAIです。
以下の求人情報と候補者情報を分析し、マッチ度を評価してください。

## 求人情報
タイトル: {jobTitle}
職種: {jobType}
給与: {salaryRange}
勤務地: {location}
特徴: {features}
仕事内容: {description}
応募条件: {requirements}

## 候補者情報
名前: {candidateName}
職種: {candidateJobType}
経験年数: {experienceYears}年
スキル: {skills}
希望エリア: {preferredArea}
希望給与: {preferredSalary}

## 回答形式
以下のJSON形式で回答してください:
{
  "matchScore": (0-100の数値),
  "reasons": [
    {
      "category": "skills" | "location" | "culture" | "salary" | "experience",
      "label": "(カテゴリの日本語名)",
      "score": (0-100の数値),
      "detail": "(詳細な説明)"
    }
  ],
  "recommendation": "(推薦コメント)"
}
`.trim();

/** 候補者への推薦コメント生成プロンプト */
export const RECOMMENDATION_PROMPT = `
あなたは歯科業界の採用コンサルタントAIです。
以下の求人に対する候補者の推薦コメントを、医院の院長に向けて書いてください。

## 求人情報
{jobInfo}

## 候補者情報
{candidateInfo}

## マッチ度スコア
{matchScore}/100

200文字以内で、候補者の強みと求人との適合性を具体的に述べてください。
`.trim();
