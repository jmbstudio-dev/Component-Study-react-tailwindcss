import { ArrowBigLeft, ArrowLeft, ArrowUp, ArrowUpRight, Github, Link2, PinIcon } from "lucide-react";
import { Button } from "../components/Button";

const projects = [
  // {
  //   title: "Simple Hero Section",
  //   description: "AAAAA",
  //   image: "/projects/project4.png",
  //   tags: ["Figma", "React", "Tailwind CSS", "Vercel", "GitHub"],
  //   link: "#",
  //   github: "https://github.com/jmbstudio-dev",
  //   isLinkAvail: true, //availability
  //   isGithubAvail: true,
  // },
  {
    title: "Design and Development of RWMS",
    description:
      "This study focuses on the Residential Wastewater Management System (RWMS), which integrates filtration and real-time water monitoring. I handled the web development and IoT connection, allowing real-time data visualization and system control for improved water quality management.",
    image: "/projects/project-rwms-1.png",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Arduino"],
    link: "https://www.semanticscholar.org/paper/Design-and-Development-of-RWMS%3A-A-Residential-with-Amoto-Burgos/02e4ceee0e3869b381a13f52394555af9370db6a",
    github: "https://github.com/jmbstudio-dev/RWMS-website",
    isLinkAvail: true, //availability
    isGithubAvail: true,
  },
  {
    title: "APARREL ARRAY",
    description:
      "Apparel Array is a retail company I collaborated with to enhance its visual identity and overall branding. The project involved a comprehensive approach to digital presence and creative direction.",
    image: "/projects/project-1.png",
    tags: ["Figma", "Illustrator", "Affter effects", "Davinci"],
    link: "#",
    github: "#",
    isLinkAvail: true, //availability
    isGithubAvail: false,
  },
  {
    title: "BRIDGE BLUE PRINT",
    description:
      "Bridge & Blueprint is a strategic marketing agency that helps brands connect with their audiences. I designed their logo, chose their color palette, and selected fonts to create a cohesive and impactful visual identity.",
    image: "/projects/project-2.png",
    tags: ["Illustrator", "Photoshop", "Figma"],
    link: "#",
    github: "#",
    isLinkAvail: true, //availability
    isGithubAvail: false,
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
            Projects that aims{" "}
            <span className="font-serif italic font-normal text-white ">
              {" "}
              to make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A showcase of my recent work, from making Iot projects, graphics
            designs to web applications.
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

                <div className="absolute inset-0 flex items-baseline-last justify-end p-4 gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {project.isLinkAvail && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Link2 className="w-5 h-5" />
                    </a>
                  )}
                  {project.isGithubAvail && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className=" p-6 space-y-4">
                <div className="flex items-start justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* <div>
                    {" "}
                    <ArrowBigLeft
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:-translate-x-1 transition-all"
                    />
                  </div> */}
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
