import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { callOutline, locationOutline, heartOutline, mailOutline } from 'ionicons/icons';

const InfoTab: React.FC = () => {
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
      <IonContent fullscreen>
        {/* === HERO HEADER === */}
        <div
          style={{
            background: 'linear-gradient(155deg, #053822 0%, #0D6B3F 40%, #1A8B5A 75%, #3BA775 100%)',
            margin: '-8px -20px 0',
            padding: '48px 24px 36px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-20px',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            }}
          />

          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '22px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '36px',
            }}
          >
            🏰
          </div>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 900,
              color: '#FFFFFF',
              margin: '0 0 6px',
              letterSpacing: '-0.3px',
            }}
          >
            Przewodnik
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.65)',
              margin: 0,
              fontWeight: 500,
            }}
          >
            Wieruszów — Twój przewodnik po regionie
          </p>
        </div>

        <div style={{ padding: '24px 4px 32px' }}>
          {/* === ABOUT === */}
          <section style={{ marginBottom: '28px' }}>
            <SectionTitle text="O aplikacji" />
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#4B5563',
                margin: 0,
              }}
            >
              Witamy w Przewodniku po powiecie wieruszowskim! Ta aplikacja pomoże Ci odkryć
              najciekawsze miejsca w regionie. Skorzystaj z interaktywnej mapy, przeczytaj opisy
              zabytków i sprawdź swoją wiedzę w quizie.
            </p>
          </section>

          {/* === BENTO FEATURES GRID === */}
          <section style={{ marginBottom: '28px' }}>
            <SectionTitle text="Co znajdziesz?" />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              <BentoCard
                emoji="🏰"
                title="Przewodnik"
                desc="Atrakcje z opisami"
                gradient="linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)"
              />
              <BentoCard
                emoji="🗺️"
                title="Mapa"
                desc="Interaktywna mapa"
                gradient="linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)"
              />
              <BentoCard
                emoji="🧠"
                title="Quiz"
                desc="Testuj wiedzę"
                gradient="linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)"
              />
              <BentoCard
                emoji="📍"
                title="Nawigacja"
                desc="Doprowadzi na miejsce"
                gradient="linear-gradient(135deg, #ECFDF5 0%, #A7F3D0 100%)"
              />
            </div>
          </section>

          {/* === CONTACT === */}
          <section style={{ marginBottom: '28px' }}>
            <SectionTitle text="Kontakt" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ContactRow icon={callOutline} label="Telefon" value="793 705 063" href="tel:+48793705063" />
              <ContactRow icon={callOutline} label="Telefon" value="883 005 008" href="tel:+48883005008" />
              <ContactRow icon={mailOutline} label="Email" value="kontakt@travelpl-wieruszow.pl" href="mailto:kontakt@travelpl-wieruszow.pl" />
              <ContactRow icon={locationOutline} label="Adres" value="ul. Wrocławska 7, 98-400 Wieruszów" />
            </div>
          </section>

          {/* === FOOTER === */}
          <div
            style={{
              textAlign: 'center',
              padding: '20px 0 8px',
              borderTop: '1px solid #F3F4F6',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '13px',
                color: '#9CA3AF',
                fontWeight: 500,
              }}
            >
              Zrobione z <IonIcon icon={heartOutline} style={{ fontSize: '14px', color: '#EF4444' }} /> dla Wieruszowa
            </div>
            <p style={{ fontSize: '12px', color: '#D1D5DB', margin: '6px 0 0' }}>
              Wersja 2.0
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

/* ── Section Title ── */
const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <h2
    style={{
      fontSize: '18px',
      fontWeight: 800,
      color: '#1A1D23',
      margin: '0 0 14px',
      letterSpacing: '-0.3px',
    }}
  >
    {text}
  </h2>
);

/* ── Bento Feature Card ── */
const BentoCard: React.FC<{
  emoji: string;
  title: string;
  desc: string;
  gradient: string;
}> = ({ emoji, title, desc, gradient }) => (
  <div
    style={{
      background: gradient,
      borderRadius: '18px',
      padding: '20px 16px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '110px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <div style={{ fontSize: '32px', marginBottom: '10px' }}>{emoji}</div>
    <div>
      <div
        style={{
          fontSize: '15px',
          fontWeight: 700,
          color: '#1A1D23',
          letterSpacing: '-0.2px',
          marginBottom: '2px',
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500 }}>{desc}</div>
    </div>
  </div>
);

/* ── Contact Row ── */
const ContactRow: React.FC<{
  icon: string;
  label: string;
  value: string;
  href?: string;
}> = ({ icon, label, value, href }) => {
  const content = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: '14px 16px',
        border: '1px solid rgba(0,0,0,0.04)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
      }}
    >
      <div
        style={{
          width: '42px',
          height: '42px',
          minWidth: '42px',
          borderRadius: '12px',
          background: '#ECFDF5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IonIcon icon={icon} style={{ fontSize: '20px', color: '#0D6B3F' }} />
      </div>
      <div>
        <div style={{ fontSize: '12px', color: '#8A919E', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
          {label}
        </div>
        <div style={{ fontSize: '15px', color: '#1A1D23', fontWeight: 600, marginTop: '1px' }}>
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </a>
    );
  }

  return content;
};

export default InfoTab;
