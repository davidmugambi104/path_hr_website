import React from 'react';

export function LoadingSkeleton(): JSX.Element {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-xl w-full h-64 mb-4"></div>
      <div className="flex-1 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
}