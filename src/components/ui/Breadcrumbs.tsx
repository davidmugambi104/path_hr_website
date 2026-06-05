import React, { useEffect, useState } from 'react';

export function Breadcrumbs(): JSX.Element {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    // Update breadcrumbs based on hash changes
    const updateBreadcrumbs = () => {
      const hash = window.location.hash;
      if (hash.includes('about')) setCurrentPage('About Us');
      else if (hash.includes('services')) setCurrentPage('Services');
      else if (hash.includes('team')) setCurrentPage('Our Team');
      else if (hash.includes('contact')) setCurrentPage('Contact');
      else if (hash.includes('case-studies')) setCurrentPage('Case Studies');
      else setCurrentPage('Home');
    };

    updateBreadcrumbs();
    window.addEventListener('hashchange', updateBreadcrumbs);
    
    return () => {
      window.removeEventListener('hashchange', updateBreadcrumbs);
    };
  }, []);

  const breadcrumbs = [
    { name: 'Home', href: '#home' },
    ...(currentPage !== 'Home' ? [{ name: currentPage, href: `#${currentPage.toLowerCase().replace(' ', '-')}` }] : [])
  ];

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-500 font-medium">{crumb.name}</span>
            ) : (
              <a href={crumb.href} className="text-accent hover:text-primary transition-colors">
                {crumb.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}