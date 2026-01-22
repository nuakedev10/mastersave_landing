import React from 'react';
import { 
  HiMail, 
  HiAcademicCap,
  HiLightBulb,
  HiCode,
  HiChartBar,
  HiUserGroup
} from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nuake Justice Jr',
      role: 'Founder',
      bio: 'Passionate about financial inclusion for African students. Leading the vision of MasterSave.',
      icon: <HiLightBulb className="text-ms-yellow" size={32} />,
      color: 'ms-yellow'
    },
    {
      name: 'Isshaq Jajah',
      role: 'Partnerships Manager',
      bio: 'Building strategic relationships with universities and financial institutions.',
      icon: <HiCode className="text-ms-red" size={32} />,
      color: 'ms-red'
    },
   
    {
      name: 'Amina',
      role: 'Head of Research',
      bio: 'Conducting deep research to understand student financial behaviors across Africa.',
      icon: <HiAcademicCap className="text-ms-red" size={32} />,
      color: 'ms-red'
    },
    {
      name: 'Donald Edinam',
      role: 'Product Designer',
      bio: 'Designing intuitive user experiences for MasterSave.',
      icon: <HiUserGroup className="text-ms-yellow" size={32} />,
      color: 'ms-yellow'
    },
    {
      name: 'Romeo Newo Ronzine',
      role: 'CTO',
      bio: 'Building secure and scalable fintech solutions for the African market. Experience in full-stack development, blockchain, and AI.',
      icon: <HiMail className="text-ms-red" size={32} />,
      color: 'ms-red'
    }
  ];

  const values = [
    {
      icon: <HiLightBulb className="text-ms-yellow" size={48} />,
      title: 'Innovation',
      description: 'We constantly push boundaries to create solutions that truly serve African students.'
    },
    {
      icon: <HiUserGroup className="text-ms-red" size={48} />,
      title: 'Empathy',
      description: 'We understand the struggles because we\'ve lived them. Every feature is designed with care.'
    },
    {
      icon: <HiAcademicCap className="text-ms-yellow" size={48} />,
      title: 'Education',
      description: 'Financial literacy is at the core of everything we build.'
    },
    {
      icon: <HiChartBar className="text-ms-red" size={48} />,
      title: 'Impact',
      description: 'We measure success by the lives we change and the habits we help build.'
    }
  ];

  const milestones = [
    { year: 'October 2025', title: 'Idea Born', description: 'MasterSave concept developed at ALU' },
    { year: 'November- January 2025', title: 'Research Phase', description: 'Extensive surveys across 8 universities' },
    { year: 'January 2026', title: 'Prototype Built', description: 'First interactive prototype completed' },
    { year: 'March-May 2026', title: 'Partnerships', description: 'Seeking institutional partnerships' },
    { year: 'June 2026', title: 'Beta Launch', description: 'Planned beta release at ALU' },
    { year: 'July 2026', title: 'Expansion', description: 'Scale to other African universities' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-ms-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ms-white mb-6">
            Meet the <span className="text-ms-yellow">Minds</span> Behind{' '}
            <span className="text-ms-red">MasterSave</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate team of African university students and graduates committed 
            to solving the financial challenges we all face.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section-padding bg-ms-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
                Built by Students, for Students
              </h2>
              <p className="text-ms-white opacity-90 text-lg mb-6 leading-relaxed">
                The MasterSave team emerged from the halls of African Leadership University, 
                where we experienced firsthand the financial struggles that African students face. 
                Running out of allowance mid-month, borrowing from friends, missing opportunities 
                due to lack of funds - we've been there.
              </p>
              <p className="text-ms-white opacity-90 text-lg leading-relaxed">
                That's why we're building MasterSave - not as outsiders looking in, but as 
                insiders who truly understand the problem and are passionate about solving it.
              </p>
            </div>
            <div className="bg-ms-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-ms-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiAcademicCap className="text-ms-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-ms-black mb-4">ALU Origin Story</h3>
                <p className="text-gray-600 mb-6">
                  Born at African Leadership University in Kigali, Rwanda, MasterSave 
                  is a testament to the entrepreneurial spirit of African youth.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ms-yellow">6</div>
                    <div className="text-sm text-gray-500">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ms-red">4</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ms-yellow">1</div>
                    <div className="text-sm text-gray-500">Mission</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Our Core Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse backgrounds, shared vision. Meet the people working to 
              transform student finances across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-ms-gray p-8 rounded-2xl card-hover text-center"
              >
                {/* Avatar Placeholder */}
                <div className={`w-24 h-24 bg-${member.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-ms-black mb-1">{member.name}</h3>
                <p className={`text-${member.color} font-semibold mb-4`}>{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-ms-black rounded-full flex items-center justify-center hover:bg-ms-yellow transition-colors">
                    <FaLinkedinIn className="text-ms-white" size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-ms-black rounded-full flex items-center justify-center hover:bg-ms-yellow transition-colors">
                    <FaTwitter className="text-ms-white" size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-ms-black rounded-full flex items-center justify-center hover:bg-ms-yellow transition-colors">
                    <FaGithub className="text-ms-white" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-ms-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-ms-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-ms-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              The MasterSave Timeline
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ms-yellow hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center mb-4 md:mb-0`}>
                    <div className="bg-ms-white p-6 rounded-2xl shadow-lg inline-block">
                      <span className={`text-${index % 2 === 0 ? 'ms-yellow' : 'ms-red'} font-bold text-lg`}>
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-ms-black mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className={`w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-ms-yellow' : 'bg-ms-red'} border-4 border-ms-white shadow-lg z-10 hidden md:block`}></div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-ms-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
            Want to Join the Team?
          </h2>
          <p className="text-ms-white opacity-90 text-lg mb-8">
            We're always looking for passionate individuals who share our vision 
            of financial empowerment for African students.
          </p>
          <a 
            href="mailto:silogrp1@gmail.com"
            className="inline-flex items-center bg-ms-white text-ms-red px-8 py-4 rounded-full font-semibold hover:bg-ms-black hover:text-ms-white transition-colors"
          >
            <HiMail className="mr-2" size={24} />
            silogrp1@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;