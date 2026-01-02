import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Personalized legal strategies for every client",
    "Transparent communication throughout your case",
    "Experienced in South African law and regulations",
    "Dedicated to achieving the best possible outcome",
  ];

  return (
    <section id="about" className="section-padding bg-grey-light">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="slide-in-left opacity-0">
            <span className="text-charcoal-light text-sm font-medium tracking-widest uppercase">
              About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              A Legacy of Legal Excellence
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in Sandton, Mohideen Attorneys has established itself as
                a trusted name in legal services. Our firm is built on the
                principles of integrity, dedication, and a genuine commitment to
                our clients' well-being.
              </p>
              <p>
                Led by Aadil Mohideen, our team brings a fresh perspective to
                legal practice, combining modern efficiency with traditional
                values of thoroughness and attention to detail. We understand
                that legal matters can be stressful, which is why we prioritize
                clear communication and personalized service.
              </p>
            </div>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-charcoal mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats / Visual */}
          <div className="slide-in-right opacity-0">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-charcoal/5 to-charcoal/10 rounded-2xl" />

              {/* Stats Grid */}
              <div className="relative grid grid-cols-2 gap-6">
                {[
                  { number: "3+", label: "Years of Service" },
                  { number: "35+", label: "Satisfied Clients" },
                  { number: "5.0", label: "Google Rating" },
                  { number: "100%", label: "Client Dedication" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-background p-8 rounded-xl shadow-card text-center hover-lift"
                  >
                    <span className="block text-4xl lg:text-5xl font-serif font-bold text-charcoal">
                      {stat.number}
                    </span>
                    <span className="block mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
