import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white reveal animate-scale-up">
          Get in Touch
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="reveal bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg hover-glow">
            <div className="space-y-6">
              <a
                href="mailto:mebishnusahu0595@gmail.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift"
              >
                <Mail className="w-6 h-6 mr-4 animate-bounce" />
                mebishnusahu0595@gmail.com
              </a>
              
              <a
                href="tel:+919301105706"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift"
              >
                <Phone className="w-6 h-6 mr-4 animate-bounce" />
                +91 9301105706
              </a>
              
              <div className="flex space-x-6 pt-6">
                <a
                  href="https://github.com/mebishnusahu0595/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale"
                >
                  <Github className="w-6 h-6 animate-rotate" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale"
                >
                  <Linkedin className="w-6 h-6 animate-rotate" />
                </a>
                <a
                  href="https://x.com/mebishnusahu?t=illmlYjiWGQ9l4d1Xz59Zw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale"
                >
                  <Twitter className="w-6 h-6 animate-rotate" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}