import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  { question: "What is this?", answer: "A simple accordion component built with React and Tailwind." },
  { question: "How does it work?", answer: "Each item tracks its own open state and toggles on click." },
  { question: "Can I customize it?", answer: "Yes — swap out the items array with your own content." },
];

export const Accordion = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-2 w-full">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-lg border border-border/50 overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:text-primary transition-colors"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                openIdx === idx ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIdx === idx ? "max-h-40 py-3 px-4" : "max-h-0"
            }`}
          >
            <p className="text-sm text-muted-foreground">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};