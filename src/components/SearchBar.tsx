import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useBooks } from '../context/BookContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { searchBooks } = useBooks();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchBooks(query);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books by title, author, or genre..."
        className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-600 
                 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </form>
  );
};

export default SearchBar;