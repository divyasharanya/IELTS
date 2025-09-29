import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "University Student",
      country: "Singapore",
      score: "8.5",
      image: "SC",
      review: "The AI-powered feedback was incredible! I improved my speaking score from 6.5 to 8.5 in just 3 months. The personalized study plan made all the difference.",
      rating: 5
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Software Engineer",
      country: "Egypt",
      score: "8.0",
      image: "AH",
      review: "Mock tests were exactly like the real exam. The detailed analytics helped me identify weak areas and focus my preparation effectively.",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Healthcare Professional",
      country: "Spain",
      score: "7.5",
      image: "MR",
      review: "Excellent platform with comprehensive resources. The study materials are well-structured and the progress tracking kept me motivated throughout.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-olive' : 'text-olive text-opacity-20'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-olive mb-6">
            Success Stories from
            <span className="block text-olive-dark">Our Students</span>
          </h2>
          <p className="text-lg lg:text-xl text-olive-light max-w-3xl mx-auto">
            Join thousands of students who have achieved their dream IELTS scores 
            and transformed their futures with our proven methods.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-olive border-opacity-10 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-olive bg-opacity-5 rounded-bl-full"></div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-olive font-semibold text-sm">({testimonial.rating}.0)</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-olive-light leading-relaxed mb-6 relative">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-olive text-opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative z-10 italic">"{testimonial.review}"</p>
                </blockquote>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center text-cream font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-olive">{testimonial.name}</h4>
                    <p className="text-olive-light text-sm">{testimonial.role}</p>
                    <p className="text-olive-light text-sm">{testimonial.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-olive bg-opacity-10 px-3 py-1 rounded-full">
                      <span className="text-olive font-bold text-lg">{testimonial.score}</span>
                    </div>
                    <p className="text-olive-light text-xs mt-1">IELTS Score</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-olive bg-opacity-5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-olive mb-2">10,000+</div>
              <div className="text-olive-light">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-olive mb-2">8.2</div>
              <div className="text-olive-light">Average Score</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-olive mb-2">95%</div>
              <div className="text-olive-light">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-olive mb-2">4.9★</div>
              <div className="text-olive-light">Student Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-olive mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-olive-light text-lg mb-8 max-w-2xl mx-auto">
            Start your IELTS preparation journey today and become our next success story.
          </p>
          <button className="bg-olive text-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-olive-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;