import { CodeIcon, Frame, Database, PaletteIcon } from "lucide-react";

const skills = [
  {
    icon: Frame,
    title: "Frontend Fundamentals",
    description: "Building responsive and interactive user interfaces.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    icon: CodeIcon,
    title: "Backend Architecture",
    description: "Developing server-side logic and APIs.",
    tech: ["Node.js", "Python", "C++"],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    description: "Managing and storing application data.",
    tech: ["SQL", "MongoDB", "Firebase"],
  },
  {
    icon: PaletteIcon,
    title: "Design & Multimedia",
    description: "Creating visuals and UI/UX concepts.",
    tech: ["Figma", "Adobe Suite"],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className=" container max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
          {/* LEFT */}

          {/* TOP */}
          <div className=" space-y-8 ">
            <div className=" animate-fade-in">
              <span className="text-secondary-foreground font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Building with Intention,
              <span className="font-serif italic font-normal text-white ">
                {" "}
                Learning Along the Way.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                I’m an engineer who enjoys building structured and practical
                solutions. My interest in technology started with a curiosity
                about how applications, systems, and websites work. Over time,
                that curiosity led me to create small projects of my own to
                better understand how these technologies function.
              </p>
              <p>
                My current focus is on React, where I work on building clean,
                functional interfaces. I value structure, simplicity, and
                continuous improvement as I continue developing my skills in
                frontend development.
              </p>
              <p>
                Outside of coding, I enjoy exploring new project ideas,
                experimenting with different programming languages and
                technologies, and learning from the developer community. I also
                spend time creating digital art, which helps me stay creative
                and approach design and visuals from a different perspective.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I’m still learning and improving every day. For me, growth
                comes from building consistently, asking questions, and refining
                my skills one step at a time."
              </p>
            </div>
          </div>

          {/* RIGHT */}

          {/* <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in flex flex-col"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                    <skill.icon className="w-4 h-4 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 text-sm mt-auto pt-2">
                  {skill.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="uppercase text-xs px-4 py-1 rounded-lg font-medium border text-muted-foreground hover:text-primary
                       hover:border-primary/50 border-border/50 bg-surface transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};
