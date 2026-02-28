import { siteConfig } from "@/config/content";
import { PolicyLayout } from "@/components/ui/policy-layout";
import { PolicyFlatSection } from "@/components/ui/policy-flat-section";
import { PolicyP, PolicyList, PolicyStrong } from "@/components/ui/policy-content";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund and cancellation policy for iamapsrajput.com",
};

const NAV_ITEMS = [
  { id: "general", label: "General Policy" },
  { id: "consultation", label: "Consultation Bookings" },
  { id: "service-payments", label: "Service Payments" },
  { id: "payment-processing", label: "Payment Processing" },
  { id: "cancellation", label: "Cancellation of Services" },
  { id: "dispute", label: "Dispute Resolution" },
  { id: "time-limits", label: "Time Limits" },
  { id: "contact", label: "Contact for Refunds" },
  { id: "changes", label: "Changes to This Policy" },
];

export default function RefundsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      lastUpdated={lastUpdated}
      navItems={NAV_ITEMS}
    >
      <PolicyFlatSection id="general" title="1. General Policy">
        <PolicyP>
          Refunds and cancellations are handled on a case-by-case basis.
          We aim to be fair and reasonable in all situations. Please
          contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
            {siteConfig.email}
          </a>{" "}
          to discuss any refund or cancellation requests.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="consultation" title="2. Consultation Bookings">
        <PolicyList
          items={[
            <>
              <PolicyStrong>Free Consultation Requests:</PolicyStrong> Consultation
              booking requests are free and can be cancelled at any time by
              contacting us
            </>,
            <>
              <PolicyStrong>Confirmed Consultations:</PolicyStrong> If you need to
              reschedule or cancel a confirmed consultation, please notify
              us at least 24 hours in advance
            </>,
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="service-payments" title="3. Service Payments">
        <PolicyP>
          <PolicyStrong>3.1 Refund Eligibility</PolicyStrong>
        </PolicyP>
        <PolicyP>Refunds may be considered in the following circumstances:</PolicyP>
        <PolicyList
          items={[
            "Services not delivered as agreed in the service agreement",
            "Technical issues preventing service delivery",
            "Mutual agreement to cancel services before completion",
            "Duplicate payments or payment errors",
          ]}
        />
        <PolicyP>
          <PolicyStrong>3.2 Refund Process</PolicyStrong>
        </PolicyP>
        <PolicyList
          ordered
          items={[
            <>
              Contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
                {siteConfig.email}
              </a>{" "}
              with your refund request, including: payment reference/invoice ID,
              reason for refund request, and date of payment
            </>,
            "We will review your request within 5–7 business days",
            "If approved, refunds will be processed through the original payment method within 10–14 business days",
          ]}
        />
        <PolicyP>
          <PolicyStrong>3.3 Non-Refundable Items</PolicyStrong>
        </PolicyP>
        <PolicyP>The following are generally non-refundable:</PolicyP>
        <PolicyList
          items={[
            "Services already completed and delivered",
            "Custom work that has been started",
            "Third-party fees or expenses already incurred",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="payment-processing" title="4. Payment Processing">
        <PolicyP>
          All refunds are processed through Razorpay, the same payment
          processor used for payments. Refunds will be credited to the
          original payment method used for the transaction.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="cancellation" title="5. Cancellation of Services">
        <PolicyP>
          <PolicyStrong>5.1 Client-Initiated Cancellation</PolicyStrong>
        </PolicyP>
        <PolicyList
          items={[
            "Clients may cancel services at any time by providing written notice",
            "Payment for work completed up to the cancellation date is due and non-refundable",
            "Any outstanding work will be discussed and may be subject to cancellation fees as specified in the service agreement",
          ]}
        />
        <PolicyP>
          <PolicyStrong>5.2 Service Provider-Initiated Cancellation</PolicyStrong>
        </PolicyP>
        <PolicyList
          items={[
            <>
              We reserve the right to cancel services in cases of: non-payment or
              payment disputes; violation of terms of service; unreasonable
              demands or scope changes; unavailability or scheduling conflicts
            </>,
            "In such cases, a prorated refund may be provided for uncompleted work",
          ]}
        />
      </PolicyFlatSection>

      <PolicyFlatSection id="dispute" title="6. Dispute Resolution">
        <PolicyP>
          If you are not satisfied with a service or payment, please
          contact us first to resolve the issue. We are committed to
          finding a fair solution. If we cannot resolve the dispute
          directly, it will be handled according to the jurisdiction
          specified in our Terms of Service.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="time-limits" title="7. Time Limits">
        <PolicyP>
          Refund requests should be submitted within 30 days of the
          payment date or service completion, whichever is later. Requests
          submitted after this period will be considered on a
          case-by-case basis.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="contact" title="8. Contact for Refunds">
        <PolicyP>
          For all refund and cancellation inquiries, please contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-2 hover:no-underline">
            {siteConfig.email}
          </a>{" "}
          with the subject line &quot;Refund Request&quot; or &quot;Cancellation Request&quot;
          and include all relevant details.
        </PolicyP>
      </PolicyFlatSection>

      <PolicyFlatSection id="changes" title="9. Changes to This Policy">
        <PolicyP>
          We reserve the right to modify this Refund & Cancellation Policy
          at any time. Changes will be effective immediately upon posting
          on this page.
        </PolicyP>
      </PolicyFlatSection>
    </PolicyLayout>
  );
}
