import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../assets/components/context-api/product-context/ProductContext";
import MainHeader from "../assets/components/home-components/MainHeader";
import AccountHeader from "../assets/components/account-components/AccountHeader";
import { useCart } from "../assets/components/context-api/product-context/CartContext";
import TopHeader from "../assets/components/home-components/TopHeader";
import { Helmet } from "react-helmet";
import WhatsAppChatRibbon from "../assets/components/home-components/WhatsappChatRibbon";
import MobileFooter from "../assets/components/home-components/MobileFooter";

const Shop = () => {
  const { products, deleteProduct } = useContext(ProductContext);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Product added to cart!");
  };


  return (
    <>
    <Helmet>
      <title>Shop - Resin B Saidat</title>
    </Helmet>
    <TopHeader />
    <MainHeader />
    <section className="shop-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <Link to={`/app/product/${product.id}`}><img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded-md"
              /></Link>
              <div className="mt-4 flex flex-col items-start justify-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">₦{product.price}</p>
                
              </div>
              <div className="mt-6 flex flex-col items-center justify-center">
                <Link
                    to={`/app/product/${product.id}`}
                    className="mt-2 w-full bg-black text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors text-center"
                  >
                    View
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <MobileFooter />
    <WhatsAppChatRibbon />
    </>
  );
};

export default Shop;

