"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-4 md:px-8 border-t border-white/10 overflow-hidden blueprint-grid">
      
      {/* Background Giant Watermark Typography (~3% Opacity) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="watermark-text text-[26vw] font-normal leading-none tracking-tighter opacity-75">
          VELORA
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info (2 Col width on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/assets/logo/velora-logo.png"
                  alt="VELORA"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-2xl font-normal tracking-widest text-[#F4F1EA]">
                  VELORA
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C9A875] uppercase font-light">
                  Furniture & Contract
                </span>
              </div>
            </a>

            <p className="text-xs text-[#B8B3AA] leading-relaxed max-w-sm font-normal">
              VELORA; ev, ofis, otel ve özel mimari projeler için premium mobilya ve anahtar teslim contract üretim çözümleri sunan Gaziantep merkezli üreticidir.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass-chip flex items-center justify-center text-[#B8B3AA] hover:text-[#C9A875] hover:border-[#C9A875]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass-chip flex items-center justify-center text-[#B8B3AA] hover:text-[#C9A875] hover:border-[#C9A875]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://archdaily.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass-chip flex items-center justify-center text-[#B8B3AA] hover:text-[#C9A875] hover:border-[#C9A875]/40 transition-colors"
                aria-label="Architecture Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest text-[#C9A875] uppercase">
              NAVİGASYON
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-[#B8B3AA]">
              <a href="#hero" className="hover:text-[#F4F1EA] transition-colors">Ana Sayfa</a>
              <a href="#hakkimizda" className="hover:text-[#F4F1EA] transition-colors">Hakkımızda</a>
              <a href="#urunler" className="hover:text-[#F4F1EA] transition-colors">Ürünler</a>
              <a href="#uretim" className="hover:text-[#F4F1EA] transition-colors">Üretim</a>
              <a href="#koleksiyonlar" className="hover:text-[#F4F1EA] transition-colors">Koleksiyonlar</a>
            </div>
          </div>

          {/* Column 3: Corporate & Contract */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest text-[#C9A875] uppercase">
              KURUMSAL & PROJE
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-[#B8B3AA]">
              <a href="#projeler" className="hover:text-[#F4F1EA] transition-colors">Referans Projeler</a>
              <a href="#satis-noktalari" className="hover:text-[#F4F1EA] transition-colors">Showrooms</a>
              <a href="#koleksiyonlar" className="hover:text-[#F4F1EA] transition-colors">PDF Kataloglar</a>
              <a href="#iletisim" className="hover:text-[#F4F1EA] transition-colors">Teklif Alın</a>
              <a href="#iletisim" className="hover:text-[#F4F1EA] transition-colors">Mimari İletişim</a>
            </div>
          </div>

          {/* Column 4: Contact Specs */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest text-[#C9A875] uppercase">
              İLETİŞİM
            </span>
            <div className="flex flex-col gap-3 text-xs text-[#B8B3AA]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A875]" />
                <span>+90 342 000 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A875]" />
                <span>info@velora-demo.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A875] flex-shrink-0 mt-0.5" />
                <span>Organize Sanayi Bölgesi, Gaziantep (Demo Adres)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Links & Visible Demo Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#85827C]">
          <span>© 2026 VELORA Furniture & Contract. Tüm hakları saklıdır.</span>

          {/* Legal Pages */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-[#B8B3AA] cursor-pointer">KVKK Aydınlatma Metni</span>
            <span>•</span>
            <span className="hover:text-[#B8B3AA] cursor-pointer">Gizlilik Politikası</span>
            <span>•</span>
            <span className="hover:text-[#B8B3AA] cursor-pointer">Çerez Politikası</span>
          </div>

          {/* Required Explicit Demo Notice */}
          <div className="glass-chip px-3 py-1 rounded-full text-[10px] text-[#C9A875] border border-[#C9A875]/30">
            Bu web sitesi konsept ve portföy gösterimi amacıyla hazırlanmış demo çalışmadır.
          </div>
        </div>

      </div>
    </footer>
  );
}
