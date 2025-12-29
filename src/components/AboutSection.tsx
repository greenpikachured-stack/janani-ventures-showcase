import { Check } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Plan, Build, Modeling, Publish",
    "Complete Legality (N.A, N.O.C, Plan Pass)",
    "RERA Approved Residential Projects",
    "Efficient Governance",
    "Sustainability Focused",
    "World-Class Infrastructure",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-wide">
          Why Choose Us
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            At Janani Venture, we understand that the business of real estate requires a vision 
            for the future. We spend considerable time and energy thinking about the needs and 
            demands of tomorrow. When we develop land, we do it with a clear understanding of 
            population growth, ecological impact, and environment-friendly living conditions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            It is based on these findings that we build the future world for our clients and 
            partners of today. When you choose Janani Venture to develop your land, lifestyle, 
            or personal space, know that you are securing your assets for a promising future.
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </span>
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
