import { Calendar, Award, Building2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Building2, number: "50+", label: "Product Lines" },
    { icon: Award, number: "14", label: "Years Experience" },
    
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        {/* Intro */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              About Neel Kanth Traders
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 14 years of excellence, we’ve built trust and quality
            relationships in the construction industry — delivering
            reliable materials and solutions across every project scale.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-card p-6 rounded-xl shadow-secondary hover-lift"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Know More Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/about")}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-[1.03] transition-transform duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

