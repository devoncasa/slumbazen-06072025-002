# Shared customer contact launcher

The approved white overlapping speech bubbles stay at the physical lower right: 64 px phone, 72 px tablet, 78 px desktop. The lightweight same-origin assets need no credentials, AI requests or third-party widget. The panel offers the site's verified customer contact channels. It does not send an automatic message or claim an AI is answering.

Copy these three source files into `customer-chat/`, add that site's `site.json`, and append `node customer-chat/install.cjs <published-directory>` after its existing build and prerender steps. Preserve all existing build guards and tests. This covers separately generated HTML guides as well as application pages. Do not modify generated output by hand. Each build installs exactly one deferred script per customer HTML page.

Required config: `siteId`, `brand`, `locales`, `defaultLocale`, and at least one of `whatsappUrl`, `lineUrl`, `fastworkUrl`, `phoneUrl`, `contactUrl`, or locale-keyed `contactUrls`. `contactLanguageQuery: "lang"` preserves query-based locales on the contact page. Optional `avoidSelectors` adds verified consent or comparison banners. Use only verified brand contact destinations; the owner's automatic-notification number is a separate integration.

The script respects explicit language queries, language paths and document language, including RTL text while retaining the lower-right position. Escape closes and returns focus; outside click dismisses. The button moves above overlapping non-modal consent banners. Native modal dialogs remain above it. A 1.1-second invitation plays at most once per session after 45 seconds of visible page time, outside builders/forms/modals and only when reduced motion is off. Manual interaction suppresses later invitations in the session. Set `nudge: false` to disable the optional invitation.

`kris:customer-chat-open` is a local browser event with siteId/locale/mode. No network consumer is installed. It is an integration seam, not proof of an owner notification. AI answers, knowledge retrieval, protected conversation storage and verified WhatsApp delivery require a separately configured backend.

Rollback: revert only the launcher integration commit and let the existing CI rebuild. No secrets or environment variables are added. Do not restore an entire old deployment over unrelated changes.
