"use client";

import { X as XIcon, Download as DownloadIcon, BookOpen as BookIcon } from "lucide-react";

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  onShowToast: (msg: string) => void;
}

export default function CatalogueModal({
  isOpen,
  onClose,
  initialCategory,
  onShowToast,
}: CatalogueModalProps) {
  if (!isOpen) return null;

  const handleDownload = (catName: string) => {
    const element = document.createElement("a");
    const file = new Blob([`VELORA Furniture & Contract - ${catName} (Demo Katalog Dokümanı)`], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `velora-${catName.toLowerCase().replace(/ /g, "-")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    onShowToast(`${catName} kataloğu indirildi.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070708]/85 backdrop-blur-2xl animate-fadeIn">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 max-w-2xl w-full relative shadow-2xl flex flex-col gap-6">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F4F1EA] transition-colors"
          aria-label="Kapat"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A875]/20 text-[#C9A875] flex items-center justify-center">
            <BookIcon className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-serif-editorial text-2xl text-[#F4F1EA]">
              VELORA Dijital Kataloglar
            </h3>
            <span className="text-xs text-[#C9A875]">
              {initialCategory ? `Seçili İnceleme: ${initialCategory}` : "2026 Koleksiyon Dosyaları"}
            </span>
          </div>
        </div>

        {/* Catalogues Options Grid */}
        <div className="flex flex-col gap-3">
          {[
            {
              title: "VELORA Living 2026",
              size: "24.5 MB • PDF",
              desc: "Salon, yemek odası ve yatak odası koleksiyonları.",
            },
            {
              title: "VELORA Office & Contract",
              size: "18.2 MB • PDF",
              desc: "Yönetici ofisleri, çalışma alanları ve toplantı çözümleri.",
            },
            {
              title: "VELORA Hospitality Project",
              size: "32.0 MB • PDF",
              desc: "Otel odaları, lobi, restoran ve ortak alan çözümleri.",
            },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4 hover:border-[#C9A875]/40 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#F4F1EA]">{cat.title}</span>
                <span className="text-xs text-[#B8B3AA]">{cat.desc}</span>
                <span className="text-[10px] text-[#C9A875] font-mono mt-1">{cat.size}</span>
              </div>

              <button
                onClick={() => handleDownload(cat.title)}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>İndir</span>
              </button>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-[#85827C] text-center italic">
          * Demo web sitesinde katalog indirme düğmeleri örnek tanıtım dokümanı indirir.
        </p>
      </div>
    </div>
  );
}
