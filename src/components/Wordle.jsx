import { useState } from "react";
import { RotateCcw } from "lucide-react";

import { WORDS } from "../data/words";

const getWord = () =>
  WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();

const getTileColor = (letter, idx, target) => {
  if (letter === target[idx])
    return "bg-primary/70 border-primary text-foreground";
  if (target.includes(letter))
    return "bg-yellow-500/40 border-yellow-500/60 text-foreground";
  return "bg-surface border-border/50 text-muted-foreground";
};

export const Wordle = () => {
  const [target, setTarget] = useState(getWord);
  const [guesses, setGuesses] = useState([]);
  const [current, setCurrent] = useState("");
  const [message, setMessage] = useState("");

  const won = guesses[guesses.length - 1] === target;
  const lost = !won && guesses.length >= 6;

  const submit = () => {
    if (current.length !== 5) return setMessage("Need 5 letters");
    if (won || lost) return;
    const next = [...guesses, current.toUpperCase()];
    setGuesses(next);
    setCurrent("");
    if (current.toUpperCase() === target) return setMessage("You got it! 🎉");
    if (next.length >= 6) return setMessage(`It was ${target}`);
    setMessage("");
  };

  const reset = () => {
    setTarget(getWord());
    setGuesses([]);
    setCurrent("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center gap-2 h-full justify-center">
      <div className="flex items-center justify-between w-full">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Wordle
        </p>
        <button
          onClick={reset}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        {Array.from({ length: 6 }).map((_, rowIdx) => {
          const guess = guesses[rowIdx];
          return (
            <div key={rowIdx} className="flex gap-1">
              {Array.from({ length: 5 }).map((_, colIdx) => {
                const letter = guess
                  ? guess[colIdx]
                  : rowIdx === guesses.length
                    ? current[colIdx]
                    : "";
                return (
                  <div
                    key={colIdx}
                    className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold border transition-all duration-300
                      ${guess ? getTileColor(guess[colIdx], colIdx, target) : "border-border/50 bg-surface"}
                    `}
                  >
                    {letter ?? ""}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {!won && !lost && (
        <div className="flex gap-1 mt-1">
          <input
            type="text"
            value={current}
            onChange={(e) =>
              setCurrent(e.target.value.toUpperCase().slice(0, 5))
            }
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="GUESS"
            className="w-24 px-2 py-1 text-xs rounded-lg glass border border-border/50 bg-transparent text-center uppercase tracking-widest focus:outline-none focus:border-primary"
          />
          <button
            onClick={submit}
            className="px-2 py-1 text-xs rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            Go
          </button>
        </div>
      )}

      {message && <p className="text-xs text-primary">{message}</p>}
    </div>
  );
};
