import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UserFeedback from './components/UserFeedback';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <UserFeedback />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;