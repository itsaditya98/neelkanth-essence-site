import Navigation from "../components/layouts/Navigation";
import Footer from "../components/layouts/Footer";
import BackToTop from "../components/BackToTop";
import ChatBot from "../components/ChatBot";
import { Calendar, Award, Building2, Users } from "lucide-react";

const AboutPage = () => {
  const timeline = [
    { year: "2010", title: "Company Founded", description: "Started as a small distributor with a clear vision to provide quality construction materials and reliable services to local builders." },
    { year: "2013", title: "UltraTech Partnership", description: "Became an authorized distributor for UltraTech cement products, strengthening our credibility and reach." },
    { year: "2016", title: "Birla Expansion", description: "Expanded operations with the inclusion of Birla cement and introduced advanced supply chain practices." },
    { year: "2019", title: "Waterproofing Division", description: "Launched specialized waterproofing and construction chemical solutions to serve diverse customer needs." },
    { year: "2022", title: "Regional Leader", description: "Recognized as a regional leader with 500+ clients and an ever-growing product portfolio." },
    { year: "2024", title: "Digital Transformation", description: "Launched an online platform for effortless ordering, tracking, and support, marking a new phase of digital growth." },
  ];

  return (
    <>
      <Navigation />

      {/* ✅ Hero Section (Your current gradient style) */}
      <section className="relative bg-gradient-hero from-primary/90 to-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Neel Kanth Traders</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Over 14 years of building trust, quality, and relationships in the
            construction industry — empowering builders with reliable materials
            and service excellence.
          </p>
        </div>
      </section>

      {/* ✅ Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Neel Kanth Traders is a trusted distributor of high-quality construction
            materials, including cement, steel, waterproofing, drymix products, etc.
            With a focus on consistency, transparency, and client satisfaction, we
            have served hundreds of contractors, developers, and homeowners across
            the region.
          </p>
        </div>
      </section>

      {/* ✅ Timeline Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-primary">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Timeline Content */}
                  <div className="flex-1 bg-card p-6 rounded-xl shadow-secondary hover-lift">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Company Values */}
      <section className="py-20 bg-gradient-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Award className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Quality First</h4>
              <p className="opacity-90 text-sm">
                Never compromise on quality — it defines who we are.
              </p>
            </div>
            <div>
              <Users className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Customer Focused</h4>
              <p className="opacity-90 text-sm">
                We build long-term relationships through reliability and care.
              </p>
            </div>
            <div>
              <Building2 className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Trust & Integrity</h4>
              <p className="opacity-90 text-sm">
                Transparency and honesty guide every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Placeholder for Future Additions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Looking Ahead
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As we continue to expand and modernize, our mission remains the same:
            to deliver exceptional quality, service, and trust to every customer
            we serve.
          </p>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatBot />
    </>
  );
};

export default AboutPage;
