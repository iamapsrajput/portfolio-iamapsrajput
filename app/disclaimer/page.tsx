import { siteConfig } from "@/config/content";
import { PolicyLayout } from "@/components/ui/policy-layout";
import { PolicyFlatSection } from "@/components/ui/policy-flat-section";
import { PolicyP, PolicyList, PolicyStrong } from "@/components/ui/policy-content";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for iamapsrajput.com",
};

const NAV_ITEMS = [
  { id: "general", label: "General Information" },
  { id: "consulting", label: "Consulting Services Disclaimer" },
  { id: "third-party", label: "Third-Party Services and Tools" },
  { id: "payment", label: "Payment Processing" },
  { id: "availability", label: "Website Availability" },
  { id: "external-links", label: "External Links" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "professional", label: "Professional Standards" },
  { id: "ip", label: "Intellectual Property" },
  { id: "jurisdiction", label: "Jurisdiction" },
  { id: "acceptance", label: "Acceptance" },
  { id: "contact", label: "Contact" },
];

export default function DisclaimerPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PolicyLayout
      title="Disclaimer"
      lastUpdated={lastUpdated}
      navItems={NAV_ITEMS}
    >
      <PolicyFlatSection id="general" title="1. General Information">
        <PolicyP>
          The information on this website ({siteConfig.domain}) is provided
          by {siteConfig.name} for general informational purposes only.
          While we strive to keep the information accurate and up to date,
          we make no representations or warranties of any kind, express or
          implied, about the completeness, accuracy, reliability, or
          suitability of the information.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="consulting" title="2. Consulting Services Disclaimer">
        <PolicyP>
          <PolicyStrong>No Guarantees:</PolicyStrong> Consulting services are
          provided based on professional expertise and best practices, but
          we do not guarantee specific outcomes, results, or performance
          improvements. Results may vary based on individual circumstances,
          implementation, and other factors beyond our control.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>Professional Advice:</PolicyStrong> The information and
          advice provided through our consulting services are based on our
          professional judgment and experience. They should not be
          considered as a substitute for comprehensive technical analysis
          or legal, financial, or other professional advice specific to
          your situation.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="third-party" title="3. Third-Party Services and Tools">
        <PolicyP>
          We may recommend or work with third-party services, tools, or
          platforms. We are not responsible for:
        </PolicyP>
        <PolicyList
          items={[
            "The availability, functionality, or security of third-party services",
            "Any issues, downtime, or data loss related to third-party services",
            "Changes in third-party service terms, pricing, or features",
            "Compatibility issues between third-party services and your systems",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="payment" title="4. Payment Processing">
        <PolicyP>
          Payment processing is handled by Razorpay, a third-party payment
          processor. We are not responsible for:
        </PolicyP>
        <PolicyList
          items={[
            "Payment processing errors or delays",
            "Security breaches in Razorpay's systems",
            "Disputes between you and Razorpay",
            "Changes to Razorpay's terms or fees",
          ]}
        />
        <PolicyP>
          Please review Razorpay&apos;s terms and privacy policy for
          information about their services.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="availability" title="5. Website Availability">
        <PolicyP>
          We do not guarantee that the website will be available
          continuously or without interruption. The website may be
          temporarily unavailable due to maintenance, technical issues, or
          circumstances beyond our control.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="external-links" title="6. External Links">
        <PolicyP>
          Our website may contain links to external websites. We have no
          control over the nature, content, and availability of those
          sites. The inclusion of any links does not necessarily imply a
          recommendation or endorsement of the views expressed within them.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="liability" title="7. Limitation of Liability">
        <PolicyP>
          To the fullest extent permitted by law, {siteConfig.name} shall
          not be liable for any direct, indirect, incidental, special, or
          consequential damages arising from:
        </PolicyP>
        <PolicyList
          items={[
            "Your use or inability to use this website",
            "Any errors or omissions in the website content",
            "Any actions taken based on information provided on this website",
            "Loss of data, profits, or business opportunities",
            "Service interruptions or technical failures",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="professional" title="8. Professional Standards">
        <PolicyP>
          While we maintain professional standards and best practices,
          technology and business environments are constantly evolving. We
          cannot guarantee that:
        </PolicyP>
        <PolicyList
          items={[
            "All recommendations will be suitable for your specific situation",
            "Solutions will work in all environments or configurations",
            "Results will meet all expectations or requirements",
            "Information will remain current or applicable indefinitely",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="ip" title="9. Intellectual Property">
        <PolicyP>
          All content, including but not limited to text, graphics, logos,
          and software, is the property of {siteConfig.name} or its
          licensors and is protected by copyright and other intellectual
          property laws. Unauthorized use may violate these laws.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="jurisdiction" title="10. Jurisdiction">
        <PolicyP>
          This disclaimer is governed by the laws of Poland. Any disputes
          arising from the use of this website or services will be subject
          to the exclusive jurisdiction of the courts of Gdańsk, Poland.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="acceptance" title="11. Acceptance">
        <PolicyP>
          By using this website and our services, you acknowledge that you
          have read, understood, and agree to be bound by this disclaimer.
          If you do not agree with any part of this disclaimer, please do
          not use this website or our services.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="contact" title="12. Contact">
        <PolicyP>
          If you have questions about this disclaimer, please contact us
          at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
            {siteConfig.email}
          </a>.
        </PolicyP>
      </PolicyFlatSection>
    </PolicyLayout>
  );
}
