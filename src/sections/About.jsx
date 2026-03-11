import { CodeIcon, Frame, Database, PaletteIcon } from "lucide-react";

const skills = [
  {
    icon: Frame,
    title: "Frontend Fundamentals",
    description: "Building responsive and interactive ui.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind css"],
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
    tech: ["Figma", "Adobe Suite", "ClipStudio Paint"],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className=" container max-w-6xl mx-auto px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
          {/* LEFT */}

          {/* TOP */}
          <div className="relative space-y-8">
            <div className=" animate-fade-in">
              <span className="text-secondary-foreground text-2xl font-regular tracking-wider uppercase animate-fade-in">
                About <span className="text-foreground">Me</span>
              </span>
            </div>
            {/* <h2 className=" font-bold text-3xl md:text-xl leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Building with Intention,
              <span className=" text-white ">
                {" "}
                Learning Along the Way.
              </span>
            </h2> */}

            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                Hi!, I am <span className="text-primary">Melvin</span> a Computer engineer grauate. 
                I'm interested in ai, sytems, web dev, design, among other topics.
                I love making simple things that are functional and beautiful. 
                My current focus is on React. 
                I focus on structure, simplicity, and continuous improvement 
              </p>
              <p>
                Outside of coding, I do digital art and graphic design, which helps me stay creative
                and approach design and visuals from a different perspective.
                I'll be working on showcasing some in this portfolio
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300 items-baseline-last">
              <p className="text-foreground">
                "I’m still learning and improving every day. For me, growth
                comes from building consistently, asking questions, and refining
                my skills one step at a time."
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in flex flex-col hover:text-primary"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="">{skill.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 text-sm mt-auto pt-2">
                  {skill.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="cursor-default uppercase text-xs px-4 py-1 rounded-lg font-medium border text-muted-foreground hover:text-primary
                       hover:border-primary/50 border-border/50 bg-surface transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
