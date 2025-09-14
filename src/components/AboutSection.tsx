import { Calendar, Award, Building2, Users } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started as a small distributor with a vision to provide quality construction materials"
    },
    {
      year: "2013", 
      title: "UltraTech Partnership",
      description: "Became authorized distributor for UltraTech cement products"
    },
    {
      year: "2016",
      title: "Birla Expansion", 
      description: "Added Birla cement to our product portfolio and expanded operations"
    },
    {
      year: "2019",
      title: "Waterproofing Division",
      description: "Launched specialized waterproofing solutions and chemical products"
    },
    {
      year: "2022",
      title: "Regional Leader",
      description: "Became one of the leading distributors in the region with 500+ clients"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Launched online platform and modernized supply chain operations"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Building2, number: "50+", label: "Product Lines" },
    { icon: Award, number: "14", label: "Years Experience" },
    { icon: Calendar, number: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">About Neel Kanth Traders</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building trust and quality relationships in the construction industry for over a decade. 
            Named after the sacred Neel Kanth bird, symbolizing prosperity and strength.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center bg-card p-6 rounded-xl shadow-secondary hover-lift animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-6 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-primary">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card p-6 rounded-xl shadow-secondary hover-lift">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-card-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-white">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Quality First</h4>
              <p className="text-sm opacity-90">Never compromise on product quality</p>
            </div>
            <div className="text-white">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Customer Focused</h4>
              <p className="text-sm opacity-90">Building lasting relationships</p>
            </div>
            <div className="text-white">
              <Building2 className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Trust & Integrity</h4>
              <p className="text-sm opacity-90">Honest business practices always</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;