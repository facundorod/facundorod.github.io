
import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "Ph.D. in Computational and Industrial Mathematics",
    institution: "UNICEN",
    location: "Buenos Aires, AR", 
    period: "2024 - Present",
    status: "In Progress",
    description: "Advanced research in computational mathematics with applications to industrial problems and software engineering."
  },
  {
    degree: "B.S. in System Engineering",
    institution: "UNICEN", 
    location: "Buenos Aires, AR",
    period: "2013 - 2022",
    status: "Completed",
    description: "Comprehensive foundation in systems engineering, software development, and computer science principles."
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and continuous learning in systems engineering and computational mathematics.
          </p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    edu.status === 'In Progress' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center mb-3">
                  <BookOpen size={18} className="mr-2 text-blue-600" />
                  <span className="font-semibold text-gray-900">About this program</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Committed to staying at the forefront of technology through formal education, 
            research, and hands-on experience with cutting-edge tools and methodologies.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200 mb-2">PhD Candidate</div>
              <p className="text-blue-100">Advanced Research</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-200 mb-2">9 Years</div>
              <p className="text-blue-100">Academic Journey</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-200 mb-2">UNICEN</div>
              <p className="text-blue-100">Prestigious Institution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
