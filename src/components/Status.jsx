import React from "react";

const StatusSection = () => {
  const statuses = [
    { label: "Aman, tidak ada bahaya", icon: "/icons/aman.svg" },
    { label: "Waspada, potensi bahaya", icon: "/icons/waspada.svg" },
    { label: "Siaga, Risiko Sedang", icon: "/icons/siaga.svg" },
    { label: "Bahaya, Risiko Tinggi", icon: "/icons/bahaya.svg" },
    { label: "Kritis, Risiko Sangat Tinggi", icon: "/icons/kritis.svg" },
    { label: "Posko Evakuasi", icon: "/icons/posko.svg" },
    { label: "Kantor Layanan Darurat", icon: "/icons/layanan.svg" },
    { label: "Layanan Medis", icon: "/icons/medis.svg" },
    { label: "Pusat Informasi", icon: "/icons/informasi.svg" },
    { label: "Titik Rawan", icon: "/icons/rawan.svg" },
    { label: "Titik Bencana", icon: "/icons/bencana.svg" },
    { label: "Jalur Evakuasi", icon: "/icons/evakuasi.svg" },
  ];

  return (
    <div className="px-7">
      <div className="flex flex-wrap items-center md:space-x-10 space-y-2 pb-3 border-b-2 border-b-[#1E3A5F]">
        {statuses.map((status, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Status Icon */}
            <img src={status.icon} alt={status.label} className="w-6 h-6" />
            {/* Status Label */}
            <span className="text-gray-700">{status.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
