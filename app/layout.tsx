import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PGGC-46 NSS Wing",
  description: "Modern NSS portal for PGGC-46, Sector 46, Chandigarh.",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
