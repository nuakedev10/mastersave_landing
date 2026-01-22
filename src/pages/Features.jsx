import React, { useState } from 'react';
import { 
  HiShieldCheck, 
  HiCurrencyDollar, 
  HiChartBar, 
  HiLockClosed,
  HiRefresh,
  HiClock,
  HiUserGroup,
  HiAcademicCap,
  HiDocumentReport,
  HiBell,
  HiCreditCard,
  HiGlobe
} from 'react-icons/hi';
import { 
  FaPiggyBank, 
  FaWallet, 
  FaUniversity, 
  FaChartLine,
  FaMobileAlt,
  FaLock
} from 'react-icons/fa';

const Features = () => {
  const [activeTab, setActiveTab] = useState('student');

  const saveLockFeatures = [
    {
      icon: <HiRefresh className="text-ms-yellow" size={48} />,
      title: 'Flex-Save',
      description: 'Emergency savings with controlled access',
      details: [
        'Save for unexpected expenses',
        'Multiple withdrawals allowed',
        'Daily/weekly withdrawal limits',
        'Prevents total fund exhaustion',
        'Instant access when needed'
      ],
      color: 'ms-yellow'
    },
    {
      icon: <HiLockClosed className="text-ms-red" size={48} />,
      title: 'Target-Save',
      description: 'Goal-based savings with commitment',
      details: [
        'Save towards specific goals',
        'Set target amount & duration',
        'Locked until goal is reached',
        'Track progress visually',
        'Celebrate achievements'
      ],
      color: 'ms-red'
    }
  ];

  const studentFeatures = [
    {
      icon: <FaPiggyBank className="text-ms-yellow" size={36} />,
      title: 'Automatic Savings',
      description: 'Set your savings percentage (e.g., 45%) and MasterSave automatically deducts from your allowance.'
    },
    {
      icon: <FaWallet className="text-ms-red" size={36} />,
      title: 'Weekly Budget',
      description: 'Receive a structured weekly budget (e.g., 55%) to help you plan your spending consciously.'
    },
    {
      icon: <HiChartBar className="text-ms-yellow" size={36} />,
      title: 'Spending Analytics',
      description: 'Track your spending patterns with detailed analytics and insights.'
    },
    {
      icon: <HiBell className="text-ms-red" size={36} />,
      title: 'Smart Notifications',
      description: 'Get timely reminders about budget limits, savings milestones, and financial tips.'
    },
    {
      icon: <FaMobileAlt className="text-ms-yellow" size={36} />,
      title: 'Mobile-First Design',
      description: 'Access your finances anytime, anywhere with our intuitive mobile app.'
    },
    {
      icon: <FaLock className="text-ms-red" size={36} />,
      title: 'Bank-Level Security',
      description: 'Your data and funds are protected with enterprise-grade security measures.'
    }
  ];

  const institutionalFeatures = [
    {
      icon: <HiCurrencyDollar className="text-ms-yellow" size={36} />,
      title: 'Stipend Disbursement',
      description: 'Streamlined, automated distribution of funds to scholarship recipients.'
    },
    {
      icon: <HiDocumentReport className="text-ms-red" size={36} />,
      title: 'Reporting Dashboard',
      description: 'Comprehensive reports on fund utilization and student savings behavior.'
    },
    {
      icon: <HiUserGroup className="text-ms-yellow" size={36} />,
      title: 'Batch Management',
      description: 'Manage multiple cohorts and scholarship programs efficiently.'
    },
    {
      icon: <FaChartLine className="text-ms-red" size={36} />,
      title: 'Impact Metrics',
      description: 'Measure financial literacy improvement and savings growth over time.'
    },
    {
      icon: <HiShieldCheck className="text-ms-yellow" size={36} />,
      title: 'Compliance Ready',
      description: 'Built to meet regulatory requirements across African jurisdictions.'
    },
    {
      icon: <HiGlobe className="text-ms-red" size={36} />,
      title: 'Multi-Currency',
      description: 'Support for multiple African currencies and exchange rate management.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-ms-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ms-white mb-6">
            Powerful Features for{' '}
            <span className="text-ms-yellow">Smart</span>{' '}
            <span className="text-ms-red">Savings</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            MasterSave offers two tailored solutions: one for individual students 
            and one for institutions managing scholarship funds.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-ms-gray py-8 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-ms-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('student')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'student'
                    ? 'bg-ms-yellow text-ms-white'
                    : 'text-ms-black hover:bg-ms-gray'
                }`}
              >
                <HiAcademicCap className="inline mr-2" />
                Student Version
              </button>
              <button
                onClick={() => setActiveTab('institutional')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'institutional'
                    ? 'bg-ms-red text-ms-white'
                    : 'text-ms-black hover:bg-ms-gray'
                }`}
              >
                <FaUniversity className="inline mr-2" />
                Institutional Version
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Save Lock Feature */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Core Feature
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Save Lock: <span className="text-ms-yellow">Your Savings</span>{' '}
              <span className="text-ms-red">Protector</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our signature feature that ensures your savings stay safe while 
              giving you the flexibility you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {saveLockFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`bg-ms-gray p-8 rounded-3xl border-t-4 border-${feature.color} card-hover`}
              >
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-ms-black">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <HiShieldCheck className={`text-${feature.color} mr-3 flex-shrink-0`} size={20} />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              {activeTab === 'student' ? (
                <>
                  <span className="text-ms-yellow">Student</span> Features
                </>
              ) : (
                <>
                  <span className="text-ms-red">Institutional</span> Features
                </>
              )}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {activeTab === 'student'
                ? 'Everything a student needs to master their finances'
                : 'Comprehensive tools for scholarship fund management'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'student' ? studentFeatures : institutionalFeatures).map(
              (feature, index) => (
                <div
                  key={index}
                  className="bg-ms-white p-8 rounded-2xl shadow-lg card-hover"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-ms-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-ms-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
              How MasterSave Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Create Profile', desc: 'Set up your account with your savings preferences' },
              { step: '02', title: 'Set Allocation', desc: 'Choose your savings percentage (e.g., 45% save, 55% budget)' },
              { step: '03', title: 'Receive Funds', desc: 'When allowance arrives, auto-split happens instantly' },
              { step: '04', title: 'Track & Grow', desc: 'Monitor progress and watch your savings grow' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-ms-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-ms-white text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-ms-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block mt-4">
                    <div className="w-full h-0.5 bg-ms-yellow opacity-30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Version Comparison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-ms-gray">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">
                    <span className="bg-ms-yellow text-ms-white px-4 py-2 rounded-full">Student</span>
                  </th>
                  <th className="text-center py-4 px-4">
                    <span className="bg-ms-red text-ms-white px-4 py-2 rounded-full">Institutional</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Auto Savings', student: true, institutional: true },
                  { feature: 'Weekly Budget', student: true, institutional: true },
                  { feature: 'Flex-Save', student: true, institutional: true },
                  { feature: 'Target-Save', student: true, institutional: true },
                  { feature: 'Spending Analytics', student: true, institutional: true },
                  { feature: 'Bulk Disbursement', student: false, institutional: true },
                  { feature: 'Admin Dashboard', student: false, institutional: true },
                  { feature: 'Compliance Reports', student: false, institutional: true },
                  { feature: 'Multi-Currency', student: false, institutional: true }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-ms-gray">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.student ? (
                        <HiShieldCheck className="text-ms-yellow mx-auto" size={24} />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.institutional ? (
                        <HiShieldCheck className="text-ms-red mx-auto" size={24} />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;