import React, { createContext, useContext, useState, useEffect } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
}

interface BookContextType {
  books: Book[];
  loading: boolean;
  searchBooks: (query: string) => void;
  getBookById: (id: string) => Book | undefined;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

// Sample data - In a real app, this would come from an API
const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    description: 'A story of decadence and excess...'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400',
    description: 'A dystopian social science fiction novel...'
  },
  // Add more sample books as needed
];

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [loading, setLoading] = useState(false);

  const searchBooks = (query: string) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filtered = sampleBooks.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
      setBooks(filtered);
      setLoading(false);
    }, 500);
  };

  const getBookById = (id: string) => {
    return books.find(book => book.id === id);
  };

  return (
    <BookContext.Provider value={{ books, loading, searchBooks, getBookById }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};