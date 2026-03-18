import { useState } from "react";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😤", label: "Frustrated" },
  { emoji: "😴", label: "Tired" },
  { emoji: "🤔", label: "Thinking" },
  { emoji: "🔥", label: "Focused" },
  { emoji: "😎", label: "Confident" },
  { emoji: "🥳", label: "Excited" },
  { emoji: "😬", label: "Anxious" },
  { emoji: "🤯", label: "Overwhelmed" },
];

export const EmojiMood = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center gap-3 h-full justify-center">
      {selected ? (
        <div className="flex flex-col items-center gap-2">
          <span className="text-5xl">{selected.emoji}</span>
          <p className="text-sm text-primary uppercase tracking-widest">
            {selected.label}
          </p>
          <button
            onClick={() => setSelected(null)}
            className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1"
          >
            change
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            How are you feeling?
          </p>
          <div className="grid grid-cols-5 gap-1">
            {moods.map((mood, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(mood)}
                className="text-xl p-1 rounded-lg hover:bg-primary/10 transition-all"
                title={mood.label}
              >
                {mood.emoji}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};