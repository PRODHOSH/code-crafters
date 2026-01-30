import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send, Loader } from 'lucide-react';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    domain: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="pt-32 min-h-screen px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6"
        >
          <CheckCircle size={48} />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Application Sent!</h2>
        <p className="text-gray-400 max-w-md">
          Thanks for applying to CodeCrafters. Keep an eye on your email for the next steps.
        </p>
        <button 
           onClick={() => setStatus('idle')}
           className="mt-8 text-orange-500 hover:text-orange-400 font-medium"
        >
           Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen px-6 pb-20 flex items-center justify-center">
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500" />
           
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Join the Elite</h1>
            <p className="text-gray-400">Ready to level up? Fill in your details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Student Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="21f1000001@ds.study.iitm.ac.in"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Year</label>
                <select
                  required
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all appearance-none"
                >
                  <option value="" disabled>Select Year</option>
                  <option value="Foundation">Foundation</option>
                  <option value="Diploma">Diploma</option>
                  <option value="BSc">BSc</option>
                  <option value="BS">BS</option>
                </select>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-300 ml-1">Interest</label>
                <select
                  required
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all appearance-none"
                >
                  <option value="" disabled>Select Domain</option>
                  <option value="Web">Web Dev</option>
                  <option value="App">App Dev</option>
                  <option value="AI">AI / ML</option>
                  <option value="CP">Competitive Programming</option>
                  <option value="Design">UI / UX</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4"
            >
              {status === 'submitting' ? (
                <>
                  <Loader className="animate-spin" size={20} /> Processing...
                </>
              ) : (
                <>
                  Submit Application <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
