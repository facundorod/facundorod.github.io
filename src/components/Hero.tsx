import React from 'react';
import { MapPin, ArrowDown, FileText } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadPDF = () => {
    // TODO: Replace with actual PDF file URL when provided
    const pdfUrl = '/Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Facundo_Rodriguez_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-90"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
            {/* Professional Photo */}
            <div className="flex-shrink-0 order-1 lg:order-1 flex items-center">
              <div className="relative inline-block">
                <img 
                  src="/images/facundo.png"
                  alt="Facundo Rodriguez"
                  className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl object-cover shadow-xl border-4 border-white"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-purple-600/10"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-2 lg:pt-4 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Facundo Rodriguez
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start mb-6 text-gray-600">
                <MapPin size={18} className="mr-2 text-blue-600" />
                <span className="text-base font-medium">Tandil, Buenos Aires, Argentina</span>
              </div>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  Senior Software Backend Engineer
                </p>
                
                <div className="flex flex-col items-center lg:items-start gap-3 text-base text-gray-600 mb-6">
                  <span className="bg-blue-50 px-4 py-2 rounded-full font-medium border border-blue-200">
                    Co-founder of <span className="font-semibold text-blue-700">SIMVet Monitor</span>
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Specialized in building robust server-side solutions for the healthcare industry. 
                Passionate about scalable architecture, innovative medical technology, and creating 
                impactful solutions that improve people's lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button 
                  onClick={scrollToAbout}
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                >
                  Learn More About Me
                  <ArrowDown size={18} className="ml-2 group-hover:animate-bounce" />
                </button>
                
                <button 
                  onClick={downloadPDF}
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium"
                >
                  <FileText size={18} className="mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
