import { useState, useRef } from "react";
import { ShoppingCart, Package, ChevronLeft, ChevronRight } from "lucide-react";

// Image imports (currently same, can be replaced with actual ones later)
import cementImg from "@/assets/cement-varieties.jpg";
import steelImg from "@/assets/cement-varieties.jpg";
import blockImg from "@/assets/cement-varieties.jpg";
import waterproofImg from "@/assets/cement-varieties.jpg";
import drymixImg from "@/assets/cement-varieties.jpg";
import pvcImg from "@/assets/cement-varieties.jpg";
import sanitaryImg from "@/assets/cement-varieties.jpg";
import electricalImg from "@/assets/cement-varieties.jpg";
import paintImg from "@/assets/cement-varieties.jpg";
import tilesImg from "@/assets/cement-varieties.jpg";
import plywoodImg from "@/assets/cement-varieties.jpg";
import buildingImg from "@/assets/cement-varieties.jpg";

// Data
const categories = [
  {
    id: 1,
    name: "Cement",
    products: [
      { name: "PPC Cement", image: cementImg },
      { name: "OPC Cement", image: cementImg },
      { name: "Premium Cement", image: cementImg },
    ],
  },
  {
    id: 2,
    name: "Steel",
    products: [
      { name: "Tata", image: steelImg },
      { name: "Jindal", image: steelImg },
      { name: "Sail", image: steelImg },
      { name: "Steelmax", image: steelImg },
      { name: "Amba Shakti", image: steelImg },
    ],
  },
  {
    id: 3,
    name: "Building Materials",
    products: [
      { name: "Sand", image: buildingImg },
      { name: "Bricks", image: buildingImg },
      { name: "Gravel", image: buildingImg },
    ],
  },
  {
    id: 4,
    name: "ACC Block",
    products: [
      { name: "Magic Crete", image: blockImg },
      { name: "Buildcrete", image: blockImg },
      { name: "Shree Cement ACC Block", image: blockImg },
    ],
  },
  {
    id: 5,
    name: "Waterproofing",
    products: [
      { name: "Ultratech", image: waterproofImg },
      { name: "Pidilite", image: waterproofImg },
      { name: "Fosroc", image: waterproofImg },
      { name: "Birla", image: waterproofImg },
    ],
  },
  {
    id: 6,
    name: "Drymix",
    products: [
      { name: "Ultratech", image: drymixImg },
      { name: "Laticrete", image: drymixImg },
    ],
  },
  {
    id: 7,
    name: "PVC",
    products: [
      { name: "Astral", image: pvcImg },
      { name: "Supreme", image: pvcImg },
    ],
  },
  {
    id: 8,
    name: "Sanitary",
    products: [
      { name: "Birla Pivot", image: sanitaryImg },
      { name: "Cera", image: sanitaryImg },
      { name: "Jaguar", image: sanitaryImg },
      { name: "Hindware", image: sanitaryImg },
    ],
  },
  {
    id: 9,
    name: "Electricals",
    products: [
      { name: "Havells", image: electricalImg },
      { name: "VGuard", image: electricalImg },
      { name: "Ladure", image: electricalImg },
    ],
  },
  { id: 10, name: "Paint", products: [{ name: "Birla Opus", image: paintImg }] },
  { id: 11, name: "Tiles", products: [{ name: "Birla Pivot Tiles", image: tilesImg }] },
  { id: 12, name: "Plywood", products: [{ name: "Birla Pivot Ply", image: plywoodImg }] },
];

const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  // Scroll helper for arrows
  const scrollByAmount = (id, direction) => {
    const container = document.getElementById(`scroll-container-${id}`);
    if (!container) return;

    const cardElement = container.querySelector("article");
    const cardWidth = cardElement ? cardElement.getBoundingClientRect().width : 300;
    const gap = 24;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Toggle handler with scroll reset
  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Our Products</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium categories of construction materials
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {visibleCategories.map((category) => (
            <div key={category.id}>
              <h3 className="sticky top-0 z-10 bg-muted/30 text-2xl font-bold text-foreground py-3">
                {category.name}
              </h3>

              <div className="relative pt-4 pb-4">
                {/* Left Arrow */}
                <button
                  onClick={() => scrollByAmount(category.id, "left")}
                  aria-label={`Scroll ${category.name} left`}
                  className="absolute -left-2 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white z-20 transition-all hidden sm:block"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Scrollable Container */}
                <div
                  id={`scroll-container-${category.id}`}
                  role="region"
                  aria-label={`${category.name} products`}
                  className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar-css scroll-smooth snap-x snap-mandatory relative"
                >
                  {/* Fade indicator (optional polish) */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-muted/30 to-transparent" />

                  {category.products.map((product, i) => (
                    <article
                      key={i}
                      className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-card rounded-xl shadow-md hover-lift overflow-hidden transition-shadow"
                    >
                      <div className="aspect-video w-full">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                        <button
                          className="w-full bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
                          aria-label={`Get quote for ${product.name}`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Get Quote
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollByAmount(category.id, "right")}
                  aria-label={`Scroll ${category.name} right`}
                  className="absolute -right-2 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white z-20 transition-all hidden sm:block"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-[1.03] transition-transform duration-300"
            onClick={handleToggle}
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
