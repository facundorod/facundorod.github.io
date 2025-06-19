
import React from 'react';
import { Code, Database, Cloud, Globe, Wrench, Languages } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Java", "Python"],
    color: "blue"
  },
  {
    title: "Backend & APIs", 
    icon: Database,
    skills: ["Nest.js", "Node.js", "Express", "GraphQL", "RESTful APIs"],
    color: "green"
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud, 
    skills: ["AWS", "Google Cloud Platform", "Docker", "AWS Lambda", "API Gateway", "SST"],
    color: "purple"
  },
  {
    title: "Frontend & Mobile",
    icon: Globe,
    skills: ["Angular", "React", "Next.js", "React Native"],
    color: "orange"
  },
  {
    title: "Databases & Tools",
    icon: Wrench,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Stripe", "Jest", "GitHub Actions", "Cursor", "Cline"],
    color: "red"
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["English", "Spanish"],
    color: "indigo"
  }
];

const colorClasses = {
  blue: {
    bg: "from-blue-50 to-blue-100",
    icon: "from-blue-600 to-blue-700",
    badge: "bg-blue-100 text-blue-800 border border-blue-200"
  },
  green: {
    bg: "from-green-50 to-green-100", 
    icon: "from-green-600 to-green-700",
    badge: "bg-green-100 text-green-800 border border-green-200"
  },
  purple: {
    bg: "from-purple-50 to-purple-100",
    icon: "from-purple-600 to-purple-700", 
    badge: "bg-purple-100 text-purple-800 border border-purple-200"
  },
  orange: {
    bg: "from-orange-50 to-orange-100",
    icon: "from-orange-600 to-orange-700",
    badge: "bg-orange-100 text-orange-800 border border-orange-200"
  },
  red: {
    bg: "from-red-50 to-red-100",
    icon: "from-red-600 to-red-700",
    badge: "bg-red-100 text-red-800 border border-red-200"
  },
  indigo: {
    bg: "from-indigo-50 to-indigo-100",
    icon: "from-indigo-600 to-indigo-700",
    badge: "bg-indigo-100 text-indigo-800 border border-indigo-200"
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of experience in software development 
            and healthcare technology innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            const IconComponent = category.icon;
            
            return (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${colors.bg} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${colors.icon} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-4 py-2 ${colors.badge} rounded-xl text-sm font-semibold transition-transform hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Professional Highlights</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Specialized expertise backed by years of hands-on experience and continuous learning
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-3">7+</div>
              <p className="text-blue-100 text-lg font-medium">Years of Experience</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-green-400 mb-3">Healthcare</div>
              <p className="text-blue-100 text-lg font-medium">Industry Specialization</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-purple-400 mb-3">Remote</div>
              <p className="text-blue-100 text-lg font-medium">Work Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
