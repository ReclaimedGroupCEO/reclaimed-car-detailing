# Remaining Action Items — Reclaimed Detailers LLC
*Generated June 11, 2026 — Claude completed all code-level improvements. The items below require your direct action.*

---

## 🔴 CRITICAL — Do These First

### 1. Google Business Profile (GBP)
**Why Claude can't do it:** Requires Google account verification and a real physical/service address. Google sends a postcard or calls a phone number.

**Step-by-step:**
1. Go to: https://business.google.com
2. Click "Manage now" or "Add your business"
3. Search for "Reclaimed Detailers LLC" — if it appears, claim it. If not, add it.
4. Category: **Auto Detailing** (primary), **Car Wash** (secondary)
5. Service area business: choose "Yes, I serve customers at their location"
6. Add your service area cities: Montgomery, Prattville, Millbrook, Wetumpka, Pike Road, Elmore County
7. Phone: (334) 640-1831
8. Website: your domain (once pointed to Vercel)
9. Hours: Mon–Sat 8am–6pm (adjust as needed)
10. Request verification via phone call or postcard
11. Once verified: add photos of your work (at least 10 before/after shots)
12. Add your services and prices to the GBP listing

**Why it matters:** Google Maps and "near me" search are the #1 way local customers find a detailer. Without GBP, you are invisible to most local searches.
**Estimated time:** 30 minutes to set up, 3–5 days to receive verification
**Priority: CRITICAL**

---

### 2. Point Your Domain DNS to Vercel
**Why Claude can't do it:** Requires access to your domain registrar (Google Domains / Squarespace Domains).

**Step-by-step:**
1. Log into Google Domains (or wherever your domain is registered): https://domains.google.com
2. Find your domain (e.g., reclaimeddetailers.com)
3. Click "DNS" or "Manage DNS"
4. Add these records:
   - Type: **A** | Name: **@** | Value: **76.76.21.21** (Vercel's IP)
   - Type: **CNAME** | Name: **www** | Value: **cname.vercel-dns.com**
5. In Vercel dashboard (vercel.com), go to your project → Settings → Domains
6. Add your domain: `reclaimeddetailers.com` and `www.reclaimeddetailers.com`
7. Vercel will auto-provision SSL (takes 5–30 minutes after DNS propagates)
8. DNS propagation: typically 1–4 hours, up to 48 hours

**Estimated time:** 20 minutes setup + up to 48 hours propagation
**Priority: CRITICAL**

---

### 3. Google Search Console — Submit Sitemap
**Why Claude can't do it:** Requires access to your Google account and the domain must be live first.

**Step-by-step (do AFTER domain DNS is live):**
1. Go to: https://search.google.com/search-console
2. Log in with your Google account (rayr.compton@gmail.com)
3. Add property: choose "URL prefix" → enter `https://reclaimeddetailers.com`
4. Verify via the HTML file already in your repo (google4c047571b395bdc9.html)
5. In left sidebar → Sitemaps → Enter: `sitemap.xml` → Submit
6. Check back in 1–2 days to confirm Google indexed your pages

**Estimated time:** 15 minutes
**Priority: CRITICAL** (do within 24 hours of domain going live)

---

## 🟠 HIGH PRIORITY — Do Within First 2 Weeks

### 4. Real Photography — Before & After Photos
**Why Claude can't do it:** Requires physical photos of real vehicles you've detailed.

**What you need:**
- At least 10 before/after pairs (one side dirty, one side clean)
- Use iPhone Portrait mode or have someone photograph for you
- Ideal shots: side panel, wheel close-up, interior seat, dashboard
- Lighting: bright overcast day or shaded area — avoid harsh direct sunlight
- Name files clearly: `before-sedan-paint-correction-1.jpg`, `after-sedan-paint-correction-1.jpg`

**Where to add them:**
- `showcase.html` — replace the placeholder emoji containers with real `<img>` tags
- `about.html` — replace Ray's photo placeholder
- `index.html` — the before/after slider section (currently uses colored gradients)
- Google Business Profile — add 10+ photos immediately on verification

**Estimated time:** 1–2 hours of photography + 30 minutes to upload
**Priority: HIGH** — Photos are your biggest conversion lever

---

### 5. Create an OG Social Share Image
**Why Claude can't do it:** Requires a graphic design tool to produce a real image.

**What it is:** A 1200×630px image shown when someone shares your links on Facebook, Instagram, iMessage, etc. Currently all pages reference `og-image.jpg` but that file doesn't exist.

**Step-by-step:**
1. Open Canva (free): https://canva.com → "Social Media" → "Facebook Post" (1200×630)
2. Use dark purple background (#1a1020)
3. Add your logo/brand name "Reclaimed Detailers" in Playfair Display style
4. Add tagline: "Restored. Refined. Reclaimed."
5. Add your phone number and city
6. Export as JPG, name it `og-image.jpg`
7. Upload to the root of your repo (same folder as index.html)
8. Commit and push

**Estimated time:** 20 minutes
**Priority: HIGH**

---

### 6. Business Directory Listings
**Why Claude can't do it:** Requires creating accounts on external platforms with your business credentials.

**Platforms to register on (in order of importance):**

| Platform | URL | Time |
|---|---|---|
| **Google Business Profile** | business.google.com | (see #1 above) |
| **Bing Places** | bingplaces.com | 20 min |
| **Apple Maps Connect** | mapsconnect.apple.com | 30 min |
| **Yelp for Business** | biz.yelp.com | 20 min |
| **Facebook Business Page** | facebook.com/business | 30 min |
| **BBB (Better Business Bureau)** | bbb.org/accreditation | 30 min |
| **Angi (formerly Angie's List)** | angi.com/pro | 30 min |
| **Nextdoor Business** | business.nextdoor.com | 20 min |

**Consistent info to use everywhere:**
- Business Name: **Reclaimed Detailers LLC** (exact same every time)
- Phone: **(334) 640-1831**
- Email: **reclaimeddetailers@outlook.com**
- Website: **https://reclaimeddetailers.com**
- Category: **Auto Detailing**

**Estimated time:** 3–4 hours total
**Priority: HIGH** — Consistent NAP (Name, Address, Phone) across directories is a major local SEO signal

---

### 7. Google Review Strategy — Get to 50 Reviews
**Why Claude can't do it:** Reviews must come from real customers.

**Your review link:** `https://g.page/r/[your-place-id]/review` — get this from your GBP once live.

**How to get reviews fast:**
1. Text every client you've served in the last 6 months: *"Hey [name], it was great detailing your car! If you have 60 seconds, a Google review would mean the world to me. [your link]"*
2. Add the review link to your email signature and Instagram bio
3. After every job, send a follow-up text 2 days later with the link
4. Never offer incentives — it violates Google's policy

**Goal:** 50+ reviews at 4.8+ stars before you run any paid ads

**Estimated time:** Ongoing
**Priority: HIGH**

---

## 🟡 MEDIUM PRIORITY — Do Within First Month

### 8. Email Marketing Setup
**Why Claude can't do it:** Requires creating an account on an email platform.

**Recommended tool:** Mailchimp (free up to 500 contacts) — https://mailchimp.com

**Step-by-step:**
1. Create a free Mailchimp account
2. Create a list/audience called "Reclaimed Clients"
3. Set up a welcome email: "Thanks for booking — here's what to expect"
4. Create a monthly newsletter template matching your brand colors
5. Add every client email you have to the list
6. Schedule monthly sends with car care tips + booking CTAs

**Estimated time:** 2 hours to set up
**Priority: MEDIUM**

---

### 9. Google Analytics 4 Setup
**Why Claude can't do it:** Requires a Google account and generating a tracking ID.

**Step-by-step:**
1. Go to: https://analytics.google.com
2. Create a new property → name it "Reclaimed Detailers"
3. Choose "Web" → enter your domain
4. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
5. Open `index.html` and add to `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');</script>
   ```
6. Add the same snippet to every page (or tell Claude to add it for you once you have the ID)
7. Set up conversion events: track form submissions on book.html and contact.html

**Estimated time:** 45 minutes
**Priority: MEDIUM**

---

### 10. Facebook Business Page
**Why Claude can't do it:** Requires logging into your personal Facebook account.

**Step-by-step:**
1. Go to: https://facebook.com/pages/create
2. Category: Local Business → Auto Detailing
3. Name: **Reclaimed Detailers LLC**
4. Add profile photo (your logo or a great before/after)
5. Add cover photo (wide before/after shot)
6. Add your phone, website, hours
7. Add your services with descriptions and prices
8. Make your first post: introduce yourself, share a before/after, add a Book Now button

**Why:** Facebook is where Montgomery-area adults 25–55 spend time. It's also where you'll run ads eventually.
**Estimated time:** 1 hour
**Priority: MEDIUM**

---

### 11. TikTok / Instagram Reels Content
**Why Claude can't do it:** Requires filming actual detailing jobs.

**Content ideas that perform well (post 2–3x/week):**
- "Satisfying" dirty-to-clean transformation clips (15–30 seconds)
- Before/after reveal side by side
- "What $XXX gets you at Reclaimed Detailers"
- Clay bar gliding over contaminated paint — ASMR style
- Ceramic coating water beading test after installation
- "Day in the life of a mobile detailer in Montgomery"

**Use these hashtags:** #MontgomeryAL #AutoDetailing #CeramicCoating #MobileDetailing #Detailing #CarDetailing #BeforeAndAfter

**Estimated time:** 30 min per week to film + edit
**Priority: MEDIUM — High ROI for organic reach**

---

## 🟢 LOW PRIORITY — Do When Ready

### 12. Formspree Integration for Real Form Submissions
**Why Claude can't do it:** Requires creating a free Formspree account and getting a form endpoint ID.

**What it is:** Currently the contact and booking forms show a success state but don't actually email you. Formspree sends submissions to your email.

**Step-by-step:**
1. Go to: https://formspree.io and create a free account (rayr.compton@gmail.com)
2. Create a new form → name it "Contact Form"
3. Copy your form ID (format: `xpzgkxxx`)
4. Tell Claude: "Add Formspree form ID [your-id] to contact.html and book.html"
5. Claude will update the `<form>` action attributes

**Estimated time:** 15 minutes
**Priority: LOW** (booking forms are conversion tools even without backend — but real emails are better)

---

### 13. Yelp Business Page
**Step-by-step:**
1. Go to: https://biz.yelp.com
2. Search for your business — claim it if listed, or add it
3. Complete all profile sections
4. Add photos
5. Respond to all reviews within 24 hours

**Estimated time:** 30 minutes
**Priority: LOW**

---

### 14. Apple Maps Connect
**Step-by-step:**
1. Go to: https://mapsconnect.apple.com
2. Sign in with an Apple ID
3. Add your business or claim it
4. Fill in all details consistently with Google

**Estimated time:** 30 minutes
**Priority: LOW**

---

### 15. Set Up a Business Email Address
**Why:** `reclaimeddetailers@outlook.com` looks informal vs. `ray@reclaimeddetailers.com`.

**Step-by-step:**
1. Go to Google Workspace: https://workspace.google.com (starts at $6/month)
2. Or use Zoho Mail (free): https://zoho.com/mail
3. Verify your domain
4. Create `ray@reclaimeddetailers.com` or `hello@reclaimeddetailers.com`

**Estimated time:** 30 minutes
**Priority: LOW** (professional but not urgent)

---

*Last updated: June 11, 2026*
*All code-level items have been completed by Claude — see PROJECT_AUDIT.md for details.*
