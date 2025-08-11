import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Java Lava Bot | Discord Moderation & Fun",
  description: "The ultimate Discord bot for moderation, community engagement, and entertainment",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL('https://javalava.com'),
  openGraph: {
    title: "Java Lava Discord Bot",
    description: "Powerful moderation and community management for Discord servers",
    url: "https://javalava.com",
    siteName: "Java Lava Discord Bot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Java Lava Discord Bot",
    description: "Powerful moderation and community management for Discord servers",
    creator: "@JavaLavaBot",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen selection:bg-[var(--color-primary)] selection:text-white"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
