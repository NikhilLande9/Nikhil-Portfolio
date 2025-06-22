import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-purple/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-cyan/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-pink/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink bg-clip-text text-transparent animate-pulse">
              Nikhil Lande
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Software Developer
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Crafting beautiful, responsive, and user-friendly cross-platform application experiences with modern technologies and creative design solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/nikhillande"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-accent-purple"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nikhillande"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-accent-cyan"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nikhil.lande@example.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-accent-pink"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => smoothScrollTo('projects')}
              className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
            </button>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="px-8 py-4 border-2 border-accent-purple dark:border-accent-cyan text-accent-purple dark:text-accent-cyan font-semibold rounded-full hover:bg-accent-purple hover:text-white dark:hover:bg-accent-cyan dark:hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => smoothScrollTo('about')}
            className="text-gray-400 hover:text-accent-purple dark:hover:text-accent-cyan transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;