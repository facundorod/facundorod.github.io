
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
    icon: "bg-blue-600",
    badge: "bg-blue-100 text-blue-800"
  },
  green: {
    bg: "from-green-50 to-green-100", 
    icon: "bg-green-600",
    badge: "bg-green-100 text-green-800"
  },
  purple: {
    bg: "from-purple-50 to-purple-100",
    icon: "bg-purple-600", 
    badge: "bg-purple-100 text-purple-800"
  },
  orange: {
    bg: "from-orange-50 to-orange-100",
    icon: "bg-orange-600",
    badge: "bg-orange-100 text-orange-800"
  },
  red: {
    bg: "from-red-50 to-red-100",
    icon: "bg-red-600",
    badge: "bg-red-100 text-red-800"
  },
  indigo: {
    bg: "from-indigo-50 to-indigo-100",
    icon: "bg-indigo-600",
    badge: "bg-indigo-100 text-indigo-800"
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience in software development 
            and healthcare technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            const IconComponent = category.icon;
            
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-2 ${colors.badge} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Specialized Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Healthcare</div>
                <p className="text-gray-300">Industry Focus</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Remote</div>
                <p className="text-gray-300">Work Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
