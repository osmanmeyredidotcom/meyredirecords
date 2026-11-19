# Meyredi Records — Stage 17 review

Buildless HTML/CSS/JavaScript. Open index.html or serve this directory. Local review: http://127.0.0.1:4173/ while server is running.

Implemented: navigation; approved landscape hero with no blur; featured release with supplied Spotify/Apple Music links; Osman artist feature; three-service homepage introduction. Hero actions scroll to the release/services sections. Detail and index destinations are explicitly labelled review placeholders until their scheduled phases.

Motion: verified ECM navigation/underline parameters preserved. No invented cover, portrait or text entrance effects. A proposed scroll-linked off-white/stone transition is now implemented in section-colors.js. Exact Gondwana fidelity remains unverified; its current live site did not expose the historical effect. Reduced motion uses static section colours. Full reference and content provenance records are in ../MEYREDI_RECORDS_BUILD_GUIDE.md.

Stage 06 adds the homepage founders introduction: equal profiles for Jolene and Osman, source-based draft story copy, and a reserved joint photograph space explicitly chosen by the user. Review directly at http://127.0.0.1:4173/#founders. The About destination is still a later-stage placeholder. No text blur or new entrance animation is applied to this section.

No CMS, forms or backend yet.

Identity revision: the current user direction is a balanced combination of approved reference features, with no resemblance to one dominant website. identity.css provides the new serif/sans typography, red hero statement band, sleeve-focused release presentation, portrait panel and compact service panels. Font selection is proposed; the brief leaves final approval to Varsha. See the current-direction note at the top of the build guide.

Latest hero review: full-width studio photograph with readable serif heading, one red rule, compact outline action and service link. The previous separate red headline band is superseded. Jolene's supplied client-review preferences apply site-wide, with Meyredi-specific requirements taking precedence over older Osman-site details. See the living preference record at the top of the build guide.

Stage 07 adds the June’s Night homepage event feature at #featured-event. Original diagonal action arrows restored by user request. Full event and index pages remain scheduled review placeholders. Stage 08 is now implemented below.

Stage 08 implements the Artists index at #/artists: one genuine portrait, full artist name, concise source-based draft introduction, and profile link. Brownswood’s simple listing preference informs the scope; approved Meyredi typography and palette provide the visual identity. Profile remains a Stage 09 review placeholder. Responsive layouts visually reviewed and checked from 320–1920px. Stop before Stage 09 for user review.

Stage 09: Osman profile at #/artists/osman-meyredi. Short source-verbatim biography, label relationship, genuine portrait, selected music/listening links, artist website and event/enquiry routes. No press kit supplied. Release/event/contact destinations remain scheduled placeholders. Review Stage 09 before building Stage 10. Source and validation record at top of build guide.

Stage 10: Releases index at #/releases with genuine square sleeve, release metadata, linked artist and supplied listening destinations. Shared record in releases.js now drives homepage, artist profile and catalogue. Release detail remains Stage 11 placeholder with Back to releases. Checked desktop/mobile and 320–1920px widths. Stop before Stage 11 for review.

Stage 11: Dance With This Mess detail at #/releases/dance-with-this-mess. Shared release record now includes source-backed label, catalogue number, short recording context and all supplied contributor credits. Actual return paths to catalogue and artist; named external listening links. Visually checked desktop/mobile and widths 320–1920px, no script errors. Stop for review before Stage 12 (Work with us).

Stage 12: Work with us at #/work-with-us, with /label, /production and /management section links. Source-based proposed copy explains separate services and arrangements. Enquiry topics preserved in Contact review routes pending Stage 16 form implementation; nothing is sent. Desktop/mobile and route checks complete. Stop before Stage 13 (Events index) for review.

Stage 13: Events index at #/events. Major June’s Night feature and event-specific source copy. events.js shares date and announcements with homepage and artist profile. Explore event currently opens Stage 14 placeholder with Back to events. No tickets or registration enabled. Responsive and route checks complete. Stop before Stage 14 for review.

Stage 14: June’s Night detail at #/events/junes-night. Shared event data, genuine portrait and label event narrative. Early-bird link goes to the verified live Osman event page (GET 200, form present; no submission tested). Responsive/route checks complete. Stop before Stage 15 (About) for review.

Stage 15: About at #/about. Equal founder profiles, source heading/roles and proposed source-based business narrative. Retains authorised joint-photo reservation pending genuine image. Homepage and onward routes checked; desktop/mobile visual and overflow checks complete. Stop before Stage 16 (Contact).

Stage 16: Contact preview at #/contact. Labelled fields, six topics, validation and same-session text retention. Service/booking deep links preselect topics. Review enquiry performs local validation only, explicitly sends nothing. Mailbox/provider verification, delivery endpoint, real server states and end-to-end delivery testing remain required before production. Privacy route is Stage 18 placeholder. Stop before Stage 17 (Footer).

Stage 17: shared footer across all routes with supplied wordmark, general mail alias, demo mail alias, navigation and Privacy link. Addresses are requested client aliases; mailbox delivery unverified. Privacy remains Stage 18 placeholder. Responsive and mobile-modal accessibility checks complete. Stop before Stage 18 for review.

Stage 17 layout correction: header plus responsive hero fill the opening viewport; subsequent sections start below the fold. Actual header height is tracked with ResizeObserver, and the photograph covers the hero without distortion. Footer now spans the full width with aligned content and a single red top border. Removed the main-element focus outline that caused duplicate red lines, retaining control focus indicators. Verified six desktop/mobile/landscape viewport sizes (320–1920px wide), no horizontal overflow, and the Explore releases scroll destination. Build guide records the current layout requirement. Stage 18 remains pending.

Stage 18: Privacy Policy draft at #/privacy, preserving all eleven sections of the supplied policy, including the purpose/legal-basis table. Readable 780px document, responsive sidebar, explicit draft status and completion annotations. Corrected section 6 numbering and provisionally unified the privacy address to info@meyredirecords.com (unverified, disclosed). No provider, retention-log period or transfer detail invented. The original source remains intact in the guide. Confirm business details, mailbox, providers/transfers, retention, demo practices and production data flows before publishing. All 18 planned page/section stages now have review implementations; contact delivery and real joint founder photo remain outstanding. Checked four viewport sizes, all eleven sections, Contact/footer routing and enquiry text preservation.

Reference motion update (16 November 2026): identity.css adds the live-source-verified Brownswood portrait scale (1 → 1.05, 300ms ease-in-out) to homepage/roster artist cards, with keyboard focus and reduced-motion/static touch handling. Service-card headings now use ECM's 200ms directional underline sweep. Existing layout, hero, footer and scroll-colour treatment remain unchanged. Desktop/mobile checks and reference adaptations are recorded at the top of the build guide. Local only; nothing deployed.
