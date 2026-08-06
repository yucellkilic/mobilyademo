"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ShowcaseSection() {
  const collections = [
    {
      id: "noir-living",
      title: "Noir Living",
      category: "Salon & Oturma Grubu",
      desc: "Derin konfor ve heykelsi siluetlerle modern yaşam alanları.",
      image: "/assets/images/about-vision.png",
      tag: "2026 KOLEKSİYONU",
    },
    {
      id: "terra-dining",
      title: "Terra Dining",
      category: "Yemek Odası & Masa",
      desc: "Doğal ahşap sıcaklığı ve mimari detaylarla uzun sofralar.",
      image: "/assets/images/about-craft.png",
      tag: "ÖZEL SERİ",
    },
    {
      id: "sera-bedroom",
      title: "Sera Bedroom",
      category: "Yatak Odası",
      desc: "Rafine kumaş kaplamaları ve dengeli oranlarla dingin alanlar.",
      image: "/assets/images/project-vento.png",
      tag: "RAFİNE ÇİZGİ",
    },
  ];

  return (
    <section id="vitrin" className="relative py-32 md:py-24 px-4 md:px-8 bg-[#0D0E10]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-3">
              YENİ & POPÜLER
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal">
              Yaşam Alanları İçin Seçili Tasarımlar
            </h2>
          </div>
          <p className="text-sm text-[#B8B3AA] max-w-md font-normal leading-relaxed">
            Her parça, VELORA’nın mimari tasarım anlayışını ve yüksek üretim standartlarını yansıtmak üzere özel olarak tasarlanır.
          </p>
        </div>

        {/* 3 Showcase Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between min-h-[440px] p-6 transition-all duration-500 border border-white/10 hover:border-[#C9A875]/40"
            >
              {/* Background Editorial Visual */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out brightness-100 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-transparent" />
              </div>

              {/* Card Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="glass-chip px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#C9A875] border border-[#C9A875]/30">
                  {item.tag}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 flex flex-col gap-2 pt-16">
                <span className="text-xs text-[#C9A875] font-medium tracking-wide">
                  {item.category}
                </span>
                <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#F4F1EA]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B8B3AA] leading-relaxed font-normal">
                  {item.desc}
                </p>

                <a
                  href="#urunler"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F4F1EA] group-hover:text-[#C9A875] pt-4 transition-colors"
                >
                  <span>Koleksiyonu İncele</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
