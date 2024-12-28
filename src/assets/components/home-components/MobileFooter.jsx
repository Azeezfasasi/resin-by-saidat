import React from 'react';
import magnifier from '../../images/magnifier.svg';
import { Link } from 'react-router-dom';
import home from '../../images/home.png';
import shop from '../../images/shop.png';
import carticon from '../../images/cart.png';


function MobileFooter() {
  return (
    <>
    <div className="h-[fit-content] sticky bottom-0 z-50 bg-white w-full flex flex-row justify-between items-center md:hidden border border-solid border-gray-700">
        <div className="bg-[#ffffff] w-[100%] h-[fit-cntent] flex flex-row items-center justify-center pt-[10px]">
            <Link to ="/" className="w-[60px] h-[54px] static">
                <div
                className="text-body-text text-center font-['YuGothicUi-Light',_sans-serif] text-[10px] font-light absolute right-[78.93%] left-[10.4%] w-[10.67%] top-[75%]"
                style={{ letterSpacing: "0.1px", translate: "0 -50%" }}
                >
                Home
                </div>
                <div className="w-[9.07%] h-[38.64%] absolute right-[79.73%] left-[12%] bottom-[54.55%] top-[16.82%]">
                    <i className='fa fa-home text-[24px]'></i>
                </div>
            </Link>
            <Link to="/app/shop" className="w-[60px] h-[54px] static">
                <div
                className="text-body-text text-center font-['YuGothicUi-Light',_sans-serif] text-[10px] font-light absolute right-[56%] left-[33.33%] w-[10.67%] top-[75%]"
                style={{ letterSpacing: "0.1px", translate: "0 -50%" }}
                >
                Shop
                </div>
                <div className="w-[9.07%] h-[38.64%] absolute right-[56.8%] left-[34.13%] bottom-[54.55%] top-[16.82%]">
                    <i className='fa fa-shop text-[24px]'></i>
                </div>
            </Link>
            <Link to="/app/cart" className="w-[60px] h-[54px] static">
                <div
                className="text-active-color-1 text-center font-['YuGothicUi-Light',_sans-serif] text-[10px] font-light absolute right-[33.07%] left-[56.27%] w-[10.67%] top-[75%]"
                style={{ letterSpacing: "0.1px", translate: "0 -50%" }}
                >
                Cart
                </div>
                <div className="w-[9.07%] h-[38.64%] absolute right-[33.87%] left-[57.07%] bottom-[54.55%] top-[16.82%]">
                    <i className='fa fa-shopping-cart text-[24px]'></i>
                </div>
            </Link>
            <Link to="/app/login" className="w-[60px] h-[54px] static">
                <div
                className="text-[#868686] text-center font-['YuGothicUi-Light',_sans-serif] text-[10px] font-light absolute right-[10.13%] left-[79.2%] w-[10.67%] top-[75%]"
                style={{ letterSpacing: "0.1px", translate: "0 -50%" }}
                >
                Account
                </div>
                <div className="w-[9.07%] h-[38.64%] absolute right-[10.93%] left-[80%] bottom-[54.55%] top-[16.82%]">
                    <i className='fa fa-user text-[24px]'></i>
                </div>
            </Link>
        </div>
    </div>

    </>
  )
}

export default MobileFooter