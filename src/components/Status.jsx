// StatusSection.js
import React,{ useEffect,useState } from "react";

const StatusSection = () =>
{
  const statuses = [
    {
      label: "Aman, tidak ada bahaya",
      shortLabel: "Aman",
      icon: "/icons/aman.svg",
    },
    {
      label: "Waspada, potensi bahaya",
      shortLabel: "Waspada",
      icon: "/icons/waspada.svg",
    },
    {
      label: "Siaga, Risiko Sedang",
      shortLabel: "Siaga",
      icon: "/icons/siaga.svg",
    },
    {
      label: "Bahaya, Risiko Tinggi",
      shortLabel: "Bahaya",
      icon: "/icons/bahaya.svg",
    },
    {
      label: "Kritis, Risiko Sangat Tinggi",
      shortLabel: "Kritis",
      icon: "/icons/kritis.svg",
    }
  ];
  const locations = [
    {
      label: "Posko",shortLabel: "Posko",icon: "/icons/posko.svg",
    },
    {
      label: "Kantor Layanan Darurat",shortLabel: "Layanan",icon: "/icons/layanan.svg",
    },
    {
      label: "Layanan Medis",shortLabel: "Medis",icon: "/icons/medis.svg"
    },
    {
      label: "Pusat Informasi",shortLabel: "Info",icon: "/icons/informasi.svg",
    },
    {
      label: "Titik Rawan",shortLabel: "Rawan",icon: "/icons/rawan.svg"
    },
    {
      label: "Titik Bencana",shortLabel: "Bencana",icon: "/icons/bencana.svg",
    },
    {
      label: "Jalur Evakuasi",shortLabel: "Jalur",icon: "/icons/evakuasi.svg",
    },
  ];

  const [isMobile,setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() =>
  {
    const handleResize = () =>
    {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize",handleResize);
    return () => window.removeEventListener("resize",handleResize);
  },[]);

  const displayedStatuses = isMobile ? statuses.slice(0,9) : statuses;
  const displayedLocations = isMobile ? locations.slice(0,9) : locations;

  return (
    <div>
      <div className="flex items-center">
        <h1 className="flex items-center font-bold text-lg">STATUS</h1>
      </div>
      <div className="flex justify-between items-center px-6 border-b">
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap justify-between items-center w-full space-x-7 md:space-x-10 space-y-2">
          {displayedStatuses.map((status,index) => (
            <div key={index} className="flex items-center space-x-5">
              <img
                src={status.icon}
                alt={isMobile ? status.shortLabel : status.label}
                className="w-6 h-6"
              />
              <span className="text-gray-700">
                {isMobile ? status.shortLabel : status.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center w-full space-x-7 md:space-x-10 space-y-2 pb-3 border-b-2 border-b-[#1E3A5F]">
          {displayedLocations.map((location,index) => (
            <div key={index} className="flex justify-between items-center space-x-2">
              <img
                src={location.icon}
                alt={isMobile ? location.shortLabel : location.label}
                className="w-6 h-6"
              />
              <span className="text-gray-700">
                {isMobile ? location.shortLabel : location.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
