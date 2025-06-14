
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-accent transition-all duration-300 hover:scale-110 group"
      aria-label="Karanlık modu değiştir"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute top-0 left-0 w-5 h-5 text-yellow-500 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`} 
        />
        <Moon 
          className={`absolute top-0 left-0 w-5 h-5 text-blue-600 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
