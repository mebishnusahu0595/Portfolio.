import React from 'react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white reveal animate-scale-up">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="reveal bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover-scale hover-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white gradient-text mb-2">
                {exp.role}
              </h3>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4 animate-pulse">
                {exp.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}