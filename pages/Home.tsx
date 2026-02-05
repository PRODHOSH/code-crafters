import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Users, Calendar, Linkedin, Github, Shield, Code2, Video, Megaphone, Settings, Instagram, Youtube, MessageCircle, ChevronDown, ArrowUp } from 'lucide-react';
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
        className="relative overflow-hidden"
      >
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050b14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050b14] to-transparent z-10 pointer-events-none" />
      
      <div
        ref={carouselRef}
        className="overflow-hidden scrollbar-hide py-4"
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
                  className={`relative h-80 bg-black rounded-2xl border ${cardStyle.borderColor} shadow-2xl p-6 sm:p-7 flex flex-col hover:border-opacity-50 transition-all duration-300 overflow-hidden`}
                  style={{
                    boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px ${dept.id === 1 ? 'rgba(59, 130, 246, 0.2)' : dept.id === 2 ? 'rgba(168, 85, 247, 0.2)' : dept.id === 3 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(249, 115, 22, 0.2)'}`
                  }}
                >
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardStyle.gradient} pointer-events-none`} />
                  
                  {/* Icon/Logo at top left - unique styling per department */}
                  <div className="mb-2 relative z-10">
                    <div className={`w-16 h-16 ${cardStyle.iconShape} ${cardStyle.iconBg} border ${cardStyle.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-2 shadow-lg group-hover:shadow-xl`}>
                      <IconComponent 
                        size={32} 
                        className={`${dept.iconColor} ${dept.iconHoverColor} transition-colors`}
                      />
                    </div>
                    {/* Department Name - same font as "Our Departments" */}
                    <h3 className={`font-heading font-bold text-white mb-1 leading-tight ${dept.id === 1 ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
                      {dept.name}
                    </h3>
                    {/* Description as subtitle */}
                    <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                  
                  {/* Additional content area - unique for each department */}
                  <div className="flex-1 flex items-start mb-2 relative z-10 min-h-0">
                    <p className="text-white text-sm leading-relaxed">
                      {dept.id === 1 
                        ? "We develop secure web applications, manage cloud infrastructure, and protect systems from cyber threats. Join us to master DevOps, full-stack development, and cybersecurity."
                        : dept.id === 2
                        ? "We create compelling visual content, design graphics, produce videos, and craft engaging multimedia experiences. Perfect for creative minds passionate about digital media."
                        : dept.id === 3
                        ? "We build partnerships, manage sponsorships, handle public relations, and expand our community reach. Connect with industry leaders and grow our network together."
                        : "We coordinate operations, manage resources, and ensure smooth execution of all club activities. The backbone that keeps everything running seamlessly."
                      }
                    </p>
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

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all transform hover:scale-110 border border-orange-400/30"
        >
          <ArrowUp className="text-white" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Home: React.FC = () => {
  const recentEvents = EVENTS.slice(0, 4);
  // Filter only Core members
  const coreCouncil = COUNCIL.filter(member => 
    member.role.toLowerCase().includes('core')
  ).slice(0, 3);
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Video Background - covers navbar area too */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ 
            filter: 'brightness(2) contrast(1.2)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <source src="/videos/hero-section.mp4" type="video/mp4" />
        </video>
        {/* Lighter overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>
        
        <div className="max-w-6xl mx-auto text-center z-10 relative pt-32 sm:pt-40">
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
            
            {/* Connect with Us in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 sm:mt-12"
            >
              
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <motion.a
                  href="https://www.instagram.com/codecrafters_iitm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500/30 hover:border-pink-500/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
                >
                  <Instagram size={24} className="sm:w-7 sm:h-7" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/company/codecrafters-iitm/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  <Linkedin size={24} className="sm:w-7 sm:h-7" />
                </motion.a>
                
                <motion.a
                  href="https://www.youtube.com/@CodeCrafters-IITM"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  <Youtube size={24} className="sm:w-7 sm:h-7" />
                </motion.a>
                
                <motion.a
                  href="https://www.whatsapp.com/channel/0029VaSr9K0JENxslpbr2f3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
                >
                  <MessageCircle size={24} className="sm:w-7 sm:h-7" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8">
                Where Passion Meets <span className="text-orange-500">Innovation</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                CodeCrafters isn't just a club; it's a launchpad. We bridge the gap between academic theory and industry reality through rigorous project work, competitive hackathons, and a culture of peer-to-peer mentorship.
              </p>
              <motion.p 
                className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-4 border-orange-500 pl-4 sm:pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                "We don't just write code; we craft experiences."
              </motion.p>
            </motion.div>
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-[60px] sm:blur-[80px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-700" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl hover:border-orange-500/30 transition-colors">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-4 sm:gap-6"
                  >
                    <div className="p-3 sm:p-4 bg-blue-500/10 rounded-xl sm:rounded-2xl text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <Terminal size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Hands-on Learning</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Real-world projects that scale.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-4 sm:gap-6"
                  >
                    <div className="p-3 sm:p-4 bg-green-500/10 rounded-xl sm:rounded-2xl text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      <Cpu size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Technical Excellence</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Cutting-edge stacks & tools.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-4 sm:gap-6"
                  >
                    <div className="p-3 sm:p-4 bg-orange-500/10 rounded-xl sm:rounded-2xl text-orange-400 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                      <Users size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Elite Community</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Network with the best.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Departments Section - Logo Loop */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">
              Our <span className="text-orange-500">Departments</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Where expertise meets innovation</p>
          </motion.div>

          <DepartmentCarousel />
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10 bg-black/20">
         <div className="max-w-7xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               transition={{ duration: 0.6, ease: "easeOut" }}
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
                     initial={{ opacity: 0, y: 60, scale: 0.9 }}
                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
                     viewport={{ once: false, margin: "-50px" }}
                     transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               transition={{ duration: 0.7, ease: "easeOut" }}
               className="text-center mb-10 sm:mb-12"
            >
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">Meet the <span className="text-orange-500">Core</span></h2>
               <p className="text-gray-400 text-sm sm:text-base">The visionaries leading the charge.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-5xl mx-auto">
               {coreCouncil.map((member, idx) => (
                  <motion.div
                     key={member.id}
                     initial={{ opacity: 0, scale: 0.8, y: 40 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     viewport={{ once: false, margin: "-50px" }}
                     transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
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
                           {member.linkedin && (
                              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                 <Linkedin size={18} />
                              </a>
                           )}
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

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-black/20 via-slate-900/30 to-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Everything you need to know about CodeCrafters</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How do I join CodeCrafters?",
                answer: "You can join CodeCrafters by clicking the 'Join Us' button in the navigation bar or visiting our join page. We welcome all IITM BS Degree students who are passionate about technology and innovation."
              },
              {
                question: "What are the different departments?",
                answer: "We have four main departments: WebOps, Coding & Cybersecurity (building secure systems), Multimedia (creating visual content), PR, Outreach & Sponsorship (building partnerships), and Core (managing operations)."
              },
              {
                question: "Do I need prior experience to join?",
                answer: "No prior experience is required! We welcome students at all skill levels. Our community is built on learning, collaboration, and peer-to-peer mentorship."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="bg-slate-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-gray-400" size={24} />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedFAQ === index ? 'auto' : 0,
                    opacity: expandedFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
