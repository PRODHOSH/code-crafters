import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS, Event } from '../constants';
import { Calendar, X, Users, Youtube, Award, Search } from 'lucide-react';

const EventModal: React.FC<{ event: Event; onClose: () => void }> = ({ event, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
      style={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl h-[90vh] bg-slate-900/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/10 transition-colors border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Image on Left */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-slate-950">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-orange-400" size={18} />
              <span className="text-white font-semibold">{event.date}</span>
            </div>
            {event.registrations && (
              <div className="flex items-center gap-2">
                <Users className="text-orange-400" size={18} />
                <span className="text-white font-semibold">{event.registrations}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content on Right */}
        <div className="w-full md:w-1/2 h-[calc(90vh-16rem)] md:h-full overflow-y-auto p-6 md:p-8 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{event.title}</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-orange-500 font-bold mb-2 flex items-center gap-2">
                <Award size={18} /> Description
              </h3>
              <p className="text-gray-300 leading-relaxed">{event.description}</p>
            </div>

            {event.activities && (
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Activities</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.activities}</p>
              </div>
            )}

            {event.guests && event.guests.length > 0 && (
              <div>
                <h3 className="text-orange-500 font-bold mb-2 flex items-center gap-2">
                  <Users size={18} /> Guest Speakers
                </h3>
                <div className="space-y-2">
                  {event.guests.map((guest, idx) => (
                    <div key={idx} className="bg-slate-800/50 p-3 rounded-lg border border-white/5">
                      <p className="text-white font-semibold">{guest.name}</p>
                      <p className="text-gray-400 text-sm">{guest.background}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event.outcome && (
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Outcome</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.outcome}</p>
              </div>
            )}

            {event.highlights && (
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Highlights</h3>
                <p className="text-gray-300 leading-relaxed">{event.highlights}</p>
              </div>
            )}

            {event.youtubeLink && (
              <a
                href={event.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Youtube size={20} />
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return EVENTS;
    const query = searchQuery.toLowerCase();
    return EVENTS.filter(event => 
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.date.toLowerCase().includes(query) ||
      (event.activities && event.activities.toLowerCase().includes(query)) ||
      (event.outcome && event.outcome.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const selectedEventData = useMemo(() => {
    if (!selectedEvent) return null;
    return EVENTS.find(e => e.id === selectedEvent) || null;
  }, [selectedEvent]);

  const getEventDetails = (event: typeof EVENTS[0]) => {
    const details: string[] = [];
    if (event.activities) details.push(`Activities: ${event.activities}`);
    if (event.guests && event.guests.length > 0) {
      const guestList = event.guests.map(g => `${g.name} (${g.background})`).join(', ');
      details.push(`Guests: ${guestList}`);
    }
    if (event.outcome) details.push(`Outcome: ${event.outcome}`);
    if (event.highlights) details.push(`Highlights: ${event.highlights}`);
    return details.join('\n\n');
  };

  return (
    <>
      {/* Hide navbar when modal is open */}
      {selectedEvent && (
        <style>{`
          nav { display: none !important; }
        `}</style>
      )}
      
      <div className="pt-24 min-h-screen px-4 sm:px-6 pb-20">
       <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-4">Event <span className="text-orange-500">Chronicles</span></h1>
          <p className="text-gray-400 text-sm sm:text-base">Past conquests and future battlegrounds (2024-2026).</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events by title, description, date..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </motion.div>

        {filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No events found matching your search.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedEvent(event.id)}
              className="cursor-pointer group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 h-full backdrop-blur-sm"
            >
              {/* Image with overlay */}
              <div className="h-80 sm:h-96 overflow-hidden relative bg-slate-950">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white">
                    <Calendar size={14} /> {event.date}
                </div>
              </div>

              <div className="p-6 relative z-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors leading-tight line-clamp-2">{event.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed mb-4">{event.description}</p>
                
                <div className="flex items-center text-sm text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">
                    View Details
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedEventData && (
          <EventModal key={selectedEvent} event={selectedEventData} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Events;
