import React, { useState } from 'react';

export function SearchBar(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real implementation, this would search content
      alert(`Searching for: ${searchQuery}\n(In a full implementation, this would search the website content)`);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search services, articles, FAQs..."
          className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-sans text-sm"
          aria-label="Search website"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button 
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent text-white rounded-full p-2 hover:bg-primary transition-colors"
          aria-label="Submit search"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}