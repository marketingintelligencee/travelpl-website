import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { compassOutline, mapOutline, sparklesOutline, informationCircleOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';

/* Core CSS required for Ionic components */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Custom theme */
import './theme/variables.css';

/* Pages */
import PlacesTab from './pages/PlacesTab';
import PlaceDetail from './pages/PlaceDetail';
import MapTab from './pages/MapTab';
import QuizTab from './pages/QuizTab';
import InfoTab from './pages/InfoTab';

setupIonicReact({
  mode: 'ios',
});

function isInAppBrowser(): boolean {
  const ua = navigator.userAgent || navigator.vendor || '';
  return /FBAN|FBAV|Instagram|Messenger|WhatsApp|Snapchat|Line|Twitter|LinkedIn|MicroMessenger|GSA/i.test(ua);
}

function isIosDevice(): boolean {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
}

function InstallPrompt() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [mode, setMode] = useState<'ios' | 'ios-inapp' | 'android'>('android');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;

    const params = new URLSearchParams(window.location.search);
    const forceInstall = params.get('install') === 'true';

    const dismissed = sessionStorage.getItem('install-dismissed');
    if (dismissed && !forceInstall) return;

    const ios = isIosDevice();
    const inApp = isInAppBrowser();

    if (ios && inApp) {
      setMode('ios-inapp');
      setShow(true);
      return;
    }

    if (ios) {
      setMode('ios');
      setShow(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
      if (forceInstall && 'prompt' in e) {
        setTimeout(() => (e as any).prompt(), 300);
      }
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('install-dismissed', '1');
  };

  const installAndroid = async () => {
    if (deferredPrompt && 'prompt' in deferredPrompt) {
      (deferredPrompt as any).prompt();
      dismiss();
    }
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!show) return null;

  const boxStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '60px',
    left: '12px',
    right: '12px',
    zIndex: 99999,
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    border: '1px solid rgba(0,0,0,0.08)',
  };

  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    fontSize: '22px',
    color: '#9CA3AF',
    cursor: 'pointer',
    padding: '4px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 800,
    color: '#1A1D23',
    marginBottom: '8px',
  };

  const btnStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #0D6B3F 0%, #1A8B5A 100%)',
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: '16px',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
  };

  return (
    <div style={boxStyle}>
      <button onClick={dismiss} style={closeStyle}>✕</button>
      <div style={titleStyle}>
        {mode === 'ios-inapp' ? 'Otwórz w Safari' : 'Zainstaluj aplikację'}
      </div>

      {mode === 'ios-inapp' && (
        <div>
          <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.5, margin: '0 0 12px' }}>
            Aby zainstalować aplikację, otwórz ten link w <strong>Safari</strong>. Skopiuj adres i wklej go w Safari.
          </p>
          <button onClick={copyUrl} style={btnStyle}>
            {copied ? 'Skopiowano!' : 'Skopiuj link'}
          </button>
          <p style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', margin: '10px 0 0' }}>
            Potem w Safari: ⬆ Udostępnij → przewiń w dół → "Dodaj do ekranu początkowego"
          </p>
        </div>
      )}

      {mode === 'ios' && (
        <div>
          <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.5, margin: '0 0 12px' }}>
            Kliknij ikonę <strong style={{ fontSize: '20px' }}>⬆</strong> (Udostępnij) na dole ekranu, <strong>przewiń listę w dół</strong> i wybierz:
          </p>
          <div style={{
            background: '#F3F4F6',
            borderRadius: '12px',
            padding: '14px',
            textAlign: 'center',
            fontSize: '15px',
            fontWeight: 600,
            color: '#1A1D23',
          }}>
            + Dodaj do ekranu początkowego
          </div>
          <p style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', margin: '10px 0 0' }}>
            Opcja jest niżej na liście — trzeba przewinąć!
          </p>
        </div>
      )}

      {mode === 'android' && (
        <div>
          <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.5, margin: '0 0 12px' }}>
            Dodaj aplikację do ekranu głównego — będzie działać jak natywna!
          </p>
          <button onClick={installAndroid} style={btnStyle}>
            Zainstaluj
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <IonApp>
      <InstallPrompt />
      <IonReactRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/places" component={PlacesTab} />
            <Route exact path="/places/:id" component={PlaceDetail} />
            <Route exact path="/map" component={MapTab} />
            <Route exact path="/quiz" component={QuizTab} />
            <Route exact path="/info" component={InfoTab} />
            <Redirect exact from="/" to="/places" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="places" href="/places">
              <IonIcon icon={compassOutline} />
              <IonLabel>Odkrywaj</IonLabel>
            </IonTabButton>

            <IonTabButton tab="map" href="/map">
              <IonIcon icon={mapOutline} />
              <IonLabel>Mapa</IonLabel>
            </IonTabButton>

            <IonTabButton tab="quiz" href="/quiz">
              <IonIcon icon={sparklesOutline} />
              <IonLabel>Quiz</IonLabel>
            </IonTabButton>

            <IonTabButton tab="info" href="/info">
              <IonIcon icon={informationCircleOutline} />
              <IonLabel>Info</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
