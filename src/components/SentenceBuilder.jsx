// src/components/SentenceBuilder.jsx
import { useState } from "react";

export default function SentenceBuilder({
  words = [],
  onChange,
  disabled = false
}) {
  // Initialize bank with stable identifiers
  const [bank, setBank] = useState(() =>
    words.map((w, index) => ({
      id: `${w}-${index}`,
      text: w
    }))
  );
  const [tray, setTray] = useState([]);

  const handleAddWord = (token) => {
    if (disabled) return;
    const newBank = bank.filter((item) => item.id !== token.id);
    const newTray = [...tray, token];
    setBank(newBank);
    setTray(newTray);
    onChange(newTray.map((t) => t.text).join(" "));
  };

  const handleRemoveWord = (token) => {
    if (disabled) return;
    const newTray = tray.filter((item) => item.id !== token.id);
    const newBank = [...bank, token];
    setTray(newTray);
    setBank(newBank);
    onChange(newTray.map((t) => t.text).join(" "));
  };

  const handleClear = () => {
    if (disabled) return;
    const initialBank = words.map((w, index) => ({
      id: `${w}-${index}`,
      text: w
    }));
    setBank(initialBank);
    setTray([]);
    onChange("");
  };

  return (
    <div className="sentence-builder">
      {/* Constructed sentence display zone */}
      <div className="sentence-tray">
        {tray.length === 0 ? (
          <span className="tray-placeholder">So‘zlarni tanlab, gap tuzing...</span>
        ) : (
          tray.map((token) => (
            <button
              key={token.id}
              type="button"
              className="word-pill in-tray"
              disabled={disabled}
              onClick={() => handleRemoveWord(token)}
              title="Olib tashlash"
            >
              {token.text} <span className="remove-cross">×</span>
            </button>
          ))
        )}
      </div>

      {/* Available words bank */}
      <div className="word-bank">
        {bank.map((token) => (
          <button
            key={token.id}
            type="button"
            className="word-pill in-bank"
            disabled={disabled}
            onClick={() => handleAddWord(token)}
          >
            {token.text}
          </button>
        ))}
      </div>

      {tray.length > 0 && !disabled && (
        <button
          type="button"
          className="clear-tray-btn"
          onClick={handleClear}
        >
          ↺ Tozalash
        </button>
      )}
    </div>
  );
}
