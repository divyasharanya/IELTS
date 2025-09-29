import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-olive text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mr-4">
                  <span className="text-olive font-bold text-xl">I</span>
                </div>
                <h3 className="text-2xl font-bold">IELTS Institute</h3>
              </div>
              <p className="text-cream text-opacity-80 leading-relaxed mb-6 max-w-lg">
                Empowering students worldwide to achieve their IELTS goals through innovative 
                technology, expert guidance, and personalized learning experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-cream text-opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-cream text-opacity-80">123 Education Street, Learning City, LC 12345</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-cream text-opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-cream text-opacity-80">+1 (555) 123-IELTS</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-cream text-opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-cream text-opacity-80">info@ieltsinstitute.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Free Practice Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Study Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Vocabulary Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Grammar Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Speaking Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream text-opacity-80 hover:text-cream transition-colors duration-300">
                    Writing Samples
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-cream border-opacity-20">
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
              <div className="lg:flex-1">
                <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
                <p className="text-cream text-opacity-80 mb-4 lg:mb-0">
                  Get the latest IELTS tips and updates delivered to your inbox.
                </p>
              </div>
              <div className="lg:ml-8 lg:flex-shrink-0">
                <div className="flex max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-full text-olive placeholder-olive placeholder-opacity-60 bg-cream focus:outline-none focus:ring-2 focus:ring-cream focus:ring-opacity-50"
                  />
                  <button className="px-6 py-3 bg-cream text-olive font-semibold rounded-r-full hover:bg-opacity-90 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-cream border-opacity-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-6 mb-4 lg:mb-0">
              <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.36-.293 1.175-.334 1.334-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-cream text-opacity-60 text-sm">
                © 2024 IELTS Institute. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-4 mt-2 text-xs">
                <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-cream text-opacity-60 hover:text-cream transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;