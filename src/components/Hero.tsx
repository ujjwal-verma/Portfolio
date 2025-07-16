import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20 dark:border-blue-400/20 shadow-2xl relative z-10">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ujjwal Verma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse -z-10"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Ujjwal Verma
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 animate-fade-in delay-300">
            Full Stack Developer & Programming Instructor
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
            Expert in WordPress development, Android development, and full-stack technologies. 
            I teach programming languages and create innovative digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-700">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button className="border-2 border-blue-500 text-blue-500 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-1000">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ujjwal.verma@email.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;