import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/content";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for iamapsrajput.com",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy describes how {siteConfig.name} ("we", "our",
                or "us") collects, uses, and protects your personal information
                when you visit and use our website at {siteConfig.domain}.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you voluntarily provide to us:</p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  company name (optional) when you submit contact forms or
                  booking requests
                </li>
                <li>
                  <strong>Booking Information:</strong> Consultation goals,
                  timezone, and any additional notes you provide
                </li>
                <li>
                  <strong>Payment Information:</strong> Payment amounts and
                  invoice/reference IDs (payment processing is handled securely
                  by Razorpay)
                </li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul>
                <li>Responding to your inquiries and consultation requests</li>
                <li>Processing payments for services</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>

              <h2>4. Payment Processing</h2>
              <p>
                Payment processing is handled by Razorpay, a third-party payment
                processor. We do not store your full payment card details. Razorpay
                handles all payment data in accordance with their privacy policy
                and PCI DSS compliance standards.
              </p>

              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfill the purposes outlined in this policy, unless a longer
                retention period is required by law.
              </p>

              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information, including:
              </p>
              <ul>
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
              </ul>

              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>

              <h2>8. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul>
                <li>
                  <strong>Razorpay:</strong> Payment processing (see their
                  privacy policy)
                </li>
                <li>
                  <strong>Resend/SendGrid:</strong> Email delivery (if
                  configured)
                </li>
                <li>
                  <strong>Hosting Provider:</strong> Website hosting and
                  infrastructure
                </li>
              </ul>

              <h2>9. Cookies and Tracking</h2>
              <p>
                We do not use analytics cookies or tracking technologies. We may
                use essential cookies for website functionality and security.
              </p>

              <h2>10. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>

              <h2>13. Jurisdiction</h2>
              <p>
                This Privacy Policy is governed by the laws of Poland. Any disputes
                will be resolved in the courts of Gdańsk, Poland.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
