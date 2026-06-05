import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Newsletter(): JSX.Element {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary to-primaryLight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/80 font-sans mb-8 max-w-2xl mx-auto">
            Get the latest insights on HR trends, organizational development, and workplace transformation delivered to your inbox.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-gray-600 font-sans">
                  You've been subscribed to our newsletter. Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-sans font-medium text-gray-700 mb-2 text-left">
                    Email Address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-sans"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent text-white px-6 py-3 rounded-xl font-display font-semibold hover:bg-primary transition-colors disabled:opacity-50 whitespace-nowrap"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm font-sans text-left">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            )}
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-sans">No spam, ever</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-sans">Unsubscribe anytime</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-sans">Weekly insights</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}