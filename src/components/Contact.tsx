
import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

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
        
        {/* Main Contact Card - Now Full Width */}
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-2">Ready to start a conversation</p>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto text-lg">
              Whether you're looking for a backend engineer, want to discuss healthcare technology, or are interested in SIMVet Monitor, I'm here to help.
            </p>
            <div className="flex items-center justify-center text-blue-600 font-semibold group cursor-pointer">
              <span className="text-lg">Let's connect</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Social Links - Enhanced */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Connect with me</h3>
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
