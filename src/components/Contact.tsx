
import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in working together or have a question? I'd love to hear from you. 
            Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Let's Connect</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                Whether you're looking for a backend engineer, want to discuss a healthcare technology project, 
                or are interested in SIMVet Monitor, I'm always open to new opportunities and conversations.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Tandil, Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <a 
                href="https://github.com/facundorod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GitHub</h4>
                  <p className="text-gray-600">@facundorod</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/facundo-hernan-rodriguez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <p className="text-gray-600">Facundo Hernán Rodriguez</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
