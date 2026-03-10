import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { places } from '../data/places';

// Fix Leaflet default marker icon issue with bundlers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const categoryColors: Record<string, string> = {
  zabytki: '#92400E',
  sakralne: '#7C3AED',
  przyroda: '#0D6B3F',
  kultura: '#1E40AF',
  parki: '#065F46',
};

const MapTab: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [51.2962, 18.154],
      zoom: 11,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 18,
    }).addTo(map);

    // Add markers for all places
    places.forEach((place) => {
      const color = categoryColors[place.category] || '#1B5E20';

      const customIcon = L.divIcon({
        html: `<div style="
          background: ${color};
          width: 36px;
          height: 36px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 2.5px solid white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        "><span style="transform: rotate(45deg); font-size: 15px; color: white; font-weight: 800;">${
          place.name.charAt(0)
        }</span></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
        className: '',
      });

      const marker = L.marker([place.lat, place.lng], { icon: customIcon }).addTo(map);

      marker.bindPopup(
        `<div style="min-width: 200px; font-family: 'Inter', system-ui, sans-serif; padding: 6px;">
          <h3 style="margin: 0 0 6px; font-size: 15px; font-weight: 700; color: #1A1D23; letter-spacing: -0.2px;">${place.name}</h3>
          <p style="margin: 0 0 12px; font-size: 13px; color: #6B7280; line-height: 1.45;">${place.shortDescription}</p>
          <a href="${import.meta.env.BASE_URL}places/${place.id}"
             style="display: inline-block; background: linear-gradient(135deg, #0D6B3F, #1A8B5A); color: white; padding: 8px 18px; border-radius: 12px; text-decoration: none; font-size: 13px; font-weight: 700; letter-spacing: -0.1px;">
            Zobacz szczegoly
          </a>
        </div>`,
        { maxWidth: 280 }
      );
    });

    mapInstanceRef.current = map;

    // Force resize after render
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
            <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>
              Travel<span style={{ color: '#D41876' }}>PL</span>
            </span>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <div
          ref={mapRef}
          className="map-container"
          style={{ width: '100%', height: '100%' }}
        />
      </IonContent>
    </IonPage>
  );
};

export default MapTab;
