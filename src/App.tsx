import React, { useState } from 'react';
import AnimatedBeam from './components/AnimatedBeam';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <AnimatedBeam>
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="fixed w-full z-50 glass-panel px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Robin Allen
              </h1>
              
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 hover:bg-white/10 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 glass-panel mt-2 py-4">
                <div className="flex flex-col space-y-4 px-6">
                  <a href="#home" className="nav-link">Home</a>
                  <a href="#projects" className="nav-link">Projects</a>
                  <a href="#about" className="nav-link">About</a>
                  <a href="#contact" className="nav-link">Contact</a>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Full Stack Developer
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                Crafting beautiful and functional web experiences with modern technologies
              </p>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
            </div>
          </section>
        </div>
      </AnimatedBeam>
    </div>
  );
}

export default App;
