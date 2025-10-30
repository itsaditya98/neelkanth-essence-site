import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import neelKanthLogo from "@/assets/nkt-logo.svg";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Check if link includes a hash (section on homepage)
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "#");
      if (location.pathname === "/") {
        // Already on homepage → just scroll
        const element = document.querySelector(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to homepage, then scroll after load
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      // For normal pages (like /products, /about)
      navigate(href);
    }
  };

  const textColor = isScrolled ? "text-gray-800" : "text-white";
  const hoverColor = isScrolled ? "hover:text-sky-600" : "hover:text-sky-400";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={neelKanthLogo}
              alt="Neel Kanth Traders Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`${textColor} ${hoverColor} transition-smooth font-medium`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${textColor} ${hoverColor} transition-smooth`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full left-0 border-t">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
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
