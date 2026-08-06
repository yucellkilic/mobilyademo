"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const sofaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sofaRef.current) return;
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 10;
      const moveY = (clientY / window.innerHeight - 0.5) * 10;
      sofaRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center pb-12 overflow-hidden blueprint-grid"
    >
      {/* Background Giant Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="watermark-text text-[22vw] md:text-[25vw] font-normal leading-none tracking-tighter opacity-100">
          VELORA
        </span>
      </div>

      {/* Bottom measurement line */}
      <div className="absolute bottom-16 right-8 md:right-16 hidden md:flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#85827C]/50 pointer-events-none z-10">
        <span>HANDCRAFTED</span>
        <span>•</span>
        <span>MODULAR DESIGN</span>
        <span>•</span>
        <span>CONTRACT GRADE</span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 mx-auto grid grid-cols-12 gap-4 lg:gap-8 items-center pt-20 md:pt-32 min-h-screen">
        
        {/* Left Column - Editorial Text & CTAs */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-6 z-10">

          {/* H1 Editorial Title */}
          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F4F1EA] font-normal leading-[1.05] tracking-tight">
            Mekânlara <br />
            <span className="italic text-[#C9A875] font-light">Kimlik</span> <br />
            Kazandıran Tasarım.
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#B8B3AA] font-normal leading-relaxed max-w-lg">
            Modern yaşam alanları, otel projeleri, ofis çözümleri ve özel üretim koleksiyonlar için zamansız mobilyalar tasarlıyoruz.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#urunler"
              className="px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] shadow-[0_0_30px_rgba(201,168,117,0.35)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Koleksiyonları İncele</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#iletisim"
              className="px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#F4F1EA] bg-white/5 border border-white/20 hover:border-[#C9A875]/60 hover:bg-white/10 transition-all duration-300"
            >
              <span>Projenizi Konuşalım</span>
            </a>
          </div>

          {/* Trust Highlights Line */}
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/10 mt-2">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#F4F1EA]">20+ Yıl</span>
              <span className="text-[10px] text-[#85827C]">Üretim Deneyimi</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#F4F1EA]">Özel Proje</span>
              <span className="text-[10px] text-[#85827C]">Contract Üretim</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#F4F1EA]">18 Şehir</span>
              <span className="text-[10px] text-[#85827C]">Teslimat & Montaj</span>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Showcase Sofa Image */}
        <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center min-h-[300px] md:min-h-[480px]">

          {/* Ambient Lighting Glow */}
          <div className="absolute inset-0 bg-radial from-[#C9A875]/15 via-transparent to-transparent blur-[80px] rounded-full pointer-events-none" />

          {/* Product PNG Display with Smooth Mouse Parallax */}
          <div
            ref={sofaRef}
            className="relative z-10 w-full max-w-[800px] transition-transform duration-500 ease-out"
          >
            <Image
              src="/assets/products/modern-siyah-kanepe.png"
              alt="VELORA Noir Modular Sofa"
              width={1200}
              height={800}
              priority
              loading="eager"
              quality={95}
              className="w-full h-auto object-contain product-shadow filter drop-shadow-[0_35px_50px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#vitrin"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#85827C] hover:text-[#C9A875] transition-colors z-20 group"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-light">Keşfetmek için kaydır</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#C9A875]">
          <div className="w-1 h-2 bg-[#C9A875] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
