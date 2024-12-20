/*
  # Create users and scores tables

  1. New Tables
    - `telegram_users`
      - `id` (uuid, primary key)
      - `telegram_id` (bigint, unique)
      - `username` (text)
      - `first_name` (text)
      - `photo_url` (text)
      - `created_at` (timestamp)
    - `scores`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `points` (integer)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

CREATE TABLE telegram_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  telegram_id bigint UNIQUE NOT NULL,
  username text,
  first_name text NOT NULL,
  photo_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES telegram_users(id) NOT NULL,
  points integer DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE telegram_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own data"
  ON telegram_users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own scores"
  ON scores
  FOR ALL
  USING (auth.uid() = user_id);