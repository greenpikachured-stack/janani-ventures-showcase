import { 
  Building2, 
  Handshake, 
  LayoutGrid, 
  Users, 
  Briefcase, 
  Network, 
  Heart, 
  Cpu, 
  Leaf, 
  FileCheck, 
  Shield, 
  Route 
} from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { icon: Building2, title: "World-Class Infrastructure" },
    { icon: Handshake, title: "Ease of Governance" },
    { icon: LayoutGrid, title: "Plug & Play" },
    { icon: Users, title: "Social Infrastructure" },
    { icon: Briefcase, title: "Ease of Business" },
    { icon: Network, title: "External Connectivity" },
    { icon: Heart, title: "Live, Work and Play" },
    { icon: Cpu, title: "Technology" },
    { icon: Leaf, title: "Sustainability" },
    { icon: FileCheck, title: "Fast Track Approvals" },
    { icon: Shield, title: "Security" },
    { icon: Route, title: "Internal Connectivity" },
  ];

  return (
    <section id="amenities" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-wide">
          Amenities
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <amenity.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {amenity.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
