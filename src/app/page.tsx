import { Metadata } from 'next';
import Header from '../components/common/Header';
import Button from '../components/ui/button';

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
              <a href="mailto:contact@digitalwings.com">
                <Button variant="outline" className="px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 text-base font-medium text-text-primary bg-white border-t-2 border-primary-background mt-auto w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[18px] flex justify-between items-center">
          <div className="flex gap-4 sm:gap-6 text-base font-medium">
            <a href="/privacy-policy" className="hover:text-primary-background transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-primary-background transition-colors">Terms and Conditions</a>
          </div>
          <div className="text-center text-base font-medium">
            Copyrights © 2026 DIGITAL WINGS TRAVELS. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}