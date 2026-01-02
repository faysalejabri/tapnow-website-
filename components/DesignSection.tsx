import React, { useState } from 'react';

const DesignSection: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState('Matte Black');

  const materials = ['Matte Black', 'Bamboo', 'Metal'];

  return (
    <section className="bg-black py-32 text-center text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed to impress.</h2>
        <p className="text-gray-400 text-lg mb-12">
          Crafted from premium materials including matte soft-touch plastic, sustainable bamboo, and laser-etched stainless steel.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {materials.map((material) => (
            <button
              key={material}
              onClick={() => setActiveMaterial(material)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeMaterial === material
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {material}
            </button>
          ))}
        </div>
      </div>
      
      {/* Subtle ambient light at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default DesignSection;