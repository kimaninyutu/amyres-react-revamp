
import React from 'react';
import { MapPin, Target, Eye, Users, History, Settings } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Aoko Pauline",
      roles: ["Agriculturalist", "UI/UX Developer"],
      image: "/images/Aoko.jpg",
      description: "Aoko collaborates with farmers to boost productivity through innovative, sustainable strategies while minimizing environmental impact. She leverages this expertise to design intuitive digital solutions that address the unique challenges of targeted audiences, enhancing user engagement."
    },
    {
      name: "Joseph Onyango",
      roles: ["Data Scientist", "GIS Specialist"],
      image: "/images/Joseph.png",
      description: "With a background in natural resource management, Joseph leads our research data processing, transforming complex spatial and non-spatial datasets into actionable insights that guide field applications and resource management decisions."
    },
    {
      name: "Amisi Pascal",
      roles: ["Statistical Programmer", "Biostatistician"],
      image: "/images/Amisi.jpg",
      description: "Amisi oversees our research design and analysis by leveraging his experience in processing complex data, developing predictive models and identifying patterns to generate actionable industry-insights through summary statistics, visualizations and comprehensive reports."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              About AMYRES AGTECH
            </h1>
            <p className="text-xl md:text-2xl font-inter">
              Your Research, Innovation and Development Partner
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-8">
                <History className="text-blue-600 mr-4" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
                  Our Background
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4 font-poppins">Our History</h3>
                  <div className="space-y-4 text-gray-700 font-inter">
                    <p>
                      AMYRES AgTech is a startup contract research, innovation and consultancy organization 
                      established in 2023 in response to the growing need for a dedicated research organization 
                      that could <strong>bridge the gap between scientific research and practical, field-based 
                      solutions for Kenyan farmers.</strong>
                    </p>
                    <p>
                      The founders, a team of experienced professionals in agricultural science, data science 
                      and statistical programming, recognized that while Kenya had a strong base of agricultural 
                      research, much of the knowledge was not being effectively transferred to farmers or adapted 
                      to local contexts.
                    </p>
                    <p>
                      This created an urgent need for an organization that could work directly with farmers, 
                      and collaborate with local and international partners to <strong>translate research 
                      findings into actionable insights.</strong>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4 font-poppins">Our Location</h3>
                  <p className="text-gray-700 mb-4 font-inter">
                    Our office is located in Nyeri, Central region of Kenya, giving us access to the country's 
                    leading research institutions, agribusiness hubs, and governmental bodies.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.699613318311!2d36.97956397477642!3d-0.4419776995536805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182861e3fce0feb3%3A0x4c5d494ba5e19690!2sKenya%20School%20of%20Agriculture%2CNyeri-Wambugu%20Farm!5e0!3m2!1sen!2ske!4v1729251690706!5m2!1sen!2ske" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-16 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Settings className="text-blue-600 mr-4" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
                  What We Do
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-seedling text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 font-poppins">
                    Agricultural Research and Technology Development
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 font-inter">
                  <p>
                    As a research-driven organization, AMYRES AgTech recognizes the critical role of 
                    research in value chain development within the agriculture sector. Research drives 
                    innovation, enhances efficiency, and creates sustainable solutions that benefit all stakeholders.
                  </p>
                  <p>
                    Given the challenges in agricultural data, AMYRES AgTech leverages cutting-edge technologies 
                    to deliver robust data and information management solutions. These include <strong>advanced 
                    farm management information systems (FMIS)</strong>, <strong>data analytics platforms powered 
                    by AI and machine learning</strong>, mobile farm advisory applications, <strong>blockchain-enabled 
                    market systems</strong>, and innovative Agri-finance technologies driven by <strong>fintech solutions</strong>.
                  </p>
                  <p>
                    In precision agriculture, the organization leverages technologies such as <strong>remote sensing, 
                    drone and satellite imagery</strong>, <strong>GPS/auto-guided equipment</strong>, <strong>variable 
                    rate technology</strong> to optimize productivity through data driven decision making at the farm.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-share-alt text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 font-poppins">
                    Knowledge and Technology Transfer
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 font-inter">
                  <p>
                    AMYRES AgTech is dedicated to ensuring that research findings/technologies are disseminated 
                    to farmers and other stakeholders. To enhance these efforts, AMYRES AgTech integrates digital 
                    solutions to increase productive efficiency, reduce resource waste, improve market access, 
                    and support sustainability.
                  </p>
                  <p>
                    Our solutions empower farmers with real-time data and actionable insights, leading to better 
                    decision-making and improved profitability across the agricultural sector.
                  </p>
                  <p>
                    Therefore, AMYRES AgTech works directly with farmers and collaborates with local and international 
                    stakeholders like researchers/scientists, input providers, extension service providers by identifying 
                    and addressing challenges at every stage of the value chain—from production to market by fostering 
                    collaborative and participatory research initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
                Mission & Vision
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4 font-poppins">
                  Our Mission
                </h3>
                <div className="space-y-4 text-gray-700 font-inter">
                  <p>
                    At AMYRES AgTech, our mission is to enhance agricultural productivity and sustainability 
                    by making research-based knowledge and technologies accessible to every farmer, agribusiness, 
                    and stakeholder in Kenya.
                  </p>
                  <p>
                    We aim to drive positive transformation in farming practices, help businesses maximize yields, 
                    and support the development of climate-smart, resilient food systems.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4 font-poppins">
                  Our Vision
                </h3>
                <p className="text-gray-700 font-inter">
                  To become the leading catalyst for sustainable agricultural innovation in Kenya, empowering 
                  farmers, agribusinesses, and communities through research-driven solutions that increase 
                  productivity, promote environmental sustainability, and enhance food security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-blue-600 mr-4" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
                  Meet Our Team
                </h2>
              </div>
              <p className="text-xl text-gray-600 font-inter">
                The experts driving agricultural innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg relative group">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <a href="#" className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                            <i className="fab fa-linkedin-in text-blue-600 text-sm"></i>
                          </a>
                          <a href="#" className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                            <i className="fas fa-envelope text-blue-600 text-sm"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                      {member.name}
                    </h3>
                    <div className="mb-4">
                      {member.roles.map((role, roleIndex) => (
                        <span 
                          key={roleIndex}
                          className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-xs px-3 py-1 rounded-full mr-2 mb-1 font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
