// DentalAI Match - ヘッダーコンポーネント（全ページ共通のナビゲーション）
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-rose-600 to-rose-700 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-sm tracking-tight">AI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-tight tracking-tight">
                DentalAI Match
              </span>
              <span className="text-[10px] text-gray-400 leading-tight hidden sm:block">
                歯科専門 求人プラットフォーム
              </span>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-rose-600 px-3 py-2 rounded-lg hover:bg-rose-50/50 transition-all text-[15px] font-medium"
            >
              求人を探す
            </Link>
            <Link
              href="/register"
              className="text-gray-600 hover:text-rose-600 px-3 py-2 rounded-lg hover:bg-rose-50/50 transition-all text-[15px] font-medium"
            >
              求職者登録
            </Link>
            <Link
              href="/post"
              className="text-gray-600 hover:text-rose-600 px-3 py-2 rounded-lg hover:bg-rose-50/50 transition-all text-[15px] font-medium"
            >
              求人を出す
            </Link>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <Link
              href="/post"
              className="bg-rose-600 text-white px-5 py-2.5 rounded-xl hover:bg-rose-700 transition-colors text-sm font-bold shadow-sm hover:shadow-md"
            >
              求人を掲載する
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link
                href="/jobs"
                className="text-gray-700 hover:text-rose-600 hover:bg-rose-50 py-3 px-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                求人を探す
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-rose-600 hover:bg-rose-50 py-3 px-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                求職者登録
              </Link>
              <Link
                href="/post"
                className="text-gray-700 hover:text-rose-600 hover:bg-rose-50 py-3 px-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                求人を出す（医院向け）
              </Link>
              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link
                  href="/post"
                  className="bg-rose-600 text-white px-4 py-3 rounded-xl text-center hover:bg-rose-700 font-bold block shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  求人を掲載する
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
