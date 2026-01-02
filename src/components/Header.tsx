import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Screenshot 2026-01-02 103959.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Mohideen Attorneys"
              className="h-10 sm:h-12 w-auto transition-all duration-300 object-contain"
            />
            <div
              className={`hidden sm:block transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <span className="font-serif text-base sm:text-lg font-semibold tracking-wide">
                Mohideen
              </span>
              <span className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-80">
                Attorneys
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0837867083"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Phone className="h-4 w-4" />
              083 786 7083
            </a>
            <Button
              variant="hero"
              size="sm"
              asChild
            >
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-background rounded-lg shadow-elegant p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground font-medium py-2 hover:text-charcoal-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border" />
            <a
              href="tel:0837867083"
              className="flex items-center gap-2 text-foreground font-medium py-2"
            >
              <Phone className="h-4 w-4" />
              083 786 7083
            </a>
            <Button variant="default" className="w-full" asChild>
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
