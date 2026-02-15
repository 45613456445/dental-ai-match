// DentalAI Match - ダミーデータ（開発用のサンプルデータ）
// Phase 1ではSupabaseの代わりにこのデータを使用する
// Supabase接続後はこのファイルは不要になる

import { Job, Clinic } from "@/types";

export const clinics: Clinic[] = [
  {
    id: "clinic-1",
    name: "さくら歯科クリニック",
    description: "名古屋市千種区にある、家族で通える歯科医院です。予防歯科に力を入れており、スタッフ同士の仲が良いアットホームな環境です。",
    prefecture: "愛知県",
    city: "名古屋市千種区",
    address: "名古屋市千種区○○町1-2-3",
    phone: "052-XXX-XXXX",
    website: "https://example.com",
    employee_count: 8,
    established_year: 2010,
    features: ["予防歯科", "小児歯科", "駅近", "残業少なめ"],
    created_at: "2024-01-01",
  },
  {
    id: "clinic-2",
    name: "みなと歯科",
    description: "名古屋港近くの歯科医院。最新の設備を導入し、インプラントや矯正治療にも対応しています。研修制度が充実しています。",
    prefecture: "愛知県",
    city: "名古屋市港区",
    address: "名古屋市港区△△1-5",
    phone: "052-XXX-XXXX",
    employee_count: 15,
    established_year: 2005,
    features: ["インプラント", "矯正歯科", "研修充実", "社会保険完備"],
    created_at: "2024-01-01",
  },
  {
    id: "clinic-3",
    name: "長久手ファミリー歯科",
    description: "長久手市のショッピングモール内にある歯科医院。お子様連れでも通いやすい環境です。週休2.5日でプライベートも充実。",
    prefecture: "愛知県",
    city: "長久手市",
    address: "長久手市○○1-1",
    phone: "0561-XX-XXXX",
    employee_count: 12,
    established_year: 2018,
    features: ["小児歯科", "週休2.5日", "車通勤OK", "託児所あり"],
    created_at: "2024-01-01",
  },
  {
    id: "clinic-4",
    name: "栄デンタルオフィス",
    description: "栄駅直結の審美歯科専門クリニック。ホワイトニングやセラミック治療を中心に、美しい笑顔をサポートします。",
    prefecture: "愛知県",
    city: "名古屋市中区",
    address: "名古屋市中区栄3-XX-XX",
    phone: "052-XXX-XXXX",
    employee_count: 10,
    established_year: 2015,
    features: ["審美歯科", "駅直結", "高給与", "完全週休2日"],
    created_at: "2024-01-01",
  },
  {
    id: "clinic-5",
    name: "おひさま歯科クリニック",
    description: "春日井市の地域密着型歯科医院。訪問歯科にも力を入れており、地域の高齢者の口腔ケアに貢献しています。",
    prefecture: "愛知県",
    city: "春日井市",
    address: "春日井市○○町2-3",
    phone: "0568-XX-XXXX",
    employee_count: 6,
    established_year: 2020,
    features: ["訪問歯科", "地域密着", "アットホーム", "未経験OK"],
    created_at: "2024-01-01",
  },
];

export const jobs: Job[] = [
  {
    id: "job-1",
    clinic_id: "clinic-1",
    title: "【残業ほぼなし】歯科衛生士募集！予防歯科メインのクリニック",
    job_type: "dental_hygienist",
    employment_type: "full_time",
    salary_min: 280000,
    salary_max: 350000,
    description: "予防歯科をメインに行っている当院で、歯科衛生士を募集します。\n\n担当制で患者さんとじっくり向き合えます。ブランクがある方も丁寧に指導しますので、安心してご応募ください。",
    requirements: "歯科衛生士免許をお持ちの方\nブランクOK\n経験者優遇",
    benefits: "社会保険完備\n交通費全額支給\n制服貸与\n有給休暇あり\n研修費用補助",
    prefecture: "愛知県",
    city: "名古屋市千種区",
    address: "名古屋市千種区○○町1-2-3",
    working_hours: "9:00〜18:00（休憩90分）",
    holidays: "木曜・日曜・祝日",
    created_at: "2025-02-10",
    updated_at: "2025-02-10",
    is_active: true,
    clinic: clinics[0],
  },
  {
    id: "job-2",
    clinic_id: "clinic-2",
    title: "【月給35万〜】経験者歓迎！最新設備のクリニックで一緒に働きませんか",
    job_type: "dental_hygienist",
    employment_type: "full_time",
    salary_min: 350000,
    salary_max: 420000,
    description: "最新のCTやマイクロスコープを完備した当院で、スキルアップしたい歯科衛生士を募集します。\n\nインプラント周囲のメンテナンスや、SRP等の歯周治療にも積極的に携わっていただけます。",
    requirements: "歯科衛生士免許をお持ちの方\n臨床経験3年以上\nSRP経験者優遇",
    benefits: "社会保険完備\n賞与年2回\n退職金制度\n学会参加費補助\nセミナー費用全額負担",
    prefecture: "愛知県",
    city: "名古屋市港区",
    address: "名古屋市港区△△1-5",
    working_hours: "8:30〜17:30（休憩60分）",
    holidays: "日曜・祝日・水曜午後",
    created_at: "2025-02-08",
    updated_at: "2025-02-08",
    is_active: true,
    clinic: clinics[1],
  },
  {
    id: "job-3",
    clinic_id: "clinic-3",
    title: "【週休2.5日】ワークライフバランス重視の方へ！パートも同時募集",
    job_type: "dental_hygienist",
    employment_type: "full_time",
    salary_min: 300000,
    salary_max: 380000,
    description: "週休2.5日で、プライベートも大切にできる職場です。\n\nショッピングモール内なので、仕事帰りの買い物にも便利！託児所も併設しているので、お子様がいる方も安心して働けます。",
    requirements: "歯科衛生士免許をお持ちの方\n未経験・ブランクOK\nお子様がいる方歓迎",
    benefits: "社会保険完備\n託児所あり（無料）\n車通勤OK（駐車場無料）\n制服貸与\n産休・育休実績あり",
    prefecture: "愛知県",
    city: "長久手市",
    address: "長久手市○○1-1",
    working_hours: "9:30〜18:30（休憩90分）",
    holidays: "水曜・日曜・祝日＋土曜午後",
    created_at: "2025-02-12",
    updated_at: "2025-02-12",
    is_active: true,
    clinic: clinics[2],
  },
  {
    id: "job-4",
    clinic_id: "clinic-3",
    title: "【時給1,800円〜】午前のみ・午後のみOK！パート歯科衛生士",
    job_type: "dental_hygienist",
    employment_type: "part_time",
    salary_min: 1800,
    salary_max: 2200,
    description: "午前のみ、午後のみなど、ライフスタイルに合わせた勤務が可能です。\n\n週2日〜OK！扶養内勤務も相談できます。",
    requirements: "歯科衛生士免許をお持ちの方\n週2日以上勤務できる方",
    benefits: "交通費支給\n車通勤OK\n制服貸与\n勤務時間相談可",
    prefecture: "愛知県",
    city: "長久手市",
    address: "長久手市○○1-1",
    working_hours: "9:30〜13:00 または 14:30〜18:30（選択可）",
    holidays: "シフト制（希望考慮）",
    created_at: "2025-02-12",
    updated_at: "2025-02-12",
    is_active: true,
    clinic: clinics[2],
  },
  {
    id: "job-5",
    clinic_id: "clinic-4",
    title: "【歯科医師募集】審美歯科に興味のある先生、一緒に働きませんか",
    job_type: "dentist",
    employment_type: "full_time",
    salary_min: 600000,
    salary_max: 1200000,
    description: "審美歯科専門クリニックで勤務医を募集します。\n\nホワイトニング、セラミック修復、インビザライン矯正などを学べる環境です。独立支援制度もあります。",
    requirements: "歯科医師免許をお持ちの方\n臨床経験2年以上\n審美歯科に興味のある方",
    benefits: "社会保険完備\n歩合給あり\n学会参加費全額補助\n独立支援制度\n完全週休2日",
    prefecture: "愛知県",
    city: "名古屋市中区",
    address: "名古屋市中区栄3-XX-XX",
    working_hours: "10:00〜19:00（休憩90分）",
    holidays: "完全週休2日（水曜・日曜）・祝日",
    created_at: "2025-02-05",
    updated_at: "2025-02-05",
    is_active: true,
    clinic: clinics[3],
  },
  {
    id: "job-6",
    clinic_id: "clinic-5",
    title: "【未経験OK】歯科助手募集！優しいスタッフと一緒に働こう",
    job_type: "dental_assistant",
    employment_type: "full_time",
    salary_min: 200000,
    salary_max: 250000,
    description: "未経験から歯科助手を始めたい方を応援します！\n\n先輩スタッフが丁寧に教えますので、安心してください。訪問歯科にも同行していただき、やりがいのある仕事です。",
    requirements: "未経験OK\n普通自動車免許（訪問歯科のため）\n明るく元気な方",
    benefits: "社会保険完備\n交通費支給\n制服貸与\n資格取得支援\nアットホームな職場",
    prefecture: "愛知県",
    city: "春日井市",
    address: "春日井市○○町2-3",
    working_hours: "8:30〜17:30（休憩60分）",
    holidays: "木曜・日曜・祝日",
    created_at: "2025-02-14",
    updated_at: "2025-02-14",
    is_active: true,
    clinic: clinics[4],
  },
];

/** IDで求人を取得 */
export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

/** 条件で求人を検索 */
export function searchJobs(params: {
  jobType?: string;
  prefecture?: string;
  employmentType?: string;
  keyword?: string;
}): Job[] {
  return jobs.filter((job) => {
    if (!job.is_active) return false;
    if (params.jobType && job.job_type !== params.jobType) return false;
    if (params.prefecture && job.prefecture !== params.prefecture) return false;
    if (params.employmentType && job.employment_type !== params.employmentType) return false;
    if (params.keyword) {
      const kw = params.keyword.toLowerCase();
      const searchTarget = `${job.title} ${job.description} ${job.clinic?.name ?? ""} ${job.city}`.toLowerCase();
      if (!searchTarget.includes(kw)) return false;
    }
    return true;
  });
}
