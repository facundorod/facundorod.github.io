
import React from 'react';
import { Code, Heart, GraduationCap, Stethoscope } from 'lucide-react';

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">SIMVet Monitor</h3>
            <p className="text-gray-600">
              Co-founded an innovative veterinary monitoring platform that revolutionizes 
              how veterinary professionals track and analyze patient vital signs.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
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
        
        {/* SIMVet Monitor Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">SIMVet Monitor</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionizing veterinary care through innovative monitoring technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">About the Platform</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SIMVet Monitor is a cutting-edge veterinary monitoring platform that I co-founded 
                to address the critical need for advanced patient monitoring in veterinary medicine. 
                The platform provides real-time vital signs tracking and analysis for veterinary professionals.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built with modern web technologies, SIMVet Monitor offers intuitive dashboards, 
                comprehensive patient data management, and advanced analytics to help veterinarians 
                make informed decisions about animal care.
              </p>
              <a 
                href="https://simvetmonitor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Visit SIMVet Monitor
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time vital signs monitoring and alerts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive patient data management system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced analytics and reporting tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  User-friendly interface designed for veterinary professionals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cloud-based platform for accessibility and scalability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
