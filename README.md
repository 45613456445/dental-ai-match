# DentalAI Match

歯科医師が作った、歯科のためのAI求人マッチングプラットフォーム。
掲載も応募も完全無料。

## 技術スタック

- **フレームワーク**: Next.js 16 + React 19
- **スタイリング**: Tailwind CSS v4
- **言語**: TypeScript 5
- **AIマッチング**: Claude Agent SDK（モックモード対応）

## カラーテーマ

- **Primary**: Rose（ローズ系・温かいピンク）
- **Accent**: Teal（ティール系・青緑）
- **背景**: Warm Off-White（#fdf8f6）

## ディレクトリ構成

```
src/
  app/
    page.tsx          -- トップページ（ランディング）
    layout.tsx        -- ルートレイアウト
    globals.css       -- グローバルスタイル・カラー変数
    jobs/
      page.tsx        -- 求人一覧・検索
      [id]/page.tsx   -- 求人詳細・応募
    register/page.tsx -- 求職者登録（4ステップ）
    post/page.tsx     -- 求人投稿（医院向け）
    contact/page.tsx  -- お問い合わせ
    company/page.tsx  -- 運営者情報
    privacy/page.tsx  -- プライバシーポリシー
    terms/page.tsx    -- 利用規約
  components/
    Header.tsx        -- ヘッダー（ナビゲーション）
    Footer.tsx        -- フッター
    JobCard.tsx       -- 求人カード
  lib/
    dummy-data.ts     -- ダミーデータ（開発用）
    ai/
      types.ts        -- AI型定義
      ai-client.ts    -- クライアントファクトリー
      mock-client.ts  -- モック実装
      matching-engine.ts -- スコア計算
      prompts.ts      -- プロンプトテンプレート
  types/
    index.ts          -- 共通型定義
docs/
  globals-css.md      -- カラーシステム説明
  ai-integration.md   -- AI統合アーキテクチャ
```

## 開発方法

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセス。

## AIモード切り替え

`.env.local` で制御:

```env
# モック（デフォルト・課金なし）
NEXT_PUBLIC_AI_MODE=mock

# 本番（APIキー必要）
NEXT_PUBLIC_AI_MODE=live
ANTHROPIC_API_KEY=sk-ant-xxxxx
```
