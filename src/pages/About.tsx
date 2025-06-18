
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section id="background" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins flex items-center justify-center gap-4">
              <i className="fas fa-history"></i> Our Background
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Our History</h3>
              <p className="text-gray-600 mb-4 font-inter">
                AMYRES AgTech is a startup contract research, innovation and consultancy organization established in 2023 in response to the growing need for a dedicated research organization that could <strong>bridge the gap between scientific research and practical, field-based solutions for Kenyan farmers.</strong>
              </p>
              <p className="text-gray-600 mb-4 font-inter">
                The founders, a team of experienced professionals in agricultural science, data science and statistical programming, recognized that while Kenya had a strong base of agricultural research, much of the knowledge was not being effectively transferred to farmers or adapted to local contexts.
              </p>
              <p className="text-gray-600 font-inter">
                This created an urgent need for an organization that could work directly with farmers, and collaborate with local and international partners to <strong>translate research findings into actionable insights.</strong>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Our Location</h3>
              <p className="text-gray-600 mb-4 font-inter">
                Our office is located in Nyeri, Central region of Kenya, giving us access to the country's leading research institutions, agribusiness hubs, and governmental bodies.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.699613318311!2d36.97956397477642!3d-0.4419776995536805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182861e3fce0feb3%3A0x4c5d494ba5e19690!2sKenya%20School%20of%20Agriculture%2CNyeri-Wambugu%20Farm!5e0!3m2!1sen!2ske!4v1729251690706!5m2!1sen!2ske"
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins flex items-center justify-center gap-4">
              <i className="fas fa-cogs"></i> What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-seedling text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Agricultural Research and Technology Development</h3>
              <p className="text-gray-600 mb-4 font-inter">
                As a research-driven organization, AMYRES AgTech recognizes the critical role of research in value chain development within the agriculture sector. Research drives innovation, enhances efficiency, and creates sustainable solutions that benefit all stakeholders.
              </p>
              <p className="text-gray-600 font-inter">
                Given the challenges in agricultural data, AMYRES AgTech leverages cutting-edge technologies to deliver robust data and information management solutions. These include <strong>advanced farm management information systems (FMIS)</strong>, <strong>data analytics platforms powered by AI and machine learning</strong>, mobile farm advisory applications, <strong>blockchain-enabled market systems</strong>, and innovative Agri-finance technologies driven by <strong>fintech solutions</strong>.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7ed957] to-[#5cb85c] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-share-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Knowledge and Technology Transfer</h3>
              <p className="text-gray-600 mb-4 font-inter">
                AMYRES AgTech is dedicated to ensuring that research findings/technologies are disseminated to farmers and other stakeholders. To enhance these efforts, AMYRES AgTech integrates digital solutions to increase productive efficiency, reduce resource waste, improve market access, and support sustainability.
              </p>
              <p className="text-gray-600 font-inter">
                Therefore, AMYRES AgTech works directly with farmers and collaborates with local and international stakeholders like researchers/scientists, input providers, extension service providers by identifying and addressing challenges at every stage of the value chain.
              </p>
            </div>
          </div>
        </section>

        <section id="mission-vision" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins flex items-center justify-center gap-4">
              <i className="fas fa-bullseye"></i> Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-target text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Our Mission</h3>
              <p className="text-gray-600 font-inter">
                At AMYRES AgTech, our mission is to enhance agricultural productivity and sustainability by making research-based knowledge and technologies accessible to every farmer, agribusiness, and stakeholder in Kenya.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#7ed957] to-[#5cb85c] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">Our Vision</h3>
              <p className="text-gray-600 font-inter">
                To become the leading catalyst for sustainable agricultural innovation in Kenya, empowering farmers, agribusinesses, and communities through research-driven solutions that increase productivity, promote environmental sustainability, and enhance food security.
              </p>
            </div>
          </div>
        </section>

        <section id="team" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins flex items-center justify-center gap-4">
              <i className="fas fa-users"></i> Meet Our Team
            </h2>
            <p className="text-gray-600 font-inter">The experts driving agricultural innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-xl p-6 text-center shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-2 font-poppins">Aoko Pauline</h3>
              <div className="mb-3">
                <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-3 py-1 rounded-full text-sm mr-2">Agriculturalist</span>
                <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-3 py-1 rounded-full text-sm">UI/UX Developer</span>
              </div>
              <p className="text-gray-600 text-sm font-inter">
                Aoko collaborates with farmers to boost productivity through innovative, sustainable strategies while minimizing environmental impact. She leverages this expertise to design intuitive digital solutions.
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 text-center shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-2 font-poppins">Joseph Onyango</h3>
              <div className="mb-3">
                <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-3 py-1 rounded-full text-sm mr-2">Data Scientist</span>
                <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-3 py-1 rounded-full text-sm">GIS Specialist</span>
              </div>
              <p className="text-gray-600 text-sm font-inter">
                With a background in natural resource management, Joseph leads our research data processing, transforming complex spatial and non-spatial datasets into actionable insights.
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 text-center shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-2 font-poppins">Amisi Pascal</h3>
              <div className="mb-3">
                <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-3 py-1 rounded-full text-sm mr-2">Statistical Programmer</span>
                <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-3 py-1 rounded-full text-sm">Biostatistician</span>
              </div>
              <p className="text-gray-600 text-sm font-inter">
                Amisi oversees our research design and analysis by leveraging his experience in processing complex data, developing predictive models and identifying patterns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
