import { Building, Award, Truck } from "lucide-react";
import nktLogoBackground from "@/assets/nkt-hero-bg.png"; // use the full background logo

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden pt-24 lg:pt-32"
    >
      {/* FULL BACKGROUND LOGO */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={nktLogoBackground}
          alt="Neel Kanth Traders Background Logo"
          className="w-full h-full object-cover opacity-80" // slightly stronger
        />
      </div>

      {/* Animated floating circles */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/25 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-700/25 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 drop-shadow-lg">
                <span className="gradient-text">NKT</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-white/90 drop-shadow-md mb-6">
                Neel Kanth Traders
              </p>

              <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
                Authorized distributor of premium construction materials from
                Birla, UltraTech, and leading cement brands.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center hover-lift">
                  <Building className="w-8 h-8 mx-auto mb-2 text-accent-light" />
                  <p className="text-sm font-medium">Premium Brands</p>
                </div>
                <div className="text-center hover-lift">
                  <Award className="w-8 h-8 mx-auto mb-2 text-accent-light" />
                  <p className="text-sm font-medium">Quality Assured</p>
                </div>
                <div className="text-center hover-lift">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-accent-light" />
                  <p className="text-sm font-medium">Fast Delivery</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#products"
                  className="text-white/90 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-smooth hover-lift"
                >
                  View Products
                </a>
                <a
                  href="#contact"
                  className="text-white/90 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-smooth hover-lift"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <h3 className="text-white/90 text-2xl font-bold mb-4">
                  Trusted Since Years
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent-light">
                      500+
                    </div>
                    <div className="text-white/90 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-light">
                      50+
                    </div>
                    <div className="text-white/90 text-sm">Products</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-3xl font-bold text-accent-light">
                      100%
                    </div>
                    <div className="text-white/90 text-sm">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
