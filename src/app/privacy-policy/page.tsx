import { Metadata } from 'next';
import Header from '../../components/common/Header';

export const metadata: Metadata = {
  title: 'DigitalWings - Privacy Policy',
  description: 'DigitalWings Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[18px] pt-12 sm:pt-16 pb-8 flex-grow">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-background-overlayHeavy border border-border-white rounded-lg shadow-[10px_10px_20px_#0000003f] p-8 sm:p-12">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-abril font-normal leading-[36px] sm:leading-[42px] text-text-secondary mb-6">
              Privacy Policy
            </h1>
            
            <div className="prose max-w-none text-text-primary">
              <p className="mb-4"><strong>Last Updated:</strong> March 17, 2026</p>
              
              <p className="mb-4">
                DigitalWings Travels ("we," "us," or "our") operates the DigitalWings website and mobile application 
                (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure 
                of personal data when you use our Service.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Information Collection and Use</h2>
              <p className="mb-4">
                We collect various types of information for the purpose of providing and improving our Service to you. 
                The types of personal information collected may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your name and contact information</li>
                <li>Travel preferences and booking history</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Usage data and cookies information</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Use of Data</h2>
              <p className="mb-4">
                We use the collected data for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and maintain our Service</li>
                <li>To process transactions</li>
                <li>To send you updates and promotional materials</li>
                <li>To monitor usage of our Service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Security of Data</h2>
              <p className="mb-4">
                The security of your data is important to us. We implement appropriate technical and organizational 
                measures to protect your personal information against unauthorized access, alteration, disclosure, 
                or destruction.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Service Providers</h2>
              <p className="mb-4">
                We may employ third-party companies and individuals to facilitate our Service, provide the Service 
                on our behalf, perform service-related services, or assist us in analyzing how our Service is used. 
                These third parties have access to your personal information only to perform these tasks on our behalf 
                and are obligated not to disclose or use it for any other purpose.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy 
                periodically for any changes. Changes to this Privacy Policy are effective when they are posted on 
                this page.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>By email: privacy@digitalwings.com</li>
                <li>By visiting our website: www.digitalwings.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 text-center text-base font-medium text-text-primary bg-white border-t-2 border-primary-background mt-auto w-full">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm">
          <a href="/privacy-policy" className="hover:text-primary-background transition-colors">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-primary-background transition-colors">Terms and Conditions</a>
        </div>
        <p className="mt-4">Copyrights © 2026 DIGITAL WINGS TRAVELS. All Rights Reserved</p>
      </footer>
    </main>
  );
}