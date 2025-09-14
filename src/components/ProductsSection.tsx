import opcCement from "@/assets/opc-cement.jpg";
import waterproofing from "@/assets/waterproofing.jpg";
import cementVarieties from "@/assets/cement-varieties.jpg";
import { ShoppingCart, Star, Package } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "OPC Cement",
      description: "High-quality Ordinary Portland Cement for all construction needs",
      image: opcCement,
      brands: ["UltraTech", "Birla", "ACC"],
      price: "₹340/bag",
      rating: 4.8
    },
    {
      id: 2,
      name: "Waterproofing Solutions",
      description: "Complete range of waterproofing products and chemicals",
      image: waterproofing,
      brands: ["Dr. Fixit", "Pidilite", "Sika"],
      price: "₹120/kg",
      rating: 4.7
    },
    {
      id: 3,
      name: "PPC Cement Varieties",
      description: "Portland Pozzolana Cement for enhanced durability",
      image: cementVarieties,
      brands: ["UltraTech", "Ambuja", "Shree"],
      price: "₹320/bag",
      rating: 4.9
    }
  ];

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Our Products</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium construction materials from trusted brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-card rounded-2xl overflow-hidden shadow-primary hover-lift animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Available Brands:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map((brand, brandIndex) => (
                      <span 
                        key={brandIndex}
                        className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-primary-light text-primary-foreground py-3 px-4 rounded-lg font-semibold transition-smooth flex items-center justify-center gap-2 hover-lift">
                  <ShoppingCart className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover-lift transition-smooth">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;