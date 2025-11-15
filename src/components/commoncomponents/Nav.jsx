import React, { useState } from 'react';
import Container from './Container';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io'; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="flex justify-between items-center py-6 md:py-9 relative">
        
        {/* Logo */}
        <div className="w-[150px]">
          <NavLink to="/">
            <img src="./images/Logo.png" alt="Logo" className="w-full h-auto cursor-pointer" />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-12 font-[Commissioner] text-[#62636C]">
          <li>
            <NavLink 
              to="/episodes"
              className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
            >
              Episodes
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/reviews"
              className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog"
              className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button 
            text="Subscribe" 
            bgColor="#7678ED" 
            textColor="#FFFFFF" 
            font="Commissioner" 
            fontSize="16px" 
            fontWeight={400} 
            border='1px solid #7678ED'
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <IoMdMenu size={28} />
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
          
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose size={28} />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 px-6 mt-4 font-[Commissioner] text-[#62636C]">
            <li>
              <NavLink 
                to="/episodes"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
              >
                Episodes
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reviews"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#7678ED]" : "text-[#62636C]"}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Subscribe Button */}
          <div className="px-6 mt-6">
            <Button 
              text="Subscribe" 
              bgColor="#7678ED" 
              textColor="#FFFFFF" 
              font="Commissioner" 
              fontSize="16px" 
              fontWeight={400} 
              border='1px solid #7678ED'
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={() => setIsOpen(false)}></div>}

      </div>
    </Container>
  );
};

export default Nav;
