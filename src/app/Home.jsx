import React from 'react';
import { Helmet } from 'react-helmet';
import TopHeader from '../assets/components/home-components/TopHeader';
import MainHeader from '../assets/components/home-components/MainHeader';
import Hero from '../assets/components/home-components/Hero';
import ShopByProduct from '../assets/components/home-components/ShopByProduct';
import ObjectWithSense from '../assets/components/home-components/ObjectWithSense';
import TimeMade from '../assets/components/home-components/TimeMade';
import About from '../assets/components/home-components/About';
import NewsLetter from '../assets/components/home-components/NewsLetter';
import ProductHomeSection from '../assets/components/home-components/ProductHomeSection';
import Review from '../assets/components/home-components/Review';
import Footer from '../assets/components/home-components/Footer';
import TopHeaderTwo from '../assets/components/home-components/TopHeaderTwo';
import MobileFooter from '../assets/components/home-components/MobileFooter';
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon';

function Home() {
  return (
    <>
    <Helmet>
      <title>Home - Resin By Saidat</title>
    </Helmet>
    <div className='bg-white sticky top-0 z-50'>
    <TopHeader />
    <MainHeader />
    </div>
    <Hero />
    <ObjectWithSense />
    <TimeMade />
    <About />
    <Review />
    <NewsLetter />
    <Footer />
    <MobileFooter />
    <WhatsAppChatRibbon />
    </>
  )
}

export default Home;