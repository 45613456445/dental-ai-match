// DentalAI Match - 利用規約ページ
// サービスの利用規約を表示するページ
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">利用規約</h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-8">
          <p className="text-gray-600 text-sm">最終更新日: 2025年2月15日</p>

          <section>
            <h2 className="font-bold text-lg mb-3">第1条（適用）</h2>
            <p className="text-gray-600 leading-relaxed">
              本規約は、DentalAI Match（以下「本サービス」）の利用に関する条件を定めるものです。
              ユーザーは本規約に同意した上で本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">第2条（サービス内容）</h2>
            <p className="text-gray-600 leading-relaxed">
              本サービスは、歯科医院と歯科医療従事者をつなぐ求人マッチングプラットフォームです。
              求人掲載、求職者登録、応募機能等を無料で提供します。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">第3条（利用料金）</h2>
            <p className="text-gray-600 leading-relaxed">
              本サービスの利用は無料です。求人掲載料、紹介手数料、成功報酬等の費用は一切かかりません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">第4条（禁止事項）</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>虚偽の情報を登録・掲載する行為</li>
              <li>他のユーザーへの迷惑行為・嫌がらせ</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>法令に違反する行為</li>
              <li>本サービスの情報を無断で転載・利用する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">第5条（免責事項）</h2>
            <p className="text-gray-600 leading-relaxed">
              当サービスは、ユーザー間のやり取りや採用に関して一切の責任を負いません。
              求人内容の正確性の責任は掲載者に帰属します。
              サービスの一時停止・変更・終了により生じた損害について、運営者は責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">第6条（規約の変更）</h2>
            <p className="text-gray-600 leading-relaxed">
              運営者は、必要に応じて本規約を変更できるものとします。
              変更後の規約は、本ページに掲載した時点で効力を生じます。
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
