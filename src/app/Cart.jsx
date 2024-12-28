// import React from "react";
// import { useCart } from "../assets/components/context-api/product-context/CartContext";
// import MainHeader from "../assets/components/home-components/MainHeader";
// import TopHeader from "../assets/components/home-components/TopHeader";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const handleRemove = (id) => {
//     removeFromCart(id);
//   };

//   const handleClearCart = () => {
//     clearCart();
//   };

//   return (
//     <>
//       <TopHeader />
//       <MainHeader />
//       <section className="cart-section py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
//           {cart.length === 0 ? (
//             <div className="text-center text-xl font-semibold">Your cart is empty</div>
//           ) : (
//             <div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {cart.map((product) => (
//                   <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-48 object-contain rounded-md"
//                     />
//                     <div className="mt-4 flex flex-col items-center justify-center">
//                       <h3 className="text-lg font-semibold">{product.name}</h3>
//                       <p className="text-gray-600">${product.price}</p>
//                       <button
//                         onClick={() => handleRemove(product.id)}
//                         className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 text-center">
//                 <button
//                   className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors"
//                 >
//                   Order Via WhatsApp
//                 </button>
//               </div>
//               <div className="mt-6 text-center">
//                 <button
//                   onClick={handleClearCart}
//                   className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;


import React from "react";
import { useCart } from "../assets/components/context-api/product-context/CartContext";
import MainHeader from "../assets/components/home-components/MainHeader";
import TopHeader from "../assets/components/home-components/TopHeader";
import WhatsAppChatRibbon from "../assets/components/home-components/WhatsappChatRibbon";
import MobileFooter from "../assets/components/home-components/MobileFooter";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleOrderViaWhatsApp = () => {
    const whatsappNumber = "2348184128107"; // Replace with your WhatsApp number

    // Construct the message with all cart details
    let message = "Hello Resin By Saidat! I want to place an order for the following items:\n\n";
    cart.forEach((product, index) => {
      message += `Item ${index + 1}:\n`;
      message += `- Name: ${product.name}\n`;
      message += `- Price: $${product.price}\n`;
      message += `- Quantity: 1\n\n`; // Add quantity if applicable
    });
    message += `TOTAL ITEMS: ${cart.length}\n`;
    message += `Link: ${window.location.href}`; // Add cart page link for reference

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <TopHeader />
      <MainHeader />
      <section className="cart-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
          {cart.length === 0 ? (
            <div className="text-center text-xl font-semibold">Your cart is empty</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cart.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain rounded-md"
                    />
                    <div className="mt-4 flex flex-col items-center justify-center">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">₦{product.price}</p>
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={handleOrderViaWhatsApp}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors"
                >
                  Order Via WhatsApp
                </button>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={handleClearCart}
                  className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <MobileFooter />
      <WhatsAppChatRibbon />
    </>
  );
};

export default Cart;
