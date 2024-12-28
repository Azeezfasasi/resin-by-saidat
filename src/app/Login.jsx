import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainHeader from '../assets/components/home-components/MainHeader';
import TopHeader from '../assets/components/home-components/TopHeader';
import { UserContext } from '../assets/components/context-api/user-context/UserContext';
import loginimage from '../assets/images/loginimage.svg';
import MobileFooter from '../assets/components/home-components/MobileFooter';
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon';

function Login() {
  const navigate = useNavigate(); // Initialize navigate hook
  const { loginUser, user } = useContext(UserContext); // Access loginUser function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user && user.email) {
      navigate('/myaccount'); // Redirect to the account page if user is already logged in
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    const isLoggedIn = loginUser(email, password);
    if (isLoggedIn) {
      navigate('/app/myaccount'); // Redirect to the account page
    } else {
      setError('Invalid email or password. Please register if you do not have an account.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Resin By Saidat</title>
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
            Sign In to your Account
          </h2>

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

          {/* Error Message */}
          {error && <p className="text-red-500 mt-4 font-bold">{error}</p>}

          {/* Submit Button */}
          <button type='submit' className="w-full md:w-[340px] bg-[#f9ed32] text-[#000000] rounded-[10px] mt-8 p-3 font-medium text-lg">
            Login
          </button>

          {/* Don't have an account */}
          <div className="flex flex-row justify-start text-left font-['Poppins-Regular',_sans-serif] text-small font-normal relative mt-6">
            <div className='flex flex-row items-start'>
              <p className="text-[16px] text-left text-[#7c838a]">
                Don't have an account?
              </p>
              <Link to="/app/register" className="already-have-a-account-log-in-span5 ml-1">
                <p className="already-have-a-account-log-in-span6 text-[#f9ed32]">Register</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <MobileFooter />
      <WhatsAppChatRibbon />
    </>
  );
}

export default Login;