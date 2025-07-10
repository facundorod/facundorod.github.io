
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to collaborate on innovative solutions and challenging problems.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/facundorod" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Github className="text-white" size={20} />
              </div>
              <span className="font-semibold text-gray-900 text-lg">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/facundo-hernan-rodriguez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <Linkedin className="text-white" size={20} />
              </div>
              <span className="font-semibold text-gray-900 text-lg">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
