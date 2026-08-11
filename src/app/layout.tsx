import type { Metadata } from "next";
import "./globals.css";
import HotbarNav from "../components/HotbarNav";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import AudioManager from "../components/AudioManager";

export const metadata: Metadata = {
  title: "SpaceX Dev — Minecraft Developer",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=VT323&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-sans: 'Inter', sans-serif;
            --font-pixel: 'VT323', monospace;
          }
        `}} />
      </head>
      <body className="grid-bg">
        <CustomCursor />
        <AudioManager />
        <LoadingScreen>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 3rem', alignItems: 'flex-start' }}>
            {/* Top Left User Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#333', border: '2px solid #555' }}>
                <img src="/minecraft/block/grass_block_side.png" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
