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
