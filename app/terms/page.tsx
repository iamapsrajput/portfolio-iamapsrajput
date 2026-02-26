import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/content";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for iamapsrajput.com",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using {siteConfig.domain}, you accept and agree
                to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use this website.
              </p>

              <h2>2. Services</h2>
              <p>
                This website provides information about DevOps and cloud
                engineering consulting services offered by {siteConfig.name}.
                Services include but are not limited to:
              </p>
              <ul>
                <li>DevOps consulting</li>
                <li>Cloud/platform engineering</li>
                <li>CI/CD and IaC implementation</li>
                <li>Observability and incident response</li>
                <li>Application development</li>
              </ul>

              <h2>3. Booking and Consultation</h2>
              <p>
                Consultation bookings are requests only. All consultations are
                subject to availability and confirmation. We reserve the right to
                decline any booking request at our discretion.
              </p>

              <h2>4. Payment Terms</h2>
              <ul>
                <li>
                  Payment is due as specified in individual service agreements or
                  invoices
                </li>
                <li>All payments are processed securely through Razorpay</li>
                <li>
                  Prices are in INR (Indian Rupees) unless otherwise specified
                </li>
                <li>
                  We reserve the right to change pricing at any time, with
                  existing agreements honored
                </li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and
                software, is the property of {siteConfig.name} or its content
                suppliers and is protected by copyright and other intellectual
                property laws.
              </p>

              <h2>6. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Use automated systems to access the website without permission</li>
              </ul>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, {siteConfig.name} shall
                not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of this website or
                services.
              </p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>
                This website and its content are provided "as is" without
                warranties of any kind, either express or implied. We do not
                guarantee that the website will be error-free or continuously
                available.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless {siteConfig.name} from
                any claims, damages, or expenses arising from your use of the
                website or violation of these terms.
              </p>

              <h2>10. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the
                website at any time, without notice, for any reason, including
                violation of these terms.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use of
                the website constitutes acceptance of the modified terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of Poland. Any
                disputes will be resolved in the courts of Gdańsk, Poland.
              </p>

              <h2>13. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
