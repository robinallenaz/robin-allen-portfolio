import React, { useState } from 'react';
import AnimatedBeam from './components/AnimatedBeam';
import Skills from './components/Skills';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import { projects } from './lib/data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-github-dark">
      <AnimatedBeam>
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 bg-github-dark/80 backdrop-blur-sm border-b border-github-border">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <span className="text-xl font-bold text-github-text">Robin Allen</span>
                <div className="hidden sm:flex space-x-8">
                  <a href="#skills" className="text-github-text hover:text-github-success transition-colors">Skills</a>
                  <a href="#projects" className="text-github-text hover:text-github-success transition-colors">Projects</a>
                  <a href="#contact" className="text-github-text hover:text-github-success transition-colors">Contact</a>
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="sm:hidden text-github-text hover:text-github-success transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="sm:hidden bg-github-darker border-b border-github-border">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#skills"
                    className="block px-3 py-2 text-github-text hover:text-github-success transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="block px-3 py-2 text-github-text hover:text-github-success transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="block px-3 py-2 text-github-text hover:text-github-success transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </nav>

          {/* Main content */}
          <main className="max-w-5xl mx-auto px-4 py-4">
            {/* Hero Section */}
            <section id="home" className="min-h-[90vh] flex items-center justify-center pt-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 pride-gradient pride-glow">
                  Full Stack Developer
                </h1>
                <p className="text-lg md:text-xl text-github-secondary mb-6 max-w-2xl pride-gradient">
                  Crafting beautiful and functional web experiences with modern technologies
                </p>
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
              </div>
            </section>

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <section id="projects" className="py-20">
              <h2 className="text-3xl font-bold text-github-text mb-8">
                Featured Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <ProjectShowcase key={project.title} project={project} />
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <Contact />
          </main>
        </div>
      </AnimatedBeam>
    </div>
  );
}

export default App;
