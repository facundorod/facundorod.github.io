
import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    degree: "Ph.D. in Computational and Industrial Mathematics",
    institution: "UNICEN",
    location: "Buenos Aires, AR", 
    period: "2024 - Present",
    status: "In Progress",
    description: "Advanced research in computational mathematics with applications to industrial problems and software engineering. Focusing on mathematical modeling and optimization techniques for real-world applications.",
    highlight: "Research Focus: Mathematical Modeling & Optimization"
  },
  {
    degree: "B.S. in System Engineering",
    institution: "UNICEN", 
    location: "Buenos Aires, AR",
    period: "2013 - 2022",
    status: "Completed",
    description: "Comprehensive foundation in systems engineering, software development, and computer science principles. Specialized in backend systems, algorithms, and software architecture.",
    highlight: "Specialization: Backend Systems & Software Architecture"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Academic foundation and continuous learning in systems engineering and computational mathematics, 
            driving innovation through research and practical application.
          </p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-600" />
                        <span className="font-medium text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-blue-600" />
                        <span className="font-medium text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                    edu.status === 'In Progress' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                      : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                  }`}>
                    <Award size={14} className="mr-2" />
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <BookOpen size={18} className="mr-3 text-blue-600" />
                    <span className="font-bold text-gray-900">Program Overview</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">{edu.description}</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center mb-3">
                    <Award size={18} className="mr-3 text-purple-600" />
                    <span className="font-bold text-gray-900">Key Highlight</span>
                  </div>
                  <p className="text-purple-700 font-semibold text-sm">{edu.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
