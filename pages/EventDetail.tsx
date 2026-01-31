import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EVENTS } from '../constants';
import { Calendar, Users, Trophy, ArrowLeft, Youtube, ExternalLink } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = EVENTS.find(e => e.id === id);

  if (!event) {
    return (
      <div className="pt-32 min-h-screen px-4 sm:px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
        <Link to="/events" className="text-orange-500 hover:text-orange-400">
          ← Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 min-h-screen pb-16 sm:pb-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={() => navigate('/events')}
          className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Events</span>
        </button>
      </div>

      {/* Hero Section with Image */}
      <div className="relative h-[40vh] sm:h-[50vh] mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
              <div className="flex items-center gap-2 bg-orange-500 px-4 py-1.5 rounded-full">
                <Calendar size={16} className="text-white" />
                <span className="font-bold text-white text-sm">{event.date}</span>
              </div>
              {event.registrations && (
                <div className="flex items-center gap-2 bg-green-500 px-4 py-1.5 rounded-full">
                  <Users size={16} className="text-white" />
                  <span className="font-bold text-white text-sm">{event.registrations} Registrations</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-slate-800/50 to-transparent p-6 sm:p-8 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-orange-500" size={28} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Overview</h2>
          </div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {event.description}
          </p>
        </motion.section>

        {/* Activities */}
        {event.activities && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/20 to-transparent p-6 sm:p-8 rounded-2xl border border-blue-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">Activities & Highlights</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {event.activities}
            </p>
          </motion.section>
        )}

        {/* Highlights */}
        {event.highlights && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-gradient-to-br from-purple-900/20 to-transparent p-6 sm:p-8 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">Key Highlights</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {event.highlights}
            </p>
          </motion.section>
        )}

        {/* Distinguished Guests */}
        {event.guests && event.guests.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
              <Users size={28} />
              Distinguished Guests
            </h2>
            <div className="grid gap-6">
              {event.guests.map((guest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-gradient-to-r from-slate-800/70 to-slate-800/30 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <h3 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    {guest.name}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed pl-4">
                    {guest.background}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Outcome & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-green-900/20 to-transparent p-6 sm:p-8 rounded-2xl border border-green-500/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Outcome & Impact</h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {event.outcome}
          </p>
        </motion.section>

        {/* YouTube Link */}
        {event.youtubeLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center pt-4"
          >
            <a
              href={event.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-base sm:text-lg"
            >
              <Youtube size={24} />
              Watch Session Recording
              <ExternalLink size={20} />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
