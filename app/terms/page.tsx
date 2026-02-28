import { siteConfig } from "@/config/content";
import { PolicyLayout } from "@/components/ui/policy-layout";
import { PolicyFlatSection } from "@/components/ui/policy-flat-section";
import { PolicyP, PolicyList } from "@/components/ui/policy-content";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for iamapsrajput.com",
};

const NAV_ITEMS = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Services" },
  { id: "booking", label: "Booking and Consultation" },
  { id: "payment", label: "Payment Terms" },
  { id: "ip", label: "Intellectual Property" },
  { id: "conduct", label: "User Conduct" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "warranties", label: "Disclaimer of Warranties" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to Terms" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated={lastUpdated}
      navItems={NAV_ITEMS}
    >
      <PolicyFlatSection id="acceptance" title="1. Acceptance of Terms">
        <PolicyP>
          By accessing and using {siteConfig.domain}, you accept and agree
          to be bound by these Terms of Service. If you do not agree to
          these terms, please do not use this website.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="services" title="2. Services">
        <PolicyP>
          This website provides information about DevOps and cloud
          engineering consulting services offered by {siteConfig.name}.
          Services include but are not limited to:
        </PolicyP>
        <PolicyList
          items={[
            "DevOps consulting",
            "Cloud/platform engineering",
            "CI/CD and IaC implementation",
            "Observability and incident response",
            "Application development",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="booking" title="3. Booking and Consultation">
        <PolicyP>
          Consultation bookings are requests only. All consultations are
          subject to availability and confirmation. We reserve the right to
          decline any booking request at our discretion.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="payment" title="4. Payment Terms">
        <PolicyList
          items={[
            "Payment is due as specified in individual service agreements or invoices",
            "All payments are processed securely through Razorpay",
            "Prices are in INR (Indian Rupees) unless otherwise specified",
            "We reserve the right to change pricing at any time, with existing agreements honored",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="ip" title="5. Intellectual Property">
        <PolicyP>
          All content on this website, including text, graphics, logos, and
          software, is the property of {siteConfig.name} or its content
          suppliers and is protected by copyright and other intellectual
          property laws.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="conduct" title="6. User Conduct">
        <PolicyP>You agree not to:</PolicyP>
        <PolicyList
          items={[
            "Use the website for any unlawful purpose",
            "Attempt to gain unauthorized access to any part of the website",
            "Interfere with or disrupt the website or servers",
            "Transmit any viruses, malware, or harmful code",
            "Use automated systems to access the website without permission",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="liability" title="7. Limitation of Liability">
        <PolicyP>
          To the maximum extent permitted by law, {siteConfig.name} shall
          not be liable for any indirect, incidental, special, or
          consequential damages arising from your use of this website or
          services.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="warranties" title="8. Disclaimer of Warranties">
        <PolicyP>
          This website and its content are provided &quot;as is&quot; without
          warranties of any kind, either express or implied. We do not
          guarantee that the website will be error-free or continuously
          available.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="indemnification" title="9. Indemnification">
        <PolicyP>
          You agree to indemnify and hold harmless {siteConfig.name} from
          any claims, damages, or expenses arising from your use of the
          website or violation of these terms.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="termination" title="10. Termination">
        <PolicyP>
          We reserve the right to terminate or suspend your access to the
          website at any time, without notice, for any reason, including
          violation of these terms.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="changes" title="11. Changes to Terms">
        <PolicyP>
          We reserve the right to modify these terms at any time. Changes
          will be effective immediately upon posting. Your continued use of
          the website constitutes acceptance of the modified terms.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="governing-law" title="12. Governing Law">
        <PolicyP>
          These Terms of Service are governed by the laws of Poland. Any
          disputes will be resolved in the courts of Gdańsk, Poland.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="contact" title="13. Contact">
        <PolicyP>
          For questions about these Terms of Service, please contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
            {siteConfig.email}
          </a>.
        </PolicyP>
      </PolicyFlatSection>
    </PolicyLayout>
  );
}
