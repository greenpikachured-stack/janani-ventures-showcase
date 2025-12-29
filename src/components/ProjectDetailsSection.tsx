import { useState } from "react";

const tabs = [
  { id: "location-highlights", label: "Location Highlights" },
  { id: "specifications", label: "Specifications" },
  { id: "floor-plan", label: "Floor Plan" },
  { id: "master-plan", label: "Master Plan" },
  { id: "location-map", label: "Location Map" },
];

const specifications = [
  {
    category: "STRUCTURE",
    items: [
      "Framed RCC structure with earthquake resistant design based on IS 456:2000",
      '9" and 4" brick walls',
    ],
  },
  {
    category: "PLASTERING",
    items: ["2 coats of plastering in CM 1:6 for both internal and external walls"],
  },
  {
    category: "PAINTING",
    items: [
      "Internal: 2 coats of emulsion paint finish over smooth putty",
      "External: Texture or smooth paint with 2 coats of acrylic exterior emulsion",
    ],
  },
  {
    category: "DOORS & WINDOWS",
    items: [
      "Main Door: Designer teakwood frame (8 ft) with teak veneer shutter, melamine matt polish and premium hardware",
      "Internal Doors: M.T wood frame (8 ft) with designer teak veneer shutter and polish with premium ironmongery",
      "French Doors: UPVC sliding or openable doors of premium brand with good quality hardware",
      "Windows: UPVC windows of premium brand with quality hardware and mosquito mesh",
    ],
  },
  {
    category: "FLOORING",
    items: [
      "Living / Dining / Bedrooms: GVT finished vitrified tile flooring, reputed make",
      "Bathrooms: Acid resistant, anti skid designer tiles, reputed make",
      "Balconies / Utility / Stores / Servant room: Vitrified or anti skid tiles, reputed make",
    ],
  },
  {
    category: "KITCHEN / UTILITY",
    items: [
      "Provision for fixing of water purifier, exhaust fan and chimney",
      "No counter top provided, open for modular kitchen",
      "Provision for dishwasher and washing machine in utility area",
    ],
  },
  {
    category: "BATHROOMS & FITTINGS",
    items: [
      "Wall mounted EWCs with concealed flush tank or valve of reputed make",
      "Single lever diverter with wall mixer cum shower of reputed make",
      "Provision for geysers in all bathrooms",
      "All CP and sanitary fittings of reputed make",
    ],
  },
  {
    category: "ELECTRICAL",
    items: [
      "3 phase power supply for each unit and individual meter boards",
      "Miniature circuit breakers for each distribution board, premium brand",
      "Elegant designer modular switches",
      "Plug points for TV and audio systems",
      "Power outlets for geysers in all bathrooms",
      "Power plugs for chimney, refrigerator, microwave, mixer or grinder, washing machine and dishwasher",
    ],
  },
  {
    category: "INTERNET / TV",
    items: [
      "Provision for internet connection from a single service provider",
      "Telephone point in drawing room and master bedroom",
      "DTH or TV points in all bedrooms, living room and multipurpose hall",
    ],
  },
  {
    category: "SECURITY",
    items: [
      "Round the clock security and surveillance system",
      "Building management system to monitor common facilities",
      "Intercom from security to each villa and between villas",
    ],
  },
  {
    category: "GENERATOR",
    items: ["Power backup for common areas and designated points in each villa"],
  },
  {
    category: "WTP & STP",
    items: [
      "Water treatment plant for borewell water and distribution with hydro pneumatic system",
      "Individual water meters for each villa",
      "Sewage treatment plant of adequate capacity as per norms",
      "Treated water used for landscaping",
    ],
  },
  {
    category: "OTHERS",
    items: ["Lift provision will be provided"],
  },
];

const locationHighlights = [
  "1 min Srisailam Highway",
  "1 min Urban Forest",
  "5 min to Bhashyam / Manchester School",
  "10 min to E City",
  "10 min Future City Skill University",
  "10 min to ORR",
  "15 min to TCS Adibatla",
  "15 min to Wonderla",
  "15 min to DPS School",
  "15 min to Airport",
  "15 min to Statue of Equality",
  "30 min to Gachibowli",
];

const ProjectDetailsSection = () => {
  const [activeTab, setActiveTab] = useState("location-highlights");

  const renderContent = () => {
    switch (activeTab) {
      case "location-highlights":
        return (
          <div className="py-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-serif text-primary-foreground mb-8 text-center underline underline-offset-8 decoration-accent">
                Location Highlights
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌳</div>
                    <h4 className="text-2xl font-serif text-accent">JANANI'S</h4>
                    <h3 className="text-3xl font-serif text-accent">BANYAN SPRINGS</h3>
                    <p className="text-accent italic">Beyond Homes</p>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {locationHighlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-primary-foreground">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "specifications":
        return (
          <div className="py-12">
            <h3 className="text-3xl font-serif text-primary-foreground mb-8 text-center">
              Specifications
            </h3>
            <div className="max-w-5xl mx-auto">
              <div className="border border-primary/30 rounded-lg overflow-hidden">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row ${
                      index !== specifications.length - 1 ? "border-b border-primary/30" : ""
                    }`}
                  >
                    <div className="md:w-1/4 bg-primary/20 p-4 font-semibold text-primary-foreground uppercase text-sm tracking-wide">
                      {spec.category}
                    </div>
                    <div className="md:w-3/4 p-4 bg-primary/10">
                      <ul className="space-y-2">
                        {spec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-primary-foreground/90">
                            <span className="text-accent mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "floor-plan":
        return (
          <div className="py-12">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-accent mb-4">East Facing 200 Sq.yds Floor Plan</h3>
                <div className="text-primary-foreground/80 space-y-1 text-sm mb-6">
                  <p>NO. OF FLOORS: G+2</p>
                  <p className="text-accent">GROUND FLOOR AREA: 1,214.43 SFT</p>
                  <p className="text-accent">FIRST FLOOR AREA: 1,214.43 SFT</p>
                  <p className="text-accent">SECOND FLOOR AREA: 937.12 SFT</p>
                  <p className="text-accent">TOTAL BUILT UP AREA: 3,365.98 SFT</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background p-4 rounded border-2 border-primary/30">
                    <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">Ground Floor Plan<br/><span className="text-xs">(Floor plan image to be added)</span></p>
                    </div>
                    <p className="text-center mt-2 text-primary-foreground font-medium">GROUND FLOOR PLAN</p>
                  </div>
                  <div className="bg-background p-4 rounded border-2 border-primary/30">
                    <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">First Floor Plan<br/><span className="text-xs">(Floor plan image to be added)</span></p>
                    </div>
                    <p className="text-center mt-2 text-primary-foreground font-medium">FIRST FLOOR PLAN</p>
                  </div>
                  <div className="bg-background p-4 rounded border-2 border-primary/30">
                    <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">Second Floor Plan<br/><span className="text-xs">(Floor plan image to be added)</span></p>
                    </div>
                    <p className="text-center mt-2 text-primary-foreground font-medium">SECOND FLOOR PLAN</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-accent mb-4">West Facing 200 Sq.yds Floor Plan</h3>
                <div className="text-primary-foreground/80 space-y-1 text-sm mb-6">
                  <p>NO. OF FLOORS: G+2</p>
                  <p className="text-accent">GROUND FLOOR AREA: 1,187.75 SFT</p>
                  <p className="text-accent">FIRST FLOOR AREA: 1,187.75 SFT</p>
                  <p className="text-accent">SECOND FLOOR AREA: 900.00 SFT</p>
                  <p className="text-accent">TOTAL BUILT UP AREA: 3,275.50 SFT</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background p-4 rounded border-2 border-primary/30">
                    <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">Ground Floor Plan<br/><span className="text-xs">(Floor plan image to be added)</span></p>
                    </div>
                    <p className="text-center mt-2 text-primary-foreground font-medium">GROUND FLOOR PLAN</p>
                  </div>
                  <div className="bg-background p-4 rounded border-2 border-primary/30">
                    <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">First Floor Plan<br/><span className="text-xs">(Floor plan image to be added)</span></p>
                    </div>
                    <p className="text-center mt-2 text-primary-foreground font-medium">FIRST FLOOR PLAN</p>
                  </div>
                  <div className="bg-background p-4 rounded border-2 border-primary/30">
                    <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">Second Floor Plan<br/><span className="text-xs">(Floor plan image to be added)</span></p>
                    </div>
                    <p className="text-center mt-2 text-primary-foreground font-medium">SECOND FLOOR PLAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "master-plan":
        return (
          <div className="py-12">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-serif text-primary-foreground mb-8 text-center underline underline-offset-8 decoration-accent">
                Master Plan
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                    Where homes grow like the Banyan Tree, strong rooted and full of life. Inspired by the timeless
                    Banyan, the community offers more than just homes. It offers connection, peace and a sense of
                    belonging.
                  </p>
                  <p className="text-primary-foreground/80 italic text-lg">
                    "Live beyond walls. Live beyond homes." Welcome to a life in harmony with nature.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-background p-4 rounded-lg border-2 border-primary/30">
                    <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                      <p className="text-center p-4">Master Plan Layout<br/><span className="text-xs">(Master plan image to be added)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "location-map":
        return (
          <div className="py-12">
            <h3 className="text-3xl font-serif text-primary-foreground mb-8 text-center">
              Location Map
            </h3>
            <div className="max-w-5xl mx-auto">
              <div className="bg-background p-4 rounded-lg border-2 border-primary/30">
                <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                  <p className="text-center p-4">Location Map<br/><span className="text-xs">(Location map image to be added)</span></p>
                </div>
                <p className="text-center mt-4 text-muted-foreground text-sm">(Not to Scale)</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-8 py-4 border-b border-primary/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm md:text-base font-medium transition-all relative ${
                activeTab === tab.id
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="px-4">{renderContent()}</div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
