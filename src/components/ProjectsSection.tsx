"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Building2, MapPin, Layers } from "lucide-react";

export default function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      num: "01",
      id: "vento-hotel",
      name: "Vento Business Hotel",
      city: "GAZİANTEP",
      location: "Gaziantep, Türkiye",
      scope: "Lobi, restoran, suit odalar ve ortak alan mobilyaları",
      desc: "Konaklama deneyimini sıcak malzemeler, güçlü heykelsi formlar ve özel üretim detaylarla yeniden yorumladık.",
      image: "/assets/images/project-vento.png",
      year: "2025 COMPLETION",
    },
    {
      num: "02",
      id: "arden-office",
      name: "Arden Executive Office",
      city: "İSTANBUL",
      location: "İstanbul, Türkiye",
      scope: "Yönetici odaları, toplantı salonları ve bekleme alanları",
      desc: "Kurumsal kimliği modern çizgiler ve doğal ahşap malzemelerle dengeli, yüksek prestijli bir çalışma ortamına dönüştürdük.",
      image: "/assets/images/project-arden.png",
      year: "2025 COMPLETION",
    },
    {
      num: "03",
      id: "natura-residence",
      name: "Natura Residence",
      city: "ANKARA",
      location: "Ankara, Türkiye",
      scope: "Örnek daireler ve sosyal yaşam alanı iklimlendirilmiş mobilyaları",
      desc: "Şehir yaşamına uygun, fonksiyonel, modüler ve son derece rafine mobilya çözümleri geliştirdik.",
      image: "/assets/products/modern-karyola.png",
      year: "2026 COMPLETION",
    },
    {
      num: "04",
      id: "linea-lounge",
      name: "Linea Lounge",
      city: "İZMİR",
      location: "İzmir, Türkiye",
      scope: "Kafe, lounge ve dış mekân teras oturum alanları",
      desc: "Yoğun ticari kullanıma dayanıklı ürünleri sosyal ve davetkâr bir mimari mekân diliyle birleştirdik.",
      image: "/assets/products/tekli-berjer.png",
      year: "2026 COMPLETION",
    },
  ];

  const activeProject = projects[activeProjectIndex];

  return (
    <section id="projeler" className="relative py-32 md:py-28 px-4 md:px-8 bg-[#0D0E10] border-b border-white/5 overflow-hidden blueprint-grid">
      
      {/* Background Giant City Name Watermark Typography (~4% Opacity) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="watermark-text text-[24vw] md:text-[28vw] font-serif-editorial uppercase leading-none tracking-tighter opacity-100 transition-all duration-700">
          {activeProject.city}
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-3">
              REFERANSLAR & PROJELER
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal">
              Üretim Gücümüzü Mekânlara Taşıyoruz
            </h2>
          </div>
          <p className="text-sm text-[#B8B3AA] max-w-md font-normal leading-relaxed">
            Otel, ofis, konut ve ticari alan projeleri için tasarımdan montaja kadar bütün süreçleri kendi bünyemizde yönetiyoruz.
          </p>
        </div>

        {/* Asymmetric Showcase Grid: Left Text (38%) / Right Photo (62%) */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          
          {/* Left Column - Active Project Text Details (38% Width) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            
            {/* Project Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 flex-shrink-0 ${
                    activeProjectIndex === idx
                      ? "bg-[#C9A875] text-[#070708] shadow-[0_0_15px_rgba(201,168,117,0.4)]"
                      : "bg-white/5 text-[#B8B3AA] hover:text-[#F4F1EA] border border-white/10"
                  }`}
                >
                  <span>{p.num}</span>
                  <span className="hidden sm:inline">• {p.name}</span>
                </button>
              ))}
            </div>

            {/* Active Project Card Container */}
            <div className="glass-panel p-8 rounded-3xl border border-white/15 shadow-2xl flex flex-col gap-5 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold text-[#C9A875] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeProject.location}</span>
                </span>
                <span className="text-[10px] text-[#85827C] font-mono glass-chip px-3 py-1 rounded-full">
                  {activeProject.year}
                </span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EA]">
                {activeProject.name}
              </h3>

              <p className="text-sm text-[#B8B3AA] leading-relaxed">
                {activeProject.desc}
              </p>

              <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                <span className="text-[11px] font-semibold text-[#C9A875] tracking-wider uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>PROJE KAPSAMI</span>
                </span>
                <span className="text-xs text-[#F4F1EA]">
                  {activeProject.scope}
                </span>
              </div>

              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C9A875] hover:text-[#E6C896] pt-4 transition-colors group"
              >
                <span>Benzer Projeniz İçin Teklif Alın</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column - Large High-Res Project Visual (62% Width) */}
          <div className="col-span-12 lg:col-span-7 relative h-[360px] sm:h-[480px] md:h-[560px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
            <Image
              key={activeProject.id}
              src={activeProject.image}
              alt={activeProject.name}
              fill
              quality={95}
              priority
              className="w-full h-full object-cover object-center filter brightness-100 contrast-110 saturate-110 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/90 via-transparent to-transparent opacity-70" />

            {/* Bottom Glass Tag */}
            <div className="absolute bottom-6 left-6 glass-chip px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-white/20">
              <Building2 className="w-4 h-4 text-[#C9A875]" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#F4F1EA]">{activeProject.name}</span>
                <span className="text-[10px] text-[#C9A875] font-mono tracking-wider">{activeProject.city} HQ SHOWCASE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
