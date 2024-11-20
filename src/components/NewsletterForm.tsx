import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Trends</h2>
          <p className="text-indigo-100 mb-8">
            Get weekly insights about the latest AI tools and technologies.
            Join 5,000+ subscribers who stay ahead in the AI revolution.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-200 flex items-center justify-center"
            >
              Subscribe
              {status === 'idle' && <ArrowRight className="w-4 h-4 ml-2" />}
              {status === 'success' && <CheckCircle className="w-4 h-4 ml-2" />}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="mt-4 text-sm text-indigo-100">
              Thanks for subscribing! Check your email for confirmation.
            </p>
          )}
          
          <p className="mt-4 text-xs text-indigo-200">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;