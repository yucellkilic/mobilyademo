"use client";

import { useState } from "react";
import Image from "next/image";
import { Cpu, Layers, Hammer, ShieldCheck, Truck, PenTool, CheckCircle } from "lucide-react";

export default function ProductionSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Tasarım ve Mimari Çizim",
      desc: "İç mimarlarımız ve endüstriyel tasarımcılarımız projeye özel 3D modelleme, ergometri analizleri ve detaylı imalat çizimlerini hazırlar.",
      icon: PenTool,
      metric: "CAD / CAM Dijital Prototipleme",
    },
    {
      num: "02",
      title: "Seçkin Malzeme Tedariki",
      desc: "Sürdürülebilir orman sertifikalı masif ahşaplar, birinci sınıf doğal kaplamalar, yüksek mukavemetli metaller ve ithal kumaşlar seçilir.",
      icon: Layers,
      metric: "Sürdürülebilir Sertifikalı Malzeme",
    },
    {
      num: "03",
      title: "Hassas CNC ve Ahşap İşleme",
      desc: "Son teknoloji 5 eksenli CNC ahşap işleme robotlarımız ile mikron seviyesinde hassasiyetle parçalar biçimlendirilir.",
      icon: Cpu,
      metric: "0.1 mm Hassas Kesim Toleransı",
    },
    {
      num: "04",
      title: "Usta İşçiliği Döşeme & Montaj",
      desc: "Deneyimli döşeme ustalarımız ergonomik sünger katmanlarını ve özel dikişli kumaşları gövdeye titizlikle uygular.",
      icon: Hammer,
      metric: "Ergonomik Yüksek Yoğunluklu Sünger",
    },
    {
      num: "05",
      title: "6 Aşamalı Kalite Kontrol",
      desc: "Dayanıklılık, dikiş mukavemeti, yüzey pürüzsüzlüğü ve birleşim toleransları uzman denetmenlerce test edilerek onaylanır.",
      icon: ShieldCheck,
      metric: "ISO Uyumlu Kalite Test Prosedürü",
    },
    {
      num: "06",
      title: "Güvenli Paketleme ve Şantiye Sevkiyatı",
      desc: "Özel darbe emici koruyucularla ambalajlanan ürünler, Türkiye genelindeki şantiyelerinize ve projenize zamanında sevk edilir.",
      icon: Truck,
      metric: "Zamanında Teslimat Garantisi",
    },
  ];

  return (
    <section id="uretim" className="relative py-28 px-4 md:px-8 bg-[#0D0E10] border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-3">
              ÜRETİM & FABRİKA KAPASİTESİ
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal">
              Fikirden Üretime Kontrol Bizde
            </h2>
          </div>
          <p className="text-sm text-[#B8B3AA] max-w-md font-normal leading-relaxed">
            Tasarım, prototipleme, hassas üretim, kalite kontrol ve şantiye sevkiyat süreçlerini Gaziantep’teki 12.000 m² tesisimizde tek çatı altında yönetiyoruz.
          </p>
        </div>

        {/* Apple-Style Connected Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Interactive Steps List (60% Width) */}
          <div className="lg:col-span-6 relative flex flex-col gap-4">

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative z-10 p-5 rounded-2xl cursor-pointer transition-all duration-400 border flex items-start gap-4 ${
                    isActive
                      ? "glass-panel bg-white/[0.07] border-[#C9A875]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-[#C9A875] text-[#070708] shadow-[0_0_20px_rgba(201,168,117,0.5)]"
                        : "bg-white/10 text-[#B8B3AA] group-hover:text-[#F4F1EA]"
                    }`}
                  >
                    {step.num}
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#C9A875]" : "text-[#85827C]"}`} />
                      <h3 className={`text-base font-semibold ${isActive ? "text-[#F4F1EA]" : "text-[#B8B3AA]"}`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    {isActive && (
                      <p className="text-xs text-[#B8B3AA] leading-relaxed pt-1 animate-fadeIn">
                        {step.desc}
                      </p>
                    )}

                    <span className="text-[10px] tracking-wider text-[#C9A875] font-mono pt-1">
                      {step.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Factory Showcase Frame (40% Width) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
              <Image
                src="/assets/images/factory-main.png"
                alt="VELORA Modern Production Facility"
                fill
                className="w-full h-full object-cover object-center filter brightness-100 contrast-110 saturate-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/90 via-transparent to-transparent opacity-70" />

              {/* Floating Overlay Info Tag */}
              <div className="absolute bottom-6 left-6 right-6 glass-chip p-4 rounded-2xl flex items-center justify-between border border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A875]" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#F4F1EA]">
                      {steps[activeStep].title}
                    </span>
                    <span className="text-[10px] text-[#C9A875] tracking-wider uppercase">
                      ADIM {activeStep + 1} / 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capacity Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                <span className="text-xl font-bold text-[#F4F1EA] block">12.000 m²</span>
                <span className="text-[10px] text-[#85827C]">Üretim Alanı</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                <span className="text-xl font-bold text-[#F4F1EA] block">2.500+</span>
                <span className="text-[10px] text-[#85827C]">Aylık Kapasite</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                <span className="text-xl font-bold text-[#F4F1EA] block">70+ Uzman</span>
                <span className="text-[10px] text-[#85827C]">Üretim Ekibi</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                <span className="text-xl font-bold text-[#F4F1EA] block">6 Aşama</span>
                <span className="text-[10px] text-[#85827C]">Kalite Kontrol</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
