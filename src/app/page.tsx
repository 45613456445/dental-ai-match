// DentalAI Match - トップページ（ランディングページ）
// サービスの説明、特徴、求人検索への導線を提供する
import Link from "next/link";
import { jobs } from "@/lib/dummy-data";
import JobCard from "@/components/JobCard";

export default function Home() {
  const latestJobs = jobs.slice(0, 3);

  return (
    <div>
      {/* ===== A. ヒーローセクション ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white">
        {/* 背景の装飾 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* サブタイトルバッジ */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-sm mb-8 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              求人掲載・求職者登録 すべて完全無料
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              歯科医師が作った、
              <br className="hidden sm:block" />
              歯科のための
              <span className="text-teal-300">採用プラットフォーム</span>
            </h1>

            <p className="text-base md:text-lg text-rose-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              AIの力で、従来の人材紹介とは一線を画す
              マッチング体験を実現します。
            </p>
            <p className="text-sm md:text-base text-rose-200 mb-10 max-w-2xl mx-auto">
              営業電話ゼロ。紹介手数料ゼロ。あなたのペースで、あなたに合った職場を。
            </p>

            {/* 2つのCTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/register"
                className="bg-white text-rose-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                求職者の方はこちら
              </Link>
              <Link
                href="/post"
                className="bg-teal-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                医院の方はこちら（無料）
              </Link>
            </div>

            {/* 信頼性バッジ */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-rose-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>完全無料</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>営業電話なし</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>歯科医師が運営</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== B. 「なぜ従来の人材紹介は高いのか」セクション ===== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">PROBLEM</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              なぜ、歯科の人材紹介は
              <span className="text-red-500">高額</span>なのか？
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              歯科衛生士1人を採用するのに、58〜140万円の手数料。その裏には構造的な理由があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* 理由1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">歯科に特化したサービスが少なかった</h3>
                  <p className="text-gray-600 leading-relaxed">
                    歯科業界に特化し、かつAIを活用したマッチングサービスはほとんど存在しませんでした。
                    選択肢が少ないため、既存の紹介会社の価格設定がそのまま通ってしまう状況です。
                  </p>
                </div>
              </div>
            </div>

            {/* 理由2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">営業担当者の人件費が上乗せされている</h3>
                  <p className="text-gray-600 leading-relaxed">
                    従来の紹介会社は、営業担当者が医院を訪問し、求職者に電話をかけ、面接に同行します。
                    その人件費が、そのまま紹介手数料に上乗せされています。
                  </p>
                </div>
              </div>
            </div>

            {/* 理由3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">「転職させるほど儲かる」構造</h3>
                  <p className="text-gray-600 leading-relaxed">
                    紹介会社は採用が決まるたびに手数料を得ます。
                    そのため、「定着させる」よりも「転職を促す」インセンティブが働きやすい構造です。
                  </p>
                </div>
              </div>
            </div>

            {/* 理由4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">情報の非対称性</h3>
                  <p className="text-gray-600 leading-relaxed">
                    医院と求職者がお互いを直接知る手段が限られていました。
                    間に仲介者が入ることで情報が偏り、ミスマッチが起きやすくなっています。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* まとめメッセージ */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-6 py-3 rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              これらの問題を、DentalAI Matchが解決します
            </div>
          </div>
        </div>
      </section>

      {/* ===== C. 「DentalAI Matchが違う理由」セクション ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">SOLUTION</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              DentalAI Matchが
              <span className="text-rose-600">違う理由</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              テクノロジーと歯科の現場経験を組み合わせた、新しいアプローチです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* 特徴1: AIマッチング */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">AIマッチング</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                条件だけでなく、職場の雰囲気や働き方の相性もAIで分析。
                「長く働ける職場」を見つけるお手伝いをします。
              </p>
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
                順次導入予定
              </span>
            </div>

            {/* 特徴2: 歯科医師が運営 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">歯科医師が運営</h3>
              <p className="text-gray-600 leading-relaxed">
                現場を知っている歯科医師が運営しているから、本当に必要なマッチングができます。
                歯科業界特有の事情もしっかり理解しています。
              </p>
            </div>

            {/* 特徴3: 完全無料 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">掲載・応募は完全無料</h3>
              <p className="text-gray-600 leading-relaxed">
                営業マンの人件費がないからこそ実現できる価格です。
                求人掲載も、応募も、採用が決まっても0円です。
              </p>
            </div>

            {/* 特徴4: 営業電話ゼロ */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">営業電話ゼロ</h3>
              <p className="text-gray-600 leading-relaxed">
                すべてオンラインで完結。
                診療中にかかってくる営業電話に悩まされることはもうありません。
              </p>
            </div>

            {/* 特徴5: 定着が目的 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">定着を目的としたサービス</h3>
              <p className="text-gray-600 leading-relaxed">
                転職を促すのではなく、長く働ける職場を見つけることが私たちの目的です。
                ミスマッチのない採用を目指します。
              </p>
            </div>

            {/* 特徴6: 直接やり取り */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">医院と直接やり取り</h3>
              <p className="text-gray-600 leading-relaxed">
                仲介者を通さず、医院と求職者が直接コミュニケーション。
                リアルな情報をもとに判断できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== D. コスト比較セクション ===== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">COST</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              採用コスト<span className="text-rose-600">比較</span>
            </h2>
            <p className="text-gray-500">
              歯科衛生士1人を採用する場合の一般的なコスト比較です
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 md:p-5 font-semibold text-gray-700">サービスの種類</th>
                    <th className="text-right p-4 md:p-5 font-semibold text-gray-700">採用コストの目安</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 md:p-5">
                      <div className="font-medium text-gray-700">一般的な人材紹介会社（年収連動型）</div>
                      <div className="text-sm text-gray-400 mt-0.5">紹介手数料として年収の30〜40%程度</div>
                    </td>
                    <td className="p-4 md:p-5 text-right">
                      <span className="text-red-500 font-bold text-lg">約100〜140万円</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 md:p-5">
                      <div className="font-medium text-gray-700">一般的な人材紹介会社（固定型）</div>
                      <div className="text-sm text-gray-400 mt-0.5">固定の紹介手数料</div>
                    </td>
                    <td className="p-4 md:p-5 text-right">
                      <span className="text-red-500 font-bold text-lg">約50〜80万円</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 md:p-5">
                      <div className="font-medium text-gray-700">成功報酬型の求人サイト</div>
                      <div className="text-sm text-gray-400 mt-0.5">採用決定時に報酬が発生</div>
                    </td>
                    <td className="p-4 md:p-5 text-right">
                      <span className="text-orange-500 font-bold text-lg">約3〜10万円</span>
                    </td>
                  </tr>
                  <tr className="bg-rose-50/70">
                    <td className="p-4 md:p-5">
                      <div className="font-bold text-rose-700 text-lg">DentalAI Match</div>
                      <div className="text-sm text-rose-500 mt-0.5">掲載料・紹介手数料・成功報酬すべて無料</div>
                    </td>
                    <td className="p-4 md:p-5 text-right">
                      <span className="text-rose-700 font-bold text-2xl">0円</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* なぜこの価格差？ */}
          <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              なぜ、この価格差が生まれるのか？
            </h3>
            <p className="text-gray-600 leading-relaxed">
              従来の人材紹介は、営業担当者の人件費・オフィス維持費・広告費などが紹介手数料に含まれています。
              DentalAI Matchは、AIとテクノロジーを活用することで、これらのコストを大幅に削減。
              歯科医師自らが運営し、人件費を最小限に抑えることで、完全無料を実現しています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== E. 使い方ステップ（求職者向け・医院向け両方） ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">HOW IT WORKS</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              かんたん<span className="text-rose-600">ステップ</span>
            </h2>
            <p className="text-gray-500">
              登録から採用まで、すべて無料で利用できます
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* 求職者向け */}
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                求職者の方
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "無料登録", desc: "希望条件やスキルを入力。最短3分で完了します。" },
                  { step: "2", title: "AIがマッチング", desc: "あなたに合った求人をAIが分析してお知らせ（順次導入）。" },
                  { step: "3", title: "直接やり取り", desc: "気になる医院と直接コミュニケーション。見学もOK。" },
                  { step: "4", title: "入職", desc: "自分のペースで納得のいく転職を実現できます。" },
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </div>
                    <div className={index < 3 ? "border-l-2 border-rose-100 pb-6 pl-6 -ml-[21px] mt-10" : "pl-6 -ml-[21px] mt-0"}>
                      <h4 className="font-bold text-base mb-1 -mt-10">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 mt-6 bg-rose-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors"
              >
                無料で登録する
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* 医院向け */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                歯科医院の方
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "無料で求人掲載", desc: "最短5分で掲載完了。掲載料は一切かかりません。" },
                  { step: "2", title: "求職者から応募", desc: "あなたの求人に興味を持った求職者から応募が届きます。" },
                  { step: "3", title: "直接やり取り", desc: "仲介なしで求職者と直接連絡。紹介手数料ゼロ。" },
                  { step: "4", title: "採用決定", desc: "成功報酬もなし。何人採用しても完全無料です。" },
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </div>
                    <div className={index < 3 ? "border-l-2 border-teal-100 pb-6 pl-6 -ml-[21px] mt-10" : "pl-6 -ml-[21px] mt-0"}>
                      <h4 className="font-bold text-base mb-1 -mt-10">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/post"
                className="inline-flex items-center gap-2 mt-6 bg-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-600 transition-colors"
              >
                無料で求人を出す
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== F. 利用イメージセクション ===== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">IMAGE</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              こんな<span className="text-rose-600">変化</span>が期待できます
            </h2>
            <p className="text-gray-500">
              DentalAI Matchを導入した場合の利用イメージです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* イメージ1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;人材紹介会社に高額な手数料を払っていた費用がゼロに。
                浮いた費用でスタッフの福利厚生を充実させられます。&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 font-bold text-sm">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm">開業12年の院長</p>
                  <p className="text-xs text-gray-400">利用イメージ</p>
                </div>
              </div>
            </div>

            {/* イメージ2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;営業電話なしで、自分のペースで転職活動ができるのが嬉しい。
                掲載されている求人も信頼できます。&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                  B
                </div>
                <div>
                  <p className="font-semibold text-sm">経験5年の歯科衛生士</p>
                  <p className="text-xs text-gray-400">利用イメージ</p>
                </div>
              </div>
            </div>

            {/* イメージ3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;小さな医院でも紹介料を気にせず採用活動ができる。
                何人採用しても0円なのは大きな安心感です。&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                  C
                </div>
                <div>
                  <p className="font-semibold text-sm">開業3年の院長</p>
                  <p className="text-xs text-gray-400">利用イメージ</p>
                </div>
              </div>
            </div>
          </div>

          {/* サービスの事実ベース数値 */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">0円</div>
              <p className="text-sm text-gray-500 mt-2">掲載料金</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">0円</div>
              <p className="text-sm text-gray-500 mt-2">紹介手数料</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">5分</div>
              <p className="text-sm text-gray-500 mt-2">掲載にかかる時間</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-rose-600">0件</div>
              <p className="text-sm text-gray-500 mt-2">営業電話</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== G. FAQセクション ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rose-600 font-semibold text-sm mb-3 tracking-wide">FAQ</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              よくある<span className="text-rose-600">質問</span>
            </h2>
            <p className="text-gray-500">
              院長先生・求職者の方からよくいただくご質問にお答えします
            </p>
          </div>

          <div className="space-y-3">
            <details className="bg-white rounded-xl border border-gray-100 shadow-sm group">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-bold text-base pr-4">本当に無料ですか？追加料金はかかりませんか？</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                はい、完全無料です。求人掲載料、紹介手数料、成功報酬など、一切の費用がかかりません。
                何件掲載しても、何人採用しても0円です。
                現役の歯科医師が「高すぎる紹介料をなんとかしたい」という思いで始めたサービスだからこそ、この価格を実現しています。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-sm group">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-bold text-base pr-4">個人情報の管理は大丈夫ですか？</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                個人情報保護法に基づき、厳重に管理しております。SSL暗号化通信を採用し、データは国内のセキュアなサーバーで保管しています。
                第三者への情報提供は一切行いません。詳しくはプライバシーポリシーをご確認ください。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-sm group">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-bold text-base pr-4">一般的な人材紹介会社との違いは何ですか？</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                一般的な人材紹介会社は1人の採用に数十万〜百万円以上の手数料がかかりますが、DentalAI Matchは完全無料です。
                また、紹介会社は仲介者を通すため情報が間接的になりがちですが、当サービスでは医院と求職者が直接やり取りできるので、ミスマッチが起きにくいのも大きな違いです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-sm group">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-bold text-base pr-4">登録後にしつこい営業電話はきませんか？</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                一切ございません。営業電話・営業メールは行いません。
                応募があった場合の通知メールのみお送りします。
                求職者の方にも、医院の方にも、しつこい連絡は一切行いませんのでご安心ください。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-sm group">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-bold text-base pr-4">AIマッチング機能はいつから使えますか？</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                AIマッチング機能は現在開発中で、順次導入を予定しています。
                現在でも、条件に合った求人を検索・閲覧し、直接応募することが可能です。
                今のうちにご登録いただければ、AI機能が導入され次第、優先的にご利用いただけます。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-sm group">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-bold text-base pr-4">掲載内容はあとから変更できますか？</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                はい、いつでも変更・削除が可能です。採用が決まったら掲載を停止することもできます。
                すべての操作が無料ですので、お気軽にお試しください。
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ===== 新着求人セクション ===== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-rose-600 font-semibold text-sm mb-1 tracking-wide">JOBS</p>
              <h2 className="text-2xl md:text-3xl font-bold">新着求人</h2>
            </div>
            <Link
              href="/jobs"
              className="text-rose-600 hover:text-rose-700 font-semibold text-sm flex items-center gap-1"
            >
              すべて見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== H. CTAセクション ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-rose-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            歯科業界の採用を、一緒に変えませんか？
          </h2>
          <p className="text-rose-100 mb-10 text-lg max-w-2xl mx-auto">
            高額な紹介手数料に悩むすべての歯科医院と、
            自分に合った職場を探すすべての歯科従事者のために。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/register"
              className="bg-white text-rose-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              求職者登録（無料）
            </Link>
            <Link
              href="/post"
              className="bg-teal-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              求人を掲載する（無料）
            </Link>
          </div>

          <p className="text-rose-200 text-sm">
            登録も掲載もすべて無料。営業電話は一切ありません。
          </p>
        </div>
      </section>
    </div>
  );
}
