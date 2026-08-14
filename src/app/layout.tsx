import type { Metadata } from "next";
import "./globals.css";
import HotbarNav from "../components/HotbarNav";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import AudioManager from "../components/AudioManager";
import Image from "next/image";
import { Inter, VT323 } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const vt323 = VT323({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Rishav — Minecraft Developer",
  description: "Custom Minecraft plugins, resource packs, and server experiences. Bringing your server ideas to life.",
  icons: {
    icon: "/images/logo/logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${vt323.variable}`}>
      <head>
      </head>
      <body className="grid-bg">
        <CustomCursor />
        <AudioManager />
        <LoadingScreen>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 3rem', alignItems: 'flex-start' }}>
            {/* Top Left User Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#333', border: '2px solid #555' }}>
                <Image src="/minecraft/block/grass_block_side.png" alt="Avatar" width={48} height={48} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ color: 'var(--mc-yellow)', fontSize: '1.2rem', fontWeight: 'bold' }}>RD</div>
                <div style={{ color: 'var(--mc-green)', fontSize: '1rem' }}>Rishav</div>
              </div>
            </div>

            {/* Top Right Hotbar */}
            <HotbarNav />
          </div>

          <main style={{ padding: '0 3rem' }}>{children}</main>
          
          <div style={{ marginTop: '4rem' }}>
            <Footer />
          </div>
        </LoadingScreen>
      </body>
    </html>
  );
}
