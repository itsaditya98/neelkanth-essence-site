import { useEffect, useRef } from "react";
import { Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Cement",
  "Steel",
  "Building Materials",
  "ACC Block",
  "Waterproofing",
  "Drymix",
  "PVC",
  "Sanitary",
  "Electricals",
  "Paint",
  "Tiles",
  "Plywood",
];

const productImages = [
  "./images/ppc.avif",
  "./images/opc.png",
  "./images/premium.avif",
  "./images/tata-steel.png",
  "./images/jindal.png",
  "./images/sail.jpeg",
  "./images/steelmax.jpeg",
  "./images/ambashakti.jpeg",
  "./images/sand.jpg",
  "./images/bricks.jpg",
  "./images/gravel.webp",
  "./images/magic.jpg",
  "./images/shree-block.jpg",
  "./images/ultratech-weather-pro.webp",
  "./images/pidlite.jpg",
  "./images/forsoc.jpg",
  "./images/birla-waterproof.jpg",
  "./images/ultratech-drymix.webp",
  "./images/laticrete.jpg",
  "./images/astral.png",
  "./images/supreme.jpg",
  "./images/pivot.png",
  "./images/cera.jpg",
  "./images/jaguar.webp",
  "./images/hindware.jpg",
  "./images/havells.webp",
  "./images/vguard.png",
  "./images/opus-paint.jpg",
  "./images/tiles.jpg",
  "./images/ply.jpg",
];

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Continuous auto-scroll effect for product images
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const scrollSpeed = 0.8; // adjust speed (pixels/frame)
    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;
      scrollPos += scrollSpeed;
      if (scrollPos >= container.scrollWidth / 2) scrollPos = 0;
      container.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <Package className="w-8 h-8 text-primary mb-3" />
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Our Product Range
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our comprehensive categories of premium construction materials
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-4 font-semibold 
           text-gray-700 shadow-sm hover:shadow-xl hover:scale-105 
           transition-all duration-300 cursor-pointer">
              {cat}
            </div>
          ))}
        </div>

        {/* Explore button */}
        <div className="mt-4 mb-10">
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                       hover:bg-blue-700 hover:scale-[1.03] transition-transform duration-300"
          >
            Explore Construction Materials
          </button>
        </div>

        {/* Auto-scrolling product images */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap py-6 relative"
        >
          {[...productImages, ...productImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="product"
              className="h-28 w-auto rounded-lg shadow-md object-cover hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
