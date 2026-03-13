import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", label: "/Home" },
  { href: "#", label: "/ii" },
  { href: "#", label: "/iii" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 
        ${isScrolled ? "glass-strong py-2" : "bg-transparent py-5"}  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-end">
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-lg px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface"
              >
                {link.label}
              </a>
            ))}

            {/* SEPARATE BUTTON N/ in ARRAY */}
            {/* <div className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface">
              <a href="#">
                <button size="sm">/Contacts</button>
              </a>
            </div> */}
          </div>
        </div>

        {/* MOBILE */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in rounded-lg">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setMobileMenuOpen(false)} size="sm">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
