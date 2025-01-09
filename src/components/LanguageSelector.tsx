import React from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
];

type Props = {
  onSelect: (language: Language) => void;
  selected?: string;
};

export function LanguageSelector({ onSelect, selected }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => onSelect(language)}
          className={`p-4 rounded-lg border-2 ${
            selected === language.code
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          } transition-colors`}
        >
          <span className="text-2xl mr-2">{language.flag}</span>
          <span className="font-medium">{language.name}</span>
        </button>
      ))}
    </div>
  );
}