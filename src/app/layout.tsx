// DentalAI Match - ルートレイアウト（全ページ共通の枠組み）
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentalAI Match - 歯科業界の採用を変える",
  description:
    "歯科衛生士・歯科医師・歯科助手の求人マッチングプラットフォーム。基本掲載無料。紹介手数料なし。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased`}>
        {/* デモ版バナー */}
        <div className="bg-gray-900 text-white text-center py-2 text-sm">
          <span className="font-bold">開発中デモ版</span>
          <span className="text-gray-300 ml-2">このサイトは開発中です。表示されている求人・医院はサンプルデータです。</span>
        </div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
