'use client';
import Login from "./Login"
import SignUp from "./SignUp"
import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [location, setLocation] = useState('Bengaluru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false)


  const handleLogin = () => {
    console.log("Logged in")
    //logic here
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black">zomato</h1>
      </div>

      {/* Location and Search */}
      <div className="hidden lg:flex items-center space-x-4 w-full max-w-2xl">
        {/* Location */}
        <div className="flex items-center bg-gray-100 rounded-full p-2 px-4">
          <FaMapMarkerAlt className="text-red-600" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent focus:outline-none ml-2"
          >
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            {/* Add more locations */}
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex items-center border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full p-2 px-4 focus:outline-none"
          />
          <button className="bg-white p-2 px-4">
            <FaSearch className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Log In / Sign Up */}
      <div className="hidden lg:flex space-x-4 md:flex items-center">
        <Login 
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
        />
        <SignUp />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4 flex flex-col">
          {/* Close Button */}
          <button className="self-end" onClick={toggleMenu}>
            <FaTimes className="text-2xl" />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center mt-4">
            <h1 className="text-2xl font-bold text-black">zomato</h1>
          </div>

          {/* Location and Search for Mobile */}
          <div className="flex flex-col items-center space-y-4 mt-8">
            {/* Location */}
            <div className="flex items-center bg-gray-100 rounded-full p-2 px-4 w-3/4">
              <FaMapMarkerAlt className="text-red-600" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent focus:outline-none ml-2"
              >
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                {/* Add more locations */}
              </select>
            </div>

            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-3/4">
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full p-2 px-4 focus:outline-none"
              />
              <button className="bg-white p-2 px-4">
                <FaSearch className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Log In / Sign Up for Mobile */}
          <div className="flex flex-col items-center mt-8 space-y-4">
          <Login 
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}    
          />
          <SignUp />
          </div>
        </div>
      )}
    </header>
  );
}
