"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, BookOpen } from "lucide-react";

interface NavbarProps {
  onOpenCatalogueModal: () => void;
}

export default function Navbar({ onOpenCatalogueModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = [
        "hero",
        "vitrin",
        "hakkimizda",
        "urunler",
        "uretim",
        "koleksiyonlar",
        "projeler",
        "satis-noktalari",
        "iletisim",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Ana Sayfa", href: "#hero", id: "hero" },
    { name: "Hakkımızda", href: "#hakkimizda", id: "hakkimizda" },
    { name: "Ürünler", href: "#urunler", id: "urunler" },
    { name: "Üretim", href: "#uretim", id: "uretim" },
    { name: "Koleksiyonlar", href: "#koleksiyonlar", id: "koleksiyonlar" },
    { name: "Projeler", href: "#projeler", id: "projeler" },
    { name: "Satış Noktaları", href: "#satis-noktalari", id: "satis-noktalari" },
    { name: "İletişim", href: "#iletisim", id: "iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`w-full max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between px-6 md:px-8 ${
          scrolled
            ? "py-3 bg-[#08090b]/80 backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            : "py-4 bg-white/[0.03] backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Brand Logo & Sub-brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logo/velora-logo.png"
              alt="VELORA V Symbol"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-editorial text-xl md:text-2xl font-normal tracking-widest text-[#F4F1EA] leading-none">
              VELORA
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-[#C9A875] uppercase font-light leading-tight mt-0.5">
              Furniture & Contract
            </span>
          </div>
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-[#F4F1EA]" : "text-[#B8B3AA] hover:text-[#F4F1EA]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C9A875] rounded-full shadow-[0_0_8px_#C9A875]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCatalogueModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full text-[#F4F1EA] bg-white/[0.06] border border-white/15 hover:border-[#C9A875]/50 hover:bg-white/10 transition-all duration-300"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C9A875]" />
            <span>Katalog</span>
          </button>
          <a
            href="#iletisim"
            className="flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] shadow-[0_0_20px_rgba(201,168,117,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Teklif Al</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#F4F1EA] rounded-full bg-white/5 border border-white/10 hover:border-[#C9A875]/40 transition-colors"
          aria-label="Menüyü Aç / Kapat"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Glass Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 lg:hidden bg-[#070708]/95 backdrop-blur-3xl border-t border-white/10 p-6 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif-editorial text-[#F4F1EA] hover:text-[#C9A875] transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C9A875]/60" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogueModal();
              }}
              className="w-full py-3.5 text-xs font-semibold tracking-widest uppercase rounded-full text-[#F4F1EA] bg-white/10 border border-white/20 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#C9A875]" />
              <span>Dijital Katalog</span>
            </button>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-xs font-semibold tracking-widest uppercase rounded-full text-[#070708] bg-[#C9A875] flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(201,168,117,0.4)]"
            >
              <span>Teklif Talebi Gönder</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
