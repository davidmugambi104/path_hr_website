import React from 'react';

export function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-display font-bold text-primary mb-4">404</div>
        <h1 className="text-4xl font-display font-bold text-primary mb-6">Page Not Found</h1>
        <p className="text-xl text-gray-600 font-sans mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="bg-accent text-white px-8 py-4 rounded-xl font-display font-semibold hover:bg-primary transition-colors"
          >
            Go Home
          </a>
          <a 
            href="/#contact" 
            className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-display font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}