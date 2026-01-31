import React from 'react';
import { motion } from 'framer-motion';
import { EVENTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
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
            <Link
              key={event.id}
              to={`/events/${event.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="cursor-pointer group relative bg-slate-900 border border-white/5 hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 h-full"
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
                  
                  <div className="flex items-center text-sm text-orange-500 font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
