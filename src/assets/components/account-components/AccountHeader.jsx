import React, { useState, useContext, useEffect } from 'react';
import magnifier from '../../images/magnifier.svg';
import notification from '../../images/notification.svg';
import user1 from '../../images/user1.svg';
import { UserContext } from '../context-api/user-context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function AccountHeader() {
    const { user } = useContext(UserContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { logoutUser } = useContext(UserContext);
    const navigate = useNavigate();

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logoutUser();
        navigate('/');
      };
  return (
    <>
    <div className="w-full border sticky top-0 z-10">
        <div className="bg-color-white w-full h-[70px] flex flex-row items-center justify-between">
            {/* logo */}
            <div className="text-greys-blue-grey-900 text-left font-4xl-semibold-font-family text-4xl-semibold-font-size leading-4xl-semibold-line-height font-4xl-semibold-font-weight relative hidden md:block ml-0 md:ml-[20px]">
            Dashboard
            </div>

            {/* search */}
            <div className='relative hidden md:block'>
                <input type='search' placeholder=' Search here' className="bg-grey-300 rounded-2xl pt-0.5 pr-8 pb-0.5 pl-6 flex flex-row gap-2 items-center justify-start h-[60px] relative border" />
                    <img className="absolute top-[15px] left-0"
                    src={magnifier}
                    />
            </div>

            {/* Language */}
            <div className="pr-4 pl-4 md:flex flex-row gap-4 items-center justify-center h-[60px] relative border hidden">
                <select className=" flex-row gap-3.5 items-center justify-start shrink-0 relative">
                    <option value="">Eng (US)</option>
                </select>
            </div>

            <div className="relative w-full md:w-[298px] h-[60px] flex flex-row items-center md:justify-start justify-end mr-6 md:mr-0">
                {/* Notification Icon */}
                <div className="mr-[20px] ml-[80px] md:ml-0 md:mr-[30px]">
                    <div className="bg-supporting-color-yellow-shade rounded-lg w-12 h-12 flex items-center justify-center">
                    <img
                        className="w-6 h-6"
                        src={notification}
                        alt="Notification Icon"
                    />
                    </div>
                </div>
                
                {/* Profile Section */}
                <div className="flex flex-row items-center justify-center cursor-pointer" onClick={toggleDropdown}>
                    <div className="relative">
                        <img
                            className="rounded-[50%] w-[40px] h-[40px] md:w-[60px] md:h-[60px] object-cover"
                            src={user1}
                            alt="Profile"
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-greys-blue-grey-900 text-base font-medium">
                            {user.firstName} {user.lastName}
                        </div>
                        <div className="text-greys-blue-grey-700 text-sm">{user.role}</div>
                    </div>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute top-[55px] right-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg">
                    <ul className="py-2">
                        <Link to="/app/accountdetails">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Profile
                            </li>
                        </Link>
                        <Link to="/app/trackorders">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Track Order
                            </li>
                        </Link>
                        <Link to="/app/settings">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Settings
                            </li>
                        </Link>
                        <div onClick={handleLogout}>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Logout
                            </li>
                        </div>
                    </ul>
                    </div>
                )}

            </div>



        </div>
    </div>

    </>
  )
}

export default AccountHeader