import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg border-r-2 border-r-[#1E3A5F] px-4 py-6">
      <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-[#1E3A5F] pb-2">HOT BUTTON</h2>
      <div className="space-y-4 pt-10">
        <button className="w-full rounded-full text-center bg-red-500 text-white py-2 flex justify-center items-center">
          Kontak Darurat
          <span className="ml-2">▼</span>
        </button>
        <button className="w-full rounded-full text-center bg-red-400 text-white py-2 flex justify-center items-center">
          Panduan Cepat
          <span className="ml-2">▼</span>
        </button>
        <button className="w-full rounded-full text-center bg-yellow-400 text-white py-2">
          Status Bencana
        </button>
        <button className="w-full bg-orange-400 text-white py-2 rounded-full">
          Pusat Evakuasi
        </button>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-full">
          Berita Terkini Bencana
        </button>
        <button className="w-full bg-blue-800 text-white py-2 rounded-full">
          Laporkan Keadaan
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
