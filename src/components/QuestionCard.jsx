// src/components/QuestionCard.jsx
import SentenceBuilder from "./SentenceBuilder";

export default function QuestionCard({
  question,
  selected,
  setSelected,
  isChecked,
  isCorrect,
  onCheck,
  onNext,
  onRetry,
  canRetry = true
}) {
  const typeLabels = {
    multiple_choice: { label: "Test", icon: "🎯", color: "#4bd779" },
    translation: { label: "Tarjima", icon: "🌐", color: "#54b2ff" },
    grammar: { label: "Grammatika", icon: "📐", color: "#f5a623" },
    fill_blank: { label: "Bo‘sh joyni to‘ldirish", icon: "✏️", color: "#bd10e0" },
    sentence_building: { label: "Gap tuzish", icon: "🧩", color: "#50e3c2" }
  };

  const currentType = typeLabels[question.type] || {
    label: "Savol",
    icon: "❓",
    color: "#68e58c"
  };

  // Render question text for fill_blank by styling the blank ___
  const renderQuestionText = () => {
    if (question.type === "fill_blank" && question.question.includes("___")) {
      const parts = question.question.split("___");
      return (
        <h2 className="question-prompt fill-blank-prompt">
          {parts[0]}
          <span
            className={`blank-slot ${selected ? "filled" : ""} ${
              isChecked ? (isCorrect ? "correct" : "incorrect") : ""
            }`}
          >
            {selected || "______"}
          </span>
          {parts[1]}
        </h2>
      );
    }
    return <h2 className="question-prompt">{question.question}</h2>;
  };

  return (
    <div className="question-card">
      {/* Type badge and instruction */}
      <div className="question-header">
        <span
          className="type-badge"
          style={{ borderColor: currentType.color, color: currentType.color }}
        >
          {currentType.icon} {currentType.label}
        </span>
        {question.instruction && (
          <p className="instruction">{question.instruction}</p>
        )}
      </div>

      {/* Main Question / Prompt */}
      {renderQuestionText()}

      {/* Interactive Answer Section */}
      <div className="answer-section">
        {question.type === "sentence_building" ? (
          <SentenceBuilder
            key={question.id}
            words={question.options}
            onChange={(val) => {
              if (!isChecked) setSelected(val);
            }}
            disabled={isChecked}
          />
        ) : (
          <div className="answers">
            {question.options.map((option) => {
              const isOptionSelected = selected === option;
              let optionClass = "answer";

              if (isChecked) {
                if (option === question.answer) {
                  optionClass += " correct";
                } else if (isOptionSelected && !isCorrect) {
                  optionClass += " incorrect";
                }
              } else if (isOptionSelected) {
                optionClass += " selected";
              }

              return (
                <button
                  key={option}
                  type="button"
                  className={optionClass}
                  disabled={isChecked}
                  onClick={() => setSelected(option)}
                >
                  <span className="radio-circle"></span>
                  <span className="option-text">{option}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Explanation & Result Banner */}
      {isChecked && (
        <div className={`feedback-banner ${isCorrect ? "success" : "danger"}`}>
          <div className="feedback-title">
            {isCorrect ? (
              <span>🔥 Ajoyib! To‘g‘ri javob!</span>
            ) : (
              <span>
                ❌ Noto‘g‘ri javob. To‘g‘ri javob:{" "}
                <strong>{question.answer}</strong>
              </span>
            )}
          </div>
          {question.explanation && (
            <p className="feedback-explanation">
              💡 <strong>Izoh:</strong> {question.explanation}
            </p>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        {!isChecked ? (
          <button
            type="button"
            className="primary full check-btn"
            disabled={!selected || selected.trim() === ""}
            onClick={onCheck}
          >
            Javobni tekshirish
          </button>
        ) : (
          <div className="post-check-actions">
            {isCorrect ? (
              <button
                type="button"
                className="primary full continue-btn"
                onClick={onNext}
              >
                Davom etish →
              </button>
            ) : (
              <div className="wrong-actions-grid">
                {canRetry && (
                  <button
                    type="button"
                    className="secondary retry-btn"
                    onClick={onRetry}
                  >
                    🔄 Qayta urinish
                  </button>
                )}
                <button
                  type="button"
                  className="primary continue-btn"
                  onClick={onNext}
                >
                  Keyingisiga o‘tish →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
