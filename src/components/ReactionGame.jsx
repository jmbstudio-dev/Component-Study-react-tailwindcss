import { useState, useEffect, useRef } from "react";

const STATE = {
  IDLE: "idle",
  WAITING: "waiting",
  GO: "go",
  RESULT: "result",
};

export const ReactionGame = () => {
  const [state, setState] = useState(STATE.IDLE);
  const [reactionTime, setReactionTime] = useState(null);
  const [best, setBest] = useState(null);
  const startTime = useRef(null);
  const timer = useRef(null);

  const start = () => {
    setState(STATE.WAITING);
    const delay = 2000 + Math.random() * 3000;
    timer.current = setTimeout(() => {
      setState(STATE.GO);
      startTime.current = performance.now();
    }, delay);
  };

  const handleClick = () => {
    if (state === STATE.IDLE || state === STATE.RESULT) return start();
    if (state === STATE.WAITING) {
      clearTimeout(timer.current);
      setState(STATE.RESULT);
      setReactionTime("Too early!");
      return;
    }
    if (state === STATE.GO) {
      const elapsed = Math.round(performance.now() - startTime.current);
      setReactionTime(elapsed);
      if (!best || elapsed < best) setBest(elapsed);
      setState(STATE.RESULT);
    }
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  const bg = {
    [STATE.IDLE]: "bg-surface",
    [STATE.WAITING]: "bg-red-500/20",
    [STATE.GO]: "bg-primary/30",
    [STATE.RESULT]: "bg-surface",
  };

  const label = {
    [STATE.IDLE]: "Tap to start",
    [STATE.WAITING]: "Wait for green...",
    [STATE.GO]: "Click now!",
    [STATE.RESULT]: typeof reactionTime === "number"
      ? "Tap to try again"
      : "Too early — tap to retry",
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center h-full w-full rounded-lg cursor-pointer transition-colors duration-300 gap-3 ${bg[state]}`}
    >
      {state === STATE.RESULT && typeof reactionTime === "number" && (
        <p className="text-3xl font-bold text-primary">
          {reactionTime}
          <span className="text-sm text-muted-foreground ml-1">ms</span>
        </p>
      )}
      {state === STATE.RESULT && typeof reactionTime === "number" && best && (
        <p className="text-xs text-muted-foreground">
          best: <span className="text-primary">{best}ms</span>
        </p>
      )}
      {state === STATE.RESULT && reactionTime === "Too early!" && (
        <p className="text-sm text-red-400">Too early!</p>
      )}
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        {label[state]}
      </p>
    </div>
  );
};