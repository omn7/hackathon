import React from 'react';
import { Link } from 'react-router-dom';
import { Book as BookIcon } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                    transition-transform hover:scale-105">
      <Link to={`/book/${book.id}`}>
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <BookIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {book.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;