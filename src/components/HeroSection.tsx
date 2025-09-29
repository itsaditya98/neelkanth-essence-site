import { Building, Award, Truck } from "lucide-react";
// Import your main logo for the foreground, and the background version
import nktLogoMain from "@/assets/nkt-logo.svg"; // Your primary logo (the first blue version)
import nktLogoBackground from "@/assets/nkt-logo.svg"; // The background-optimized logo (the slightly desaturated/blurred one)

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* LARGE BACKGROUND LOGO */}
      {/* This positions your logo largely in the background, semi-transparent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 lg:opacity-20">
        <img 
          src={nktLogoBackground} 
          alt="Neel Kanth Traders Background Logo" 
          className="w-3/4 h-auto lg:w-1/2 object-contain" // Adjust size as needed
        />
      </div>

      {/* Animated background elements (adjusted opacity to layer with the background logo) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-700/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              {/*  
              <img 
                src={nktLogoMain} // Using the main, vibrant logo here
                alt="Neel Kanth Bird - Company Symbol" 
                className="w-28 h-28 object-cover rounded-full shadow-lg border-2 border-white/50" // Added shadow and border for prominence
              />
              */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-2 drop-shadow-lg"> {/* Added drop-shadow */}
                  <span className="gradient-text">NKT</span>
                </h1>
                <p className="text-2xl font-semibold text-white/90 drop-shadow-md">Neel Kanth Traders</p> {/* Added drop-shadow */}
              </div>
            </div>
            
            <p className="text-xl mb-8 text-white/90 drop-shadow-md"> {/* Changed from primary-foreground/90 to white/90 for consistency and readability */}
              Authorized distributor of premium construction materials from Birla, UltraTech, 
              and leading cement brands. 
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
            
            <div className="flex gap-4">
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth hover-lift">
                View Products
              </button>
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth hover-lift">
                Contact Us
              </button>
            </div>
          </div>

          
          {/* Right Content - Abstract Design */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Trusted Since Years</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent-light">500+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-light">50+</div>
                    <div className="text-sm">Products</div>
                  </div>
                  {/*<div>
                    <div className="text-3xl font-bold text-accent-light">24/7</div>
                    <div className="text-sm">Support</div>
                  </div>*/}
                  <div>
                    <div className="text-3xl font-bold text-accent-light">100%</div>
                    <div className="text-sm">Quality</div>
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