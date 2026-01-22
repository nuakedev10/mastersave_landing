import React from 'react';
import { 
  HiAcademicCap, 
  HiLocationMarker, 
  HiUserGroup,
  HiChartBar,
  HiDocumentReport,
  HiChatAlt2
} from 'react-icons/hi';
import { FaUniversity, FaQuoteLeft } from 'react-icons/fa';

const Research = () => {
  const primaryResearch = [
    {
      name: 'African Leadership University',
      location: 'Kigali, Rwanda & Mauritius',
      status: 'Primary Research Site',
      color: 'ms-yellow'
    },
    {
      name: 'African Leadership College of Higher Education',
      location: 'Mauritius',
      status: 'Primary Research Site',
      color: 'ms-red'
    }
  ];

  const expandingResearch = [
    { name: 'University of Nairobi', location: 'Nairobi, Kenya', country: 'Kenya' },
    { name: 'University of Pretoria', location: 'Pretoria, South Africa', country: 'South Africa' },
    { name: 'Kwame Nkrumah University of Science and Technology', location: 'Kumasi, Ghana', country: 'Ghana' },
    { name: 'United States International University - Africa', location: 'Nairobi, Kenya', country: 'Kenya' },
    { name: 'University of Cape Town', location: 'Cape Town, South Africa', country: 'South Africa' },
    { name: 'Ashesi University', location: 'Berekuso, Ghana', country: 'Ghana' }
  ];

  const researchFindings = [
    { stat: '58%', label: 'of students exhaust allowance before the next disbursement', icon: <HiChartBar /> },
    { stat: '72%', label: 'want better financial management tools', icon: <HiUserGroup /> },
    { stat: '85%', label: 'have never used a savings app', icon: <HiDocumentReport /> },
    { stat: '67%', label: 'would use automatic savings feature', icon: <HiAcademicCap /> }
  ];

  const testimonials = [
    {
      quote: "I always run out of money by the second week. A tool like MasterSave would be life-changing.",
      author: "Mastercard Foundation Scholar",
      university: "ALU Rwanda"
    },
    {
      quote: "We need something that forces us to save. We know we should, but we don't have the discipline.",
      author: "Survey Respondent",
      university: "ALU Mauritius"
    },
    {
      quote: "If this was the official stipend platform, it would help so many students manage better.",
      author: "Student Leader",
      university: "ALU Rwanda"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-ms-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Research
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ms-yellow mb-6">
            Research-Driven{' '}
            <span className="text-ms-black">Development</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            MasterSave is built on extensive research conducted across leading 
            African universities, ensuring our solution addresses real student needs.
          </p>
        </div>
      </section>

      {/* Primary Research Sites */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Primary Sites
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Where Our Research Began
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {primaryResearch.map((site, index) => (
              <div 
                key={index}
                className={`bg-ms-gray p-8 rounded-3xl border-l-4 border-${site.color} card-hover`}
              >
                <div className="flex items-start justify-between mb-6">
                  <FaUniversity className={`text-${site.color}`} size={48} />
                  <span className={`bg-${site.color} text-ms-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {site.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-ms-black mb-2">{site.name}</h3>
                <div className="flex items-center text-gray-600">
                  <HiLocationMarker className="mr-2" />
                  <span>{site.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Feedback Section */}
          <div className="bg-ms-black rounded-3xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <HiChatAlt2 className="text-ms-yellow mr-3" size={32} />
              <h3 className="text-2xl font-bold text-ms-white">
                Direct Feedback from ALU Mastercard Scholars
              </h3>
            </div>
            <p className="text-gray-400 mb-8">
              We've been collecting feedback directly from the official ALU Mastercard 
              Foundation WhatsApp group, gaining valuable insights from scholars about 
              their financial challenges.
            </p>
            
            {/* Single Feedback Quote */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-start mb-4">
                  <span className="inline-block bg-ms-red text-ms-white px-3 py-1 rounded-full text-xs font-semibold">
                    📊 Survey Response
                  </span>
                </div>
                <FaQuoteLeft className="text-ms-yellow opacity-30 mb-4" size={40} />
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic mb-6">
                  "My biggest challenge in managing my stipend was controlling it to end with the month but always ends somehow with God's grace 😭"
                </p>
                <div className="flex items-center pt-4 border-t border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-ms-yellow to-ms-red rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <div className="text-ms-white font-semibold">Anonymous Scholar</div>
                    <div className="text-gray-400 text-sm">ALU Mastercard Foundation Scholar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="py-20 bg-ms-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
              Key Research Findings
            </h2>
            <p className="text-ms-white opacity-90 max-w-2xl mx-auto">
              Our surveys and interviews revealed critical insights about student 
              financial behavior across African universities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchFindings.map((finding, index) => (
              <div key={index} className="bg-ms-white p-6 rounded-2xl text-center card-hover">
                <div className="text-ms-yellow text-3xl mb-4 flex justify-center">
                  {finding.icon}
                </div>
                <div className="text-4xl font-bold text-ms-black mb-2">
                  {finding.stat}
                </div>
                <p className="text-gray-600 text-sm">
                  {finding.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanding Research */}
      <section className="section-padding bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Expanding Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
              Currently Conducting Research In
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're expanding our research to understand student financial challenges 
              across different African contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expandingResearch.map((university, index) => (
              <div 
                key={index}
                className="bg-ms-white p-6 rounded-2xl shadow-lg card-hover flex items-start"
              >
                <div className="w-12 h-12 bg-ms-red rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaUniversity className="text-ms-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ms-black mb-1">{university.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <HiLocationMarker className="mr-1" size={16} />
                    <span>{university.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ms-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-ms-yellow text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Student Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ms-white mb-6">
              What Students Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl"
              >
                <FaQuoteLeft className="text-ms-yellow mb-4" size={32} />
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-ms-white">{testimonial.author}</div>
                  <div className="text-ms-yellow text-sm">{testimonial.university}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="section-padding bg-ms-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-ms-red text-ms-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ms-black mb-6">
                Our Research Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ms-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black mb-1">Surveys</h3>
                    <p className="text-gray-600">Quantitative data collection from hundreds of students</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-ms-red rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ms-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black mb-1">Interviews</h3>
                    <p className="text-gray-600">In-depth conversations with students and administrators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ms-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black mb-1">Focus Groups</h3>
                    <p className="text-gray-600">Group discussions to validate findings and test concepts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-ms-red rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ms-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ms-black mb-1">Prototype Testing</h3>
                    <p className="text-gray-600">User testing with early adopters to refine the product</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-ms-gray p-8 rounded-3xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-ms-yellow mb-2">60+</div>
                <p className="text-gray-600 mb-8">Survey Responses and interviews Collected</p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-ms-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-ms-red">15+</div>
                    <p className="text-gray-600 text-sm">In-depth Interviews</p>
                  </div>
                  <div className="bg-ms-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-ms-yellow">8</div>
                    <p className="text-gray-600 text-sm">Focus Groups</p>
                  </div>
                  <div className="bg-ms-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-ms-red">3</div>
                    <p className="text-gray-600 text-sm">Countries</p>
                  </div>
                  <div className="bg-ms-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-ms-yellow">2</div>
                    <p className="text-gray-600 text-sm">Universities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;