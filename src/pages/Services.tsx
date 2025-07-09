import type React from "react"

const Services: React.FC = () => {
  const services = [
    {
      id: "agri-data-management",
      icon: "fas fa-database",
      title: "Agri-Data Management",
      quote: "Transform agricultural data into insights.",
      description:
          "With a specialized approach in agricultural data, AMYRES AgTech provides robust data analysis to guide informed decisions. Our team leverages advanced tools to transform raw data into actionable insights.",
      values: ["Data driven decision making", "Improved Efficiency", "Predictive insights"],
      gradient: "from-blue-500 to-emerald-600",
      bgGradient: "from-blue-500/10 to-emerald-500/10",
    },
    {
      id: "software-development",
      icon: "fas fa-mobile-alt",
      title: "Software Development and Testing",
      quote: "Bring your software to life with expert development and testing services.",
      description:
          "From idea to reality, we help you create reliable and effective agricultural software's. Our services include both software testing and development, ensuring high-quality solutions that meet user needs.",
      values: [
        "User centric solutions",
        "Reduced software-development time",
        "Innovative features",
        "Quality assurance",
      ],
      gradient: "from-emerald-500 to-blue-600",
      bgGradient: "from-emerald-500/10 to-blue-500/10",
    },
    {
      id: "field-trials",
      icon: "fas fa-seedling",
      title: "Field Trials",
      description:
          "Our team identifies optimal experimental sites and manages them based on client requirements. From layout design to data collection, AMYRES AgTech handles all aspects to ensure precision and valuable insights.",
      coverage: "Countrywide, Across all agroecological zones of Kenya.",
      values: [
        "Seamless research implementation as per regulatory standards",
        "Remarkable trial completion rates",
        "Contextualized experimental sites",
        "Participatory research",
      ],
      gradient: "from-blue-500 to-emerald-600",
      bgGradient: "from-blue-500/10 to-emerald-500/10",
    },
    {
      id: "market-research",
      icon: "fas fa-chart-line",
      title: "Market Research",
      description:
          "Gain a deep understanding of market demands and trends with our tailored market research services. From customer insights to competitive analysis, we equip you with essential knowledge.",
      values: ["Informed business strategy", "Risk mitigation", "Business growth", "Enhanced customer profiles"],
      gradient: "from-emerald-500 to-blue-600",
      bgGradient: "from-emerald-500/10 to-blue-500/10",
    },
    {
      id: "training-assessment",
      icon: "fas fa-book",
      title: "Training Needs Assessment",
      quote:
          "A systematic evaluation of competencies, performance gaps, and training requirements to ensure alignment with business goals.",
      description:
          "AMYRES AgTech offers comprehensive training needs assessment to identify skill gaps and training needs to develop effective training programs that enhance performance and organizational productivity.",
      values: [
        "Credible knowledge foundation for strategic decision making",
        "Identification of training/competency gaps",
        "Comprehensive training reports",
        "Market led training programs",
      ],
      gradient: "from-blue-500 to-emerald-600",
      bgGradient: "from-blue-500/10 to-emerald-500/10",
    },
    {
      id: "consultancy",
      icon: "fas fa-handshake",
      title: "Consultancy",
      quote: "Your Research, Innovation and Development partner.",
      description:
          "Enhancing agricultural productivity, sustainability, and innovation by providing research-driven solutions, technology adoption strategies, and policy recommendations that support agribusiness growth and food security.",
      values: [
        "Strengthened capacities/competencies",
        "Innovative tech solutions",
        "Policy and strategy development",
        "Analysis reports",
      ],
      gradient: "from-emerald-500 to-blue-600",
      bgGradient: "from-emerald-500/10 to-blue-500/10",
    },
  ]

  const faqs = [
    {
      question: "What types of field trials do you offer?",
      answer:
          "We offer various field trials tailored to client needs, including cultivar trials, efficacy trials, technology adoption trials, and pest management studies.",
      bgGradient: "from-blue-500/5 to-emerald-500/5",
    },
    {
      question: "How does AMYRES AgTech handle data confidentiality in Agri-Data Analysis?",
      answer:
          "We follow strict data security protocols and ensure that client data remains confidential throughout our analysis process.",
      bgGradient: "from-emerald-500/5 to-blue-500/5",
    },
    {
      question: "Can AMYRES AgTech provide customized market research?",
      answer:
          "Yes, we offer tailored market research services to meet the specific needs of our clients, including competitor analysis, consumer insights, and market trend forecasting.",
      bgGradient: "from-blue-500/5 to-emerald-500/5",
    },
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section - Wave Pattern Background */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-emerald-600 to-blue-600 overflow-hidden">
          {/* Wave Pattern Background */}
          <div className="absolute inset-0">
            {/* Animated wave shapes */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="absolute top-4 left-8 w-16 h-16 text-white/10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
              <svg className="absolute top-12 right-12 w-24 h-24 text-emerald-300/20" viewBox="0 0 100 100">
                <polygon points="50,10 90,90 10,90" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-8 left-16 w-20 h-20 text-blue-300/15" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" rx="10" fill="currentColor" transform="rotate(45 50 50)" />
              </svg>
              <svg className="absolute bottom-16 right-20 w-18 h-18 text-white/20" viewBox="0 0 100 100">
                <ellipse cx="50" cy="50" rx="40" ry="25" fill="currentColor" />
              </svg>
            </div>

            {/* Floating dots */}
            <div className="absolute top-20 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full"></div>
            <div className="absolute bottom-12 left-1/2 w-4 h-4 bg-blue-300/25 rounded-full animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Our Services</h1>
              <p className="text-lg text-white/90">"We don't just deliver AgTech, we build it with you, for you"</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Comprehensive Solutions for Agricultural Innovation
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
                From field trials to data analytics, we provide end-to-end agricultural technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
              {services.map((service) => (
                  <div
                      key={service.id}
                      className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${service.bgGradient}`}
                  >
                    <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}
                    >
                      <i className={`${service.icon} text-white text-lg md:text-2xl`}></i>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-3 md:mb-4">{service.title}</h3>
                    {service.quote && (
                        <p className="text-slate-600 mb-3 md:mb-4 italic text-sm md:text-base">"{service.quote}"</p>
                    )}
                    <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    {service.coverage && (
                        <p className="text-slate-600 mb-3 text-sm md:text-base">
                          <strong>Coverage:</strong> {service.coverage}
                        </p>
                    )}
                    <div className="mb-4 md:mb-6">
                      <p className="text-slate-700 mb-2 font-semibold text-sm md:text-base">Value:</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1 text-xs md:text-sm">
                        {service.values.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                        className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base`}
                    >
                      Request Service
                    </button>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 md:space-y-8">
                {faqs.map((faq, index) => (
                    <div key={index} className={`bg-gradient-to-br ${faq.bgGradient} rounded-xl md:rounded-2xl p-4 md:p-6`}>
                      <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2 md:mb-3">{faq.question}</h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Services
