import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUNCIL } from '../constants';
import { Linkedin, Github, X } from 'lucide-react';

const departments = [
  { id: 'all', name: 'All', color: 'orange' },
  { id: 'core', name: 'Core', color: 'orange' },
  { id: 'webops', name: 'WebOps, Coding & Cybersecurity', color: 'blue' },
  { id: 'multimedia', name: 'Multimedia', color: 'purple' },
  { id: 'pr', name: 'PR, Outreach & Sponsorship', color: 'green' },
];

const getDepartment = (role: string): string => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('core')) return 'core';
  if (roleLower.includes('webops') || roleLower.includes('coding') || roleLower.includes('cyber') || roleLower.includes('cybersecurity')) return 'webops';
  if (roleLower.includes('multimedia') || roleLower.includes('graphic')) return 'multimedia';
  if (roleLower.includes('pr') || roleLower.includes('sponsorship') || roleLower.includes('outreach') || roleLower.includes('publicity')) return 'pr';
  return 'core'; // default
};

const Council: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredMembers = useMemo(() => {
    if (selectedDept === 'all') {
      // Order: Core first, then WebOps (Prodhosh, Nitesh, then others), Multimedia, Outreach
      const core = COUNCIL.filter(m => getDepartment(m.role) === 'core');
      const webops = COUNCIL.filter(m => getDepartment(m.role) === 'webops');
      const multimedia = COUNCIL.filter(m => getDepartment(m.role) === 'multimedia');
      const pr = COUNCIL.filter(m => getDepartment(m.role) === 'pr');
      
      // Sort WebOps: Prodhosh first, Nitesh second, then others
      const prodhosh = webops.find(m => m.name.toLowerCase().includes('prodhosh'));
      const nitesh = webops.find(m => m.name.toLowerCase().includes('nitesh'));
      const otherWebops = webops.filter(m => 
        !m.name.toLowerCase().includes('prodhosh') && 
        !m.name.toLowerCase().includes('nitesh')
      );
      
      const sortedWebops = [
        ...(prodhosh ? [prodhosh] : []),
        ...(nitesh ? [nitesh] : []),
        ...otherWebops
      ];
      
      return [...core, ...sortedWebops, ...multimedia, ...pr];
    }
    return COUNCIL.filter(member => getDepartment(member.role) === selectedDept);
  }, [selectedDept]);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">The <span className="text-orange-500">Syndicate</span></h1>
          <p className="text-gray-400">Architects of the CodeCrafters vision.</p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {departments.map((dept) => {
            const isActive = selectedDept === dept.id;
            const getActiveStyles = () => {
              switch(dept.color) {
                case 'orange': return 'bg-orange-500 text-white shadow-lg shadow-orange-500/30';
                case 'blue': return 'bg-blue-500 text-white shadow-lg shadow-blue-500/30';
                case 'purple': return 'bg-purple-500 text-white shadow-lg shadow-purple-500/30';
                case 'green': return 'bg-green-500 text-white shadow-lg shadow-green-500/30';
                default: return 'bg-orange-500 text-white shadow-lg shadow-orange-500/30';
              }
            };
            
            return (
              <motion.button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? getActiveStyles()
                    : 'bg-slate-800/50 text-gray-300 border border-white/10 hover:border-white/20'
                }`}
              >
                {dept.name}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDept}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedMember(member.id)}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
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
          </motion.div>
        </AnimatePresence>

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
