import { siteConfig } from "@/data/config";

export function whatsappUrl(message: string): string {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
export function openWhatsApp(message: string): void {
  const url = whatsappUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
