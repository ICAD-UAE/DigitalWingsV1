import { notFound } from 'next/navigation';
import Header from '../../components/common/Header';
import Button from '../../components/ui/button';

const underConstructionPages = new Set(['packages', 'tours', 'about', 'contact']);

export default async function UnderConstructionRoutePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const resolvedParams = await params;
  const page = (resolvedParams.page ?? '').toLowerCase();

  if (!underConstructionPages.has(page)) {
    notFound();
  }

  const pageLabel = page
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[18px] pt-12 sm:pt-16 pb-8 flex-grow">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-background-overlayHeavy border border-border-white rounded-lg shadow-[10px_10px_20px_#0000003f] p-8 sm:p-12">
            <p className="text-[14px] sm:text-[14px] font-alegreya font-normal leading-[15px] text-text-muted mb-3">
              {pageLabel}
            </p>
            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-abril font-normal leading-[24px] sm:leading-[28px] text-text-secondary mb-4">
              Under Construction
            </h1>
            <p className="text-[14px] sm:text-[18px] md:text-[20px] font-work font-light leading-[18px] sm:leading-[23px] text-text-primary mb-8">
              DigitalWings is coming soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#">
                <Button className="px-8 py-3">Back to Home</Button>
              </a>
              <a href="mailto:contact@digitalwings.ai">
                <Button variant="outline" className="px-8 py-3">
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