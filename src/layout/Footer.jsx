import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/jmbstudio-dev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/johnmelvin-burgos", label: "LinkedIn" },
  // { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <nav className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex gap-2 md:text-left">
            <a href="#" className="text-xl font-bold tracking-tighter">
              JM<span className="text-primary">B</span>
            </a>
            <p className="text-sm text-muted-foreground m-auto">
              © {currentYear} John Melvin Burgos
            </p>
          </div>


          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target= "_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
};
