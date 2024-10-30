import React from "react";

function Forum() {
  return (
    <div className="pb-16 md:pb-0 pt-16 md:pr-12">
      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute inset-x-5 top-1/2 border-t-4 border-[#FFD700]" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4">
        
        {/* Left Section with Images */}
        <div className="relative flex-grow flex items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-8 md:p-20">
          
          {/* Desktop Prototype Image */}
          <div className="w-64 md:w-full relative">
            <img
              src="/mockup/dekstop.svg"
              alt="Desktop Prototype"
              className="rounded-md w-full"
            />
            
            {/* Mobile Prototype Image */}
            <img
              src="/mockup/phone.svg"
              alt="Mobile Prototype"
              className="absolute top-0 -left-8 md:left-0 w-24 md:w-32 rounded-md shadow-lg transform -translate-y-4 md:-translate-y-6"
            />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="mt-2 md:mt-0 md:text-left flex flex-col items-start">
          <p className="mt-4 text-base md:text-lg text-[#1E3A5F] font-semibold">
            Selalu Terhubung dalam Keadaan Darurat
          </p>

          <h1 className="text-3xl md:text-5xl tracking-wide font-bold text-[#FF8C00]">
            Forum Siaga Bencana
          </h1>
          <div className="text-start mt-5 text-gray-600 text-md md:text-xl">
            <p>
              Kirim SOS: Bantuan cepat dalam kondisi darurat. Atur Jangkauan:
              Pilih radius obrolan sesuai kebutuhan. Terima Pesan Darurat:
              Notifikasi peringatan bencana dari pihak terverifikasi.
            </p>
            <button className="mt-12 px-10 py-2 bg-[#FF8C00] text-white rounded-xl shadow hover:bg-[#FF8C00]/80 transition">
              Coba Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
