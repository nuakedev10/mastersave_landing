import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Research', path: '/research' },
    { name: 'Prototype', path: '/prototype' },
    { name: 'Team', path: '/team' },
    { name: 'Call To Action', path: '/call-to-action' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ms-black shadow-lg py-2' : 'bg-ms-black/95 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="MasterSave Logo" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-ms-white font-bold text-xl">
                Master<span className="text-ms-yellow">save</span>
              </span>
              <span className="text-gray-400 text-xs tracking-wider">FINANCIAL GUARDIAN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-ms-yellow'
                    : 'text-white hover:text-ms-yellow'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="mailto:silogrp1@gmail.com"
              className="bg-ms-yellow text-ms-white px-6 py-2 rounded-full font-semibold hover:bg-ms-red transition-colors duration-200"
            >
              silogrp1@gmail.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-ms-yellow transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-ms-black border-t border-gray-800 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-ms-yellow bg-gray-900'
                      : 'text-white hover:text-ms-yellow hover:bg-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:silogrp1@gmail.com"
                className="block px-3 py-2 mt-4 bg-ms-yellow text-ms-white rounded-full text-center font-semibold"
              >
                silogrp1@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;