import React, { useState } from 'react';
import { ExternalLink, Github, Zap, ShoppingCart, MessageCircle, Play, Eye, Code2 } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, real-time inventory management, and advanced analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Socket.io"],
      github: "#",
      demo: "#",
      icon: <ShoppingCart className="w-6 h-6" />,
      stats: { users: "10K+", revenue: "$2M+", rating: "4.9/5" },
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, time tracking, and advanced project analytics.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma", "Framer Motion"],
      github: "#",
      demo: "#",
      icon: <Zap className="w-6 h-6" />,
      stats: { teams: "500+", tasks: "50K+", uptime: "99.9%" },
      category: "SaaS"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization, scheduling tools, performance tracking, AI-powered insights, and multi-platform integration.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Express", "MySQL", "Chart.js", "Redis"],
      github: "#",
      demo: "#",
      icon: <MessageCircle className="w-6 h-6" />,
      stats: { accounts: "1K+", posts: "100K+", engagement: "+45%" },
      category: "Analytics"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors group/btn"
                        >
                          <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                        </a>
                        <a
                          href={project.demo}
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors group/btn"
                        >
                          <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play Button for Demo */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-200">
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-500 dark:text-blue-400">{project.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-blue-500 dark:text-blue-400">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm"
                  >
                    <Eye size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 text-sm"
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;