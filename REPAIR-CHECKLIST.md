# SlumbaZEN repair verification — 25 October 2026

Baseline: devoncasa/slumbazen-06072025-002, main, 9b2637f292815e8380fd441dc55282c72c361ca8. Recoverable remote branch: backup/slumbazen-before-repairs-20261025. Existing production Netlify site: b2f7ea5a-0759-499c-8b12-59950078cce1. No unrelated repository was edited.

| Finding | Implemented repair | Verification |
|---|---|---|
| Home overlap, corruption, long introduction | Responsive header; clean localized introduction; category actions before catalog | Five-language prerender checks; 450 rendered page/width checks passed |
| Collection actions hidden on hover | Always-visible category links and descriptions | Semantic links in initial HTML |
| Gallery missing keys and crowded pagination | Rebuilt localized URL-driven controls; compact previous/page/next | Cotton, white and empty-query assertions pass |
| Catalog image reuse and invented offers | Retain 106 original raw catalog records and shared original photos with visible representative-photo explanation; remove 30 calculated set offers | Unique SKUs and local image paths asserted |
| White sheets filter/order | White filter applies; cotton-led sorting | Query assertion passes |
| Colors empty | Honest color enquiry, no promised stock or custom colors | All five localized pages |
| Complete sets contents | Configurable enquiry, separate components and written inclusion confirmation; no calculated bundle offer | All five localized pages |
| Towels unit confusion/actions | Explain pounds per dozen vs GSM without claiming exact supplier basis; quotation actions | Localized content and enquiry |
| Material filter/links/HTML | Native text content; Cotton route; correct TENCEL link; remove unsupported density conversion | Query and initial HTML checks |
| TENCEL imagery/general claims | New local care photograph; separate general Lenzing fiber information from product claims | Image existence and source review |
| Sizes blanket 14-inch fit | Product-specific catalog labels; width/length/depth SVG; measure topper too | Five-language SVG labels |
| B2B intent lost | Request-type and requirements saved locally across language/page changes | B2B sample intent, quantity and requirements survive language switching; invalid quantity blocks copying |
| Shipping unsupported promises/images | Written-quotation conditions instead of unconfirmed promises; packing and care illustrations; clickable phone | Initial HTML and images checked |
| Contact map/phone | Address-search link instead of fictional map/pin; international +66818519922; no unsupported WhatsApp action | Destination syntax checked; owner channel confirmation outstanding |
| Blog placeholders | Three complete localized articles with dedicated routes, 25 October 2026 publication dates and editorial thumbnails | Fifteen article routes checked |
| Hash URLs and indexing | Browser migration, ordinary static routes, initial HTML, sitemap, reciprocal alternates, canonicals, schema without offers/ratings | 615 pages checked; preview direct navigation, refresh and legacy migration checked; production deployment 6addd014e3c423f4f58106db verified on slumbazen.netlify.app |
| Assets/performance | Six reviewed generated editorial photographs; 59 original images downloaded and optimized; local WebP, explicit image dimensions, below-fold lazy loading; remove runtime Tailwind CDN | Build passes; no unmeasured performance scores claimed |
| Translation coverage | Active content replaced with a 57-field complete five-language content source, plus five-language catalog labels; old fallback-heavy page modules are no longer used | Exact active-key parity and array-length tests pass |

## Business confirmations still required

1. Supplier sheets: exact composition, thread-count method/unit and original 370 figure; each product's complete dimensions, current prices and stock; actual set contents; towel weights/units. The supplier's 370-to-590 conversion is not reproduced.
2. Confirm contact phone +66818519922, email info@slumbazen.com, JTC room B1-BB038, and supply the current official LINE account link. The old personal LINE ID could not be verified; no generic share-to-friends link is presented as ordering. No WhatsApp support is asserted.
3. Confirm shipping fees/free thresholds, custom order rules, returns/refund terms, warranty, B2B minimums, lead times and sample conditions. No precise commitment is published until confirmed.

The domain has no MX records. The old info@slumbazen.com contact was removed from public handoffs pending a working business inbox. Enquiry details can be reviewed and copied, followed by the original call contact.

## Domain

Verisign RDAP: registered 25 October 2026; expires 25 October 2029; registrar Spaceship (IANA 3862); client transfer prohibited; launch1.spaceship.net / launch2.spaceship.net. Receipt confirms three years already purchased for US$28.80. No recovery is indicated. Newly registered domain cannot presently be transferred under the 60-day rule.

Keep registration and DNS at Spaceship and hosting at Netlify. Root CNAME (flattened ALIAS) → apex-loadbalancer.netlify.com; www CNAME → slumbazen.netlify.app. DNSSEC remains enabled. No MX/TXT records were deleted. Netlify support ticket 1153097 concerns its obsolete registered-domain/DNS association and expired wildcard certificate. HTTPS is unresolved at last check.

Comparison checked 25 October 2026, standard non-premium .com, USD; approximate THB at Bank of Thailand 22 October 2026 interbank rate 33.650 THB/USD:

| Registrar | Three-year registration benchmark | Approx THB | Renewal/transfer benchmark | Status |
|---|---:|---:|---|---|
| Spaceship | $28.80 actual paid | 969 | Future renewal not verified | Exact slumbazen.com receipt; privacy/account records retained; no extra purchase needed |
| Cloudflare | $31.38 estimate, 3 × standard $10.46 | 1,056 | $10.46/year and transfer incl. standard added year | Public rate, no domain-specific checkout; taxes unverified; requires Cloudflare DNS |
| Dynadot | $32.64 published three-year rate | 1,098 | $10.88/year; $10.88 transfer + two renewal years = $32.64 estimate | Public multi-year schedule; checkout/taxes not verified |
| Porkbun | $33.24 estimate, 3 × standard $11.08 | 1,119 | $11.08/year; transfer + two renewal years = $33.24 estimate | Public standard rates; checkout/taxes not verified |

The alternative figures use standard recurring prices, not first-year promotions. They are not checkout quotes for an already-owned domain. Optional add-ons excluded; no extra privacy charge assumed for standard included privacy, but tax/billing-address verification was unavailable. Keeping the already-paid Spaceship registration is the cheapest verified suitable choice for the current three-year period: $0 additional.

Primary sources: https://rdap.verisign.com/com/v1/domain/slumbazen.com ; Spaceship account receipt (private, not committed); https://pricing.registrar.cloudflare.com/ ; https://www.dynadot.com/domain/com ; https://porkbun.com/products/domains/tld_pricing ; https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/ ; https://www.bot.or.th/en/statistics/exchange-rate.html ; https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/ ; https://www.spaceship.com/knowledgebase/dns-alias-record/ ; https://store.astm.org/d3775-17r23.html ; https://www.tencel.com/fibers ; https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/ .


Earlier simplified-release rendered preview matrix: 14 page types × five languages × five widths (350), plus three articles × five languages × five widths (75), plus one product × five languages × five widths (25): 450 checks passed. All 106 source product routes have lowercase/trailing-slash regression assertions. Browser tests also cover Cotton+size filtering, reset, query preservation during language switching and back/forward, B2B sample intent, quantity validation, copied product enquiry details, legacy hash migration, direct refresh, and preview noindex metadata. No customer enquiries were sent. Console observations showed browser-extension metadata noise, not application errors. No Lighthouse or real-user score is claimed.

Public material labels use families (Cotton, CVC blend, Soft-Tex) rather than unverified composition percentages or anti-mite claims. Raw source labels remain available in the catalog source for supplier reconciliation. Existing CVC filter aliases are retained.


## Original-content restoration — 25 October 2026

The earlier simplified release replaced too much original content. Original page components and navigation have now been restored from commit 9b2637f292815e8380fd441dc55282c72c361ca8. All restored source guides are now localized in Thai, English, Chinese, Arabic and Hindi, including the size tables, care details and policy sections. Locale dictionaries load on demand to avoid downloading all five long-form language payloads during the initial visit.

- Original towel variants, bath mats, ten first-wash steps, five care sections and 23 original gallery images restored.
- Original hotel selection cards, five use-case comparisons, quote/sample paths and nine gallery images restored.
- Three new labelled editorial images: hospitality-room, hospitality-bath, towel-first-wash. Genuine product files remain unchanged apart from delivery conversion/compression.
- Original collections, home, white sheets, color enquiries, set-planning, fabric guide, Tencel guide, size tables, contact layout and policy sections restored with targeted factual corrections.
- Quotation-based pricing retained until current prices and sales units are confirmed. Original raw source specifications remain recoverable.
- Product facts now expose source dimensions, exact inch-to-centimeter conversions, nominal mattress width, product-specific mattress depth, care/contents questions and localized unique SKU-based descriptions/meta descriptions. Fitted-sheet length and thread-count basis remain unconfirmed and are not invented. Towel weight-per-dozen basis remains unconfirmed.
- Fine image frames and section borders, a subtle room background, active section guide, reading progress, session-local recently-viewed products and accessible image enlargement added. No messages are sent by these interactions.
- Source image generation prompts: natural daylight, realistic textile loops/folds/stitching, warm ivory/clay palette, landscape 4:3, no brand/factory/customer-project claims, no logos/text. Built-in image generation used; final optimized assets stored under public/assets/editorial.
- Recoverable previous release: backup/slumbazen-before-content-restoration-20261025.

Final restoration verification:
- Static production build and TypeScript checks pass.
- 615 localized HTML routes checked; 530 localized product meta descriptions are unique.
- 486 restored customer-facing source keys have no gaps in all five locales; interpolation variables checked.
- Simulated-DOM component checks pass for 70 top-level routes, draft preservation, sample intent, asynchronous Arabic switching/RTL, copied product dimensions, quantity validation, recently-viewed storage, menu Escape and dialog component state. Native layout, native focus/clipboard and actual image decoding are not measured by these component checks.
- Actual rendered preview spot checks confirmed the restored Thai towel/hotel/collections/size layouts at five widths, and the framed Thai product page. Two wider DOM readings during a subsequent Thai matrix disappeared after styles loaded; the material page settled at scrollWidth=clientWidth=345.
- The cloud browser tool then failed with “native credential state cannot be safely resumed” and could not reopen tabs after reset. The final full viewport/language matrix and native dialog/focus checks remain unverified; no claim is made that these passed.

Root-entry regression fixed: force the root 302 to /th/ so dist/index.html cannot shadow it, and retain a client-side root Navigate fallback. Simulated-DOM root navigation is covered by npm run check.
