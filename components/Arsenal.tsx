import React, { useState } from 'react';
import { Sword, Eye, Shield, Zap } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { ABILITIES } from '../constants';
import { Ability } from '../types';

const IconMap = {
  Sword: Sword,
  Eye: Eye,
  Shield: Shield,
  Zap: Zap
};

export const Arsenal: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="arsenal" className="py-16 bg-iron-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-iron-800 to-iron-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Оружейная" subtitle="Благородные Фантазмы и Навыки" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"> {/* Увеличили max-w с 5xl до 6xl (72rem) */}
          {ABILITIES.map((ability: Ability) => {
            const Icon = IconMap[ability.icon];
            const isHovered = hoveredId === ability.id;

            return (
              <div
                key={ability.id}
                onMouseEnter={() => setHoveredId(ability.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative group bg-iron-900 border-2 transition-all duration-500 overflow-hidden
                  ${isHovered ? 'border-blood-600 -translate-y-2 shadow-[0_10px_30px_rgba(127,29,29,0.2)]' : 'border-iron-700 shadow-lg'}
                `}
              >
                {/* Image/Texture Background on Hover */}
                <div className={`absolute inset-0 bg-blood-900/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className="p-7 md:p-8 relative z-10"> {/* Увеличили padding */}
                  <div className="flex items-start justify-between mb-7">
                    <div className={`p-4 md:p-5 rounded-full border-2 transition-all duration-500 transform ${isHovered ? 'bg-blood-600 border-blood-500 text-parchment-100 scale-125 shadow-[0_0_20px_rgba(220,38,38,0.5)]' : 'bg-iron-800 border-iron-600 text-gray-500 scale-100'}`}>
                      <Icon size={36} strokeWidth={1.5} /> {/* Увеличили иконку */}
                    </div>
                    <div className="text-right">
                       <span className="block font-display text-4xl md:text-5xl font-bold text-parchment-200">{ability.rank}</span>
                       <span className="text-sm font-serif uppercase tracking-widest text-gray-500">Ранг</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-colors ${isHovered ? 'text-blood-500' : 'text-parchment-200'}`}>
                    {ability.name}
                  </h3>
                  
                  <p className="font-serif text-gold-600 text-lg md:text-xl uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">
                    {ability.type}
                  </p>
                  
                  <p className="font-serif text-xl md:text-2xl text-gray-400 leading-relaxed">
                    {ability.description}
                  </p>
                </div>

                {/* Corner Ornaments */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-iron-700 group-hover:border-blood-600 transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-iron-700 group-hover:border-blood-600 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};