import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Import left and right arrow icons

const Sidebar = () => {
  // State to control the visibility of the sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to toggle the sidebar on both mobile and desktop */}
      <button
        className={`fixed top-20 left-4 z-[999999] bg-[#1E3A5F] text-white p-3 rounded-full md:block transition-all duration-300 ease-in-out mt-2 ${
          isOpen ? "ml-56 md:ml-[213px]" : "ml-0"
        }`} // Use transition-all for smooth margin change
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <div className="relative">
          {isOpen ? (
            <HiChevronLeft className="w-6 h-6" />
          ) : (
            <HiChevronRight className="w-6 h-6" />
          )}
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-20 z-[99999] left-0 h-full bg-white shadow-lg border-r-2 border-r-[#1E3A5F] px-4 py-6 transform ${
          isOpen ? "translate-x-0 md:translate-x-0" : "md:-translate-x-[81%] -translate-x-full" // Adjust to show 70% on mobile
        } transition-transform duration-300 ease-in-out w-[70%] md:w-64`} // Set width to 70% on mobile
      >
        <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-[#1E3A5F] pb-2 flex items-center justify-between">
          HOT BUTTON
        </h2>
        <div className="space-y-6 pt-10">
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

      {/* Background overlay when sidebar is open (for mobile) */}
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
