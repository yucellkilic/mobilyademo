"use client";

import { CheckCircle2 } from "lucide-react";

interface ToastNotificationProps {
  message: string | null;
  onClose: () => void;
}

export default function ToastNotification({ message, onClose }: ToastNotificationProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="glass-panel px-5 py-3.5 rounded-2xl border border-[#C9A875]/50 shadow-2xl flex items-center gap-3 text-xs text-[#F4F1EA]">
        <CheckCircle2 className="w-4 h-4 text-[#C9A875] flex-shrink-0" />
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-[#85827C] hover:text-[#F4F1EA] text-xs font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
