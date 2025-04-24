'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Hier würde normalerweise die API-Anfrage stehen
    // Für jetzt simulieren wir nur eine erfolgreiche Anfrage
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-neutral-900 dark:bg-white mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="group relative bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 text-white dark:text-neutral-900 px-8 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'sending' ? (
                    <>
                      <Send className="w-5 h-5 animate-pulse" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Mail className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neutral-700/80 to-neutral-900 dark:from-white/80 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ scale: status === 'sending' ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 1, repeat: status === 'sending' ? Infinity : 0 }}
                />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; 