import React from "react";
import { AiOutlineMail } from "react-icons/ai"; // Importing mail icon from react-icons
import { HiOutlineLocationMarker } from "react-icons/hi"; // Importing location marker icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F]">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col justify-between md:mb-0">
            <a href="#home" className="flex items-center">
              <p className="text-2xl mb-10 md:text-4xl text-[#FFA500] font-bold">SIAGA<span className="text-white">NTARA</span></p>
            </a>

            <div className="mb-5 mt-5 md:mb-0">
              <h2 className="mb-6 text-base font-semibold uppercase text-white">
                Hubungi Kami
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4 flex items-center gap-3 text-base">
                  <HiOutlineLocationMarker className="w-5 h-5 text-gray-300/90" /> {/* Location icon */}
                  <a href="#" className="hover:underline">
                    Indonesia
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-3 text-base">
                  <AiOutlineMail className="w-5 h-5 text-gray-300/90" /> {/* Mail icon */}
                  <a href="mailto:siagantara@gmail.com?subject=Hallo Siagantara! Saya ingin mengajak anda untuk berkolaborasi..." className="hover:underline">
                    siagantara@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Akses Konten
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Beranda
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#informasi" className="hover:underline">
                    Informasi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#forum" className="hover:underline">
                    Forum
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#panduan" className="hover:underline">
                    Panduan
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#zona" className="hover:underline">
                    Zona
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Sumber Data
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4">
                  <a href="https://www.cnnindonesia.com" className="lowercase hover:underline">
                    CnnIndonesia.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://news.detik.com/" className="lowercase hover:underline">
                    Detik.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://lensakalbar.co.id/" className="lowercase hover:underline">
                    LensaKalbar.co.id
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.kompas.com/" className="lowercase hover:underline">
                    Kompas.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://en.m.wikipedia.org/" className="lowercase hover:underline">
                    Wikipedia.org
                  </a>
                </li>
              </ul>
            </div>

            
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-center text-sm text-gray-300/90">
            Dibuat oleh tim Siagantara
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
