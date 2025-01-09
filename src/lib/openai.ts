// import OpenAI from 'openai';
// import { supabase } from './supabase';

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true
// });

// export async function getChatCompletion(
//   message: string,
//   language: string,
//   difficulty: string,
//   previousMessages: { role: 'user' | 'assistant'; content: string }[] = []
// ) {
//   const systemPrompt = `You are a helpful language learning assistant teaching ${language}. 
// Adjust your responses to ${difficulty} level learners.
// - Keep responses concise and clear
// - Correct any language mistakes politely
// - Explain idioms and complex phrases when used
// - Provide alternative phrases when appropriate
// - If asked, provide word definitions and examples`;

//   const messages = [
//     { role: 'system', content: systemPrompt },
//     ...previousMessages,
//     { role: 'user', content: message }
//   ];

//   try {
//     const completion = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: messages as any,
//       temperature: 0.7,
//       max_tokens: 200
//     });

//     return completion.choices[0].message.content;
//   } catch (error) {
//     console.error('OpenAI API error:', error);
//     throw new Error('Failed to get AI response');
//   }
// }