import { Metadata } from 'next';
import Header from '../../components/common/Header';

export const metadata: Metadata = {
  title: 'DigitalWings - Terms and Conditions',
  description: 'DigitalWings Terms and Conditions - Important legal terms governing your use of our services.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[18px] pt-12 sm:pt-16 pb-8 flex-grow">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-background-overlayHeavy border border-border-white rounded-lg shadow-[10px_10px_20px_#0000003f] p-8 sm:p-12">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-abril font-normal leading-[36px] sm:leading-[42px] text-text-secondary mb-6">
              Terms and Conditions
            </h1>
            
            <div className="prose max-w-none text-text-primary">
              <p className="mb-4"><strong>Last Updated:</strong> March 17, 2026</p>
              
              <p className="mb-4">
                Welcome to DigitalWings Travels! These terms and conditions outline the rules and regulations for the 
                use of DigitalWings Travels Website and Mobile Application.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Interpretation and Definitions</h2>
              <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following 
                conditions. The following definitions shall have the same meaning regardless of whether they appear 
                in singular or in plural.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Use License</h2>
              <p className="mb-4">
                Unless otherwise stated, DigitalWings Travels and/or its licensors own the intellectual property 
                rights for all material on DigitalWings. All intellectual property rights are reserved. You may 
                access this from DigitalWings for your own personal use subjected to restrictions set in these 
                terms and conditions.
              </p>
              <p className="mb-4">
                You must not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Republish material from DigitalWings</li>
                <li>Sell, rent, or sub-license material from DigitalWings</li>
                <li>Reproduce, duplicate, or copy content from DigitalWings</li>
                <li>Redistribute content from DigitalWings</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">User Account and Registration</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Bookings and Payments</h2>
              <p className="mb-4">
                All bookings made through our Service are subject to availability and confirmation. Prices for travel 
                packages are subject to change without notice. Payment must be made in full at the time of booking 
                unless otherwise specified in the booking terms.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Cancellation Policy</h2>
              <p className="mb-4">
                Cancellation policies vary depending on the specific travel package booked. Please review the 
                cancellation policy applicable to your booking at the time of purchase. Some bookings may be 
                non-refundable, while others may allow cancellations with penalties.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Limitation of Liability</h2>
              <p className="mb-4">
                DigitalWings Travels and its directors, employees, or contractors shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages resulting from your use of 
                our services.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                immediately upon posting to the website. Your continued use of the Service after any changes 
                constitutes acceptance of the new Terms.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction 
                where DigitalWings Travels is registered, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>By email: legal@digitalwings.com</li>
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