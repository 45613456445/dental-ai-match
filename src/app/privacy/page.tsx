// DentalAI Match - プライバシーポリシーページ
// 個人情報の取り扱いに関する方針を表示するページ
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          プライバシーポリシー
        </h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-8">
          <p className="text-gray-600 text-sm">最終更新日: 2025年2月15日</p>

          <section>
            <h2 className="font-bold text-lg mb-3">1. 個人情報の収集について</h2>
            <p className="text-gray-600 leading-relaxed">
              当サービスでは、求人掲載・求職者登録・応募の際に、氏名、メールアドレス、電話番号等の個人情報をお預かりします。
              これらの情報は、サービスの提供に必要な範囲でのみ収集いたします。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">2. 個人情報の利用目的</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>求人情報の掲載・管理</li>
              <li>求職者と医院のマッチング</li>
              <li>応募に関する連絡・通知</li>
              <li>サービスの改善・新機能の開発</li>
              <li>お問い合わせへの対応</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">3. 個人情報の第三者提供</h2>
            <p className="text-gray-600 leading-relaxed">
              法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。
              ただし、求職者が求人に応募した場合、応募先の医院に応募情報が提供されます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">4. 個人情報の安全管理</h2>
            <p className="text-gray-600 leading-relaxed">
              SSL暗号化通信の採用、アクセス制限、定期的なセキュリティ監査等により、
              個人情報の漏洩・紛失・改ざんの防止に努めます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">
              5. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ご本人からの個人情報の開示・訂正・削除のご請求には、速やかに対応いたします。
              お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3">6. お問い合わせ</h2>
            <p className="text-gray-600 leading-relaxed">
              プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。
              <br />
              メール: info@dental-ai-match.example.com
            </p>
          </section>
        </div>

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
