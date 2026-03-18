import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Calendar = () => {
  const today = new Date();
  const [current, setCurrent] = useState({
    month: today.getMonth(),
    year: today.getFullYear(),
  });
  const [marked, setMarked] = useState([]);

  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();
  const firstDay = new Date(current.year, current.month, 1).getDay();

  const prev = () =>
    setCurrent((c) => {
      const d = new Date(c.year, c.month - 1);
      return { month: d.getMonth(), year: d.getFullYear() };
    });

  const next = () =>
    setCurrent((c) => {
      const d = new Date(c.year, c.month + 1);
      return { month: d.getMonth(), year: d.getFullYear() };
    });

  const toggleMark = (day) => {
    const key = `${current.year}-${current.month}-${day}`;
    setMarked((prev) =>
      prev.includes(key) ? prev.filter((d) => d !== key) : [...prev, key]
    );
  };

  const isToday = (day) =>
    day === today.getDate() &&
    current.month === today.getMonth() &&
    current.year === today.getFullYear();

  const isMarked = (day) =>
    marked.includes(`${current.year}-${current.month}-${day}`);

  const monthName = new Date(current.year, current.month).toLocaleString(
    "default",
    { month: "long" }
  );

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {monthName} {current.year}
        </p>
        <button
          onClick={next}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div
            key={i}
            className="text-center text-xs text-muted-foreground/50 py-0.5"
          >
            {d}
          </div>
        ))}

        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              onClick={() => toggleMark(day)}
              className={`text-center text-xs py-1 rounded transition-all ${
                isToday(day)
                  ? "bg-primary text-background font-bold"
                  : isMarked(day)
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:bg-surface hover:text-foreground"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};