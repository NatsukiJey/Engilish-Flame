// src/pages/Dashboard.jsx
import { useState } from "react";
import { levels, stages } from "../data/levels";

export default function Dashboard({ data, startLevel, setPage }) {
  const [activeStageTab, setActiveStageTab] = useState("all");

  const completedCount = Math.min(25, data.completed);
  const progressPercent = Math.round((completedCount / 25) * 100);

  const filteredLevels =
    activeStageTab === "all"
      ? levels
      : levels.filter((l) => l.stageId === Number(activeStageTab));

  return (
    <main className="container dashboard">
      {/* Dashboard Top Header */}
      <div className="dashboard-header">
        <div>
          <h1>O‘quv markazi 📚</h1>
          <p>Levelarni ketma-ket bajaring va yangi bilimlarni egallang!</p>
        </div>
        <button className="secondary" onClick={() => setPage("home")}>
          ← Asosiy sahifa
        </button>
      </div>

      {/* Progress Bar Card */}
      <div className="progress-card">
        <div className="progress-meta">
          <span>Umumiy natijangiz:</span>
          <strong>
            {completedCount} / 25 level ({progressPercent}%)
          </strong>
        </div>
        <div className="progress">
          <div style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Stage Filter Tabs */}
      <div className="stage-tabs">
        <button
          type="button"
          className={`stage-tab ${activeStageTab === "all" ? "active" : ""}`}
          onClick={() => setActiveStageTab("all")}
        >
          Hammasi (25)
        </button>
        {stages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            className={`stage-tab ${
              activeStageTab === String(stage.id) ? "active" : ""
            }`}
            onClick={() => setActiveStageTab(String(stage.id))}
          >
            {stage.name} ({stage.range})
          </button>
        ))}
      </div>

      {/* Levels Grid */}
      <div className="levels">
        {filteredLevels.map((lvl) => {
          const number = lvl.id;
          const isCompleted =
            number <= data.completed ||
            (data.completedLevels && data.completedLevels.includes(number));
          const isCurrent = number === data.completed + 1;
          const isUnlocked = number <= data.completed + 1;

          return (
            <button
              key={number}
              type="button"
              className={`level-card ${
                isCompleted
                  ? "completed"
                  : isCurrent
                  ? "current"
                  : isUnlocked
                  ? "unlocked"
                  : "locked"
              }`}
              disabled={!isUnlocked}
              onClick={() => startLevel(number)}
            >
              <div className="level-card-top">
                <span className="level-icon">
                  {isCompleted
                    ? "✓"
                    : isCurrent
                    ? "🔥"
                    : isUnlocked
                    ? "🔓"
                    : "🔒"}
                </span>
                <span className="level-badge">{lvl.stage}</span>
              </div>

              <strong className="level-title">
                Level {number}: {lvl.title}
              </strong>

              <p className="level-topic">
                <span>Mavzu:</span> {lvl.topic}
              </p>

              <div className="level-footer">
                <small className="status-label">
                  {isCompleted
                    ? "Bajarilgan ✓"
                    : isCurrent
                    ? "Boshlash 🔥"
                    : isUnlocked
                    ? "Ochiq"
                    : "Yopiq"}
                </small>
                <span className="xp-tag">
                  {isCompleted ? "Qayta takrorlash" : `+${lvl.xpReward} XP`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </main>
  );
}
