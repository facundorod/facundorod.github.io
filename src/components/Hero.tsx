
import React from 'react';
import { MapPin, ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/2e1af83c-2f1b-433c-b9a7-91f91732d2fb.png"
              alt="Facundo Rodriguez"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Facundo
            <span className="block text-blue-600">Rodriguez</span>
          </h1>
          
          <div className="flex items-center justify-center mb-6 text-gray-600">
            <MapPin size={20} className="mr-2" />
            <span>Tandil, Buenos Aires, Argentina</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Senior Software Backend Engineer
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Co-founder of <span className="font-semibold">SIMVet Monitor</span> • PhD Candidate in Computational Mathematics
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Systems Engineer with extensive experience building robust server-side solutions, 
            particularly in the healthcare industry. Passionate about scalable architecture 
            and innovative medical technology.
          </p>
          
          <button 
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
            <ArrowDown size={20} className="ml-2 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
