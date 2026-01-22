import React, { useState } from 'react';
import { 
  HiShieldCheck, 
  HiCurrencyDollar, 
  HiChartBar, 
  HiLockClosed,
  HiHome,
  HiCog,
  HiBell,
  HiUser,
  HiArrowUp,
  HiArrowDown,
  HiPlus,
  HiRefresh
} from 'react-icons/hi';
import { FaPiggyBank, FaWallet, FaChartLine } from 'react-icons/fa';

const Prototype = () => {
  const [activeScreen, setActiveScreen] = useState('home');

  const screens = [
    { id: 'home', name: 'Home', icon: <HiHome size={20} /> },
    { id: 'savings', name: 'Savings', icon: <FaPiggyBank size={20} /> },
    { id: 'budget', name: 'Budget', icon: <FaWallet size={20} /> },
    { id: 'analytics', name: 'Analytics', icon: <FaChartLine size={20} /> }
  ];

  const transactions = [
    { type: 'save', name: 'Auto-Save', amount: '+$45.00', time: 'Today' },
    { type: 'spend', name: 'Food & Groceries', amount: '-$12.50', time: 'Today' },
    { type: 'spend', name: 'Transport', amount: '-$5.00', time: 'Yesterday' },
    { type: 'save', name: 'Target-Save', amount: '+$20.00', time: 'Yesterday' },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return (
          <div className="p-4 space-y-4">
            {/* Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Good Morning,</p>
                <h2 className="text-xl font-bold text-ms-black">Amara 👋</h2>
              </div>
              <div className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center">
                <HiBell className="text-ms-white" size={20} />
              </div>
            </div>

            {/* Balance Card */}
            <div className="bg-ms-black rounded-2xl p-5 text-ms-white">
              <p className="text-gray-400 text-sm mb-1">Total Balance</p>
              <h1 className="text-3xl font-bold mb-4">$1,250.00</h1>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-xs">Savings</p>
                  <p className="font-semibold text-ms-yellow">$562.50</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Budget</p>
                  <p className="font-semibold text-ms-red">$687.50</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">This Week</p>
                  <p className="font-semibold">$85.00</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-ms-yellow rounded-xl p-3 text-center">
                <HiPlus className="text-ms-white mx-auto" size={20} />
                <p className="text-xs text-ms-white mt-1">Add</p>
              </div>
              <div className="bg-ms-red rounded-xl p-3 text-center">
                <HiArrowUp className="text-ms-white mx-auto" size={20} />
                <p className="text-xs text-ms-white mt-1">Send</p>
              </div>
              <div className="bg-ms-black rounded-xl p-3 text-center">
                <HiArrowDown className="text-ms-white mx-auto" size={20} />
                <p className="text-xs text-ms-white mt-1">Request</p>
              </div>
              <div className="bg-gray-200 rounded-xl p-3 text-center">
                <HiRefresh className="text-ms-black mx-auto" size={20} />
                <p className="text-xs text-ms-black mt-1">More</p>
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-ms-black">Recent Activity</h3>
                <span className="text-ms-yellow text-sm">See All</span>
              </div>
              <div className="space-y-3">
                {transactions.map((tx, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        tx.type === 'save' ? 'bg-ms-yellow' : 'bg-ms-red'
                      }`}>
                        {tx.type === 'save' ? (
                          <HiArrowDown className="text-ms-white" size={14} />
                        ) : (
                          <HiArrowUp className="text-ms-white" size={14} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ms-black">{tx.name}</p>
                        <p className="text-xs text-gray-400">{tx.time}</p>
                      </div>
                    </div>
                    <span className={`font-semibold text-sm ${
                      tx.type === 'save' ? 'text-ms-yellow' : 'text-ms-red'
                    }`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'savings':
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-ms-black">Save Lock</h2>
            
            {/* Flex-Save Card */}
            <div className="bg-ms-yellow rounded-2xl p-5 text-ms-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <HiRefresh className="mr-2" size={24} />
                  <span className="font-semibold">Flex-Save</span>
                </div>
                <span className="bg-ms-white text-ms-yellow px-2 py-1 rounded-full text-xs font-semibold">
                  Active
                </span>
              </div>
              <p className="text-2xl font-bold mb-2">$312.50</p>
              <p className="text-sm opacity-80">Emergency savings • Flexible access</p>
              <div className="mt-4 bg-ms-white bg-opacity-20 rounded-full h-2">
                <div className="bg-ms-white h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>

            {/* Target-Save Card */}
            <div className="bg-ms-red rounded-2xl p-5 text-ms-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <HiLockClosed className="mr-2" size={24} />
                  <span className="font-semibold">Target-Save</span>
                </div>
                <span className="bg-ms-white text-ms-red px-2 py-1 rounded-full text-xs font-semibold">
                  Locked
                </span>
              </div>
              <p className="text-2xl font-bold mb-2">$250.00</p>
              <p className="text-sm opacity-80">Goal: New Laptop • $500</p>
              <div className="mt-4 bg-ms-white bg-opacity-20 rounded-full h-2">
                <div className="bg-ms-white h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
              <p className="text-xs mt-2 opacity-80">50% complete • 30 days left</p>
            </div>

            {/* Add Goal Button */}
            <button className="w-full bg-ms-black text-ms-white py-4 rounded-xl font-semibold flex items-center justify-center">
              <HiPlus className="mr-2" /> Add New Savings Goal
            </button>
          </div>
        );

      case 'budget':
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-ms-black">Weekly Budget</h2>
            
            {/* Budget Overview */}
            <div className="bg-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Week of Jan 15 - 21</span>
                <span className="bg-ms-yellow text-ms-white px-3 py-1 rounded-full text-sm font-semibold">
                  $85 left
                </span>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold text-ms-black">Spent: $55</span>
                  <span className="text-xs font-semibold text-ms-black">Budget: $140</span>
                </div>
                <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-200">
                  <div style={{ width: '40%' }} className="bg-ms-red rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-3">
              <h3 className="font-semibold text-ms-black">Spending by Category</h3>
              {[
                { name: 'Food & Groceries', spent: 25, budget: 50, color: 'ms-red' },
                { name: 'Transport', spent: 15, budget: 30, color: 'ms-yellow' },
                { name: 'Entertainment', spent: 10, budget: 40, color: 'ms-black' },
                { name: 'Utilities', spent: 5, budget: 20, color: 'ms-red' }
              ].map((cat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{cat.name}</span>
                    <span className="text-sm text-gray-600">${cat.spent}/${cat.budget}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-2 bg-${cat.color} rounded-full`}
                      style={{ width: `${(cat.spent/cat.budget)*100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-ms-black">Analytics</h2>
            
            {/* Savings Growth */}
            <div className="bg-ms-black rounded-2xl p-5 text-ms-white">
              <p className="text-gray-400 text-sm mb-1">Total Savings Growth</p>
              <div className="flex items-end justify-between">
                <h1 className="text-3xl font-bold">+42%</h1>
                <span className="text-ms-yellow text-sm">↑ This Month</span>
              </div>
              {/* Chart Placeholder */}
              <div className="flex items-end justify-between mt-4 h-24">
                {[40, 55, 35, 70, 60, 85, 75].map((height, i) => (
                  <div 
                    key={i}
                    className="w-6 bg-ms-yellow rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-ms-yellow rounded-xl p-4 text-ms-white">
                <FaPiggyBank className="mb-2" size={24} />
                <p className="text-2xl font-bold">$562</p>
                <p className="text-xs opacity-80">Total Saved</p>
              </div>
              <div className="bg-ms-red rounded-xl p-4 text-ms-white">
                <HiChartBar className="mb-2" size={24} />
                <p className="text-2xl font-bold">45%</p>
                <p className="text-xs opacity-80">Savings Rate</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <HiShieldCheck className="text-ms-yellow mb-2" size={24} />
                <p className="text-2xl font-bold text-ms-black">12</p>
                <p className="text-xs text-gray-600">Weeks Streak</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <HiCurrencyDollar className="text-ms-red mb-2" size={24} />
                <p className="text-2xl font-bold text-ms-black">$89</p>
                <p className="text-xs text-gray-600">Avg. Weekly Save</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-ms-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Interactive Prototype
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ms-white mb-6">
            Experience <span className="text-ms-yellow">Master</span><span className="text-ms-red">Save</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our interactive prototype and see how MasterSave will help 
            African students manage their finances effectively.
          </p>
        </div>
      </section>

      {/* Prototype Section */}
      <section className="section-padding bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="bg-ms-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-ms-white rounded-[2.5rem] w-72 h-[600px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-ms-black text-ms-white px-6 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <div className="w-20 h-6 bg-ms-black rounded-full"></div>
                      <span>100%</span>
                    </div>

                    {/* Screen Content */}
                    <div className="h-[480px] overflow-y-auto">
                      {renderScreen()}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-ms-white border-t border-gray-200 px-4 py-3">
                      <div className="flex justify-around">
                        {screens.map((screen) => (
                          <button
                            key={screen.id}
                            onClick={() => setActiveScreen(screen.id)}
                            className={`flex flex-col items-center ${
                              activeScreen === screen.id
                                ? 'text-ms-yellow'
                                : 'text-gray-400'
                            }`}
                          >
                            {screen.icon}
                            <span className="text-xs mt-1">{screen.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-ms-yellow rounded-full flex items-center justify-center animate-float shadow-lg">
                  <FaPiggyBank className="text-ms-white" size={32} />
                </div>
                <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-ms-red rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                  <HiShieldCheck className="text-ms-white" size={28} />
                </div>
              </div>
            </div>

            {/* Features Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
                Navigate the <span className="text-ms-yellow">Prototype</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Click through the different screens to explore MasterSave's core 
                functionality. This interactive prototype demonstrates how students 
                will manage their savings and budget.
              </p>

              <div className="space-y-4">
                {screens.map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreen(screen.id)}
                    className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${
                      activeScreen === screen.id
                        ? 'bg-ms-yellow text-ms-white'
                        : 'bg-ms-white text-ms-black hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        activeScreen === screen.id
                          ? 'bg-ms-white bg-opacity-20'
                          : 'bg-ms-gray'
                      }`}>
                        {screen.icon}
                      </div>
                      <span className="font-semibold">{screen.name}</span>
                    </div>
                    <HiChartBar size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Prototype <span className="text-ms-red">Highlights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HiHome className="text-ms-yellow" size={40} />,
                title: 'Dashboard Overview',
                description: 'See your complete financial picture at a glance - balance, savings, and recent activity.'
              },
              {
                icon: <FaPiggyBank className="text-ms-red" size={40} />,
                title: 'Save Lock System',
                description: 'Toggle between Flex-Save and Target-Save to protect your savings effectively.'
              },
              {
                icon: <FaWallet className="text-ms-yellow" size={40} />,
                title: 'Smart Budgeting',
                description: 'Track weekly spending by category with visual progress indicators.'
              },
              {
                icon: <FaChartLine className="text-ms-red" size={40} />,
                title: 'Analytics & Insights',
                description: 'Understand your savings patterns with beautiful charts and statistics.'
              },
              {
                icon: <HiBell className="text-ms-yellow" size={40} />,
                title: 'Smart Notifications',
                description: 'Get timely alerts about budget limits and savings milestones.'
              },
              {
                icon: <HiCog className="text-ms-red" size={40} />,
                title: 'Customizable Settings',
                description: 'Adjust savings percentages and budget categories to fit your lifestyle.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-ms-gray p-8 rounded-2xl card-hover text-center">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-ms-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 bg-ms-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HiShieldCheck className="text-ms-white mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
            Currently in Development
          </h2>
          <p className="text-ms-white opacity-90 text-lg mb-8">
            MasterSave is actively being developed. We're working on regulatory 
            compliance, security infrastructure, and partnerships with financial 
            institutions across Africa.
          </p>
          <div className="inline-flex items-center bg-ms-white text-ms-red px-6 py-3 rounded-full font-semibold">
            <div className="w-3 h-3 bg-ms-yellow rounded-full animate-pulse mr-3"></div>
            Beta Launch Coming Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prototype;