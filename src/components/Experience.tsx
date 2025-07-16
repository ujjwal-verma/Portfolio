import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led a team of 5 developers in building a customer portal that increased user engagement by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected scalable microservices handling 1M+ requests daily"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "New York, NY",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces. Specialized in React and modern frontend technologies.",
      achievements: [
        "Built 15+ responsive web applications with 99.9% uptime",
        "Improved page load times by 35% through code optimization",
        "Collaborated with design team to implement pixel-perfect UIs"
      ]
    },
    {
      title: "Web Developer",
      company: "StartupLab",
      location: "Austin, TX",
      duration: "2019 - 2020",
      description: "Worked on various client projects ranging from small business websites to complex web applications. Gained experience in full-stack development.",
      achievements: [
        "Delivered 25+ client projects on time and within budget",
        "Increased client satisfaction scores by 30%",
        "Learned and implemented 5+ new technologies"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made at each organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 dark:border-gray-800 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-800 dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-0">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-400 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm sm:text-base">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-300 text-xs sm:text-sm flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;