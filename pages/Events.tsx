import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from '../constants';
import { Calendar, X, MapPin, Trophy } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen px-6 pb-20">
       <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Event <span className="text-orange-500">Chronicles</span></h1>
          <p className="text-gray-400">Past conquests and future battlegrounds.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              layoutId={`card-${event.id}`}
              onClick={() => setSelectedEvent(event.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="cursor-pointer group relative bg-slate-900 border border-white/5 hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="h-56 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-80" />
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-orange-400">
                    COMPLETED
                </div>
              </div>

              <div className="p-6 relative z-20 -mt-12">
                 <div className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-lg mb-3 shadow-lg shadow-orange-600/20">
                    <Calendar size={12} /> {event.date}
                 </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors leading-tight">{event.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4">{event.description}</p>
                
                <div className="flex items-center text-xs text-gray-500 font-mono">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    IMPACT_SCORE: {Math.floor(Math.random() * 100) + 80}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              />
              
              <motion.div
                layoutId={`card-${selectedEvent}`}
                className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                 {(() => {
                    const event = EVENTS.find(e => e.id === selectedEvent)!;
                    return (
                      <>
                        <button 
                           onClick={() => setSelectedEvent(null)}
                           className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white border border-white/10"
                        >
                           <X size={20} />
                        </button>

                        <div className="md:w-1/2 h-64 md:h-auto relative">
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 md:bg-gradient-to-r md:from-transparent md:to-slate-900 z-10" />
                          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="p-8 md:w-1/2 flex flex-col justify-center bg-slate-900">
                           <div className="flex items-center gap-3 mb-6">
                               <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                                  <Calendar size={20} />
                               </div>
                               <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">{event.date}</span>
                           </div>
                           
                           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{event.title}</h2>
                           
                           <div className="w-10 h-1 bg-orange-500 rounded-full mb-6" />

                           <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                             {event.description}
                           </p>
                           
                           <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                              <div className="flex items-center gap-2 mb-2">
                                  <Trophy size={16} className="text-yellow-500" />
                                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Outcome Report</h4>
                              </div>
                              <p className="text-white font-medium">{event.outcome}</p>
                           </div>

                           <div className="mt-8 flex gap-4">
                              <button className="flex-1 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-bold text-gray-400 transition-colors">
                                View Gallery
                              </button>
                               <button className="flex-1 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-sm font-bold text-white transition-colors">
                                Event Details
                              </button>
                           </div>
                        </div>
                      </>
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

export default Events;
