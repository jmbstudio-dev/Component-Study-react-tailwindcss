import { ChevronLeft, ChevronRight, Paintbrush } from "lucide-react";
import { useState } from "react";

const creatives = [
  {
    image: "/profile-photo.png",
    title: "Portrait",
    role: "Aleziar.viiiin",
    link: "#",
  },
  {
    image: "/creatives/Art1.png",
    title: "Fanart",
    role: "Aleziar.viiiin",
    link: "#",
  },
  {
    image: "/creatives/Art2.png",
    title: "Commission",
    role: "Aleziar.viiiin",
    link: "#",
  },
  {
    image: "/creatives/Art3.png",
    title: "Commission",
    role: "Aleziar.viiiin",
    link: "#",
  },
];

export const Creatives = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % creatives.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + creatives.length) % creatives.length);
  };

  return (
    <section id="creatives" className="py-32 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* TOP */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            CREATIVE EXPRESSION
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in 
          animate-delay-100 text-secondary-foreground"
          >
            No rules.{" "}
            <span className="font-serif italic font-normal text-white">
              Just passion.
            </span>
          </h2>
        </div>

        {/* CARAUSEL */}

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* MAIN */}
            <div className="glass p-6 rounded-3xl md:p-8 animate-fade-in animate-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="relative gap-4">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={creatives[activeIdx].image}
                    alt={creatives[activeIdx].title}
                    className="w-full h-full rounded-lg object-scale-down ring-2 ring-primary/20"
                  />
                </div>

                <div>
                  <div className="font-semibold">
                    {creatives[activeIdx].title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {creatives[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* NAV */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {creatives.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
