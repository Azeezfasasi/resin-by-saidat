import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import MainHeader from '../assets/components/home-components/MainHeader'
import MyAccountMenu from '../assets/components/account-components/MyAccountMenu'
import AccountHeader from '../assets/components/account-components/AccountHeader';
import { UserContext } from '../assets/components/context-api/user-context/UserContext';
import MobileFooter from '../assets/components/home-components/MobileFooter';
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon';

function AccountDetails() {
  const { user, updateUserProfile } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileImage: '',
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    role: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData);
    alert('Account details updated successfully');
  };

  return (
    <>
    <Helmet>
      <title>Account Details - Resin By Saidat</title>
    </Helmet>
    <div className='w-full flex flex-row justify-start border'>
      {/* Menu section */}
      <div className='w-[0%] md:w-[20%]'>
        <MyAccountMenu />
      </div>

      {/* Main Account Section */}
      <div className='w-full flex flex-col justify-start md:items-center items-center'>
        <AccountHeader />
        {/* Account details section */}
        <div className='md:w-[80%] w-[90%] py-8'>
          <h2 className='text-2xl font-semibold mb-6'>Account Details</h2>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-1'>First Name</label>
                <input
                  type='text'
                  className='w-full border p-2 rounded'
                  autoComplete='name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>Last Name</label>
                <input
                  type='text'
                  className='w-full border p-2 rounded'
                  autoComplete='name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Email Address</label>
              <input
                type='email'
                className='w-full border p-2 rounded'
                autoComplete='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>User Role</label>
              <select
                className='w-full border p-2 rounded'
                name='role'
                value={formData.role}
                onChange={handleChange}
              >
                <option value='Customer'>Customer</option>
                <option value='Admin'>Admin</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Profile Image URL</label>
              <input
                type='text'
                className='w-full border p-2 rounded'
                name='profileImage'
                value={formData.profileImage}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Current Password</label>
              <input
                type='password'
                className='w-full border p-2 rounded'
                autoComplete='password'
                name='password'
                value={formData.currentPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>New Password</label>
              <input
                type='password'
                className='w-full border p-2 rounded'
                autoComplete='password'
                name='newPassword'
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Repeat Password</label>
              <input
                type='password'
                className='w-full border p-2 rounded'
                autoComplete='password'
                name='repeatPassword'
                value={formData.repeatPassword}
                onChange={handleChange}
              />
            </div>

            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <MobileFooter />
    <WhatsAppChatRibbon />
    </>
  )
}

export default AccountDetails

