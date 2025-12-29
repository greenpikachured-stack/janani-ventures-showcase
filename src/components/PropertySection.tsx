import propertyImage from "@/assets/property-janani.jpg";
import { Button } from "@/components/ui/button";

const PropertySection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="property" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-wide">
          Our Residential Property
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={propertyImage}
                alt="Janani Constructions - Premium Residential Villas"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                Featured
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Janani Constructions
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Premium residential plots and luxurious villas designed for modern living. 
                Experience world-class amenities, strategic location advantages, and a 
                sustainable environment that promises exceptional returns on your investment.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-6 text-sm text-foreground">
                <li>• Premium residential plots</li>
                <li>• Luxurious villa options</li>
                <li>• RERA approved project</li>
                <li>• Strategic location</li>
              </ul>
              <Button onClick={scrollToContact} className="w-full md:w-auto">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
