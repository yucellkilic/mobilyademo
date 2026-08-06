"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export default function ContactSection({ onShowToast }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    projectType: "Konut",
    quantity: "1-10",
    city: "",
    message: "",
    kvkkApproved: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const projectTypes = [
    "Konut Projesi",
    "Ofis & Kurumsal",
    "Otel & Konaklama",
    "Restoran / Kafe / Lounge",
    "Toplu Konut Projesi",
    "Özel Üretim",
    "Bayilik Başvurusu",
    "Diğer",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Ad Soyad alanı zorunludur.";
    if (!formData.phone.trim()) newErrors.phone = "Telefon numarası zorunludur.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }
    if (!formData.kvkkApproved) {
      newErrors.kvkkApproved = "Lütfen KVKK aydınlatma metnini onaylayınız.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      onShowToast("Teklif talebiniz başarıyla alındı.");
      setFormData({
        fullName: "",
        companyName: "",
        phone: "",
        email: "",
        projectType: "Konut",
        quantity: "1-10",
        city: "",
        message: "",
        kvkkApproved: false,
      });
    }, 1200);
  };

  return (
    <section id="iletisim" className="relative py-32 md:py-28 px-4 md:px-8 border-b border-white/5 blueprint-grid">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Specs & Callout (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A875] uppercase block mb-3">
                İLETİŞİM & TEKLİF AL
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-normal leading-tight">
                Projenizi Birlikte Tasarlayalım
              </h2>
              <p className="text-sm text-[#B8B3AA] mt-4 font-normal leading-relaxed">
                Otel, ofis, konut, mağaza ve özel üretim projeleriniz için ihtiyaçlarınızı paylaşın. Mimarlık ekibimiz size özel çözüm ve teklif oluştursun.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4">
              <a
                href="tel:+903420000000"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#C9A875]/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A875]/10 text-[#C9A875] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A875] group-hover:text-[#070708] transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#85827C] tracking-wider uppercase">MERKEZ TELEFON</span>
                  <span className="text-sm font-bold text-[#F4F1EA]">+90 342 000 00 00</span>
                </div>
              </a>

              <a
                href="mailto:info@velora-demo.com"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#C9A875]/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A875]/10 text-[#C9A875] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A875] group-hover:text-[#070708] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#85827C] tracking-wider uppercase">E-POSTA DESTEK</span>
                  <span className="text-sm font-bold text-[#F4F1EA]">info@velora-demo.com</span>
                </div>
              </a>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A875]/10 text-[#C9A875] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#85827C] tracking-wider uppercase">FABRİKA & SHOWROOM</span>
                  <span className="text-xs text-[#F4F1EA]">Organize Sanayi Bölgesi, Gaziantep (Demo Adres)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Liquid Glass Proposal Form (7 Columns) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative">
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F4F1EA]">
                    Ad Soyad <span className="text-[#C9A875]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmet Yılmaz"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F4F1EA] placeholder-[#85827C] focus:border-[#C9A875] focus:outline-none transition-colors"
                  />
                  {errors.fullName && <span className="text-[11px] text-red-400">{errors.fullName}</span>}
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F4F1EA]">Firma Adı</label>
                  <input
                    type="text"
                    placeholder="Yılmaz Mimarlık / Otel A.Ş."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F4F1EA] placeholder-[#85827C] focus:border-[#C9A875] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F4F1EA]">
                    Telefon <span className="text-[#C9A875]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0532 000 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F4F1EA] placeholder-[#85827C] focus:border-[#C9A875] focus:outline-none transition-colors"
                  />
                  {errors.phone && <span className="text-[11px] text-red-400">{errors.phone}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F4F1EA]">
                    E-posta <span className="text-[#C9A875]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ahmet@firma.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F4F1EA] placeholder-[#85827C] focus:border-[#C9A875] focus:outline-none transition-colors"
                  />
                  {errors.email && <span className="text-[11px] text-red-400">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F4F1EA]">Proje Türü</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141519] border border-white/10 text-sm text-[#F4F1EA] focus:border-[#C9A875] focus:outline-none transition-colors"
                  >
                    {projectTypes.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F4F1EA]">Şehir</label>
                  <input
                    type="text"
                    placeholder="İstanbul / Gaziantep"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F4F1EA] placeholder-[#85827C] focus:border-[#C9A875] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#F4F1EA]">Proje Notları & Detaylar</label>
                <textarea
                  rows={4}
                  placeholder="Projeniz hakkında ürün adetleri, teslimat tarihi veya özel üretim detaylarını yazabilirsiniz..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F4F1EA] placeholder-[#85827C] focus:border-[#C9A875] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* KVKK Checkbox */}
              <div className="flex flex-col gap-1 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.kvkkApproved}
                    onChange={(e) => setFormData({ ...formData, kvkkApproved: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#C9A875] focus:ring-[#C9A875]"
                  />
                  <span className="text-xs text-[#B8B3AA] leading-normal">
                    <span className="text-[#F4F1EA] underline">KVKK Aydınlatma Metni</span>'ni okudum ve kişisel verilerimin iletişim amacıyla işlenmesini onaylıyorum.
                  </span>
                </label>
                {errors.kvkkApproved && <span className="text-[11px] text-red-400">{errors.kvkkApproved}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] shadow-[0_0_25px_rgba(201,168,117,0.35)] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <span>Teklif Talebi Gönder</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Success Demo Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070708]/80 backdrop-blur-xl animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-[#C9A875]/40 max-w-md w-full text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A875]/20 text-[#C9A875] flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#F4F1EA]">
              Teklif Talebiniz Alındı
            </h3>
            <p className="text-xs text-[#B8B3AA] leading-relaxed">
              Talebiniz başarıyla simüle edilmiştir. Bu çalışma konsept gösterimi amaçlı hazırlanmış bir **demo formudur**. Hiçbir kişisel veri kaydedilmemiştir.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#070708] bg-[#C9A875] hover:bg-[#E6C896] transition-all"
            >
              Tamam
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
