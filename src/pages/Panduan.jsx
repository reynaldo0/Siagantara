import React from "react";
import Slider from "react-slick";
import { MdArrowForward, MdArrowBack } from "react-icons/md"; // Importing arrow icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

const Panduan = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ position: "relative" }}>
        <ul className="slick-dots flex justify-center items-center mt-4">
          {dots}
        </ul>
      </div>
    ),
  };

  const data = [
    {
      img: "/panduan/tsunami.png",
      title: "TSUNAMI",
    },
    {
      img: "/panduan/gempa.png",
      title: "GEMPA BUMI",
    },
    {
      img: "/panduan/badai.png",
      title: "BADAI",
    },
    {
      img: "/panduan/gunung.png",
      title: "GUNUNG MELETUS",
    },
    {
      img: "/panduan/kebakaran.png",
      title: "KEBAKARAN HUTAN",
    },
    {
      img: "/panduan/kekeringan.png",
      title: "KEKERINGAN",
    },
    {
      img: "/panduan/panas.png",
      title: "PANAS",
    },
  ];

  // Custom Next Button with Arrow Icon
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition z-10"
    >
      <MdArrowForward size={24} /> {/* Use MdArrowForward icon */}
    </button>
  );

  // Custom Prev Button with Arrow Icon
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition z-10"
    >
      <MdArrowBack size={24} /> {/* Use MdArrowBack icon */}
    </button>
  );

  return (
    <div className="mx-auto md:py-5 px-4 rounded-lg md:pr-16">
      <div className="relative w-full max-w-md mx-auto mb-6">
        <div className="absolute inset-x-5 top-1/2 border-t-4 border-[#FFD700]" />
      </div>
      <p className="text-base md:text-lg md:text-center text-[#1E3A5F] font-semibold pt-16">
        Siapkan Diri, Hadapi Situasi
      </p>
      <h2 className="md:text-center text-3xl md:text-4xl font-bold text-[#FF8C00] mb-3 md:mb-6">
        Panduan Siaga Bencana
      </h2>
      <p className="md:text-center text-gray-600 mb-5 md:px-52">
        Pelajari langkah-langkah penting dalam menghadapi bencana alam. Panduan
        praktis kami memberikan instruksi mudah dan jelas untuk memastikan
        keselamatan Anda dan orang-orang terdekat di setiap kondisi darurat.
      </p>

      <div className="container relative">
        <Slider
          {...sliderSettings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          className="flex items-center px-5 md:px-12 justify-center"
        >
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <p className="p-4 text-gray-700 font-semibold text-xl md:text-4xl text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Panduan;
