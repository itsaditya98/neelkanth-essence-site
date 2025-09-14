import deliveryService from "@/assets/delivery-service.jpg";
import { Truck, Clock, Shield, Phone, MapPin, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across the region with our partner network"
    },
    {
      icon: Clock,
      title: "24/7 Support", 
      description: "Round-the-clock customer support for all your construction needs"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products come with genuine quality certificates and warranties"
    },
    {
      icon: Phone,
      title: "Expert Consultation",
      description: "Get professional advice on product selection and application"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction material solutions with exceptional service delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-secondary hover-lift animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Delivery Image */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src={deliveryService} 
              alt="Delivery Service Partners"
              className="relative rounded-2xl shadow-elegant w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Delivery Partners Section */}
        <div className="bg-primary/5 rounded-2xl p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Delivery Partners</h3>
            <p className="text-muted-foreground">We work with trusted logistics partners to ensure timely delivery</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg">
              <MapPin className="w-8 h-8 text-secondary" />
              <div>
                <h4 className="font-semibold text-card-foreground">Pan-India Coverage</h4>
                <p className="text-sm text-muted-foreground">Delivery across all major cities</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg">
              <Clock className="w-8 h-8 text-accent" />
              <div>
                <h4 className="font-semibold text-card-foreground">Same Day Delivery</h4>
                <p className="text-sm text-muted-foreground">Within city limits</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold text-card-foreground">Insured Transit</h4>
                <p className="text-sm text-muted-foreground">Full protection coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;