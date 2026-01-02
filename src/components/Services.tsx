import {
  Scale,
  FileText,
  Building2,
  Users,
  Home,
  Gavel,
  Briefcase,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Civil Litigation",
    description:
      "Expert representation in civil disputes, breach of contract, and damage claims.",
  },
  {
    icon: Gavel,
    title: "Criminal Defence",
    description:
      "Dedicated defence in criminal matters with a focus on protecting your rights.",
  },
  {
    icon: Building2,
    title: "Commercial Law",
    description:
      "Comprehensive legal support for businesses, contracts, and corporate matters.",
  },
  {
    icon: Home,
    title: "Property Law",
    description:
      "Conveyancing, property transfers, and real estate legal services.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Sensitive handling of divorce, custody, maintenance, and family disputes.",
  },
  {
    icon: Scale,
    title: "Labour Law",
    description:
      "Employment disputes, CCMA matters, and workplace legal issues.",
  },
  {
    icon: Briefcase,
    title: "Debt Collection",
    description:
      "Efficient recovery of outstanding debts and collection procedures.",
  },
  {
    icon: Shield,
    title: "Wills & Estates",
    description:
      "Estate planning, will drafting, and administration of deceased estates.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-charcoal-light text-sm font-medium tracking-widest uppercase">
            Practice Areas
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Comprehensive Legal Services
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We offer a wide range of legal services to meet your needs. Our
            expertise spans various areas of South African law.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-charcoal/20 hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-12 h-12 bg-charcoal/5 rounded-lg flex items-center justify-center group-hover:bg-charcoal group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-serif font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
