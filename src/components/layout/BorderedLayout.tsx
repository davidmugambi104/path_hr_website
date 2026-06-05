import React from 'react';

interface BorderedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BorderedLayout({ children, className = '' }: BorderedLayoutProps): JSX.Element {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}