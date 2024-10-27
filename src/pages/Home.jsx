import React from "react";
import Sidebar from "../components/Sidebar";
import MapComponent from "../components/MapHome";
import StatusSection from "../components/Status";

function Home() {
  return (
    <div className="flex h-screen pt-24 md:ml-12">
      {/* Sidebar */}
      {/* Map and Status Panel */}
      <div className="flex-1 flex flex-col">
        {/* Status Panel */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
          <div>
            <h1 className="font-bold text-lg">STATUS</h1>
          </div>
        </div>
        <StatusSection />
        {/* Map */}
        <div className="flex-1 z-10">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
