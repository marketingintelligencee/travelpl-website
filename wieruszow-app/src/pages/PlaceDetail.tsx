import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { navigateOutline, locationOutline, arrowForwardOutline, callOutline } from 'ionicons/icons';
import { places } from '../data/places';

const categoryEmoji: Record<string, string> = {
  zabytki: '🏰',
  sakralne: '⛪',
  przyroda: '🌿',
  kultura: '🎭',
  parki: '🌳',
};

const categoryGradient: Record<string, string> = {
  zabytki: 'linear-gradient(155deg, #4A2C1A 0%, #8B5E3C 50%, #C49A6C 100%)',
  sakralne: 'linear-gradient(155deg, #2D1B4E 0%, #6A1B9A 50%, #AB47BC 100%)',
  przyroda: 'linear-gradient(155deg, #053822 0%, #0D6B3F 50%, #1A8B5A 100%)',
  kultura: 'linear-gradient(155deg, #0D2951 0%, #1565C0 50%, #42A5F5 100%)',
  parki: 'linear-gradient(155deg, #1A3A1A 0%, #2E7D32 50%, #66BB6A 100%)',
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  zabytki: { bg: '#FEF3C7', text: '#92400E' },
  sakralne: { bg: '#EDE9FE', text: '#5B21B6' },
  przyroda: { bg: '#ECFDF5', text: '#065F46' },
  kultura: { bg: '#DBEAFE', text: '#1E40AF' },
  parki: { bg: '#ECFDF5', text: '#065F46' },
};

interface PlaceDetailProps extends RouteComponentProps<{ id: string }> {}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ match }) => {
  const place = places.find((p) => p.id === match.params.id);

  if (!place) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/places" text="Wstecz" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ textAlign: 'center', padding: '64px 24px' }}>
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🔍</div>
            <p style={{ fontSize: '17px', color: '#6B7280', fontWeight: 600 }}>
              Miejsce nie zostało znalezione.
            </p>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
  const gradient = categoryGradient[place.category] || categoryGradient.przyroda;
  const colors = categoryColors[place.category] || { bg: '#F3F4F6', text: '#374151' };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar style={{ '--background': 'transparent', '--color': '#FFFFFF' } as React.CSSProperties}>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/places"
              text=""
              style={{
                '--color': '#FFFFFF',
                background: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '12px',
                width: '40px',
                height: '40px',
                marginLeft: '12px',
              } as React.CSSProperties}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* === HERO IMAGE AREA === */}
        <div
          style={{
            background: gradient,
            margin: '-56px -20px 0',
            padding: '80px 24px 40px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '260px',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '-10%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '120px',
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          >
            {categoryEmoji[place.category] || '📍'}
          </div>

          {/* Center emoji */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -60%)',
              fontSize: '72px',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
            }}
          >
            {categoryEmoji[place.category] || '📍'}
          </div>
        </div>

        {/* === CONTENT CARD — overlaps hero === */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px 24px 0 0',
            marginTop: '-24px',
            marginLeft: '-20px',
            marginRight: '-20px',
            padding: '28px 24px 32px',
            position: 'relative',
            zIndex: 2,
            minHeight: '50vh',
          }}
        >
          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: colors.text,
              background: colors.bg,
              padding: '5px 14px',
              borderRadius: '20px',
              marginBottom: '12px',
            }}
          >
            {place.category}
          </span>

          {/* Title */}
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 900,
              color: '#1A1D23',
              margin: '0 0 16px',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}
          >
            {place.name}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#4B5563',
              margin: '0 0 28px',
            }}
          >
            {place.fullDescription}
          </p>

          {/* Location card */}
          <div
            style={{
              background: '#F7F8FA',
              borderRadius: '16px',
              padding: '16px 18px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                minWidth: '44px',
                borderRadius: '12px',
                background: '#ECFDF5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IonIcon icon={locationOutline} style={{ fontSize: '22px', color: '#0D6B3F' }} />
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#8A919E', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Lokalizacja
              </div>
              <div style={{ fontSize: '15px', color: '#1A1D23', fontWeight: 600, marginTop: '2px' }}>
                {place.lat.toFixed(4)}°N, {place.lng.toFixed(4)}°E
              </div>
            </div>
          </div>

          {/* Navigate button */}
          <IonButton
            expand="block"
            href={googleMapsUrl}
            target="_blank"
            rel="noopener"
            style={{
              '--background': 'linear-gradient(135deg, #E8913A 0%, #D47628 100%)',
              '--border-radius': '16px',
              '--box-shadow': '0 4px 16px rgba(232, 145, 58, 0.35)',
              fontSize: '17px',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '-0.2px',
            } as React.CSSProperties}
          >
            <IonIcon icon={navigateOutline} slot="start" />
            Nawiguj do tego miejsca
            <IonIcon icon={arrowForwardOutline} slot="end" style={{ fontSize: '18px' }} />
          </IonButton>

          {/* Contact button (for places requiring booking) */}
          {place.contact && (
            <div
              style={{
                background: '#F0FDF4',
                borderRadius: '16px',
                padding: '16px 18px',
                marginBottom: '16px',
                border: '1px solid rgba(13, 107, 63, 0.12)',
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#065F46', marginBottom: '6px' }}>
                {place.contact.label}
              </div>
              {place.contact.note && (
                <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.5, marginBottom: '12px' }}>
                  {place.contact.note}
                </div>
              )}
              {place.contact.phone && (
                <a
                  href={`tel:${place.contact.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0D6B3F',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                  }}
                >
                  <IonIcon icon={callOutline} style={{ fontSize: '18px' }} />
                  Zadzwoń: {place.contact.phone.replace('+48', '').replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}
                </a>
              )}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PlaceDetail;
