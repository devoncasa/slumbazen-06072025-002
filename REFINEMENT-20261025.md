# SlumbaZEN refinement — 25 October 2026

## Project and preservation

Existing repository: devoncasa/slumbazen-06072025-002. React 19 / Vite / React Router with static HTML prerendering; source catalog in products.ts and shared specification logic in catalogueSpecs.ts. Five supported languages: Thai, English, Chinese, Arabic and Hindi. Netlify site b2f7ea5a-0759-499c-8b12-59950078cce1 builds main with npm run build and publishes dist. The intended canonical origin remains https://www.slumbazen.com.

This refinement starts from production commit 7ad4f24e301a2b11fd0a816b681dbd30c3ecefff. Remote recovery branch: backup/slumbazen-before-refinement-20261025. Local checkpoint: c22a19a. No whole-site rollback or platform migration was performed.

## Recovery evidence and inventory

The immediately preceding repair had already restored original page components from Git commit 9b2637f292815e8380fd441dc55282c72c361ca8. The restored content is preserved here; it is not presented as newly recovered in this refinement. Earlier repair evidence and chronology remain in REPAIR-CHECKLIST.md.

- Hotels: original selection cards, five use-case comparisons, quotation and sample paths, and nine original gallery photographs.
- Towels: original towel variants, bath-mat reference, ten first-wash steps, five care sections, and 23 original gallery photographs.
- Other existing page types: home, collections, gallery, white sheets, color enquiries, set planning, materials, TENCEL guide, sizes, delivery/returns, contact and journal. Three articles and 106 individual SKU pages remain accessible.
- The earlier loss came from replacing source page bodies during simplification, rather than verified deletion of an independent hotel catalog. Current hotel/towel routes and navigation were already restored at the starting commit. This release keeps their source content and improves the shared journeys.
- The historical root route failure had already been repaired by a forced root redirect plus client fallback. The existing History API route migration for legacy hash links, static product paths, 404 status configuration and language-equivalent links remain.
- This release adds one genuinely new page type, /{language}/bedding-finder/, bringing the static total to 620 localized pages. It does not label this new tool as recovered content.

## Implemented improvements

A coordinated editorial homepage, refined hairline frames, bounded upper-right bedroom background with diagonal ivory fade, compact mobile navigation, accessible comparison dialog, mobile menu focus loop and Escape handling. Authentic product pictures and original galleries are retained. Every generated lifestyle photograph is visibly identified as illustrative.

A finder uses catalog nominal width, listed depth, material family and appearance. Results explicitly remain candidates until mattress length, textile dimensions and tolerances are confirmed. Comparison accepts three SKUs, displays shared specifications and unknowns, and carries selected SKUs and quantities into a hotel enquiry. Search uses SKU and localized product fields. Session-only selections, enquiry draft and recently viewed history are resettable. No analytics or behavioral profiling was introduced.

The quotation draft collects property type, rooms, destination, requested timing, measurements, quantities and requirements. A Netlify Forms receiver was added with name/email, validation, honeypot, preserved failure state, duplicate-send protection and an explicit acknowledgement only after a successful receiver response. Copy and phone options remain. Netlify Forms was enabled on the existing Personal plan; no subscription or paid add-on was purchased. Live receiver acceptance is a release gate and must be recorded after deployment.

SEO metadata now shares one source between server HTML and client navigation: titles, descriptions, social images, canonical URLs, hreflang and JSON-LD. Product data includes no invented offers, zero-price quotation offers, ratings or reviews. Soft-Tex is not claimed as a fiber in Product schema. Articles link to the relevant ASTM source for counting methodology. The app hydrates the existing crawlable HTML on ordinary direct routes, with client rendering for query/hash transitions.

## Image plan and integration

| Page / use | Asset | Treatment |
|---|---|---|
| Home hero and subtle background | quiet-bedroom | Newly generated natural-light ivory bedroom; 1200 and 640 px WebP; integrated in HomePage and refinement.css |
| Bedding finder | selection-details | Newly generated folded bedding and measuring tape; 1200 and 640 px WebP; integrated in ShoppingTools |
| Hotels | hospitality-room | Existing labelled generated suite retained alongside the original nine-photo gallery |
| Towels | hospitality-bath | Existing labelled generated bathroom retained alongside authentic towel photos |
| First-wash guidance | towel-first-wash | Existing labelled generated illustration retained |
| Materials, care, colors, sets, delivery, journal | textile, care, colors, set, packing, towels | Existing labelled editorial assets retained in their original sections |

New prompt direction: ultra-realistic editorial interior/detail photography, natural saturation and contrast, soft daylight, believable depth of field and folds, warm ivory/stone/taupe/champagne, no text/logos/certifications, no exact SKU representation. Separate images were generated, not a collage. New 1200 px assets are approximately 102 KB and 79 KB; 640 px variants are approximately 30 KB each. Asset-source JSON files recreate the optimized binaries during the existing build process.

## Verification before release

- npm run check: production build, TypeScript, 620 static routes, 106 products, 530 unique localized product descriptions for metadata, five-language field parity and 487 restored customer-facing keys.
- 32,450 internal HTML links checked, with no missing route or fragment target.
- 75 simulated-DOM top-level route checks; finder matches/no-match, comparison limit/reset, selected SKU/quantity transfer, query search, invalid quantities, request failure/success handling, language continuity/RTL, metadata updates, copy payloads, recently viewed and dialog state.
- 15 hydration checks across five languages and three representative route types, with no recoverable hydration errors.
- Actual managed-browser layout matrix: home, hotels, towels, finder, gallery and one product, in all five languages at 320, 360, 390, 768, 1024 and 1440 px (180 checks). No document overflow or decoded-image failures were observed after each heading rendered. Off-screen lazy images were additionally checked for local file existence by the static audit.
- Native-browser finder and comparison dialog inspected; distinct SKUs, supplied dimensions, missing-data explanations and keyboard focus were visible.
- Main JavaScript approximately 141 KB gzip; CSS approximately 12 KB gzip. Build checks enforce 150 KB and 15 KB budgets respectively, and 120 KB / 40 KB budgets for new large / small images. Vendor/i18n/locale payloads and fonts are additional. Vite still reports its uncompressed 500 KB main-chunk advisory; this is not represented as a Core Web Vitals pass.

## Remaining evidence and dependencies

See data/product-verification-gaps.json for a 106-SKU missing-information inventory. Supplier counting methods, actual composition percentages, fitted-sheet lengths, towel GSM/weight basis, closures/finishing, care labels, pack contents, current prices/stock, certification/origin/warranty claims and commercial policies need business confirmation. No measurements were inferred from photography or competitor catalogs.

The custom-domain check on 25 October still returned an upstream connection failure (HTTP 503 through this environment). Existing records identify Netlify certificate/domain association support case 1153097. This report does not claim HTTPS or preferred-host redirects are fixed. The verified Netlify hostname remains the independent release destination. No DNSSEC weakening, certificate bypass, domain purchase or support message was performed.

Real-user p75 LCP, INP and CLS are not available in this environment. The targets remain 2.5 seconds, 200 milliseconds and 0.1 respectively, separately for mobile and desktop. No ranking, traffic, rich-result or AI citation guarantee is made. Google documents established SEO foundations for AI features, without a special AI schema or required AI text file.

References: https://developers.google.com/search/docs/appearance/ai-features ; https://web.dev/articles/vitals ; https://store.astm.org/d3775-17r23.html ; https://docs.netlify.com/manage/forms/usage-and-billing/ .
