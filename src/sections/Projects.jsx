import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "../components/Button";

const projects = [
   {
    title: "Simple Hero Section",
    description: "AAAAA",
    image: "/projects/project4.png",
    tags: ["Figma", "React", "Tailwind CSS", "Vercel", "GitHub",],
    link: "#",
    github: "#",
  },
  {
    title: "RWMS",
    description: "AAAAA",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Arduino",],
    link: "#",
    github: "#",
  },
  {
    title: "APARREL ARRAY",
    description: "AAAAA",
    image: "/projects/project2.png",
    tags: ["Figma", "Illustrator", "Davinci"],
    link: "#",
    github: "#",
  },
  {
    title: "BRIDGE BLUE PRINT",
    description: "AAAAA",
    image: "/projects/project1.png",
    tags: ["Illustrator", "Photoshop", "Figma"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BACKGROUND */}
   <div className="absolute top-25 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    
      <div className="container mx-auto px-6 relative z-10">
        {/* TOP */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-6 animate-fade-in animate-delay-100">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white ">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A showcase of my recent work, from making graphics to web applications.
          </p>
        </div>
        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* IMG */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* LINKS */}

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className=" p-6 space-y-4">
                <div className="flex items-start justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm ">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1 rounded-lg font-medium border text-muted-foreground hover:text-primary
                       hover:border-primary/50 border-border/50 bg-surface trasition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        {/* <div>
          <a
            href="#"
            className="flex justify-center mt-12 animate-fade-in animate-delay-500"
          >
            <div
              className="relative border text-muted-foreground hover:text-primary hover:border-primary/50 border-border
             bg-transparent trasition-all duration-300 px-6 py-2 text-sm 
            rounded-lg overflow-visible animated-border"
            >
              <span className="uppercase relative z-10 flex items-center justify-center gap-2 transition-all duration-500">
                View all
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
};
