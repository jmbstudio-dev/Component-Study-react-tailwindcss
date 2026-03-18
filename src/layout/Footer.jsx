import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/jmbstudio-dev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/johnmelvin-burgos",
    label: "LinkedIn",
  },
  // { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = [{ href: "#home", label: "Home" }];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/10">
      <nav className="container mx-auto flex utems-center justify-center px-6">
               <div className="pt-12">
          <nav className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Logo & Copyright */}

              <div>
                <p className="text-sm text-muted-foreground m-auto">
                  Thankyou for checking this out!
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://jmbstudio.dev/"
                  className="text-xl font-bold tracking-tighter"
                >
                  JM<span className="text-primary">B</span>
                </a>

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </footer>
  );
};
