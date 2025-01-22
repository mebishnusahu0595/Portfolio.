import React from 'react';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white reveal animate-scale-up">
          Certifications
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="reveal bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover-scale hover-glow flex justify-between items-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white gradient-text">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.provider}</p>
              </div>
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover-lift"
              >
                View Certificate
                <ExternalLink className="w-4 h-4 ml-2 animate-bounce" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}