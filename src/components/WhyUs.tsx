import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Aadil was efficient and was very dedicated to get the case/work done. Highly recommend his services.",
    author: "Verified Client",
    rating: 5,
  },
  {
    text: "Professional, knowledgeable, and always available when I needed legal advice. Outstanding service.",
    author: "Business Client",
    rating: 5,
  },
  {
    text: "Made a complicated legal process simple and stress-free. The team truly cares about their clients.",
    author: "Property Client",
    rating: 5,
  },
];

const reasons = [
  {
    number: "01",
    title: "Client-Focused Approach",
    description:
      "We put your needs first, ensuring personalized attention and tailored legal strategies.",
  },
  {
    number: "02",
    title: "Clear Communication",
    description:
      "Stay informed throughout your case with regular updates and transparent processes.",
  },
  {
    number: "03",
    title: "Accessible & Responsive",
    description:
      "We're readily available to address your concerns and answer your questions promptly.",
  },
  {
    number: "04",
    title: "Result-Oriented",
    description:
      "Our focus is on achieving the best possible outcome for every client we represent.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-charcoal">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-grey-warm text-sm font-medium tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            The Mohideen Difference
          </h2>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Our commitment to excellence sets us apart. Here's why clients trust
            us with their legal matters.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <span className="text-5xl font-serif font-bold text-primary-foreground/10 group-hover:text-gold-subtle/30 transition-colors">
                {reason.number}
              </span>
              <h3 className="mt-4 text-lg font-serif font-semibold text-primary-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="border-t border-primary-foreground/10 pt-16">
          <h3 className="text-center text-sm font-medium tracking-widest uppercase text-grey-warm mb-12">
            What Our Clients Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-charcoal-dark/50 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/5"
              >
                <Quote className="h-8 w-8 text-gold-subtle/30 mb-4" />
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-foreground">
                    {testimonial.author}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-subtle text-gold-subtle"
                      />
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

export default WhyUs;
