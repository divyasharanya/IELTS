import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cream shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-olive rounded-full flex items-center justify-center mr-3">
                <span className="text-cream font-bold text-lg">I</span>
              </div>
              <h1 className="text-xl font-bold text-olive">IELTS Institute</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-olive hover:text-olive-dark transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-olive hover:bg-opacity-10">
                Features
              </a>
              <a href="#testimonials" className="text-olive hover:text-olive-dark transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-olive hover:bg-opacity-10">
                Testimonials
              </a>
              <a href="#contact" className="text-olive hover:text-olive-dark transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-olive hover:bg-opacity-10">
                Contact
              </a>
              <button className="bg-olive text-cream px-6 py-2 rounded-full hover:bg-olive-dark transition-colors duration-300 font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-olive text-cream p-2 rounded-md hover:bg-olive-dark transition-colors duration-300"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cream border-t border-olive border-opacity-20">
              <a href="#features" className="text-olive block px-3 py-2 rounded-md text-base font-medium hover:bg-olive hover:bg-opacity-10 transition-colors duration-300">
                Features
              </a>
              <a href="#testimonials" className="text-olive block px-3 py-2 rounded-md text-base font-medium hover:bg-olive hover:bg-opacity-10 transition-colors duration-300">
                Testimonials
              </a>
              <a href="#contact" className="text-olive block px-3 py-2 rounded-md text-base font-medium hover:bg-olive hover:bg-opacity-10 transition-colors duration-300">
                Contact
              </a>
              <button className="w-full mt-3 bg-olive text-cream px-6 py-2 rounded-full hover:bg-olive-dark transition-colors duration-300 font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;