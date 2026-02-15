// DentalAI Match - お問い合わせページ
// サービスに関するお問い合わせフォームを表示するページ
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="text-5xl mb-6">&#x2709;&#xfe0f;</div>
          <h1 className="text-2xl font-bold mb-4">
            お問い合わせを受け付けました
          </h1>
          <p className="text-gray-600 mb-8">
            内容を確認のうえ、2営業日以内にご連絡いたします。
          </p>
          <Link
            href="/"
            className="bg-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors inline-block"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">お問い合わせ</h1>
        <p className="text-gray-500 mb-8">
          サービスに関するご質問・ご要望をお気軽にお寄せください。
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold mb-1.5">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="例: 山田 太郎"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">
              お問い合わせ種別
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500">
              <option>サービスについて</option>
              <option>求人掲載について</option>
              <option>求職者登録について</option>
              <option>不具合の報告</option>
              <option>その他</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              required
              placeholder="お問い合わせ内容を記載してください"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent-contact"
              required
              className="mt-1 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <label htmlFor="consent-contact" className="text-sm text-gray-600">
              <Link href="/privacy" target="_blank" className="text-rose-600 underline hover:text-rose-700">プライバシーポリシー</Link>
              および
              <Link href="/terms" target="_blank" className="text-rose-600 underline hover:text-rose-700">利用規約</Link>
              に同意します
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-rose-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors"
            >
              送信する
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-rose-600 hover:text-rose-700 font-semibold"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
