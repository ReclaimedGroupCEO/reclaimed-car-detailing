# Security & Legal Checklist — Reclaimed Detailers

## Already done in this update
- **Cookie consent banner** — live on every page (`assets/site.js` + `assets/site.css`), Accept/Decline, remembers choice in `localStorage`, links to `privacy-policy.html`.
- **Liability Waiver & Service Agreement** (`liability-waiver.html`) — vehicle condition disclaimers, mobile service/property access terms, photo/video release for marketing, explicitly preserves liability for your own negligence (a blanket waiver that disclaims *all* liability is often unenforceable — this one isn't).
- **Accessibility Statement** (`accessibility.html`) — states WCAG 2.1 AA as a target (not a compliance claim), gives visitors a contact path for barriers. This is one of the most common small-business website lawsuit categories (ADA web accessibility suits) — having a good-faith statement and a response channel meaningfully reduces that exposure.
- Both new pages are linked from every footer and added to `sitemap.xml`.
- Removed accidental files that weren't referenced anywhere on the site (`uploads/`, `scraps/`, `.thumbnail`, `Detailing Business.zip`) — these had no business being deployed and bloated the repo.
- Production visitors no longer see raw internal placeholder text or get a non-functional "click to upload" cursor on empty image slots — those interactions are now gated to the design tool only.

## Things to connect / set up (not code changes — accounts & services)
1. **HTTPS/SSL** — Vercel provisions this automatically for any domain you point at it. Once DNS is pointed at Vercel (still pending per your TODOs), confirm the padlock shows on the live domain, not just the `.vercel.app` preview URL.
2. **Contact/booking form backend** — `contact.html` and `book.html` need a real HTTPS form handler (e.g., Formspree, Web3Forms, or a Vercel serverless function) so submitted customer info (name, phone, email, vehicle details) is transmitted encrypted and isn't just sitting in a `mailto:` link or unprotected endpoint. Check what's currently wired up — if it's still a placeholder, this is the highest-priority "connect" item since it's the main place customer PII flows through the site.
3. **Payment processor** (if/when you take deposits or payments online) — use a PCI-DSS compliant processor (Stripe, Square) and never store card numbers yourself. Don't roll your own payment form.
4. **Domain + DNS** — point your domain's DNS to Vercel, confirm it in Google Search Console, then submit `sitemap.xml`.
5. **Google Business Profile** — set up for Maps/local SEO (separate from the website, but ties into local trust signals).
6. **Email security** — make sure `reclaimeddetailers@outlook.com` has 2FA enabled, since it's the contact point listed across every legal page (privacy requests, accessibility requests, liability questions).
7. **Backups** — since this is a static site on Vercel + GitHub, your "backup" is the git history itself. Just don't keep zipped full-site backups inside the repo (already cleaned up) — use GitHub's own history or a separate private backup if you want a snapshot.
8. **Business insurance** — general liability + commercial auto insurance (you're working on/around customers' vehicles and driving to them) is the real-world backstop the liability waiver supports; the waiver reduces *frivolous* claims, it doesn't replace insurance for legitimate accidental damage.
9. **Signed waivers per job (optional, stronger protection)** — for paint correction/ceramic jobs specifically (higher risk of revealing pre-existing damage), consider having customers tap/sign a short on-site acknowledgment (even a simple "I acknowledge the pre-existing condition noted above" checkbox via your booking flow) referencing `liability-waiver.html`. The page alone establishes terms; a per-job signature is stronger evidence if something is ever disputed.
10. **Data retention** — decide how long you keep customer contact form submissions/photos, and don't keep more than you need. `privacy-policy.html` should reflect whatever your actual practice is — keep it honest rather than aspirational.

## Lower priority / as the business grows
- If you ever add online analytics (GA4) or ad pixels (Meta/Instagram), update `privacy-policy.html` to disclose them before adding the scripts, not after.
- If you start accepting online payments, add a refund/cancellation-specific clause cross-referenced from `terms.html` (currently terms.html covers cancellations generally — fine for now, revisit once real online payment is live).
