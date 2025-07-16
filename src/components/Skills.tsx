import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  const skillCategories = [
    {
      title: "WordPress & CMS",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "PHP", level: 90 },
        { name: "Custom Themes", level: 88 },
        { name: "Plugin Development", level: 85 },
        { name: "WooCommerce", level: 90 },
        { name: "Elementor", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Android Studio", level: 88 },
        { name: "Java", level: 85 },
        { name: "Kotlin", level: 80 },
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Full Stack & Teaching",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Teaching", level: 95 },
        { name: "Mentoring", level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level
                }));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and skills I've mastered throughout my journey as a developer and instructor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const animatedLevel = animatedSkills[skillKey] || 0;
                  
                  return (
                    <div key={skillIndex} className="space-y-2 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 text-sm font-semibold">
                            {Math.round(animatedLevel)}%
                          </span>
                          {animatedLevel > 0 && (
                            <div className="flex">
                              {[...Array(Math.floor(animatedLevel / 20))].map((_, starIndex) => (
                                <span 
                                  key={starIndex} 
                                  className="text-yellow-400 text-xs animate-bounce"
                                  style={{ animationDelay: `${starIndex * 100}ms` }}
                                >
                                  ⭐
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 dark:bg-gray-600 rounded-full h-2 relative overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ width: `${animatedLevel}%` }}
                        >
                          {animatedLevel > 0 && (
                            <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;