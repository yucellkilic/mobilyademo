"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Check, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  num: string;
  name: string;
  category: string;
  file: string;
  desc: string;
  specs: string[];
}

interface ProductsSectionProps {
  onOpenCatalogueModal: (productName?: string) => void;
}

export default function ProductsSection({ onOpenCatalogueModal }: ProductsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "noir-modular-sofa",
      num: "01",
      name: "NOIR MODULAR SOFA",
      category: "Oturma Grubu",
      file: "/assets/products/modern-siyah-kanepe.png",
      desc: "Derin oturum yapısı, güçlü silueti ve modüler formuyla modern yaşam alanları için tasarlanan ikonik bir kanepe.",
      specs: [
        "Premium dokuma kumaş kaplama",
        "Masif ahşap iç taşıyıcı iskelet",
        "Modüler ve esnek kullanım seçeneği",
        "Otel lobisi ve residence kullanımına uygun",
      ],
    },
    {
      id: "arco-lounge-chair",
      num: "02",
      name: "ARCO LOUNGE CHAIR",
      category: "Tekli Oturum",
      file: "/assets/products/tekli-berjer.png",
      desc: "Akıcı hatları ve ergonomik gövdesiyle bekleme alanları, otel lobileri ve modern yaşam alanları için güçlü bir vurgu parçası.",
      specs: [
        "Ergonomik yüksek sırtlı oturum",
        "Yüksek yoğunluklu soğuk döküm sünger",
        "Özel kadife ve dokuma kumaş alternatifleri",
        "Bronz metal veya masif ahşap ayak seçeneği",
      ],
    },
    {
      id: "lume-glass-table",
      num: "03",
      name: "LUME GLASS TABLE",
      category: "Orta Sehpa",
      file: "/assets/products/cam-orta-sehpa.png",
      desc: "Şeffaf yüzeyi, zarif geometrisi ve hafif görsel yapısıyla modern oturma alanlarına dengeli bir karakter kazandırır.",
      specs: [
        "Füme ve ekstra berrak temperli cam",
        "Lazer kesim statik boyalı metal gövde",
        "Çizilmeye dayanıklı özel yüzey koruma",
        "Farklı mimari ölçü kombinasyonları",
      ],
    },
    {
      id: "terra-dining-set",
      num: "04",
      name: "TERRA DINING SET",
      category: "Yemek Odası",
      file: "/assets/products/ahsap-yemek-masasi-sandalye.png",
      desc: "Doğal ahşabın sıcaklığını çağdaş çizgilerle buluşturan Terra, uzun sofralar ve güçlü yaşam alanları için tasarlandı.",
      specs: [
        "Doğal meşe ve ceviz kaplama masa yüzeyi",
        "Masif ahşap açılı taşıyıcı bacaklar",
        "Ergonomik döşemeli konforlu sandalyeler",
        "8, 10 ve 12 kişilik özel proje ölçüleri",
      ],
    },
    {
      id: "axis-media-console",
      num: "05",
      name: "AXIS MEDIA CONSOLE",
      category: "Yaşam Alanı",
      file: "/assets/products/tv-unitesi.png",
      desc: "Minimal formu ve akıllı depolama çözümleriyle teknolojiyi yaşam alanının doğal bir parçasına dönüştürür.",
      specs: [
        "Gizli kablo kanalları ve havalandırma",
        "Modüler kapaklı depolama bölmeleri",
        "Soft-close sessiz frenli mekanizma",
        "Projenize özel ahşap ve lake renk kartelası",
      ],
    },
    {
      id: "sera-bed",
      num: "06",
      name: "SERA BED",
      category: "Yatak Odası",
      file: "/assets/products/modern-karyola.png",
      desc: "Yumuşak hatları, güçlü başlık tasarımı ve dengeli oranlarıyla yatak odasında sakin ve rafine bir atmosfer oluşturur.",
      specs: [
        "Döşemeli ergonomik yatak başlığı",
        "Çelik profil ile güçlendirilmiş gövde",
        "Leke tutmaz özel kumaş alternatifleri",
        "Otel suit projelerine uygun özel üretim",
      ],
    },
  ];

  // Scroll listener to update active product index smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalHeight));
      setScrollProgress(progress);
      
      const newIndex = Math.min(products.length - 1, Math.floor(progress * products.length));
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products.length]);

  const activeProduct = products[activeIndex];
  
  // Calculate interpolation between current and next product
  const itemProgress = (scrollProgress * products.length) % 1;

  return (
    <section
      id="urunler"
      ref={sectionRef}
      className="relative min-h-[700vh] border-b border-white/5"
    >
      {/* Sticky Pinned Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden blueprint-grid">
        
        {/* Giant Product Number Background Watermark (~4% Opacity) */}
        <span className="absolute right-6 bottom-4 md:right-16 md:bottom-8 text-[32vw] md:text-[38vw] font-serif-editorial text-[#F4F1EA]/[0.04] pointer-events-none select-none leading-none z-0 transition-all duration-700">
          {activeProduct.num}
        </span>

        {/* Dynamic Animated Champagne Accent Tracking Line */}
        <div 
          className="absolute left-0 w-1 bg-[#C9A875] transition-all duration-500 rounded-r-full shadow-[0_0_15px_#C9A875]"
          style={{
            top: `${(activeIndex / products.length) * 100}%`,
            height: `${100 / products.length}%`,
          }}
        />

        {/* Main Grid Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 mx-auto grid grid-cols-12 gap-6 md:gap-12 items-center">
          
          {/* Left Text Block (40% Column Width) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
            
            {/* Header Specs & Progress Indicator */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C9A875] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VELORA SELECTED PIECES</span>
              </span>
              <span className="font-serif-editorial text-lg text-[#F4F1EA]">
                {activeProduct.num} <span className="text-xs text-[#85827C]">/ 06</span>
              </span>
            </div>

            {/* Category Tag */}
            <span className="glass-chip px-3 py-1 rounded-full text-[10px] font-semibold text-[#C9A875] uppercase tracking-wider w-fit border border-[#C9A875]/30">
              {activeProduct.category}
            </span>

            {/* Product Title - Animate with slide */}
            <div className="relative h-auto">
              <h2 
                key={activeProduct.id}
                className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4F1EA] font-normal leading-tight animate-slideInLeft"
              >
                {activeProduct.name}
              </h2>
            </div>

            {/* Description - Fade in */}
            <div className="relative overflow-hidden">
              <p 
                key={`desc-${activeProduct.id}`}
                className="text-sm md:text-base text-[#B8B3AA] leading-relaxed font-normal animate-fadeIn"
              >
                {activeProduct.desc}
              </p>
            </div>

            {/* Technical Detail Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {activeProduct.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-xs text-[#F4F1EA] animate-fadeIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Check className="w-3.5 h-3.5 text-[#C9A875] flex-shrink-0" />
                  <span className="text-[#B8B3AA]">{spec}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onOpenCatalogueModal(activeProduct.name)}
                className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] shadow-[0_0_25px_rgba(201,168,117,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                <span>Ürünü İncele</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#iletisim"
                className="px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F4F1EA] bg-white/5 border border-white/15 hover:border-[#C9A875]/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <span>Teklif Al</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A875]" />
              </a>
            </div>
          </div>

          {/* Right Product Image Container - Carousel with all products visible */}
          <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center min-h-[300px] md:min-h-[500px] overflow-hidden">
            
            {/* Ambient Backlight Ring */}
            <div className="absolute inset-0 bg-radial from-[#C9A875]/15 via-transparent to-transparent blur-[90px] rounded-full pointer-events-none z-5" />

            {/* All Products - Continuous scroll without breaks */}
            {products.map((product, idx) => {
              // Calculate position based on overall scroll progress
              const productOffset = idx - scrollProgress * (products.length - 1);
              
              return (
                <div
                  key={product.id}
                  className="absolute z-20 w-full max-w-[620px] transition-none duration-0 transform"
                  style={{
                    transform: `translateX(${productOffset * 150}px) scale(${Math.max(0.3, 1 - Math.abs(productOffset) * 0.25)})`,
                    opacity: Math.max(0, 1 - Math.abs(productOffset) * 0.5),
                    zIndex: Math.round((1 - Math.abs(productOffset)) * 100),
                    pointerEvents: productOffset < 0.5 ? "auto" : "none",
                  }}
                >
                  <Image
                    src={product.file}
                    alt={product.name}
                    width={1200}
                    height={850}
                    quality={95}
                    className="w-full h-auto object-contain product-shadow filter drop-shadow-[0_40px_60px_rgba(0,0,0,0.85)]"
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Pagination Selector Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                if (sectionRef.current) {
                  const targetScroll = sectionRef.current.offsetTop + (idx / products.length) * (sectionRef.current.offsetHeight - window.innerHeight);
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? "w-8 bg-[#C9A875] shadow-[0_0_10px_#C9A875]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ürün ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
