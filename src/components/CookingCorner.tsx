import React from 'react';
import { UtensilsCrossed, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const recipes = [
  {
    id: '1',
    name: 'Egg Curry',
    description: 'You taught me how to make egg curry over the phone, patiently guiding me step by step. It was more than cooking—it was about the love and care you put into teaching me.',
    image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    name: 'Spaghetti & Beef',
    description: 'The perfect recipe you shared, helping me choose ingredients and teaching me how to cook the beef just right. Every bite reminds me of your nurturing spirit.',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export const CookingCorner: React.FC = () => {
  return (
    <section id="cooking" className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <UtensilsCrossed className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Cooking Adventures</h2>
          <p className="text-2xl text-gray-700">Recipes that tell our story</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{recipe.name}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{recipe.description}</p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex justify-center"
                >
                  <Heart className="h-8 w-8 text-rose-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-200 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-rose-200 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
};