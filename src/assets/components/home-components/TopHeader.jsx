import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function TopHeader() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0; // Reset scroll to create looping effect
      }
      scrollElement.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full bg-dedcoolcom-link-water flex flex-row items-center justify-start h-[26px] relative border overflow-hidden"
    >
      <div
        className="flex flex-row items-center gap-0"
        style={{ whiteSpace: "nowrap" }}
      >
        {/* Duplicate the content for seamless looping */}
        <div className="flex flex-row">
          <Link to="/app/resinregistrationform" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Learn How to Make Resin
          </Link>
          <Link to="/app/resinregistrationform" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Register for our upcoming Training
          </Link>
          <Link to="/app/shop" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Purchase Resin Starter Kits
          </Link>
        </div>
        {/* Duplicate the content for seamless looping */}
        <div className="flex flex-row">
          <Link to="/app/resinregistrationform" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Learn How to Make Resin
          </Link>
          <Link to="/app/resinregistrationform" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Register for our upcoming Training
          </Link>
          <Link to="/app/shop" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Purchase Resin Starter Kits
          </Link>
        </div>
        {/* Duplicate the content for seamless looping */}
        <div className="flex flex-row">
          <Link to="/app/resinregistrationform" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Learn How to Make Resin
          </Link>
          <Link to="/app/resinregistrationform" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Register for our upcoming Training
          </Link>
          <Link to="/app/shop" className="px-4 text-dedcoolcom-black font-['Inter-Regular',_sans-serif] text-[10px] leading-[26px] uppercase border border-solid border-[grey] bg-black text-white hover:bg-white hover:text-black">
            Purchase Resin Starter Kits
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
