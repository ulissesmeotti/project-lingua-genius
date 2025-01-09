export type User = {
  email: string;
  password: string;
};

export type Difficulty = 'basic' | 'intermediate' | 'advanced';

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};