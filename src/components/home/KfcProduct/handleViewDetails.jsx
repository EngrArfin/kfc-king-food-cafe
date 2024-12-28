import { useState } from "react";
import ProductData from "./ProductData";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State defined at the top

  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      image: "https://via.placeholder.com/400x300",
      price: 99.99,
      description:
        "A premium mechanical keyboard with customizable RGB lighting.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      image: "https://via.placeholder.com/400x300",
      price: 49.99,
      description: "Ergonomic gaming mouse with adjustable DPI settings.",
    },
  ];

  // Function to handle viewing details
  const handleViewDetails = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="p-6">
      {selectedProduct ? (
        <ProductData product={selectedProduct} /> // Show ProductData if a product is selected
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails} // Pass handler to ProductCard
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
