import { useState } from 'react';
import { LanguageSelector } from '../components/LanguageSelector';
// import { Chat } from '../components/Chat';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Difficulty, Language } from '../types';

export function Learn() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Language Learning Assistant</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.email}</span>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Choose your language</h2>
            <LanguageSelector
              onSelect={setSelectedLanguage}
              selected={selectedLanguage?.code}
            />
          </section>

          {selectedLanguage && (
            <section>
              <h2 className="text-xl font-semibold mb-4">2. Select difficulty level</h2>
              {/* <DifficultySelector
                onSelect={setSelectedDifficulty}
                selected={selectedDifficulty}
              /> */}
            </section>
          )}

          {selectedLanguage && selectedDifficulty && (
            <section>
              <h2 className="text-xl font-semibold mb-4">3. Start chatting</h2>
              {/* <Chat */}
                {/* language={selectedLanguage}
                difficulty={selectedDifficulty}
              /> */}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}