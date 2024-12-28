import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainHeader from '../assets/components/home-components/MainHeader';
import TopHeader from '../assets/components/home-components/TopHeader';
import google from '../assets/images/google.svg';
import facebook from '../assets/images/fb.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../assets/components/context-api/user-context/UserContext';
import loginimage from '../assets/images/loginimage.svg';
import MobileFooter from '../assets/components/home-components/MobileFooter';
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon';

function Register() {
  const navigate = useNavigate(); // Initialize navigate hook
  const { registerUser } = useContext(UserContext); // Access registerUser function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    // Mock user data
    const userData = { email, password, firstName, lastName };
    registerUser(userData); // Update user context
    navigate('/app/myaccount'); // Redirect to the account page
  };

  return (
    <>
      <Helmet>
        <title>Register - Resin By Saidat</title>
      </Helmet>
      <TopHeader />
      <MainHeader />
      <div className="w-full bg-[rgba(230,243,255,0.75)] flex flex-row h-auto min-h-screen relative overflow-hidden p-4 md:h-[1024px]">
        {/* Login Left Image */}
        <div className='w-[40%] hidden md:block'>
          <img className="h-[auto] relative overflow-visible" src={loginimage} />
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-[#fcfeff] rounded-[25px] w-full md:w-[60%] md:h-[1024px] p-6 flex flex-col items-center md:items-center">
          <h2 className="text-[#000000] text-center md:text-left font-semibold text-xl md:text-2xl mt-6 md:mt-12">
            Create an Account
          </h2>

          {/* First Name */}
          <div className="w-full md:w-[600px] mt-6">
            <label className="text-[#7c838a] text-sm md:text-lg">First Name</label>
            <input
              className="w-full bg-[rgba(176,186,195,0.40)] rounded-[20px] mt-2 p-3 text-base"
              type="text"
              placeholder="Enter your first name here"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-[600px] mt-6">
            <label className="text-[#7c838a] text-sm md:text-lg">Last Name</label>
            <input
              className="w-full bg-[rgba(176,186,195,0.40)] rounded-[20px] mt-2 p-3 text-base"
              type="text"
              placeholder="Enter your last name here"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-[600px] mt-6">
            <label className="text-[#7c838a] text-sm md:text-lg">Email</label>
            <input
              className="w-full bg-[rgba(176,186,195,0.40)] rounded-[20px] mt-2 p-3 text-base"
              type="email"
              placeholder="Enter your Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="w-full md:w-[600px] mt-6">
            <label className="text-[#7c838a] text-sm md:text-lg">Password</label>
            <input
              className="w-full bg-[rgba(176,186,195,0.40)] rounded-[20px] mt-2 p-3 text-base"
              type="password"
              placeholder="Enter your Password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type='submit' className="w-full md:w-[340px] bg-[#f9ed32] text-[#000000] rounded-[10px] mt-8 p-3 font-medium text-lg">
            Register
          </button>

          {/* Already have an account */}
          <div className="flex flex-row justify-start text-left font-['Poppins-Regular',_sans-serif] text-small font-normal relative mt-6">
            <div className='flex flex-row items-start'>
              <p className="text-[16px] text-left text-[#7c838a]">
                Already have an account?
              </p>
              <Link to="/app/login" className="already-have-a-account-log-in-span5 ml-1">
                <p className="already-have-a-account-log-in-span6 text-[#f9ed32]">Login</p>
              </Link>
            </div>
          </div>

          {/* Social Login */}
          <p className="w-full md:w-[220px] text-center text-[#b0bac3] font-medium text-sm mt-6">- OR -</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="flex items-center gap-2 border border-[#7c838a] rounded-[15px] p-3 w-full md:w-[220px]">
              <img className="w-6 h-6" src={google} alt="Google" />
              <p className="text-[#7c838a] text-sm">Sign in with Google</p>
            </div>
            <div className="flex items-center gap-2 border border-[#7c838a] rounded-[15px] p-3 w-full md:w-[220px]">
              <img className="w-6 h-6" src={facebook} alt="Facebook" />
              <p className="text-[#7c838a] text-sm">Sign in with Facebook</p>
            </div>
          </div>
        </form>
      </div>
      <MobileFooter />
      <WhatsAppChatRibbon />
    </>
  );
}

export default Register;