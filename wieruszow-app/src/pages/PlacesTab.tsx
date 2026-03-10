import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonChip,
  IonIcon,
} from '@ionic/react';
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { chevronForwardOutline, compassOutline, sparklesOutline } from 'ionicons/icons';
import { places, categories, type Place } from '../data/places';

const categoryEmoji: Record<string, string> = {
  all: '✨',
  zabytki: '🏰',
  sakralne: '⛪',
  przyroda: '🌿',
  kultura: '🎭',
  parki: '🌳',
};

const PlacesTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const contentRef = useRef<HTMLIonContentElement>(null);

  const filteredPlaces =
    selectedCategory === 'all'
      ? places
      : places.filter((p) => p.category === selectedCategory);

  const featured = places.slice(0, 3);

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
      <IonContent ref={contentRef} fullscreen>
        {/* === HERO SECTION === */}
        <div
          style={{
            background: 'linear-gradient(155deg, #053822 0%, #0D6B3F 40%, #1A8B5A 75%, #3BA775 100%)',
            margin: '-8px -20px 0',
            padding: '48px 24px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative mesh blobs */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-30px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-40px',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,145,58,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Hero content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '6px 14px',
                marginBottom: '16px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <IonIcon icon={compassOutline} style={{ fontSize: '15px' }} />
              Powiat Wieruszowski
            </div>

            <h1
              style={{
                fontSize: '32px',
                fontWeight: 900,
                color: '#FFFFFF',
                margin: '0 0 8px',
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
              }}
            >
              Odkryj piękno{'\n'}
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>regionu</span>
            </h1>

            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.7)',
                margin: '0',
                lineHeight: 1.5,
                maxWidth: '280px',
              }}
            >
              {places.length} atrakcji turystycznych czeka na Ciebie
            </p>
          </div>
        </div>

        {/* === FEATURED CAROUSEL === */}
        <div style={{ margin: '0 -20px', padding: '20px 0 8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              marginBottom: '14px',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#1A1D23',
                margin: 0,
                letterSpacing: '-0.3px',
              }}
            >
              Wyróżnione
            </h2>
            <IonIcon icon={sparklesOutline} style={{ fontSize: '18px', color: '#E8913A' }} />
          </div>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              overflowX: 'auto',
              padding: '0 20px 4px',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
          >
            {featured.map((place, i) => (
              <FeaturedCard key={place.id} place={place} index={i} />
            ))}
          </div>
        </div>

        {/* === CATEGORY FILTERS === */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '16px 0 8px',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((cat) => (
            <IonChip
              key={cat.id}
              className={selectedCategory === cat.id ? 'chip-selected' : ''}
              onClick={() => setSelectedCategory(cat.id)}
              style={{ flexShrink: 0, paddingLeft: '14px', paddingRight: '14px' }}
            >
              <span style={{ marginRight: '6px', fontSize: '15px' }}>
                {categoryEmoji[cat.id] || '📍'}
              </span>
              {cat.label}
            </IonChip>
          ))}
        </div>

        {/* === PLACES GRID === */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            paddingTop: '8px',
            paddingBottom: '16px',
          }}
        >
          {filteredPlaces.map((place, i) => (
            <PlaceCard key={place.id} place={place} index={i} />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 16px',
              color: '#8A919E',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
            <p style={{ fontSize: '16px', fontWeight: 600 }}>Brak miejsc w tej kategorii</p>
          </div>
        )}

        {/* === FOOTER: TRAVELPL + LGD === */}
        <div
          style={{
            background: '#1A1A1A',
            margin: '24px -20px 0',
            padding: '32px 24px',
            borderRadius: '24px 24px 0 0',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
              Travel<span style={{ color: '#D41876' }}>PL</span>
            </span>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
              Transport osobowy. Wynajem busów i autokarów
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 0 20px' }} />

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              Biuro Podróży TravelPL
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              <div>ul. Wrocławska 7, Wieruszów</div>
              <div style={{ marginTop: '8px' }}>
                <a href="tel:+48793705063" style={{ color: '#D41876', fontWeight: 600, textDecoration: 'none' }}>793 705 063</a>
                {' · '}
                <a href="tel:+48883005008" style={{ color: '#D41876', fontWeight: 600, textDecoration: 'none' }}>883 005 008</a>
              </div>
              <div style={{ marginTop: '4px' }}>Pn 16:00–19:00 · Śr 11:00–13:00</div>
            </div>
          </div>

          <a
            href="https://www.facebook.com/transport.autokarow/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: '#1877F2',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px',
              borderRadius: '14px',
              textDecoration: 'none',
              marginBottom: '24px',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Odwiedź nas na Facebooku
          </a>

          <img
            src={`${import.meta.env.BASE_URL}images/logo-lgd.jpg`}
            alt="Logo LGD"
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />

          <div style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '20px' }}>
            © {new Date().getFullYear()} Biuro Podróży TravelPL
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

/* ── Featured Card (Carousel) ── */
const FeaturedCard: React.FC<{ place: Place; index: number }> = ({ place, index }) => {
  const history = useHistory();
  const gradients = [
    'linear-gradient(155deg, #053822 0%, #0D6B3F 50%, #1A8B5A 100%)',
    'linear-gradient(155deg, #1B3A5C 0%, #1565C0 50%, #42A5F5 100%)',
    'linear-gradient(155deg, #5C2D0E 0%, #8B5E3C 50%, #D4A574 100%)',
  ];

  const emojis: Record<string, string> = {
    zabytki: '🏰',
    sakralne: '⛪',
    przyroda: '🌿',
    kultura: '🎭',
    parki: '🌳',
  };

  return (
    <div
      onClick={() => history.push(`/places/${place.id}`)}
      style={{
        flexShrink: 0,
        width: '220px',
        minHeight: '160px',
        borderRadius: '20px',
        background: gradients[index % gradients.length],
        padding: '20px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        color: '#FFFFFF',
        scrollSnapAlign: 'start',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Decorative emoji */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          fontSize: '36px',
          opacity: 0.25,
        }}
      >
        {emojis[place.category] || '📍'}
      </div>

      <div>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          {place.category}
        </span>
        <h3
          style={{
            fontSize: '17px',
            fontWeight: 800,
            margin: '6px 0 0',
            lineHeight: 1.25,
            letterSpacing: '-0.2px',
            maxWidth: '170px',
          }}
        >
          {place.name}
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '13px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.75)',
          marginTop: '12px',
        }}
      >
        Zobacz
        <IonIcon icon={chevronForwardOutline} style={{ fontSize: '14px' }} />
      </div>
    </div>
  );
};

/* ── Place Card (List) ── */
const PlaceCard: React.FC<{ place: Place; index: number }> = ({ place }) => {
  const history = useHistory();
  const emojis: Record<string, string> = {
    zabytki: '🏰',
    sakralne: '⛪',
    przyroda: '🌿',
    kultura: '🎭',
    parki: '🌳',
  };

  const categoryColors: Record<string, { bg: string; text: string }> = {
    zabytki: { bg: '#FEF3C7', text: '#92400E' },
    sakralne: { bg: '#EDE9FE', text: '#5B21B6' },
    przyroda: { bg: '#ECFDF5', text: '#065F46' },
    kultura: { bg: '#DBEAFE', text: '#1E40AF' },
    parki: { bg: '#ECFDF5', text: '#065F46' },
  };

  const colors = categoryColors[place.category] || { bg: '#F3F4F6', text: '#374151' };

  return (
    <div
      onClick={() => history.push(`/places/${place.id}`)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        background: '#FFFFFF',
        borderRadius: '18px',
        padding: '16px',
        cursor: 'pointer',
        color: 'inherit',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.04)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
    >
      {/* Emoji thumbnail */}
      <div
        style={{
          width: '68px',
          height: '68px',
          minWidth: '68px',
          borderRadius: '16px',
          background: `linear-gradient(135deg, ${colors.bg}, ${colors.bg}dd)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
        }}
      >
        {emojis[place.category] || '📍'}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#1A1D23',
            letterSpacing: '-0.2px',
            lineHeight: 1.3,
            marginBottom: '4px',
          }}
        >
          {place.name}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: '#6B7280',
            lineHeight: 1.45,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '6px',
          }}
        >
          {place.shortDescription}
        </div>
        <span
          style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            color: colors.text,
            background: colors.bg,
            padding: '3px 10px',
            borderRadius: '20px',
          }}
        >
          {place.category}
        </span>
      </div>

      {/* Arrow */}
      <IonIcon
        icon={chevronForwardOutline}
        style={{ fontSize: '20px', color: '#D1D5DB', flexShrink: 0 }}
      />
    </div>
  );
};

export default PlacesTab;
