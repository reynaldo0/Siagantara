// Map.js
import React, { useState } from "react";
import { FaImage, FaMap, FaEye, FaEyeSlash } from "react-icons/fa"; // Import FaEyeSlash
import MapComponent from "../components/MapHome";
import StatusSection from "../components/Status";
import mapImage from "/illustrator/map.png";

function Map() {
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [isStatusHidden, setIsStatusHidden] = useState(false);

  const toggleMap = () => {
    setIsMapVisible((prev) => !prev);
  };

  const toggleStatusVisibility = () => {
    setIsStatusHidden((prev) => !prev);
  };

  return (
    <div className="flex h-screen pt-24 relative">
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-white/100 via-white/40 to-transparent" id="map"></div>
      
      <div className="flex-1 flex flex-col">
        <div className="mt-16 md:mt-auto md:flex-1 z-10">
          {isMapVisible ? (
            <MapComponent />
          ) : (
            <img src={mapImage} alt="Map" className="w-full md:absolute md:top-1 md:scale-50 object-cover" />
          )}
        </div>
        
        <div className="mt-10 md:mr-12">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <div className="flex items-center">
              <h1 className="font-bold text-lg mr-2">STATUS</h1>
              {/* Toggle between FaEye and FaEyeSlash based on isStatusHidden */}
              {isStatusHidden ? (
                <FaEyeSlash
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={toggleStatusVisibility}
                  title="Show status"
                />
              ) : (
                <FaEye
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={toggleStatusVisibility}
                  title="Hide status"
                />
              )}
            </div>
          </div>
          <StatusSection isHidden={isStatusHidden} />
        </div>
      </div>

      <button
        onClick={toggleMap}
        className="absolute z-[999] top-[300px] md:top-auto md:bottom-52 scale-150 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition"
        title={isMapVisible ? "Show Image" : "Show Map"}
      >
        {isMapVisible ? <FaImage /> : <FaMap />}
      </button>
    </div>
  );
}

export default Map;
