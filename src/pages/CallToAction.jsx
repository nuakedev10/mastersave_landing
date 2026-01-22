import React, { useState } from 'react';
import { 
  HiMail, 
  HiLocationMarker, 
  HiPhone,
  HiCheckCircle,
  HiUserGroup,
  HiAcademicCap,
  HiOfficeBuilding,
  HiCurrencyDollar
} from 'react-icons/hi';
import { FaUniversity, FaHandshake, FaPiggyBank } from 'react-icons/fa';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const partnerTypes = [
    {
      icon: <FaUniversity className="text-ms-yellow" size={40} />,
      title: 'Universities',
      description: 'Partner with us to offer MasterSave to your students as an official financial wellness tool.',
      benefits: ['Improved student financial wellness', 'Reduced financial stress', 'Better retention rates']
    },
    {
      icon: <HiOfficeBuilding className="text-ms-red" size={40} />,
      title: 'Financial Institutions',
      description: 'Collaborate to provide secure banking infrastructure for student savings.',
      benefits: ['Access to student market', 'Financial inclusion impact', 'Brand visibility']
    },
    {
      icon: <FaHandshake className="text-ms-yellow" size={40} />,
      title: 'NGOs & Foundations',
      description: 'Support our mission to improve financial literacy across Africa.',
      benefits: ['Measurable impact', 'Scalable solution', 'Sustainable model']
    },
    {
      icon: <HiCurrencyDollar className="text-ms-red" size={40} />,
      title: 'Investors',
      description: 'Join us in building the future of student fintech in Africa.',
      benefits: ['Growing market', 'Strong team', 'Clear vision']
    }
  ];

  const stats = [
    { value: '50M+', label: 'African Students', icon: <HiUserGroup /> },
    { value: '$2B+', label: 'Student Spending', icon: <HiCurrencyDollar /> },
    { value: '78%', label: 'Need Better Tools', icon: <FaPiggyBank /> },
    { value: '8', label: 'Research Universities', icon: <HiAcademicCap /> }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-ms-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Partner With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ms-white mb-6">
            Let's Build the Future of{' '}
            <span className="text-ms-yellow">Student</span>{' '}
            <span className="text-ms-red">Finance</span> Together
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're actively seeking partnerships with universities, financial institutions, 
            NGOs, and investors who share our vision of financial empowerment for African students.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-ms-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-ms-white">
                <div className="text-3xl mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Who We're Looking For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <div 
                key={index}
                className="bg-ms-gray p-8 rounded-2xl card-hover"
              >
                <div className="flex items-start mb-6">
                  <div className="mr-4">{partner.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-ms-black mb-2">{partner.title}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <HiCheckCircle className="text-ms-yellow mr-2 flex-shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Whether you're a university administrator, a financial institution looking 
                to expand into the student market, an NGO focused on financial literacy, 
                or an investor interested in African fintech - we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ms-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <HiMail className="text-ms-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black">Email Us</h3>
                    <a href="mailto:silogrp1@gmail.com" className="text-ms-yellow hover:underline">
                      silogrp1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ms-red rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <HiLocationMarker className="text-ms-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black">Our Base</h3>
                    <p className="text-gray-600">
                      African Leadership University<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ms-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <HiPhone className="text-ms-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black">Phone</h3>
                    <p className="text-gray-600">Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="mt-12 p-6 bg-ms-black rounded-2xl">
                <h3 className="text-ms-yellow font-semibold mb-4">Why Partner With MasterSave?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <HiCheckCircle className="text-ms-yellow mr-2" size={20} />
                    Research-backed product design
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-ms-yellow mr-2" size={20} />
                    Focus on regulatory compliance
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-ms-yellow mr-2" size={20} />
                    Passionate, dedicated team
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-ms-yellow mr-2" size={20} />
                    Clear path to market
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-ms-white p-8 rounded-3xl shadow-xl text-center">
                  <div className="w-20 h-20 bg-ms-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <HiCheckCircle className="text-ms-white" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-ms-black mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your message and will get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-ms-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-ms-black mb-6">Send Us a Message</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ms-yellow focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ms-yellow focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ms-yellow focus:border-transparent outline-none transition-all"
                        placeholder="Your University/Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I am a... *
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ms-yellow focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="university">University Representative</option>
                        <option value="financial">Financial Institution</option>
                        <option value="ngo">NGO / Foundation</option>
                        <option value="investor">Investor</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ms-yellow focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your interest in partnering with MasterSave..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary text-center"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Endorsement */}
      <section className="py-20 bg-ms-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-ms-yellow bg-opacity-10 border border-ms-yellow rounded-3xl p-8 md:p-12">
            <FaUniversity className="text-ms-yellow mx-auto mb-6" size={64} />
            <h2 className="text-2xl md:text-3xl font-bold text-ms-white mb-6">
              Suggested as Official Stipend Disbursement Tool
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              MasterSave has been suggested as the official stipend disbursement tool 
              for Mastercard Foundation Scholars at African Leadership University. 
              This institutional endorsement reflects our commitment to providing 
              a secure, compliant, and effective financial solution for students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-ms-yellow text-ms-white px-6 py-3 rounded-full font-semibold">
                Regulatory Compliance Focus
              </div>
              <div className="bg-ms-red text-ms-white px-6 py-3 rounded-full font-semibold">
                Bank-Level Security
              </div>
              <div className="bg-ms-white text-ms-black px-6 py-3 rounded-full font-semibold">
                Transparent Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ms-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
            Ready to Transform Student Finances in Africa?
          </h2>
          <p className="text-ms-white opacity-90 text-lg mb-8">
            Join us in building a financially empowered generation of African students.
          </p>
          <a 
            href="mailto:silogrp1@gmail.com"
            className="inline-flex items-center bg-ms-white text-ms-red px-8 py-4 rounded-full font-semibold hover:bg-ms-black hover:text-ms-white transition-colors text-lg"
          >
            <HiMail className="mr-3" size={24} />
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;