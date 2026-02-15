# AI統合アーキテクチャ

## 概要
DentalAI Match の AIマッチング機能の設計ドキュメント。
現在はモックモード（ダミー応答）で動作し、API課金は発生しない。

## 対応ファイル
```
src/lib/ai/
  types.ts           -- 型定義（interface）
  ai-client.ts       -- モック/本物を切り替えるファクトリー
  mock-client.ts     -- ダミー応答を返すモック実装
  matching-engine.ts -- マッチングスコア計算ロジック
  prompts.ts         -- 将来のAPI用プロンプトテンプレート
```

## アーキテクチャ

### インターフェース（IAIClient）
```
analyzeMatch(job, candidates) → AIMatchResult[]
generateRecommendation(job, candidate) → string
```

### モック/本番の切り替え
- `.env.local` の `NEXT_PUBLIC_AI_MODE` で制御
  - `mock`（デフォルト）: MockAIClient を使用。API課金ゼロ
  - `live`: 将来の本番用クライアント。`ANTHROPIC_API_KEY` が必要

### マッチングスコア計算
`matching-engine.ts` でルールベースのスコア計算を行う。

**加重配分:**
| カテゴリ | 重み | 説明 |
|---------|------|------|
| 職種マッチ | 30% | 同じ職種なら100点 |
| スキルマッチ | 20% | 求人要件とのスキル一致率 |
| 勤務地マッチ | 20% | 都道府県・市区町村の一致 |
| 給与マッチ | 15% | 希望給与を満たすか |
| 経験マッチ | 15% | 臨床経験年数 |

### 本番切り替え手順
1. `.env.local` で `NEXT_PUBLIC_AI_MODE=live` に変更
2. `ANTHROPIC_API_KEY=sk-ant-xxxxx` を設定
3. `src/lib/ai/` に `real-client.ts` を追加実装
4. `ai-client.ts` のファクトリーで `RealAIClient` を返すように変更

## インプット・アウトプット

### analyzeMatch
- **インプット**: JobProfile（求人情報）, CandidateProfile[]（求職者配列）
- **アウトプット**: AIMatchResult[]（スコア降順でソート済み）

### AIMatchResult の構造
```typescript
{
  candidateId: string;
  candidateName: string;
  matchScore: number;       // 0〜100
  reasons: MatchReason[];   // カテゴリ別スコアと理由
  recommendation: string;   // AIからの推薦コメント
}
```
