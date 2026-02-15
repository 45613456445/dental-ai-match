// DentalAI Match - プライバシーポリシーページ
// 個人情報保護法（APPI）に準拠した個人情報の取り扱いに関する方針を表示するページ
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          プライバシーポリシー（個人情報保護方針）
        </h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-8">
          <p className="text-gray-600 text-sm">最終更新日: 2026年2月15日</p>

          <p className="text-gray-600 text-sm leading-relaxed">
            DentalAI Match
            運営事務局（以下「当事務局」）は、歯科医院と歯科医療従事者をつなぐAI求人マッチングプラットフォーム「DentalAI
            Match」（以下「本サービス」）を運営するにあたり、
            個人情報の保護に関する法律（個人情報保護法）その他関連法令を遵守し、以下のとおり個人情報を適切に取り扱います。
          </p>

          {/* 第1条 個人情報取扱事業者 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第1条（個人情報取扱事業者の名称）
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed">
              <p>名称: DentalAI Match 運営事務局（※法人登記準備中）</p>
              <p>所在地: 愛知県名古屋市千種区（※詳細住所は届出完了後に掲載）</p>
            </div>
          </section>

          {/* 第2条 個人情報保護管理者 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第2条（個人情報保護管理者）
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              個人情報保護管理者: DentalAI Match 運営事務局 責任者（※公開準備中）
              <br />
              連絡先: info@dentalai-match.jp（※ドメイン取得準備中）
            </p>
          </section>

          {/* 第3条 収集する個人情報の種類 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第3条（収集する個人情報の種類）
            </h2>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              当事務局は、本サービスの提供にあたり、以下の個人情報を収集することがあります。
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  求職者（歯科医療従事者）から収集する情報
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>氏名、生年月日、性別</li>
                  <li>メールアドレス、電話番号</li>
                  <li>住所（都道府県・市区町村）</li>
                  <li>保有資格、職務経歴、学歴</li>
                  <li>希望勤務条件（勤務地、給与、雇用形態等）</li>
                  <li>顔写真（任意でアップロードされた場合）</li>
                  <li>その他、本サービスの利用に際してご提供いただく情報</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  医院（歯科医院）から収集する情報
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>医院名、所在地、電話番号</li>
                  <li>担当者の氏名、メールアドレス、電話番号</li>
                  <li>医院の開設者情報</li>
                  <li>決済に関する情報（クレジットカード情報等）</li>
                  <li>その他、求人掲載に際してご提供いただく情報</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  自動的に収集される情報
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    IPアドレス、ブラウザの種類、使用言語、アクセス日時
                  </li>
                  <li>Cookie情報</li>
                  <li>閲覧ページ、操作ログ等のアクセスログ</li>
                  <li>端末情報（OS、デバイスの種類）</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 第4条 利用目的 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第4条（利用目的）
            </h2>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              当事務局は、収集した個人情報を以下の目的で利用します。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                本サービスにおける求人情報の掲載・管理および求職者情報の登録・管理
              </li>
              <li>
                AIを活用した求人・求職者のマッチングサービスの提供
              </li>
              <li>
                求職者から医院への応募手続きの遂行および応募に関する連絡・通知
              </li>
              <li>
                有料プランの契約管理、料金の請求・決済処理
              </li>
              <li>
                スカウト機能を通じた医院から求職者への連絡
              </li>
              <li>本人確認および不正利用の防止</li>
              <li>
                サービスの改善、新機能の開発、利用状況の分析
              </li>
              <li>お問い合わせへの対応およびアフターサービスの提供</li>
              <li>
                本サービスに関する重要なお知らせ、規約変更の通知
              </li>
              <li>
                法令に基づく対応および紛争の解決
              </li>
            </ul>
          </section>

          {/* 第5条 第三者提供 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第5条（個人情報の第三者提供）
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              当事務局は、以下の場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">応募時の情報提供:</span>{" "}
                求職者が求人に応募した場合、応募先の歯科医院に対し、求職者の氏名、連絡先、職務経歴、保有資格等の応募に必要な情報を提供します。
                この提供は、求職者が応募ボタンを押した時点で同意があったものとみなします。
              </li>
              <li>
                <span className="font-semibold">スカウト機能:</span>{" "}
                プレミアムプランを利用する医院が求職者にスカウトを送信する場合、求職者が公開設定とした情報（氏名を除くプロフィール情報）が閲覧可能となります。
              </li>
              <li>法令に基づく場合</li>
              <li>
                人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
              </li>
              <li>
                公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
              </li>
              <li>
                国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
              </li>
            </ul>
          </section>

          {/* 第6条 共同利用 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第6条（共同利用）</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              当事務局は、現時点において個人情報の共同利用は行っておりません。
              今後、共同利用を行う場合は、あらかじめ共同利用者の範囲、利用目的、管理責任者等を公表し、
              法令に従って適切に対応いたします。
            </p>
          </section>

          {/* 第7条 Cookie・アクセスログ */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第7条（Cookie・アクセスログの取扱い）
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-3">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  Cookieについて
                </h3>
                <p>
                  本サービスでは、ログイン状態の維持、利用状況の分析、サービスの改善等の目的でCookieを使用します。
                  ユーザーはブラウザの設定によりCookieの受け入れを拒否することができますが、
                  その場合、本サービスの一部機能が正常に動作しない可能性があります。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  アクセスログについて
                </h3>
                <p>
                  本サービスでは、サービスの安定運用およびセキュリティ対策のため、
                  アクセスログ（IPアドレス、アクセス日時、閲覧ページ等）を記録しています。
                  これらの情報は、個人を特定する目的では使用しません。
                </p>
              </div>
            </div>
          </section>

          {/* 第8条 外部送信 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第8条（外部送信・第三者サービスの利用）
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              本サービスでは、以下の外部サービスを利用しており、
              これらのサービスに対して利用者の情報が送信される場合があります。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 border-b">
                      サービス名
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 border-b">
                      提供者
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 border-b">
                      利用目的
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 border-b">
                      送信される情報
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 px-3">Google Analytics</td>
                    <td className="py-2 px-3 text-gray-600">Google LLC</td>
                    <td className="py-2 px-3 text-gray-600">
                      アクセス解析
                    </td>
                    <td className="py-2 px-3 text-gray-600">
                      Cookie、IPアドレス、閲覧ページ、利用環境等
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              ※利用する外部サービスは変更される場合があります。変更時は本ポリシーを更新します。
            </p>
          </section>

          {/* 第9条 安全管理措置 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第9条（個人データの安全管理措置）
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              当事務局は、個人データの漏洩、滅失又は毀損の防止その他の安全管理のため、以下の措置を講じます。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">組織的安全管理措置:</span>{" "}
                個人情報保護管理者の設置、取扱規程の整備、取扱い状況の定期的な点検
              </li>
              <li>
                <span className="font-semibold">人的安全管理措置:</span>{" "}
                個人情報を取り扱う従業者への教育・研修の実施、秘密保持義務の周知徹底
              </li>
              <li>
                <span className="font-semibold">物理的安全管理措置:</span>{" "}
                個人情報を取り扱う区域の管理、機器・電子媒体等の盗難防止
              </li>
              <li>
                <span className="font-semibold">技術的安全管理措置:</span>{" "}
                SSL/TLS暗号化通信の採用、アクセス制御、不正アクセス防止措置、ログの記録・監視
              </li>
            </ul>
          </section>

          {/* 第10条 保存期間 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第10条（個人情報の保存期間）
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-2">
              <p>
                当事務局は、利用目的の達成に必要な期間、個人情報を保存します。
                具体的な保存期間は以下のとおりです。
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  アカウント情報: アカウント削除後6ヶ月間保存した後、削除
                </li>
                <li>
                  応募履歴・マッチング履歴: 最終利用日から2年間保存した後、削除
                </li>
                <li>
                  決済情報: 法令で定められた保存期間（最大7年間）保存した後、削除
                </li>
                <li>
                  アクセスログ: 記録日から1年間保存した後、削除
                </li>
                <li>
                  お問い合わせ内容: 対応完了後3年間保存した後、削除
                </li>
              </ul>
              <p>
                ※法令により上記と異なる保存期間が定められている場合は、法令に従います。
              </p>
            </div>
          </section>

          {/* 第11条 開示・訂正・削除 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第11条（開示・訂正・利用停止・削除の請求）
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-3">
              <p>
                ご本人は、当事務局に対し、個人情報保護法に基づき、保有個人データの開示、訂正、追加、削除、
                利用停止、第三者提供の停止を請求することができます。
              </p>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  請求手続き
                </h3>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    以下の連絡先にメールでご請求ください。
                  </li>
                  <li>
                    本人確認のため、氏名・登録メールアドレス・生年月日を記載の上、登録メールアドレスからご送付ください。
                  </li>
                  <li>
                    本人確認完了後、原則として2週間以内に対応いたします。
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  本人確認方法
                </h3>
                <p>
                  登録メールアドレスからの送信により本人確認を行います。
                  登録メールアドレスからの送信が困難な場合は、本人確認書類（運転免許証、マイナンバーカード等の写し）のご提出をお願いする場合があります。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">連絡先</h3>
                <p>
                  メール: info@dentalai-match.jp（※ドメイン取得準備中）
                </p>
              </div>
            </div>
          </section>

          {/* 第12条 苦情受付窓口 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第12条（苦情受付窓口）
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed">
              <p className="mb-2">
                個人情報の取扱いに関する苦情・ご相談は、以下の窓口までお問い合わせください。
              </p>
              <p>DentalAI Match 運営事務局 個人情報苦情相談窓口</p>
              <p>メール: info@dentalai-match.jp（※ドメイン取得準備中）</p>
              <p className="mt-3">
                ※当事務局で解決しない場合は、以下の機関にご相談いただくことも可能です。
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>
                  個人情報保護委員会（https://www.ppc.go.jp/）
                </li>
                <li>
                  一般財団法人日本情報経済社会推進協会（JIPDEC）個人情報保護苦情相談室
                </li>
              </ul>
            </div>
          </section>

          {/* 第13条 改定 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第13条（プライバシーポリシーの改定）
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              当事務局は、法令の変更、サービス内容の変更その他の事由により、本プライバシーポリシーを改定することがあります。
              改定した場合は、本サービス上に掲載するとともに、重要な変更については登録メールアドレス宛に通知いたします。
              改定後のプライバシーポリシーは、本ページに掲載した時点で効力を生じます。
            </p>
          </section>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-xs">
              制定日: 2026年2月15日
              <br />
              最終更新日: 2026年2月15日
            </p>
          </div>
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
