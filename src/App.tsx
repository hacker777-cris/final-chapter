import React from 'react';
import { Navigation } from './components/Navigation';
import { IntroSection } from './components/IntroSection';
import { GamingJourney } from './components/GamingJourney';
import { CookingCorner } from './components/CookingCorner';
import { NursingAppreciation } from './components/NursingAppreciation';
import { FutureVision } from './components/FutureVision';
import { FinalQuestion } from './components/FinalQuestion';

function App() {
  return (
    <div className="relative">
      <Navigation />
      <main className="pt-16">
        <IntroSection />
        <GamingJourney />
        <CookingCorner />
        <NursingAppreciation />
        <FutureVision />
        <FinalQuestion />
      </main>
    </div>
  );
}

export default App;