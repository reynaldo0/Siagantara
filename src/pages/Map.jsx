// Map.js
import React,{ useState } from "react";
import { ReactSVG } from "react-svg";
import { FaImage,FaMap } from "react-icons/fa";
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import MapComponent from "../components/MapHome";
import StatusSection from "../components/Status";
import mapImage from "/illustrator/indonesia.svg"; // Replace with the correct image path

function Map()
{
  const [isMapVisible,setIsMapVisible] = useState(true);
  const [isStatusVisible,setIsStatusVisible] = useState(false);
  const [tooltip,setTooltip] = useState("");
  const [tooltipPosition,setTooltipPosition] = useState({ top: 0,left: 0 });

  const toggleMap = () =>
  {
    setIsMapVisible((prev) => !prev);
  };

  const toggleStatusVisibility = () =>
  {
    setIsStatusVisible((prev) => !prev);
  };

  const handleMouseOver = (event) =>
  {
    const title = event.target.getAttribute("title");
    if (title)
    {
      setTooltip(title);
      setTooltipPosition({
        top: event.clientY-150, // Menambah jarak vertikal tooltip dari kursor
        left: event.clientX + 30, // Menambah jarak horizontal tooltip dari kursor
      });
    }
  };

  const handleMouseMove = (event) =>
  {
    setTooltipPosition({
      top: event.clientY-150,
      left: event.clientX + 30,
    });
  };

  const handleMouseOut = () =>
  {
    setTooltip(null);
  };


  return (
    <div
      className="pt-5 md:pt-20 bg-gradient-to-b from-white/100 via-white/40"
      id="map">
      <p className="text-base md:text-lg md:text-center text-[#1E3A5F] font-semibold">
        Pantau Status Berkala Untuk Kesiapsiagaan Bencana
      </p>
      <h2 className="md:text-center text-3xl md:text-5xl tracking-wide font-bold text-[#FF8C00] mb-3 md:mb-6">
        Peta Siaga Bencana
      </h2>
      <div className="flex h-screen relative">
        {/* <div
          className="absolute top-0 left-0 w-full h-80 to-transparent"
        >
        </div> */}

        <div className="map-container flex flex-col">
          {/* Map or Image */}
          <div className="landscape-map mt-1 md:mt-auto md:flex-1 z-10">
            {isMapVisible ? (
              <MapComponent />
            ) : (
              <ReactSVG
                src={mapImage}
                className="indonesia scale-50 mt-20 md:scale-150 max-w-[300px] items-center max-h-[80vh] md:max-w-[100px] md:pl-[500px] h-auto w-full object-contain"
                onMouseOver={handleMouseOver}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
              />
            )}
          </div>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute z-10 bg-gray-700 text-white text-sm p-2 rounded"
              style={{
                top: tooltipPosition.top,
                left: tooltipPosition.left,
                pointerEvents: "none",
              }}
            >
              {tooltip}
            </div>
          )}

          {/* Status Panel */}
          <div className="mt-50">
            {isStatusVisible && <StatusSection />}
          </div>
        </div>

        {/* Toggle Map Button */}
        <button
          onClick={toggleMap}
          className="absolute z-[999] top-[350px] md:top-auto md:bottom-80 scale-150 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition"
          title={isMapVisible ? "Show Image" : "Show Map"}
        >
          {isMapVisible ? <FaImage /> : <FaMap />}
        </button>

        {/* Toggle Status Button */}
        <button
          onClick={toggleStatusVisibility} // Use the same function to toggle status visibility
          className="absolute z-[999] top-[350px] md:top-auto md:bottom-64 scale-150 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition"
          title={isStatusVisible ? "Hide Status" : "Show Status"}
        >
          <span className="flex items-center text-center">
            {isStatusVisible ? <BsEyeFill /> : <BsEyeSlashFill />}{" "}
            {/* Eye icon functionality */}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Map;
