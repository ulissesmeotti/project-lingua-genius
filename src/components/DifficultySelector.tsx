import React from 'react';
import { Difficulty } from '../types';
import { BookOpen, BookOpenCheck, GraduationCap } from 'lucide-react';

const difficulties: { level: Difficulty; icon: React.ReactNode; title: string; description: string }[] = [
  {
    level: 'basic',
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Basic',
    description: 'Perfect for beginners starting their language journey'
  },
  {
    level: 'intermediate',
    icon: <BookOpenCheck className="w-8 h-8" />,
    title: 'Intermediate',
    description: 'For those with good foundation wanting to improve'
  },
  {
    level: 'advanced',
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Advanced',
    description: 'Challenge yourself with complex conversations'
  }
];

type Props = {
  onSelect: (difficulty: Difficulty) => void;
  selected?: Difficulty;
};

export function DifficultySelector({ onSelect, selected }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {difficulties.map(({ level, icon, title, description }) => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className={`p-6 rounded-lg border-2 ${
            selected === level
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          } transition-colors text-left`}
        >
          <div className="flex items-center mb-2">
            {icon}
            <h3 className="ml-2 text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </button>
      ))}
    </div>
  );
}