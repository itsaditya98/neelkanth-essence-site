import { useLocation, useNavigate } from "react-router-dom";
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import neelKanthLogo from "@/assets/nkt-logo.svg";

const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNav = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={neelKanthLogo} alt="Neel Kanth Traders" className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold">Neel Kanth Traders</h3>
                <p className="text-accent-light text-sm">
                  Construction Materials Distribution
                </p>
              </div>
            </div>

            <p className="text-white/80 mb-6 max-w-md">
              Your trusted partner for premium construction materials. Authorized
              distributor of Birla, UltraTech, and other leading cement brands.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-all"
                >
                  <Icon className="w-5 h-5 text-accent-light" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Building className="w-5 h-5 text-accent-light" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleFooterNav("/products")}
                  className="text-white/80 hover:text-accent-light transition-all"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav("/about")}
                  className="text-white/80 hover:text-accent-light transition-all"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav("#contact")}
                  className="text-white/80 hover:text-accent-light transition-all"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent-light" />
              Contact Info
            </h4>
            <div className="space-y-4 text-white/80 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-light mt-1" />
                Neel Kanth Traders, Dadri<br />
                Gautam Buddha Nagar, UP - 201306
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-light" /> +91 1234567890
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-light" /> contact@neelkanthtraders.in
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          © 2024 Neel Kanth Traders. All rights reserved. | Powered by
          <span className="text-accent-light ml-1">www.nestrix.synergize.co</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;