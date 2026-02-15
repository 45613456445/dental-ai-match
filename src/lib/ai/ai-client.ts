// DentalAI Match - AIクライアントファクトリー（モック/本物を切り替える）
// 環境変数 NEXT_PUBLIC_AI_MODE で動作モードを制御する
// 使用方法: import { getAIClient } from "@/lib/ai/ai-client"
//
// デフォルトはモックモード（課金なし）
// 本番切り替え: .env.local で NEXT_PUBLIC_AI_MODE=live, ANTHROPIC_API_KEY=sk-... を設定

import { IAIClient } from "./types";
import { MockAIClient } from "./mock-client";

/** AIクライアントのシングルトン */
let clientInstance: IAIClient | null = null;

/** 現在のAIモードを取得 */
export function getAIMode(): "mock" | "live" {
  const mode = process.env.NEXT_PUBLIC_AI_MODE ?? "mock";
  return mode === "live" ? "live" : "mock";
}

/** AIクライアントを取得する（シングルトン） */
export function getAIClient(): IAIClient {
  if (clientInstance) return clientInstance;

  const mode = getAIMode();

  if (mode === "live") {
    // TODO: 本番用クライアント実装
    // const apiKey = process.env.ANTHROPIC_API_KEY;
    // if (!apiKey) throw new Error("ANTHROPIC_API_KEY が設定されていません");
    // clientInstance = new RealAIClient(apiKey);
    console.warn(
      "[DentalAI Match] live モードは未実装です。モックモードで動作します。"
    );
    clientInstance = new MockAIClient();
  } else {
    clientInstance = new MockAIClient();
  }

  return clientInstance;
}
