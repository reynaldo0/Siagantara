import React from "react";
import Slider from "react-slick";
import { MdArrowForward, MdArrowBack } from "react-icons/md"; // Importing arrow icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Siaga = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Set the speed in milliseconds (3 seconds)
    pauseOnHover: true, // Pause autoplay on hover
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
      img: "/siaga/gempa.png",
      title: "Gempa Bumi Berkekuatan 6,5 SR di Bengkulu",
      date: "20 Oktober 2024",
    },
    {
      img: "/siaga/banjir.png",
      title:
        "Banjir Bandang Terjang Kabupaten Luwu, Sulawesi Selatan, Puluhan Rumah Terendam",
      date: "1 Oktober 2024",
    },
    {
      img: "/siaga/merapi.png",
      title: "Letusan Gunung Merapi di Yogyakarta Tingkatkan Status Siaga",
      date:"18 September 2024"
    },
    {
      img: "/siaga/longsor.png",
      title: "Tanah Longsor di Kawasan Puncak Bogor, Akses Jalan Terputus",
      date:"28 Agustus 2024"
    },
    {
      img: "/siaga/topan.png",
      title: "Topan Tropis Hantam Nusa Tenggara Timur, Ribuan Warga Dievakuasi",
      date:"11 Agustus 2024"
    },
  ];

  // Custom Next Button with Arrow Icon
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FF8C00] text-white rounded-full p-2 hover:bg-[#FF8C00]/90 transition z-10"
    >
      <MdArrowForward size={24} />
    </button>
  );

  // Custom Prev Button with Arrow Icon
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#FF8C00] text-white rounded-full p-2 hover:bg-[#FF8C00]/90 transition z-10"
    >
      <MdArrowBack size={24} />
    </button>
  );

  return (
    <div
      className="mx-auto container py-10 px-4 rounded-lg pt-10 md:pt-24"
      id="informasi"
    >
      <p className="text-base md:text-lg md:text-center text-[#1E3A5F] font-semibold">
        Tetap Waspada, Selalu Terkini
      </p>
      <h2 className="md:text-center text-3xl md:text-5xl tracking-wide font-bold text-[#FF8C00] mb-3 md:mb-6">
        Informasi Siaga Bencana
      </h2>
      <p className="md:text-center text-gray-600 mt-2 md:mt-5 mb-5 md:px-52 text-lg">
        Dapatkan berita terbaru mengenai bencana, peringatan dini, dan informasi
        pra dan pasca-bencana dari sumber terpercaya, langsung dari lokasi Anda.
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
              <div className="bg-white hover:scale-105 transition-transform duration-300 border-[#1E3A5F] border-2 shadow-xl rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-2xl px-2 pt-2"
                />
                <p className="ml-3 text-gray-500 font-serif text-sm">
                  {item.date}
                </p>
                <p className="p-4 text-gray-700 font-semibold text-center">
                  “{item.title}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Siaga;
