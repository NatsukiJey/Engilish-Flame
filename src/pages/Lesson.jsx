// src/pages/Lesson.jsx
import { useState } from "react";
import { getLevel } from "../data/levels";
import QuestionCard from "../components/QuestionCard";

export default function Lesson({
  levelId,
  data,
  setData,
  setPage,
  startLevel
}) {
  const currentLevel = getLevel(levelId) || getLevel(1);
  const questions = currentLevel.questions || [];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Track question IDs that already gave XP in this session
  const [awardedQuestionIds, setAwardedQuestionIds] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [levelFinished, setLevelFinished] = useState(false);
  const [heartsDepleted, setHeartsDepleted] = useState(false);

  const isAlreadyCompleted = (data.completedLevels || []).includes(currentLevel.id);
  const currentQuestion = questions[questionIndex] || questions[0];

  // Check the answer
  const handleCheckAnswer = () => {
    if (!selected || selected.trim() === "") return;

    const normalizedSelected = selected.trim().toLowerCase();
    const normalizedAnswer = currentQuestion.answer.trim().toLowerCase();
    const correct = normalizedSelected === normalizedAnswer;

    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setCorrectCount((prev) => prev + 1);

      // Award XP ONLY if not repeat level and not already rewarded for this question
      if (!isAlreadyCompleted && !awardedQuestionIds.includes(currentQuestion.id)) {
        setAwardedQuestionIds((prev) => [...prev, currentQuestion.id]);
        setData((old) => ({
          ...old,
          xp: old.xp + 3 // 3 XP per question
        }));
      }
    } else {
      // Deduct 1 life
      const remainingLives = Math.max(0, data.lives - 1);
      setData((old) => ({
        ...old,
        lives: remainingLives
      }));

      if (remainingLives <= 0) {
        setHeartsDepleted(true);
      }
    }
  };

  // Move to next question or complete level
  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelected("");
      setIsChecked(false);
      setIsCorrect(false);
    } else {
      // Level completed!
      if (!isAlreadyCompleted) {
        // Bonus XP on first level completion
        const completionBonus = currentLevel.xpReward - questions.length * 3;
        const finalBonus = Math.max(5, completionBonus);

        setData((old) => {
          const oldList = old.completedLevels || [];
          const updatedLevels = oldList.includes(currentLevel.id)
            ? oldList
            : [...oldList, currentLevel.id];

          return {
            ...old,
            xp: old.xp + finalBonus,
            completed: Math.max(old.completed, currentLevel.id),
            completedLevels: updatedLevels,
            flame: old.flame + 1
          };
        });
      }

      setLevelFinished(true);
    }
  };

  // Retry current question after a mistake
  const handleRetryQuestion = () => {
    if (data.lives <= 0) {
      setHeartsDepleted(true);
      return;
    }
    setSelected("");
    setIsChecked(false);
    setIsCorrect(false);
  };

  // ==========================================
  // LEVEL COMPLETED RESULT SCREEN
  // ==========================================
  if (levelFinished) {
    return (
      <main className="complete-screen container">
        <div className="complete-card">
          <div className="big-flame">🔥</div>
          <span className="complete-badge">{currentLevel.stage} bosqichi</span>
          <h1>Level {currentLevel.id} Yakunlandi!</h1>
          <p className="complete-topic">
            Mavzu: <strong>{currentLevel.topic}</strong> ({currentLevel.title})
          </p>

          <div className="complete-stats-grid">
            <div className="complete-stat">
              <span className="stat-label">To‘g‘ri javoblar</span>
              <strong>
                {correctCount} / {questions.length}
              </strong>
            </div>
            <div className="complete-stat">
              <span className="stat-label">Qolgan jonlar</span>
              <strong>❤️ {data.lives}</strong>
            </div>
            <div className="complete-stat">
              <span className="stat-label">XP Daromadi</span>
              <strong className="xp-highlight">
                {isAlreadyCompleted ? "0 XP (Takroriy)" : `+${currentLevel.xpReward} XP`}
              </strong>
            </div>
          </div>

          <div className="complete-buttons">
            {currentLevel.id < 25 ? (
              <button
                type="button"
                className="primary"
                onClick={() => startLevel(currentLevel.id + 1)}
              >
                Keyingi level ({currentLevel.id + 1}) →
              </button>
            ) : (
              <div className="grand-finished">
                🎉 Tabriklaymiz! Siz barcha 25 levelni to‘liq tamomladingiz!
              </div>
            )}

            <button
              type="button"
              className="secondary"
              onClick={() => startLevel(currentLevel.id)}
            >
              🔄 Qayta takrorlash
            </button>

            <button
              type="button"
              className="secondary"
              onClick={() => setPage("dashboard")}
            >
              📚 Barcha darslarga qaytish
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ==========================================
  // NO LIVES REMAINING MODAL / BANNER
  // ==========================================
  if (heartsDepleted) {
    return (
      <main className="container hearts-depleted-screen">
        <div className="depleted-card">
          <div className="broken-heart">💔</div>
          <h2>Jonlaringiz tugadi!</h2>
          <p>
            Darsni davom ettirish uchun Flame Shop orqali XP evaziga jon tiklang
            yoki mashg'ulot uchun 1 ta bepul jon oling.
          </p>

          <div className="depleted-actions">
            <button
              type="button"
              className="primary"
              onClick={() => setPage("shop")}
            >
              🛒 Shop orqali jon olish (150 XP)
            </button>
            <button
              type="button"
              className="secondary"
              onClick={() => {
                setData((old) => ({ ...old, lives: 1 }));
                setHeartsDepleted(false);
              }}
            >
              ❤️ 1 ta bepul jon bilan davom etish
            </button>
            <button
              type="button"
              className="secondary"
              onClick={() => setPage("dashboard")}
            >
              📚 Darslarga qaytish
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ==========================================
  // ACTIVE LESSON VIEW
  // ==========================================
  const progressPercent = Math.round(
    ((questionIndex + 1) / questions.length) * 100
  );

  return (
    <main className="lesson container">
      {/* Top Bar inside Lesson */}
      <div className="lesson-top-bar">
        <button
          type="button"
          className="back"
          onClick={() => setPage("dashboard")}
        >
          ← Chiqish
        </button>

        <div className="lesson-info">
          <span className="lesson-stage-pill">{currentLevel.stage}</span>
          <h2>
            Level {currentLevel.id}: {currentLevel.title}
          </h2>
          <small className="lesson-topic">{currentLevel.topic}</small>
        </div>

        <div className="lesson-hearts">
          ❤️ <strong>{data.lives}</strong>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="lesson-progress-wrap">
        <div className="progress">
          <div style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="lesson-counter">
          <span>
            Savol {questionIndex + 1} / {questions.length}
          </span>
          {isAlreadyCompleted && (
            <span className="repeat-tag">Takrorlash rejimi (XP berilmaydi)</span>
          )}
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        selected={selected}
        setSelected={setSelected}
        isChecked={isChecked}
        isCorrect={isCorrect}
        onCheck={handleCheckAnswer}
        onNext={handleNextQuestion}
        onRetry={handleRetryQuestion}
        canRetry={data.lives > 0}
      />
    </main>
  );
}
