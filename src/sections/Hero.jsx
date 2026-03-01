import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "../components/Button";

const skills = [
  "HTML", // Frontend Development
  "CSS",
  "JavaScript",
  "React",

  "Node.js", // Backend & Programming Languages
  "PHP",
  "Python",
  "C++",

  "SQL", // Databases & Cloud
  "MongoDB",
  "Firebase",
  "AWS",

  "Figma", // Design & Multimedia
  "Photoshop",
  "Illustrator",
  "After Effects",
];

export const Hero = () => {
  return (
    <section className=" relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className=" absolute inset-0">
        <img
          src="/hero-bg-1.png"
          alt="Hero IMG Background"
          className=" w-full h-full object-cover opacity-40"
        />
        <div className=" absolute inset-0 bg-linear-to-b 
        from-background/20 via-black/20 to-background"></div>
      </div>

      {/* PARTICLES */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
              backgroundColor: "#DF3635",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENTS */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT*/}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-primary rounded-lg">
                <span className=" w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animate-delay-100">
                JOHN MELVIN{" "}
                <span className="text-primary glow-text">BURGOS</span>
                {/* , refined
                by <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  Purpose
                </span> */}
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Design from instinct,{" "}
                <span className="italic font-serif tracking-wide">
                  refined by purpose.
                </span>
              </p>
            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button size="sm">
                OPEN TO WORK <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="relative bg-transparent border border-primary transition-all duration-500 px-3 py-2 text-sm rounded-lg overflow-visible animated-border">
                <a href="/RESUME_BURGOS.pdf" target="_blank">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-primary">
                    DOWNLOAD CV <Download className="w-5 h-5" />
                  </span>
                </a>
              </button>
            </div>

            {/* SOCIALS */}

            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              {/* <span className="text-muted-foreground text-sm ">SOCIALS:</span> */}
              {[
                {
                  icon: Github,
                  href: "https://github.com/jmbstudio-dev",
                  target: "_blank",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/jviiinburgos/",
                  target: "_blank",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/j.viiiin/",
                  target: "_blank",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.target}
                  rel={
                    social.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT HERO IMG*/}

          <div className="relative animate-fade-in animated-delay-500 ">
            {/* Profile */}

            <div className=" relative max-w-md mx-auto">
              <div className=" relative">
                <img
                  src="/pfp1.png"
                  alt="John Melvin Burgos"
                  className="relative z-10 w-full aspect-4/4 object-cover rounded-lg "
                />
                {/* BADGE */}

                <div className="z-10 absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Work
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-lg absolute inset-0 bg-linear-to-t 
                from-card via-card/50 to-transparent opacity-60"
                />

                {/*  */}
                {/* <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                  <div className="text-2xl font-bold text-primary">+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* SKILLs */}

        <div className=" mt-20 animate-fade-in animate-delay-600">
          <p className="uppercase text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-6 py-6 ">
                  <span className="uppercase text-xl rounded-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Bottom Scroll usable many */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
