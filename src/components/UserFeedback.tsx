import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const UserFeedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success."
    },
    {
      name: "Michael Rodriguez",
      role: "CEO at StartupLab",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Working with Alex was a game-changer for our business. He transformed our ideas into a beautiful, functional platform that our users love."
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director at Digital Innovations",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Alex's creativity and technical skills are outstanding. He delivered a pixel-perfect design with smooth functionality that boosted our conversion rates by 40%."
    },
    {
      name: "David Kim",
      role: "CTO at InnovateTech",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Exceptional developer with great communication skills. Alex understood our complex requirements and delivered a scalable solution on time and within budget."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-blue-500/20"
                  />
                  <Quote className="absolute -top-2 -right-2 w-8 h-8 text-blue-500 bg-white dark:bg-gray-800 rounded-full p-1" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic leading-relaxed">
                  "{testimonials[currentSlide].feedback}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-blue-500 dark:text-blue-400">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:text-blue-500"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:text-blue-500"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;