import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Search, Menu, X, Moon, Sun } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">eBookHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;