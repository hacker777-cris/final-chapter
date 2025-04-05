import React, { useState } from 'react';
import { Map, Sparkles, Plane, Home, Heart, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const futurePlans = [
  {
    id: '1',
    title: 'European Adventures',
    description: 'Exploring every corner of Europe together, creating memories in beautiful places.',
    image: 'https://images.unsplash.com/photo-1471874276752-65e2d717604a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: <Plane className="h-8 w-8" />,
    isUnlocked: false
  },
  {
    id: '2',
    title: 'Our Peaceful Farm',
    description: 'Waking up to the sound of birds and fresh air, tending to our chickens together.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: <Home className="h-8 w-8" />,
    isUnlocked: false
  },
  {
    id: '3',
    title: 'Building Our Empire',
    description: 'Your healthcare facility and my tech company, making our dreams come true together.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: <Building className="h-8 w-8" />,
    isUnlocked: false
  }
];

export const FutureVision: React.FC = () => {
  const [unlockedPlans, setUnlockedPlans] = useState<string[]>([]);

  const unlockPlan = (id: string) => {
    if (!unlockedPlans.includes(id)) {
      setUnlockedPlans([...unlockedPlans, id]);
    }
  };

  return (
    <section id="future" className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Map className="h-16 w-16 text-purple-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Future Together</h2>
          <p className="text-xl md:text-2xl text-gray-700">Click to unlock our adventures ahead</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futurePlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-xl bg-white shadow-xl cursor-pointer
                ${unlockedPlans.includes(plan.id) ? 'ring-4 ring-purple-500' : ''}`}
              onClick={() => unlockPlan(plan.id)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className={`object-cover w-full h-64 transition-all duration-700
                    ${unlockedPlans.includes(plan.id) ? 'filter-none' : 'filter grayscale'}`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-purple-500">{plan.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{plan.title}</h3>
                </div>
                <p className="text-gray-700">{plan.description}</p>
                
                {!unlockedPlans.includes(plan.id) && (
                  <motion.div 
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="h-12 w-12 text-white" />
                    </motion.div>
                  </motion.div>
                )}
                
                {unlockedPlans.includes(plan.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <Heart className="h-8 w-8 text-rose-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};