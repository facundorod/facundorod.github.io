
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
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Academic foundation and continuous learning in systems engineering and computational mathematics, 
            driving innovation through research and practical application.
          </p>
        </div>
        
        <div className="space-y-8 mb-20">
          {educationData.map((edu, index) => (
            <div key={index} className="group bg-gradient-to-r from-white to-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-start mb-6 lg:mb-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                    <p className="text-2xl text-blue-600 font-semibold mb-4">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={18} className="mr-2 text-blue-600" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2 text-blue-600" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold ${
                    edu.status === 'In Progress' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                      : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                  }`}>
                    <Award size={16} className="mr-2" />
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <BookOpen size={20} className="mr-3 text-blue-600" />
                    <span className="font-bold text-gray-900 text-lg">Program Overview</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{edu.description}</p>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <Award size={20} className="mr-3 text-purple-600" />
                    <span className="font-bold text-gray-900 text-lg">Key Highlight</span>
                  </div>
                  <p className="text-purple-700 font-semibold text-lg">{edu.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-4xl font-bold mb-6">Commitment to Excellence</h3>
          <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Dedicated to staying at the forefront of technology through formal education, 
            cutting-edge research, and hands-on experience with emerging technologies and methodologies.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-3xl font-bold text-blue-200 mb-3">PhD Candidate</div>
              <p className="text-blue-100 text-lg font-medium">Advanced Research</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-3xl font-bold text-purple-200 mb-3">9+ Years</div>
              <p className="text-blue-100 text-lg font-medium">Academic Journey</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-3xl font-bold text-indigo-200 mb-3">UNICEN</div>
              <p className="text-blue-100 text-lg font-medium">Prestigious Institution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
