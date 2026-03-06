import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className=" container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
          {/* LEFT */}

          {/* TOP */}
          <div className=" space-y-8 ">
            <div className=" animate-fade-in">
              <span className="text-secondary-foreground font-medium tracking-wider uppercase" >
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
                I’m an Engineer enjoys building structured and practical solutions. 
                My interest in technology started with curiosity about how applications, systems and websites work, 
                and over time I began creating my own small projects to understand them better.
              </p>
              <p>
                My current focus is on React, building clean and functional interfaces. I value structure, 
                simplicity, and continuous improvement as I grow my skills in frontend development.
              </p>
              <p>
               When I’m not coding, I enjoy exploring interesting project ideas, 
               experimenting with new languages and technologies, and learning from the developer community. 
               I also spend time creating digital art, 
               which helps me stay creative and think differently about design and visuals.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I’m still learning and improving every day. 
                For me, growth comes from building consistently, 
                asking questions, and refining my skills one step at a time."
              </p>
            </div>
          </div>

          {/* RIGHT */}

          {/* <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};
