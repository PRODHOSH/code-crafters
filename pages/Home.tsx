import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Users, Calendar, Linkedin, Github, Shield, Code2, Video, Megaphone, Settings, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENTS, COUNCIL } from '../constants';

const departments = [
  {
    id: 1,
    name: 'WebOps, Coding & Cybersecurity',
    description: 'Building robust systems, secure applications, and cutting-edge solutions',
    icon: Code2,
    iconColor: 'text-blue-400',
    iconHoverColor: 'group-hover:text-blue-300',
    titleHoverColor: 'group-hover:text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    bgGradient: 'from-blue-600/20 via-cyan-500/20 to-blue-800/20'
  },
  {
    id: 2,
    name: 'Multimedia',
    description: 'Creating stunning visuals, engaging content, and immersive experiences',
    icon: Video,
    iconColor: 'text-purple-400',
    iconHoverColor: 'group-hover:text-purple-300',
    titleHoverColor: 'group-hover:text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
    bgGradient: 'from-purple-600/20 via-pink-500/20 to-purple-800/20'
  },
  {
    id: 3,
    name: 'PR, Outreach & Sponsorship',
    description: 'Building connections, partnerships, and amplifying our impact',
    icon: Megaphone,
    iconColor: 'text-green-400',
    iconHoverColor: 'group-hover:text-green-300',
    titleHoverColor: 'group-hover:text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/30',
    bgGradient: 'from-green-600/20 via-emerald-500/20 to-green-800/20'
  },
  {
    id: 4,
    name: 'Core',
    description: 'The foundation that drives our vision and coordinates our mission',
    icon: Settings,
    iconColor: 'text-orange-400',
    iconHoverColor: 'group-hover:text-orange-300',
    titleHoverColor: 'group-hover:text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30',
    bgGradient: 'from-orange-600/20 via-red-500/20 to-orange-800/20'
  }
];

const DepartmentCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  //const [isPaused, setIsPaused] = React.useState(false);

  // Duplicate departments for seamless infinite loop (need at least 2 sets)
  const duplicatedDepartments = [...departments, ...departments];

  useEffect(() => {
    const carousel = carouselRef.current;
    const inner = innerRef.current;
    if (!carousel || !inner) return;

    const cardWidth = 380;
    const gap = 32;
    const setWidth = departments.length * (cardWidth + gap);

    let animationId: number;
    let translateX = 0;
    const scrollSpeed = 1.5; // Faster scroll speed

    const animate = () => {
      translateX -= scrollSpeed;
      
      if (Math.abs(translateX) >= setWidth) {
        translateX = 0;
      }
      
      if (inner) {
        inner.style.transform = `translateX(${translateX}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
      <div 
        className="relative overflow-hidden py-16"
      >
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050b14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050b14] to-transparent z-10 pointer-events-none" />
      
      <div
        ref={carouselRef}
        className="overflow-hidden scrollbar-hide py-48"
        style={{ 
          pointerEvents: 'none',
          userSelect: 'none',
          touchAction: 'none'
        }}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        <div
          ref={innerRef}
          className="flex gap-8"
          style={{ willChange: 'transform', pointerEvents: 'none' }}
        >
          {duplicatedDepartments.map((dept, index) => {
            const IconComponent = dept.icon;
            // Alternate cards up and down - index 0 down, index 1 up, index 2 down, etc.
            const isEven = index % 2 === 0;
            const offsetY = isEven ? 24 : -24; // One card down, one card up - more visible offset
            
            // Unique styling for each department
            const getCardStyle = (deptId: number) => {
              switch(deptId) {
                case 1: // WebOps, Coding & Cybersecurity
                  return {
                    borderColor: 'border-blue-500/30',
                    iconBg: 'bg-blue-500/20',
                    iconBorder: 'border-blue-500/40',
                    accentColor: 'blue-500',
                    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
                    iconShape: 'rounded-xl',
                    glowColor: 'shadow-blue-500/20'
                  };
                case 2: // Multimedia
                  return {
                    borderColor: 'border-purple-500/30',
                    iconBg: 'bg-purple-500/20',
                    iconBorder: 'border-purple-500/40',
                    accentColor: 'purple-500',
                    gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
                    iconShape: 'rounded-xl',
                    glowColor: 'shadow-purple-500/20'
                  };
                case 3: // PR, Outreach & Sponsorship
                  return {
                    borderColor: 'border-green-500/30',
                    iconBg: 'bg-green-500/20',
                    iconBorder: 'border-green-500/40',
                    accentColor: 'green-500',
                    gradient: 'from-green-500/10 via-green-500/5 to-transparent',
                    iconShape: 'rounded-xl',
                    glowColor: 'shadow-green-500/20'
                  };
                case 4: // Core
                  return {
                    borderColor: 'border-orange-500/30',
                    iconBg: 'bg-orange-500/20',
                    iconBorder: 'border-orange-500/40',
                    accentColor: 'orange-500',
                    gradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
                    iconShape: 'rounded-xl',
                    glowColor: 'shadow-orange-500/20'
                  };
                default:
                  return {
                    borderColor: 'border-white/10',
                    iconBg: 'bg-slate-900/50',
                    iconBorder: 'border-white/10',
                    accentColor: 'white',
                    gradient: 'from-transparent to-transparent',
                    iconShape: 'rounded-xl',
                    glowColor: 'shadow-white/10'
                  };
              }
            };
            
            const cardStyle = getCardStyle(dept.id);
            
            return (
              <div
                key={`${dept.id}-${index}`}
                className="flex-shrink-0 w-[380px] group"
                style={{ transform: `translateY(${offsetY}px)`, pointerEvents: 'auto' }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative h-80 bg-black rounded-2xl border ${cardStyle.borderColor} shadow-2xl p-6 flex flex-col hover:border-opacity-50 transition-all duration-300 overflow-hidden`}
                  style={{
                    boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px ${dept.id === 1 ? 'rgba(59, 130, 246, 0.2)' : dept.id === 2 ? 'rgba(168, 85, 247, 0.2)' : dept.id === 3 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(249, 115, 22, 0.2)'}`
                  }}
                >
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardStyle.gradient} pointer-events-none`} />
                  
                  {/* Icon/Logo at top left - unique styling per department */}
                  <div className="mb-4 relative z-10">
                    <div className={`w-16 h-16 ${cardStyle.iconShape} ${cardStyle.iconBg} border ${cardStyle.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3 shadow-lg group-hover:shadow-xl`}>
                      <IconComponent 
                        size={32} 
                        className={`${dept.iconColor} ${dept.iconHoverColor} transition-colors`}
                      />
                    </div>
                    {/* Department Name - same font as "Our Departments" */}
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                      {dept.name}
                    </h3>
                    {/* Description as subtitle */}
                    <p className="text-gray-400 text-sm mb-4">
                      {dept.description}
                    </p>
                  </div>
                  
                  {/* Additional content area - matching testimonial text area */}
                  <div className="flex-1 flex items-start mb-4 relative z-10">
                    <p className="text-white text-sm leading-relaxed">
                      Building innovative solutions and driving technical excellence across all domains.
                    </p>
                  </div>
                  
                  {/* Five green stars at the bottom */}
                  <div className="flex gap-1 mt-auto relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-green-500 text-green-500"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const recentEvents = EVENTS.slice(0, 4);
  const coreCouncil = COUNCIL.slice(0, 4);

  return (
    <div className="relative pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs md:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm tracking-widest uppercase">
              IIT Madras BS Degree's Premier Tech Club
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-none mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl tracking-tighter px-2">
              CODE<span className="text-orange-500">CRAFTERS</span>
            </h1>
             <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Engineering the <span className="text-white font-semibold">Future</span>. 
              Architecting the <span className="text-white font-semibold">Unknown</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                to="/join"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all flex items-center justify-center gap-2 group transform hover:scale-105"
              >
                Join the Elite
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8">
                Where Passion Meets <span className="text-orange-500">Innovation</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                CodeCrafters isn't just a club; it's a launchpad. We bridge the gap between academic theory and industry reality through rigorous project work, competitive hackathons, and a culture of peer-to-peer mentorship.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-4 border-orange-500 pl-4 sm:pl-6">
                "We don't just write code; we craft experiences."
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-[60px] sm:blur-[80px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-700" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl hover:border-orange-500/30 transition-colors">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 bg-blue-500/10 rounded-xl sm:rounded-2xl text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <Terminal size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Hands-on Learning</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Real-world projects that scale.</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 bg-green-500/10 rounded-xl sm:rounded-2xl text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      <Cpu size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Technical Excellence</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Cutting-edge stacks & tools.</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 bg-orange-500/10 rounded-xl sm:rounded-2xl text-orange-400 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                      <Users size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Elite Community</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Network with the best.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Section - Logo Loop */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
              Our <span className="text-orange-500">Departments</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Where expertise meets innovation</p>
          </motion.div>

          <DepartmentCarousel />
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-black/20">
         <div className="max-w-7xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6"
            >
               <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">Recent <span className="text-orange-500">Highlights</span></h2>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl">See what we've been up to lately. From hackathons to workshops, we never stop building.</p>
               </div>
               <Link to="/events" className="flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all text-sm sm:text-base">
                  View All Events <ArrowRight size={18} className="sm:w-5 sm:h-5" />
               </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
               {recentEvents.map((event, idx) => (
                  <motion.div
                     key={event.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="group relative h-80 sm:h-96 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
                  >
                     <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                     <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                        <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                           <Calendar size={12} className="sm:w-3.5 sm:h-3.5" /> {event.date}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight line-clamp-2">{event.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                           {event.description}
                        </p>
                        <div className="h-1 w-12 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500" />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Core Council Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12 sm:mb-16"
            >
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">Meet the <span className="text-orange-500">Core</span></h2>
               <p className="text-gray-400 text-sm sm:text-base">The visionaries leading the charge.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
               {coreCouncil.map((member, idx) => (
                  <motion.div
                     key={member.id}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="group relative bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
                  >
                     <div className="aspect-[4/5] overflow-hidden">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                     <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-orange-500 font-medium text-sm mb-4">{member.role}</p>
                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                           <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
                           <a href="#" className="text-gray-400 hover:text-white"><Github size={18} /></a>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
             <div className="text-center mt-12">
               <Link to="/council" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-widest">
                  Meet the full team <ArrowRight size={16} />
               </Link>
            </div>
         </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 right-8 z-40 hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <Link
          to="/join"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-110 transition-transform cursor-pointer"
        >
          <ArrowRight className="text-white" size={24} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
