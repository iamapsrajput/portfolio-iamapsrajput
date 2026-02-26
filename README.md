# Portfolio Website - Ajay Rajput

Production-grade personal portfolio and consulting website for DevOps + AI
Infrastructure services.

## Features

- **Portfolio Showcase**: Skills, projects, and experience presentation
- **Consultation Booking**: Free booking flow (book first, pay later)
- **Payment Processing**: Secure Razorpay integration with two modes (Payment
  Links or Orders API)
- **Legal Pages**: Privacy Policy, Terms, Refunds, Disclaimer
- **Security-First**: Comprehensive security headers, CSRF protection, rate
  limiting, input validation
- **SEO Optimized**: Metadata, sitemap, robots.txt, structured data
- **Accessible**: Semantic HTML, keyboard navigation, proper contrast

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router) + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Payment**: Razorpay integration
- **Email**: Resend (optional, with mailto fallback)
- **Validation**: Zod
- **Security**: Custom rate limiting, CSRF protection, honeypot fields

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-iamapsrajput
```

2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
   - `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` from Razorpay dashboard
   - `RAZORPAY_WEBHOOK_SECRET` for webhook verification
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` (same as RAZORPAY_KEY_ID)
   - `NEXT_PUBLIC_PAYMENT_MODE` (SIMPLE or FULL)
   - `RESEND_API_KEY` (optional, for email)
   - `CONTACT_EMAIL_TO` (your email)

5. Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Next steps for production

1. **Replace placeholder env vars** in `.env.local`:
   - Razorpay: get Key ID, Key Secret, and Webhook Secret from [Razorpay Dashboard](https://dashboard.razorpay.com) → Settings → API Keys
   - Email (optional): add `RESEND_API_KEY` from [Resend](https://resend.com) for contact/booking emails
2. **Razorpay webhook**: In Razorpay Dashboard → Webhooks, add URL `https://yourdomain.com/api/payments/webhook` and subscribe to `payment.captured`, `payment.failed`, `order.paid`
3. **Deploy**: Push to GitHub and deploy on Vercel (or Hostinger); add the same env vars in the hosting dashboard
4. **Custom domain**: Point your DNS for iamapsrajput.com to your host (Vercel/Hostinger) and enable HTTPS

## Configuration

### Content Configuration

Edit `config/content.ts` to update:

- Personal information (name, tagline, location, links)
- Skills and expertise
- Personal projects
- Services offered
- Experience and awards

### Payment Modes

**SIMPLE Mode** (Payment Links):

- Set `NEXT_PUBLIC_PAYMENT_MODE=SIMPLE`
- Configure `NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK` with your Razorpay payment link
- Users click button and are redirected to Razorpay payment page

**FULL Mode** (Orders API - Recommended):

- Set `NEXT_PUBLIC_PAYMENT_MODE=FULL`
- Server creates orders, verifies signatures, processes webhooks
- More secure and provides better payment tracking

### Razorpay Setup

1. Create a Razorpay account at https://razorpay.com
2. Get your Key ID and Key Secret from Dashboard → Settings → API Keys
3. Set up webhook endpoint: `https://yourdomain.com/api/payments/webhook`
4. Configure webhook secret in Razorpay dashboard
5. Add webhook events: `payment.captured`, `payment.failed`, `order.paid`

## Deployment

### Vercel (Recommended - Free Tier)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy
5. Configure custom domain in Vercel (point DNS to Vercel)

**DNS Configuration:**

- Add A record: `@` → Vercel IP
- Add CNAME: `www` → `cname.vercel-dns.com`
- Or use Vercel's automatic DNS configuration

### Hostinger (Node.js Web App)

If your Hostinger plan supports Node.js:

1. Build the project:

```bash
npm run build
```

2. Upload to Hostinger via:
   - Git deployment (if available)
   - FTP/SFTP (upload `.next`, `public`, `package.json`, etc.)

3. Configure environment variables in Hostinger control panel

4. Set up PM2 or similar process manager:

```bash
pm2 start npm --name "portfolio" -- start
```

5. Configure reverse proxy (nginx) if needed

6. Point DNS to Hostinger IP

### Custom Domain Setup

1. **DNS Records:**
   - A record: `@` → Server IP
   - CNAME: `www` → Domain or server hostname

2. **SSL Certificate:**
   - Vercel: Automatic via Let's Encrypt
   - Hostinger: Use Let's Encrypt or provided SSL

3. **Update Site URL:**
   - Update `NEXT_PUBLIC_SITE_URL` in environment variables
   - Update `siteConfig.domain` in `config/content.ts`

## Security

### Security Features Implemented

- **Security Headers**: CSP, HSTS, X-Frame-Options, etc. (configured in
  `middleware.ts`)
- **CSRF Protection**: Token-based protection for POST endpoints
- **Rate Limiting**: IP-based rate limiting on API routes
- **Input Validation**: Zod schemas for all user inputs
- **Honeypot Fields**: Bot protection on forms
- **Payment Security**: Server-side signature verification, webhook idempotency
- **Secret Management**: Environment variables, never exposed to client

### Security Checklist

- [x] Security headers configured
- [x] CSRF protection enabled
- [x] Rate limiting implemented
- [x] Input validation with Zod
- [x] Payment signature verification
- [x] Webhook signature verification
- [x] Honeypot fields on forms
- [x] HTTPS enforced
- [x] Secrets in environment variables only
- [x] Dependencies pinned and audited

### Threat Model

**Threats Addressed:**

- SQL Injection: N/A (no database queries)
- XSS: Input validation, output encoding
- CSRF: Token-based protection
- Rate Limiting: Prevents abuse and DoS
- Payment Fraud: Server-side verification, signature checks
- Bot Spam: Honeypot fields, rate limiting

## Testing

### Run Type Check

```bash
npm run type-check
```

### Run Linter

```bash
npm run lint
```

### Unit Tests

```bash
npm test
```

Jest is configured to ignore `e2e/`. Use `npm run test:watch` for watch mode.

### E2E Tests (Playwright, responsive)

```bash
npm run test:e2e
```

Runs Playwright tests across five viewports (mobile 390px, tablet 768px, laptop 1366px, desktop 1920px, large 2560px) to verify layout and key pages. Uses Chromium only; ensure it is installed (`npx playwright install chromium`).

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── book/         # Booking endpoint
│   │   ├── contact/      # Contact form endpoint
│   │   └── payments/     # Payment endpoints
│   ├── projects/         # Projects pages
│   ├── book/             # Booking page
│   ├── pay/              # Payment page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── refunds/          # Refund policy
│   ├── disclaimer/       # Disclaimer
│   └── security/         # Security page
├── components/           # React components
│   ├── ui/               # shadcn/ui components
│   ├── nav.tsx           # Navigation component
│   └── footer.tsx        # Footer component
├── config/               # Configuration files
│   └── content.ts        # Site content configuration
├── lib/                  # Utility libraries
│   ├── razorpay.ts       # Razorpay client and verification
│   ├── security.ts       # Security utilities (rate limiting, CSRF)
│   ├── validators.ts     # Zod schemas
│   ├── email.ts          # Email sending utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets
│   └── robots.txt        # Robots file
└── middleware.ts         # Next.js middleware (security headers)
```

## Environment Variables

See `.env.example` for all required environment variables.

**Required:**

- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`

**Optional:**

- `RESEND_API_KEY` (for email)
- `CONTACT_EMAIL_TO` (defaults to iamapsrajput@outlook.com)
- `NEXT_PUBLIC_PAYMENT_MODE` (defaults to FULL)
- `NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK` (for SIMPLE mode)

## Go-Live Checklist

- [ ] All environment variables configured
- [ ] Razorpay account set up and tested
- [ ] Webhook endpoint configured in Razorpay
- [ ] Custom domain DNS configured
- [ ] SSL certificate active
- [ ] Security headers verified (use securityheaders.com)
- [ ] Payment flow tested (test mode)
- [ ] Booking flow tested
- [ ] Contact form tested
- [ ] Legal pages reviewed
- [ ] Content updated in `config/content.ts`
- [ ] SEO metadata verified
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Analytics disabled (as per requirements)
- [ ] No "Download CV" button (as per requirements)

## Maintenance

### Dependency Updates

- Run `npm audit` regularly
- Use Dependabot (configured in GitHub)
- Update dependencies monthly or as security advisories are released

### Content Updates

- Edit `config/content.ts` for most content changes
- No code changes needed for:
  - Skills
  - Projects
  - Services
  - Experience
  - Awards

### Monitoring

- Monitor Razorpay dashboard for payment issues
- Check webhook logs for payment events
- Monitor server logs for errors
- Set up uptime monitoring (optional)

## Support

For issues or questions:

- Email: iamapsrajput@outlook.com
- GitHub: Create an issue in the repository

## License

Private - All rights reserved.

## Security Disclosure

See `/security` page for responsible disclosure policy.

---

Built with Next.js, TypeScript, and Tailwind CSS.
