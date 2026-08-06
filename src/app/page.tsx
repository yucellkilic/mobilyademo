"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";

import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProductionSection from "@/components/ProductionSection";
import CataloguesSection from "@/components/CataloguesSection";
import ProjectsSection from "@/components/ProjectsSection";
import DealersSection from "@/components/DealersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";
import ToastNotification from "@/components/ToastNotification";

export default function Home() {
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [catalogueModalCategory, setCatalogueModalCategory] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenCatalogueModal = (catTitle?: string) => {
    setCatalogueModalCategory(catTitle);
    setCatalogueModalOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full selection:bg-[#c9a875] selection:text-[#070708] z-10">

        {/* Persistent 3D Vanta WAVES Background Layer */}
        <GlobalBackground />

        {/* Navbar Header */}
        <Navbar onOpenCatalogueModal={() => handleOpenCatalogueModal()} />

        {/* 1. Hero Section (100svh) */}
        <HeroSection />

        {/* 2. Vitrin / Yeni & Popüler */}
        <ShowcaseSection />

        {/* 3. Hakkımızda (GSAP ScrollTrigger Horizontal Storytelling) */}
        <AboutSection />

        {/* 4. Ürünler (Sticky Showcase for 6 PNG products) */}
        <ProductsSection onOpenCatalogueModal={handleOpenCatalogueModal} />

        {/* 5. Üretim & Fabrika (Apple-Style Process Flow) */}
        <ProductionSection />

        {/* 6. Koleksiyonlar & PDF Kataloglar */}
        <CataloguesSection onOpenCatalogueModal={handleOpenCatalogueModal} />

        {/* 7. Referans Projeler (Contract Showcase) */}
        <ProjectsSection />

        {/* 8. Satış Ağı & Showrooms */}
        <DealersSection />

        {/* 9. İletişim & Teklif Al */}
        <ContactSection onShowToast={handleShowToast} />

        {/* 10. Corporate Footer */}
        <Footer />

        {/* Interactive Catalogue Modal */}
        <CatalogueModal
          isOpen={catalogueModalOpen}
          onClose={() => setCatalogueModalOpen(false)}
          initialCategory={catalogueModalCategory}
          onShowToast={handleShowToast}
        />

        {/* Toast Notification Alert */}
        <ToastNotification
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </main>
    </SmoothScroll>
  );
}
