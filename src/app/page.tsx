import { Metadata } from 'next';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DigitalWings - Your Dream Vacation Awaits',
  description: 'Discover amazing travel destinations with DigitalWings. Book flights to Italy, Maldives, Bahamas, and Greece. Award-winning service with adventure activities and dream vacation packages.',
  keywords: 'travel, vacation, flights, destinations, Italy, Maldives, Bahamas, Greece, adventure, booking, holidays, DigitalWings, dream vacation',
  
  openGraph: {
    title: 'DigitalWings - Your Dream Vacation Awaits',
    description: 'Book your dream vacation with DigitalWings. Explore popular destinations, adventure activities, and award-winning travel experiences worldwide.',
  }
}

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[18px] pt-12 sm:pt-16 flex-grow">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-background-overlayHeavy border border-border-white rounded-lg shadow-[10px_10px_20px_#0000003f] p-8 sm:p-12">
            <p className="text-[14px] sm:text-[14px] font-alegreya font-normal leading-[15px] text-text-muted mb-3">
              Home
            </p>
            <h1 className="text-[28px] sm:text-[40px] md:text-[34px] font-abril font-normal leading-[36px] sm:leading-[49px] text-text-secondary mb-4">
              Under Construction
            </h1>
            <p className="text-[14px] sm:text-[18px] md:text-[20px] font-work font-light leading-[18px] sm:leading-[23px] text-text-primary mb-8">
              DigitalWings is coming soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="mailto:contact@digitalwings.ai">
                <Button variant="outline" className="px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}