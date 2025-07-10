
import React from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to collaborate on innovative solutions and challenging problems.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Get In Touch</h3>
                <p className="text-gray-600">Ready to start a conversation</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you're looking for a backend engineer, want to discuss healthcare technology, or are interested in SIMVet Monitor, I'm here to help.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group cursor-pointer">
              <span>Let's connect</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Based in Argentina</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tandil, Buenos Aires, Argentina
            </p>
            <p className="text-sm text-gray-500">
              Available for remote collaboration worldwide
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">Connect with me</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/facundorod" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Github className="text-white" size={16} />
              </div>
              <span className="font-medium text-gray-900">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/facundo-hernan-rodriguez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <Linkedin className="text-white" size={16} />
              </div>
              <span className="font-medium text-gray-900">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
