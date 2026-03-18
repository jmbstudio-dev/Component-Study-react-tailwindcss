import { useState } from "react";
import { Sparkles } from "lucide-react";

const messages = [
  "Nice click! 🎉",
  "You found me!",
  "Keep going...",
  "Are you sure?",
  "OK stop now 😅",
  "I said stop!",
  "Fine. One more.",
  "...",
  "Really?",
  "🙃",
];

export const ButtonCard = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);

  const handleClick = () => {
    const next = count + 1;
    setCount(next);
    setMessage(messages[Math.min(next - 1, messages.length - 1)]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        {message ?? "Press the button"}
      </p>
      <button
        onClick={handleClick}
        className="relative px-6 py-3 rounded-xl glass hover-glass-border hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center gap-2 text-sm"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        Click me
      </button>
      {count > 0 && (
        <p className="text-xs text-muted-foreground">
          clicked <span className="text-primary">{count}</span> times
        </p>
      )}
    </div>
  );
};