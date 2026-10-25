import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "HEKMAT TECH | طراحی ویب‌سایت و نرم‌افزار",
  description: "HEKMAT TECH — طراحی ویب‌سایت‌های حرفه‌ای، دیتابیس و نرم‌افزارهای مدیریتی در افغانستان. Professional websites and software solutions.",
  applicationName: "HEKMAT TECH",
  openGraph: { title: "HEKMAT TECH", description: "Websites, database systems & custom business software", type: "website" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08090D" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa-AF" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
