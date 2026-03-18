import { useState, useEffect } from "react";

export const ClockTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-1 font-mono">
      <span className="text-3xl font-bold text-primary">{hours}</span>
      <span className="text-3xl font-bold text-muted-foreground animate-pulse">:</span>
      <span className="text-3xl font-bold text-primary">{minutes}</span>
      <span className="text-3xl font-bold text-muted-foreground animate-pulse">:</span>
      <span className="text-3xl font-bold text-foreground">{seconds}</span>
    </div>
  );
};