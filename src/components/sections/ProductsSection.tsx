import { useEffect, useRef } from "react";
import { Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Import images from src/assets/images
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

// ✅ Categories for display
const categories = [
  "Cement",
  "Steel",
  "Building Materials",
  "AAC Block",
  "Waterproofing",
  "Drymix",
  "PVC",
  "Sanitary",
  "Electricals",
  "Paint",
  "Tiles",
  "Plywood",
];

// ✅ Product images for auto-scroll
const productImages = [
  ppcImg,
  opcImg,
  premiumImg,
  tataSteel,
  jindalSteel,
  sailSteel,
  steelmax,
  ambaShakti,
  sandImg,
  bricksImg,
  gravelImg,
  magicCrete,
  shreeBlock,
  ultratechWP,
  pidilite,
  fosroc,
  birlaWP,
  ultratechDrymix,
  laticrete,
  astral,
  supreme,
  birlaPivot,
  cera,
  jaguar,
  hindware,
  havells,
  vguard,
  birlaOpus,
  birlaTiles,
  birlaPly,
];

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // ✅ Continuous auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const scrollSpeed = 0.8;
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

  // ✅ Navigate to specific category on Products page
  const goToCategory = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <Package className="w-8 h-8 text-primary mb-3" />
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Product Range
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore comprehensive categories of construction materials
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => goToCategory(cat)}
              className="bg-white border border-gray-200 rounded-lg p-4 font-semibold 
                         text-gray-700 shadow-sm hover:shadow-xl hover:scale-105 
                         transition-all duration-300 cursor-pointer"
            >
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
            Explore All Construction Materials
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
        <div className="flex flex-col items-center mb-10">
         
          <p className="text-muted-foreground max-w-2xl">
            All brand logos and images shown are the property of their respective owners and are used here for illustrative and identification purposes only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
