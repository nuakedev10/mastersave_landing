import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiShieldCheck, HiCurrencyDollar } from 'react-icons/hi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import heroImage from '../assets/student-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-ms-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-ms-white">
            <div className="inline-flex items-center bg-ms-yellow px-4 py-2 rounded-full mb-6">
              <HiShieldCheck className="text-ms-white mr-2" size={20} />
              <span className="text-sm font-semibold text-ms-white">
                Your Financial Guardian
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Savings for{' '}
              <span className="text-ms-yellow">African</span>{' '}
              <span className="text-ms-red">Students</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              MasterSave automatically saves a fraction of your allowance and 
              structures the rest into a weekly conscious budget. Take control 
              of your finances while you focus on your education.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-yellow">10K+</div>
                <div className="text-sm text-gray-400">Target Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-red">8</div>
                <div className="text-sm text-gray-400">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-yellow">100%</div>
                <div className="text-sm text-gray-400">Secure</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/features" className="btn-primary flex items-center">
                Explore Features
                <HiArrowRight className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center">
                Partner With Us
                <HiCurrencyDollar className="ml-2" />
              </Link>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-ms-black border border-gray-600 rounded-lg px-4 py-2 cursor-pointer hover:border-ms-yellow transition-colors">
                <FaGooglePlay className="text-ms-yellow text-2xl mr-3" />
                <div>
                  <div className="text-xs text-gray-400">Coming Soon on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
              <div className="flex items-center bg-ms-black border border-gray-600 rounded-lg px-4 py-2 cursor-pointer hover:border-ms-yellow transition-colors">
                <FaApple className="text-ms-white text-2xl mr-3" />
                <div>
                  <div className="text-xs text-gray-400">Coming Soon on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="phone-mockup animate-float">
              <div className="phone-screen w-64 h-[520px] flex flex-col">
                {/* Phone Header */}
                <div className="bg-ms-yellow p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-ms-white font-bold">MasterSave</span>
                    <HiShieldCheck className="text-ms-white" size={24} />
                  </div>
                </div>
                
                {/* Phone Content */}
                <div className="p-4 flex-1 bg-ms-gray">
                  <div className="bg-ms-white rounded-xl p-4 shadow-md mb-4">
                    <div className="text-sm text-gray-500">Total Savings</div>
                    <div className="text-2xl font-bold text-ms-black">$1,250.00</div>
                    <div className="flex items-center mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ms-yellow h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ms-white rounded-xl p-4 shadow-md mb-4">
                    <div className="text-sm text-gray-500">Weekly Budget</div>
                    <div className="text-xl font-bold text-ms-red">$85.00</div>
                    <div className="text-xs text-gray-400 mt-1">55% of income</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-ms-yellow rounded-xl p-3 text-center">
                      <HiCurrencyDollar className="text-ms-white mx-auto" size={24} />
                      <div className="text-xs text-ms-white font-medium mt-1">Flex Save</div>
                    </div>
                    <div className="bg-ms-red rounded-xl p-3 text-center">
                      <HiShieldCheck className="text-ms-white mx-auto" size={24} />
                      <div className="text-xs text-ms-white font-medium mt-1">Target Save</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Building Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-ms-red bg-opacity-20 border border-ms-red rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-ms-red rounded-full animate-pulse-slow mr-3"></div>
            <span className="text-ms-white text-sm">
              Currently in Development • Seeking Partnerships • Regulatory Compliance in Progress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;