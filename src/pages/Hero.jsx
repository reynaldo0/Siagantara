import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/illustrator/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/100 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-black mb-1 text-stroke-md pt-16 md:text-stroke-lg font-sans tracking-wide">
          SIAGANTARA
        </h1>

        <p className="text-lg md:text-xl mb-2 font-montserrat">
          Sistem Informasi Kesiapsiagaan Bencana Nusantara
        </p>
        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="absolute inset-x-5 top-1/2 border-t-4 border-[#FF8C00]" />
        </div>

        <p className="max-w-2xl text-lg md:text-xl pt-5 md:pt-0 mb-8">
          Jadikan keselamatan sebagai prioritas dengan SIAGANTARA Website
          informasi bencana yang menyediakan data real-time, panduan darurat,
          dan akses cepat ke bantuan di seluruh Nusantara
        </p>
        <p className="max-w-2xl text-xl mb-8 hidden md:block">
          Bersama, kita bisa lebih tanggap dan siap menghadapi bencana.
        </p>
        <a href="#map">
          <button className="bg-[#FF8C00] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#FF8C00]/70">
            Jelajahi Sekarang
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
