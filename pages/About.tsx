import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">Our <span className="text-orange-500">Legacy</span></h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            CodeCrafters was founded with a single mission: to create a thriving ecosystem of student developers within the IIT Madras BS Degree program.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24 md:mb-32">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">{stat.value}</h3>
              <p className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 md:ml-0 space-y-8 sm:space-y-12">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative pl-8 sm:pl-12 md:pl-24"
           >
             <div className="absolute -left-2.5 sm:-left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
             <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">2021: The Inception</h3>
             <p className="text-gray-400 text-sm sm:text-base">
                A small group of passionate students came together to form a study group, which quickly evolved into a technical club.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative pl-8 sm:pl-12 md:pl-24"
           >
             <div className="absolute -left-2.5 sm:-left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
             <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">2022: First Hackathon</h3>
             <p className="text-gray-400 text-sm sm:text-base">
                We hosted "CodeRush", our first internal hackathon with over 100 participants, marking our presence on campus.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative pl-8 sm:pl-12 md:pl-24"
           >
             <div className="absolute -left-2.5 sm:-left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
             <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">2023: Official Recognition</h3>
             <p className="text-gray-400 text-sm sm:text-base">
                Formally recognized as a House Club under the Student Affairs council. Expanded domains to include AI/ML and Cybersecurity.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative pl-8 sm:pl-12 md:pl-24"
           >
             <div className="absolute -left-2.5 sm:-left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
             <h3 className="text-2xl font-bold mb-2">2024: Scaling Up</h3>
             <p className="text-gray-400">
                Partnered with industry giants for workshops. Membership crossed 500+ active students.
             </p>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
