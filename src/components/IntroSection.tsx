import React from 'react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Parallax } from 'react-parallax';

export const IntroSection: React.FC = () => {
  const scrollToJourney = () => {
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      bgImageAlt="romantic background"
      strength={200}
      className="min-h-screen"
    >
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50/90 to-blue-50/90 backdrop-blur-sm py-20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.2, 1.2, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Sparkles className="h-16 w-16 text-rose-500 mx-auto mb-8" />
          </motion.div>
          
          <TypeAnimation
            sequence={[
              'To My Dearest...',
              1000,
              'To My Special One...',
              1000,
              'To My Everything...',
              1000,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-indigo-500"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl text-gray-700 mb-12 leading-relaxed"
          >
            Every moment with you feels like a beautiful adventure. From our gaming sessions to
            watching you cook with passion, and admiring your dedication as a nurse - you inspire
            me in countless ways.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToJourney}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
            <Heart className="h-6 w-6 mr-2" />
            Begin Our Journey
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToJourney}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>

        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                y: [null, -500],
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Heart className={`h-${Math.floor(Math.random() * 4) + 4} w-${Math.floor(Math.random() * 4) + 4} text-rose-${Math.floor(Math.random() * 3) + 3}00/20`} />
            </motion.div>
          ))}
        </div>
      </section>
    </Parallax>
  );
};