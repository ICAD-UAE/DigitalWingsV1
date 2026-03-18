import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 text-base font-medium text-text-primary bg-white border-t-2 border-primary-background mt-auto w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[18px] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 sm:gap-6 text-base font-medium">
          <Link href="/privacy-policy" className="hover:text-primary-background transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-primary-background transition-colors">
            Terms and Conditions
          </Link>
        </div>
        <div className="text-center text-base font-medium w-full sm:w-auto">
          Copyrights © 2026 DIGITAL WINGS TRAVELS. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;