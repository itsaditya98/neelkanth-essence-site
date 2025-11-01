import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import neelKanthLogo from "@/assets/nkt-logo.svg";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "#");
      if (location.pathname === "/") {
        const element = document.querySelector(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    } else {
      navigate(href);
    }
  };

  const textColor = isScrolled ? "text-gray-900" : "text-white";
  const hoverColor = isScrolled ? "hover:text-sky-600" : "hover:text-sky-400";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={neelKanthLogo}
              alt="Neel Kanth Traders Logo"
              className="w-10 h-10 object-contain"
            />
            {/* <span className={`font-bold text-lg ${textColor}`}>
              Neel Kanth Traders
            </span> */}
          </div> 

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`${textColor} ${hoverColor} font-medium transition-all`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${textColor}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t animate-fade-in absolute w-full left-0">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:text-sky-600 hover:bg-gray-100 rounded-lg transition-all font-medium"
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
