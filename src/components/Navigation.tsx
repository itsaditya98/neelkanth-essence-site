import { useState, useEffect } from "react";
import neelKanthLogo from "@/assets/nkt-logo.svg"; // Renamed import for clarity
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a smaller scroll threshold for a faster transition
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  
  // Determine text color based on scroll state
  const textColor = isScrolled ? 'text-gray-800' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-sky-600' : 'hover:text-sky-400';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' // White background when scrolled for clear contrast
        : 'bg-transparent' // Transparent over the blue gradient
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
             <img 
               src={neelKanthLogo} 
               alt="Neel Kanth Traders Logo" 
               // Logo size remains clean and constant
               className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
             />
             {/*
             <div>
               <div className={`font-bold text-lg ${textColor}`}>Neel Kanth Traders</div>
             </div>
             */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`${textColor} ${hoverColor} transition-smooth font-medium`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${textColor} ${hoverColor} transition-smooth`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full left-0 border-t">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:text-sky-600 hover:bg-gray-100 rounded-lg transition-smooth font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;