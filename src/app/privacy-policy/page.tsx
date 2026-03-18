import { Metadata } from 'next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

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
              Privacy Policy:
            </h1>
            
            <div className="prose max-w-none text-text-primary">
              <p className="mb-4"><strong>Digital Wings Travels LLC | Your Privacy Matters</strong></p>
              
              <p className="mb-4">
                At Digital Wings Travels LLC Abu Dhabi, your confidentiality, privacy, and trust are our top priorities. Our website, www.digitalwings.ai, is designed to offer seamless navigation without requiring personal information unless you choose to share it. Once provided, any personally identifiable information—such as your name, address, phone number, email address, or payment details—will be utilized solely to enhance your customer experience and for internal purposes, such as marketing, research, and improving our website.
              </p>
              
              <p className="mb-4">
                We invite you to read our detailed Privacy Policy below to understand how we protect your data.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Digital Wings Travels LLC - Abu Dhabi. We are dedicated to safeguarding your personal information and privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our website [www.digitalwings.ai] or related platforms, including mobile apps. By using our site, you agree to the practices detailed below. If you disagree with any aspect of this policy, we advise refraining from accessing our services.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">2. Information We Collect</h2>
              <p className="mb-4">
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Personal Data:</strong> Information such as your name, address, email, phone number, demographic details, and preferences, voluntarily provided during activities like account creation or online interactions.</li>
                  <li><strong>Payment Data:</strong> Financial details (e.g., credit card information) collected during purchases or bookings.</li>
                  <li><strong>Derivative Data:</strong> Automatically collected data like IP addresses, browser type, operating system, and site usage patterns.</li>
                </ul>
              </p>
              <p className="mb-4">
                Note: All credit/debit card details and personal information will not be stored, sold, rented, or shared with third parties.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">3. Use of Your Information</h2>
              <p className="mb-4">
                We collect information to provide a seamless and personalized experience. Key uses include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Creating and managing accounts.</li>
                <li>Processing transactions and sending confirmations/invoices.</li>
                <li>Enhancing website functionality.</li>
                <li>Providing customer support and responding to inquiries.</li>
                <li>Sending updates, alerts, and administrative messages.</li>
                <li>Analyzing usage patterns to improve your experience.</li>
              </ul>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">4. Disclosure of Your Information</h2>
              <p className="mb-4">
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Legal Compliance:</strong> Information may be shared to comply with legal requirements or protect rights and safety.</li>
                  <li><strong>Third-Party Providers:</strong> Information may be shared with trusted third parties for services like payment processing, data analysis, email delivery, and customer support.</li>
                </ul>
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">5. Security of Your Information</h2>
              <p className="mb-4">
                We implement robust administrative, technical, and physical security measures to protect your data. However, no system can guarantee 100% security against unauthorized access or misuse. We encourage vigilance while sharing sensitive information online.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">6. Policy for Children</h2>
              <p className="mb-4">
                We do not knowingly collect or market information to children under 13 years of age. If such information is inadvertently collected, it will be promptly deleted upon discovery.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">7. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                This policy may be updated periodically to reflect changes in practices, legal requirements, or operational needs. Please review this page regularly for updates.
              </p>
              
              <h2 className="text-[22px] font-abril font-semibold mt-6 mb-4 text-text-secondary">8. Contact Us</h2>
              <p className="mb-4">
                For any questions, concerns, or feedback regarding our Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Email: contact@digitalwings.ai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}