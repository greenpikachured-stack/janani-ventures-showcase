import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "I am pleased to convey that my experience of dealing with Janani Venture on the basis of transparency, professionalism and integrity in their expertise has been exceptional. They truly understand the needs of modern homebuyers.",
      name: "Rajesh Kumar",
      title: "Business Owner",
    },
    {
      quote:
        "After searching for the perfect investment opportunity, I chose Janani Venture. The project offers excellent amenities and the team is incredibly supportive. I am confident this investment will yield great returns.",
      name: "Priya Sharma",
      title: "IT Professional",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-wide">
          What People Say About Us
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 md:p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-muted-foreground italic leading-relaxed mb-6 pl-6">
                  "{testimonial.quote}"
                </p>
                <div className="pl-6 border-l-2 border-primary">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
