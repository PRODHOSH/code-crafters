import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Users, Rocket, Code, Calendar, Heart, Award, Lightbulb, Trophy } from 'lucide-react';

// Floating 3D Code Symbol
const FloatingCodeSymbol = ({ position, shape = 'icosahedron' }: { position: [number, number, number], shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {shape === 'icosahedron' ? (
          <icosahedronGeometry args={[0.5, 0]} />
        ) : (
          <octahedronGeometry args={[0.5, 0]} />
        )}
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Animated Sphere
const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[0.8, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// DNA Helix
const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const spheres = [];
  for (let i = 0; i < 20; i++) {
    const y = (i - 10) * 0.3;
    const angle = (i / 20) * Math.PI * 4;
    const x = Math.cos(angle) * 1.5;
    const z = Math.sin(angle) * 1.5;
    
    spheres.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color={i % 2 === 0 ? "#3b82f6" : "#f97316"}
          emissive={i % 2 === 0 ? "#3b82f6" : "#f97316"}
          emissiveIntensity={0.5}
        />
      </mesh>
    );
  }

  return <group ref={groupRef}>{spheres}</group>;
};

// Animated Torus Knot
const AnimatedTorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#8b5cf6"
        wireframe
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// 3D Scene Component
const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <FloatingCodeSymbol position={[-3, 2, 0]} shape="icosahedron" />
        <FloatingCodeSymbol position={[3, -2, -2]} shape="octahedron" />
        <AnimatedSphere position={[-2, -1, -1]} color="#3b82f6" />
        <AnimatedSphere position={[2.5, 1, -2]} color="#f97316" />
        <DNAHelix />
        <AnimatedTorusKnot />
      </Suspense>
    </Canvas>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1Spring = useSpring(y1, springConfig);
  const y2Spring = useSpring(y2, springConfig);

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24 min-h-screen px-4 sm:px-6 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          style={{ y: y1Spring }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          style={{ y: y2Spring }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{ scale }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent">Who we are</span><motion.span 
              className="text-orange-500"
            >!</motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're the official coding society of IIT Madras BS Degree programs - a thriving hub where 
            passionate developers, designers, and tech enthusiasts come together to learn, build, and innovate. 
            From first-line-of-code beginners to seasoned developers, we're a community united by curiosity and driven by impact.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20"
        >
          {[
            { value: '500+', label: 'Active Members', icon: Users },
            { value: '45+', label: 'Projects Shipped', icon: Code },
            { value: '20+', label: 'Events Annually', icon: Calendar },
            { value: '24/7', label: 'Community Support', icon: Heart }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="text-orange-500" size={24} />
              </motion.div>
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent">What We Do</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            We don't just talk about code - we ship it. Through hands-on workshops, competitive hackathons, 
            collaborative projects, and mentorship programs, we create an ecosystem where ideas transform into reality 
            and skills evolve into careers.
          </motion.p>
        </motion.div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Users,
              title: 'Community Building',
              description: 'Weekly meetups, study groups, and peer mentorship. Because the best way to learn is together.'
            },
            {
              icon: Rocket,
              title: 'Events & Workshops',
              description: 'From beginner-friendly workshops to intense 48-hour hackathons. Learn by doing, compete to grow.'
            },
            {
              icon: Code,
              title: 'Project Development',
              description: 'Real projects with real impact. Build your portfolio while solving problems that matter.'
            },
            {
              icon: Lightbulb,
              title: 'Innovation Lab',
              description: 'Experiment with cutting-edge tech. AI, Web3, Cloud - explore what is next in software.'
            },
            {
              icon: Trophy,
              title: 'Competitive Programming',
              description: 'Sharpen your algorithms. Weekly contests, ICPC prep, and interview practice sessions.'
            },
            {
              icon: Award,
              title: 'Leadership & Growth',
              description: 'Lead teams, organize events, mentor juniors. Develop skills that go beyond code.'
            }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <activity.icon className="text-orange-500" size={28} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {activity.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {activity.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/5 group-hover:border-orange-500/30 transition-all rounded-br-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
