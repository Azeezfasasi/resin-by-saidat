import React, { useState } from "react";
import { Link } from "react-router-dom";
import dedcool from "../../images/dedcool.svg";
import resin from '../../images/resin.png';
import Cart from "../../../app/Cart";
import CartIcon from "../account-components/CartIcon";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white flex flex-col items-center justify-start border sticky top-0 z-50">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between h-[90px] px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex justify-center">
          <img
            className="shrink-0 w-[89px] h-[70px]"
            src={resin}
            alt="Resin Logo"
          />
        </Link>

        {/* Right Menu */}
        <div className="hidden lg:flex flex-row gap-6 items-center">
          <Link to="/" className="text-left uppercase">
            Home
          </Link>
          <Link to="/app/shop" className="text-left uppercase">
            Shop
          </Link>
          <Link to="" className="text-left uppercase">
            About
          </Link>
          <Link to="" className="text-left uppercase">
            Wishlist
          </Link>
          <Link to="/app/login" className="text-left uppercase border px-5 py-3">
            <i className="fa fa-user"></i>
          </Link>
          <CartIcon />
        </div>

        {/* Hamburger Menu */}
        <div className="flex lg:hidden items-center justify-center">
          <div className="mr-6">
             <CartIcon />
          </div>
          <div className="mr-8">
            <Link to="/app/login" className="text-left uppercase border px-5 py-3">
              <i className="fa fa-user"></i>
            </Link>
          </div>
          <button
            className="lg:hidden text-left uppercase"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 items-center justify-center bg-dedcoolcom-gallery w-full py-4 lg:hidden">
          <Link to="/" className="text-left uppercase">
            Home
          </Link>
          <Link to="/app/shop" className="text-left uppercase">
            Shop
          </Link>
          <Link to="" className="text-left uppercase">
            About
          </Link>
          <Link to="" className="text-left uppercase">
            Search
          </Link>
          <Link to="" className="text-left uppercase">
            Wishlist
          </Link>
          <Link to="/app/login" className="text-left uppercase border px-5 py-3">
            <i className="fa fa-user"></i>
          </Link>
          <CartIcon />
        </div>
      )}
    </div>
  );
}

export default MainHeader;
