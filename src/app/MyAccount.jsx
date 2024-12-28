import React from 'react'
import { Helmet } from 'react-helmet'
import MyAccountMenu from '../assets/components/account-components/MyAccountMenu'
import MainHeader from '../assets/components/home-components/MainHeader'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import TotalSales from '../assets/components/account-components/TotalSales'
import MobileFooter from '../assets/components/home-components/MobileFooter'
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon'

function MyAccount() {
  return (
    <>
    <Helmet>
      <title>My Account - Resin By Saidat</title>
    </Helmet>
    <div className='w-full flex flex-row justify-start border'>
      {/* Menu section */}
      <div className='w-[0%] md:w-[20%]'>
        <MyAccountMenu />
      </div>

      {/* Main Account Section */}
      <div className='w-[100%] md:w-[80%] flex flex-col items-start justify-start '>
        <AccountHeader />
        <TotalSales />
      </div>
    </div>
    <MobileFooter />
    <WhatsAppChatRibbon />
    </>
  )
}

export default MyAccount