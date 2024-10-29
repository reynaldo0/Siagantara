import React, { useEffect, useState } from "react";

const StatusSection = () => {
  // Array status dengan label lengkap dan singkat
  const statuses = [
    { label: "Aman, tidak ada bahaya", shortLabel: "Aman", icon: "/icons/aman.svg" },
    { label: "Waspada, potensi bahaya", shortLabel: "Waspada", icon: "/icons/waspada.svg" },
    { label: "Siaga, Risiko Sedang", shortLabel: "Siaga", icon: "/icons/siaga.svg" },
    { label: "Bahaya, Risiko Tinggi", shortLabel: "Bahaya", icon: "/icons/bahaya.svg" },
    { label: "Kritis, Risiko Sangat Tinggi", shortLabel: "Kritis", icon: "/icons/kritis.svg" },
    { label: "Posko Evakuasi", shortLabel: "Evakuasi", icon: "/icons/posko.svg" },
    { label: "Kantor Layanan Darurat", shortLabel: "Layanan", icon: "/icons/layanan.svg" },
    { label: "Layanan Medis", shortLabel: "Medis", icon: "/icons/medis.svg" },
    { label: "Pusat Informasi", shortLabel: "Info", icon: "/icons/informasi.svg" },
    { label: "Titik Rawan", shortLabel: "Rawan", icon: "/icons/rawan.svg" },
    { label: "Titik Bencana", shortLabel: "Bencana", icon: "/icons/bencana.svg" },
    { label: "Jalur Evakuasi", shortLabel: "Jalur", icon: "/icons/evakuasi.svg" },
  ];

  // State untuk memantau apakah tampilan saat ini adalah mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function untuk menangani perubahan ukuran jendela
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Menambahkan event listener untuk resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  // Batasi jumlah item yang ditampilkan pada mobile
  const displayedStatuses = isMobile ? statuses.slice(0, 9) : statuses; // Tampilkan semua item di desktop

  return (
    <div className="px-5 md:px-7">
      <div className="flex flex-wrap items-center space-x-7 md:space-x-10 space-y-2 pb-3 border-b-2 border-b-[#1E3A5F]">
        {displayedStatuses.map((status, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Status Icon */}
            <img src={status.icon} alt={isMobile ? status.shortLabel : status.label} className="w-6 h-6" />
            {/* Status Label */}
            <span className="text-gray-700">{isMobile ? status.shortLabel : status.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
