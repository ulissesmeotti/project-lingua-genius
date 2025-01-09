// import React, { useState, useRef, useEffect } from 'react';
// import { Send, Mic, MicOff } from 'lucide-react';
// import { ChatMessage, Difficulty, Language } from '../types';
// // import { getChatCompletion } from '../lib/openai';
// import { supabase } from '../lib/supabase';

// type Props = {
//   language: Language;
//   difficulty: Difficulty;
// };

// export function Chat({ language, difficulty }: Props) {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [input, setInput] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // const startListening = () => {
//   //   if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//   //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   //     const recognition = new SpeechRecognition();
      
//   //     recognition.lang = language.code === 'en' ? 'en-US' : language.code;
//   //     recognition.continuous = false;
//   //     recognition.interimResults = false;

//   //     recognition.onstart = () => {
//   //       setIsListening(true);
//   //     };

//   //     recognition.onresult = (event) => {
//   //       const transcript = event.results[0][0].transcript;
//   //       setInput(transcript);
//   //       // Automatically send message when voice input is received
//   //       handleSendMessage(transcript);
//   //     };

//   //     recognition.onerror = (event) => {
//   //       console.error('Speech recognition error:', event.error);
//   //       setIsListening(false);
//   //     };

//   //     recognition.onend = () => {
//   //       setIsListening(false);
//   //     };

//   //     recognition.start();
//   //   } else {
//   //     alert('Speech recognition is not supported in this browser.');
//   //   }
//   // };

//   const handleSendMessage = async (messageText: string) => {
//     if (!messageText.trim()) return;

//     const userMessage: ChatMessage = {
//       role: 'user',
//       content: messageText
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     // try {
//     //   // Get AI response
//     //   // const aiResponse = await getChatCompletion(
//     //     messageText,
//     //     language.name,
//     //     difficulty,
//     //     messages
//     //   );

//       // const assistantMessage: ChatMessage = {
//       //   role: 'assistant',
//       //   content: aiResponse || 'Sorry, I could not generate a response.'
//       // };

//       setMessages(prev => [...prev, assistantMessage]);

//       // Save conversation to database
//       const { error } = await supabase.from('chat_history').insert([
//         {
//           message: messageText,
//           role: 'user',
//           language: language.code,
//           difficulty
//         },
//         {
//           message: aiResponse,
//           role: 'assistant',
//           language: language.code,
//           difficulty
//         }
//       ]);

//       if (error) {
//         console.error('Error saving chat history:', error);
//       }
//     } catch (error) {
//       console.error('Error getting AI response:', error);
//       setMessages(prev => [...prev, {
//         role: 'assistant',
//         content: 'Sorry, there was an error processing your message.'
//       }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const sendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await handleSendMessage(input);
//   };

//   return (
//     <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               message.role === 'user' ? 'justify-end' : 'justify-start'
//             }`}
//           >
//             <div
//               className={`max-w-[70%] rounded-lg p-3 ${
//                 message.role === 'user'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               {message.content}
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="flex justify-start">
//             <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <form onSubmit={sendMessage} className="border-t p-4">
//         <div className="flex gap-2">
//           <button
//             type="button"
//             onClick={startListening}
//             className={`p-2 rounded-lg transition-colors ${
//               isListening 
//                 ? 'bg-red-500 hover:bg-red-600' 
//                 : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             {isListening ? (
//               <MicOff className="w-5 h-5 text-white" />
//             ) : (
//               <Mic className="w-5 h-5 text-gray-700" />
//             )}
//           </button>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:border-blue-500"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
//           >
//             <Send className="w-5 h-5" />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }