# ApexFund MVP — Development Preview

This is a frontend-only concept for a prop-firm website. It is **not** a live brokerage, funded-account service, payment system, or MT5-connected platform.

## Included
- Responsive dark navy / gold landing page
- Standard 2-step and Instant program concept tabs
- Draft pricing and risk-rule presentation
- Sample trader dashboard preview
- FAQ and development disclaimers

## Run locally
Requirements: Node.js 18+

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Free deployment
1. Create a GitHub repository and upload this project.
2. Create a Vercel account and import the repository.
3. Deploy with the default Next.js settings.

A free Vercel tier is suitable for a prototype, subject to its current limits and terms. A custom domain is not included for free.

## Before any real launch
This project deliberately has no checkout, account authentication, payout processing, live account provisioning, or MT5 bridge.

A production service needs:
- Legal review of the business model and target jurisdictions.
- Written approval from the broker / MT5 server or platform provider.
- A licensed/authorized trading infrastructure provider and server credentials.
- A tested server-side risk engine (daily loss, max loss, equity/balance semantics, commissions, swaps, timezone resets, open positions).
- KYC/AML and privacy controls as applicable.
- Payment provider approval explicitly covering prop-firm challenges and rewards.
- Secure authentication, database rules, audit logs, monitoring, backups and penetration testing.

Never represent sample data or simulated accounts as real funded accounts. Do not accept customer payments until the business, payment provider, trading provider and legal structure are approved.

## Draft commercial assumptions
Prices and rules are placeholders only. Validate them with actuarial / risk modelling and operating costs before publishing as offers.
