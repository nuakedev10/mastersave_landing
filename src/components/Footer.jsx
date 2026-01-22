import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiMail, 
  HiLocationMarker, 
  HiPhone 
} from 'react-icons/hi';
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaFacebookF 
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ms-black text-ms-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="MasterSave Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold">
                Master<span className="text-ms-yellow">Save</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your financial guardian. Empowering African university students 
              to build smart savings habits and manage their finances effectively.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center hover:bg-ms-red transition-colors">
                <FaTwitter className="text-ms-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center hover:bg-ms-red transition-colors">
                <FaLinkedinIn className="text-ms-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center hover:bg-ms-red transition-colors">
                <FaInstagram className="text-ms-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center hover:bg-ms-red transition-colors">
                <FaFacebookF className="text-ms-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ms-yellow">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-ms-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-ms-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-ms-white transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/prototype" className="text-gray-400 hover:text-ms-white transition-colors">Prototype</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-ms-white transition-colors">Team</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ms-yellow">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-ms-white transition-colors">MasterSave Student</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-ms-white transition-colors">MasterSave Institutional</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-ms-white transition-colors">Save Lock Feature</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-ms-white transition-colors">Flex Save</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-ms-white transition-colors">Target Save</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ms-yellow">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <HiMail className="text-ms-red mt-1 flex-shrink-0" size={20} />
                <a href="mailto:silogrp1@gmail.com" className="text-gray-400 hover:text-ms-white transition-colors">
                  silogrp1@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="text-ms-red mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  African Leadership University, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <HiPhone className="text-ms-red mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MasterSave. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-ms-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-ms-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-ms-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;