import React from 'react';
import { Linkedin, Instagram, Youtube, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/40 border-t border-white/5 py-12 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="/images/codecrafters_logo.jpg" 
                alt="CodeCrafters Logo" 
                className="w-14 h-14 rounded-xl border-2 border-orange-500/30 object-cover"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=CC&background=f97316&color=fff&font-size=0.5";
                }}
              />
              <div>
                <h2 className="text-2xl font-heading font-bold text-white tracking-tight">CodeCrafters</h2>
                <p className="text-gray-500 text-sm">IIT Madras BS Degree Program</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              The premier technical society of IIT Madras BS Degree. Fostering innovation, collaboration, and technical excellence among students.
            </p>
            <a 
              href="https://ds.study.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-bold transition-colors group"
            >
              IITM Student Portal 
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors flex items-center gap-2">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors flex items-center gap-2">About Us</Link></li>
              <li><Link to="/domains" className="hover:text-orange-500 transition-colors flex items-center gap-2">Domains</Link></li>
              <li><Link to="/events" className="hover:text-orange-500 transition-colors flex items-center gap-2">Events</Link></li>
              <li><Link to="/council" className="hover:text-orange-500 transition-colors flex items-center gap-2">Council</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors flex items-center gap-2">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-6 text-lg">Get in Touch</h3>
            
            <div className="mb-8">
                <a href="mailto:codecrafters.society@study.iitm.ac.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <Mail size={16} />
                    </div>
                    <span className="text-sm">codecrafters.society@study.iitm.ac.in</span>
                </a>
            </div>

            <div className="flex gap-3">
               <SocialLink href="https://www.instagram.com/codecrafters_iitm/" icon={<Instagram size={20} />} hoverColor="hover:bg-pink-600" />
               <SocialLink href="https://www.linkedin.com/company/codecrafters-iitm/posts/?feedView=all" icon={<Linkedin size={20} />} hoverColor="hover:bg-blue-600" />
               <SocialLink href="https://www.youtube.com/@CodeCrafters-IITM" icon={<Youtube size={20} />} hoverColor="hover:bg-red-600" />
               <SocialLink href="https://www.whatsapp.com/channel/0029VaSr9K0JENxslpbr2f3n" icon={<MessageCircle size={20} />} hoverColor="hover:bg-green-500" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} CodeCrafters. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500">
            <p className="text-gray-400 mb-2">Developers of the Website</p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://prodhosh.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                Prodhosh VS
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://portfolio-git-main-nitesh-sharmas-projects-3b96572d.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                Nitesh Sharma
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, hoverColor }: { href: string; icon: React.ReactNode; hoverColor: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 ${hoverColor} hover:text-white transition-all transform hover:-translate-y-1`}
  >
    {icon}
  </a>
);

export default Footer;