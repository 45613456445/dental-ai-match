-- DentalAI Match - データベーススキーマ（テーブル設計図）
-- Supabase接続時にこのSQLを実行してテーブルを作成する

-- 歯科医院テーブル
CREATE TABLE clinics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  prefecture TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  website TEXT,
  employee_count INTEGER,
  established_year INTEGER,
  features TEXT[] DEFAULT '{}',
  image_url TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 求人テーブル
CREATE TABLE jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID REFERENCES clinics(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  job_type TEXT NOT NULL CHECK (job_type IN ('dental_hygienist', 'dentist', 'dental_assistant', 'dental_technician')),
  employment_type TEXT NOT NULL CHECK (employment_type IN ('full_time', 'part_time', 'contract')),
  salary_min INTEGER NOT NULL,
  salary_max INTEGER NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  benefits TEXT,
  prefecture TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT,
  working_hours TEXT,
  holidays TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 求職者テーブル
CREATE TABLE job_seekers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  job_type TEXT NOT NULL CHECK (job_type IN ('dental_hygienist', 'dentist', 'dental_assistant', 'dental_technician')),
  experience_years INTEGER DEFAULT 0,
  preferred_prefecture TEXT,
  preferred_employment_type TEXT,
  self_introduction TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 応募テーブル
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  seeker_id UUID REFERENCES job_seekers(id) ON DELETE CASCADE,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'accepted', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- インデックス（検索を高速にする）
CREATE INDEX idx_jobs_job_type ON jobs(job_type);
CREATE INDEX idx_jobs_prefecture ON jobs(prefecture);
CREATE INDEX idx_jobs_employment_type ON jobs(employment_type);
CREATE INDEX idx_jobs_is_active ON jobs(is_active);
CREATE INDEX idx_jobs_clinic_id ON jobs(clinic_id);
CREATE INDEX idx_applications_job_id ON applications(job_id);
CREATE INDEX idx_applications_seeker_id ON applications(seeker_id);
