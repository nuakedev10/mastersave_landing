import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { 
  HiShieldCheck,  
  HiChartBar, 
  HiLockClosed,
  HiUserGroup,
  HiAcademicCap,
  HiArrowRight
} from 'react-icons/hi';
import { FaUniversity, FaPiggyBank, FaWallet } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaPiggyBank className="text-ms-yellow" size={40} />,
      title: 'Smart Auto-Save',
      description: 'Automatically save a percentage of your allowance. Set it once and let MasterSave do the rest.'
    },
    {
      icon: <HiChartBar className="text-ms-red" size={40} />,
      title: 'Weekly Budgeting',
      description: 'Get structured weekly budgets based on your profile. Spend consciously without stress.'
    },
    {
      icon: <HiLockClosed className="text-ms-yellow" size={40} />,
      title: 'Save Lock',
      description: 'Choose Flex-Save for emergencies or Target-Save for specific goals like buying a laptop.'
    },
    {
      icon: <HiShieldCheck className="text-ms-red" size={40} />,
      title: 'Secure & Safe',
      description: 'Bank-level security ensures your savings are protected at all times.'
    }
  ];

  const stats = [
    { value: '45%', label: 'Average Savings Rate', icon: <FaPiggyBank /> },
    { value: '3', label: 'Partner Universities', icon: <FaUniversity /> },
    { value: '10K+', label: 'Target Users', icon: <HiUserGroup /> },
    { value: '100%', label: 'Student Focused', icon: <HiAcademicCap /> }
  ];

  return (
    <div>
      <Hero />

      {/* Problem Section */}
      <section className="section-padding bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              The Problem We're Solving
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              African Students Struggle with{' '}
              <span className="text-ms-red">Financial Management</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Most university students in Africa lack access to financial literacy tools and 
              structured savings systems. They often exhaust their allowances within days, 
              leaving them financially vulnerable for the rest of the month. MasterSave 
              changes this narrative by acting as their financial guardian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ms-white p-8 rounded-2xl shadow-lg card-hover border-l-4 border-ms-red">
              <div className="text-4xl font-bold text-ms-red mb-2">78%</div>
              <p className="text-gray-600">of African students exhaust their allowance within the first week</p>
            </div>
            <div className="bg-ms-white p-8 rounded-2xl shadow-lg card-hover border-l-4 border-ms-yellow">
              <div className="text-4xl font-bold text-ms-yellow mb-2">65%</div>
              <p className="text-gray-600">lack access to any formal savings or budgeting tools</p>
            </div>
            <div className="bg-ms-white p-8 rounded-2xl shadow-lg card-hover border-l-4 border-ms-red">
              <div className="text-4xl font-bold text-ms-red mb-2">90%</div>
              <p className="text-gray-600">wish they had better financial management skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              How <span className="text-ms-yellow">Master</span><span className="text-ms-red">Save</span> Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A simple yet powerful approach to student financial wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-ms-gray p-8 rounded-2xl card-hover text-center"
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-ms-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features" className="btn-primary inline-flex items-center">
              View All Features
              <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-ms-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-ms-yellow text-4xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-ms-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partnership */}
      <section className="section-padding bg-ms-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-ms-white text-ms-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Institutional Partnership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
                Official Stipend Disbursement Platform
              </h2>
              <p className="text-ms-white opacity-90 text-lg mb-6 leading-relaxed">
                MasterSave has been suggested as the official stipend disbursement tool 
                for Mastercard Foundation Scholars at African Leadership University. 
                This institutional version ensures transparent, trackable, and efficient 
                fund distribution while promoting financial literacy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-ms-white">
                  <HiShieldCheck className="mr-3" size={24} />
                  <span>Transparent fund disbursement</span>
                </li>
                <li className="flex items-center text-ms-white">
                  <HiChartBar className="mr-3" size={24} />
                  <span>Real-time tracking and reporting</span>
                </li>
                <li className="flex items-center text-ms-white">
                  <HiAcademicCap className="mr-3" size={24} />
                  <span>Built-in financial literacy tools</span>
                </li>
              </ul>
              <Link to="/features" className="inline-flex items-center bg-ms-white text-ms-yellow px-8 py-3 rounded-full font-semibold hover:bg-ms-black hover:text-ms-white transition-colors">
                Learn More
                <HiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="bg-ms-white p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <FaWallet className="text-ms-yellow mr-3" size={32} />
                  <span className="text-xl font-bold text-ms-black">Institutional Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-ms-gray p-4 rounded-xl">
                    <div className="text-sm text-gray-500">Total Disbursed</div>
                    <div className="text-2xl font-bold text-ms-black">$125,000</div>
                  </div>
                  <div className="bg-ms-gray p-4 rounded-xl">
                    <div className="text-sm text-gray-500">Active Scholars</div>
                    <div className="text-2xl font-bold text-ms-black">450</div>
                  </div>
                  <div className="bg-ms-gray p-4 rounded-xl">
                    <div className="text-sm text-gray-500">Avg. Savings Rate</div>
                    <div className="text-2xl font-bold text-ms-yellow">42%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
            Ready to Transform Student Finances?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We're currently building MasterSave and seeking partnerships with universities, 
            financial institutions, and development organizations across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link to="/research" className="btn-secondary">
              View Our Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;