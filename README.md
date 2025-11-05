# Ejidey Schools — Website (Frontend)

Static frontend site for Ejidey Schools (Magodo). Replace placeholders and drop images into `assets/` to go live.

## How to use
1. Create repo and add all files and `assets/` images.
2. Replace the logo in HTML with local path `assets/logo.png` after you upload it.
3. Replace placeholder texts (addresses, emails, phone numbers) with official school info.
4. Payment options:
   - Demo: Inline Paystack (frontend). Edit `app.js` and replace `PAYSTACK_PUBLIC_KEY`.
   - Production: Use a backend (Node/Express) to initialize transactions and verify webhooks. See `BACKEND SUGGESTIONS` below.
5. Deploy to Netlify / Vercel / GitHub Pages (static) OR host combined static + server on Render.

## Assets (exact filenames to request)
- assets/logo.png
- assets/admission_form.pdf
- assets/photo_campus_exterior.jpg
- assets/photo_nursery_classroom.jpg
- assets/photo_primary_classroom.jpg
- assets/photo_secondary_science_lab.jpg
- assets/photo_principal.jpg
- assets/photo_playground.jpg
- assets/photo_transport_bus.jpg
- assets/photo_school_hall.jpg
- assets/favicon.png

## Backend suggestions (recommended for payment production)
- Node + Express example:
  - Endpoint: `POST /api/create-transaction` (calls Paystack `transaction/initialize`)
  - Endpoint: `POST /webhook/paystack` (verify signature and update DB)
  - Store `PAYSTACK_SECRET` and `BASE_URL` as environment variables.
- Use webhooks to verify payment status and generate receipts.

## Deployment ideas
- Static-only: GitHub Pages / Netlify / Vercel (good for simple brochure site).
- Static + Node backend: Render.com / Railway / Heroku.
- Ensure HTTPS for payment webhooks.

## Notes
- Do not store card details on your server.
- If you will collect images of minors, ensure parental consent.
- Update contact emails and phone numbers before publishing.

