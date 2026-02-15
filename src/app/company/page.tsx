// DentalAI Match - 運営者情報ページ
// 運営会社・サービス運営者の情報を表示するページ
import Link from "next/link";

export default function CompanyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">運営者情報</h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              <tr>
                <th className="text-left py-4 pr-4 text-gray-500 font-semibold w-36 align-top">
                  サービス名
                </th>
                <td className="py-4">DentalAI Match</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                  運営者
                </th>
                <td className="py-4">DentalAI Match 運営事務局</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                  所在地
                </th>
                <td className="py-4">愛知県名古屋市千種区</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                  メール
                </th>
                <td className="py-4">info@dental-ai-match.example.com</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                  事業内容
                </th>
                <td className="py-4">
                  歯科業界向けAI求人マッチングプラットフォームの企画・運営
                </td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                  設立
                </th>
                <td className="py-4">2025年</td>
              </tr>
            </tbody>
          </table>
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
