import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/Screenshot 2026-01-02 103959.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Practice Areas", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const practiceAreas = [
    "Civil Litigation",
    "Criminal Defence",
    "Commercial Law",
    "Property Law",
    "Family Law",
    "Labour Law",
  ];

  return (
    <footer className="bg-charcoal-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow mx-auto section-padding pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img
                src={logo}
                alt="Mohideen Attorneys"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <span className="font-serif text-base sm:text-lg font-semibold tracking-wide">
                  Mohideen
                </span>
                <span className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
                  Attorneys
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed break-words">
              Trusted legal excellence in Sandton. Dedicated to protecting your
              rights and achieving the best outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Practice Areas</h4>
            <ul className="space-y-2 sm:space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <span className="text-xs sm:text-sm text-primary-foreground/70 break-words">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-xs sm:text-sm text-primary-foreground/70 break-words">
                  Sandton, Johannesburg
                  <br />
                  South Africa
                </span>
              </li>
              <li>
                <a
                  href="tel:0837867083"
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>083 786 7083</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mohideenattorneys.co.za"
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">info@mohideenattorneys.co.za</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/50 text-center sm:text-left">
            <p className="break-words">© {currentYear} Mohideen Attorneys. All rights reserved.</p>
            <p className="break-words">
              A member of the Legal Practice Council of South Africa
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm text-primary-foreground/50">
              Built by{" "}
              <a
                href="https://www.lunexweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors underline"
              >
                Lunexweb
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
