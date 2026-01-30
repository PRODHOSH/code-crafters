import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/40 border-t border-white/5 py-12 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-1">CodeCrafters</h2>
          <p className="text-gray-500 text-sm">IIT Madras BS Degree Program</p>
        </div>

        <div className="flex items-center gap-6">
           <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Github size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} CodeCrafters. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
