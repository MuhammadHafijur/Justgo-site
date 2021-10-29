import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from './airplane.png'

const Header = () => {
  const {user, logOut} = useAuth();

    return (
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='/home' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="" />
      <span className="ml-3 text-xl">JustGo</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/about" className="mr-5 hover:text-gray-900">Services</Link>
      <Link to="/managetour" className="mr-5 hover:text-gray-900">Manage Tour</Link>
      <Link to="/help" className="mr-5 hover:text-gray-900">Book</Link>
    </nav>
    {
    user?.email ?
    <button onClick={logOut} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
    </button> :
    <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
    </Link>
    } 
  </div>
</header>
    );
};

export default Header;