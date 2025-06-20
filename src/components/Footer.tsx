
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Facundo Rodriguez</h3>
            <p className="text-gray-400 mb-4">
              Senior Software Backend Engineer passionate about healthcare technology 
              and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/facundorod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/facundo-hernan-rodriguez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Current Roles</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Senior Backend Engineer at WhitePrompt</li>
              <li>Co-founder of SIMVet Monitor</li>
              <li>PhD Candidate in Computational Mathematics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Backend Development</li>
              <li>Healthcare Technology</li>
              <li>Cloud Architecture</li>
              <li>API Design</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
