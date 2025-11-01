import { Truck, Shield, Phone, Users } from "lucide-react";
import serviceVideo from "../../assets/videos/neel-kanth-traders.mp4"; // ✅ fixed relative path


const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "All products come with genuine quality certificates and warranties",
    },
    {
      icon: Phone,
      title: "Expert Consultation",
      description:
        "Get professional advice on product selection and application",
    },
    {
      icon: Truck,
      title: "Delivery Partners",
      description:
        "Trusted logistics partners ensure timely and safe material delivery",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              Construction Materials Supply
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction material solutions with reliable delivery
          </p>
        </div>

        {/* Services + Video Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-secondary hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Video */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
            <video
              className="relative rounded-2xl shadow-elegant w-full h-96 object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src={serviceVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
