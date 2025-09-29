import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI-powered feedback and real-time pronunciation analysis.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
        </svg>
      ),
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Mock Tests",
      description: "Full-length practice tests that simulate real IELTS exam conditions with detailed performance analytics.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      badge: null
    },
    {
      id: 3,
      title: "AI Band Score",
      description: "Get instant band score predictions with detailed feedback on areas for improvement using AI technology.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      badge: "AI-Powered"
    },
    {
      id: 4,
      title: "Study Resources",
      description: "Comprehensive library of study materials, vocabulary builders, and grammar exercises tailored to your needs.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: null
    }
  ];

  return (
    <section id="features" className="py-20 bg-olive bg-opacity-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-olive mb-6">
            Everything You Need to
            <span className="block text-olive-dark">Ace IELTS</span>
          </h2>
          <p className="text-lg lg:text-xl text-olive-light max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need 
            to achieve your target IELTS score with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="relative group">
              <div className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-olive border-opacity-10">
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-olive text-cream px-3 py-1 rounded-full text-xs font-semibold">
                      {feature.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 bg-olive bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-olive group-hover:text-cream transition-all duration-300">
                  <div className="text-olive group-hover:text-cream transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-olive mb-4">
                  {feature.title}
                </h3>
                <p className="text-olive-light leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-olive font-semibold hover:text-olive-dark transition-colors duration-300 group/link"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-cream rounded-2xl p-8 lg:p-12 shadow-lg border border-olive border-opacity-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-olive mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-olive-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dream scores with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-olive text-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-olive-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start 7-Day Free Trial
              </button>
              <button className="border-2 border-olive text-olive px-8 py-4 rounded-full font-semibold text-lg hover:bg-olive hover:text-cream transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;