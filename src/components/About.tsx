import React from 'react';
import { Code, Heart, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate software engineer dedicated to building innovative solutions 
            that make a difference in people's lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Excellence</h3>
            <p className="text-gray-600">
              Specialized in backend development with expertise in Node.js, Nest.js, 
              and cloud technologies. Building scalable systems that handle complex business logic.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Focus</h3>
            <p className="text-gray-600">
              Deep experience in healthcare technology, from medical tracking systems 
              to veterinary simulation platforms. Committed to improving healthcare through technology.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
            <p className="text-gray-600">
              Currently pursuing a PhD in Computational and Industrial Mathematics, 
              always staying at the forefront of technology and research.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                My career began with a strong foundation in systems engineering, which led me 
                to specialize in backend development. Over the years, I've had the privilege 
                of working with innovative companies across different industries.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Currently, I'm a Senior Software Backend Engineer at WhitePrompt, where I lead 
                the development of cutting-edge medical tracking systems and healthcare solutions. 
                I'm also proud to be the co-founder of SIMVet Monitor, an application that's 
                making a difference in veterinary care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, I'm pursuing my PhD in Computational and Industrial Mathematics, 
                exploring the intersection of mathematics, computer science, and real-world applications.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Current Role</h4>
                <p className="text-gray-600">Senior Software Backend Engineer at WhitePrompt</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Entrepreneurship</h4>
                <p className="text-gray-600">Co-founder of SIMVet Monitor</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Academic Pursuit</h4>
                <p className="text-gray-600">PhD in Computational and Industrial Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
