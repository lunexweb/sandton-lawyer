import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "083 786 7083",
      href: "tel:0837867083",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@mohideenattorneys.co.za",
      href: "mailto:info@mohideenattorneys.co.za",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sandton, Johannesburg",
      href: "https://maps.google.com/?q=Sandton",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 8am - 5pm",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-grey-light">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-charcoal-light text-sm font-medium tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Schedule Your Free Consultation
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Take the first step towards resolving your legal matter. Contact us
            today for a confidential consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-charcoal rounded-2xl p-6 sm:p-8 text-primary-foreground">
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-primary-foreground/10 rounded flex-shrink-0">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs sm:text-sm text-primary-foreground/60 mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-grey-light transition-colors break-words text-sm sm:text-base"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium break-words text-sm sm:text-base">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social or additional CTA */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-foreground/10">
                <p className="text-xs sm:text-sm text-primary-foreground/60">
                  Available for urgent legal matters
                </p>
                <a
                  href="tel:0837867083"
                  className="inline-flex items-center gap-2 mt-2 text-base sm:text-lg font-semibold hover:text-grey-light transition-colors break-words"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-6 sm:p-8 shadow-card"
            >
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="bg-grey-light border-border focus:border-charcoal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="bg-grey-light border-border focus:border-charcoal"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Your phone number"
                  className="bg-grey-light border-border focus:border-charcoal"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  How Can We Help? *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Please describe your legal matter..."
                  className="bg-grey-light border-border focus:border-charcoal resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="mt-4 text-xs text-muted-foreground">
                By submitting this form, you agree to our confidentiality policy.
                All consultations are strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
