import React, { useState } from 'react';
import { GamepadIcon, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const milestones = [
  {
    id: '1',
    title: 'Teaching You to Play',
    date: 'The Beginning',
    description: `I remember the first time I introduced you to Call of Duty Mobile. You were new to gaming, and I was excited to teach you how to play. At first, I wasn't sure how it would go, but you picked it up so quickly! I walked you through the basics—how to aim, how to move, and how to use the different weapons. The best part was seeing you take it all in and get better with every match.`,
    icon: '🎮'
  },
  {
    id: '2',
    title: 'From Student to Teammate',
    date: 'Our Evolution',
    description: `As we played more together, it was amazing to see how much you'd improved. You started to develop your own strategies, and soon we were working as a team. Watching you get comfortable with the game, taking the lead sometimes, and making smart moves—it was a great reminder that we're always growing together.`,
    icon: '🏆'
  }
];

export const GamingJourney: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);

  return (
    <section id="journey" className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GamepadIcon className="h-16 w-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Gaming Journey</h2>
          <p className="text-2xl text-gray-700">Level up through our most precious moments together</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-8 rounded-2xl bg-white shadow-xl transform transition-all hover:scale-105 cursor-pointer
                ${activeMilestone === milestone.id ? 'ring-4 ring-indigo-500' : ''}`}
              onClick={() => setActiveMilestone(milestone.id)}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{milestone.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                  <p className="text-indigo-600">{milestone.date}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{milestone.description}</p>
              {activeMilestone === milestone.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4 flex items-center justify-center"
                >
                  <Trophy className="h-8 w-8 text-yellow-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-200 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-200 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
};