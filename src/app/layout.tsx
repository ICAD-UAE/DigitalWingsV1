
import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'DigitalWings',                           
    template: 'DigitalWings | %s',                     
  },
  description: 'Discover amazing travel destinations with DigitalWings. Book flights to Italy, Maldives, Bahamas, and Greece. Award-winning service with adventure activities and dream vacation packages.',
  keywords: 'travel, vacation, flights, destinations, Italy, Maldives, Bahamas, Greece, adventure, booking, holidays',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'DigitalWings',                        
      template: 'DigitalWings | %s',                 
    },
    description: 'Book your dream vacation with DigitalWings. Explore popular destinations, adventure activities, and award-winning travel experiences worldwide.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.45)), url('/images/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fstartrave3400back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}
