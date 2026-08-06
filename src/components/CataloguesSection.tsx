"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, Download, ArrowUpRight } from "lucide-react";

interface CataloguesSectionProps {
  onOpenCatalogueModal: (catTitle?: string) => void;
}

export default function CataloguesSection({ onOpenCatalogueModal }: CataloguesSectionProps) {
  const catalogues = [
    {
      id: "living-2026",
      title: "VELORA Living 2026",
      subtitle: "Konut & Yaşam Koleksiyonu",
      desc: "Salon, yemek odası ve yatak odası mobilyaları için özel tasarım seçkisi.",
      pages: "128 Sayfa",
      year: "2026 EDITION",
      cover: "/assets/images/about-vision.png",
    },
    {
      id: "office-contract",
      title: "VELORA Office",
      subtitle: "Ofis & Çalışma Alanları",
      desc: "Yönetici odaları, çalışma alanları ve modüler toplantı odası sistemleri.",
      pages: "96 Sayfa",
      year: "2026 CONTRACT",
      cover: "/assets/images/project-arden.png",
    },
    {
      id: "hospitality-project",
      title: "VELORA Hospitality",
      subtitle: "Otel & Restoran Projeleri",
      desc: "Otel odaları, lobi, bar, restoran ve ortak kullanım alan mobilyaları.",
      pages: "144 Sayfa",
      year: "2026 HOSPITALITY",
      cover: "/assets/images/project-vento.png",
    },
  ];

  const handleDownloadPDF = (title: string) => {
    // Generate clean demo blob text file download
    const element = document.createElement("a");
    const file = new Blob([`VELORA Furniture & Contract - ${title} (Demo PDF Katalog Dokümanı)`], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/ /g, "-")}-katalog.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="koleksiyonlar" className="relative py-28 px-4 md:px-8 border-b border-white/5 blueprint-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-3">
              KOLEKSİYONLAR & KATALOGLAR
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal">
              Her Mekân İçin Ayrı Bir Tasarım Dili
            </h2>
          </div>
          <p className="text-sm text-[#B8B3AA] max-w-md font-normal leading-relaxed">
            Projeleriniz için yüksek çözünürlüklü dijital kataloglarımızı online inceleyebilir veya PDF olarak indirebilirsiniz.
          </p>
        </div>

        {/* 3 Luxury Booklet Cards with Controlled 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {catalogues.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-3xl glass-panel p-6 flex flex-col justify-between min-h-[500px] border border-white/10 hover:border-[#C9A875]/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Physical Book Cover Preview */}
              <div className="relative w-full h-[260px] rounded-2xl overflow-hidden mb-6 border border-white/15 shadow-inner">
                <Image
                  src={cat.cover}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent opacity-75" />

                {/* Book Header Label */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="glass-chip px-3 py-1 rounded-full text-[9px] font-semibold tracking-wider text-[#C9A875] border border-[#C9A875]/30">
                    {cat.year}
                  </span>
                  <span className="text-[10px] text-[#F4F1EA] font-mono glass-chip px-2.5 py-1 rounded-full">
                    {cat.pages}
                  </span>
                </div>

                {/* Cover Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] text-[#C9A875] tracking-widest uppercase block mb-0.5">
                    VELORA BOOKLET
                  </span>
                  <h3 className="font-serif-editorial text-2xl text-[#F4F1EA]">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Book Info Content */}
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs text-[#C9A875] font-medium tracking-wide">
                  {cat.subtitle}
                </span>
                <p className="text-xs text-[#B8B3AA] leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              {/* Action Triggers */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenCatalogueModal(cat.title)}
                  className="py-2.5 px-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F4F1EA] bg-white/5 border border-white/15 hover:border-[#C9A875]/60 hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#C9A875]" />
                  <span>İncele</span>
                </button>

                <button
                  onClick={() => handleDownloadPDF(cat.title)}
                  className="py-2.5 px-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(201,168,117,0.3)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF İndir</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
