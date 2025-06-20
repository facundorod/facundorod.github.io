import React from 'react';
import { Code, Heart, GraduationCap, Stethoscope, ExternalLink, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A passionate software engineer dedicated to building innovative solutions 
            that make a meaningful difference in people's lives through cutting-edge technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Specialized in backend development with expertise in Node.js, Nest.js, 
              and cloud technologies. Building scalable systems that handle complex business logic.
            </p>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Deep experience in healthcare technology, from medical tracking systems 
              to veterinary simulation platforms. Committed to improving healthcare through technology.
            </p>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Research</h3>
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing a PhD in Computational and Industrial Mathematics, 
              always staying at the forefront of technology and research.
            </p>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">SIMVet Monitor</h3>
            <p className="text-gray-600 leading-relaxed">
              Co-founded an innovative veterinary monitoring platform that revolutionizes 
              how veterinary professionals track and analyze patient vital signs.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">My Professional Journey</h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                My career began with a strong foundation in systems engineering, which led me 
                to specialize in backend development. Over the years, I've had the privilege 
                of working with innovative companies across different industries.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Currently, I'm a Senior Software Backend Engineer at WhitePrompt, where I lead 
                the development of cutting-edge medical tracking systems and healthcare solutions.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                When I'm not coding, I'm pursuing my PhD in Computational and Industrial Mathematics, 
                exploring the intersection of mathematics, computer science, and real-world applications.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Current Role</h4>
                  <p className="text-gray-600">Senior Software Backend Engineer at WhitePrompt</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Entrepreneurship</h4>
                  <p className="text-gray-600">Co-founder of SIMVet Monitor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Academic Pursuit</h4>
                  <p className="text-gray-600">PhD in Computational and Industrial Mathematics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced SIMVet Monitor Section with softer colors */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">SIMVet Monitor</h3>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing veterinary care through innovative monitoring technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-6">About the Platform</h4>
              <p className="text-slate-200 mb-6 leading-relaxed text-lg">
                SIMVet Monitor is a cutting-edge veterinary monitoring platform that I co-founded 
                to address the critical need for advanced patient monitoring in veterinary medicine. 
                The platform provides real-time vital signs tracking and analysis for veterinary professionals.
              </p>
              <p className="text-slate-200 mb-8 leading-relaxed text-lg">
                Built with modern web technologies, SIMVet Monitor offers intuitive dashboards, 
                comprehensive patient data management, and advanced analytics to help veterinarians 
                make informed decisions about animal care.
              </p>
              <a 
                href="https://simvetmonitor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg"
              >
                Visit SIMVet Monitor
                <ExternalLink className="ml-3" size={20} />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="font-bold text-white mb-6 text-xl">Key Features</h4>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-300 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg">Real-time vital signs monitoring and alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-300 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg">Comprehensive patient data management system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-300 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg">Advanced analytics and reporting tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-300 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg">User-friendly interface for veterinary professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-300 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg">Cloud-based platform for accessibility and scalability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
