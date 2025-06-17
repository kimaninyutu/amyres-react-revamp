
import React, { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      id: 'field-trials',
      title: 'Field Trials',
      image: '/images/field-trials.jpg',
      description: 'Our team identifies optimal experimental sites and manages them based on client requirements. From layout design to data collection, AMYRES AgTech handles all aspects to ensure precision and valuable insights.',
      coverage: 'Countrywide, Across all agroecological zones of Kenya.',
      values: [
        'Seamless research implementation as per regulatory standards and practices.',
        'Remarkable trial completion rates.',
        'Contextualized experimental sites.',
        'Participatory research.'
      ]
    },
    {
      id: 'market-research',
      title: 'Market Research',
      image: '/images/market-research.jpg',
      description: 'Gain a deep understanding of market demands and trends with our tailored market research services. From customer insights to competitive analysis, we equip you with essential knowledge.',
      values: [
        'Informed business strategy',
        'Risk mitigation',
        'Business growth',
        'Enhanced customer profiles'
      ]
    },
    {
      id: 'training-assessment',
      title: 'Training Needs Assessment',
      image: '/images/literature-review.png',
      quote: 'A systematic evaluation of competencies, performance gaps, and training requirements to ensure alignment with business goals.',
      description: 'AMYRES AgTech offers comprehensive training needs assessment to identify skill gaps and training needs to develop effective training programs that enhance performance and organizational productivity.',
      values: [
        'Credible knowledge foundation for strategic decision making.',
        'Identification of training/competency gaps',
        'Comprehensive training reports',
        'Market led training programs'
      ]
    },
    {
      id: 'agri-data-management',
      title: 'Agri-Data Management',
      image: '/images/data-analysis.jpg',
      quote: 'Transform agricultural data into insights.',
      description: 'With a specialized approach in agricultural data, AMYRES AgTech provides robust data analysis to guide informed decisions. Our team leverages advanced tools to transform raw data into actionable insights.',
      values: [
        'Data driven decision making',
        'Improved Efficiency',
        'Predictive insights'
      ]
    },
    {
      id: 'app-development',
      title: 'App Development and Testing',
      image: '/images/app-development.jpg',
      quote: 'Bring your app to life with expert development and testing services.',
      description: 'From idea to reality, we help you create reliable and effective agricultural apps. Our services include both app testing and development, ensuring high-quality solutions that meet user needs.',
      values: [
        'User centric solutions',
        'Reduced app-development time',
        'Innovative features',
        'Quality assurance'
      ]
    },
    {
      id: 'consultancy',
      title: 'Consultancy',
      image: '/images/consultancy.jpg',
      quote: 'Your Research, Innovation and Development partner.',
      description: 'Enhancing agricultural productivity, sustainability, and innovation by providing research-driven solutions, technology adoption strategies, and policy recommendations that support agribusiness growth and food security.',
      values: [
        'Strengthened capacities/competencies',
        'Innovative tech solutions',
        'Policy and strategy development',
        'Analysis reports'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What types of field trials do you offer?',
      answer: 'We offer various field trials tailored to client needs, including cultivar trials, efficacy trials, technology adoption trials, and pest management studies.'
    },
    {
      question: 'How does AMYRES AgTech handle data confidentiality in Agri-Data Analysis?',
      answer: 'We follow strict data security protocols and ensure that client data remains confidential throughout our analysis process.'
    },
    {
      question: 'Can AMYRES AgTech provide customized market research?',
      answer: 'Yes, we offer tailored market research services to meet the specific needs of our clients, including competitor analysis, consumer insights, and market trend forecasting.'
    }
  ];

  const handleServiceRequest = (serviceName) => {
    console.log(`Requesting service: ${serviceName}`);
    // Placeholder for service request functionality
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-page bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Services Introduction */}
        <section className="services-intro mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4 font-poppins">
              Your Partner in Innovative Agricultural Research and Technology
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Comprehensive solutions for agricultural innovation and development
            </p>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="detailed-services space-y-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-detail bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-[#004aad] font-poppins">{service.title}</h3>
                
                {service.quote && (
                  <blockquote className="text-gray-600 italic border-l-4 border-[#7ed957] pl-4 font-inter">
                    "{service.quote}"
                  </blockquote>
                )}
                
                <p className="text-gray-700 leading-relaxed font-inter">{service.description}</p>
                
                {service.coverage && (
                  <div className="coverage-info">
                    <strong className="text-[#004aad] font-poppins">Coverage:</strong>
                    <span className="text-gray-700 ml-2 font-inter">{service.coverage}</span>
                  </div>
                )}
                
                <div className="values-section">
                  <strong className="text-[#004aad] block mb-2 font-poppins">Value:</strong>
                  <ul className="space-y-2">
                    {service.values.map((value, valueIndex) => (
                      <li key={valueIndex} className="text-gray-700 flex items-start gap-2 font-inter">
                        <span className="text-[#7ed957] font-bold mt-1">✓</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => handleServiceRequest(service.title)}
                  className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="faq-section bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#004aad] mb-8 text-center font-poppins">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-[#004aad] font-poppins">{faq.question}</h3>
                  <i className={`fas fa-chevron-${openFaq === index ? 'up' : 'down'} text-[#004aad]`}></i>
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-white border-t">
                    <p className="text-gray-700 leading-relaxed font-inter">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
