import React from "react";
// Import your icons (you can use react-icons or any other library)
// Example: import { FaPhoneAlt } from 'react-icons/fa';

const StatusSection = () => {
  const statuses = [
    { color: "bg-green-500", label: "Aman, tidak ada bahaya" },
    { color: "bg-yellow-400", label: "Waspada, potensi bahaya" },
    { color: "bg-orange-500", label: "Siaga, Risiko Sedang" },
    { color: "bg-red-500", label: "Bahaya, Risiko Tinggi" },
    { color: "bg-red-700", label: "Kritis, Risiko Sangat Tinggi" },
    { color: "bg-green-700", label: "Posko Evakuasi" },
    { color: "bg-gray-500", label: "Kantor Layanan Darurat" },
    { color: "bg-red-600", label: "Layanan Medis" },
    { color: "bg-orange-400", label: "Pusat Informasi" },
    { color: "bg-yellow-300", label: "Titik Rawan" },
    { color: "bg-red-400", label: "Titik Bencana" },
    { color: "bg-blue-300", label: "Jalur Evakuasi" },
  ];

  return (
    <div className="px-7">
      <div className="flex flex-wrap items-center md:space-x-6 space-y-2 pb-3 border-b-2 border-b-[#1E3A5F]">
        {statuses.map((status, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Status Icon */}
            <div className={`w-4 h-4 rounded-full ${status.color}`}></div>
            {/* Status Label */}
            <span className="text-gray-700">{status.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
