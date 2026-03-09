import { useState, useEffect, useRef } from "react";
import { ArrowBigUp, Github, Link2 } from "lucide-react";

const projects = [
  {
    title: "Design and Development of RWMS",
    description:
      "This study focuses on the Residential Wastewater Management System (RWMS), which integrates filtration and real-time water monitoring. I handled the web development and IoT connection, allowing real-time data visualization and system control for improved water quality management.",
    images: [
      "/projects/project-rwms-1.png",
      "/projects/rwms-2.png",
      "/projects/rwms-3.png",
      "/projects/rwms-4.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Arduino"],
    link: "https://www.semanticscholar.org/paper/Design-and-Development-of-RWMS%3A-A-Residential-with-Amoto-Burgos/02e4ceee0e3869b381a13f52394555af9370db6a",
    github: "https://github.com/jmbstudio-dev/RWMS-website",
    isLinkAvail: true,
    isGithubAvail: true,
  },
  {
    title: "Apparel Array",
    description:
      "Apparel Array is a retail company I collaborated with to enhance its visual identity and overall branding. The project involved a comprehensive approach to digital presence and creative direction.",
    images: ["/projects/project-1.png"],
    tags: ["Figma", "Illustrator", "After Effects", "Davinci"],
    link: "#",
    github: "#",
    isLinkAvail: true,
    isGithubAvail: false,
  },
  {
    title: "Bridge Blue Print",
    description:
      "Bridge & Blueprint is a strategic marketing agency that helps brands connect with their audiences. I designed their logo, chose their color palette, and selected fonts to create a cohesive and impactful visual identity.",
    images: ["/projects/project-2.png"],
    tags: ["Illustrator", "Photoshop", "Figma"],
    link: "#",
    github: "#",
    isLinkAvail: true,
    isGithubAvail: false,
  },
];

export const Projects = () => {
  const [currentImages, setCurrentImages] = useState(projects.map(() => 0));
  const [isHovered, setIsHovered] = useState(projects.map(() => false));
  const autoSlideTimer = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    const startAutoSlide = () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
      autoSlideTimer.current = setInterval(() => {
        setCurrentImages((prev) =>
          prev.map((imgIdx, i) =>
            isHovered[i] ? imgIdx : (imgIdx + 1) % projects[i].images.length,
          ),
        );
      }, 2000);
    };

    startAutoSlide();
    return () => clearInterval(autoSlideTimer.current);
  }, [isHovered]);

  // Handle manual dot click
  const handleDotClick = (projIdx, imgIdx) => {
    setCurrentImages((prev) => {
      const newArr = [...prev];
      newArr[projIdx] = imgIdx;
      return newArr;
    });

    // Pause auto-slide for 5 seconds on manual interaction
    setIsHovered((prev) => {
      const newHover = [...prev];
      newHover[projIdx] = true;
      return newHover;
    });

    setTimeout(() => {
      setIsHovered((prev) => {
        const newHover = [...prev];
        newHover[projIdx] = false;
        return newHover;
      });
    }, 3000);
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-25 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 relative z-10">
        {/* TOP */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-6 animate-fade-in animate-delay-100">
            Projects that aim{" "}
            <span className="font-serif italic font-normal text-white">
              to make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A showcase of my recent work, from making IoT projects, graphics
            designs to web applications.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* IMG Carousel */}
              <div
                className="relative overflow-hidden aspect-video"
                onMouseEnter={() =>
                  setIsHovered((prev) => {
                    const newHover = [...prev];
                    newHover[idx] = true;
                    return newHover;
                  })
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => {
                    const newHover = [...prev];
                    newHover[idx] = false;
                    return newHover;
                  })
                }
              >
                <img
                  src={project.images[currentImages[idx]]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* LINKS */}
                <div className="absolute inset-0 flex items-baseline-last justify-end p-4 gap-4 ">
                {/* <div className="absolute inset-0 flex items-baseline-last justify-end p-4 gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"> */}
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

                {/* DOT INDICATORS */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        onClick={() => handleDotClick(idx, dotIdx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                          currentImages[idx] === dotIdx
                            ? "bg-primary"
                            : "bg-white/50"
                        }`}
                      ></span>
                    ))}
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mt-2">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 text-sm mt-auto pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-4 py-1 rounded-lg font-medium border text-muted-foreground hover:text-primary
                       hover:border-primary/50 border-border/50 bg-surface transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
