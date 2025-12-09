import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Arsenal } from './components/Arsenal';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-iron-950 text-parchment-200 selection:bg-blood-900 selection:text-white overflow-x-hidden relative">
      <Navbar />

      {/* Огненный фон и искры (не затрагивает шапку) */}
      <div className="pointer-events-none fixed inset-x-0 top-20 bottom-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 mix-blend-screen blur-[90px] animate-[flameGlow_9s_ease-in-out_infinite_alternate]"
          style={{
            background:
              'radial-gradient(120% 120% at 50% 90%, rgba(59,130,246,0.45), rgba(37,99,235,0.15) 55%, transparent 75%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.55] mix-blend-screen animate-[embersDrift_18s_linear_infinite]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(191,219,254,0.14) 0, transparent 26%), radial-gradient(circle at 80% 60%, rgba(191,219,254,0.12) 0, transparent 24%), radial-gradient(circle at 60% 20%, rgba(147,197,253,0.12) 0, transparent 22%)',
            backgroundSize: '120% 120%',
          }}
        />
      </div>

      <main className="relative z-10">
        <Hero />
        <Bio />
        <Arsenal />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Vignette & Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-30 bg-grunge"></div>
      <div className="fixed inset-0 pointer-events-none z-[99] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

      {/* Локальные keyframes для огня/искр */}
      <style>{`
        @keyframes flameGlow {
          0% { transform: translateY(0px) scale(1); opacity: 0.35; filter: hue-rotate(180deg); }
          50% { transform: translateY(-8px) scale(1.08); opacity: 0.6; filter: hue-rotate(200deg); }
          100% { transform: translateY(6px) scale(1.03); opacity: 0.45; filter: hue-rotate(160deg); }
        }
        @keyframes embersDrift {
          0% { background-position: 0% 100%; }
          50% { background-position: 50% 50%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>
    </div>
  );
};

export default App;