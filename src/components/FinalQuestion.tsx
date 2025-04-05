import React, { useState } from "react";
import { Heart, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export const FinalQuestion: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleYes = () => {
    setShowCelebration(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 to-indigo-50 py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="h-16 w-16 text-rose-500 mx-auto mb-8" />
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            The Big Question
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Through all the moments we've shared—our late-night gaming sessions,
            the sweet cooking lessons over the phone, and the way you pour your
            heart into caring for others, I’ve found myself falling for you more
            and more each day. You’re genuinely amazing in every way, and I
            honestly can’t imagine my life without you in it. You’ve become my
            peace, my joy, and the person I look forward to every single day.
          </p>
          <motion.button
            onClick={() => setIsVisible(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 text-white shadow-xl hover:shadow-2xl transition-all"
          >
            <Heart className="h-6 w-6 mr-2" />
            Click Here
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl p-4 sm:p-8 max-w-lg mx-4 relative overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-12 w-12 text-rose-500 mx-auto mb-6" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                >
                  Will you be my girlfriend?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm sm:text-base text-gray-700 mb-6"
                >
                  Hey baby… I've been thinking about us lately. About our
                  laughs, late-night talks, and even the tough days we've grown
                  through together. You bring light and calm into my life that I
                  didn't know I needed. Every moment with you feels special.
                  From your soothing voice to your strength and how deeply you
                  care for others—it's everything I admire. I want to build
                  something with you, grow together, and make memories that are
                  ours forever. So, would you do me the honor of being my
                  girlfriend?
                </motion.p>
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleYes}
                    className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
                  >
                    Yes! ❤️
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleYes}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
                  >
                    Of course I will! 💜
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={200}
              recycle={false}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-lg mx-4 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                She said YES! 🎉
              </h3>
              <p className="text-xl text-gray-700">
                Here's to our beautiful journey together! ❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

