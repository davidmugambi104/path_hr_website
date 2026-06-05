import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LeafletMapProps {
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function LeafletMap({ location, coordinates }: LeafletMapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Default coordinates for Nairobi, Kenya
  const defaultCoordinates = {
    lat: -1.286389,
    lng: 36.817223
  };
  
  const mapCoordinates = coordinates || defaultCoordinates;

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map only once
    if (!mapInstanceRef.current) {
      // Create map instance
      const map = L.map(mapRef.current).setView([mapCoordinates.lat, mapCoordinates.lng], 15);
      
      // Add OpenStreetMap tiles (free, no API key required)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);
      
      // Add marker
      L.marker([mapCoordinates.lat, mapCoordinates.lng]).addTo(map)
        .bindPopup(location || 'BoldPath HR Location')
        .openPopup();
      
      // Store map instance
      mapInstanceRef.current = map;
    } else {
      // Update view if coordinates change
      mapInstanceRef.current.setView([mapCoordinates.lat, mapCoordinates.lng], 15);
      
      // Update marker
      const marker = L.marker([mapCoordinates.lat, mapCoordinates.lng]).addTo(mapInstanceRef.current)
        .bindPopup(location || 'BoldPath HR Location');
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapCoordinates.lat, mapCoordinates.lng, location]);

  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative border border-gray-200">
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ background: '#f0f0f0' }}
      />
      
      {/* Loading indicator */}
      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-xs text-gray-600 px-2 py-1 rounded shadow">
        OpenStreetMap
      </div>
    </div>
  );
}