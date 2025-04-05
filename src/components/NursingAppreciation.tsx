import React from 'react';
import { Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const NursingAppreciation: React.FC = () => {
  return (
    <section id="nursing" className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heart className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Your Healing Touch</h2>
          <p className="text-2xl text-gray-700">The power of your care and dedication</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Star className="h-12 w-12 text-yellow-500" />
            </div>
            <p className="text-gray-700 text-xl text-center leading-relaxed italic">
              "Every time you talk about your day, I can hear the passion in your voice. 
              From comforting patients in pain to taking the time to make them feel safe, 
              your healing touch extends far beyond just medicine. It's in your kindness, 
              your empathy, and your unrelenting desire to help others."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Nursing"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              Hearing about how you impact lives gives me even more respect for you 
              and reminds me of the powerful, beautiful person you are. Your strength 
              and resilience in caring for others makes me proud to know you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-200 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-200 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
};