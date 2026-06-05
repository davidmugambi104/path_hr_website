import React from 'react';

interface SimpleMapProps {
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function SimpleMap({ location, coordinates }: SimpleMapProps): JSX.Element {
  // Default coordinates for Nairobi, Kenya
  const defaultCoordinates = {
    lat: -1.286389,
    lng: 36.817223
  };
  
  const mapCoordinates = coordinates || defaultCoordinates;
  
  // Create a static map URL using a free service (OpenStreetMap via static map service)
  const staticMapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${mapCoordinates.lng},${mapCoordinates.lat}&zoom=15&marker=lonlat:${mapCoordinates.lng},${mapCoordinates.lat};type:material;color:%23ff4d4d;icontype:awesome&apiKey=`;
  
  // Fallback to a simple placeholder if the map service doesn't work
  const fallbackMapUrl = `https://www.mapquestapi.com/staticmap/v5/map?locations=${mapCoordinates.lat},${mapCoordinates.lng}&size=600,400@2x&key=`;
  
  // Simple SVG map placeholder as ultimate fallback
  const renderMapPlaceholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
      <div className="text-center p-4">
        <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
          <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">Our Location</h3>
        <p className="text-gray-600 text-sm">{location || 'Nairobi, Kenya'}</p>
        <div className="mt-4 text-xs text-gray-500">
          <p>Interactive map showing our office location</p>
          <p className="mt-1">Lat: {mapCoordinates.lat.toFixed(6)}, Lng: {mapCoordinates.lng.toFixed(6)}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative bg-gray-50 border border-gray-200">
      {/* Simple placeholder map - no API key required */}
      {renderMapPlaceholder()}
      
      {/* Map attribution */}
      <div className="absolute bottom-1 right-1 bg-white/80 backdrop-blur-sm text-xs text-gray-600 px-2 py-1 rounded">
        Location Map
      </div>
    </div>
  );
}