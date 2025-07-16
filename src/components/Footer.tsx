import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:ujjwal.verma@email.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">Dev</span>Portfolio
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              WordPress Expert, Android Developer, and Programming Instructor passionate about 
              creating innovative solutions and teaching the next generation of developers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>ujjwal.verma@email.com</li>
              <li>+91 (555) 123-4567</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
            Made with <Heart size={16} className="text-red-500" /> by Ujjwal Verma 
            © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;