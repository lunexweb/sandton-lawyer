import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import lawyerPortrait from "@/assets/lawyer-portrait.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <img
          src={heroBg}
          alt="Mohideen Attorneys Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal/90 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-24 sm:pb-20 lg:pb-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
          {/* Text Content - Mobile First, Desktop Left */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-1 space-y-4 sm:space-y-5">
            {/* Badge - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex fade-in-up opacity-0 inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1.5 mb-2">
              <Award className="h-4 w-4 text-gold-subtle flex-shrink-0" />
              <span className="text-sm text-primary-foreground/90 font-medium">
                5-Star Rated Law Firm in Sandton
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in-up opacity-0 stagger-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance w-full break-words">
              Trusted Legal Excellence in{" "}
              <span className="text-grey-light">Sandton</span>
            </h1>

            {/* Subheadline */}
            <p className="fade-in-up opacity-0 stagger-2 text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed w-full break-words">
              With over 3 years of dedicated service, Mohideen Attorneys provides
              comprehensive legal solutions with integrity, efficiency, and a
              commitment to achieving the best outcomes for our clients.
            </p>

            {/* Single CTA */}
            <div className="fade-in-up opacity-0 stagger-3 w-full flex justify-center lg:justify-start pt-2">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact" className="group flex items-center justify-center">
                  <span className="whitespace-nowrap">Get Legal Help</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </a>
              </Button>
            </div>
          </div>

          {/* Lawyer Image - Mobile Below, Desktop Right */}
          <div className="fade-in-up opacity-0 stagger-2 flex flex-col items-center lg:justify-end order-2 lg:order-2 w-full lg:w-auto gap-5 sm:gap-6">
            {/* Badge - Shown on mobile above image, hidden on desktop */}
            <div className="lg:hidden fade-in-up opacity-0 inline-flex items-center gap-1.5 sm:gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1.5">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-subtle flex-shrink-0" />
              <span className="text-xs sm:text-sm text-primary-foreground/90 font-medium">
                5-Star Rated Law Firm in Sandton
              </span>
            </div>
            
            {/* Image Container */}
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-br from-grey-light/20 to-transparent rounded-xl sm:rounded-2xl blur-xl" />
              <img
                src={lawyerPortrait}
                alt="Aadil Mohideen - Attorney at Mohideen Attorneys"
                className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto rounded-xl sm:rounded-2xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Lawyer Name - Separate container below image */}
            <div className="text-center mt-4 sm:mt-5 lg:mt-6 w-full mb-8 sm:mb-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-primary-foreground leading-tight">
                Aadil Mohideen
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/80 mt-2 sm:mt-2.5 font-medium">
                Attorney at Law
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile to avoid overlap */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 lg:bottom-4 left-1/2 -translate-x-1/2 fade-in opacity-0 stagger-5 w-auto z-20">
        <a
          href="#about"
          className="flex flex-col items-center text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
        >
          <span className="text-[10px] sm:text-xs tracking-wider uppercase mb-1.5 whitespace-nowrap">Scroll</span>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
