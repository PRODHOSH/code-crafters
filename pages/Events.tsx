import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from '../constants';
import { Calendar, X, MapPin, Trophy, Users, ExternalLink, Youtube } from 'lucide-react';
import { Event } from '../types';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="pt-24 min-h-screen px-4 sm:px-6 pb-20">
       <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-4">Event <span className="text-orange-500">Chronicles</span></h1>
          <p className="text-gray-400 text-sm sm:text-base">Past conquests and future battlegrounds (2024-2026).</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="cursor-pointer group relative bg-slate-900 border border-white/5 hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-80" />
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-orange-400">
                    {event.registrations ? `${event.registrations} REG` : 'COMPLETED'}
                </div>
              </div>

              <div className="p-5 sm:p-6 relative z-20 -mt-12">
                 <div className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-lg mb-3 shadow-lg shadow-orange-600/20">
                    <Calendar size={12} /> {event.date}
                 </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors leading-tight line-clamp-2">{event.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4">{event.description}</p>
                
                <div className="flex items-center text-xs text-gray-500 font-mono">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    Click for details
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl bg-slate-900/95 backdrop-blur-xl border-2 border-orange-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                   onClick={() => setSelectedEvent(null)}
                   className="sticky top-4 right-4 float-right z-50 p-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                   <X size={22} />
                </button>

                {/* Header with Logo */}
                <div className="relative bg-gradient-to-br from-orange-600/30 via-slate-900 to-slate-900 p-6 sm:p-8 border-b border-orange-500/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
                      <img 
                        src="/images/codecrafters_logo.jpg" 
                        alt="CodeCrafters Logo" 
                        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-orange-500 shadow-lg shadow-orange-500/30 object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">{selectedEvent.title}</h2>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                          <Calendar size={16} className="text-orange-500" />
                          <span className="font-semibold">{selectedEvent.date}</span>
                        </div>
                        {selectedEvent.registrations && (
                          <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                            <Users size={16} className="text-green-500" />
                            <span className="font-semibold">{selectedEvent.registrations} Registrations</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                  {/* Description */}
                  <div className="bg-gradient-to-br from-slate-800/50 to-transparent p-5 sm:p-6 rounded-xl border border-white/5">
                    <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 flex items-center gap-2">
                      <Trophy size={20} />
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedEvent.description}</p>
                  </div>

                  {/* Activities */}
                  {selectedEvent.activities && (
                    <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-5 sm:p-6 rounded-xl border border-blue-500/10">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3">Activities</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedEvent.activities}</p>
                    </div>
                  )}

                  {/* Highlights */}
                  {selectedEvent.highlights && (
                    <div className="bg-gradient-to-br from-purple-900/20 to-transparent p-5 sm:p-6 rounded-xl border border-purple-500/10">
                      <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3">Highlights</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedEvent.highlights}</p>
                    </div>
                  )}

                  {/* Guests */}
                  {selectedEvent.guests && selectedEvent.guests.length > 0 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                        <Users size={20} />
                        Distinguished Guests
                      </h3>
                      <div className="space-y-4">
                        {selectedEvent.guests.map((guest, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-slate-800/70 to-slate-800/30 border border-orange-500/10 rounded-xl p-4 sm:p-5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                            <h4 className="font-bold text-white text-base sm:text-lg mb-2 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                              {guest.name}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed pl-4">{guest.background}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  <div className="bg-gradient-to-br from-green-900/20 to-transparent p-5 sm:p-6 rounded-xl border border-green-500/10">
                    <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3">Outcome & Impact</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedEvent.outcome}</p>
                  </div>

                  {/* YouTube Link */}
                  {selectedEvent.youtubeLink && (
                    <div className="pt-4 border-t border-white/10 flex justify-center">
                      <a 
                        href={selectedEvent.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm sm:text-base"
                      >
                        <Youtube size={22} />
                        Watch Session Recording
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;
