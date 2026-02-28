import { siteConfig } from "@/config/content";
import { PolicyLayout } from "@/components/ui/policy-layout";
import { PolicySection } from "@/components/ui/policy-accordion";
import { PolicyP, PolicyList, PolicyStrong } from "@/components/ui/policy-content";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for iamapsrajput.com",
};

const NAV_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "payment-processing", label: "Payment Processing" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "cookies", label: "Cookies and Tracking" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
  { id: "jurisdiction", label: "Jurisdiction" },
];

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      navItems={NAV_ITEMS}
    >
      <PolicySection id="introduction" title="1. Introduction" defaultOpen>
        <PolicyP>
          This Privacy Policy describes how {siteConfig.name} (&quot;we&quot;, &quot;our&quot;,
          or &quot;us&quot;) collects, uses, and protects your personal information
          when you visit and use our website at {siteConfig.domain}.
        </PolicyP>
      </PolicySection>

      <PolicySection id="information-we-collect" title="2. Information We Collect">
        <PolicyP>
          <PolicyStrong>2.1 Information You Provide</PolicyStrong>
        </PolicyP>
        <PolicyP>We collect information that you voluntarily provide to us:</PolicyP>
        <PolicyList
          items={[
            <>
              <PolicyStrong>Contact Information:</PolicyStrong> Name, email address,
              company name (optional) when you submit contact forms or booking requests
            </>,
            <>
              <PolicyStrong>Booking Information:</PolicyStrong> Consultation goals,
              timezone, and any additional notes you provide
            </>,
            <>
              <PolicyStrong>Payment Information:</PolicyStrong> Payment amounts and
              invoice/reference IDs (payment processing is handled securely by Razorpay)
            </>,
          ]}
        />
        <PolicyP>
          <PolicyStrong>2.2 Automatically Collected Information</PolicyStrong>
        </PolicyP>
        <PolicyP>When you visit our website, we may automatically collect:</PolicyP>
        <PolicyList
          items={[
            "IP address",
            "Browser type and version",
            "Device information",
            "Pages visited and time spent on pages",
            "Referring website addresses",
          ]}
        />
      </PolicySection>

      <PolicySection id="how-we-use" title="3. How We Use Your Information">
        <PolicyP>We use the collected information for:</PolicyP>
        <PolicyList
          items={[
            "Responding to your inquiries and consultation requests",
            "Processing payments for services",
            "Improving our website and services",
            "Complying with legal obligations",
            "Preventing fraud and ensuring security",
          ]}
        />
      </PolicySection>

      <PolicySection id="payment-processing" title="4. Payment Processing">
        <PolicyP>
          Payment processing is handled by Razorpay, a third-party payment
          processor. We do not store your full payment card details. Razorpay
          handles all payment data in accordance with their privacy policy
          and PCI DSS compliance standards.
        </PolicyP>
      </PolicySection>

      <PolicySection id="data-retention" title="5. Data Retention">
        <PolicyP>
          We retain your personal information only for as long as necessary
          to fulfill the purposes outlined in this policy, unless a longer
          retention period is required by law.
        </PolicyP>
      </PolicySection>

      <PolicySection id="data-security" title="6. Data Security">
        <PolicyP>
          We implement appropriate technical and organizational measures to
          protect your personal information, including:
        </PolicyP>
        <PolicyList
          items={[
            "HTTPS encryption for all data transmission",
            "Secure server infrastructure",
            "Regular security assessments",
            "Access controls and authentication",
          ]}
        />
      </PolicySection>

      <PolicySection id="your-rights" title="7. Your Rights">
        <PolicyP>You have the right to:</PolicyP>
        <PolicyList
          items={[
            "Access your personal information",
            "Correct inaccurate information",
            "Request deletion of your information",
            "Object to processing of your information",
            "Data portability",
          ]}
        />
        <PolicyP>
          To exercise these rights, please contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
            {siteConfig.email}
          </a>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="third-party-services" title="8. Third-Party Services">
        <PolicyP>We use the following third-party services:</PolicyP>
        <PolicyList
          items={[
            <>
              <PolicyStrong>Razorpay:</PolicyStrong> Payment processing (see their
              privacy policy)
            </>,
            <>
              <PolicyStrong>Resend/SendGrid:</PolicyStrong> Email delivery (if
              configured)
            </>,
            <>
              <PolicyStrong>Hosting Provider:</PolicyStrong> Website hosting and
              infrastructure
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection id="cookies" title="9. Cookies and Tracking">
        <PolicyP>
          We do not use analytics cookies or tracking technologies. We may
          use essential cookies for website functionality and security.
        </PolicyP>
      </PolicySection>

      <PolicySection id="children" title="10. Children's Privacy">
        <PolicyP>
          Our website is not intended for children under 13 years of age. We
          do not knowingly collect personal information from children.
        </PolicyP>
      </PolicySection>

      <PolicySection id="changes" title="11. Changes to This Policy">
        <PolicyP>
          We may update this Privacy Policy from time to time. We will
          notify you of any changes by posting the new policy on this page
          and updating the &quot;Last updated&quot; date.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="12. Contact Us">
        <PolicyP>
          If you have questions about this Privacy Policy, please contact
          us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
            {siteConfig.email}
          </a>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="jurisdiction" title="13. Jurisdiction">
        <PolicyP>
          This Privacy Policy is governed by the laws of Poland. Any disputes
          will be resolved in the courts of Gdańsk, Poland.
        </PolicyP>
      </PolicySection>
    </PolicyLayout>
  );
}
