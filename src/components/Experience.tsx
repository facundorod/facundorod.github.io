
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Backend Engineer",
    company: "WhitePrompt",
    location: "Remote",
    period: "Nov. 2024 - Present",
    projects: [
      {
        name: "Axsome",
        description: "Led the design and development of scalable APIs using Nest.js, GraphQL, and AWS for a medical tracking system. Developed voice transcription features and worked closely with medical teams to model complex treatment data.",
        technologies: ["Nest.js", "GraphQL", "AWS", "AWS Transcribe", "AWS Lambda"]
      },
      {
        name: "JointOps", 
        description: "Led development of a full-stack inventory management system for knee surgery implants using React, Next.js, and Supabase, improving tracking efficiency for medical staff.",
        technologies: ["React", "Next.js", "Supabase"]
      }
    ]
  },
  {
    title: "Senior Software Backend Engineer", 
    company: "Koombea",
    location: "Remote",
    period: "Oct. 2023 - Nov. 2024",
    projects: [
      {
        name: "CyberPatient",
        description: "Built RESTful and GraphQL APIs in Nest.js for a healthcare simulation platform designed to train medical students through interactive virtual scenarios.",
        technologies: ["Nest.js", "GraphQL", "RESTful APIs"]
      },
      {
        name: "SecondNature",
        description: "Developed a middleware service to integrate NetSuite ERP with Stripe, improving payment processing and reconciliation for a wellness app.",
        technologies: ["NetSuite", "Stripe", "Middleware"]
      }
    ]
  },
  {
    title: "Senior Software Backend Engineer",
    company: "DeepHow", 
    location: "Remote",
    period: "Sep. 2021 - Oct. 2023",
    projects: [
      {
        name: "AI Video Knowledge Platform",
        description: "Developed and maintained Node.js-based microservices for an AI-powered video knowledge management platform. Created Zoom Marketplace app and internal SDKs.",
        technologies: ["Node.js", "Express", "MongoDB", "Redis", "Zoom API"]
      }
    ]
  },
  {
    title: "FullStack Engineer",
    company: "BeeReal",
    location: "Remote", 
    period: "Aug. 2020 - Sep. 2021",
    projects: [
      {
        name: "DHL Logistics Applications",
        description: "Contributed to frontend (Angular) and backend (Node.js with TypeScript) features for warehouse operations, route optimization, and shipment tracking tools.",
        technologies: ["Angular", "Node.js", "TypeScript", "PostgreSQL"]
      }
    ]
  },
  {
    title: "FullStack Engineer",
    company: "Hepa",
    location: "Tandil, Buenos Aires, Argentina",
    period: "Mar. 2019 - Aug. 2020", 
    projects: [
      {
        name: "Veterinary Training Simulator",
        description: "Designed and implemented a web-based simulator for vital signs monitoring in clinical training scenarios. Developed mobile application for video-assisted urethral catheterization system.",
        technologies: ["React Native", "Web Technologies", "Medical Simulation"]
      }
    ]
  },
  {
    title: "ABAP Developer",
    company: "Tivit",
    location: "Tandil, Buenos Aires, Argentina", 
    period: "May. 2017 - May. 2018",
    projects: [
      {
        name: "SAP ERP Solutions",
        description: "Developed custom SAP ABAP modules for finance and inventory management in large-scale ERP deployments. Participated in full software lifecycle for multiple clients.",
        technologies: ["SAP ABAP", "ERP", "Finance Systems"]
      }
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through innovative companies and impactful projects in healthcare technology and beyond.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      {project.name}
                      <ExternalLink size={16} className="ml-2 text-gray-400" />
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
