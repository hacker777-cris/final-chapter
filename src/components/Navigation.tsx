import React from 'react';
import { Heart } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Our Story</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#intro" className="text-gray-700 hover:text-rose-500 transition-colors">Home</a>
            <a href="#journey" className="text-gray-700 hover:text-rose-500 transition-colors">Our Journey</a>
            <a href="#cooking" className="text-gray-700 hover:text-rose-500 transition-colors">Cooking</a>
            <a href="#nursing" className="text-gray-700 hover:text-rose-500 transition-colors">Nursing</a>
            <a href="#future" className="text-gray-700 hover:text-rose-500 transition-colors">Future</a>
          </div>
        </div>
      </div>
    </nav>
  );
};