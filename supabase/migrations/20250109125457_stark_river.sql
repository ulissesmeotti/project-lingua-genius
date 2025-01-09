/*
  # Chat History Schema

  1. New Tables
    - `chat_history`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `language` (text)
      - `difficulty` (text)
      - `message` (text)
      - `role` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `chat_history` table
    - Add policies for:
      - Users can read their own chat history
      - Users can create new chat messages
*/

-- Create chat_history table
CREATE TABLE chat_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  language text NOT NULL,
  difficulty text NOT NULL,
  message text NOT NULL,
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own chat history"
  ON chat_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create chat messages"
  ON chat_history
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);