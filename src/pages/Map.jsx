// Map.js
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { FaImage, FaMap } from "react-icons/fa";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import MapComponent from "../components/MapHome";
import StatusSection from "../components/Status";
import mapImage from "/illustrator/indonesia.svg"; // Replace with the correct image path

function Map() {
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [isStatusVisible, setIsStatusVisible] = useState(true);
  const [tooltip, setTooltip] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const toggleMap = () => {
    setIsMapVisible((prev) => !prev);
  };

  const toggleStatus = () => {
    setIsStatusVisible((prev) => !prev);
  };

  const handleMouseOver = (event) => {
    const title = event.target.getAttribute("title");
    if (title) {
      setTooltip(title);
      setTooltipPosition({
        top: event.clientY + 10,
        left: event.clientX + 10,
      });
    }
  };

  const handleMouseOut = () => {
    setTooltip("");
  };

  return (
    <div className="bg-gradient-to-b from-white/100 via-white/40 pt-20">
      <p className="text-base md:text-lg md:text-center text-[#1E3A5F] font-semibold">
        Tetap Waspada, Selalu Terkini
      </p>
      <h2 className="md:text-center text-3xl md:text-5xl tracking-wide font-bold text-[#FF8C00] mb-3 md:mb-6">
        Peta Siaga Bencana
      </h2>
      <div className="flex h-screen pt-24 relative">
        <div
          className="absolute top-0 left-0 w-full h-60 to-transparent"
          id="map"
        ></div>

        <div className="flex flex-col">
          {/* Map or Image */}
          <div className="map mt-16 md:mt-auto md:flex-1 z-10">
            {isMapVisible ? (
              <MapComponent />
            ) : (
              <ReactSVG
                src={mapImage}
                className="indonesia scale-50 md:scale-150 max-w-[300px] items-center max-h-[80vh] md:max-w-full h-auto w-full object-contain"
                onMouseOver={handleMouseOver}
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
          <div className="mt-16 md:mr-12">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleStatus}
              >
                <h1 className="flex items-center font-bold text-lg">STATUS</h1>
                <button
                  className="ml-2 text-lg"
                  aria-label="Toggle status visibility"
                >
                  {isStatusVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
            </div>
            <StatusSection isHidden={!isStatusVisible} />
          </div>
        </div>

        {/* Toggle Map Button */}
        <button
          onClick={toggleMap}
          className="absolute z-[999] top-[320px] md:top-auto md:bottom-52 scale-150 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition"
          title={isMapVisible ? "Show Image" : "Show Map"}
        >
          {isMapVisible ? <FaImage /> : <FaMap />}
        </button>
      </div>
    </div>
  );
}

export default Map;
