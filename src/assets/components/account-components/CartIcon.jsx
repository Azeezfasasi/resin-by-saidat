import React from "react";
import { useCart } from "../context-api/product-context/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <Link to="/app/cart" className="relative border p-4 flex flex-row">
      <i className="fa fa-shopping-cart"></i>
      {/* {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-50">
          {cartCount}
        </span>
      )} */}
      <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-50">
          {cartCount}
        </span>
    </Link>
    
  );
};

export default CartIcon;
