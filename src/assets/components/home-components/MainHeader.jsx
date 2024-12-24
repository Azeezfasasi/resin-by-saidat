import React, { useState } from "react";
import { Link } from "react-router-dom";
import dedcool from "../../images/dedcool.svg";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-dedcoolcom-gallery flex flex-col items-center justify-start relative border">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between h-[90px] px-4 lg:px-6">
        {/* Left Menu */}
        <div className="hidden lg:flex flex-row gap-6 items-center">
          <Link to="" className="text-left uppercase">
            Shop
          </Link>
          <Link to="" className="text-left uppercase">
            Bundles
          </Link>
          <Link to="" className="text-left uppercase">
            Quiz
          </Link>
          <Link to="" className="text-left uppercase">
            Build ur sample tin
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            className="shrink-0 w-[89px] h-[70px]"
            src={dedcool}
            alt="DedCool Logo"
          />
        </div>

        {/* Right Menu */}
        <div className="hidden lg:flex flex-row gap-6 items-center">
          <Link to="" className="text-left uppercase">
            Search
          </Link>
          <Link to="" className="text-left uppercase">
            About
          </Link>
          <Link to="" className="text-left uppercase">
            Login
          </Link>
          <Link to="" className="text-left uppercase">
            Cart(0)
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-left uppercase"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 items-center justify-center bg-dedcoolcom-gallery w-full py-4 lg:hidden">
          <Link to="" className="text-left uppercase">
            Shop
          </Link>
          <Link to="" className="text-left uppercase">
            Bundles
          </Link>
          <Link to="" className="text-left uppercase">
            Quiz
          </Link>
          <Link to="" className="text-left uppercase">
            Build ur sample tin
          </Link>
          <Link to="" className="text-left uppercase">
            Search
          </Link>
          <Link to="" className="text-left uppercase">
            About
          </Link>
          <Link to="" className="text-left uppercase">
            Login
          </Link>
          <Link to="" className="text-left uppercase">
            Cart(0)
          </Link>
        </div>
      )}
    </div>
  );
}

export default MainHeader;
