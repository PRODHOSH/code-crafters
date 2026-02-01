import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import { Code2, Users, Rocket, Target, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen px-4 sm:px-6 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <Sparkles className="text-orange-500" size={48} />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            About <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient">CodeCrafters</span>
          </h1>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 sm:mb-20"
        >
          <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                <span className="text-orange-400 font-bold">CodeCrafters</span> is the official coding and development society for students of the BS Degree programs at IIT Madras.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                We are a vibrant community of tech enthusiasts, problem solvers, and aspiring developers passionate about <span className="text-orange-400 font-semibold">competitive programming</span>, <span className="text-blue-400 font-semibold">web development</span>, <span className="text-purple-400 font-semibold">data science</span>, <span className="text-green-400 font-semibold">AI</span>, <span className="text-red-400 font-semibold">cybersecurity</span> and more.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}</h3>
                <p className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {[
            {
              icon: Code2,
              title: 'Technical Excellence',
              description: 'Master cutting-edge technologies and frameworks through hands-on projects and real-world applications.',
              gradient: 'from-blue-500/20 to-cyan-500/20',
              border: 'border-blue-500/30',
              iconColor: 'text-blue-400',
            },
            {
              icon: Users,
              title: 'Vibrant Community',
              description: 'Connect with like-minded developers, collaborate on projects, and build lasting professional relationships.',
              gradient: 'from-purple-500/20 to-pink-500/20',
              border: 'border-purple-500/30',
              iconColor: 'text-purple-400',
            },
            {
              icon: Rocket,
              title: 'Innovation Hub',
              description: 'Transform ideas into reality through hackathons, workshops, and collaborative coding sessions.',
              gradient: 'from-orange-500/20 to-red-500/20',
              border: 'border-orange-500/30',
              iconColor: 'text-orange-400',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-xl p-6 sm:p-8 rounded-3xl border ${feature.border} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 bg-black/20 rounded-2xl ${feature.border} border mb-6`}
                >
                  <feature.icon className={feature.iconColor} size={32} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
