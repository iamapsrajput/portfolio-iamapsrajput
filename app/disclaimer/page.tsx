import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/content";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for iamapsrajput.com",
};

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Disclaimer</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. General Information</h2>
              <p>
                The information on this website ({siteConfig.domain}) is provided
                by {siteConfig.name} for general informational purposes only.
                While we strive to keep the information accurate and up to date,
                we make no representations or warranties of any kind, express or
                implied, about the completeness, accuracy, reliability, or
                suitability of the information.
              </p>

              <h2>2. Consulting Services Disclaimer</h2>
              <p>
                <strong>No Guarantees:</strong> Consulting services are
                provided based on professional expertise and best practices, but
                we do not guarantee specific outcomes, results, or performance
                improvements. Results may vary based on individual circumstances,
                implementation, and other factors beyond our control.
              </p>

              <p>
                <strong>Professional Advice:</strong> The information and advice
                provided through our consulting services are based on our
                professional judgment and experience. They should not be
                considered as a substitute for comprehensive technical analysis
                or legal, financial, or other professional advice specific to
                your situation.
              </p>

              <h2>3. Third-Party Services and Tools</h2>
              <p>
                We may recommend or work with third-party services, tools, or
                platforms. We are not responsible for:
              </p>
              <ul>
                <li>The availability, functionality, or security of third-party services</li>
                <li>Any issues, downtime, or data loss related to third-party services</li>
                <li>Changes in third-party service terms, pricing, or features</li>
                <li>Compatibility issues between third-party services and your systems</li>
              </ul>

              <h2>4. Payment Processing</h2>
              <p>
                Payment processing is handled by Razorpay, a third-party payment
                processor. We are not responsible for:
              </p>
              <ul>
                <li>Payment processing errors or delays</li>
                <li>Security breaches in Razorpay's systems</li>
                <li>Disputes between you and Razorpay</li>
                <li>Changes to Razorpay's terms or fees</li>
              </ul>
              <p>
                Please review Razorpay's terms and privacy policy for
                information about their services.
              </p>

              <h2>5. Website Availability</h2>
              <p>
                We do not guarantee that the website will be available
                continuously or without interruption. The website may be
                temporarily unavailable due to maintenance, technical issues, or
                circumstances beyond our control.
              </p>

              <h2>6. External Links</h2>
              <p>
                Our website may contain links to external websites. We have no
                control over the nature, content, and availability of those
                sites. The inclusion of any links does not necessarily imply a
                recommendation or endorsement of the views expressed within them.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} shall
                not be liable for any direct, indirect, incidental, special, or
                consequential damages arising from:
              </p>
              <ul>
                <li>Your use or inability to use this website</li>
                <li>Any errors or omissions in the website content</li>
                <li>Any actions taken based on information provided on this website</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Service interruptions or technical failures</li>
              </ul>

              <h2>8. Professional Standards</h2>
              <p>
                While we maintain professional standards and best practices,
                technology and business environments are constantly evolving. We
                cannot guarantee that:
              </p>
              <ul>
                <li>All recommendations will be suitable for your specific situation</li>
                <li>Solutions will work in all environments or configurations</li>
                <li>Results will meet all expectations or requirements</li>
                <li>Information will remain current or applicable indefinitely</li>
              </ul>

              <h2>9. Intellectual Property</h2>
              <p>
                All content, including but not limited to text, graphics, logos,
                and software, is the property of {siteConfig.name} or its
                licensors and is protected by copyright and other intellectual
                property laws. Unauthorized use may violate these laws.
              </p>

              <h2>10. Jurisdiction</h2>
              <p>
                This disclaimer is governed by the laws of Poland. Any disputes
                arising from the use of this website or services will be subject
                to the exclusive jurisdiction of the courts of Gdańsk, Poland.
              </p>

              <h2>11. Acceptance</h2>
              <p>
                By using this website and our services, you acknowledge that you
                have read, understood, and agree to be bound by this disclaimer.
                If you do not agree with any part of this disclaimer, please do
                not use this website or our services.
              </p>

              <h2>12. Contact</h2>
              <p>
                If you have questions about this disclaimer, please contact us
                at{" "}
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
