import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Projects", value: 12, suffix: "+" },
  { label: "Commits", value: 300, suffix: "+" },
  { label: "Cups of Coffee", value: 111, suffix: "+" },
  { label: "Years Coding", value: 3, suffix: "" },
];

const useCounter = (target, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const CounterItem = ({ label, value, suffix, start }) => {
  const count = useCounter(value, 1500, start);
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-primary">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
};

export const AnimatedCounter = () => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStart(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 w-full">
      {stats.map((stat, idx) => (
        <CounterItem key={idx} {...stat} start={start} />
      ))}
    </div>
  );
};