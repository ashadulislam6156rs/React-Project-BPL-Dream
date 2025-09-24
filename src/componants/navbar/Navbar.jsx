import React from 'react';
import { BsCoin } from "react-icons/bs";

const Navbar = ({ availableBalance }) => {
  // console.log(availableBalance);
  
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      </ul>
    </div>
    <img className='w-10' src="/assets/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base font-medium">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className='text-base font-medium mr-1 text-teal-600'>{availableBalance} <span className='text-black'>Coin</span></a>
    <img className='w-6' src="assets/DoubleDollar.png" alt="" />
  </div>
</div>
    );
};

export default Navbar;