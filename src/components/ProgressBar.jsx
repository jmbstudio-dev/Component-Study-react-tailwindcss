import { useEffect, useState, useRef } from "react";

const skills = [
  { label: "React", value: 90 },
  { label: "Figma", value: 85 },
  { label: "Node.js", value: 70 },
  { label: "Python", value: 65 },
];

export const ProgressBar = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-3 w-full">
      {skills.map((skill, idx) => (
        <div key={idx}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground uppercase tracking-wider">{skill.label}</span>
            <span className="text-primary">{skill.value}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-border/50 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: animated ? `${skill.value}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};