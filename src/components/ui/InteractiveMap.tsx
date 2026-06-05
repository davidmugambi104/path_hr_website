import React, { useState } from 'react';

interface InteractiveMapProps {
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function InteractiveMap({ location, coordinates }: InteractiveMapProps): JSX.Element {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Default coordinates for Nairobi, Kenya (you can update these)
  const defaultCoordinates = {
    lat: -1.286389,
    lng: 36.817223
  };
  
  const mapCoordinates = coordinates || defaultCoordinates;
  
  // Create Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDNNXUUv5jV56xSbaYsK5K03Q5d6a4u1R0&q=${encodeURIComponent(location || 'Nairobi, Kenya')}&center=${mapCoordinates.lat},${mapCoordinates.lng}&zoom=15`;
  
  // Fallback static map URL
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${mapCoordinates.lat},${mapCoordinates.lng}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${mapCoordinates.lat},${mapCoordinates.lng}&key=AIzaSyDNNXUUv5jV56xSbaYsK5K03Q5d6a4u1R0`;

  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative bg-gray-100">
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <svg className="w-8 h-8 mx-auto text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-2 text-gray-500 font-normal text-sm">
              Loading map...
            </p>
          </div>
        </div>
      )}
      
      {/* Google Maps Embed */}
      <iframe
        src={mapUrl}
        className={`w-full h-full border-0 transition-opacity duration-300 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location Map"
        onLoad={() => setIsMapLoaded(true)}
        onError={() => setIsMapLoaded(true)}
      />
      
      {/* Fallback content in case iframe fails */}
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="mt-2 text-gray-500 font-normal text-sm">
              Interactive map showing our location in {location || 'Nairobi, Kenya'}
            </p>
            <p className="mt-1 text-gray-400 text-xs">
              Address: {location || 'Nairobi, Kenya'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}