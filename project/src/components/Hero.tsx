import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 reveal animate-slide-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="gradient-text">
                Bishnu Prasad Sahu
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Data Scientist & Data Analyst
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A passionate Data Scientist and Analyst with expertise in Machine Learning, NLP, and Data Visualization. 
              I build innovative solutions to solve real-world problems with data-driven insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="#resume"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover-lift hover-glow transition-all"
              >
                View Resume
                <ArrowRight className="ml-2 w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 reveal animate-slide-right">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3"
              alt="Bishnu Prasad Sahu"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}