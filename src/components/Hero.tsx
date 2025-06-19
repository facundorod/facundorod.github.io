
import React from 'react';
import { MapPin, ArrowDown, Download } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional Photo with enhanced styling */}
          <div className="mb-12">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/2e1af83c-2f1b-433c-b9a7-91f91732d2fb.png"
                alt="Facundo Rodriguez"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            Facundo
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rodriguez
            </span>
          </h1>
          
          <div className="flex items-center justify-center mb-8 text-gray-600">
            <MapPin size={20} className="mr-2 text-blue-600" />
            <span className="text-lg font-medium">Tandil, Buenos Aires, Argentina</span>
          </div>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Senior Software Backend Engineer
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-gray-600">
              <span className="bg-blue-50 px-4 py-2 rounded-full font-medium">
                Co-founder of <span className="font-semibold text-blue-700">SIMVet Monitor</span>
              </span>
              <span className="hidden md:inline text-gray-400">•</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full font-medium">
                PhD Candidate in <span className="font-semibold text-purple-700">Computational Mathematics</span>
              </span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Specialized in building robust server-side solutions for the healthcare industry. 
            Passionate about scalable architecture, innovative medical technology, and creating 
            impactful solutions that improve people's lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              Learn More About Me
              <ArrowDown size={20} className="ml-2 group-hover:animate-bounce" />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold">
              <Download size={20} className="mr-2" />
              Download CV
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
