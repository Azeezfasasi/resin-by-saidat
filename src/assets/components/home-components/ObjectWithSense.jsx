// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import { ProductContext } from "../context-api/product-context/ProductContext";
// import { useCart } from "../context-api/product-context/CartContext";

// const ObjectWithSense = () => {
//   const { products } = useContext(ProductContext);
//   const { addToCart } = useCart();

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     alert("Product added to cart!");
//   };

//   return (
//     <section className="shop-section py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product.id}>
//               <div className="bg-white rounded-lg shadow-md p-4">
//                 <Link to={`/app/product/${product.id}`}>
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-contain rounded-md"
//                   />
//                 </Link>
//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold">{product.name}</h3>
//                   <p className="text-gray-600">${product.price}</p>
//                 </div>
//                 <div className="mt-6 flex flex-col items-center">
//                   <Link
//                     to={`/app/product/${product.id}`}
//                     className="mt-2 w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors text-center"
//                   >
//                     View
//                   </Link>
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default ObjectWithSense;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ProductContext } from "../context-api/product-context/ProductContext";
import { useCart } from "../context-api/product-context/CartContext";

const ObjectWithSense = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <section className="shop-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true} // Enables looping
          autoplay={{
            delay: 3000, // Slides will auto-rotate every 3 seconds
            disableOnInteraction: false, // Autoplay continues even after user interacts
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-md p-4">
                <Link to={`/app/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-md"
                  />
                </Link>
                <div className="mt-4 flex flex-col items-center justify-start md:items-center md:justify-start">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
                <div className="mt-6 flex flex-col items-center">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ObjectWithSense;

