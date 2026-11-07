# SlumbaZEN

React/Vite on Netlify project slumbazen, site ID b2f7ea5a-0759-499c-8b12-59950078cce1.
Repository devoncasa/slumbazen-06072025-002, production branch main.
Primary domain https://www.slumbazen.com. Fallback https://slumbazen.netlify.app/th/.

## Local checks

Node.js 22 or later. Run npm ci, then npm run check. Run npm run dev for review.
No API key is needed for the current site.

## Release gate

The owner requires all seven audit stages to finish before any deployment.
Work branch work/stages-1-7-20261103. Do not merge into main, open a pull request
that triggers a preview, run a deploy, or trigger a build hook until Stage 7 is
complete. Work commits carry [skip ci] [skip netlify]. At release, verify the
final diff, build and live URL. To undo released code, revert the commit,
verify the build and publish the correction.

## Stage 1 — 3 November 2026

Enquiry messages use the current browser origin after mounting, preserving the
localized product path. Links from the fallback site therefore remain usable.
Search canonicals retain the configured primary domain.

Public DNS observed apex A records 75.2.60.5 and 99.83.231.61, www CNAME
slumbazen.netlify.app, and Spaceship nameservers. Compare the second apex A
record against the project-specific Netlify instructions before changing it.
Preserve MX, SPF, DKIM, DMARC and verification TXT records.

The connector confirms a ready published deployment but exposes no certificate
or DNS editing. The domain panel requires sign-in. Stage 1 remains blocked on
current certificate and domain association inspection, support case 1153097.
Historical expiry and order restriction have not been reverified today.

After sign-in, inspect both aliases, certificate names and expiry, provisioning,
CAA, AAAA, DNSSEC and project-specific external DNS instructions. Record existing
values before any verified correction. Verify HTTPS on apex and www, then
redirects preserving language, product path and query parameters.

### Authenticated inspection

Signed in successfully. Netlify Domain management still shows an expired
certificate (24 September 2026), names *.slumbazen.com and slumbazen.com.
The panel displays an ACME authorization rate-limit failure dated 26 October.
Both aliases point to an internal Netlify DNS zone. That zone still shows the
old Netlify registration expired 30 June 2026 and p09.nsone.net nameservers,
whereas public delegation uses Spaceship. This confirms stale account-side
registration/DNS metadata. No certificate or DNS change was applied.
Netlify support case 1153097 must reconcile this association with external DNS
and issue a certificate for slumbazen.com and www.slumbazen.com. No purchase
or auto-renewal of the obsolete registration is required by this work.
Stage 1 is partially complete, pending that correction and live HTTPS tests.

## Stage 2 catalogue consistency

All 106 SKU records retain their original catalogue values in products.ts.
The per-SKU review ledger is data/product-verification-gaps.json, with source
references and unresolved supplier fields. Its status describes consistency,
not a new supplier or laboratory confirmation. The bath mat remains a separate
reference with no invented SKU or price.

productSpecificationRows in catalogueSpecs.ts supplies the product table,
comparison and enquiry message. It includes catalogue price, unknown sales unit,
contents, dimensions, and towel weight basis. Pillowcase 20 x 30 x 6 dimensions
are preserved with the meaning of the third value explicitly awaiting
confirmation. Fitted-sheet mattress length remains unknown, and bolster
measurements are not treated as circumference or diameter. Structured-data size
and product metadata use the same dimension label.

Supplier confirmations still needed: current prices/currency and sales units,
availability, composition, care labels, finished dimensions and fit tolerances,
pillow closures/third dimension, bolster measurement basis, towel weight basis,
GSM, and every set's contents. The 26 October owner-confirmed square-inch
thread-count basis is retained, without a claim of independent lab verification.
No set total or towel GSM is calculated from unconfirmed sales/weight units.

## Stage 3 selection guides and images

Added localized mattress measurement diagram on White Sheets, piece-type
selection cards on Bedding Sets, and a towel selection introduction with
illustrative terry-loop detail on Towels. Existing products and guides remain.
The SVG labels are translated HTML so dimensions are not baked into photos.
Set cards link to real catalogue filters. Thin frames and the existing faded
bedroom background are reused. Opaque navigation prevents headings showing
through while scrolling. Towel variant rows stack on narrow screens.

One generated editorial texture has 640/1200 px WebP variants. The full prompt,
source digest and original-retention note are in data/editorial-terry-detail-source.json.
It is labelled as illustrative, with no claim to depict a particular SKU.
Twenty-seven existing towel-page images now have 640 px WebP derivatives.
OriginalGallery and InlineImage use measured dimensions and available responsive
sources, while zooming still opens the full image. Encoded project assets in
asset-source are restored by the existing build script.

Stage 3 verification and performance conditions are in verification/stage3-checks.json.
The final cold-load local lab shows an increased mobile towel payload after adding
the editorial section and a lower desktop payload. LCP remains close to the
baseline. These results are not real-user metrics. Stage 6 must reduce shared
JavaScript, backgrounds and fonts and repeat the measured customer flow.

## Stage 4 selection and enquiry flow

Catalogue search matches all typed terms across SKU, thread count, colour and
localized product attributes. Searches remain meaningful after language changes.
Finder selections use URL query fields fit/width/depth/length/fabric/pattern.
Length is optional and carried into the product enquiry; it is not used to
claim a confirmed fit while catalogue mattress length remains unverified.
Invalid numeric measurements return no candidates.

Quote URLs normalize case and duplicate SKUs. Visitors can remove quote items,
change a samples request to a quotation and clear the saved draft together with
its query fields. Draft name/email are kept only in the existing tab-session
storage and cleared by Clear enquiry draft. Existing older/corrupt draft data
is handled without crashing. Comparison selections remain a separate tool.

Delivery snapshots the message and contact signature at submission. Duplicate
submits during the pending request are blocked, failed requests remain retryable,
and changing email while a request is pending does not mark the edited request
as already sent. Native contact validity and enquiry quantity validity are both
checked before sending. This is client state handling, not a guarantee of
server-side deduplication after a lost network acknowledgement.

Verification details are in verification/stage4-checks.json. Browser tests
intercepted form POSTs locally, including a 503 response and a delayed success.
No production enquiry was sent. Real form receipt/notification checks remain
part of Stage 7 before release.

## Stage 5 localized copy and search presentation

The 18 main-page/article metadata entries in each language now use complete,
page-specific sentences instead of a truncated generic introduction. Thai
introductory copy uses direct, natural wording and keeps unverified commercial
claims as enquiries. Existing article paragraphs and original product assets
remain intact. Each article has three meaningful localized headings, with a
single-column reading layout suited to longer Thai and Arabic headings.

Prerendered titles, social titles and client navigation share pageSEO. Share
images follow the page topic; all image paths are checked. Language tags use
zh-Hans consistently, and every localized HTML page and sitemap entry has the
same five reciprocal alternatives plus x-default. Unknown pages have no
language alternatives and are marked noindex. Preview builds include noindex
HTML metadata, the noindex response-header file and a blocked robots.txt.

The neutral root provides five native language links without JavaScript. With
JavaScript it chooses a saved language, then a supported browser language, then
Thai. Explicit language URLs always win. Header choices are saved locally;
search parameters and anchors survive language changes. The forced root-to-Thai
Netlify rule is removed in source; this configuration has not been deployed.

AI/search discovery follows ordinary crawlable content, clear headings,
internal links and accurate schema. No speculative AI-only files or fabricated
reviews/offers were added. Product schema is descriptive: Google Product rich
results require additional eligible offer/review data. Verified sales units,
prices and availability are still prerequisites for adding transactional offers.

Reference guidance reviewed for this stage:
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/structured-data/product-snippet

Verification is recorded in verification/stage5-checks.json. Local browser tests
cover 30 rendered page/viewport/language combinations plus root-language and
JavaScript-disabled journeys. Search indexing, production headers, SSL and real
form receipt remain release checks in Stage 7. The user has authorized creating
additional matching imagery wherever needed; existing imagery covers this
stage's content, so no new images were generated in Stage 5. All work remains
on the work branch, without deployment. Stage 6 is the remaining performance
and technical-hardening batch before Stage 7 release verification.

## Stage 6 performance and technical hardening

Page modules are loaded by routeResources rather than importing every original
page at startup. The initial locale and page load in parallel before hydration;
prerendering explicitly prepares the page first, so all 620 routes keep their
complete crawlable HTML. The Vite manifest supplies preload links for the active
page and its shared imports. Client navigation rejects stale async completions.
A failed route-module request offers a reload of that same URL, which also
recovers from stale asset references after a future release. Initial failures
leave the prerendered content visible with a localized status message.

Home and towel hero images have early responsive image preloads. The towel hero
uses its existing 640 px derivative on narrow screens. Offscreen decorative
backgrounds activate within 300 px of the viewport through IntersectionObserver;
content photos remain native responsive images and all original assets remain.
Decorative backgrounds may be absent without JavaScript; buyer information and
content photos remain in HTML. Product card sizes reflect the 390 px maximum
card width, avoiding unnecessary 800 px downloads on ordinary desktop screens
while retaining the larger source for high-density screens. The logo has a
lossless WebP version and explicit intrinsic dimensions; its PNG is preserved.
The header background has a smaller WebP derivative. Added encoded assets are
restored by scripts/restore-assets.mjs during a clean build.

Font CSS requests only the active language family. The HTML and client use the
same language-to-font mapping, with font-display=swap. Hashed JavaScript/CSS files
have immutable caching rules in netlify.toml; stable image URLs do not. Nosniff
and strict-origin-when-cross-origin response headers are configured in source.
Actual Netlify response headers remain a Stage 7 release check.

An npm advisory scan found moderate findings in the old router and translation
HTTP backend. react-router-dom is now pinned to 7.18.5 and i18next-http-backend to
4.0.9; package-lock.json records the dependency graph. The build uses Node 22 on
Netlify (minimum Node 20). Both production-only and full npm audit then reported
zero known findings on 2026-11-03; this is not a general security guarantee. The
browser and simulated-DOM journeys were rerun against the upgraded packages.
Credential-pattern checks cover built HTML/JS/CSS/JSON/text; production output contains no
source maps. Public catalogue prices remain ordinary public catalogue data; this
site has no proprietary pricing calculator or custom payment write endpoint.

Verification: verification/stage6-checks.json and stage6-dependencies.json.
The performance comparison uses three cold runs per page/viewport/version,
interleaved before and after, under the same local gzip server, 1.6 Mbps download,
80 ms latency and 4x CPU slowdown. It uses a fixed local Sarabun TTF so remote
font-service latency is excluded. This is laboratory data on local HTTP, not
Netlify/HTTP2 field data; no field INP, LCP or CLS data was available. Form POSTs
were intercepted, including a 503 retry and an in-flight contact correction.
No real customer enquiry was sent.

To reproduce the performance lab, provide a Chromium executable and local
Sarabun font through SLUMBA_CHROMIUM and SLUMBA_LAB_FONT. The script uses
Playwright from CODEX_PRIMARY_RUNTIME_NODE_MODULES. After a clean build, run:

```sh
node scripts/performance-lab.cjs dist /tmp/slumbazen-paired.json /path/to/before-dist
```

Rollback for this batch: restore the Stage 5 source commit
b9ad654c4b5bfa24170f760c4db2612184faf8f9 on a separate work branch, reinstall with
npm ci and rebuild; do not modify the current production branch as a shortcut.
No deploy or deployment-triggering pull request was created for Stage 6.

Technical references:
- https://v6.vite.dev/guide/features
- https://web.dev/articles/browser-level-image-lazy-loading
- https://reactrouter.com/changelog
- https://github.com/remix-run/react-router/security/advisories/GHSA-wrjc-x8rr-h8h6
- https://github.com/i18next/i18next-http-backend/blob/master/CHANGELOG.md

Final laboratory medians (three cold runs each):

| Viewport | Page | LCP before → after | Transfer before → after |
|---|---|---|---|
| 390 px | home | 0.96 → 0.97 s | 641 → 316 kB |
| 390 px | gallery | 2.14 → 1.63 s | 394 → 334 kB |
| 390 px | towels | 4.16 → 1.02 s | 812 → 425 kB |
| 1440 px | home | 2.66 → 1.72 s | 743 → 479 kB |
| 1440 px | gallery | 2.67 → 1.70 s | 638 → 389 kB |
| 1440 px | towels | 2.72 → 1.76 s | 1002 → 858 kB |

Mobile home LCP is effectively unchanged (+12 ms), with 50.6% fewer bytes.
Raw runs and resource-level image transfers are in stage6-performance.json.
Stage 7 remains the final acceptance/release batch; production is unchanged.

## Stage 7 acceptance — source passed; release blocked

A fresh Git checkout and npm ci verified the locked dependencies. A production
npm run check passed all 620 localized routes and 33,520 internal links. The
additional npm run check:release-artifact checks sitemap entries, referenced
assets and production indexing controls; it never publishes or submits a form.

The final browser matrix covered 315 page/language/viewport combinations: 15
main routes and six product types in five languages at 360, 820 and 1440 px.
No overflow, missing image alternative, broken loaded image or runtime error
was reported. The matrix included 31 automated axe scans. A separate 15-flow
suite added 75 scans of recently-viewed items, selected compare buttons,
one- and three-product comparisons and native photo dialogs. Neither final
suite reported axe violations. Native browser-toolbar focus is permitted;
modal backgrounds cannot receive focus. Desktop cards downloaded 400 px WebP;
a high-density phone downloaded 800 px WebP. These automated, keyboard and
visual spot checks are not a full WCAG or physical-device certification.
Axe incomplete rules remain manual-review signals. Remote font CSS and a WOFF2
font source for each of the five languages also returned 200.

Acceptance fixes make accessible names match visible language codes, recent
counts and compare selections. One-product tables now fit a narrow dialog;
multi-product tables use sticky row labels and a localized scroll hint. The
DOM test harness uses DOM FormData instead of Node's incompatible constructor.

**Release decision: NO-GO. Stage 7 and the seven-stage programme are not marked
complete. No deployment or deployment-triggering pull request was created.**

Authenticated Netlify inspection still shows the certificate expired on
24 September 2026, the historical 26 October ACME failure and the obsolete
Netlify registration/DNS association. Public authoritative DNS remains
Spaceship. There is no Delete DNS zone control on that registration page.
Both custom names failed HTTPS from the checking environment; the Netlify
fallback returned 200. This is not a measured worldwide outage. Support case
1153097 must reconcile the obsolete association and provision valid HTTPS.
The previous follow-up was sent on 3 November; no new message was sent here.
Do not enable renewal of the obsolete registration or delete external records.

The existing enquiry form is registered, with its expected fields and honeypot.
Historical submissions do not prove the new build's receipt or notifications.
After the domain blocker is resolved, verify HTTPS and the path/query-preserving
canonical redirect. A permitted release must then be checked for its actual
commit, CDN headers, controlled form receipt and notifications. Netlify is
linked to the correct GitHub repository; main is production, builds are active,
and Node 22.x / npm run build / dist match the source configuration.

Evidence: verification/stage7-checks.json, stage7-domain.json and
stage7-browser.json. Resume with the domain blocker and any new support reply.
Do not rerun unchanged source QA or deploy merely because source checks pass.

Bundle budgets read the active entry and stylesheet from built HTML, so leftover
unused files cannot skew reported transfer sizes. The final check suite passed
again after this test-harness correction; no application behavior changed.

### Google Analytics 4

Use the dedicated SlumbaZEN GA4 property `563131096` for new production
traffic. Historical SlumbaZEN data collected before the switch remains in the
previous shared property `498276491`.

Set `SLUMBAZEN_GA4_MEASUREMENT_ID` in Netlify's production build environment
to the Measurement ID of the SlumbaZEN web stream. The tag runs on localized
pages at `https://www.slumbazen.com` and loads after the page's load event.
Leave the variable unset to build without analytics.

In the web stream's Enhanced measurement settings, disable automatic page
changes based on browser history to avoid counting React navigation twice.
Verify direct visits and client-side navigation in GA4 Realtime or DebugView.
