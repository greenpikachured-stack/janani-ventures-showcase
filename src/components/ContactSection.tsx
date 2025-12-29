import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We will contact you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-wide">
          Book Your Visit Now
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Hurry up! Limited Residential Plots Available.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border p-6">
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Janani Venture</h3>
                <p className="text-muted-foreground text-sm">
                  Gujarat, India
                </p>
              </div>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <a
                  href="mailto:sales@jananiventure.com"
                  className="text-primary hover:underline"
                >
                  sales@jananiventure.com
                </a>
              </div>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="flex flex-col items-center text-center">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <a
                  href="tel:+919876543210"
                  className="text-primary hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card"
              />
            </div>
            <Input
              name="phone"
              type="tel"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-card"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-card resize-none"
            />
            <Button type="submit" className="w-full" size="lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
