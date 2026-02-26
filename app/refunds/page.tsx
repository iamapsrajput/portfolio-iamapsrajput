import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/content";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund and cancellation policy for iamapsrajput.com",
};

export default function RefundsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Refund & Cancellation Policy</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. General Policy</h2>
              <p>
                Refunds and cancellations are handled on a case-by-case basis.
                We aim to be fair and reasonable in all situations. Please
                contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> to
                discuss any refund or cancellation requests.
              </p>

              <h2>2. Consultation Bookings</h2>
              <ul>
                <li>
                  <strong>Free Consultation Requests:</strong> Consultation
                  booking requests are free and can be cancelled at any time by
                  contacting us
                </li>
                <li>
                  <strong>Confirmed Consultations:</strong> If you need to
                  reschedule or cancel a confirmed consultation, please notify
                  us at least 24 hours in advance
                </li>
              </ul>

              <h2>3. Service Payments</h2>
              <h3>3.1 Refund Eligibility</h3>
              <p>Refunds may be considered in the following circumstances:</p>
              <ul>
                <li>
                  Services not delivered as agreed in the service agreement
                </li>
                <li>Technical issues preventing service delivery</li>
                <li>Mutual agreement to cancel services before completion</li>
                <li>Duplicate payments or payment errors</li>
              </ul>

              <h3>3.2 Refund Process</h3>
              <ol>
                <li>
                  Contact us at{" "}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
                  with your refund request, including:
                  <ul>
                    <li>Payment reference/invoice ID</li>
                    <li>Reason for refund request</li>
                    <li>Date of payment</li>
                  </ul>
                </li>
                <li>We will review your request within 5-7 business days</li>
                <li>
                  If approved, refunds will be processed through the original
                  payment method within 10-14 business days
                </li>
              </ol>

              <h3>3.3 Non-Refundable Items</h3>
              <p>The following are generally non-refundable:</p>
              <ul>
                <li>Services already completed and delivered</li>
                <li>Custom work that has been started</li>
                <li>Third-party fees or expenses already incurred</li>
              </ul>

              <h2>4. Payment Processing</h2>
              <p>
                All refunds are processed through Razorpay, the same payment
                processor used for payments. Refunds will be credited to the
                original payment method used for the transaction.
              </p>

              <h2>5. Cancellation of Services</h2>
              <h3>5.1 Client-Initiated Cancellation</h3>
              <ul>
                <li>
                  Clients may cancel services at any time by providing written
                  notice
                </li>
                <li>
                  Payment for work completed up to the cancellation date is due
                  and non-refundable
                </li>
                <li>
                  Any outstanding work will be discussed and may be subject to
                  cancellation fees as specified in the service agreement
                </li>
              </ul>

              <h3>5.2 Service Provider-Initiated Cancellation</h3>
              <ul>
                <li>
                  We reserve the right to cancel services in cases of:
                  <ul>
                    <li>Non-payment or payment disputes</li>
                    <li>Violation of terms of service</li>
                    <li>Unreasonable demands or scope changes</li>
                    <li>Unavailability or scheduling conflicts</li>
                  </ul>
                </li>
                <li>
                  In such cases, a prorated refund may be provided for
                  uncompleted work
                </li>
              </ul>

              <h2>6. Dispute Resolution</h2>
              <p>
                If you are not satisfied with a service or payment, please
                contact us first to resolve the issue. We are committed to
                finding a fair solution. If we cannot resolve the dispute
                directly, it will be handled according to the jurisdiction
                specified in our Terms of Service.
              </p>

              <h2>7. Time Limits</h2>
              <p>
                Refund requests should be submitted within 30 days of the
                payment date or service completion, whichever is later. Requests
                submitted after this period will be considered on a
                case-by-case basis.
              </p>

              <h2>8. Contact for Refunds</h2>
              <p>
                For all refund and cancellation inquiries, please contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
                with the subject line "Refund Request" or "Cancellation Request"
                and include all relevant details.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Refund & Cancellation Policy
                at any time. Changes will be effective immediately upon posting
                on this page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
