import neelKanthBird from "@/assets/nkt-logo.svg";
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={neelKanthBird} 
                alt="Neel Kanth Traders Logo" 
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">Neel Kanth Traders</h3>
                <p className="text-accent-light text-sm">Construction Materials Distribution</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Your trusted partner for premium construction materials. Authorized distributor 
              of Birla, UltraTech, and other leading cement brands across the region.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-smooth">
                <Facebook className="w-5 h-5 text-accent-light" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-smooth">
                <Twitter className="w-5 h-5 text-accent-light" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-smooth">
                <Instagram className="w-5 h-5 text-accent-light" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-smooth">
                <Linkedin className="w-5 h-5 text-accent-light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Building className="w-5 h-5 text-accent-light" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-white/80 hover:text-accent-light transition-smooth">Products</a></li>
              <li><a href="#about" className="text-white/80 hover:text-accent-light transition-smooth">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent-light transition-smooth">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-light transition-smooth">Quality Certificates</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent-light" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-light mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  Neel Kanth Traders, Dadri<br />
                  Gautam Buddha Nagar,<br />
                  Uttar Pradesh, India - 201306
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-light flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  +91 1234567890
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-light flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  contact@neelkanthtraders.in
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partners 
        <div className="border-t border-white/20 mt-12 pt-8">
          <h4 className="text-center font-bold mb-6">Our Brand Partners</h4>
          <div className="flex justify-center items-center gap-8 text-white/60">
            <span className="text-lg font-semibold">UltraTech</span>
            <span className="text-lg font-semibold">Birla</span>
            <span className="text-lg font-semibold">ACC</span>
            <span className="text-lg font-semibold">Ambuja</span>
            <span className="text-lg font-semibold">Dr. Fixit</span>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Neel Kanth Traders. All rights reserved. | Powered by www.nestrix.synergize.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;