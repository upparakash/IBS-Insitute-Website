# Live Site Data Audit — ibsbankcareer.in

**Date:** 16–17 July 2026
**Purpose:** This rebuild is meant to be the *updated* version of the real, live `ibsbankcareer.in`. This doc tracks what content has been verified against the real site (safe to trust), what's still placeholder/fabricated (needs replacing later), and what genuinely can't be sourced from the live site (so isn't a bug if it looks "made up").

Read this before touching Contact info, legal pages, Blog, Testimonials, Gallery, Results, or the course catalog — it'll save you re-scraping the same pages.

---

## How the live site was inspected

No sitemap.xml exists on the live site. Page discovery was done by crawling `href="https://ibsbankcareer.in/..."` links out of the homepage HTML (`curl -A "Mozilla/5.0"`) and following individual pages from there. Some content (prices, the interactive city-tab map on `/contact-us`) only appears after JS runs, so a couple of pages needed Playwright instead of curl. The live site's own **Disclaimer page is broken** — it renders unrelated lorem-ipsum CMS placeholder text, not real content — so don't trust that page as a source for anything.

---

## ✅ Verified real & corrected this session

### Contact info (`src/data/siteData.js` → `SITE` object)
Pulled from `/contact-us` raw HTML (phone `tel:` links, footer address blocks, and the floating WhatsApp button `href="https://wa.me/+917592000790"`):
- Phone: `+91-813 896 2298` / `+91-755 900 0083` / `+91-9447873644` / landline `0479-2445593`
- Email: `mail@ibsbankcareer.in` (was `info@ibsbankcareer.in`)
- WhatsApp: `917592000790` (was pointing at a call number)
- Head Office (Kayamkulam) + Corporate Office (Thiruvananthapuram) addresses
- Social links: Instagram `ibsbankcareer_`, LinkedIn `company/institute`, X (`x.com/ibsbankcareer`) — all previously wrong/guessed

These changes flow through `Footer.jsx`, `TopBar.jsx`, `FloatingActions.jsx`, `SchedulePage.jsx`, `ContactPage.jsx`, and `SEOHead.jsx`'s JSON-LD `sameAs`, since they all read from `SITE`.

### Contact page (`src/pages/ContactPage.jsx`)
- Map embed was hardcoded to **Connaught Place, New Delhi** — completely wrong city. Replaced with the real Kayamkulam head-office embed (sourced from the live site's own iframe `src`).
- Added a "Regional Centres/Offices" section listing the 11 cities from the live site's interactive map widget (Trivandrum, Ernakulam, Calicut, Chennai, Hyderabad, Pune, Ahmedabad, Vijayawada, Delhi, Jaipur, Bengaluru). Full street addresses exist in source for **Chennai, Hyderabad, Vijayawada, Delhi only** — the rest only have a generic map pin on the live site, no address text, so ours are Google Maps search links by city name rather than fabricated addresses.

### Legal pages — `src/pages/LegalPage.jsx` + `src/data/legalData.js`
`/privacy-policy`, `/terms`, `/refund-policy` now render the **real** text from the live site's `/privacy/policy`, `/terms-conditions`, `/refund/policy`. Previously these routes just rendered `AboutPage` as a filler.

`/disclaimer` is **not** copied from the live site — see note above, it's broken there. What's on our site now is an original, reasonable disclaimer for a coaching institute (no guaranteed results, third-party exam-body trademark notice, fee/schedule change notice, testimonials disclaimer, liability limitation). If IBS ever supplies real disclaimer text, replace `LEGAL_PAGES.disclaimer` in `legalData.js`.

### Blog (`src/data/siteData.js` → `BLOGS`, `src/pages/BlogPage.jsx`)
The live site has exactly **6** real blog posts (found via `/blog` listing + each `/blog/blog-details/...` page). All 6 are now in `BLOGS` with real titles/dates pulled from the actual post bodies:

| Post | Real date |
|---|---|
| SBI PO 2026 Notification (1,500 vacancies) | 19 Jun 2026 |
| JAIIB & CAIIB 2026 Crash Batches | 31 Mar 2026 |
| RBI Assistant Recruitment 2025 — Panel Year | 19 Feb 2026 |
| SBI Junior Associate (Clerk) Notification | 7 Aug 2025 |
| IBPS CRP CSA-XV (Clerk) Notification | 4 Aug 2025 |
| Bank of Baroda — Fixed Term Contract Recruitment | 31 Jul 2025 |

Removed 4 previously-fabricated posts (`ibps-rrb-2026`, `caiib-bfm-strategy`, `jaiib-nov-2026-strategy`, `banking-glossary`) that were invented, dated 2026, and not on the live site at all. `BlogPage.jsx`'s category filter chips were updated to `SBI` / `IBPS` / `JAIIB` / `CAIIB` / `RBI` / `Bank PO` to match what these 6 posts actually use.

### YouTube channels
Added a dedicated `/more/youtube-channels` page (`src/pages/YouTubeChannelsPage.jsx`) for the 4 real IBS channels the user supplied directly (not scraped):
- `@INSTITUTEOFBANKINGSTUDIESIBS`, `@IBSCertPrep`, `@IBSDRAOfficial`, `@IBSJaiibCaiibPrep`

Also fixed a real bug found in the process: the header's "More → YouTube Channels" link was a bare external URL, but the mega-menu always renders dropdown items with React Router's `<Link>`, which can't navigate to external URLs — it would have 404'd. Now it's an internal route.

### Course catalog (`src/data/courseListingData.js`)
Already closely mirrored the real site's product catalog from earlier work (verified against real `/product/single/...` URLs — course names, formats like Full/Recorded/DLP/Study-materials-only all check out). One real gap found and fixed: **"Foundation Course (SIDDHI)"** and **"Diploma in Banking & Finance (DB&F)"** — two of the live site's own named flagship programs (confirmed via its footer quick-links) — were buried inside a vague `others` / "Others (NISM)" tab. Split into their own `foundation` and `dbf` categories so they're visible as top-level tabs on `/courses`.

**Important — course pricing cannot be verified from the live site.** Individual course pages (`/product/single/...`) don't display a price at all; they're enquiry-form only ("Admission Form" → submit contact details, no checkout). So the ₹ figures in `courseListingData.js` are illustrative estimates, not scraped facts, and there's no live-site source to check them against.

---

## ❌ Still fabricated — known, not yet fixed

These were identified as fabricated during this audit but **not yet replaced** (user chose Legal pages / Blog / Course catalog as priority this round):

| Page | Problem | Real replacement available? |
|---|---|---|
| `TestimonialsPage.jsx` | All 9 testimonials are invented names/quotes | **Yes** — live `/testimonials` has 16 real reviews (Vineesh Kumar H, Praveesh A, Jishnu Narayanan, etc.) plus a real stat: **4.8/5 from 1,681 Google Reviews** |
| `GalleryPage.jsx` | No real photos — just colored gradient placeholder blocks with invented captions | Live site presumably has real photos, but scraping/downloading images wasn't done this session |
| `ResultsPage.jsx` | No real topper names found in current data | Live site has separate results pages per exam (JAIIB, CAIIB, DRA, JIBO, promotions, certificate courses) — not fetched yet |
| Events / News / Publications | These pages don't exist on our site at all | Live site has separate `/events`, `/news`, `/publication` sections |

## ✅ Already real (confirmed, no action needed)

- **Faculty roster** (`FacultyPage.jsx` / `FACULTY` in `siteData.js`) — all 32 names, designations, and retired banks match the live `/faculty` page exactly.
- **About page founder story** — Mr. Satheesh Kumar S, founded 2011, matches live `/about`.
- One lingering inconsistency: `Footer.jsx` says "since 2012," everywhere else (About page, SEOHead, HomePage) correctly says "since 2011." Small fix, not yet done.

---

## If you pick this up again

1. Testimonials is the fastest, highest-impact next fix — real quotes are already gathered above in this doc's git history / the conversation that produced it; re-fetch `https://ibsbankcareer.in/testimonials` if needed.
2. Don't re-fetch `/contact-us`, `/privacy/policy`, `/refund/policy`, `/terms-conditions`, `/about`, `/faculty`, or the 6 blog detail pages — already extracted and applied.
3. Gallery photos and Results toppers need actual image/data scraping, not just text extraction — budget more time for those.
4. Course pricing: stop trying to verify it against the live site — it isn't there.
