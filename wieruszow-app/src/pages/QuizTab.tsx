import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { refreshOutline, trophyOutline, checkmarkCircle, closeCircle, arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';
import { quizQuestions } from '../data/quiz';

type QuizState = 'start' | 'playing' | 'result';

const QuizTab: React.FC = () => {
  const [state, setState] = useState<QuizState>('start');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const question = quizQuestions[currentQ];
  const selectedAnswer = answers[currentQ] ?? null;
  const showExplanation = selectedAnswer !== null;

  const startQuiz = () => {
    setState('playing');
    setCurrentQ(0);
    setScore(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
  };

  const selectAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = index;
    setAnswers(newAnswers);
    if (index === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= quizQuestions.length) {
      setState('result');
    } else {
      setCurrentQ((q) => q + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ((q) => q - 1);
    }
  };

  /* ── START SCREEN ── */
  if (state === 'start') {
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
          <div
            style={{
              background: 'linear-gradient(155deg, #053822 0%, #0D6B3F 40%, #1A8B5A 75%, #3BA775 100%)',
              margin: '-8px -20px 0',
              padding: '56px 28px 48px',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {/* Decorative blobs */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-20px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-30px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,145,58,0.1) 0%, transparent 70%)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>🧠</div>
              <h1
                style={{
                  fontSize: '30px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: '0 0 12px',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.15,
                }}
              >
                Test wiedzy
              </h1>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.5,
                  margin: '0 auto',
                  maxWidth: '280px',
                }}
              >
                Sprawdź swoją wiedzę o atrakcjach powiatu wieruszowskiego!
              </p>
            </div>
          </div>

          <div style={{ padding: '28px 4px' }}>
            {/* Stats cards */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
              <StatCard emoji="❓" value={`${quizQuestions.length}`} label="pytań" />
              <StatCard emoji="⏱️" value="~3" label="minuty" />
              <StatCard emoji="🏆" value="100%" label="do zdobycia" />
            </div>

            <IonButton
              expand="block"
              size="large"
              onClick={startQuiz}
              style={{
                '--border-radius': '16px',
                '--background': 'linear-gradient(135deg, #0D6B3F 0%, #1A8B5A 100%)',
                '--box-shadow': '0 4px 16px rgba(13, 107, 63, 0.3)',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.2px',
              } as React.CSSProperties}
            >
              Rozpocznij quiz
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  /* ── RESULT SCREEN ── */
  if (state === 'result') {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = '';
    let emoji = '';
    if (percentage === 100) {
      message = 'Doskonale! Jesteś ekspertem!';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = 'Świetny wynik! Znasz ten region!';
      emoji = '🌟';
    } else if (percentage >= 50) {
      message = 'Dobry wynik! Warto pozwiedzać!';
      emoji = '👍';
    } else {
      message = 'Czas na wycieczkę!';
      emoji = '🗺️';
    }

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
        <IonContent fullscreen className="ion-padding">
          <div style={{ textAlign: 'center', paddingTop: '24px' }}>
            <div style={{ fontSize: '56px', marginBottom: '8px' }}>{emoji}</div>

            <div className="score-circle">
              <span className="score-number">
                {score}/{quizQuestions.length}
              </span>
              <span className="score-label">{percentage}%</span>
            </div>

            <h2
              style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#1A1D23',
                margin: '20px 0 8px',
                letterSpacing: '-0.3px',
              }}
            >
              {message}
            </h2>

            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
              Poprawne odpowiedzi: {score} z {quizQuestions.length}
            </p>

            <IonButton
              expand="block"
              size="large"
              onClick={startQuiz}
              style={{
                '--border-radius': '16px',
                '--background': 'linear-gradient(135deg, #0D6B3F 0%, #1A8B5A 100%)',
                '--box-shadow': '0 4px 16px rgba(13, 107, 63, 0.3)',
                fontSize: '17px',
                fontWeight: 700,
              } as React.CSSProperties}
            >
              <IonIcon icon={refreshOutline} slot="start" />
              Spróbuj ponownie
            </IonButton>

            <IonButton
              expand="block"
              fill="outline"
              routerLink="/places"
              style={{
                '--border-radius': '16px',
                '--border-color': '#E5E7EB',
                '--color': '#1A1D23',
                marginTop: '12px',
                fontSize: '16px',
                fontWeight: 600,
              } as React.CSSProperties}
            >
              <IonIcon icon={trophyOutline} slot="start" />
              Odkryj miejsca z quizu
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  /* ── PLAYING STATE ── */
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
            <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>
              Travel<span style={{ color: '#D41876' }}>PL</span>
            </span>
          </div>
          <div
            slot="start"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingLeft: '16px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#0D6B3F',
                background: '#ECFDF5',
                padding: '4px 12px',
                borderRadius: '20px',
              }}
            >
              {currentQ + 1} / {quizQuestions.length}
            </span>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {/* Progress bar */}
        <div
          style={{
            height: '5px',
            background: '#E5E7EB',
            borderRadius: '20px',
            marginBottom: '28px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #0D6B3F, #1A8B5A)',
              borderRadius: '20px',
              width: `${progress}%`,
              transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>

        {/* Question */}
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: '#1A1D23',
            lineHeight: 1.35,
            margin: '0 0 24px',
            letterSpacing: '-0.3px',
          }}
        >
          {question.question}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctIndex;
            const isSelected = index === selectedAnswer;
            const answered = selectedAnswer !== null;

            let bg = '#FFFFFF';
            let border = '#E5E7EB';
            let textColor = '#1A1D23';
            let iconEl: React.ReactNode = null;
            let shadow = '0 1px 4px rgba(0,0,0,0.04)';

            if (answered) {
              if (isCorrect) {
                bg = '#ECFDF5';
                border = '#0D6B3F';
                textColor = '#065F46';
                shadow = '0 2px 8px rgba(13, 107, 63, 0.12)';
                iconEl = (
                  <IonIcon
                    icon={checkmarkCircle}
                    style={{ fontSize: '22px', color: '#0D6B3F', marginLeft: 'auto', flexShrink: 0 }}
                  />
                );
              } else if (isSelected) {
                bg = '#FEF2F2';
                border = '#D32F2F';
                textColor = '#991B1B';
                shadow = '0 2px 8px rgba(211, 47, 47, 0.12)';
                iconEl = (
                  <IonIcon
                    icon={closeCircle}
                    style={{ fontSize: '22px', color: '#D32F2F', marginLeft: 'auto', flexShrink: 0 }}
                  />
                );
              } else {
                bg = '#F9FAFB';
                border = '#F3F4F6';
                textColor = '#9CA3AF';
              }
            }

            return (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  width: '100%',
                  padding: '16px 18px',
                  background: bg,
                  border: `2px solid ${border}`,
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: textColor,
                  cursor: answered ? 'default' : 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'inherit',
                  minHeight: '56px',
                  boxShadow: shadow,
                  letterSpacing: '-0.1px',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: answered && isCorrect ? '#0D6B3F' : answered && isSelected ? '#D32F2F' : '#F3F4F6',
                    color: answered && (isCorrect || isSelected) ? '#FFF' : '#6B7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span style={{ flex: 1, lineHeight: 1.4 }}>{option}</span>
                {iconEl}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            style={{
              marginTop: '20px',
              padding: '16px 18px',
              background: '#FFFBEB',
              borderRadius: '16px',
              border: '1px solid #FDE68A',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#92400E',
                fontWeight: 500,
              }}
            >
              <span style={{ fontWeight: 700 }}>Wyjaśnienie: </span>
              {question.explanation}
            </p>
          </div>
        )}

        {/* Navigation buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
          {currentQ > 0 && (
            <IonButton
              size="large"
              onClick={prevQuestion}
              fill="outline"
              style={{
                '--border-radius': '16px',
                '--border-color': '#E5E7EB',
                '--color': '#6B7280',
                fontSize: '15px',
                fontWeight: 600,
                flex: 'none',
                width: '56px',
              } as React.CSSProperties}
            >
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          )}
          {selectedAnswer !== null && (
            <IonButton
              expand="block"
              size="large"
              onClick={nextQuestion}
              style={{
                '--border-radius': '16px',
                '--background': 'linear-gradient(135deg, #0D6B3F 0%, #1A8B5A 100%)',
                '--box-shadow': '0 4px 16px rgba(13, 107, 63, 0.3)',
                fontSize: '17px',
                fontWeight: 700,
                flex: 1,
              } as React.CSSProperties}
            >
              {currentQ + 1 >= quizQuestions.length ? 'Zobacz wynik' : 'Następne pytanie'}
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

/* ── Stat Card (start screen) ── */
const StatCard: React.FC<{ emoji: string; value: string; label: string }> = ({
  emoji,
  value,
  label,
}) => (
  <div
    style={{
      flex: 1,
      background: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px 12px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.04)',
    }}
  >
    <div style={{ fontSize: '24px', marginBottom: '6px' }}>{emoji}</div>
    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1D23', letterSpacing: '-0.3px' }}>
      {value}
    </div>
    <div style={{ fontSize: '12px', color: '#8A919E', fontWeight: 600 }}>{label}</div>
  </div>
);

export default QuizTab;
