import Navigation from "../components/layouts/Navigation";
import Footer from "../components/layouts/Footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ShoppingCart, ChevronLeft, ChevronRight, Phone } from "lucide-react";

// ✅ Import all images
import ppcImg from "@/assets/images/ppc.avif";
import opcImg from "@/assets/images/opc.png";
import premiumImg from "@/assets/images/premium.avif";
import tataSteel from "@/assets/images/tata-steel.png";
import jindalSteel from "@/assets/images/jindal.png";
import sailSteel from "@/assets/images/sail.jpeg";
import steelmax from "@/assets/images/steelmax.jpeg";
import ambaShakti from "@/assets/images/ambashakti.jpeg";
import sandImg from "@/assets/images/sand.jpg";
import bricksImg from "@/assets/images/bricks.jpg";
import gravelImg from "@/assets/images/gravel.webp";
import magicCrete from "@/assets/images/magic.jpg";
import shreeBlock from "@/assets/images/shree-block.jpg";
import ultratechWP from "@/assets/images/ultratech-weather-pro.webp";
import pidilite from "@/assets/images/pidlite.jpg";
import fosroc from "@/assets/images/forsoc.jpg";
import birlaWP from "@/assets/images/birla-waterproof.jpg";
import ultratechDrymix from "@/assets/images/ultratech-drymix.webp";
import laticrete from "@/assets/images/laticrete.jpg";
import astral from "@/assets/images/astral.png";
import supreme from "@/assets/images/supreme.jpg";
import birlaPivot from "@/assets/images/pivot.png";
import cera from "@/assets/images/cera.jpg";
import jaguar from "@/assets/images/jaguar.webp";
import hindware from "@/assets/images/hindware.jpg";
import havells from "@/assets/images/havells.webp";
import vguard from "@/assets/images/vguard.png";
import birlaOpus from "@/assets/images/opus-paint.jpg";
import birlaTiles from "@/assets/images/tiles.jpg";
import birlaPly from "@/assets/images/ply.jpg";

// ✅ Category data
const categories = [
  {
    id: 1,
    name: "Cement",
    products: [
      { name: "PPC Cement", image: ppcImg },
      { name: "OPC Cement", image: opcImg },
      { name: "Premium Cement", image: premiumImg },
    ],
  },
  {
    id: 2,
    name: "Steel",
    products: [
      { name: "Tata", image: tataSteel },
      { name: "Jindal", image: jindalSteel },
      { name: "Sail", image: sailSteel },
      { name: "Steelmax", image: steelmax },
      { name: "Amba Shakti", image: ambaShakti },
    ],
  },
  {
    id: 3,
    name: "Building Materials",
    products: [
      { name: "Sand", image: sandImg },
      { name: "Bricks", image: bricksImg },
      { name: "Gravel", image: gravelImg },
    ],
  },
  {
    id: 4,
    name: "ACC Block",
    products: [
      { name: "Magic Crete", image: magicCrete },
      { name: "Shree Cement ACC Block", image: shreeBlock },
    ],
  },
  {
    id: 5,
    name: "Waterproofing",
    products: [
      { name: "Ultratech", image: ultratechWP },
      { name: "Pidilite", image: pidilite },
      { name: "Fosroc", image: fosroc },
      { name: "Birla", image: birlaWP },
    ],
  },
  {
    id: 6,
    name: "Drymix",
    products: [
      { name: "Ultratech", image: ultratechDrymix },
      { name: "Laticrete", image: laticrete },
    ],
  },
  {
    id: 7,
    name: "PVC",
    products: [
      { name: "Astral", image: astral },
      { name: "Supreme", image: supreme },
    ],
  },
  {
    id: 8,
    name: "Sanitary",
    products: [
      { name: "Birla Pivot", image: birlaPivot },
      { name: "Cera", image: cera },
      { name: "Jaguar", image: jaguar },
      { name: "Hindware", image: hindware },
    ],
  },
  {
    id: 9,
    name: "Electricals",
    products: [
      { name: "Havells", image: havells },
      { name: "VGuard", image: vguard },
    ],
  },
  {
    id: 10,
    name: "Paint",
    products: [{ name: "Birla Opus", image: birlaOpus }],
  },
  {
    id: 11,
    name: "Tiles",
    products: [{ name: "Birla Pivot Tiles", image: birlaTiles }],
  },
  {
    id: 12,
    name: "Plywood",
    products: [{ name: "Birla Pivot Ply", image: birlaPly }],
  },
];

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollStates, setScrollStates] = useState<Record<number, { left: boolean; right: boolean }>>({});
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  // ✅ Scroll to category if navigated with query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      const el = document.getElementById(category);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
      }
    }
  }, [location]);

  // ✅ Scroll Logic
  const scrollByAmount = (id: number, direction: "left" | "right") => {
    const container = document.getElementById(`scroll-container-${id}`);
    if (!container) return;
    const card = container.querySelector("article");
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    const gap = 24;
    container.scrollBy({ left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap, behavior: "smooth" });
  };

  const updateScrollState = (id: number) => {
    const container = document.getElementById(`scroll-container-${id}`);
    if (!container) return;
    setScrollStates((prev) => ({
      ...prev,
      [id]: {
        left: container.scrollLeft > 0,
        right: container.scrollLeft + container.clientWidth < container.scrollWidth,
      },
    }));
  };

  useEffect(() => {
    categories.forEach((cat) => {
      updateScrollState(cat.id);
      const container = document.getElementById(`scroll-container-${cat.id}`);
      if (container) {
        const handler = () => updateScrollState(cat.id);
        container.addEventListener("scroll", handler, { passive: true });
        return () => container.removeEventListener("scroll", handler);
      }
    });
  }, []);

  const handleFlip = (name: string) => {
    setFlipped((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // ✅ New handler to navigate and scroll correctly to contact section
  const handleReachUs = () => {
    navigate("/#contact");
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-muted/20">
        {/* ✅ Hero Section */}
        <section className="relative bg-gradient-hero from-primary/90 to-primary text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Construction Materials Supply</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore our wide range of construction materials — cement, steel,
              blocks, waterproofing, drymix solutions, etc.
            </p>
          </div>
        </section>

        {/* ✅ Disclaimer */}
        <section className="section-padding bg-muted/30 py-16 pb-32 overflow-visible">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-10">
              <p className="text-muted-foreground max-w-2xl text-center">
                The brand names, logos, and images displayed are trademarks of their respective owners and are used here for illustrative and identification purposes only.
              </p>
            </div>

            {/* ✅ Category Listing */}
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.id} id={category.name}>
                  <h3 className="sticky top-0 z-10 bg-muted/30 text-2xl font-bold text-foreground py-3">
                    {category.name}
                  </h3>

                  <div className="relative pt-4 pb-4">
                    {/* Left Arrow */}
                    <button
                      onClick={() => scrollByAmount(category.id, "left")}
                      className={`absolute -left-2 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-20 transition-all ${
                        scrollStates[category.id]?.left
                          ? "opacity-100 bg-white/80 hover:bg-white"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Scroll Container */}
                    <div
                      id={`scroll-container-${category.id}`}
                      className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar-css scroll-smooth snap-x snap-mandatory relative"
                    >
                      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-muted/30 to-transparent" />

                      {category.products.map((product, i) => (
                        <article
                          key={i}
                          className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-card rounded-xl shadow-md hover-lift overflow-hidden transition-shadow"
                        >
                          {/* Flip Card */}
                          <div
                            className={`relative aspect-video w-full transition-transform duration-700 transform ${
                              flipped[product.name] ? "[transform:rotateY(180deg)]" : ""
                            }`}
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {/* Front Side */}
                            <div className="absolute inset-0 [backface-visibility:hidden]">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-primary text-white flex flex-col items-center justify-center px-4 text-center rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                              <Phone className="w-8 h-8 mb-3" />
                              <p className="text-lg font-medium">
                                Call us @ <span className="font-bold">123456789</span>
                              </p>
                              <p className="mb-4 text-sm opacity-90">or</p>
                              <button
                                onClick={handleReachUs}
                                className="bg-white text-primary font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                              >
                                Reach Us
                              </button>
                              <p className="mb-4 text-sm opacity-90">to get a quote.</p>
                            </div>
                          </div>

                          <div className="p-4 text-center">
                            <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                            <button
                              onClick={() => handleFlip(product.name)}
                              className="w-full bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              {flipped[product.name] ? "Back" : "Get Quote"}
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={() => scrollByAmount(category.id, "right")}
                      className={`absolute -right-2 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-20 transition-all ${
                        scrollStates[category.id]?.right
                          ? "opacity-100 bg-white/80 hover:bg-white"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Products;
