# Aezel Santillana portfolio: project guide

Last updated 2026-10-14. Read this before changing the site. Everything here comes from Aezel's own decisions and feedback in the project thread.

## 1. What this project is

A portfolio site for Aezel Santillana, Senior UI/UX Designer (Manila, GMT+8). It serves three goals at once: landing a new role (in-house, agency, remote abroad), winning freelance clients, and having a professional presence.

- **Stack:** plain static HTML, CSS and JS. No build step. Hosting plan: Netlify (free `.netlify.app` first, custom domain later, none bought yet).
- **Timeline:** about 2 weeks. Design and rebuild were done in days 1 to 3. Next are case studies, then publishing.
- **GitHub:** https://github.com/eyzhel/aezelsantillana (public, branch `main`) holds the site files at the repo root, first pushed 2026-10-12. Push site changes there too.
- **Source of truth:** `/mnt/project-files/portfolio-site/` (served files) and `/mnt/project-files/portfolio-site.zip` (same, zipped).
- **Live preview (private):** https://claude.ai/artifact/EdCRk6p8oDvRu6zkhyzTYN . Republish the same URL after each change. The download button and the contact form do not work inside the preview; test them on Netlify.

## 2. What exists today

Folders in `/mnt/project-files/`:

| Path | What it is |
|---|---|
| `portfolio-site/` | Current site: original styling, updated content, bento grid |
| `portfolio-site.zip` | Zip of the current site |
| `portfolio-site-original.zip` | The files exactly as Aezel first uploaded them |
| `portfolio-site-updated-content/` | Backup: original styling with the first round of content edits |
| `portfolio-site-dark-purple/` | Backup: a dark purple/pink-glow redesign Aezel decided not to use |
| `Portfolio Site.zip` | Aezel's original upload |

Site files: `index.html` (homepage), `project.html` (case study template, driven by `?p=slug`), `projects.js` (all project data and the card/detail renderer), `styles.css`, `Aezel-Santillana-CV.pdf` (the CV download; a copy of `/mnt/project-files/cv/Aezel-Santillana-CV.pdf`, so recopy it after any CV change), `images/`.

Homepage order: hero, Featured work (bento grid plus confidential-work block), About, What I do, Career, Craft/Education, Contact.

Adding a project: add one object at the top of `projects.js` (see the comment block there). It appears on the homepage grid and gets its own detail page automatically.

## 3. Brand and visual rules

Aezel chose to **keep the original design**. Do not redesign it again unless asked.

**Colors** (tokens in `:root` in `styles.css`; reuse them, do not invent new ones):
- Dark panel (hero, contact, grid cards): `#101B21`, raised `#17262E`, line `#2A3F4A`, text `#EAF1F4`, dim text `#8DA5B1`
- Light page: background `#F2F5F6`, surface `#FFFFFF`, text `#121E24`, muted `#566B76`, rule `#D4DFE3`
- Accent: coral-red (`#D92352` on light, `#FF5470` on dark). One accent only. Amber is a rare secondary.

**Type:** Bricolage Grotesque for headings and the name (heavy, tight tracking), Source Serif 4 for body text, JetBrains Mono for small labels, eyebrows, tags and buttons.

**Signature details to keep:**
- The name in the hero is drawn as a selected design layer (corner handles and a live width x height label).
- The faint artboard grid and soft coral glow in the hero.
- Mono uppercase eyebrow labels with wide letter-spacing.
- Rounded pill buttons: one solid coral primary, the others outlined.

**Layout rules from Aezel's feedback:**
- Featured work is the first section after the hero. Show work early.
- Featured work is a **bento grid** of up to 5 cards: narrow, wide, narrow on the first row, two equal cards on the second. Each card shows only **image, project name and tag pills**, and the pills must stay on **one line** (extra pills are hidden automatically). No client line, description or "View project" text on the cards. The detail page keeps the full text.
- Use **real project screenshots, not graphics**. Never use stock photos or other people's work. Until real images arrive the placeholders stay.
- The hero has **at most 3 buttons**: See selected work, Hire me, Download CV. LinkedIn lives in the contact section.
- The top navigation is always visible.
- Remove placeholder or "example content" notices from the page.
- No horizontal scroll at phone width. Check desktop and mobile after layout changes.

**Motion rules (Figma-inspired):**
- Motion should feel like working in Figma: a frame being drag-created, selection handles popping in, a collaborator cursor, smart-animate transitions. Nothing flashy.
- Hero: the name's selection frame draws from its top-left corner while a coral "Aezel" cursor drags it to the bottom-right corner, then the handles pop in with a spring and the size label appears. Desktop only (the cursor is hidden under 700px).
- Cards: they ease into place as they scroll into view, staggered. On hover they lift, get a coral selection outline, and a "View project" cursor chip follows the mouse (mouse devices only).
- Hero background glows: the coral light drifts and breathes (13 to 17s loops), a second soft pink-coral orb moves across the bottom left, and the grid lights up around a slowly moving spot. Keep it ambient and coral only.
- About section: the heading and paragraphs light up word by word as they scroll into reading position (dim at 30% ink, then full ink). Text is always readable; it is off for reduced-motion users. Keep it to short, important statements, not long body copy.
- Career timeline: the pink line fills and each dot turns pink as you scroll past it, with a soft ring on the current one. Without JS or with reduced motion it shows the original static timeline.
- Buttons shrink slightly when pressed. The nav underline slides in from the left.
- Easing: use the existing `--smart` (smooth) and `--spring` (small overshoot) curves. Keep durations around 0.3 to 0.9s.
- Content must stay readable if animation fails, and `prefers-reduced-motion` turns it all off. Never hide content behind an animation.

## 4. Content and tone rules

- Write in **first person**, plain and confident, short sentences. Say what was done and what changed.
- Role title is always written **"UI/UX Designer"** (not UX/UI).
- Hero headline: "Senior UI/UX Designer". Tagline: "Thoughtful design. Seamless experiences. Meaningful impact."
- Hero and tagline text does **not** list industries (banking, aviation and so on). The career timeline may.
- Experience claim is **"over 10 years"**. Do not use other figures.
- Public email is `hey@aezelsantillana.com` (switched from Gmail on 2026-10-12, site and CV). Site URL is `www.aezelsantillana.com`. LinkedIn is the address already on the site (`aezel-santillana-06a93380`).
- Avoid em dashes, filler like "passionate", and stacks of buzzwords. Prefer specific over clever.
- Case studies follow: the brief, what I did, the outcome. Include numbers when Aezel has them. Do not invent results, clients or metrics.
- **Confidentiality:** some of Aezel's work is under confidentiality. The site only says "some of my projects are under confidentiality" and offers access on request. Do not name the employer in that block, and never publish confidential company work. Interviewers get a private link on request.
- Contact form has a topic dropdown (full-time role, freelance project, private case studies, other). "Hire me" does not pre-select a topic; "Request access" pre-selects private case studies.

## 5. Working rules for Claude

- Do exactly what a comment or message asks. Keep other things unchanged.
- Aezel gives feedback as comments on the preview artifact. Each comment thread is answered with a short reply and resolved once the change is made. Leave a thread open when waiting on something from Aezel.
- After every site change: update the files in `portfolio-site/`, rezip `portfolio-site.zip`, and republish the preview to the same URL. Look at desktop and mobile when layout changed.
- Never delete the backup folders unless asked. If Aezel asks to revert, restore from `portfolio-site-original.zip` or a backup folder.
- Do not invent facts about Aezel. Ask for missing details.
- Keep chat replies short and lead with the answer.

## 5b. Case studies published

- **Deductive Lab** (`slug: deductive-lab`, added 2026-10-13): logo design, branding, and the website and LMS dashboard for DeductiveLab, a consulting firm that helps IT departments build standardized Problem Identification processes through AI tools, training and certification. Card image (`cover`, `deductive-lab-cover-laptop.webp`) is a laptop-in-hand photo mockup with the landing page on the screen (source: mockups/deductive-lab-laptop-mockup.png, built from the reference photo Aezel supplied; swap for a licensed photo before going public), detail page has the landing page hero, the full landing page, the course page and the My Courses dashboard. Year and outcome are not filled in yet; ask Aezel for them rather than guessing.
- The homepage grid shows the first 5 projects (`data-limit="5"` on `#projectGrid`); the All work page shows every project. A project can have an optional `cover` image just for its card.
- The All work page has category filter chips: All, Branding, UX Research, UI Design, Mobile App, Web Design, Dashboard (list is `FILTERS` in `projects.js`). A project shows under a chip when one of its tags contains that word, so tag projects with these words. Filtered results tile in an even grid; "All" keeps the bento layout.
- **Featured case study layout** (added 2026-10-14, Deductive Lab only for now): a project with a `study` object in `projects.js` gets a dark full-width page (`renderStudy`) instead of the plain detail page. Parts: an animated hero banner (a tilted browser frame whose full-page screenshot slowly auto-scrolls, a floating dashboard card, a floating logo tile, a drifting green glow, and a small lean toward the pointer), a large "Overview" story with bold keywords, a facts row, "The work" (numbered screenshots), and Next project / Get in touch. Overview copy goes in `study.overview` (an array, `**word**` makes a keyword); `study.hero` names the images. The page uses the client's own palette (navy `#00101A`, green `#00EA8A`) inside the case study only; the rest of the site keeps the coral accent. Motion is off under `prefers-reduced-motion`. Tone for overviews: professional and approachable, in the style of the Court Watches sample Aezel supplied (what the client needed, what we did, how it grew). Only use facts Aezel gave; no invented metrics or years.
- Deductive Lab overview copy is a draft: the sentence about the goal ("clear and approachable") and the closing line are inferred. Year and outcome are still missing.
- Figma file for Deductive Lab: `1Tjcq2sxmYOg6CtN0lgaDo` (page "Hi-Fi Mocks": Landing Page, Course Page, Login, Create Account, Proposed Dashboard, My Courses, Profile, Inbox, Billing, Stacking Cards). Figma image downloads are blocked by the environment's network policy (www.figma.com is denied), so the page uses the PNG exports Aezel uploaded.
- **Brand identity section** (updated 2026-10-14 from Aezel's brand boards): `study.brand` in `projects.js` renders a dark section under the Deductive Lab overview (`renderBrand`). It has the logo with its meaning (Nodes: interconnection, collaboration, networking and flow; Hexagon shape: balance, harmony, precision, innovation), the logo on a dark background with callouts and the lockup, the logo on white and at small sizes, "The colours" board, supporting shades and a type specimen. Official colours from Aezel's board: **Swamp `#00101A`** (sophistication, stability, reliability) and **Spring green `#00EE88`** (innovation, growth, progress). The supporting shades (navy raised `#002136`, green shade `#04C16F`, aqua `#05D6C9`, mint `#29EDA2`) were sampled from the website mocks. Titles and body text on the whole project page use the site's fonts (Bricolage Grotesque, Source Serif 4), per Aezel on 2026-10-14. Montserrat and Roboto Mono appear only as Deductive Lab's own brand elements: the wordmark, the type specimen, the colour swatches and the small labels in this section. Logo files: `images/deductive-lab-logo.webp` (hexagon, transparent background) and `images/deductive-lab-mark.webp` (nodes only, used in the lockup), both cut from the brand frame. The brand board's lockup reads "Deductive Labs" while the website mocks read "Deductive Lab"; the page uses "Deductive Lab". Confirm which is correct.
- **Mock copy:** the lorem ipsum in the Deductive Lab landing page, course page and hero screenshots was replaced with real wording (matched font, size and position) on 2026-10-14. Copy follows the live site www.deductivelab.com (standardized Problem Identification, Skill Gap Analysis, free diagnostic, info@deductivelab.com) and the context Aezel gave. The testimonials, success stories and FAQ answers are sample copy written to look real; the people's names (Alex Morri, Jane Doe, Mike Wood) are still the mock's placeholders. Do not present them as real client quotes. The untouched images are saved in `/mnt/project-files/mock-images-with-lorem/`.
- Screenshots are saved as `.webp` in `images/` to keep the site fast.

## 6. Open items

- CV: `/mnt/project-files/cv/Aezel-Santillana-CV.pdf` (source `cv/cv-source.html`, rendered with Playwright, one A4 page). On the CV Aezel chose the site URL `aezelsantillana.com` and email `hey@aezelsantillana.com`, and the line "Open to remote roles" (no "and freelance"). The site now uses hey@aezelsantillana.com too. Since 2026-10-12 this CV is the site's Download CV file (it replaced the LinkedIn `Profile.pdf`). Tools on the CV read "Adobe CC Apps" instead of Adobe Photoshop.
- Real project screenshots for 5 grid cards, with project names and 2 or 3 tags each.
- Case study text for each project.
- GrowthOps is still named in About and Career. Aezel's call whether to keep it.
- Optional private page for confidential company work (unlisted, not indexed). A password on a plain static page is not real security; for strict NDA material use host-level protection or a password-protected PDF/Figma link per interview.
- Publish on Netlify, then test the contact form, the CV download and mobile layout there. Domain later.

- **Design Process section** (Deductive Lab, `study.process` in projects.js, rendered by `renderProcess`): sits below Brand identity and above The work. Five numbered cards (Research & Discovery, Logo & Brand Identity, Site Structure, Web & LMS Design, Final Screens) with solid Spring green Montserrat numerals (no speckle); a card turns Spring green on hover. The step descriptions are draft copy written from the project brief, not Aezel's own words, so confirm them.
- The study facts row now reads Client, Role, Tools (the `tools` field on the project, "Figma, Adobe CC Apps" for Deductive Lab, matching the CV); it replaced Scope, which repeated the Role. Confirm the tools list with Aezel.
- Project pages always open at the top (hero and title): projects.js turns off scroll restoration and scrolls to 0 after the detail renders and again on load.
- "The work" supports video items (`{ video: true, src: "" }` in `gallery`) but Aezel removed the Deductive Lab video placeholder, so none is shown now. To use a real video, put the mp4 in images/ and set `src` (and optionally `poster`); it then renders as a playable `<video>`. Video items with no `src` are hidden on non-case-study pages.
- Deductive Lab tags are now Logo Design, LMS Dashboard, Web Design (the Branding tag was replaced at Aezel's request). It therefore no longer shows under the Branding filter on All work; Role still says Branding.
- My Courses dashboard in "The work" is an annotated screenshot (`notes: { kicker, items:[{x,y,title,text}] }` on the gallery item, rendered by `renderAnno`): green dots on the image joined by lines to four numbered notes on wide screens, stacked numbered list on mobile. The four "problems solved" notes (Too many places to look, No picture of progress, Hard to find a course, Unclear next step) are draft copy written from the screen design; confirm or replace with the real problems.
- The video thumbnail on the course page mock (deductive-lab-course.webp) now shows the real lesson still from the Figma course player frame ("Dashboard from LearnWorlds", node 215:571) with its own play button.

- **Figma connector works** in project threads (tools `mcp__Figma__*`, file key `1Tjcq2sxmYOg6CtN0lgaDo`). Use `get_screenshot` with `enableBase64Response: true`: the PNG is saved as a file under `/root/.claude/projects/.../tool-results/mcp-Figma-blob-*.png`; `curl` of the returned www.figma.com URL is still blocked by the network policy. Frames on page "Hi-Fi Mocks" (id 0:1): Landing Page 5:79756 and 2004:716, Course Page 114:86, Course Page > Logged-in > Unenrolled 265:1175, Login 264:656, Create Account 279:737, Proposed Dashboard 165:1267 (course progress and modules), My Courses 234:486, Profile 291:1011, Inbox 299:1294, Billing 302:1543, My Courses > Buy Course 284:785, Stacking Cards 150:280, Dashboard from LearnWorlds 215:571 (the lesson player). Not on the site yet except Landing, Course and My Courses.
- Gallery of "The work" now follows the learner journey, all pulled from Figma at full size: Landing page, Course page, Buy course (284:785), My Courses dashboard (annotated), Course progress (165:1267, annotated) and Lesson player (215:571). The note copy on My Courses and Course progress is draft rationale written from the screens, not Aezel's own words; confirm or replace. Not yet on the site: Login, Create Account, Profile, Inbox, Billing, Stacking Cards.
- Annotated screenshots can be flipped (`flip: true` in `notes`): image on the right, notes on the left, dots on the left edge of the elements. Course progress uses it so the two annotated screens alternate sides.
- **Dibsd** (`slug: dibsd`, added 2026-10-14, second card, replaced the first placeholder): an event tickets marketplace app (ticket resale; buyers and sellers transact with confidence). **Hero (changed v52):** the project page hero is a teal brand panel built in code (`renderHero` in projects.js, `.dh-*` in styles.css), laid out after a reference Aezel supplied: meta row (Role, Service, Category), giant white Montserrat 800 wordmark, centred phone (`images/dibsd-phone.webp`, the Moulin Rouge screen cut out of the supplied mock with a transparent background) overlapping it, faded numbered process columns (Discover to Test, step text is my wording), and brand accents (yellow circle, blue triangle, green dots, orange stripes). Set by the project's `hero` object; projects without it keep the plain image hero. `images/dibsd-card.webp` was removed. The Figma app file (key `a4V9qe5FrZu4kNzUT6Gb6Q`, node 514:2549) could not be read because the Starter-plan MCP limit was still hit, so no new Figma screens are used yet. Card image `images/dibsd-cover.webp` is a crop (x 1050 to 3450 of the 3839x1856 original, so the left phone is fully in frame) of the mock Aezel supplied, detail hero `images/dibsd-card.webp` is the full banner. Context came from the Figma deck (file key `tamu7ypJKA18sdB6rCHUxk`, "Dibsd Demo"): problem (scams, invalid tickets, sky-rocketing prices), goal (every ticket results in a valid entry), process (Discover, Define, Ideate, Design, Test). Only the cover, goal, process and problem slides were read before the Figma MCP call limit on the Starter plan was hit; slides 5 to 22 and the app frames (Search, Ticket Details, Messages) are unread. Role "UX/UI Design" and tags (Mobile App, UI Design, Marketplace) are my reading of the deck, year and outcome are not filled in. Confirm with Aezel.
- Craft and Education now ease in one item at a time (skills tags, then certifications, then education rows) via `data-stagger` on the section and the `.st` class (index.html script + styles.css). Off for reduced motion; nothing is hidden if the script fails. Aezel asked for this on Craft (certifications one at a time) and on one more spot with an unanchored comment, which I read as Education; confirm.

- **Contact topic pre-select (v53):** buttons with `data-topic` (the "Request access" pill in Projects) set the contact form's "I'm reaching out about" dropdown on click, fire `change`, and pulse the field (`.field.is-set select`). It already worked in a plain browser test; the pulse was added to make it visible. Thread fb9198aa left open until Aezel confirms.

- **Case-study eyebrow on generic layout (v54):** a project can set `eyebrow` (Dibsd: "Case study"); `renderDetail` shows it as "Case study · Client · Year" like the dark Deductive Lab layout.

- **Dibsd now uses the Deductive Lab case-study structure (v55), and this is the standard for every project page.** Structure: dark hero (eyebrow "Case study · Client", title, tags, hero visual), Overview (lead plus paragraphs, closing line, facts Client / Role / Tools), Brand, Design Process (5 numbered cards), The work (screens, annotated with numbered notes, alternating left and right), then Next project and Get in touch. How it is wired in `projects.js`: give a project a `study` object (`eyebrow`, `overview`, `closing`, `process`, `brand`) and a `gallery`. Deductive Lab uses the animated device stage; a project with a `hero` object (Dibsd) gets the brand panel instead (`renderHero`), and `renderStudy` adds `cs--<slug>` and `pd--<slug>` classes so a project can carry its own palette (Dibsd: `.cs--dibsd` block at the end of styles.css, teal #3AC8B8 on #061B1C, yellow annotation dots). `renderBrand` now skips the meaning and callout cards when `meanings` is absent, and the type block when `type` is absent; extra fields: `logoLight`, `sizeImg`, `logoAlt`, `supportingLabel`.
  - Dibsd images (all cut from the supplied mock, 3839x1856): `dibsd-phone.webp` (hero phone), `dibsd-home.webp`, `dibsd-ticket.webp`, `dibsd-account.webp` (each phone on a teal panel for the annotated screens), `dibsd-logo.webp` (white wordmark, for dark), `dibsd-logo-light.webp` (black wordmark, for white), `dibsd-mark.webp`.
  - Draft content Aezel has not confirmed: annotation notes (written from what the screens show), Design Process step text (Test is generic), the Brand section (the app works within Dibsd's brand, I did not claim Aezel designed it), colours sampled from the mock (teal #3AC8B8, black, accents #FCB800, #00ACE0, #8DC440, #FEAA2E), Tools "Figma", no year. The Figma app file (key `a4V9qe5FrZu4kNzUT6Gb6Q`) is still unread because of the Starter-plan MCP limit, so the screens are cut from the mock, not from Figma.
  - Not carried over to Dibsd: the typography block (typeface not confirmed), the logo meaning and callout cards. The Deductive Lab-only placeholders (project-two, three, four, five) still use the plain layout until real content exists.

- **Dibsd hero overlays (v56):** the faded numbered process columns in the hero panel were replaced with six faded teal event tiles (`hero.events`: image, date, title; images `images/dibsd-ev-*.webp`, duotone teal cuts of event photos from the mock) like the reference's faded schedule. Hidden on phones. Swap in originals from the Dibsd Figma app file (`a4V9qe5FrZu4kNzUT6Gb6Q`, node 514:2549) once the MCP limit resets.

- **Name animation replay (v57):** the hero name's selection animation (drag frame, corner handles, size chip) replays every 60 seconds via a `setInterval` in index.html that toggles `.layer.is-reset` (CSS at the end of styles.css). Skipped when the tab is hidden, the name is off screen, or reduced motion is on. Change the interval at `}, 60000);`.

- **Nav "Work" link (v58):** on work.html and project.html the top-menu "Work" link goes to `work.html` (All projects page; marked `aria-current` on work.html). On the homepage it still scrolls to `#projects`. I read "app projects page" as the All projects page, so confirm with Aezel.

- **Dibsd tags (v59):** Mobile App, UX Research, UI Design, Marketplace (UX Research added by Aezel's request; it also puts Dibsd under the UX Research filter). The homepage card hides tags that do not fit one line.

- **Home hero intro (v62, 2026-10-21):** the "Senior UI/UX Designer" line and the tagline were replaced by Aezel's own wording (`.hero__hello`): "Manila-based senior UI/UX designer who (v64: "Hi, I'm Aezel," removed at Aezel's request) — full line: "Manila-based senior UI/UX designer who blends creativity, technology, and a little vibe-coding into experiences that feel genuinely human." Earlier drafts (v60, v61) were mine. Not pushed to GitHub yet (PR #1 holds the earlier work).

- **Hire me in the header menu (v63, 2026-10-21):** "Hire me" is now a solid red pill at the end of the top menu on every page (`.nav__cta`, links to the contact section) and was removed from the hero buttons (hero now: See selected work, Download CV). The Contact text link stays next to it. Not pushed to GitHub yet.

- **Nav CTA + hero meta (v65, 2026-10-21):** the red nav pill now reads "Contact me" (was "Hire me") and the plain "Contact" text link was removed from the nav on index/work/project, so one clear path to the contact form. The hero meta line dropped "Philippines (GMT+8) ·" and now reads "Open to remote roles and freelance". Not pushed to GitHub yet (PR #1 holds the earlier work).

- **About rewrite (v66, 2026-10-21):** the About body is now one lead paragraph: "Ten-plus years turning complex problems into simple designs people understand. Brand strategy, interaction design and visual design, built to scale and to balance what users need with what the business wants. From concept to implementation. From paper to people's hands." (heading unchanged). The GrowthOps, AI-tools and open-to-work paragraphs were removed from About; that info still lives in Career and the hero meta line. "Ten-plus" kept from the original "over 10 years". Not pushed to GitHub yet.

- **About heading + hero highlight (v67, 2026-10-21):** the About heading is now "Ten-plus years turning complex problems into simple designs people understand." and the lead paragraph starts at "Brand strategy, interaction design and visual design, built to scale…" (sentence moved out of the paragraph). In the hero intro the pink highlight moved from "senior UI/UX designer" to "creativity, technology, and a little vibe-coding" (`.hero__role b`, #FF7A90). Not pushed to GitHub yet.

- **LinkedIn icon (v68, 2026-10-21):** in the Contact section the "LinkedIn ↗" text pill became a round LinkedIn "in" icon button (`.pill.pill--icon`, inline SVG, 44px, aria-label "LinkedIn (opens in a new tab)", same link and hover as other pills). Not pushed to GitHub yet.

- **Behance + Upwork icons (v69, 2026-10-21):** the Contact section now has a row of three round icons (`.contact__social`): LinkedIn (real profile link), Behance ("Bē" lettermark) and Upwork ("Up" lettermark). **UNCONFIRMED:** the Behance and Upwork links currently point to the site roots (behance.net, upwork.com) because I don't have Aezel's profile URLs; the two icons are simple lettermarks, not the official logo artwork. Need: profile URLs (and optionally official logo SVGs). Not pushed to GitHub yet.

- **Hero phrase colour (v70, 2026-10-22):** in the hero intro "and a little" is white (`.hero__plain`, same colour as the rest of the sentence, still bold); "creativity, technology," and "vibe-coding" stay pink. Not pushed to GitHub yet.

- **Career roles reveal (v71, 2026-10-22):** the five Career roles now ease in one at a time as each scrolls into view (`.timeline > li.role` gets `.st-own`; a per-role IntersectionObserver adds `.is-seen`; roles that appear together stagger by 110ms; reduced-motion shows everything). Done because two body-pinned comments asked for "the same as certifications" without naming a spot; Craft tags, Certifications and Education already had the one-at-a-time reveal (v50). Headless Chromium can't play transitions, so I verified the class logic with a stubbed observer, not the visual timing. Not pushed to GitHub yet.

- **Behance + Upwork links (v72, 2026-10-22):** Aezel supplied the profile URLs, so the Contact icons now open them in a new tab: Behance https://www.behance.net/aezelcabrales1 and Upwork https://www.upwork.com/freelancers/~0197da35db298e4c20?mp_source=share. This resolves the "UNCONFIRMED links" note under v69. The icons are still simple "Bē"/"Up" lettermarks, not official logos. Not pushed to GitHub yet.

- **Smaller project-page headings (v73, 2026-10-22):** heading sizes on project detail pages were reduced by roughly 25-30% (desktop max / mobile min): hero title `.cs-title` 5.6→4.2rem / 2.6→2.1rem; `.cs-overview__h` 5→3.6rem / 2.6→2rem; `.cs-work__h` 3.4→2.6rem; `.bd-title` 3.8→2.8rem; `.bd-colours__h` 3.8→2.8rem; `.dp-title` 4.4→3.2rem; generic `.pd__title` 3.4→2.6rem. Body text, lead paragraph and the Dibsd hero wordmark were not changed. Verified computed sizes at 1200px and 390px. Not pushed to GitHub yet.

- **Wider Overview body (v74, 2026-10-22):** on project pages the Overview body paragraphs (`.cs-text`) were 62ch (about 800px); they now match the lead paragraph at 980px max width (`.cs-overview__in .cs-text`). Other `.cs-text` blocks elsewhere keep 62ch. Not pushed to GitHub yet.

- **Tighter Overview intro line height (v75, 2026-10-22):** the large first Overview paragraph on project pages (`.cs-lead`) went from line-height 1.38 to 1.28. The smaller body paragraphs (`.cs-text`, 1.7) are unchanged. Not pushed to GitHub yet.

- **"The Problem" section (v76, 2026-10-22):** case-study pages (those with a `study` object) can now carry `study.problem` = `{eyebrow, title, lead, points:[{title,text}]}`; `renderProblem` in `projects.js` draws it between Overview and Brand (`.pb*` styles; lead supports **bold** keywords; up to three numbered cards, one column on mobile). Added to Deductive Lab and Dibsd. **UNCONFIRMED draft copy:** Dibsd's points (Scams, Invalid tickets, Sky-rocketing prices) come from the existing overview text, but the one-line explanations are mine. Deductive Lab's "A technical subject" and "Two audiences" come from the existing overview; "No shared method" and the lead sentence are my inference from the firm's standardized-troubleshooting pitch. Aezel should confirm or replace the wording. Not pushed to GitHub yet.

- **Deductive Lab overview trimmed (v77, 2026-10-22):** removed the third Overview paragraph ("It started with the logo and brand: a bright green on deep navy, with a pixel-built hexagon mark. From there I designed the landing page, the course page and the My Courses dashboard…") at Aezel's request. Overview is now two paragraphs plus the closing line. The same description of the work still appears in the generic "What I designed" text in `sections`. Not pushed to GitHub yet.

- **Project plan in Notion (2026-10-23):** "My Portfolio Plan", a Notion database laid out like the "Salo Salo Events Plan" (columns Step, Task, Status, Start, End, Area, Stage, Notes; views All steps, Timeline, Board). 31 steps in 7 stages: Build the site, Finish the case studies, Add real proof, Launch prep, Launch day, Get seen, After launch. https://app.notion.com/p/8b19c8fb75c14fec82cbe4a9480a1692 . Stage 1 steps are marked Done or In progress from this project's history; the dates after today are proposals, not commitments. Per Aezel the whole plan should be done around the end of 2026: go live is proposed for Fri 18 Dec 2026 and every step ends by 31 Dec 2026 (the weekly job and freelance habits are meant to continue into 2027).
