import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/content";
import { Shield, Lock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Security",
  description: "Security information and responsible disclosure policy",
};

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Security</h1>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <CardTitle>Security Practices</CardTitle>
                  </div>
                  <CardDescription>
                    We take security seriously and implement industry best practices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold">Security Headers</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Content-Security-Policy (CSP)</li>
                      <li>Strict-Transport-Security (HSTS)</li>
                      <li>X-Content-Type-Options: nosniff</li>
                      <li>X-Frame-Options: DENY</li>
                      <li>Referrer-Policy: strict-origin-when-cross-origin</li>
                      <li>Permissions-Policy</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Data Protection</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>HTTPS encryption for all data transmission</li>
                      <li>Secure server infrastructure</li>
                      <li>Input validation and sanitization</li>
                      <li>Rate limiting on API endpoints</li>
                      <li>CSRF protection</li>
                      <li>Honeypot fields for bot protection</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Payment Security</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Payment processing via Razorpay (PCI DSS compliant)</li>
                      <li>Server-side payment signature verification</li>
                      <li>Webhook signature verification</li>
                      <li>Idempotent payment processing</li>
                      <li>No storage of sensitive payment card data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    <CardTitle>Responsible Disclosure</CardTitle>
                  </div>
                  <CardDescription>
                    We appreciate security researchers helping us maintain a secure platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    If you discover a security vulnerability, we appreciate your
                    help in disclosing it to us responsibly.
                  </p>
                  <div>
                    <h3 className="mb-2 font-semibold">Please do:</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Email security issues to: <a href={`mailto:${siteConfig.email}?subject=Security%20Vulnerability`} className="text-primary hover:underline">{siteConfig.email}</a></li>
                      <li>Provide detailed information about the vulnerability</li>
                      <li>Allow reasonable time for us to address the issue before public disclosure</li>
                      <li>Act in good faith and avoid accessing or modifying data that doesn't belong to you</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Please don't:</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Access or modify data that doesn't belong to you</li>
                      <li>Perform any actions that could harm the service or other users</li>
                      <li>Disclose the vulnerability publicly before we've had a chance to address it</li>
                      <li>Use automated scanning tools that may impact service availability</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">What to expect:</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>We will acknowledge receipt of your report within 48 hours</li>
                      <li>We will provide updates on our progress addressing the issue</li>
                      <li>We will credit you (if desired) for responsible disclosure after the issue is resolved</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    <CardTitle>Security Updates</CardTitle>
                  </div>
                  <CardDescription>
                    We regularly update dependencies and security patches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We maintain our dependencies and apply security patches
                    regularly. We use automated dependency scanning and follow
                    security advisories for all third-party libraries and
                    frameworks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
