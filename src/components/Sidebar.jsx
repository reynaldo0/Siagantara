import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showKontakDropdown, setShowKontakDropdown] = useState(false);
  const [showPanduanDropdown, setShowPanduanDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleKontakDropdown = () => {
    setShowKontakDropdown(!showKontakDropdown);
    if (!showKontakDropdown) setShowPanduanDropdown(false);
  };

  const togglePanduanDropdown = () => {
    setShowPanduanDropdown(!showPanduanDropdown);
    if (!showPanduanDropdown) setShowKontakDropdown(false);
  };

  return (
    <div className="relative">
      <button
        className={`fixed top-80 right-4 z-[999999] bg-[#1E3A5F] text-white p-3 rounded-full md:block transition-all duration-300 ease-in-out mt-2 ${isOpen ? "mr-56" : "mr-0"
          }`}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <div className="relative">
          {isOpen ? (
            <HiChevronRight className="w-6 h-6" />
          ) : (
            <HiChevronLeft className="w-6 h-6" />
          )}
        </div>
      </button>

      <div
        className={`fixed top-16 z-[99999] right-0 max-h-[80%] overflow-y-auto rounded-bl-2xl bg-white/40 backdrop-blur-sm shadow-lg border-l-2 border-b-2 border-l-[#1E3A5F] border-b-[#1E3A5F] px-4 py-6 transform ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-[81%]"
          } transition-transform duration-300 ease-in-out w-64`}
      >
        <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-[#1E3A5F] pb-2 flex items-center justify-between">
          HOT BUTTON
        </h2>
        <div className="space-y-6 pt-5">
          {/* Kontak Darurat Dropdown */}
          <button
            className="w-full rounded-full text-center bg-red-500 text-white py-2 flex justify-center items-center"
            onClick={toggleKontakDropdown}
          >
            Kontak Darurat
            {showKontakDropdown ? <HiOutlineChevronUp className="ml-2" /> : <HiOutlineChevronDown className="ml-2" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${showKontakDropdown ? "max-h-full opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="bg-red-100 p-2 rounded-md space-y-0">
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Call Center - 112</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Polisi - 110</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Darurat Medis - 119</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Pemadam Kebakaran - 113</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">BASARNAS - 115</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">BNPB - 117</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">PLN - 123</button>
              <button className="w-full text-left text-red-600">Kemensos (Bantuan Sosial) - 1500-771</button>
            </div>
          </div>

          {/* Panduan Cepat Dropdown */}
          <button
            className="w-full rounded-full text-center bg-red-400 text-white py-2 flex justify-center items-center"
            onClick={togglePanduanDropdown}
          >
            Panduan Cepat
            {showPanduanDropdown ? <HiOutlineChevronUp className="ml-2" /> : <HiOutlineChevronDown className="ml-2" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${showPanduanDropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="bg-red-100 p-2 rounded-md space-y-0">
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Panduan Gempa</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Panduan Tsunami</button>
              <button className="w-full text-left text-red-600 border-b border-red-200 last:border-0">Panduan Banjir</button>
              <button className="w-full text-left text-red-600">Panduan Badai</button>
            </div>
          </div>

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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
