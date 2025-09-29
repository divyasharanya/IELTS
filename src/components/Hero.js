import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-olive leading-tight mb-6">
              Master IELTS with 
              <span className="block text-olive-dark">Confidence</span>
            </h1>
            <p className="text-lg lg:text-xl text-olive-light mb-8 leading-relaxed">
              Achieve your dream IELTS score with our comprehensive preparation program. 
              Expert guidance, personalized learning, and proven strategies to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-olive text-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-olive-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-olive text-olive px-8 py-4 rounded-full font-semibold text-lg hover:bg-olive hover:text-cream transition-all duration-300">
                View Courses
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-olive border-opacity-20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-olive">10k+</div>
                <div className="text-olive-light text-sm lg:text-base">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-olive">8.5</div>
                <div className="text-olive-light text-sm lg:text-base">Avg Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-olive">95%</div>
                <div className="text-olive-light text-sm lg:text-base">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-olive bg-opacity-10 rounded-2xl p-8 lg:p-12">
              {/* Placeholder for hero image */}
              <div className="aspect-w-4 aspect-h-3 bg-olive bg-opacity-20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-olive rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-cream" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-olive font-medium">Interactive Learning Platform</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-olive text-cream px-4 py-2 rounded-full font-semibold shadow-lg">
              🏆 #1 Rated
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cream border-2 border-olive text-olive px-4 py-2 rounded-full font-semibold shadow-lg">
              ⭐ 4.9/5 Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;