"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, ExternalLink, Building } from "lucide-react";

export default function DealersSection() {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: "gaziantep-hq",
      name: "Gaziantep Merkez Showroom & Fabrika",
      type: "ÜRETİM TESİSİ & MERKEZ SHOWROOM",
      address: "Organize Sanayi Bölgesi 4. Cadde No: 18, Gaziantep",
      phone: "+90 342 000 00 00",
      hours: "Hafta içi: 08:30 - 18:30 | Cumartesi: 09:00 - 15:00",
      mapUrl: "https://maps.google.com/?q=Gaziantep+Organize+Sanayi",
      coord: "37.0660° N, 37.3833° E",
    },
    {
      id: "istanbul-office",
      name: "İstanbul Proje Ofisi & Showroom",
      type: "PROJE & CONTRACT OFİSİ",
      address: "Büyükdere Caddesi No: 142 Levent, İstanbul",
      phone: "+90 212 000 00 00",
      hours: "Hafta içi: 09:00 - 19:00 | Cumartesi: 10:00 - 16:00",
      mapUrl: "https://maps.google.com/?q=Levent+Istanbul",
      coord: "41.0782° N, 29.0123° E",
    },
    {
      id: "ankara-showroom",
      name: "Ankara Satış Noktası",
      type: "BÖLGE SATIŞ SHOWROOMU",
      address: "Arjantin Caddesi No: 45 Çankaya, Ankara",
      phone: "+90 312 000 00 00",
      hours: "Hafta içi: 09:00 - 18:30 | Cumartesi: 10:00 - 15:00",
      mapUrl: "https://maps.google.com/?q=Cankaya+Ankara",
      coord: "39.8985° N, 32.8597° E",
    },
    {
      id: "izmir-dealer",
      name: "İzmir Bayi & Bölge Ofisi",
      type: "EGE BÖLGE SHOWROOMU",
      address: "Şair Eşref Bulvarı No: 88 Alsancak, İzmir",
      phone: "+90 232 000 00 00",
      hours: "Hafta içi: 09:00 - 18:30 | Cumartesi: 10:00 - 15:00",
      mapUrl: "https://maps.google.com/?q=Alsancak+Izmir",
      coord: "38.4347° N, 27.1428° E",
    },
  ];

  const current = locations[activeLocation];

  return (
    <section id="satis-noktalari" className="relative py-32 md:py-28 px-4 md:px-8 border-b border-white/5 blueprint-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-3">
              SATIŞ AĞI & SHOWROOMLAR
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal">
              VELORA’yı Size En Yakın Noktada Deneyimleyin
            </h2>
          </div>
          <p className="text-sm text-[#B8B3AA] max-w-md font-normal leading-relaxed">
            Türkiye genelindeki projeleriniz için mimarlık ekibimiz ve satış temsilcilerimizle direkt iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Location Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: City Selector Buttons (35% Width) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {locations.map((loc, idx) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocation(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between ${
                  activeLocation === idx
                    ? "glass-panel bg-white/[0.08] border-[#C9A875]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building className={`w-4 h-4 ${activeLocation === idx ? "text-[#C9A875]" : "text-[#85827C]"}`} />
                  <span className={`text-sm font-semibold ${activeLocation === idx ? "text-[#F4F1EA]" : "text-[#B8B3AA]"}`}>
                    {loc.name.split(" ")[0]}
                  </span>
                </div>
                <span className="text-[10px] text-[#C9A875] font-mono tracking-wider">
                  {loc.type.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Active Location Details Glass Panel (65% Width) */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden animate-fadeIn">
            
            {/* Background Decorative Coordinates */}
            <div className="absolute top-6 right-6 text-[11px] font-mono text-[#C9A875]/40 tracking-widest">
              {current.coord}
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-1">
                  {current.type}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EA]">
                  {current.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A875] flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F1EA] mb-1">Adres</span>
                    <span className="text-xs text-[#B8B3AA] leading-relaxed">{current.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C9A875] flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F1EA] mb-1">Telefon</span>
                    <span className="text-xs text-[#B8B3AA]">{current.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:col-span-2">
                  <Clock className="w-5 h-5 text-[#C9A875] flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F1EA] mb-1">Çalışma Saatleri</span>
                    <span className="text-xs text-[#B8B3AA]">{current.hours}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                <a
                  href={current.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] shadow-[0_0_20px_rgba(201,168,117,0.3)] transition-all flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Haritada Aç</span>
                </a>

                <a
                  href={current.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F4F1EA] bg-white/5 border border-white/15 hover:border-[#C9A875]/50 transition-all flex items-center gap-2"
                >
                  <span>Yol Tarifi Al</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A875]" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
