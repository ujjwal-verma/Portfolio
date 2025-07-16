import React from 'react';
import { Code, Smartphone, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "WordPress Expert",
      description: "Custom themes, plugins, and full WordPress solutions"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android Developer",
      description: "Native Android apps with Java and Kotlin"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Programming Instructor",
      description: "Teaching multiple programming languages to students"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Full Stack Developer",
      description: "End-to-end web application development"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer and programming instructor with expertise in 
            WordPress development, Android development, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise spans across multiple domains - from WordPress development and Android 
              applications to full-stack web development. I'm passionate about teaching programming 
              languages and helping students master various technologies.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it's building custom WordPress solutions, developing Android apps, or creating 
              modern web applications, I bring a comprehensive approach to every project. I also 
              enjoy sharing knowledge through teaching and mentoring aspiring developers.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <span className="px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                WordPress Development
              </span>
              <span className="px-3 sm:px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                Android Development
              </span>
              <span className="px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Full Stack Development
              </span>
              <span className="px-3 sm:px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                Programming Instructor
              </span>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;