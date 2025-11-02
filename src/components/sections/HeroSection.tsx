import { useEffect, useState } from "react";
import { Building, Award, Truck } from "lucide-react";
import nktLogoBackground from "@/assets/nkt-hero-bg.png";

const HeroSection = () => {
  // 🔹 Fixed brightness value (like after scrolling a bit)
  const overlayOpacity = 0.35;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-12 lg:pt-32 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${nktLogoBackground})` }}
    >
      {/* ✅ Constant Overlay Brightness */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 mix-blend-multiply transition-all duration-500"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Floating Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/25 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-600/25 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="text-white animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-2 drop-shadow-lg">
                    <span className="gradient-text">NKT</span>
                  </h1>
                  <p className="text-2xl font-semibold text-white/90 drop-shadow-md">
                    Neel Kanth Traders
                  </p>
                </div>
              </div>

              <p className="text-xl mb-8 text-white/90 drop-shadow-md">
                Authorized distributor of construction materials from
                Birla, UltraTech, and leading brands.
              </p>

              <div className="flex gap-4">
                <a href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#products");
                    if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                className="text-white/90 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth hover-lift"
                >View Products</a>
                <a href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#contact");
                    if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                className="text-white/90 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth hover-lift"
                >Contact Us</a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <h3 className="text-white/90 text-2xl font-bold mb-4">
                  Trusted Since Years
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center hover-lift">
                    <Award className="w-8 h-8 mx-auto mb-2 text-accent-light" />
                    <p className="text-sm text-white/90 font-medium">
                      Quality Assured
                    </p>
                  </div>
                  <div className="text-center hover-lift">
                    <Truck className="w-8 h-8 mx-auto mb-2 text-accent-light" />
                    <p className="text-sm text-white/90 font-medium">
                      Reliable Delivery
                    </p>
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
