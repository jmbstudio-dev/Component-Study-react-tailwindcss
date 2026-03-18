import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/projects/project-1.jpg",
  "/projects/project-2.jpg",
  "/projects/project-3.jpg",
//   "/project-4.jpg",
];

export const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 glass rounded-lg hover:bg-primary/20 transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 glass rounded-lg hover:bg-primary/20 transition-all"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
              current === idx ? "bg-primary" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};