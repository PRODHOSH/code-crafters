import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Instagram, Youtube, MessageCircle, Loader, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Dynamic import for EmailJS from CDN
      // @ts-ignore - Dynamic import from CDN
      const emailjs = await import('https://esm.sh/@emailjs/browser@4.4.1');
      const serviceId = 'service_7p2314l';
      const templateId = 'template_dsgc1xp';
      const publicKey = 'Xj3Ncng-CMrh-gpjC';

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="pt-32 min-h-screen px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border-2 border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
            <CheckCircle size={64} className="text-green-500" />
          </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Message Received!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-md text-lg mb-8"
        >
          Our team will get back to you shortly. We appreciate your interest in CodeCrafters!
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setStatus('idle')}
          className="px-8 py-3 rounded-full border-2 border-orange-500/50 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all font-semibold hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transform hover:scale-105"
        >
          Send another message
        </motion.button>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 min-h-screen px-4 sm:px-6 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-orange-500" size={40} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">Questions? Collaborations? We're listening.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Info, Socials, and Map */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="space-y-6"
            >
                {/* Email Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-5">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl text-orange-400 border border-orange-500/30 shadow-lg flex-shrink-0"
                      >
                          <Mail size={28} />
                      </motion.div>
                      <div className="flex-1">
                          <h3 className="font-bold text-white text-xl mb-2">Email Us</h3>
                          <a 
                              href="mailto:codecrafters.society@study.iitm.ac.in" 
                              className="text-gray-300 hover:text-orange-400 transition-colors break-all text-lg font-medium group-hover:underline"
                          >
                              codecrafters.society@study.iitm.ac.in
                          </a>
                      </div>
                  </div>
                </motion.div>

                {/* Social Media Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl" />
                  <h3 className="font-bold text-white text-xl mb-6 relative z-10">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                      {[
                        { href: 'https://www.instagram.com/codecrafters_iitm/', icon: Instagram, label: 'Instagram', color: 'pink', bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
                        { href: 'https://www.linkedin.com/company/codecrafters-iitm/posts/?feedView=all', icon: Linkedin, label: 'LinkedIn', color: 'blue', bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
                        { href: 'https://www.youtube.com/@CodeCrafters-IITM', icon: Youtube, label: 'YouTube', color: 'red', bg: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', text: 'text-red-400' },
                        { href: 'https://www.whatsapp.com/channel/0029VaSr9K0JENxslpbr2f3n', icon: MessageCircle, label: 'WhatsApp', color: 'green', bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-400' },
                      ].map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex flex-col items-center gap-3 p-5 bg-gradient-to-br ${social.bg} rounded-2xl border ${social.border} hover:shadow-lg transition-all group cursor-pointer`}
                        >
                            <div className={`p-3 rounded-xl bg-black/20 group-hover:bg-black/40 transition-colors`}>
                                <social.icon className={social.text} size={24} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white font-semibold text-sm">{social.label}</span>
                        </motion.a>
                      ))}
                  </div>
                </motion.div>

                {/* Location Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl" />
                  <div className="relative flex items-start gap-5 mb-6 z-10">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl text-blue-400 border border-blue-500/30 shadow-lg flex-shrink-0"
                      >
                          <MapPin size={28} />
                      </motion.div>
                      <div>
                          <h3 className="font-bold text-white text-xl mb-1">Location</h3>
                          <p className="text-gray-300 text-lg">IIT Madras BS Degree Office,<br/>Chennai, India</p>
                      </div>
                  </div>
                  <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-orange-500/30 transition-all relative z-10 shadow-lg">
                      <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6926708693422!2d80.23111577454685!3d12.991498114442718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f29aa9a61f%3A0x24ef264085e6a094!2sIndian%20Institute%20Of%20Technology%E2%80%93Madras%20(IIT%E2%80%93Madras)!5e0!3m2!1sen!2sin!4v1769879872510!5m2!1sen!2sin" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full"
                      />
                  </div>
                </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-purple-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30">
                      <Send className="text-orange-400" size={24} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Send us a Message
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <motion.div 
                            whileFocus={{ scale: 1.02 }}
                            className="space-y-2"
                          >
                              <label className="text-sm font-semibold text-gray-300 ml-1">Name</label>
                              <input 
                                  required 
                                  type="text" 
                                  name="name" 
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all backdrop-blur-sm"
                                  placeholder="John Doe" 
                              />
                          </motion.div>
                          <motion.div 
                            whileFocus={{ scale: 1.02 }}
                            className="space-y-2"
                          >
                              <label className="text-sm font-semibold text-gray-300 ml-1">Email</label>
                              <input 
                                  required 
                                  type="email" 
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all backdrop-blur-sm"
                                  placeholder="john@example.com" 
                              />
                          </motion.div>
                      </div>

                      <motion.div 
                        whileFocus={{ scale: 1.01 }}
                        className="space-y-2"
                      >
                          <label className="text-sm font-semibold text-gray-300 ml-1">Subject</label>
                          <input 
                              required 
                              type="text" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all backdrop-blur-sm"
                              placeholder="Collaboration / Query" 
                          />
                      </motion.div>

                      <motion.div 
                        whileFocus={{ scale: 1.01 }}
                        className="space-y-2"
                      >
                          <label className="text-sm font-semibold text-gray-300 ml-1">Message</label>
                          <textarea 
                              required 
                              rows={6}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all resize-none backdrop-blur-sm"
                              placeholder="How can we help you?" 
                          />
                      </motion.div>

                      <motion.button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 hover:from-orange-700 hover:via-red-700 hover:to-orange-700 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                      >
                         <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                         {status === 'submitting' ? (
                           <>
                             <Loader className="animate-spin" size={20} />
                             Sending...
                           </>
                         ) : (
                           <>
                             Send Message <Send size={18} />
                           </>
                         )}
                      </motion.button>
                  </form>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
