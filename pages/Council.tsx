import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUNCIL } from '../constants';
import { Linkedin, Github, X, Mail } from 'lucide-react';

const Council: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen px-6 pb-20">
      <div className="max-w-7xl mx-auto">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">The <span className="text-orange-500">Syndicate</span></h1>
          <p className="text-gray-400">Architects of the CodeCrafters vision.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COUNCIL.map((member, index) => (
             <motion.div
               key={member.id}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: index * 0.05 }}
               onClick={() => setSelectedMember(member.id)}
               className="group relative bg-slate-900 border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-orange-500/50 transition-all duration-300"
             >
                {/* Image Area */}
                <div className="aspect-[3/4] overflow-hidden relative">
                   <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                   
                   {/* Social Overlay */}
                   <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-orange-500 transition-colors"><Linkedin size={16} /></div>
                      <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-orange-500 transition-colors"><Github size={16} /></div>
                   </div>
                </div>

                {/* Info Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                   <div className="h-0.5 w-8 bg-orange-500 mb-3 group-hover:w-full transition-all duration-500" />
                   <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{member.name}</h3>
                   <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">{member.role}</p>
                </div>
             </motion.div>
          ))}
        </div>

        <AnimatePresence>
           {selectedMember && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                 <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedMember(null)}
                  className="absolute inset-0 bg-black/95 backdrop-blur-md"
                 />
                 
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                   className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(249,115,22,0.1)]"
                 >
                    {(() => {
                        const member = COUNCIL.find(m => m.id === selectedMember)!;
                        return (
                           <div className="flex flex-col items-center text-center">
                              <button 
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10"
                              >
                                <X size={24} />
                              </button>

                              <div className="relative mb-8">
                                 <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20"></div>
                                 <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-orange-500/50 p-1">
                                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                 </div>
                              </div>

                              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                              <div className="px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-8">
                                 {member.role}
                              </div>

                              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                "{member.bio}"
                              </p>

                              <div className="flex justify-center gap-4 w-full">
                                 {member.linkedin && (
                                   <a href={member.linkedin} className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all flex items-center justify-center gap-2 group">
                                      <Linkedin size={20} /> <span className="text-sm font-bold">Connect</span>
                                   </a>
                                 )}
                                 {member.github && (
                                   <a href={member.github} className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#333] hover:text-white hover:border-transparent transition-all flex items-center justify-center gap-2 group">
                                      <Github size={20} /> <span className="text-sm font-bold">Code</span>
                                   </a>
                                 )}
                              </div>
                           </div>
                        )
                    })()}
                 </motion.div>
              </div>
           )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Council;
