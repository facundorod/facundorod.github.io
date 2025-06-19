
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Facundo Rodriguez
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/facundorod" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/facundo-hernan-rodriguez/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('education')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/facundorod" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/facundo-hernan-rodriguez/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
