import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Authentic Self',
  description: 'Terms of Service for Authentic Self - Professional Therapy Services',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-eggshell">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-2">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-600 mb-8">Authentic Self</p>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">Ownership & Contact Information</h2>
            <p className="mb-4">This Site is owned and operated by Authentic Self.</p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium">Contact:</p>
              <p>Denise Potter</p>
              <p>Phone: <a href="tel:616-951-1852" className="text-sage-600 hover:underline">616-951-1852</a></p>
              <p>Email: <a href="mailto:therapy@denisepotter.com" className="text-sage-600 hover:underline">therapy@denisepotter.com</a></p>
              <p className="mt-2">Office Address:</p>
              <p>4829 E. Beltline Ave NE, Suite 303</p>
              <p>Grand Rapids, MI 49525</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing or using this Site, you agree to be bound by these Terms and all applicable policies, rules, and procedures that may be posted from time to time. If you do not agree with these Terms, please do not use this Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">SMS Consent</h2>
            <p className="mb-4">
              By opting into SMS communication through a web form or other channel, you agree to receive text messages from Authentic Self PLLC. These messages may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Appointment scheduling</li>
              <li>Appointment reminders</li>
              <li>Post-session instructions</li>
              <li>Administrative or billing notifications</li>
            </ul>
            <p>
              Message frequency may vary. Message and data rates may apply. SMS consent and phone numbers are never shared or sold for marketing purposes. You may opt out at any time by texting STOP. For assistance, text HELP or visit our website.
              Please refer to our <a href="/privacy" className="text-sage-600 hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-sage-600 hover:underline">Terms of Service</a> for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Michigan and applicable federal law. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">Changes to These Terms</h2>
            <p>
              Authentic Self PLLC reserves the right to update or revise these Terms at any time. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">User Conduct</h2>
            <p>
              You agree to use this Site only for lawful purposes and in a manner that does not violate the rights of others, interfere with others' use of the Site, or attempt to compromise the security or functionality of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Authentic Self PLLC shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from your access to or use of this Site or reliance on any content provided.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
