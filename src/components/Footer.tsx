// DentalAI Match - フッターコンポーネント（全ページ共通）
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* サービス紹介 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                DentalAI Match
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              歯科医師が作った、歯科のための
              求人マッチングプラットフォーム。
              求職者は完全無料。医院は基本掲載無料。
            </p>
          </div>

          {/* 求職者向け */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">求職者の方へ</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  求人を探す
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors">
                  求職者登録（無料）
                </Link>
              </li>
            </ul>
          </div>

          {/* 医院向け */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">歯科医院の方へ</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/post" className="hover:text-white transition-colors">
                  求人を掲載する（基本無料）
                </Link>
              </li>
            </ul>
          </div>

          {/* なぜDentalAI Match？ */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">
              DentalAI Matchの特徴
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-rose-400">&#x2713;</span>
                基本掲載：無料
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400">&#x2713;</span>
                紹介手数料：なし
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400">&#x2713;</span>
                営業電話：一切なし
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400">&#x2713;</span>
                歯科医師が運営
              </li>
            </ul>
          </div>
        </div>

        {/* 法務リンク */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              <Link href="/company" className="hover:text-white transition-colors">
                運営者情報
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                お問い合わせ
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              &copy; 2026 DentalAI Match
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
