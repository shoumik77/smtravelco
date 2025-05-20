// Create this file at app/terms/page.tsx (Next.js App Router)
// Or at pages/terms.tsx (Next.js Pages Router)

import React from 'react';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#f4f1eb] min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header with navigation back */}
        <div className="mb-12">
          <Link href="/" className="text-[#5e2b0c] hover:text-[#7a3910] transition-colors inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[#5e2b0c] mt-6 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        {/* Terms and Conditions Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">1. Booking Terms & Conditions:</h2>
              <p className="text-gray-700 leading-relaxed">
                All services provided are subject to the terms and conditions of the respective service providers, including airlines, hotels, and tour operators. Please review their policies regarding cancellations, changes, and refunds.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">2. Payment & Currency:</h2>
              <p className="text-gray-700 leading-relaxed">
                All payments must be made in accordance with the payment terms outlined. Prices are subject to change based on availability and exchange rates at the time of booking.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">3. Travel Insurance:</h2>
              <p className="text-gray-700 leading-relaxed">
                We highly recommend purchasing travel insurance to cover unforeseen circumstances such as cancellations, medical emergencies, and lost baggage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">4. Liability:</h2>
              <p className="text-gray-700 leading-relaxed">
                The travel company acts solely as an intermediary between the client and the service providers. We are not liable for any loss, injury, or damage arising out of the services provided by third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">5. Cancellations & Refunds:</h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds and cancellations are subject to the policies of the service providers. Please refer to the booking details for specific terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">6. Force Majeure:</h2>
              <p className="text-gray-700 leading-relaxed">
                We are not responsible for any changes, delays, or cancellations due to events beyond our control, including natural disasters, strikes, or government regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">7. Travel Documentation:</h2>
              <p className="text-gray-700 leading-relaxed">
                It is the responsibility of the traveler to ensure that all required travel documents (passports, visas, etc.) are obtained and valid prior to travel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">8. Client Responsibility:</h2>
              <p className="text-gray-700 leading-relaxed">
                Clients are responsible for ensuring that they meet all necessary health, safety, and entry requirements for their destination, including vaccinations or COVID-19 regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#5e2b0c] mb-3">9. Please Note:</h2>
              <p className="text-gray-700 leading-relaxed">
                Flight prices are dynamic and may change at any time. Quotes are based on current availability and are not guaranteed until full payment is received and the booking is confirmed.
              </p>
            </div>
          </div>

          {/* Contact section */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#5e2b0c] mb-4">Questions About Our Terms?</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <Link href="/#footer-section" className="bg-[#5e2b0c] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7a3910] hover:shadow-lg transition-all duration-300 inline-block">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SM Travel Company. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;