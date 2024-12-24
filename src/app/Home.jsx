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

function Home() {
  return (
    <>
    <Helmet>
      <title>Home - Resin By Saidat</title>
    </Helmet>
    <TopHeader />
    <MainHeader />
    <Hero />
    <ObjectWithSense />
    <TimeMade />
    <About />
    <NewsLetter />
    <ProductHomeSection />
    <Review />
    <Footer />
    </>
  )
}

export default Home;