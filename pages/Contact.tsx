import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="pt-32 min-h-screen px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <CheckCircle size={48} />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Message Received.</h2>
        <p className="text-gray-400 max-w-md">
          Our team will get back to you shortly.
        </p>
        <button 
           onClick={() => setStatus('idle')}
           className="mt-8 px-6 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all font-medium"
        >
           Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen px-6 pb-20">
      <div className="max-w-6xl mx-auto">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Get in <span className="text-orange-500">Touch</span></h1>
          <p className="text-gray-400">Questions? Collaborations? We're listening.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="space-y-8"
            >
                <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                    <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500"><Mail size={24} /></div>
                            <div>
                                <h4 className="font-bold text-gray-200">Email</h4>
                                <p className="text-gray-400">codecrafters@ds.study.iitm.ac.in</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500"><MapPin size={24} /></div>
                            <div>
                                <h4 className="font-bold text-gray-200">Location</h4>
                                <p className="text-gray-400">IIT Madras BS Degree Office,<br/>Chennai, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-600/20 to-purple-600/20 border border-white/10">
                    <h3 className="text-xl font-bold mb-2">Join the Community</h3>
                    <p className="text-gray-400 mb-4 text-sm">Don't miss out on updates. Follow us on our socials.</p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                            <Send size={18} />
                        </div>
                         <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                            <Mail size={18} />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                            <input 
                                required 
                                type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all"
                                placeholder="John Doe" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                            <input 
                                required 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all"
                                placeholder="john@example.com" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                        <input 
                            required 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all"
                            placeholder="Collaboration / Query" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                        <textarea 
                            required 
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all resize-none"
                            placeholder="How can we help you?" 
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all flex items-center justify-center gap-2"
                    >
                       {status === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
