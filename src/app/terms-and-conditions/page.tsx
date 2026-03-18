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
              <p className="mb-4"><strong>Digital Wings Travels LLC | Your Trusted Travel Partner</strong></p>
              
              <p className="mb-4">
                Welcome to Digital Wings Travels LLC, a registered entity in Abu Dhabi, United Arab Emirates (UAE), which serves as our country of domicile. By using our website, www.digitalwings.ai (the "Site"), you agree to be bound by the following terms and conditions. Any disputes or claims arising from this website are governed by the laws of the UAE. Please read these Terms and Conditions carefully. If you do not agree with any part, refrain from using the Site.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">1. Introduction</h2>
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern your access to and use of the Site, including its services such as booking flights, hotels, car rentals, and other travel-related solutions. By using the Site or associated mobile applications, you accept these Terms.
              </p>
              <p className="mb-4">
                We reserve the right to update these Terms at any time without prior notice. Any modifications will be effective upon posting. Your continued use of the Site constitutes acceptance of any changes.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">2. Use of the Site</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Eligibility:</strong> You must be at least 18 years old to use our services. By accessing the Site, you confirm your legal capacity to enter into this agreement.</li>
                <li><strong>Account Registration:</strong> To utilize certain services, you may need to create an account. You agree to provide accurate and complete information and update it as needed.</li>
                <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately of any unauthorized access or security breaches.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">3. Booking and Payment</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Booking:</strong> All bookings are subject to availability and confirmation. You agree to provide accurate details during the booking process.</li>
                <li><strong>Payment:</strong> Payments must be made using a valid credit card or other accepted payment methods. All charges, including taxes and fees, are your responsibility.</li>
                <li><strong>Confirmation:</strong> Upon successful booking, a confirmation email will be sent. Review it carefully and notify us immediately of any discrepancies.</li>
                <li><strong>Updates:</strong> Always verify the latest terms, conditions, or changes to travel details through the Site or by contacting us.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">4. Rates and Price Variations</h2>
              <p className="mb-4">
                Prices are subject to change due to exchange rate fluctuations, supplier adjustments, or other factors. If a cost increase occurs, you may be required to pay the difference or cancel the booking, which could result in cancellation fees. Rates quoted are specific to the time of booking and may vary before the travel date.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">5. Cancellations and Changes</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Cancellation Policies:</strong> Cancellations are subject to the terms of the service providers, including airlines and hotels. Review specific policies at the time of booking.</li>
                <li><strong>Non-Refundable Bookings:</strong> Some bookings, such as certain airfare types, are non- refundable or non-transferable.</li>
                <li><strong>Changes:</strong> Requests for changes must be submitted through the Site or customer service. Additional charges may apply.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">6. Card Fees</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>A fee of 2.90% will apply to payments made by credit card (Visa, MasterCard).</li>
                <li>Any costs arising from chargebacks or disputed transactions will be charged to the cardholder and are non-refundable.</li>
                <li>Payments via direct deposit do not incur additional fees.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">7. Travel Documents</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Passports and Visas:</strong> Ensure you have the necessary documentation, including a valid passport and visas, as required. We are not responsible for issues arising from incomplete documentation.</li>
                <li><strong>Health Requirements:</strong> Verify and comply with all health-related requirements for your destination, including vaccinations.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">8. Limitation of Liability</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>General:</strong> We are not liable for any indirect, incidental, or consequential damages resulting from your use of the Site or services.</li>
                <li><strong>Third-Party Services:</strong> As an intermediary, we are not responsible for actions or omissions by third-party providers, such as airlines or hotels.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">9. Inclusions and Exclusions</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Prices Include:</strong> Items like accommodation, transfers, tours, car hire, government taxes, and any inclusions specified on the relevant product pages.</li>
                <li><strong>Prices Exclude:</strong> Items such as meals (unless specified), personal services, and costs incurred en route to or from the destination.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">10. Privacy</h2>
              <p className="mb-4">
                Your use of the Site is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information. The policy is available here.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">11. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to amend these Terms at any time. Updates will take effect immediately upon posting to the Site. Your continued use of the Site signifies your acceptance of these changes.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">12. Contact Us</h2>
              <p className="mb-4">
                For questions, concerns, or further clarification regarding these Terms, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Email: contact@digitalwings.ai</li>
              </ul>
              
              <p className="mb-4">
                At Digital Wings Travels LLC, we strive to deliver a seamless and enjoyable travel experience. Thank you for choosing us as your travel partner.
              </p>
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