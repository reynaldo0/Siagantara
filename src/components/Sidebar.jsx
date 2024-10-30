import React, { useState } from "react";
import {
  HiChevronRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiExclamation,
} from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showKontakDropdown, setShowKontakDropdown] = useState(false);
  const [showPanduanDropdown, setShowPanduanDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleKontakDropdown = () => {
    setShowKontakDropdown(!showKontakDropdown);
  };

  const togglePanduanDropdown = () => {
    setShowPanduanDropdown(!showPanduanDropdown);
  };

  return (
    <div className="relative">
      <button
        className={`fixed z-[999999] bg-[#FF0000] text-white p-3 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "top-80 right-4 mr-56" : "bottom-4 right-4 mr-0"
        }`}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <div className="relative">
          {isOpen ? (
            <HiChevronRight className="w-6 h-6" />
          ) : (
            <HiExclamation className="w-6 h-6" />
          )}
        </div>
      </button>

      <div
        className={`fixed top-16 z-[99999] right-0 max-h-[85%] overflow-y-auto rounded-bl-2xl bg-white/40 backdrop-blur-sm shadow-lg border-l-2 border-b-2 border-l-[#1E3A5F] border-b-[#1E3A5F] px-4 py-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-64`}
      >
        <h2 className="text-lg text-[#000000] font-bold mb-4 border-b-2 border-b-[#1E3A5F] pb-2">
          HOT BUTTON
        </h2>

        <div className="mt-8">
          <button className="w-full rounded-full text-center bg-[#FF8C00] hover:bg-[#FF8C00]/70 text-white py-2">
            SOS
          </button>
        </div>

        {/* Kontak Darurat Dropdown */}
        <div className="mt-8">
          <button
            className="w-full rounded-full text-center bg-[#FF8C00] hover:bg-[#FF8C00]/70 text-white py-2 flex justify-center items-center"
            onClick={toggleKontakDropdown}
          >
            Kontak Darurat
            {showKontakDropdown ? (
              <HiOutlineChevronUp className="ml-2" />
            ) : (
              <HiOutlineChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showKontakDropdown
                ? "max-h-full opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#FF8C00] p-2 rounded-md mt-2 space-y-0">
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                Call Center - 112
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                Polisi - 110
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                Darurat Medis - 119
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                Pemadam Kebakaran - 113
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                BASARNAS - 115
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                BNPB - 117
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                PLN - 123
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black">
                Kemensos (Bantuan Sosial) - 1500-771
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {/* Panduan Cepat Dropdown */}
          <button
            className="w-full rounded-full text-center bg-[#FF8C00] hover:bg-[#FF8C00]/70 text-white py-2 flex justify-center items-center"
            onClick={togglePanduanDropdown}
          >
            Panduan Cepat
            {showPanduanDropdown ? (
              <HiOutlineChevronUp className="ml-2" />
            ) : (
              <HiOutlineChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showPanduanDropdown ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#FF8C00] p-2 mt-5 rounded-md space-y-0">
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black pb-2">
                Gempa Bumi
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black pb-2">
                Tsunami
              </button>
              <button className="w-full text-left text-white border-white last:border-0 border-b-2 hover:border-black pb-2">
                Letusan Gunung Berapi
              </button>
              <button className="w-full text-left text-white border-white last:bottom-0 border-b-2 hover:border-black pb-2">
                Tanah Longsor
              </button>
              <button className="w-full text-left text-white border-white last:bottom-0 border-b-2 hover:border-black pb-2">
                Banjir Bandang
              </button>
              <button className="w-full text-left text-white border-white last:bottom-0 border-b-2 hover:border-black pb-2">
                Kekeringan
              </button>
              <button className="w-full text-left text-white border-white last:bottom-0 border-b-2 hover:border-black pb-2">
                Angin Topan
              </button>
              <button className="w-full text-left text-white border-white last:bottom-0 border-b-2 hover:border-black pb-2">
                Gelombang Panas
              </button>
              <button className="w-full text-left text-white border-white last:bottom-0 border-b-2 hover:border-black pb-2">
                Kebakaran Hutan
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full rounded-full text-center bg-[#FF8C00] hover:bg-[#FF8C00]/70 text-white py-2">
            Status Bencana
          </button>
        </div>
        <div className="mt-8">
          <button className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/70 text-white py-2 rounded-full">
            Pusat Evakuasi
          </button>
        </div>
        <div className="mt-8">
          <button className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/70 text-white py-2 rounded-full">
            Berita Terkini Bencana
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
