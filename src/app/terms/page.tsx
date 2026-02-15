// DentalAI Match - 利用規約ページ
// サービスの利用規約を全17条にわたり表示するページ
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">利用規約</h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-8">
          <p className="text-gray-600 text-sm">最終更新日: 2026年2月15日</p>

          <p className="text-gray-600 text-sm leading-relaxed">
            本利用規約（以下「本規約」）は、DentalAI Match
            運営事務局（以下「当事務局」）が提供する歯科医院向けAI求人マッチングプラットフォーム「DentalAI
            Match」（以下「本サービス」）の利用に関する条件を定めるものです。
            本サービスをご利用いただくすべての方（以下「ユーザー」）は、本規約に同意した上で本サービスをご利用ください。
          </p>

          {/* 第1条 適用 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第1条（適用）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                本規約は、ユーザーと当事務局との間の本サービスの利用に関わる一切の関係に適用されます。
              </li>
              <li>
                当事務局が本サービス上で随時掲載する個別の規定、ガイドライン、ヘルプ等（以下「個別規定」）は、本規約の一部を構成するものとします。
              </li>
              <li>
                本規約の規定と個別規定の規定が矛盾する場合は、個別規定の規定が優先して適用されるものとします。
              </li>
            </ol>
          </section>

          {/* 第2条 定義 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第2条（定義）</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              本規約において使用する用語の定義は、以下のとおりとします。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">「本サービス」:</span>{" "}
                当事務局が運営する歯科医院と歯科医療従事者をつなぐAI求人マッチングプラットフォーム「DentalAI
                Match」をいいます。
              </li>
              <li>
                <span className="font-semibold">「ユーザー」:</span>{" "}
                本サービスを利用するすべての方をいい、以下の「求職者」および「医院ユーザー」を含みます。
              </li>
              <li>
                <span className="font-semibold">「求職者」:</span>{" "}
                本サービスに求職者として登録し、求人への応募等を行う歯科医療従事者をいいます。
              </li>
              <li>
                <span className="font-semibold">「医院ユーザー」:</span>{" "}
                本サービスに歯科医院として登録し、求人情報の掲載等を行う歯科医院の担当者をいいます。
              </li>
              <li>
                <span className="font-semibold">「有料プラン」:</span>{" "}
                スタンダードプランおよびプレミアムプランの総称をいいます。
              </li>
              <li>
                <span className="font-semibold">「コンテンツ」:</span>{" "}
                本サービス上に掲載されるテキスト、画像、データ等の情報の総称をいいます。
              </li>
            </ul>
          </section>

          {/* 第3条 サービス内容 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第3条（サービス内容）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                本サービスは、歯科医院と歯科医療従事者をつなぐAI求人マッチングプラットフォームであり、以下の機能を提供します。
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>歯科医院による求人情報の掲載・管理機能</li>
                  <li>求職者による求人検索・応募機能</li>
                  <li>AIを活用した求人・求職者のマッチング機能</li>
                  <li>スカウト機能（プレミアムプラン）</li>
                  <li>応募管理・分析ダッシュボード（プレミアムプラン）</li>
                </ul>
              </li>
              <li>
                本サービスは職業安定法に基づく無料職業紹介事業として運営します（届出準備中）。
                紹介手数料および成功報酬は一切発生しません。
              </li>
              <li>
                当事務局は、本サービスの内容を、ユーザーへの事前の通知なく変更することがあります。
                ただし、重要な変更については第13条に基づき通知を行います。
              </li>
            </ol>
          </section>

          {/* 第4条 利用料金 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第4条（利用料金）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                求職者の本サービスの利用は、すべての機能において無料とします。
              </li>
              <li>
                医院ユーザーの利用料金は、以下のプランに基づきます。
              </li>
            </ol>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">
                      プラン名
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

            <ol
              start={3}
              className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed mt-4"
            >
              <li>
                上記料金はすべて消費税を含む金額とします。
              </li>
              <li>
                当事務局は、30日前までにユーザーに通知することにより、料金を変更できるものとします。
              </li>
            </ol>
          </section>

          {/* 第5条 支払条件 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第5条（支払条件）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                有料プランの支払方法は、クレジットカード（VISA、Mastercard、JCB、American
                Express）その他当事務局が別途指定する方法とします。
              </li>
              <li>
                有料プランの料金は、申込時に初回決済が行われ、以降、毎月同日に月額料金が自動決済されます。
              </li>
              <li>
                決済日に決済が完了しなかった場合、当事務局は該当する有料プランの機能を停止することがあります。
              </li>
              <li>
                ユーザーは、決済に使用するクレジットカード情報を常に最新の状態に保つものとします。
              </li>
            </ol>
          </section>

          {/* 第6条 プラン変更・解約 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第6条（プラン変更・解約）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                医院ユーザーは、マイページよりいつでも有料プランの変更または解約を行うことができます。
              </li>
              <li>
                上位プランへの変更は、変更手続き完了後、直ちに適用されます。差額は日割りで計算し、次回決済時に請求します。
              </li>
              <li>
                下位プランへの変更または解約は、当月の契約期間末日をもって適用されます。契約期間末日までは従前のプランをご利用いただけます。
              </li>
              <li>
                月額料金の日割り返金は行いません。契約期間の途中で解約された場合でも、残期間分の返金はいたしません。
              </li>
              <li>
                解約後はフリープランに移行します。有料プランの機能で作成したデータは、フリープランの制限に応じて閲覧が制限される場合があります。
              </li>
            </ol>
          </section>

          {/* 第7条 アカウント管理 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第7条（アカウント管理）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                ユーザーは、本サービスの利用にあたり、正確かつ最新の情報を登録するものとします。
              </li>
              <li>
                ユーザーは、自己の責任においてアカウント（メールアドレス、パスワード等）を適切に管理するものとし、第三者に利用させ、又は貸与、譲渡、名義変更、売買等をしてはなりません。
              </li>
              <li>
                アカウントの管理不十分、第三者の使用等による損害の責任は、ユーザーが負うものとし、当事務局は一切の責任を負いません。
              </li>
              <li>
                ユーザーは、アカウントの不正利用を発見した場合、直ちに当事務局に通知するものとします。
              </li>
            </ol>
          </section>

          {/* 第8条 禁止事項 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第8条（禁止事項）</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>虚偽の情報を登録・掲載する行為</li>
              <li>
                他のユーザー、第三者又は当事務局の知的財産権、プライバシー権、名誉権その他の権利・利益を侵害する行為
              </li>
              <li>
                他のユーザーに対する迷惑行為、嫌がらせ、誹謗中傷、脅迫行為
              </li>
              <li>
                本サービスの運営を妨害する行為、サーバーやネットワークに過度の負荷をかける行為
              </li>
              <li>
                本サービスの情報を、当事務局の事前の書面による承諾なく、転載、複製、改変、配布する行為
              </li>
              <li>
                本サービスを利用して取得した個人情報を、本サービスの利用目的以外で使用する行為
              </li>
              <li>
                本サービスを通じて知り得た求職者・医院の情報を、第三者に提供する行為
              </li>
              <li>
                スクレイピング、クローリングその他の自動化手段により本サービスのデータを取得する行為
              </li>
              <li>法令又は公序良俗に違反する行為</li>
              <li>
                反社会的勢力に対する利益供与その他反社会的勢力に関与する行為
              </li>
              <li>
                その他、当事務局が不適切と合理的に判断する行為
              </li>
            </ul>
          </section>

          {/* 第9条 知的財産権 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第9条（知的財産権）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                本サービスに関する著作権、商標権その他の知的財産権は、当事務局又は正当な権利を有する第三者に帰属します。
              </li>
              <li>
                ユーザーが本サービスに投稿・掲載したコンテンツ（求人情報、プロフィール情報等）の著作権は、当該ユーザーに帰属します。ただし、ユーザーは、当事務局に対し、本サービスの提供・運営・改善・広告宣伝に必要な範囲で、当該コンテンツを無償で利用する非独占的な権利を許諾するものとします。
              </li>
              <li>
                ユーザーは、当事務局及び当事務局が許諾する第三者に対し、前項のコンテンツに関する著作者人格権を行使しないものとします。
              </li>
            </ol>
          </section>

          {/* 第10条 個人情報の取扱い */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第10条（個人情報の取扱い）
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              当事務局は、ユーザーの個人情報を、別途定める
              <Link
                href="/privacy"
                className="text-rose-600 hover:text-rose-700 underline"
              >
                プライバシーポリシー
              </Link>
              に従い、適切に取り扱います。ユーザーは、本サービスの利用にあたり、当該プライバシーポリシーに同意するものとします。
            </p>
          </section>

          {/* 第11条 免責事項 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第11条（免責事項）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                当事務局は、本サービスにおけるユーザー間のやり取り、面接、採用、雇用条件その他一切の事項について、当事者間の問題として関与せず、故意又は重過失による場合を除き、一切の責任を負いません。
              </li>
              <li>
                求人情報の正確性、完全性、最新性の責任は、求人情報を掲載した医院ユーザーに帰属します。当事務局は、故意又は重過失による場合を除き、求人情報の内容に関する責任を負いません。
              </li>
              <li>
                当事務局は、AIマッチングの結果について、その正確性・適合性を保証するものではなく、マッチング結果に基づく採用・就職の成否について、故意又は重過失による場合を除き、一切の責任を負いません。
              </li>
              <li>
                当事務局は、天災地変、通信障害、システム障害その他当事務局の責めに帰すことができない事由により、本サービスの提供が遅延又は中断した場合であっても、これによりユーザーに生じた損害について責任を負いません。
              </li>
              <li>
                当事務局は、ユーザーが本サービスを利用することにより第三者との間で生じた紛争について、故意又は重過失による場合を除き、一切の責任を負いません。
              </li>
            </ol>
          </section>

          {/* 第12条 損害賠償 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第12条（損害賠償）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                当事務局は、当事務局の故意又は重過失によりユーザーに損害が生じた場合、当該ユーザーに対し、直接かつ現実に生じた通常の損害に限り、これを賠償するものとします。
              </li>
              <li>
                前項の損害賠償額の上限は、当該損害が発生した月にユーザーが当事務局に支払った利用料金の1ヶ月分（無料プランのユーザーの場合は1万円）を上限とします。ただし、当事務局の故意又は重過失による場合はこの限りではありません。
              </li>
              <li>
                ユーザーが本規約に違反して当事務局又は第三者に損害を与えた場合、当該ユーザーは自己の責任と費用をもって損害を賠償するものとします。
              </li>
            </ol>
          </section>

          {/* 第13条 サービスの変更・終了 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第13条（サービスの変更・中断・終了）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                当事務局は、ユーザーに30日前までに通知（本サービス上での掲載又は登録メールアドレス宛の送信）することにより、本サービスの全部又は一部を変更又は終了することができます。
              </li>
              <li>
                前項にかかわらず、以下の場合は、事前の通知なく本サービスの全部又は一部を一時的に中断することがあります。
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>
                    システムの保守・点検・更新を行う場合
                  </li>
                  <li>
                    天災地変、停電、通信障害等の不可抗力により本サービスの提供が困難となった場合
                  </li>
                  <li>
                    セキュリティ上の緊急対応が必要な場合
                  </li>
                  <li>
                    その他、当事務局が必要と合理的に判断した場合
                  </li>
                </ul>
              </li>
              <li>
                本サービスの終了にあたり、有料プランの未使用期間がある場合は、当該期間に相当する料金を日割りで返金します。
              </li>
            </ol>
          </section>

          {/* 第14条 退会 */}
          <section>
            <h2 className="font-bold text-lg mb-3">第14条（退会）</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                ユーザーは、マイページから所定の手続きを行うことにより、いつでも本サービスを退会することができます。
              </li>
              <li>
                退会により、ユーザーのアカウントおよびこれに関連するデータは、プライバシーポリシーに定める保存期間を経過した後に削除されます。
              </li>
              <li>
                有料プランの契約期間中に退会した場合、第6条第4項の規定が適用されます（日割り返金なし）。
              </li>
              <li>
                当事務局は、ユーザーが以下のいずれかに該当する場合、事前の通知なくアカウントを停止又は削除することがあります。
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>本規約に違反した場合</li>
                  <li>登録情報に虚偽が判明した場合</li>
                  <li>
                    1年以上本サービスの利用がない場合
                  </li>
                  <li>
                    その他、当事務局がアカウントの維持を不適切と合理的に判断した場合
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          {/* 第15条 反社会的勢力の排除 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第15条（反社会的勢力の排除）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                ユーザーは、現在及び将来にわたり、以下のいずれにも該当しないことを表明し、保証するものとします。
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>
                    暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団等、その他これらに準ずる者（以下「反社会的勢力」）であること
                  </li>
                  <li>
                    反社会的勢力と社会的に非難されるべき関係を有すること
                  </li>
                  <li>
                    反社会的勢力を利用し、又は反社会的勢力に対して資金等を提供し、もしくは便宜を供与する等の関与をしていること
                  </li>
                </ul>
              </li>
              <li>
                当事務局は、ユーザーが前項に違反した場合、事前の催告なくして、当該ユーザーのアカウントを停止又は削除し、本サービスの利用を即時に禁止することができるものとします。
              </li>
              <li>
                前項に基づく措置によりユーザーに損害が生じた場合であっても、当事務局は一切の責任を負いません。
              </li>
            </ol>
          </section>

          {/* 第16条 規約の変更 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第16条（規約の変更）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                当事務局は、以下の場合に、ユーザーの個別の同意を得ることなく、本規約を変更できるものとします。
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>
                    本規約の変更がユーザーの一般の利益に適合するとき
                  </li>
                  <li>
                    本規約の変更が、契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき
                  </li>
                </ul>
              </li>
              <li>
                当事務局は、本規約を変更する場合、変更の効力発生日の30日前までに、変更後の本規約の内容及び効力発生日を、本サービス上での掲載及びユーザーの登録メールアドレス宛への送信により通知するものとします。
              </li>
              <li>
                変更の効力発生日以降にユーザーが本サービスを利用した場合、変更後の本規約に同意したものとみなします。
              </li>
            </ol>
          </section>

          {/* 第17条 準拠法・管轄裁判所 */}
          <section>
            <h2 className="font-bold text-lg mb-3">
              第17条（準拠法・管轄裁判所）
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>
                本規約の解釈及び適用は、日本法に準拠するものとします。
              </li>
              <li>
                本サービスに関してユーザーと当事務局との間に紛争が生じた場合、名古屋地方裁判所を第一審の専属的合意管轄裁判所とします。
              </li>
            </ol>
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
