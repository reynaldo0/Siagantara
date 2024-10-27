import React from "react";

function Zona() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 h-screen px-4 md:ml-12">
      {/* Right Section with Images */}
      <div className="relative flex items-center justify-center space-y-6 md:space-y-0 md:space-x-6 md:order-2"> {/* Set order-2 for desktop */}
        {/* Desktop Prototype Image */}
        <div className="w-64 md:w-full relative">
          <img
            src="/mockup/dekstop.png"
            alt="Desktop Prototype"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Left Section with Text */}
      <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left md:order-1"> {/* Set order-1 for desktop */}
        <h1 className="text-3xl md:text-5xl tracking-wide font-semibold text-[#FF8C00]">
          Forum Siaga Bencana
        </h1>
        <div className="text-center">
          <p className="mt-4 text-lg text-[#1E3A5F] font-semibold">
            Selalu Terhubung dalam Keadaan Darurat
          </p>
          <div className="mt-2 text-gray-600 space-y-1 text-md">
            <p>Kirim SOS: Bantuan cepat dalam kondisi darurat.</p>
            <p>Atur Jangkauan: Pilih radius obrolan sesuai kebutuhan.</p>
            <p>
              Terima Pesan Darurat: Notifikasi peringatan bencana dari pihak
              terverifikasi.
            </p>
          </div>
          <button className="mt-10 px-10 py-2 bg-[#FF8C00] text-white rounded-xl shadow hover:bg-[#FF8C00]/80 transition">
            Coba Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Zona;
