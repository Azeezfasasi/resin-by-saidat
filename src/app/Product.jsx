import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import MainHeader from '../assets/components/home-components/MainHeader';
import MyAccountMenu from '../assets/components/account-components/MyAccountMenu';
import loginimage from '../assets/images/loginimage.svg';
import AccountHeader from '../assets/components/account-components/AccountHeader';
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../assets/components/context-api/product-context/ProductContext";
import MobileFooter from '../assets/components/home-components/MobileFooter';
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon';

function Product() {
  const { products, deleteProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  return (
    <>
    <Helmet>
      <title>Products - Resin By Saidat</title>
    </Helmet>
    <div className='w-full flex flex-row justify-start'>
      {/* Menu section */}
      <div className='w-[0%] md:w-[20%]'>
        <MyAccountMenu />
      </div>

      {/* Main Account Section */}
      <div className='w-full flex flex-col justify-center'>
        <AccountHeader />
        <div className='w-[90%] flex flex-row justify-between items-center mb-[50px] m-auto mt-10'>
          <h1 className='text-2xl font-bold'>Products</h1>
          <Link to="/app/addproduct" className='bg-[#FCA310] text-white px-4 py-2 rounded-md'>Add Product</Link>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center flex-wrap md:pl-4 md:pr-4'>
          {/* Products */}
          {products.map((product) => (
          <div key={product.id} className='w-[90%] md:w-[23%] flex flex-col items-center border pt-2 pb-2 rounded-[8px] mb-4 hover:bg-red-50 shadow-md hover:shadow-slate-300'>
            <img src={product.image} alt={product.name} className='w-[200px] h-[150px] object-contain rounded-md' />
            <p className='text-sm font-semibold'>{product.name}</p>
            <div>₦ {product.price}</div>
            <div className='flex flex-row gap-2'>
              <Link to={`/app/editproduct/${product.id}`} className='bg-transparent border border-solid border-gray-500 text-black px-4 py-2 rounded-md mt-2 hover:bg-black hover:text-white'><i className='fa fa-pencil'></i></Link>
              <button className='bg-transparent border border-solid border-gray-500 text-black px-4 py-2 rounded-md mt-2 hover:bg-black hover:text-white' onClick={() => handleDeleteProduct(product.id)}><i className='fa fa-trash'></i></button>
            </div>
          </div>
          ))}
        </div>
          
      </div>
    </div>
    <MobileFooter />
    <WhatsAppChatRibbon />
    </>
  )
}

export default Product


