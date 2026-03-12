import {
  CodeIcon,
  Frame,
  Paintbrush,
  ConeIcon,
  Github,
  Link2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const bgcolors = ["#121416", "#24273A", "#EFF1F5"];

const colors = [
  "#9cc8ff",
  "#B4BEFE",
  "#73B6C5",
  "#62A5C6",
  "#7CBAB3",
  "#8ABB8A",
  "#CDBA95",
  "#CAB9B9",
  "#C7AAAD",
  "#CAA1C2",
  "#A88ACE",
  "#C8758F",
];

const infocard = [
  {
    icon: Frame,
    title: "title i",
    description: "description",
    tag: ["tag-1", "tag-2", "tag-3"],
  },
  {
    icon: Frame,
    title: "title ii",
    description: "description",
    tag: ["tag-1", "tag-2", "tag-3"],
  },
];

const projects = [
  {
    title: "Project 1",
    description: "description",
    images: [
      "/projects/project-1.jpg",
      "/projects/project-2.jpg",
      "/projects/project-3.jpg",
    ],
    tags: ["tag-1", "tag-2", "tag-3"],
    link: "#",
    github: "#",
    isLinkAvail: true,
    isGithubAvail: true,
  },
  {
    title: "Project 2",
    description: "description",
    images: ["/projects/project-1.jpg"],
    tags: ["tag-1", "tag-2", "tag-3"],
    link: "#",
    github: "#",
    isLinkAvail: true,
    isGithubAvail: false,
  },
];

export const Test = () => {
  // THEME
  const [activeColor, setActiveColor] = useState(colors[0]);
  const changePrimaryColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--color-primary", color);
  };

  

  const [currentImages, setCurrentImages] = useState(projects.map(() => 0));
  const [isHovered, setIsHovered] = useState(projects.map(() => false));
  const autoSlideTimer = useRef(null);

  //PROJECT IMAGE SLIDE
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

  // DOT CLICK
  const handleDotClick = (projIdx, imgIdx) => {
    setCurrentImages((prev) => {
      const newArr = [...prev];
      newArr[projIdx] = imgIdx;
      return newArr;
    });

    // PAUSE
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
    <section id="about" className="py-32 relative overflow-hidden">
      <div className=" container max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT */}
          {/* SECTION1 */}
          <div className="relative space-y-8">
            <div className="glass rounded-lg p-6">
              <div className=" animate-fade-in mb-4">
                <span className="text-primary text-2xl font-regular tracking-wider uppercase animate-fade-in ">
                  Simple{" "}
                  <span className="text-foreground glow-text">Componets</span>
                </span>
              </div>

              <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
                <p>
                  Hi!, I am <span className="text-primary">Melvin</span>. Thank
                  you for checking out this repository! This is a space where I
                  experiment with small, reusable components that can be added
                  to the browser. Here I test ideas like a theme picker,
                  interactive maps, and other simple UI features. The goal is to
                  explore different concepts, improve my development workflow,
                  and gradually build a collection of useful components. More
                  experiments and additions will be coming in the future.
                </p>
                <p>{/*  */}</p>
              </div>
            </div>

            {/* THEME */}
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in animate-delay-200">
              <div className="glass p-6 rounded-lg min-h-50">
                <div className="flex justify-center gap-2">
                  <ConeIcon /> WIP SECTIONS
                </div>
              </div>

              <div className="glass space-y-4 p-6 rounded-lg min-h-50">
                <div>
                  <h3 className="text-sm uppercase mb-2 flex items-center gap-2">
                    <Paintbrush className="w-5 h-5" />
                    Theme
                  </h3>
                </div>
                <div className="glass rounded-lg flex justify-between items-center ">
                  <button className="border border-transparent  p-2 rounded-lg hover:border-primary transition-all">
                    Dark
                  </button >
                  <button className="border border-transparent  p-2 rounded-lg hover:border-primary transition-all">
                    Soft
                  </button >
                  <button className="border border-transparent  p-2 rounded-lg hover:border-primary transition-all">
                    Light
                  </button>
                </div>

                <div className="grid grid-cols-6 mx-auto">
                  {colors.map((color, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-8 rounded-sm border-2 ${
                        activeColor === color
                          ? "border-primary"
                          : "border-background"
                      }`}
                      style={{ background: color }}
                      onClick={() => changePrimaryColor(color)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          {/* SECTION2 */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in animate-delay-200">
            {infocard.map((icard, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-lg animate-fade-in flex flex-col hover:text-primary"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                    <icard.icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="">{icard.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {icard.description}
                </p>

                <div className="flex flex-wrap gap-2 text-sm mt-auto pt-2">
                  {icard.tag.map((tag, i) => (
                    <span
                      key={i}
                      className="cursor-default uppercase text-xs px-4 py-1 rounded-lg font-medium border text-muted-foreground hover:text-primary
                       hover:border-primary/50 border-primary/50 bg-primary/5 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* PROJECTS */}
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass hover-glass-border rounded-lg overflow-hidden animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* IMG Carousel */}
                <div
                  className="relative overflow-hidden aspect-2/1"
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
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-60" />

                  {/* LINKS */}
                  <div className="absolute inset-0 flex items-end justify-end p-4 gap-2 ">
                    {project.isLinkAvail && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="p-2 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Link2 className="w-5 h-5" />
                      </a>
                    )}
                    {project.isGithubAvail && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* DOT INDICATORS */}
                  {project.images.length > 1 && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          onClick={() => handleDotClick(idx, dotIdx)}
                          className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                            currentImages[idx] === dotIdx
                              ? "bg-primary/50"
                              : "bg-white/50"
                          }`}
                        ></span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-regular tracking-wide group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mt-2">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="cursor-default flex flex-wrap gap-2 text-sm mt-auto pt-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-4 py-1 rounded-lg font-medium border text-muted-foreground hover:text-primary
                       hover:border-primary/50 border-primary/50 bg-primary/5 transition-all duration-300"
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
      </div>
    </section>
  );
};
