import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Resume', href: 'resume' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/nikhillande'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nikhillande'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: 'Email',
      url: 'mailto:nikhil.lande@example.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
                NL
              </div>
              <span className="text-xl font-semibold">Nikhil Lande</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Frontend developer passionate about creating beautiful, functional, and user-friendly web experiences. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-cyan rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => smoothScrollTo(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Kharghar, Navi Mumbai, India</p>
              <p>nikhillande9@gmail.com</p>
              <p>+91 8369191257</p>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 bg-green-900/20 text-green-400 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Nikhil Lande. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of ☕</span>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-cyan rounded-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;