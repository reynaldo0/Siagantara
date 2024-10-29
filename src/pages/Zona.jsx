import React from "react";
import Slider from "react-slick";
import { MdArrowForward, MdArrowBack } from "react-icons/md"; // Importing arrow icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Zona() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
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
      img: "/siaga/gempa.png",
      title: "Gempa Bumi Berkekuatan 6,5 SR di Bengkulu",
    },
    {
      img: "/siaga/banjir.png",
      title:
        "Banjir Bandang Terjang Kabupaten Luwu, Sulawesi Selatan, Puluhan Rumah Terendam",
    },
    {
      img: "/siaga/merapi.png",
      title: "Letusan Gunung Merapi Tingkatkan Status",
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
    <div className="bg-blue-50 py-2 md:px-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:mr-12 h-screen px-4 gap-5 md:gap-12">
        {/* Right Section with Images */}
        <div className="relative flex items-center justify-center space-y-6 md:space-y-0 md:space-x-6 md:order-2">
          {" "}
          {/* Set order-2 for desktop */}
          {/* Desktop Prototype Image */}
          <div className="w-96 px-2 md:px-0 md:w-[520px] relative">
            <div className="container relative">
              <Slider
                {...sliderSettings}
                nextArrow={<CustomNextArrow />}
                prevArrow={<CustomPrevArrow />}
                className="flex items-center px-5 md:px-12 justify-center"
              >
                {data.map((item, index) => (
                  <div key={index} className="p-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <p className="p-4 text-gray-700 font-semibold text-center">
                        "{item.title}"
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* Left Section with Text */}
        <div className="mt-8 md:mt-0 md:ml-8 md:text-left md:order-1">
          {" "}
          {/* Set order-1 for desktop */}
          <p className="text-base md:text-lg text-[#1E3A5F] font-semibold">
            Bergabunglah dalam Upaya Kemanusiaan
          </p>
          <h1 className="text-3xl text-start md:text-6xl tracking-wide font-bold mt-2 text-[#FF8C00]">
            Zona Relawan
          </h1>
          <div className="text-start mt-2 text-gray-600 space-y-1 md:text-xl">

            <p className="md:pr-20">
              Jelajahi berbagai informasi bagi Anda yang ingin berpartisipasi
              dalam penanganan bencana alam. Dukungan Anda akan membantu
              meningkatkan kesiapsiagaan masyarakat dalam menghadapi situasi darurat yang
              tak terduga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zona;
