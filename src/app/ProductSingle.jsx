import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../assets/components/context-api/product-context/ProductContext";
import MainHeader from "../assets/components/home-components/MainHeader";
import { useCart } from "../assets/components/context-api/product-context/CartContext";
import TopHeader from "../assets/components/home-components/TopHeader";
import { Helmet } from "react-helmet";
import WhatsAppChatRibbon from "../assets/components/home-components/WhatsappChatRibbon";
import MobileFooter from "../assets/components/home-components/MobileFooter";

const ProductSingle = () => {
  const { id } = useParams(); // Extract product ID from the route parameters
  const { products } = useContext(ProductContext); // Get products from context
  const [product, setProduct] = useState(null);
  
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Product added to cart!");
  };

  const handleOrderViaWhatsApp = (product) => {
    const whatsappNumber = "2348184128107"; // Replace with your WhatsApp number

    const whatsappMessage = `Hello Resin By Saidat! I am interested in purchasing the following product:
    \n\n- Name: ${product.name}
    \n- Short Description: ${product.shortDescription || "No description available"}
    \n- Price: ₦${product.price}
    \n- Category: ${product.category || "No category available"}
    \n- Product Description: ${product.longDescription || "No detailed description available"}
    \n\n - Product Link: ${window.location.href}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id, 10));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error("Product not found");
      }
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center mt-16">
        <p>Product not found!</p>
        <a href="/" className="text-blue-500 underline">Return to Home</a>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - Resin By Saidat</title>
      </Helmet>
      <TopHeader />
      <MainHeader />
      <div className="product-single-section py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-md shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-4">{product.shortDescription}</p>
              <p className="text-xl font-semibold mb-4">Price: ₦{product.price}</p>
              <div className="mb-6">
                <h2 className="text-lg font-bold">Category:</h2>
                <p>{product.category || "No category available"}</p>
              </div>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mb-3"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <br />
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={() => handleOrderViaWhatsApp(product)}
              >
                Order Via WhatsApp
              </button>
            </div>
          </div>
          <div className="border border-solid border-gray-200 w-full md:w-[50%] mt-6 flex flex-row items-start justify-start pl-2">
            <div className="flex flex-col">
              <div className="text-[28px] font-bold mb-2">Product Description</div>
              <p>{product.longDescription || "No detailed description available"}</p>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
      <WhatsAppChatRibbon />
    </>
  );
};

export default ProductSingle;
