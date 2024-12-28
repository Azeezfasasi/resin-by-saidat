import React from 'react'
import { Helmet } from 'react-helmet'
import MainHeader from '../assets/components/home-components/MainHeader'
import MyAccountMenu from '../assets/components/account-components/MyAccountMenu'
import MobileFooter from '../assets/components/home-components/MobileFooter'
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon'

function BillingAddress() {
  return (
    <>
    <Helmet>
      <title>Billing - Resin By Saidat</title>
    </Helmet>
    <div className='w-full flex flex-row justify-start border'>
      {/* Menu section */}
      <div className='w-[20%]'>
        <MyAccountMenu />
      </div>

      {/* Main Account Section */}
      <div className='w-full flex flex-col'>
        
      </div>
    </div>
    </>
  )
}

export default BillingAddress