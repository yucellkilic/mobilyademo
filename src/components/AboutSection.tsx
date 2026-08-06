"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ShieldCheck, Factory, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".about-panel");
      if (!panels.length || !sectionRef.current) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (sectionRef.current?.offsetWidth || 3000),
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const panels = [
    {
      num: "01",
      tag: "01 / HİKÂYEMİZ",
      title: "Bir Atölyeden Güçlü Bir Üretim Markasına",
      desc: "VELORA, mobilyayı yalnızca bir eşya olarak değil, mekâna karakter kazandıran bir tasarım unsuru olarak görür. Usta işçilikle başlayan yolculuğumuz bugün modern üretim teknolojileri ve büyük ölçekli proje çözümleriyle devam ediyor.",
      image: "/assets/images/about-craft.png",
      badge: "Gaziantep Merkezli Üretim",
    },
    {
      num: "02",
      tag: "02 / VİZYON",
      title: "Zamansız Tasarımı Yeni Nesil Üretimle Buluşturmak",
      desc: "Amacımız, kısa süreli trendlerden bağımsız, uzun yıllar değerini koruyan mobilyalar tasarlamak ve VELORA’yı uluslararası ölçekte güvenilen bir tasarım markasına dönüştürmektir.",
      image: "/assets/images/about-vision.png",
      badge: "Mimari Vizyon",
    },
    {
      num: "03",
      tag: "03 / MİSYON",
      title: "Her Projede Estetik, Konfor ve Dayanıklılık",
      desc: "Doğru malzeme, hassas üretim ve güçlü proje yönetimiyle konut, ofis ve otel projelerinin ihtiyaçlarına özel mühendislik çözümleri sunuyoruz.",
      image: "/assets/images/project-arden.png",
      highlights: [
        "Seçkin doğal ahşap ve metal malzemeler",
        "Hassas el işçiliği & ergonomik detaylar",
        "Sürdürülebilir ve çevreci üretim ilkeleri",
        "Zamanında ve eksiksiz şantiye teslimatı",
      ],
      badge: "Kalite Sözü",
    },
    {
      num: "04",
      tag: "04 / ÜRETİM GÜCÜ",
      title: "Fikirden Seri Üretime Eksiksiz Süreç",
      desc: "Modern makine parkurumuz, uzman ekibimiz ve esnek üretim kapasitemiz sayesinde tekil ürünlerden büyük ölçekli toplu projelere kadar tüm süreçleri kendi bünyemizde yönetiyoruz.",
      image: "/assets/images/factory-main.png",
      stats: [
        { label: "20+ Yıl", sub: "Üretim Deneyimi", icon: ShieldCheck },
        { label: "12.000 m²", sub: "Üretim Alanı", icon: Factory },
        { label: "280+", sub: "Tamamlanan Proje", icon: Award },
        { label: "18 Şehir", sub: "Teslimat Ağı", icon: CheckCircle2 },
      ],
      badge: "Yüksek Kapasite",
    },
  ];

  return (
    <section id="hakkimizda" ref={triggerRef} className="relative overflow-hidden border-b border-white/5">
      <div ref={sectionRef} className="flex w-[400vw] h-screen items-center">
        {panels.map((panel, idx) => (
          <div
            key={idx}
            className="about-panel w-vw h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-16 relative overflow-hidden blueprint-grid"
          >
            {/* Giant Background Number Watermark (~4% Opacity) */}
            <span className="absolute right-8 bottom-4 text-[26vw] font-serif-editorial text-[#F4F1EA]/[0.04] pointer-events-none select-none leading-none z-0">
              {panel.num}
            </span>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              
              {/* Left Text Block */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-chip w-fit text-[#C9A875] text-[11px] font-semibold tracking-widest uppercase border border-[#C9A875]/30">
                  <span>{panel.tag}</span>
                </div>

                <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal leading-tight">
                  {panel.title}
                </h2>

                <p className="text-sm md:text-base text-[#B8B3AA] font-normal leading-relaxed">
                  {panel.desc}
                </p>

                {/* Panel 03 List */}
                {panel.highlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    {panel.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#F4F1EA]">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A875] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Panel 04 Stats */}
                {panel.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                    {panel.stats.map((st, i) => {
                      const Icon = st.icon;
                      return (
                        <div key={i} className="glass-panel p-3.5 rounded-2xl flex flex-col gap-1 border border-white/10">
                          <Icon className="w-4 h-4 text-[#C9A875]" />
                          <span className="text-base font-bold text-[#F4F1EA]">{st.label}</span>
                          <span className="text-[10px] text-[#85827C]">{st.sub}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Image / Visual Block */}
              <div className="lg:col-span-6 relative h-[280px] sm:h-[380px] md:h-[480px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
                {panel.image ? (
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    className="object-cover object-center filter brightness-90 contrast-105"
                  />
                ) : (
                  <div className="w-full h-full bg-[#141519] flex items-center justify-center p-8 text-center border border-white/10">
                    <span className="font-serif-editorial text-3xl text-[#C9A875]">VELORA HQ</span>
                  </div>
                )}
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 glass-chip px-4 py-2 rounded-full text-xs font-semibold text-[#F4F1EA] border border-white/20">
                  {panel.badge}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
