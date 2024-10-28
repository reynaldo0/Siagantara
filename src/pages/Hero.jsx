import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/illustrator/hero.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/100 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-stroke-md-white text-fill-transparent">SIAGANTARA</h1>
        <p className="text-lg md:text-2xl mb-6">Sistem Informasi Kesiapsiagaan Bencana Nusantara</p>
        <p className="max-w-2xl mb-8">Jadikan keselamatan sebagai prioritas dengan SIAGANTARA. Website informasi bencana yang menyediakan data real-time, panduan darurat, dan akses cepat ke bantuan di seluruh Nusantara.</p>
        <p className="max-w-2xl mb-8">Bersama, kita bisa lebih tanggap dan siap menghadapi bencana.</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
      </div>

      
    </div>
  );
};

export default Hero;
