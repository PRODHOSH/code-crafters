import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/40 border-t border-white/5 py-8 sm:py-12 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <img 
            src="/images/codecrafters_logo.jpg" 
            alt="CodeCrafters Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-orange-500/30 object-cover"
          />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1">CodeCrafters</h2>
            <p className="text-gray-500 text-xs sm:text-sm">IIT Madras BS Degree Program</p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
           <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Github size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="text-gray-600 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} CodeCrafters.<br className="sm:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
