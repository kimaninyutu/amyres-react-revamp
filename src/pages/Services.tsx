
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Our Services</h2>
            <p className="text-xl text-gray-600 font-inter">Comprehensive solutions for agricultural innovation and development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="field-trials" className="bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-seedling text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Field Trials</h3>
              <p className="text-gray-600 mb-4 font-inter">
                Our team identifies optimal experimental sites and manages them based on client requirements. From layout design to data collection, AMYRES AgTech handles all aspects to ensure precision and valuable insights.
              </p>
              <p className="text-gray-600 mb-3 font-inter"><strong>Coverage:</strong> Countrywide, Across all agroecological zones of Kenya.</p>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-inter"><strong>Value:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 font-inter">
                  <li>Seamless research implementation as per regulatory standards</li>
                  <li>Remarkable trial completion rates</li>
                  <li>Contextualized experimental sites</li>
                  <li>Participatory research</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
                Request Service
              </button>
            </div>

            <div id="Market-research" className="bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7ed957] to-[#5cb85c] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Market Research</h3>
              <p className="text-gray-600 mb-4 font-inter">
                Gain a deep understanding of market demands and trends with our tailored market research services. From customer insights to competitive analysis, we equip you with essential knowledge.
              </p>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-inter"><strong>Value:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 font-inter">
                  <li>Informed business strategy</li>
                  <li>Risk mitigation</li>
                  <li>Business growth</li>
                  <li>Enhanced customer profiles</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
                Request Service
              </button>
            </div>

            <div id="Agri-Data-Management" className="bg-gradient-to-br from-[#0097b2]/10 to-[#004aad]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0097b2] to-[#004aad] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-database text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Agri-Data Management</h3>
              <p className="text-gray-600 mb-2 font-inter"><em>"Transform agricultural data into insights."</em></p>
              <p className="text-gray-600 mb-4 font-inter">
                With a specialized approach in agricultural data, AMYRES AgTech provides robust data analysis to guide informed decisions. Our team leverages advanced tools to transform raw data into actionable insights.
              </p>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-inter"><strong>Value:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 font-inter">
                  <li>Data driven decision making</li>
                  <li>Improved Efficiency</li>
                  <li>Predictive insights</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[#0097b2] to-[#004aad] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
                Request Service
              </button>
            </div>

            <div id="app-development" className="bg-gradient-to-br from-[#004aad]/10 to-[#7ed957]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#7ed957] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">App Development and Testing</h3>
              <p className="text-gray-600 mb-2 font-inter"><em>"Bring your app to life with expert development and testing services."</em></p>
              <p className="text-gray-600 mb-4 font-inter">
                From idea to reality, we help you create reliable and effective agricultural apps. Our services include both app testing and development, ensuring high-quality solutions that meet user needs.
              </p>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-inter"><strong>Value:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 font-inter">
                  <li>User centric solutions</li>
                  <li>Reduced app-development time</li>
                  <li>Innovative features</li>
                  <li>Quality assurance</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[#004aad] to-[#7ed957] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
                Request Service
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#0097b2]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7ed957] to-[#0097b2] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-book text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Training Needs Assessment</h3>
              <p className="text-gray-600 mb-2 font-inter"><em>"A systematic evaluation of competencies, performance gaps, and training requirements to ensure alignment with business goals."</em></p>
              <p className="text-gray-600 mb-4 font-inter">
                AMYRES AgTech offers comprehensive training needs assessment to identify skill gaps and training needs to develop effective training programs that enhance performance and organizational productivity.
              </p>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-inter"><strong>Value:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 font-inter">
                  <li>Credible knowledge foundation for strategic decision making</li>
                  <li>Identification of training/competency gaps</li>
                  <li>Comprehensive training reports</li>
                  <li>Market led training programs</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[#7ed957] to-[#0097b2] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
                Request Service
              </button>
            </div>

            <div id="Feed-efficiency" className="bg-gradient-to-br from-[#0097b2]/10 to-[#7ed957]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0097b2] to-[#7ed957] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Consultancy</h3>
              <p className="text-gray-600 mb-2 font-inter"><em>"Your Research, Innovation and Development partner."</em></p>
              <p className="text-gray-600 mb-4 font-inter">
                Enhancing agricultural productivity, sustainability, and innovation by providing research-driven solutions, technology adoption strategies, and policy recommendations that support agribusiness growth and food security.
              </p>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-inter"><strong>Value:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 font-inter">
                  <li>Strengthened capacities/competencies</li>
                  <li>Innovative tech solutions</li>
                  <li>Policy and strategy development</li>
                  <li>Analysis reports</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
                Request Service
              </button>
            </div>
          </div>
        </section>

        <section id="FAQ" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#004aad] text-center mb-8 font-poppins">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#004aad]/5 to-[#0097b2]/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">What types of field trials do you offer?</h3>
              <p className="text-gray-600 font-inter">We offer various field trials tailored to client needs, including cultivar trials, efficacy trials, technology adoption trials, and pest management studies.</p>
            </div>
            <div className="bg-gradient-to-br from-[#7ed957]/5 to-[#5cb85c]/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">How does AMYRES AgTech handle data confidentiality in Agri-Data Analysis?</h3>
              <p className="text-gray-600 font-inter">We follow strict data security protocols and ensure that client data remains confidential throughout our analysis process.</p>
            </div>
            <div className="bg-gradient-to-br from-[#0097b2]/5 to-[#004aad]/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">Can AMYRES AgTech provide customized market research?</h3>
              <p className="text-gray-600 font-inter">Yes, we offer tailored market research services to meet the specific needs of our clients, including competitor analysis, consumer insights, and market trend forecasting.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
