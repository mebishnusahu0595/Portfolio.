import React from 'react';
import { skills } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white reveal animate-scale-up">
          About Me
        </h2>
        
        <div className="mb-12 reveal">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover-lift hover-glow">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
              Rungta College of Science and Technology
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="reveal bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover-scale hover-glow transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white gradient-text">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="text-gray-600 dark:text-gray-300 mb-1">{skill}</div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"
                        style={{
                          width: `${Math.random() * 30 + 70}%`,
                          transition: 'width 1s ease-in-out',
                        }}
                      />
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
}