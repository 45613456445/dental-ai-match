// DentalAI Match - 特定商取引法に基づく表記ページ
// 特商法に基づくサービス運営者情報・料金・返金ポリシー等を表示するページ
import Link from "next/link";

export default function CompanyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          特定商取引法に基づく表記
        </h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              一部の情報は事業届出・法人登記の完了後に更新されます。
              現在準備中の項目については、完了次第速やかに掲載いたします。
            </p>
          </div>

          {/* 基本情報テーブル */}
          <section>
            <h2 className="font-bold text-lg mb-4">事業者情報</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <th className="text-left py-4 pr-4 text-gray-500 font-semibold w-40 align-top">
                    サービス名称
                  </th>
                  <td className="py-4">DentalAI Match</td>
                </tr>
                <tr>
                  <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                    運営者
                  </th>
                  <td className="py-4">
                    DentalAI Match 運営事務局
                    <br />
                    <span className="text-gray-400 text-xs">
                      ※法人登記準備中
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                    代表者
                  </th>
                  <td className="py-4">
                    <span className="text-gray-400">※公開準備中</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                    所在地
                  </th>
                  <td className="py-4">
                    愛知県名古屋市千種区
                    <br />
                    <span className="text-gray-400 text-xs">
                      ※詳細住所は届出完了後に掲載
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                    連絡先
                  </th>
                  <td className="py-4">
                    メール: info@dentalai-match.jp
                    <br />
                    <span className="text-gray-400 text-xs">
                      ※ドメイン取得準備中
                    </span>
                    <br />
                    電話番号: ※準備中
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 pr-4 text-gray-500 font-semibold align-top">
                    届出番号
                  </th>
                  <td className="py-4">
                    <span className="text-gray-400">
                      ※無料職業紹介事業届出 準備中
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 事業内容 */}
          <section>
            <h2 className="font-bold text-lg mb-3">事業内容</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>
                歯科医院と歯科医療従事者をつなぐAI求人マッチングプラットフォーム「DentalAI
                Match」の企画・開発・運営
              </li>
              <li>歯科医院向け求人掲載サービスの提供</li>
              <li>歯科医療従事者向け求職支援サービスの提供</li>
              <li>AIを活用した求人・求職者マッチングサービスの提供</li>
            </ul>
          </section>

          {/* サービスの対価 */}
          <section>
            <h2 className="font-bold text-lg mb-3">サービスの対価</h2>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              本サービスはフリーミアムモデルを採用しています。求職者（歯科医療従事者）の利用は完全無料です。
              紹介手数料・成功報酬は一切発生しません。歯科医院向けの料金プランは以下のとおりです。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">
                      プラン
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">
                      月額料金（税込）
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">
                      主な内容
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4 font-semibold">フリープラン</td>
                    <td className="py-3 px-4">0円</td>
                    <td className="py-3 px-4 text-gray-600">
                      求人掲載1件
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">
                      スタンダードプラン
                    </td>
                    <td className="py-3 px-4">9,800円/月</td>
                    <td className="py-3 px-4 text-gray-600">
                      求人掲載3件、優先表示
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">
                      プレミアムプラン
                    </td>
                    <td className="py-3 px-4">19,800円/月</td>
                    <td className="py-3 px-4 text-gray-600">
                      求人掲載無制限、AIマッチング、スカウト機能、分析ダッシュボード
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-xs mt-2">
              ※上記料金はすべて税込価格です。
              ※求職者の利用料金は全機能において無料です。
            </p>
          </section>

          {/* 支払方法・支払時期 */}
          <section>
            <h2 className="font-bold text-lg mb-3">支払方法・支払時期</h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">支払方法</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>クレジットカード（VISA、Mastercard、JCB、American Express）</li>
                  <li>
                    その他、当サービスが別途指定する方法
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">支払時期</h3>
                <p className="text-sm">
                  有料プランへのお申込み時に初回決済が行われます。
                  以降、毎月同日に自動更新による決済が行われます。
                </p>
              </div>
            </div>
          </section>

          {/* サービス提供時期 */}
          <section>
            <h2 className="font-bold text-lg mb-3">サービス提供時期</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              会員登録完了後、直ちにフリープランのサービスをご利用いただけます。
              有料プランについては、お申込み手続き及び決済の完了後、直ちにサービスが適用されます。
            </p>
          </section>

          {/* 解約・返金ポリシー */}
          <section>
            <h2 className="font-bold text-lg mb-3">解約・返金ポリシー</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-3">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">解約について</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    有料プランの解約は、マイページよりいつでもお手続きいただけます。
                  </li>
                  <li>
                    解約のお手続き後、当月の契約期間末日までサービスをご利用いただけます。
                  </li>
                  <li>
                    解約後はフリープランに移行します。
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">返金について</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    月額料金の日割り返金は行っておりません。
                  </li>
                  <li>
                    契約期間の途中で解約された場合でも、残期間分の返金はいたしかねます。
                  </li>
                  <li>
                    当サービスの責に帰すべき事由によりサービスの提供が著しく困難となった場合は、
                    未提供期間分の料金を返金いたします。
                  </li>
                </ul>
              </div>
            </div>
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
