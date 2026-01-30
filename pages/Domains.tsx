import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOMAINS } from '../constants';
import * as Icons from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, TorusKnot, MeshDistortMaterial, RoundedBox, Icosahedron, Line, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Global type augmentation for React Three Fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshBasicMaterial: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      meshNormalMaterial: any;
      boxGeometry: any;
      sphereGeometry: any;
      torusKnotGeometry: any;
      cylinderGeometry: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

// --- 3D SCENES ---

// 1. Web Dev: Abstract "Building Blocks"
const WebScene = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Main layout container representation */}
        <Box args={[2.5, 1.5, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1e293b" transparent opacity={0.8} />
        </Box>
        {/* Floating "Elements" */}
        <Box args={[0.8, 0.8, 0.2]} position={[-0.7, 0, 0.3]}>
           <meshStandardMaterial color="#f97316" />
        </Box>
        <Box args={[1.2, 0.3, 0.2]} position={[0.5, 0.4, 0.3]}>
           <meshStandardMaterial color="#3b82f6" />
        </Box>
        <Box args={[1.2, 0.3, 0.2]} position={[0.5, -0.4, 0.3]}>
           <meshStandardMaterial color="#3b82f6" />
        </Box>
        {/* Connecting lines simulating DOM tree/structure */}
        <Line points={[[-1, -1, -1], [1, 1, 1]]} color="white" transparent opacity={0.2} />
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
};

// 2. App Dev: Mobile Interface
const AppScene = () => {
  return (
    <group>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <RoundedBox args={[1.5, 3, 0.2]} radius={0.1} smoothness={4} position={[0, 0, 0]}>
           <meshPhysicalMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
        </RoundedBox>
        {/* Screen */}
        <Box args={[1.3, 2.8, 0.05]} position={[0, 0, 0.11]}>
           <meshStandardMaterial color="#000" emissive="#111" />
        </Box>
        {/* App Icons */}
        <RoundedBox args={[0.3, 0.3, 0.05]} radius={0.05} position={[-0.3, 0.5, 0.15]}>
           <meshStandardMaterial color="#f97316" />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.3, 0.05]} radius={0.05} position={[0.3, 0.5, 0.15]}>
           <meshStandardMaterial color="#3b82f6" />
        </RoundedBox>
         <RoundedBox args={[0.3, 0.3, 0.05]} radius={0.05} position={[-0.3, 0, 0.15]}>
           <meshStandardMaterial color="#10b981" />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.3, 0.05]} radius={0.05} position={[0.3, 0, 0.15]}>
           <meshStandardMaterial color="#8b5cf6" />
        </RoundedBox>
      </Float>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
    </group>
  );
};

// 3. AI/ML: Neural Network Nodes
const AIScene = () => {
  const points = useMemo(() => {
    const p = [];
    for(let i=0; i<15; i++) {
        p.push(new THREE.Vector3((Math.random()-0.5)*4, (Math.random()-0.5)*4, (Math.random()-0.5)*4));
    }
    return p;
  }, []);

  return (
    <group>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        {points.map((pos, i) => (
           <Sphere key={i} args={[0.08, 16, 16]} position={pos}>
              <meshStandardMaterial color={i % 2 === 0 ? "#f97316" : "#3b82f6"} emissive={i % 2 === 0 ? "#f97316" : "#3b82f6"} emissiveIntensity={2} />
           </Sphere>
        ))}
        {/* Connections */}
        <Line points={points} color="#ffffff" transparent opacity={0.15} lineWidth={1} />
      </Float>
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade />
    </group>
  );
};

// 4. Competitive Programming: Sorting/Algorithms
const CPScene = () => {
  const bars = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if(bars.current) {
        bars.current.children.forEach((child: any, i) => {
            // Simple sin wave animation simulating sorting or data processing
            child.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.5;
        });
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
         <group ref={bars} position={[-1.5, 0, 0]}>
            {[...Array(7)].map((_, i) => (
                <Box key={i} args={[0.3, 2, 0.3]} position={[i * 0.5, 0, 0]}>
                    <meshStandardMaterial color={i === 3 ? "#f97316" : "#475569"} />
                </Box>
            ))}
         </group>
      </Float>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
    </group>
  );
};

// 5. UI/UX: Fluid Shapes & Glass
const UIUXScene = () => {
  return (
    <group>
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                 <MeshDistortMaterial color="#f97316" speed={2} distort={0.4} radius={1} />
            </Sphere>
            <TorusKnot args={[0.8, 0.2, 100, 16]} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
                 <meshPhysicalMaterial 
                    color="#ffffff" 
                    transmission={0.9} 
                    roughness={0} 
                    thickness={1}
                    transparent
                 />
            </TorusKnot>
        </Float>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#f97316" intensity={0.5} />
    </group>
  );
};

// 6. Cyber: Shield/Matrix
const CyberScene = () => {
    return (
        <group>
            <Float speed={5} rotationIntensity={2} floatIntensity={0.2}>
                <Icosahedron args={[1.5, 1]} position={[0, 0, 0]}>
                    <meshBasicMaterial color="#10b981" wireframe />
                </Icosahedron>
                <Icosahedron args={[1.2, 0]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#000000" />
                </Icosahedron>
            </Float>
             <ambientLight intensity={0.5} />
             <pointLight position={[0, 0, 5]} color="#10b981" intensity={2} />
        </group>
    )
}

const DomainSceneSelector = ({ id }: { id: string }) => {
    switch(id) {
        case 'web': return <WebScene />;
        case 'app': return <AppScene />;
        case 'ai': return <AIScene />;
        case 'cp': return <CPScene />;
        case 'uiux': return <UIUXScene />;
        case 'cyber': return <CyberScene />;
        default: return <Box />;
    }
}

// --- MAIN COMPONENT ---

const Domains: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Explore Our <span className="text-orange-500">Domains</span></h1>
          <p className="text-gray-400">Find your niche. Master your craft.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOMAINS.map((domain) => {
            const IconComponent = (Icons as any)[domain.icon] || Icons.Code;
            
            return (
              <motion.div
                key={domain.id}
                layoutId={domain.id}
                onClick={() => setSelectedId(domain.id)}
                className="group relative cursor-pointer perspective-1000"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                    scale: 1.02, 
                    rotateX: 2, 
                    rotateY: 2,
                    transition: { type: "spring", stiffness: 300 } 
                }}
              >
                {/* Techy Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
                
                <div className="relative h-full bg-slate-900 border border-white/10 p-8 rounded-2xl overflow-hidden hover:bg-slate-800 transition-colors shadow-2xl flex flex-col justify-between">
                   {/* Background Grid Pattern */}
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   
                   <div>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-orange-500 mb-6 group-hover:text-white group-hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <IconComponent size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-wide">{domain.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{domain.description}</p>
                   </div>
                   
                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs font-mono text-gray-500 group-hover:text-orange-400 transition-colors">ACCESS_MODULE_0{DOMAINS.indexOf(domain)+1}</span>
                    <div className="flex items-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                        INIT <Icons.Zap size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
               {/* Backdrop */}
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              />
              
              {/* Modal Card */}
              <motion.div
                layoutId={selectedId}
                className="relative w-full max-w-6xl h-[85vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.1)] flex flex-col md:flex-row"
              >
                 {(() => {
                   const domain = DOMAINS.find(d => d.id === selectedId)!;
                   const IconComponent = (Icons as any)[domain.icon] || Icons.Code;
                   return (
                     <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-colors"
                        >
                          <Icons.X size={24} />
                        </button>
                        
                        {/* Left: Content */}
                        <div className="w-full md:w-1/3 p-10 flex flex-col justify-center relative z-20 bg-slate-900/80 backdrop-blur-sm border-r border-white/5">
                             <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-8 shadow-lg shadow-orange-500/10">
                                <IconComponent size={40} />
                             </div>
                             <h2 className="text-4xl font-heading font-black mb-6 text-white tracking-tight">{domain.title}</h2>
                             <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                                {domain.detailedDescription}
                             </p>
                             
                             <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Skill Progression</h4>
                                    <div className="flex gap-2">
                                        {['Novice', 'Apprentice', 'Master'].map((level, i) => (
                                            <div key={level} className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-orange-500" style={{ width: `${(i+1)*33}%`, opacity: (i+1)*0.3 + 0.1 }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Frontend', 'Backend', 'System Design'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-md border border-white/10 text-xs text-gray-300 bg-black/20 font-mono">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                             </div>

                             <button className="mt-auto py-4 px-6 bg-gradient-to-r from-white to-gray-300 text-black font-bold rounded-xl hover:from-orange-500 hover:to-red-500 hover:text-white transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-between group">
                                Start Learning Track
                                <Icons.ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                             </button>
                        </div>

                        {/* Right: 3D Scene */}
                        <div className="w-full md:w-2/3 relative bg-black">
                             <div className="absolute inset-0">
                                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                    <DomainSceneSelector id={domain.id} />
                                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                                </Canvas>
                             </div>
                             <div className="absolute bottom-6 left-6 right-6 text-center pointer-events-none">
                                <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">Interactive Simulation // Rotation Enabled</p>
                             </div>
                        </div>
                     </>
                   );
                 })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Domains;