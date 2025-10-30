import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    query: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.query) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", mobile: "", query: "" });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Phone className="w-8 h-8 text-white" />
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to start your construction project? Contact us for the best deals on premium construction materials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent-light" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-primary-foreground/80">
                    Neel Kanth Traders, Dadri,<br />
                    Gautam Buddha Nagar,<br />
                    Uttar Pradesh, India - 201306
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary-light" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Phone Numbers</h4>
                  <p className="text-primary-foreground/80">
                    +91 1234567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="bg-primary-light/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-light" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-primary-foreground/80">
                    contact@neelkanthtraders.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-accent-light" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-primary-foreground/80">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form 
          <div className="animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-white font-medium mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="query" className="block text-white font-medium mb-2">
                    Your Query *
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your construction material requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-smooth hover-lift flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </button>
              </form> 
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;