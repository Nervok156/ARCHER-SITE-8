import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Arsenal } from './components/Arsenal';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Генерируем искры с разными параметрами
  const sparks = Array.from({ length: 30 }, (_, i) => {
    const isYellow = Math.random() > 0.7; // 30% искр будут желтыми
    return {
      id: i,
      left: Math.random() * 100, // случайная позиция по горизонтали
      delay: Math.random() * 4, // случайная задержка
      duration: 3 + Math.random() * 3, // случайная длительность (3-6 секунд)
      xOffset: (Math.random() - 0.5) * 100, // случайное смещение по X
      size: 2 + Math.random() * 4, // случайный размер от 2px до 6px
      color: isYellow ? 'yellow' : 'red', // случайный цвет
    };
  });

  return (
    <div className="min-h-screen bg-iron-950 text-parchment-200 selection:bg-blood-900 selection:text-white overflow-x-hidden relative">
      {/* Sparks Animation */}
      <div className="fixed inset-0 pointer-events-none z-[98] overflow-hidden">
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className={`spark spark-${spark.color}`}
            style={{
              '--spark-left': `${spark.left}%`,
              '--spark-delay': `${spark.delay}s`,
              '--spark-duration': `${spark.duration}s`,
              '--spark-x': `${spark.xOffset}px`,
              '--spark-size': `${spark.size}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Arsenal />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Vignette & Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-20 bg-grunge"></div>
      <div className="fixed inset-0 pointer-events-none z-[99] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
    </div>
  );
};

export default App;