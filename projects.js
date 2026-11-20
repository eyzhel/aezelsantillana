/* =========================================================================
   YOUR PROJECTS — this is the only file you need to edit to add work.
   =========================================================================

   Each project below fills in BOTH the card on the homepage AND its own
   detail page. Add a project here and it appears in both places.

   To add a project:
     1. Drop your screenshot into the images/ folder.
     2. Copy one whole { ... } block below, paste it at the TOP of the list
        (newest first), and fill in your own details.
     3. Give it a unique "slug" — lowercase, hyphens, no spaces. That's what
        shows up in the address bar: project.html?p=your-slug

   Fields:
     slug      Unique id for the URL. Required.
     title     Project name.
     client    Who it was for. Use "Personal project" if it was your own.
     year      Any string — "2025", "2024–25", "Ongoing".
     role      What you actually did on it.
     summary   1–2 sentences. This is what shows on the card.
     image     Path to the screenshot, e.g. "images/my-project.png"
     cover     OPTIONAL. A different image for the card on the homepage grid.
     banner    OPTIONAL. A wide image for the big featured carousel on the homepage (falls back to cover, then image).
     still     OPTIONAL. A static 16:9 frame of the scene, used on the work page cards.
     scene     OPTIONAL. An animated scene for the carousel: { type: "wall" | "phones" | "flow", cols, bg, tiles: [image paths] }. "wall"/"phones": camera flies in to the centre tile. "flow": a row of screens, camera pans across them one by one.
     video     OPTIONAL. A short muted looping clip (e.g. "images/my-project.mp4") for the carousel; "banner" is its poster.
     alt       Describe the screenshot for screen readers and when images fail.
     tags      Short list of skills or deliverables.
     link      OPTIONAL. A live site URL — adds a "Visit live site" button
               on the detail page. Delete the line if there isn't one.
     case      The project page body: headline, scope, hero, then overview,
               challenge, approach and outcome, each { text: [paragraphs],
               media: [images] }. Every project page uses these four.
     sections  Older detail page body, used only to fill a missing case. Each { heading, body } becomes one
               block. Add or remove as many as you like.
     gallery   OPTIONAL. More images on the detail page. An item { video: true, src: "images/x.mp4", poster: "..." }
               plays a video; with src "" it shows a video placeholder.
               An item with notes: { kicker, flip (image on the right), items: [{ x, y (% of the image), title, text }] } becomes an annotated screenshot.
               Delete the line if you only have the one screenshot.
   ========================================================================= */

window.PROJECTS = [

  {
    slug: "deductive-lab",
    title: "Deductive Lab",
    client: "DeductiveLab",
    card: "images/deductive-lab-laptop-card.webp",
    year: "2024 - 2025",
    role: "UI/UX Designer, Brand Designer",
    tools: "Figma, Adobe CC Apps",
    summary: "Logo, brand identity and the website and learning dashboard for a consulting firm that trains IT teams in standardized problem identification.",
    image: "images/deductive-lab-hero.webp",
    cover: "images/deductive-lab-card.webp",
    banner: "images/deductive-lab-banner.webp",
    still: "images/deductive-lab-still.webp",
    scene: {
      type: "wall", cols: 3, bg: "radial-gradient(80% 80% at 30% 20%, #4DFFB0, #19E88F 55%, #0BC878)",
      /* centre tile (5th) is the screen the camera flies in to */
      tiles: ["images/scene/dl-3.webp", "images/scene/dl-6.webp", "images/scene/dl-2.webp",
              "images/scene/dl-8.webp", "images/scene/dl-1.webp", "images/scene/dl-9.webp",
              "images/scene/dl-5.webp", "images/scene/dl-7.webp", "images/scene/dl-4.webp"]
    },
    alt: "Deductive Lab landing page: the headline 'Build High Performing Teams with Standardized Troubleshooting Training and AI-Driven Tools' above an illustration of two green laptops.",
    tags: ["Logo Design", "LMS Dashboard", "Web Design"],
    /* Project page body: always Overview, Challenge, Approach, Outcome.
       Each section has text (paragraphs) and optional media shown after it:
       one image = full width, two = side by side, three = a row of three. */
    case: {
      headline: "Brand and website refresh for a consulting firm focused on IT troubleshooting training",
      scope: "Logo, Branding, Web, LMS",
      hero: { src: "images/deductive-lab-laptop.webp", alt: "The Deductive Lab landing page on a dark laptop, with the headline Build High Performing Teams with Standardized Troubleshooting Training and AI-Driven Tools." },
      overview: {
        text: [
          "Deductive Lab is a consulting firm that trains IT teams in standardized troubleshooting. It offers courses, AI-driven tools and team certification through its own learning platform.",
          "The website already existed, but it felt too generic and lacked a distinctive visual element that would give the brand more personality and make it easier to recognize.",
          "My task was to improve the website visually and conceptually. I focused on creating a characteristic brand element that could give Deductive Lab its own personality. I also worked on improving the LMS structure and overall usability, making it easier for users to navigate, access learning materials, and move through the platform."
        ],
        /* before and after slider: set before.src and after.src to the two images
           (same size works best). While a src is empty, a labelled placeholder shows. */
        media: [{
          before: { src: "images/deductive-lab-before.webp", alt: "The old Deductive Lab homepage: a white D logo and the line The Science of Logic in IT Troubleshooting over a photo of a city skyline." },
          after: { src: "images/deductive-lab-after.webp", alt: "The redesigned Deductive Lab homepage: a green hexagon logo, the headline Build High Performing Teams with Standardized Troubleshooting Training and AI-Driven Tools, and an illustration of green laptops on dark navy." },
          ratio: "3394 / 1610"
        }]
      },
      challenge: {
        text: [
          "Deductive Lab already had strong content and a trusted, founder-led brand. What it lacked was a learning experience that felt connected.",
          "Learners could reach many parts of the product, but there was no clear path tying them together. The platform was functioning more like a content library than a guided learning experience."
        ],
        /* rows: the animated logo (plays while on screen), then logo construction and colour palette side by side */
        media: [
          [{ video: { src: "images/deductive-lab-logo-animation.mp4", poster: "images/deductive-lab-logo-animation-poster.webp", alt: "Animated Deductive Lab logo: white pixels assemble into the nodes mark, the green hexagon pops in behind, and the wordmark Deductive Lab rises letter by letter." }, ratio: "16 / 9" }],
          [
            { src: "images/deductive-lab-logo-construction.webp", alt: "Deductive Lab logo construction: the hexagon and nodes mark on a fine grid with guide lines, 30-degree diagonals and dimension markers." },
            { src: "images/deductive-lab-colour-palette.webp", alt: "Deductive Lab colour palette: Swamp #00101A and Spring green #00EE88, with supporting shades Navy raised #002136, Green shade #04C16F, Aqua #05D6C9 and Mint #29EDA2." }
          ]
        ]
      },
      approach: {
        text: [
          "I approached the redesign as one guided path, from the first visit to the last lesson. It started with conversations with the founder and interviews with IT professionals, to better understand how they use courses.",
          "Before enrolling, learners needed to see where a course would take them, so I designed a curriculum roadmap on the course page that lays it out module by module. After enrolling, they needed one place to pick up where they left off, so I designed a dashboard that shows their courses, hours and progress at a glance, with a single clear button to continue. Inside a course, lessons are grouped into modules with a progress bar, so a learner always knows what's done and what comes next.",
          "To give the brand its own personality, I created the hexagon mark and carried its green and navy through every screen, so the website and the platform feel like one product."
        ],
        /* rows: the big image first, then two side by side */
        media: [
          [{ src: "images/deductive-lab-lesson.webp", alt: "Deductive Lab lesson player: course path on the left with a progress bar and lesson list, and the lesson video on the right." }],
          [
            { src: "images/deductive-lab-my-courses.webp", alt: "Deductive Lab My Courses dashboard: learner stats for courses, hours, posts, certificates and messages, a course search and four course cards with progress bars." },
            { src: "images/deductive-lab-progress.webp", alt: "Deductive Lab course progress screen: a progress bar, collapsible modules marked completed, and lessons tagged Video, PDF and Challenge." }
          ]
        ]
      },
      outcome: {
        text: [
          "The result is a more distinctive website and a guided learning platform that keep Deductive Lab's strong content and founder-led trust, but add a recognizable brand character and a clear path through every course. The new hexagon mark helps Deductive Lab feel more modern, memorable, and recognizable within the IT training space.",
          "The project helped Deductive Lab shift from a content-heavy platform into a more guided AI learning experience."
        ],
        /* the self-scrolling course page */
        media: [
          [{ scroll: { src: "images/deductive-lab-course-page.webp", alt: "Deductive Lab course page, scrolling from the hero and course stats through the curriculum roadmap, success stories, pricing plans and the coach section." }, ratio: "1366 / 800" }]
        ]
      }
    },
    sections: [
      {
        heading: "The brief",
        body: "DeductiveLab is a consulting firm that helps IT departments build standardized Problem Identification processes. It implements them through customized AI tools, training programs and team certification. The project covered two things: the brand, and the website and dashboard of its learning management system (LMS)."
      },
      {
        heading: "What I designed",
        body: "I designed the Deductive Lab logo and brand, a bright green on deep navy that carries through every screen. For the website I designed the landing page, which covers the course pitch, curriculum, mentor, pricing, FAQs and contact form. I also designed the course page and the My Courses dashboard, where each learner sees their courses, hours, progress and certificates."
      }
    ],
    study: {
      eyebrow: "Case study",
      hero: {
        scroll: "images/deductive-lab-landing.webp",
        scrollAlt: "The Deductive Lab landing page scrolling from the hero to the contact form.",
        float: "images/deductive-lab-my-courses.webp",
        chip: "images/deductive-lab-logo.webp"
      },
      /* **double asterisks** mark the keywords that light up in the overview */
      overview: [
        "**Deductive Lab** helps IT departments build **standardized** Problem Identification processes, and puts them to work through customized **AI tools**, training programs and team **certification**.",
        "I worked with Deductive Lab on the brand, and on the website and learning platform that carry it. The goal was to make a technical subject feel clear and approachable, for the IT managers who buy the training and the learners who take it."
      ],
      closing: "One brand, carried from the first impression to the learner's dashboard.",
      problem: {
        eyebrow: "Before the design",
        title: "The Problem",
        lead: "IT teams each troubleshoot in their own way, so finding the real cause of an issue is slow and uneven. Deductive Lab teaches one **standardized** method, and it had to be taught clearly.",
        points: [
          { title: "No shared method", text: "Each person on an IT team has their own way of tracing a problem, so results change from one person to the next." },
          { title: "A technical subject", text: "Troubleshooting training can feel dense. The brand and the platform had to make it feel clear and approachable." },
          { title: "Two audiences", text: "IT managers buy the training and learners take it, so every screen has to work for both." }
        ]
      },
      process: {
        eyebrow: "How I worked",
        title: "Design Process",
        steps: [
          { title: "Research & Discovery", text: "How IT teams handle tickets today and where the real problem gets missed." },
          { title: "Logo & Brand Identity", text: "A hexagon of nodes in Swamp and Spring green, a mark for precision and connected thinking." },
          { title: "Site Structure", text: "Landing page, courses, pricing, FAQs and the free diagnostic, so a busy IT leader reaches the offer in a few clicks." },
          { title: "Web & LMS Design", text: "The landing page, a course page and the My Courses dashboard, built from one set of components." },
          { title: "Final Screens", text: "High-fidelity screens in the brand's type and colour, ready to hand over for build." }
        ]
      },
      brand: {
        eyebrow: "Brand identity",
        title: "A hexagon of nodes in",
        accent: "Swamp and Spring green.",
        text: "The mark is a hexagon holding a cluster of nodes. Two colours carry the brand, Swamp and Spring green. Deductive Lab's own type is Montserrat for headings and buttons, with Roboto Mono for small labels.",
        logo: "images/deductive-lab-logo.webp",
        mark: "images/deductive-lab-mark.webp",
        wordmark: "Deductive Lab",
        meanings: [
          { name: "Nodes", text: "Conveys the idea of interconnection, collaboration, networking, and flow between individual elements to create a cohesive and dynamic system." },
          { name: "Hexagon shape", text: "Evokes a sense of balance, harmony, precision, and innovation." }
        ],
        colors: [
          { name: "Swamp", hex: "#00101A", text: "Brings a sense of sophistication, stability and reliability." },
          { name: "Spring green", hex: "#00EE88", text: "Symbolizes innovation, growth, progress." }
        ],
        supporting: [
          { name: "Navy raised", hex: "#002136", role: "Cards, bands", dark: true },
          { name: "Green shade", hex: "#04C16F", role: "Logo shadow" },
          { name: "Aqua", hex: "#05D6C9", role: "Gradient start" },
          { name: "Mint", hex: "#29EDA2", role: "Accents, titles" }
        ],
        type: {
          display: { name: "Montserrat", role: "Headings, buttons, body", weights: [["Bold 700", "Headings"], ["SemiBold 600", "Card titles"], ["Regular 400", "Body text"]] },
          mono: { name: "Roboto Mono", role: "Labels", weights: [["500", "Eyebrows, small labels"]] }
        }
      }
    },
    gallery: [
      { src: "images/deductive-lab-landing.webp", alt: "Full Deductive Lab landing page: hero, three benefits, in-demand topics, mentor, pricing plans, FAQs, testimonials, syllabus download and contact form.", caption: "Landing page" },
      { src: "images/deductive-lab-course.webp", alt: "Full Deductive Lab course page for IT Troubleshooting Skill Training: video, course stats, curriculum roadmap, success stories, pricing and mentor.", caption: "Course page" },
      { src: "images/deductive-lab-checkout.webp", alt: "Deductive Lab Buy Course screen: course image, initial and final price, user details, card number, expiry, CVC, coupon code, total and a Buy Course button.", caption: "Buy course" },
      { src: "images/deductive-lab-my-courses.webp", alt: "Deductive Lab My Courses dashboard: learner stats for courses, hours, posts, certificates and messages, a course search and four course cards with progress bars.", caption: "My Courses dashboard",
        notes: {
          kicker: "Problems the new dashboard solves",
          items: [
            { x: 93.9, y: 4, title: "Too many places to look", text: "Navigation is cut to three things, so learners always know where they are." },
            { x: 93.9, y: 25, title: "No picture of progress", text: "Courses, hours, posts and certificates in one bar." },
            { x: 93.9, y: 41.2, title: "Hard to find a course", text: "One search box above the grid gets a learner to the course they want." },
            { x: 92.1, y: 76.1, title: "Unclear next step", text: "Each card shows percent complete and one clear button, Visit or Buy." }
          ]
        } },
      { src: "images/deductive-lab-progress.webp", alt: "Deductive Lab course progress screen: a 46 percent progress bar, collapsible modules marked completed, and lessons tagged Video, PDF and Challenge with durations.", caption: "Course progress",
        notes: {
          kicker: "Why the course screen works",
          flip: true,
          items: [
            { x: 6.1, y: 19.9, title: "Progress you can see", text: "A percent bar at the top shows how far a learner is through the course." },
            { x: 6.9, y: 40.5, title: "Know each lesson first", text: "Video, PDF and Challenge tags with a duration set expectations before the click." },
            { x: 6.1, y: 64.5, title: "Course in clear chunks", text: "Lessons are grouped in modules with a count and a completed state." }
          ]
        } },
      { src: "images/deductive-lab-lesson.webp", alt: "Deductive Lab lesson player: course path on the left with a progress bar and lesson list, and the lesson video with playback controls on the right.", caption: "Lesson player" }
    ]
  },

  {
    slug: "dibsd",
    title: "Dibsd",
    eyebrow: "Case study",
    client: "Dibsd",
    year: "October 2025",
    role: "UX/UI Design",
    summary: "A ticket resale app that lets people buy and sell tickets for the events they love with confidence.",
    card: "images/dibsd-hand-card.webp",
    image: "images/dibsd-card.webp",
    cover: "images/dibsd-card.webp",
    banner: "images/dibsd-banner.webp",
    still: "images/dibsd-still.webp",
    scene: {
      type: "flow", bg: "radial-gradient(80% 80% at 30% 15%, #8BF0E0, #3CCBC3 55%, #1FA9AE)",
      /* a row of screens in the order a buyer meets them; the camera pans across, one screen in focus at a time */
      tiles: ["images/scene/db-home.webp", "images/scene/db-ticket.webp", "images/scene/db-account.webp"]
    },
    hero: {
      word: "dibsd",
      phone: "images/dibsd-phone.webp",
      meta: [["Role", "UX/UI Design"], ["Service", "Mobile app"], ["Category", "Ticket marketplace"]],
      mark: "images/dibsd-mark.webp",
      phoneAlt: "Dibsd ticket details screen for Moulin Rouge! The Musical: row D seat 186 at $56.00 each, with the official box office and buyer protection notes and Chat Seller and Buy Ticket buttons.",
      /* the two tickets either side of the phone */
      tickets: [
        { img: "images/dibsd-ev-hadestown.webp", title: "Hadestown", place: "Bronx, NY", tag: "Official Box Office", date: "Fri, Aug 19", type: "Standard", price: "$300" },
        { img: "images/dibsd-ev-mcr.webp", title: "My Chemical Romance", place: "Brooklyn, NY", tag: "Buyer Guaranteed", date: "Sat, Aug 27", type: "Standard", price: "$320" }
      ]
    },
    alt: "Dibsd event tickets marketplace: three phone screens showing trending events, a Moulin Rouge ticket page with seat, price and buyer protection, and a seller account with listings and badges.",
    tags: ["Mobile App", "UX Research", "UI Design", "Marketplace"],
    case: {
      headline: "Designing a mobile app for a ticket resale platform",
      scope: "Mobile app",
      hero: { video: "images/dibsd-screens-motion.mp4", poster: "images/dibsd-screens-motion-poster.webp", src: "images/dibsd-card.webp", alt: "Columns of Dibsd app screens sliding up in a loop: onboarding, search, event page, ticket browsing, ticket details, checkout, my ticket and seller profile." },
      overview: {
        text: [
          "Dibsd is a ticket resale platform where people buy and sell tickets for the events they love. Its aim is to make resale feel safe, so that every ticket bought on Dibsd gets the buyer through the door.",
          "I worked on the project as a UX/UI designer. I designed the mobile interface, joined online meetings with the client, and worked closely with the developer so the design stayed visually consistent and was clear and practical to build."
        ],
        /* information architecture: buyer, seller and shared branches */
        media: [
          [{ src: "images/dibsd-information-architecture.webp", alt: "Dibsd information architecture: onboarding splits into a buyer branch (discover events, search, seat map, checkout, ticket wallet), a seller branch (list, verify and price tickets, seller hub, payouts) and a shared account branch (messages, notifications, help center, profile)." }]
        ]
      },
      challenge: {
        text: [
          "The main challenge was that Dibsd works two ways. Every ticket has a seller who lists it and a buyer who looks for it, and each of them comes to the app with a different goal.",
          "That meant designing two sets of screens, one for sellers and one for buyers, that still feel like one app. Both sides also had to trust each other, because scams, invalid tickets and sky-rocketing prices make people hesitate before a single ticket changes hands."
        ],
        media: [
          [
            { src: "images/dibsd-home.webp", alt: "Dibsd home screen: a search bar, trending events with date, venue and from-price, category chips and an event list." },
            { src: "images/dibsd-ticket.webp", alt: "Dibsd ticket details for Moulin Rouge! The Musical: row D seat 186 at $56.00, an Official Box Office note, a Buyer Guaranteed Protected note, and Chat Seller and Buy Ticket buttons." },
            { src: "images/dibsd-account.webp", alt: "Dibsd seller account: rating, reviews, sales and followers, Trusted Seller and Quick Responder badges, and Listings, Sold and Reviews tabs." }
          ]
        ]
      },
      approach: {
        text: [
          "I started with why people hesitate to buy tickets online, then set one goal: every ticket bought on Dibsd results in a valid entry. From there I explored ways to build trust into the app and designed the search, ticket details and seller account screens around it.",
          "To understand the market, I ran a competitive analysis of three established resale platforms, SeatGeek, TicketSwap and StubHub, to see where they earn buyers' trust and where they lose it. SeatGeek has strong visuals and a smooth mobile experience, but occasional ticket validity and support issues. TicketSwap builds trust with fair pricing and its SecureSwap anti-fraud system, but has limited features. StubHub has the largest inventory, but hidden fees and low transparency hurt its credibility. The opportunity for Dibsd was to bring the best of these together: clear visuals, upfront pricing and verified listings in one app.",
          "The home screen leads with search, trending events and category chips. The ticket screen puts row, seat and price first, with the Official Box Office and Buyer Guaranteed notes just above Chat Seller and Buy Ticket. Seller profiles show rating, reviews, sales and badges like Trusted Seller and Quick Responder, so a buyer can check a seller before buying.",
          "The app works within Dibsd's brand: teal for buttons, prices and active states, white space for calm, and a few playful accents in yellow, blue, green and orange."
        ],
        /* competitive analysis and user personas */
        media: [
          [{ src: "images/dibsd-competitive-analysis.webp", alt: "Competitive analysis of SeatGeek, TicketSwap and StubHub: each card lists strengths, weaknesses and the UX opportunity for Dibsd." }],
          [{ src: "images/dibsd-user-personas.webp", alt: "User personas for Dibsd: Mia, 19, student; Jake, 22, young professional; Russel, 37, millennial; Anna, 20, student; Ella, 34, millennial, each with their ticket buying or selling needs." }]
        ]
      },
      outcome: {
        text: [
          "One promise on every screen: a ticket that gets you in.",
          "I delivered the home and search, ticket details and seller account screens, each one built to answer a buyer's doubts before they reach the Buy Ticket button. Together they make Dibsd a single platform that verifies every event ticket is valid before it is sold. It regulates the percentage profit sellers can make, while still giving them the option to set their own prices. Each listing also carries a safety score that shows buyers the result of the app's 5-step check, so they know their entry to the event is guaranteed."
        ],
        /* the screens with feature callouts */
        media: [
          [{ src: "images/dibsd-screens-callouts.webp", alt: "Three Dibsd screens with callouts: every event shows its starting price upfront, listings can be sorted by price to find the best seat for a budget, and users can read feedback and share their own experiences after purchasing." }]
        ]
      }
    },
    tools: "Figma",
    study: {
      eyebrow: "Case study",
      overview: [
        "**Dibsd** is a ticket resale app where people buy and sell tickets for the events they love, with **confidence**.",
        "People feel unsafe buying tickets online. There are reports of **scams**, **invalid tickets** and sky-rocketing prices, so buyers and sellers hesitate. The goal was to make sure every ticket bought on Dibsd results in a **valid entry** to the event.",
        "I designed the app's screens around that idea of trust: official box office listings, a **buyer guarantee** on every ticket, and seller profiles with badges, reviews and sales."
      ],
      closing: "One promise on every screen: a ticket that gets you in.",
      problem: {
        eyebrow: "Before the design",
        title: "The Problem",
        lead: "People feel unsafe buying tickets online, so buyers and sellers hesitate before a single ticket changes hands.",
        points: [
          { title: "Scams", text: "Reports of fake listings make buyers doubt every ticket they see." },
          { title: "Invalid tickets", text: "A ticket that does not get you through the door is the worst outcome for a buyer." },
          { title: "Sky-rocketing prices", text: "Prices that jump without explanation push people away from resale." }
        ]
      },
      process: {
        eyebrow: "How I worked",
        title: "Design Process",
        steps: [
          { title: "Discover", text: "Why people hesitate to buy tickets online: scams, invalid tickets and sky-rocketing prices." },
          { title: "Define", text: "One goal: every ticket bought on Dibsd results in a valid entry to the event." },
          { title: "Ideate", text: "Ways to build trust into the app: official box office listings, a buyer guarantee and seller profiles." },
          { title: "Design", text: "Search, ticket details and seller account screens that carry the safety idea throughout." },
          { title: "Test", text: "Check the flows and tighten the screens." }
        ]
      },
      brand: {
        eyebrow: "Brand",
        title: "A bold teal and a",
        accent: "heavy black wordmark.",
        text: "Dibsd's logo is a teal tile with the number one cut out of it, beside a heavy black wordmark. The app works within this brand: teal for buttons, prices and active states, white space for calm, and a few playful accents in yellow, blue, green and orange.",
        logo: "images/dibsd-logo.webp",
        logoLight: "images/dibsd-logo-light.webp",
        sizeImg: "images/dibsd-mark.webp",
        logoAlt: "Dibsd logo: a teal tile with the number one cut out of it, next to the word Dibsd.",
        colors: [
          { name: "Black", hex: "#000000", text: "The wordmark and headings, for strong contrast on white." },
          { name: "Teal", hex: "#3AC8B8", text: "The lead colour: the logo tile, buttons, prices and active tabs." }
        ],
        supportingLabel: "Accent colours",
        supporting: [
          { name: "Yellow", hex: "#FCB800", role: "Accent" },
          { name: "Sky blue", hex: "#00ACE0", role: "Accent" },
          { name: "Green", hex: "#8DC440", role: "Accent" },
          { name: "Orange", hex: "#FEAA2E", role: "Accent" }
        ]
      }
    },
    gallery: [
      { src: "images/dibsd-home.webp", alt: "Dibsd home screen on a phone: a search bar, trending events with date, venue and from-price, category chips and an event list, with a five-tab bar at the bottom.", caption: "Home and search",
        notes: {
          kicker: "Finding the right event",
          items: [
            { x: 67, y: 14.6, title: "Search first", text: "A search field with a filter sits at the top of the home screen." },
            { x: 64, y: 28.4, title: "Trending now", text: "Event cards show the date, venue and lowest price." },
            { x: 70, y: 48.3, title: "Browse by category", text: "Chips narrow the list to concerts, sports, festivals and more." },
            { x: 62, y: 88, title: "Five clear tabs", text: "Search, Tickets, Sell, Chat and My Account." }
          ]
        } },
      { src: "images/dibsd-ticket.webp", alt: "Dibsd ticket details screen for Moulin Rouge! The Musical: row D seat 186 at $56.00 each, location, date and time, an Official Box Office note, a Buyer Guaranteed Protected note, and Chat Seller and Buy Ticket buttons.", caption: "Ticket details",
        notes: {
          kicker: "Trust before the buy button",
          flip: true,
          items: [
            { x: 28, y: 46, title: "Seat and price first", text: "Row, seat and price per ticket lead the details card." },
            { x: 28, y: 71.3, title: "Official box office", text: "A note says the ticket is listed and sold by the venue itself." },
            { x: 28, y: 80.2, title: "A guarantee on every ticket", text: "Buyer Guaranteed Protected sits just above Chat Seller and Buy Ticket." }
          ]
        } },
      { src: "images/dibsd-account.webp", alt: "Dibsd seller account screen: a profile with a five star rating, reviews, sales and followers, Trusted Seller and Quick Responder badges, and Listings, Sold and Reviews tabs above two listings.", caption: "Seller account",
        notes: {
          kicker: "A seller you can check",
          items: [
            { x: 63, y: 21.6, title: "Profile at a glance", text: "Rating, reviews, join date, sales and followers sit in the header." },
            { x: 66.5, y: 41, title: "Badges that build trust", text: "Trusted Seller and Quick Responder show how a seller behaves." },
            { x: 69.5, y: 55.5, title: "Listings, Sold, Reviews", text: "Tabs let a buyer check a seller's history before buying." }
          ]
        } }
    ]
  },

  {
    slug: "iseeju",
    title: "Iseeju Dating App",
    client: "Iseeju",
    role: "UI/UX Design",
    year: "September to November 2024",
    summary: "A dating app that helps people discover profiles, find their best match and start a conversation.",
    image: "images/iseeju-card.webp",
    cover: "images/iseeju-card.webp",
    card: "images/iseeju-card.webp",
    alt: "Two Iseeju phone screens on a purple and pink background: the onboarding screen Find your best match and the Log in screen.",
    tags: ["Mobile App", "UI Design", "Dating"],
    /* DRAFT copy from the Iseeju case study reference; confirm with Aezel */
    case: {
      headline: "Designing a dating app that makes finding a match feel simple",
      scope: "Mobile app",
      hero: { src: "images/iseeju-hero.webp", alt: "Two Iseeju phones on a purple and pink background: the onboarding screen Find your best match and the Log in screen." },
      overview: {
        text: [
          "Iseeju is a dating app inspired by real-world dating apps. People discover profiles nearby, find their best match and start a conversation.",
          "The screens follow a flat, minimal style that keeps the user experience the priority, and the designs were delivered in Figma and Adobe Photoshop."
        ],
        media: [
          /* style guide: typography and colour palette */
          [{ src: "images/iseeju-style-guide.webp", alt: "Iseeju style guide: Montserrat Semi Bold and Regular type specimens, and the colour palette Love Pink #FE456E, Coral #FF5D5F, Violet #834FFD, Ink #1A1A1A and Teal #00BDD1." }]
        ]
      },
      challenge: {
        text: [
          "Dating apps ask people to trust strangers, and many fall short. Fake profiles and scams, privacy risks, high data use, payment fraud and a constant stream of notifications wear that trust down. Swiping is designed to keep people hooked rather than help them meet, and matches often feel random.",
          "The challenge for Iseeju was to make finding a match feel safe and simple: verify who people are, moderate the community, protect personal data, keep the app light and quiet, secure every payment, and guide people from a match to a real conversation."
        ],
        media: [
          /* information architecture */
          [{ src: "images/iseeju-information-architecture.webp", alt: "Iseeju information architecture: Start Screen leads to Login then Verification, or Registration then User Info; both open My Profile (Account, Security, Favorites), Search (Nearby), Dashboard (Members, Skill Tree, Spin the Wheel, Coins Packages, Gallery) and Chat (Stickers, Smileys)." }]
        ]
      },
      approach: {
        text: [
          "I started by mapping the information architecture, so every key flow, from sign up to search, dashboard and chat, was no more than a few taps away. From there I set up a small style guide with Montserrat and a bright pink, coral and violet palette, so the app felt warm and playful without getting noisy.",
          "The screens follow a flat, minimal style that puts people's photos and messages first. Three short onboarding screens explain the app in one line each, and sign up is kept to a few steps, with social log in and email verification to keep accounts real."
        ],
        media: [
          /* onboarding (splash) screens */
          [{ src: "images/iseeju-onboarding.webp", alt: "Three Iseeju onboarding screens on phones: Find your best match, Discover people around and Start a conversation, each with a Log in button." }],
          /* log in, sign up and verification */
          [{ src: "images/iseeju-login-signup.webp", alt: "Three Iseeju phones: the Log in screen with social and email options, the Create Account sign up screen, and the Verify your email code entry with a number pad." }]
        ]
      },
      outcome: {
        text: [
          "The result is a complete set of app screens, from onboarding and sign up to search, profiles and chat, delivered in Figma and Adobe Photoshop and ready for development.",
          "Iseeju launches with four key features: smart search filters, private chat, live features that show who is online nearby, and trending local events. Together they give people a safer, simpler way to find a match and start a real conversation."
        ],
        media: [
          /* key features */
          [{ src: "images/iseeju-features.webp", alt: "Iseeju key features around a phone showing the New Members screen: Innovative Suchoptionen (search filters by age, distance and interests), Diskreter Chat (private, secure messaging), Live Funktions (see who is online nearby) and Trending Events (popular local events), with App Store and Google Play badges." }]
        ]
      }
    }
  },

  {
    slug: "akbar-academy",
    title: "Akbar Academy",
    client: "Akbar Academy",
    role: "UI/UX Design",
    summary: "A registration flow and dashboard for an online tutoring academy, where students and parents sign up, choose courses and classes, and pay in one guided path.",
    image: "images/akbar-academy-card.webp",
    cover: "images/akbar-academy-card.webp",
    card: "images/akbar-academy-card.webp",
    alt: "Akbar Academy student portal on a laptop seen from a low angle, resting on a concrete ledge against a dark background with a blue glow.",
    tags: ["Dashboard", "Web Design", "UI Design"],
    /* DRAFT copy written from the Figma mocks (file LA7p77DPLRKHdSlBkyCokN); year, role and tags not confirmed by Aezel */
    case: {
      headline: "Designing a registration dashboard for an online tutoring academy",
      scope: "Web app, Registration, Dashboard",
      hero: { src: "images/akbar-academy-hero.webp", alt: "Akbar Academy student portal on a laptop resting on a concrete ledge, seen from a low angle against a dark background with a blue glow." },
      overview: {
        text: [
          "Akbar Academy is an online academy that teaches GCSE, IGCSE, AS and A2 level courses to students around the world. Before the first lesson, every new student has to register, choose subjects and an exam board, share their school grades, pick a class time and pay.",
          "I designed that registration journey and the portal students and parents land on afterwards, for desktop and mobile."
        ],
        media: []
      },
      challenge: {
        text: [
          "Registration was split across separate pages for students and parents, with long forms and no sense of how many steps were left. Students and parents also had to be linked to each other, and one parent could be managing more than one child.",
          "The challenge was to turn a long sign up into one clear path, and give students and parents a single place to see their courses, class times, payments and messages."
        ],
        media: [
          /* registration flow, steps 2 to 6 */
          [{ src: "images/akbar-academy-registration-flow.webp", alt: "Five Akbar Academy registration screens in browser windows, cascading left to right: Select Subjects, Select Course, Enter your school grades, Select Class and Make Payment, each with the six-step progress bar at the top." }]
        ]
      },
      approach: {
        text: [
          "I broke registration into six numbered steps: Register, Subject, Course, Grades, Class and Payment. A progress bar at the top shows where you are, and each step asks for one thing at a time. Courses are grouped by level (Half Syllabus, Full Syllabus, AS Level, A2 Level) with the exam board on each option, and class times show how many slots are left.",
          "After registering, students and parents share one portal layout. It shows linked accounts, the academic year, each subject with its course and class schedule, credits and payment, and a calendar. Parents can switch between their children, and an unfinished step, like choosing a class, is flagged right where it belongs."
        ],
        media: [
          /* parent and student portals */
          [{ src: "images/akbar-academy-dashboards.webp", alt: "Two laptops side by side on a concrete ledge: the Akbar Academy Parent Portal with linked students and credits, and the Student Portal with linked parents, subjects and a calendar." }]
        ]
      },
      outcome: {
        text: [
          "The result is a complete registration flow and portal for desktop and mobile, covering students and parents, empty and pending states, and the pop ups for each step, delivered in Figma and ready for development.",
          "The design gives new students one guided path from sign up to their first class, and gives parents a clear view of every child's courses, schedule and payments in one place."
        ],
        media: [
          /* full student portal, self-scrolling */
          [{ scroll: { src: "images/akbar-academy-student-dashboard.webp", alt: "The full Akbar Academy Student Portal page: welcome header, linked parents, payment and credits, academic year, Physics, Chemistry and Math courses with class schedules, and a calendar." }, ratio: "1440 / 900" }]
        ]
      }
    }
  },

  {
    slug: "project-two",
    title: "Project name",
    client: "Client name",
    year: "2024",
    role: "Brand Strategy, UI Design",
    summary: "One or two sentences on the problem and what changed.",
    image: "images/placeholder-2.svg",
    alt: "Placeholder artwork — replace with a screenshot of your project",
    tags: ["Mobile App", "Prototyping", "Design System"],
    sections: [
      {
        heading: "The brief",
        body: "What was the client trying to do, and what was getting in the way?"
      },
      {
        heading: "What I did",
        body: "Walk through your process — research, wireframes, prototypes, handoff."
      },
      {
        heading: "The outcome",
        body: "What shipped, and what difference did it make?"
      }
    ]
  },

  {
    slug: "project-three",
    title: "Project name",
    client: "Personal project",
    year: "2024",
    role: "Brand Identity",
    summary: "One or two sentences on the problem and what changed.",
    image: "images/placeholder-3.svg",
    alt: "Placeholder artwork — replace with a screenshot of your project",
    tags: ["Branding", "Art Direction", "Marketing Collateral"],
    sections: [
      {
        heading: "The brief",
        body: "What was the client trying to do, and what was getting in the way?"
      },
      {
        heading: "What I did",
        body: "Walk through your process."
      },
      {
        heading: "The outcome",
        body: "What shipped, and what difference did it make?"
      }
    ]
  },

  {
    slug: "project-four",
    title: "Project name",
    client: "Client name",
    year: "2024",
    role: "UX Research, UI Design",
    summary: "One or two sentences on the problem and what changed.",
    image: "images/placeholder-4.svg",
    alt: "Placeholder artwork — replace with a screenshot of your project",
    tags: ["Web Design", "Design System"],
    sections: [
      { heading: "The brief", body: "What was the client trying to do, and what was getting in the way?" },
      { heading: "What I did", body: "Walk through your process." },
      { heading: "The outcome", body: "What shipped, and what difference did it make?" }
    ]
  },

  {
    slug: "project-five",
    title: "Project name",
    client: "Client name",
    year: "2023",
    role: "UI Design, Brand",
    summary: "One or two sentences on the problem and what changed.",
    image: "images/placeholder-5.svg",
    alt: "Placeholder artwork — replace with a screenshot of your project",
    tags: ["Dashboard", "Prototyping"],
    sections: [
      { heading: "The brief", body: "What was the client trying to do, and what was getting in the way?" },
      { heading: "What I did", body: "Walk through your process." },
      { heading: "The outcome", body: "What shipped, and what difference did it make?" }
    ]
  }

];


/* =========================================================================
   Rendering — you shouldn't need to change anything below this line.
   ========================================================================= */
(function () {
  "use strict";

  var projects = window.PROJECTS || [];

  /* Every project here still carries its shipped placeholder image, which
     means the section is scaffolding rather than a real portfolio yet. */
  function isUnfilled() {
    return projects.every(function (p) {
      return (p.image || "").indexOf("images/placeholder-") === 0;
    });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- homepage featured carousel: one big animated banner per project ---------- */
  function renderCarousel(mount) {
    var list = projects.filter(function (p) { return (p.image || "").indexOf("images/placeholder-") !== 0; });
    if (!list.length) { renderGrid(mount); return; }
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var total = list.length;
    var SLIDE = 9000;

    var box = el("div", "fc");
    box.setAttribute("role", "region");
    box.setAttribute("aria-roledescription", "carousel");
    box.setAttribute("aria-label", "Featured work");
    var stage = el("div", "fc__stage");
    var view = el("div", "fc__view");
    view.setAttribute("tabindex", "0");
    var slides = [], walls = [], videos = [];

    list.forEach(function (p, i) {
      var s = el("a", "fc__slide");
      s.href = "project.html?p=" + encodeURIComponent(p.slug);
      s.setAttribute("role", "group");
      s.setAttribute("aria-roledescription", "slide");
      s.setAttribute("aria-label", (i + 1) + " of " + total + ": " + p.title);
      var poster = p.banner || p.cover || p.image;
      var sc = p.scene;
      if (p.video) {
        /* a real clip, when there is one, plays only while its slide is showing */
        var v = el("video", "fc__media");
        v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute("muted", ""); v.setAttribute("playsinline", "");
        v.preload = "metadata"; v.poster = poster; v.src = p.video;
        v.setAttribute("aria-hidden", "true");
        videos[i] = v;
        s.appendChild(v);
      } else {
        var im = el("img", "fc__media");
        im.src = poster; im.alt = ""; im.decoding = "async";
        if (i) im.loading = "lazy";
        s.appendChild(im);
      }
      if (sc && !reduce) {
        /* animated wall of the project's own screens: the camera starts tilted over the wall, then flies in to one screen */
        var scene = el("span", "fc__scene fc__scene--" + sc.type);
        scene.setAttribute("aria-hidden", "true");
        scene.style.background = sc.bg;
        var wall = el("span", "fc__wall");
        wall.style.setProperty("--cols", sc.cols);
        sc.tiles.forEach(function (src, k) {
          var t = el("span", "fc__tile");
          var ti = el("img"); ti.src = src; ti.alt = ""; ti.decoding = "async"; if (i) ti.loading = "lazy";
          t.appendChild(ti);
          wall.appendChild(t);
        });
        scene.appendChild(wall);
        s.appendChild(scene);
        walls[i] = wall;
      }
      s.appendChild(el("span", "fc__shade"));
      var cap = el("span", "fc__cap");
      cap.appendChild(el("span", "fc__title", p.title));
      if (p.summary) cap.appendChild(el("span", "fc__sum", p.summary));
      var more = el("span", "fc__go", "View case study ");
      more.appendChild(el("i", null, "\u2192"));
      cap.appendChild(more);
      s.appendChild(cap);
      view.appendChild(s);
      slides.push(s);
    });
    stage.appendChild(view);

    var count = el("span", "fc__count");
    count.setAttribute("aria-hidden", "true");
    stage.appendChild(count);
    var bar = el("span", "fc__bar");
    bar.setAttribute("aria-hidden", "true");
    var fill = el("i");
    bar.appendChild(fill);
    stage.appendChild(bar);

    var idx = -1, hold = 0, elapsed = 0, over = false;
    function setCount(n) {
      count.textContent = "";
      count.appendChild(el("b", "fc__n", pad(n + 1)));
      count.appendChild(document.createTextNode(" / " + pad(total)));
    }
    function show(n) {
      n = (n + total) % total;
      if (n === idx) return;
      idx = n;
      elapsed = 0;
      fill.style.transform = "scaleX(0)";
      setCount(idx);
      slides.forEach(function (s, i) {
        s.classList.toggle("is-active", i === idx);
        if (i === idx) s.removeAttribute("tabindex"); else s.setAttribute("tabindex", "-1");
      });
      var w = walls[idx];
      if (w) {   /* restart the camera move */
        var parts = [w].concat(Array.prototype.slice.call(w.children));
        parts.forEach(function (n) { n.style.animation = "none"; });
        void w.offsetWidth;
        parts.forEach(function (n) { n.style.animation = ""; });
      }
      videos.forEach(function (v, i) { if (!v) return; if (i === idx) { v.currentTime = 0; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } else v.pause(); });
    }
    function user(d) { hold = Date.now() + 20000; show(idx + d); }
    show(0);

    if (total > 1) {
      [["prev", "Previous project", -1], ["next", "Next project", 1]].forEach(function (d) {
        var b = el("button", "fc__nav fc__nav--" + d[0]);
        b.type = "button";
        b.setAttribute("aria-label", d[1]);
        b.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="' + (d[2] < 0 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7") + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        b.addEventListener("click", function () { user(d[2]); });
        stage.appendChild(b);
      });
      view.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { e.preventDefault(); user(1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); user(-1); }
      });
      /* swipe */
      var sx = 0, sy = 0, dragged = false;
      view.addEventListener("pointerdown", function (e) { sx = e.clientX; sy = e.clientY; dragged = false; hold = Date.now() + 20000; });
      view.addEventListener("pointerup", function (e) {
        var dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) { dragged = true; user(dx < 0 ? 1 : -1); }
      });
      view.addEventListener("click", function (e) { if (dragged) { e.preventDefault(); dragged = false; } }, true);
      stage.addEventListener("mouseenter", function () { over = true; });
      stage.addEventListener("mouseleave", function () { over = false; });
      stage.addEventListener("focusin", function () { over = true; });
      stage.addEventListener("focusout", function () { over = false; });
      if (!reduce) {
        /* a thin progress line fills while the slide waits, and dims when paused */
        setInterval(function () {
          var r = box.getBoundingClientRect();
          var seen = !(r.bottom < 0 || r.top > window.innerHeight);
          var paused = over || document.hidden || Date.now() < hold || !seen;
          box.classList.toggle("is-paused", paused);
          if (paused) return;
          elapsed += 100;
          fill.style.transform = "scaleX(" + Math.min(1, elapsed / SLIDE).toFixed(3) + ")";
          if (elapsed >= SLIDE) show(idx + 1);
        }, 100);
      }
    }
    /* the whole banner settles in the first time it scrolls into view */
    box.classList.add("fc--pre");
    if ("IntersectionObserver" in window && !reduce) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { box.classList.add("fc--in"); io.disconnect(); } });
      }, { threshold: .2 });
      io.observe(box);
    } else { box.classList.add("fc--in"); }
    box.appendChild(stage);
    mount.textContent = "";
    mount.appendChild(box);
  }

  /* ---------- homepage cards ---------- */
  var activeFit = null;

  function renderGrid(mount, term) {
    mount.textContent = "";
    activeFit = null;
    var q = (term || "").toLowerCase();
    var limit = parseInt(mount.getAttribute("data-limit"), 10) || projects.length;
    var list = projects.filter(function (p) {
      return !q || (p.tags || []).some(function (t) { return t.toLowerCase().indexOf(q) !== -1; });
    }).slice(0, limit);

    if (!list.length) {
      mount.appendChild(el("p", "pj-empty", projects.length
        ? "No projects in this category yet."
        : "No projects listed yet."));
      return;
    }

    var grid = el("div", q ? "pj-grid pj-grid--even" : "pj-grid");

    list.forEach(function (p) {
      var card = el("article", "pj");

      var media = el("a", "pj__media");
      media.href = "project.html?p=" + encodeURIComponent(p.slug);
      media.setAttribute("tabindex", "-1");
      media.setAttribute("aria-hidden", "true");

      var img = el("img");
      img.src = p.still || p.cover || p.image;
      if (p.still) card.className += " pj--banner";
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
      card.appendChild(media);

      var body = el("div", "pj__body");

      var h = el("h3", "pj__title");
      var link = el("a", null, p.title);
      link.href = "project.html?p=" + encodeURIComponent(p.slug);
      h.appendChild(link);
      body.appendChild(h);

      if (p.tags && p.tags.length) {
        var tags = el("ul", "pj__tags");
        p.tags.forEach(function (t) { tags.appendChild(el("li", null, t)); });
        body.appendChild(tags);
      }

      var cta = el("span", "pj__cta");
      cta.appendChild(document.createTextNode("View project"));
      cta.appendChild(el("span", "pj__arrow", "→"));
      body.appendChild(cta);

      card.appendChild(body);

      /* Figma-style collaborator cursor that follows the pointer over a card */
      var chip = el("span", "pj__cursor");
      chip.setAttribute("aria-hidden", "true");
      chip.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1.5 1.2l5.4 13.4 2.1-5.6 5.6-2.1z" fill="#E1275B" stroke="#0A0A0A" stroke-width="1.1" stroke-linejoin="round"/></svg><b>View project</b>';
      card.appendChild(chip);
      card.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse") return;
        var r = card.getBoundingClientRect();
        var x = Math.min(e.clientX - r.left, r.width - 150);
        var y = Math.min(e.clientY - r.top, r.height - 40);
        chip.style.transform = "translate(" + Math.round(x + 6) + "px," + Math.round(y + 6) + "px)";
      });

      card.classList.add("pj--pre");
      card.style.setProperty("--d", (grid.children.length % 5) * 90 + "ms");
      grid.appendChild(card);
    });

    /* Cards "smart animate" into place as they scroll into view. */
    var cards = grid.querySelectorAll(".pj");
    function reveal(c) {
      c.classList.remove("pj--pre");
      c.classList.add("pj--in");
      c.addEventListener("animationend", function () { c.classList.remove("pj--in"); }, { once: true });
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      cards.forEach(function (c) { io.observe(c); });
    } else {
      cards.forEach(reveal);
    }

    mount.appendChild(grid);

    /* Keep each card's pills on one line: hide any that don't fit. */
    function fitTags() {
      grid.querySelectorAll(".pj__tags").forEach(function (ul) {
        var items = ul.children;
        for (var i = 0; i < items.length; i++) items[i].hidden = false;
        for (var j = items.length - 1; j > 0 && ul.scrollWidth > ul.clientWidth + 1; j--) {
          items[j].hidden = true;
        }
      });
    }
    activeFit = fitTags;
    fitTags();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTags);
  }

  /* ---------- category filter (All work page) ---------- */
  var FILTERS = ["All", "Branding", "UX Research", "UI Design", "Mobile App", "Web Design", "Dashboard"];

  function renderFilters(mount, grid) {
    FILTERS.forEach(function (name, i) {
      var b = el("button", "chip", name);
      b.type = "button";
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        mount.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
        renderGrid(grid, i === 0 ? "" : name);
      });
      mount.appendChild(b);
    });
  }

  /* ---------- annotated screenshot: numbered dots on the image, notes beside it ---------- */
  function renderAnno(g) {
    var flip = !!g.notes.flip;
    var an = el("div", "cs-anno" + (flip ? " cs-anno--flip" : ""));
    var kicker = g.notes.kicker ? el("p", "cs-anno__kicker", g.notes.kicker) : null;
    if (kicker) an.appendChild(kicker);
    var grid = el("div", "cs-anno__grid");
    var shot = el("div", "cs-anno__shot");
    var im = el("img");
    im.src = g.src; im.alt = g.alt || ""; im.loading = "lazy";
    shot.appendChild(im);
    var list = el("ol", "cs-anno__list");
    g.notes.items.forEach(function (n, i) {
      var num = String(i + 1).padStart(2, "0");
      var dot = el("span", "cs-anno__dot", String(i + 1));
      dot.style.left = n.x + "%"; dot.style.top = n.y + "%";
      shot.appendChild(dot);
      var line = el("span", "cs-anno__line");
      line.style.top = n.y + "%";
      if (flip) {
        line.style.right = (100 - n.x) + "%";
        line.style.width = "calc(" + n.x + "% + var(--anno-gap) - .6rem)";
      } else {
        line.style.left = n.x + "%";
        line.style.width = "calc(" + (100 - n.x) + "% + var(--anno-gap) - .6rem)";
      }
      shot.appendChild(line);
      var li = el("li", "cs-anno__note");
      li.style.setProperty("--y", n.y + "%");
      var head = el("p", "cs-anno__head");
      head.appendChild(el("span", null, num));
      head.appendChild(el("i"));
      li.appendChild(head);
      li.appendChild(el("h4", "cs-anno__title", n.title));
      li.appendChild(el("p", "cs-anno__text", n.text));
      list.appendChild(li);
    });
    grid.appendChild(shot);
    grid.appendChild(list);
    an.appendChild(grid);

    /* wide screens: keep the notes from overlapping when two points sit close together */
    function settle() {
      var notes = list.children, floor = 0, wide = window.innerWidth >= 960;
      for (var k = 0; k < notes.length; k++) {
        notes[k].style.top = "";
        if (!wide) continue;
        var want = notes[k].offsetTop;
        if (want < floor) { notes[k].style.top = floor + "px"; want = floor; }
        floor = want + notes[k].offsetHeight + 8;
      }
    }
    window.addEventListener("resize", settle);
    window.addEventListener("load", settle);
    im.addEventListener("load", settle);
    setTimeout(settle, 0);
    return an;
  }

  /* ---------- design process: numbered step cards ---------- */
  /* "The Problem": a short framing statement plus up to three numbered points */
  function renderProblem(pr) {
    var sec = el("section", "pb");
    var wrapEl = el("div", "cs-wrap");
    if (pr.eyebrow) wrapEl.appendChild(el("p", "pb__eyebrow", pr.eyebrow));
    wrapEl.appendChild(el("h2", "pb__h", pr.title || "The Problem"));
    if (pr.lead) {
      var lead = el("p", "pb__lead");
      richText(lead, pr.lead);
      wrapEl.appendChild(lead);
    }
    if (pr.points && pr.points.length) {
      var ul = el("ul", "pb__list");
      pr.points.forEach(function (pt, i) {
        var li = el("li", "pb__item");
        li.appendChild(el("span", "pb__num", String(i + 1).padStart(2, "0")));
        li.appendChild(el("h3", null, pt.title));
        li.appendChild(el("p", null, pt.text));
        ul.appendChild(li);
      });
      wrapEl.appendChild(ul);
    }
    sec.appendChild(wrapEl);
    return sec;
  }

  function renderProcess(pr) {
    var sec = el("section", "dp");
    var wrap = el("div", "cs-wrap");
    wrap.appendChild(el("p", "dp-pill", pr.eyebrow));
    wrap.appendChild(el("h2", "dp-title", pr.title));
    var list = el("ol", "dp-list");
    (pr.steps || []).forEach(function (s, i) {
      var li = el("li", "dp-step");
      li.setAttribute("tabindex", "0");
      li.appendChild(el("span", "dp-num", String(i + 1).padStart(2, "0")));
      var card = el("div", "dp-card");
      card.appendChild(el("h3", "dp-h", s.title));
      card.appendChild(el("p", "dp-p", s.text));
      li.appendChild(card);
      list.appendChild(li);
    });
    wrap.appendChild(list);
    sec.appendChild(wrap);
    return sec;
  }

  /* ---------- brand identity section (logo, meaning, colour, type) ---------- */
  function renderBrand(b) {
    function img(src, alt, cls) {
      var i = el("img", cls); i.src = src; i.alt = alt || ""; i.loading = "lazy"; return i;
    }
    var sec = el("section", "bd");
    var wrap = el("div", "cs-wrap");

    wrap.appendChild(el("p", "bd-eyebrow", b.eyebrow));
    var h = el("h2", "bd-title");
    h.appendChild(document.createTextNode(b.title + " "));
    h.appendChild(el("em", null, b.accent));
    wrap.appendChild(h);
    wrap.appendChild(el("p", "bd-text", b.text));

    /* 1. the logo and what it means (only when the brand has a story to tell) */
    wrap.appendChild(el("p", "bd-label", "Logo"));
    if (b.meanings) {
      var meaning = el("div", "bd-card bd-glow bd-meaning");
      var big = el("div", "bd-meaning__logo");
      big.appendChild(img(b.logo, b.logoAlt || "Deductive Lab logo: a green hexagon holding a white cluster of rounded nodes."));
      meaning.appendChild(big);
      var mt = el("div", "bd-meaning__text");
      b.meanings.forEach(function (m) {
        var blk = el("div");
        blk.appendChild(el("h3", null, m.name));
        blk.appendChild(el("p", null, m.text));
        mt.appendChild(blk);
      });
      meaning.appendChild(mt);
      wrap.appendChild(meaning);
    }

    /* 2. logo on dark, with callouts, and the lockup */
    var dark = el("div", "bd-card bd-glow bd-dark");
    dark.appendChild(el("p", "bd-dark__label", "Logo on a dark background"));
    if (b.meanings) {
      var stage = el("div", "bd-callouts");
      var lg = el("div", "bd-callouts__logo");
      lg.appendChild(img(b.logo, "Deductive Lab logo with the hexagon shape and the nodes labelled."));
      var cl = el("span", "bd-call bd-call--l"); cl.appendChild(el("i", null, "Hexagon shape")); cl.appendChild(el("b"));
      var cr = el("span", "bd-call bd-call--r"); cr.appendChild(el("b")); cr.appendChild(el("i", null, "Nodes"));
      lg.appendChild(cl); lg.appendChild(cr);
      stage.appendChild(lg);
      dark.appendChild(stage);
      var lock = el("div", "bd-lockup");
      lock.appendChild(img(b.mark, ""));
      lock.appendChild(el("span", null, b.wordmark));
      dark.appendChild(lock);
    } else {
      var plain = el("div", "bd-plainlogo");
      plain.appendChild(img(b.logo, b.logoAlt || ""));
      dark.appendChild(plain);
    }
    wrap.appendChild(dark);

    /* 3. other logo uses */
    var uses = el("div", "bd-uses");
    var onWhite = el("div", "bd-tile bd-tile--white");
    onWhite.appendChild(img(b.logoLight || b.logo, ""));
    onWhite.appendChild(el("small", null, "On white"));
    if (b.logoLight) onWhite.classList.add("bd-tile--wide");
    uses.appendChild(onWhite);
    var sizes = el("div", "bd-tile bd-tile--sizes");
    [56, 36, 24, 16].forEach(function (px) {
      var si = img(b.sizeImg || b.logo, ""); si.width = px; si.height = px; sizes.appendChild(si);
    });
    sizes.appendChild(el("small", null, "Small sizes"));
    uses.appendChild(sizes);
    wrap.appendChild(uses);

    /* 4. colour */
    wrap.appendChild(el("p", "bd-label", "Colour"));
    var col = el("div", "bd-colours");
    var ct = el("div", "bd-colours__text");
    var ch = el("h3", "bd-colours__h");
    ch.appendChild(el("span", null, "The"));
    ch.appendChild(el("em", null, "colours"));
    ct.appendChild(ch);
    b.colors.forEach(function (c) {
      var blk = el("div");
      blk.appendChild(el("h4", null, c.name));
      blk.appendChild(el("p", null, c.text));
      ct.appendChild(blk);
    });
    col.appendChild(ct);
    var cv = el("div", "bd-colours__viz");
    cv.setAttribute("role", "img");
    cv.setAttribute("aria-label", b.colors.map(function (c) { return c.name + " " + c.hex; }).join(", "));
    var spring = el("div", "bd-orb bd-orb--spring");
    spring.appendChild(el("b", null, b.colors[1].name));
    spring.appendChild(el("span", null, b.colors[1].hex));
    var swamp = el("div", "bd-orb bd-orb--swamp");
    swamp.appendChild(el("b", null, b.colors[0].name));
    swamp.appendChild(el("span", null, b.colors[0].hex));
    cv.appendChild(spring); cv.appendChild(swamp);
    col.appendChild(cv);
    wrap.appendChild(col);

    var sw = el("div", "bd-swatches");
    b.supporting.forEach(function (c) {
      var s = el("div", "bd-sw" + (c.dark ? " bd-sw--dark" : ""));
      s.style.background = c.hex;
      s.appendChild(el("b", null, c.name));
      s.appendChild(el("code", null, c.hex + " · " + c.role));
      sw.appendChild(s);
    });
    wrap.appendChild(el("p", "bd-label bd-label--sub", b.supportingLabel || "Supporting shades on the website"));
    wrap.appendChild(sw);

    /* 5. type (optional) */
    if (!b.type) { sec.appendChild(wrap); return sec; }
    wrap.appendChild(el("p", "bd-label", "Type"));
    var type = el("div", "bd-type");
    var spec = el("div", "bd-aa");
    spec.appendChild(el("span", null, "Aa"));
    spec.appendChild(el("small", null, b.type.display.name + " · " + b.type.display.role));
    type.appendChild(spec);
    var rows = el("div", "bd-rows");
    b.type.display.weights.forEach(function (w, i) {
      var r = el("div", "bd-row bd-row--w" + (i === 0 ? "7" : i === 1 ? "6" : "4"));
      r.appendChild(el("b", null, w[0]));
      r.appendChild(el("span", null, w[1]));
      rows.appendChild(r);
    });
    var mono = el("div", "bd-row bd-row--mono");
    mono.appendChild(el("b", null, b.type.mono.name + " " + b.type.mono.weights[0][0]));
    mono.appendChild(el("span", null, b.type.mono.weights[0][1]));
    rows.appendChild(mono);
    type.appendChild(rows);
    wrap.appendChild(type);

    sec.appendChild(wrap);
    return sec;
  }

  /* ---------- featured case study (hero banner + overview story) ---------- */
  function richText(parent, text) {
    text.split("**").forEach(function (part, i) {
      if (!part) return;
      parent.appendChild(i % 2 ? el("b", null, part) : document.createTextNode(part));
    });
  }

  function renderStudy(mount, p) {
    var st = p.study;
    var main = mount.parentNode;
    if (main) main.classList.add("pd--study");
    var wrap = el("div", "cs");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* hero banner: title, then an animated device stage */
    var hero = el("header", "cs-hero");
    hero.appendChild(el("div", "cs-hero__glow"));
    var inner = el("div", "cs-wrap cs-hero__in");
    var crumb = el("a", "cs-back", "← All projects");
    crumb.href = "index.html#projects";
    inner.appendChild(crumb);
    inner.appendChild(el("p", "cs-eyebrow", [st.eyebrow, p.client, p.year].filter(Boolean).join(" · ")));
    inner.appendChild(el("h1", "cs-title", p.title));
    var tags = el("ul", "cs-tags");
    (p.tags || []).forEach(function (t) { tags.appendChild(el("li", null, t)); });
    inner.appendChild(tags);
    hero.appendChild(inner);

    if (p.hero) {
      /* brand panel hero (e.g. Dibsd) in place of the animated device stage */
      wrap.classList.add("cs--" + p.slug);
      if (main) main.classList.add("pd--" + p.slug);
      var pw = el("div", "cs-wrap cs-hero__panel");
      pw.appendChild(renderHero(p));
      hero.appendChild(pw);
      wrap.appendChild(hero);
      return finishStudy(mount, p, st, wrap, reduce);
    }
    var h = st.hero || {};
    var stage = el("div", "cs-stage");
    stage.setAttribute("role", "img");
    stage.setAttribute("aria-label", h.scrollAlt || p.alt || p.title);
    var tilt = el("div", "cs-tilt");

    var frame = el("div", "cs-frame");
    var bar = el("div", "cs-frame__bar");
    for (var d = 0; d < 3; d++) bar.appendChild(el("i"));
    frame.appendChild(bar);
    var view = el("div", "cs-frame__view");
    var shot = el("img", "cs-frame__shot");
    shot.src = h.scroll || p.image;
    shot.alt = "";
    shot.decoding = "async";
    view.appendChild(shot);
    frame.appendChild(view);
    function fitScroll() {
      var dist = shot.offsetHeight - view.clientHeight;
      if (dist > 0) shot.style.setProperty("--dist", "-" + dist + "px");
    }
    shot.addEventListener("load", fitScroll);
    window.addEventListener("resize", fitScroll, { passive: true });
    tilt.appendChild(frame);

    if (h.float) {
      var card = el("div", "cs-float");
      var fi = el("img");
      fi.src = h.float; fi.alt = ""; fi.loading = "lazy";
      card.appendChild(fi);
      tilt.appendChild(card);
    }
    if (h.chip) {
      var chip = el("div", "cs-chip");
      var ci = el("img");
      ci.src = h.chip; ci.alt = ""; ci.loading = "lazy";
      chip.appendChild(ci);
      tilt.appendChild(chip);
    }
    stage.appendChild(tilt);
    hero.appendChild(stage);
    wrap.appendChild(hero);
    return finishStudy(mount, p, st, wrap, reduce, hero, stage);
  }

  function finishStudy(mount, p, st, wrap, reduce, hero, stage) {
    /* the stage leans toward the pointer, like nudging a frame in a design tool */
    if (stage && !reduce && window.matchMedia("(hover: hover)").matches) {
      hero.addEventListener("pointermove", function (e) {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5;
        var y = (e.clientY - r.top) / r.height - .5;
        stage.style.setProperty("--px", (x * 6).toFixed(2) + "deg");
        stage.style.setProperty("--py", (y * -4).toFixed(2) + "deg");
      });
      hero.addEventListener("pointerleave", function () {
        stage.style.setProperty("--px", "0deg");
        stage.style.setProperty("--py", "0deg");
      });
    }

    /* overview story */
    var ov = el("section", "cs-overview");
    var ovIn = el("div", "cs-wrap cs-overview__in");
    ovIn.appendChild(el("h2", "cs-overview__h", "Overview"));
    var paras = [];
    (st.overview || []).forEach(function (t, i) {
      var para = el("p", i === 0 ? "cs-lead cs-rise" : "cs-text cs-rise");
      richText(para, t);
      ovIn.appendChild(para);
      paras.push(para);
    });
    if (st.closing) {
      var cl = el("p", "cs-closing cs-rise", st.closing);
      ovIn.appendChild(cl);
      paras.push(cl);
    }
    ov.appendChild(ovIn);

    var facts = el("dl", "cs-facts cs-wrap");
    function fact(k, v) {
      if (!v) return;
      var row = el("div", "cs-fact");
      row.appendChild(el("dt", null, k));
      row.appendChild(el("dd", null, v));
      facts.appendChild(row);
    }
    fact("Client", p.client);
    fact("Year", p.year);
    fact("Role", p.role);
    fact("Tools", p.tools);
    ov.appendChild(facts);
    wrap.appendChild(ov);

    if (st.problem) wrap.appendChild(renderProblem(st.problem));
    if (st.brand) wrap.appendChild(renderBrand(st.brand));
    if (st.process) wrap.appendChild(renderProcess(st.process));

    if ("IntersectionObserver" in window && !reduce) {
      paras.forEach(function (n) { n.classList.add("cs-rise--pre"); });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.remove("cs-rise--pre"); io.unobserve(en.target); }
        });
      }, { threshold: 0.2 });
      paras.forEach(function (n) { io.observe(n); });
    }

    /* the work */
    if (p.gallery && p.gallery.length) {
      var work = el("section", "cs-work");
      var wi = el("div", "cs-wrap");
      wi.appendChild(el("h2", "cs-work__h", "The work"));
      p.gallery.forEach(function (g, i) {
        var fig = el("figure", "cs-shot");
        var cap = el("figcaption", "cs-shot__cap");
        cap.appendChild(el("span", null, String(i + 1).padStart(2, "0")));
        cap.appendChild(document.createTextNode(g.caption || ""));
        fig.appendChild(cap);
        if (g.video) {
          /* video: a real <video> once a file is set, otherwise a placeholder frame */
          if (g.src) {
            var vd = el("video", "cs-video");
            vd.src = g.src; vd.controls = true; vd.preload = "metadata";
            if (g.poster) vd.poster = g.poster;
            fig.appendChild(vd);
          } else {
            var ph = el("div", "cs-video cs-video--ph");
            ph.setAttribute("role", "img");
            ph.setAttribute("aria-label", g.alt || "Video placeholder");
            ph.appendChild(el("span", "cs-video__play"));
            ph.appendChild(el("span", "cs-video__tag", "Video placeholder"));
            fig.appendChild(ph);
          }
        } else if (g.notes) {
          fig.appendChild(renderAnno(g));
        } else {
          var im = el("img");
          im.src = g.src; im.alt = g.alt || ""; im.loading = "lazy";
          fig.appendChild(im);
        }
        wi.appendChild(fig);
      });
      work.appendChild(wi);
      wrap.appendChild(work);
    }

    var band = el("div", "cs-footband");
    var foot = el("div", "cs-wrap cs-foot");
    band.appendChild(foot);
    var next = projects[(projects.indexOf(p) + 1) % projects.length];
    if (next && next !== p) {
      var nx = el("a", "cs-pill", "Next project: " + next.title + " →");
      nx.href = "project.html?p=" + encodeURIComponent(next.slug);
      foot.appendChild(nx);
    }
    var talk = el("a", "cs-pill cs-pill--solid", "Get in touch");
    talk.href = "index.html#contact";
    foot.appendChild(talk);
    wrap.appendChild(band);

    mount.appendChild(wrap);
  }

  /* ---------- detail page ---------- */
  /* Brand hero panel: meta row, oversized wordmark, phone, faded event tiles */
  function renderHero(p) {
    var h = p.hero;
    var box = el("figure", "dh");
    var stage = el("div", "dh__stage");
    var art = el("div", "dh__art");
    art.setAttribute("aria-hidden", "true");
    art.appendChild(el("div", "dh__word", h.word));
    art.appendChild(el("i", "dh__stripes"));
    art.appendChild(el("i", "dh__ring"));
    (h.tickets || []).forEach(function (t, i) {
      var tk = el("div", "dh__tk " + (i ? "dh__tk--r" : "dh__tk--l"));
      var ph = el("div", "dh__tkph");
      var im = el("img"); im.src = t.img; im.alt = ""; im.loading = "lazy";
      ph.appendChild(im);
      ph.appendChild(el("span", "dh__tktag", t.tag));
      ph.appendChild(el("h3", null, t.title));
      ph.appendChild(el("span", "dh__tkloc", t.place));
      tk.appendChild(ph);
      var stub = el("div", "dh__stub");
      var row = el("div", "dh__row");
      [["Date", t.date], ["Ticket", t.type], ["Price", t.price]].forEach(function (f) {
        var d = el("div");
        d.appendChild(el("small", null, f[0]));
        d.appendChild(el("b", null, f[1]));
        row.appendChild(d);
      });
      stub.appendChild(row);
      stub.appendChild(el("div", "dh__bar"));
      tk.appendChild(stub);
      art.appendChild(tk);
    });
    var a1 = el("div", "dh__pill dh__pill--a", "EVENTS");
    var a2 = el("div", "dh__pill dh__pill--b", "TICKETS");
    art.appendChild(a1); art.appendChild(a2);
    var mark = el("div", "dh__mark");
    var mi = el("img"); mi.src = h.mark; mi.alt = "";
    mark.appendChild(mi);
    art.appendChild(mark);
    /* glossy accents in the brand's yellow, sky blue and green */
    var star = el("span", "dh__gloss dh__star");
    star.innerHTML = '<svg viewBox="0 0 250 250"><defs><radialGradient id="dhY" cx="34%" cy="26%" r="80%"><stop offset="0" stop-color="#FFF1A6"/><stop offset=".38" stop-color="#FCC21A"/><stop offset="1" stop-color="#E08F00"/></radialGradient></defs><polygon points="125,34 151,92 214,98 166,140 181,203 125,170 69,203 84,140 36,98 99,92" fill="url(#dhY)" stroke="url(#dhY)" stroke-width="34" stroke-linejoin="round"/><ellipse cx="96" cy="76" rx="30" ry="15" fill="#fff" opacity=".55" transform="rotate(-28 96 76)"/></svg>';
    var heart = el("span", "dh__gloss dh__heart");
    heart.innerHTML = '<svg viewBox="0 0 210 190"><defs><radialGradient id="dhB" cx="32%" cy="24%" r="85%"><stop offset="0" stop-color="#B8EEFF"/><stop offset=".4" stop-color="#17B9EE"/><stop offset="1" stop-color="#0079B0"/></radialGradient></defs><path d="M105 172C40 126 22 92 22 62 22 36 42 20 66 20c16 0 31 9 39 24 8-15 23-24 39-24 24 0 44 16 44 42 0 30-18 64-83 110z" fill="url(#dhB)"/><ellipse cx="70" cy="52" rx="22" ry="12" fill="#fff" opacity=".6" transform="rotate(-35 70 52)"/></svg>';
    var arrow = el("span", "dh__gloss dh__arrow");
    arrow.innerHTML = '<svg viewBox="0 0 190 200"><defs><linearGradient id="dhG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E4FFB4"/><stop offset=".4" stop-color="#8DC440"/><stop offset="1" stop-color="#4E8A15"/></linearGradient></defs><path d="M40 22L158 78 98 98 78 160z" fill="url(#dhG)" stroke="url(#dhG)" stroke-width="26" stroke-linejoin="round"/><path d="M62 52L118 78" stroke="#fff" stroke-opacity=".55" stroke-width="8" stroke-linecap="round"/></svg>';
    art.appendChild(star); art.appendChild(heart); art.appendChild(arrow);
    stage.appendChild(art);
    var ph = el("img", "dh__phone");
    ph.src = h.phone;
    ph.alt = h.phoneAlt || p.alt || p.title;
    stage.appendChild(ph);
    box.appendChild(stage);
    var meta = el("div", "dh__meta");
    h.meta.forEach(function (m) {
      var d = el("div");
      d.appendChild(el("span", null, m[0]));
      d.appendChild(el("b", null, m[1]));
      meta.appendChild(d);
    });
    box.appendChild(meta);
    return box;
  }

  /* ---------- project page: Overview, Challenge, Approach, Outcome ---------- */
  var CASE_PARTS = [["overview", "Overview"], ["challenge", "Challenge"], ["approach", "Approach"], ["outcome", "Outcome"]];
  /* before and after slider: drag the handle, or use the arrow keys */
  function caseCompare(m) {
    var f = el("figure", "cx__fig ba cx-rise");
    if (m.ratio) f.style.aspectRatio = m.ratio;
    function layer(side, d, label) {
      var l = el("div", "ba__layer ba__layer--" + side);
      if (d && d.src) {
        var im = el("img");
        im.src = d.src; im.alt = d.alt || label; im.loading = "lazy"; im.decoding = "async"; im.draggable = false;
        l.appendChild(im);
      } else {
        l.classList.add("ba__layer--ph");
        l.appendChild(el("span", "mono", label + " image"));
      }
      l.appendChild(el("span", "ba__tag mono", label));
      return l;
    }
    f.appendChild(layer("after", m.after, "After"));
    f.appendChild(layer("before", m.before, "Before"));
    var bar = el("span", "ba__bar");
    bar.setAttribute("aria-hidden", "true");
    bar.appendChild(el("span", "ba__knob", "‹ ›"));
    f.appendChild(bar);
    var r = el("input", "ba__range");
    r.type = "range"; r.min = 0; r.max = 100; r.value = 50; r.step = "any";
    r.setAttribute("aria-label", "Drag to compare before and after");
    function set() { f.style.setProperty("--pos", r.value + "%"); }
    r.addEventListener("input", set);
    set();
    f.appendChild(r);
    return f;
  }

  /* A tall screenshot that scrolls itself top to bottom, like a screen
     recording. It only runs while on screen; with reduced motion it is
     a frame the visitor scrolls by hand. */
  function caseScroll(m) {
    var f = el("figure", "cx__fig cx-rise sv");
    if (m.ratio) f.style.aspectRatio = m.ratio;
    f.tabIndex = 0;
    var im = el("img", "sv__img");
    im.src = m.scroll.src; im.alt = m.scroll.alt || ""; im.loading = "lazy"; im.decoding = "async";
    f.appendChild(im);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { f.classList.toggle("is-on", e.isIntersecting); });
      }, { threshold: 0.25 }).observe(f);
    } else { f.classList.add("is-on"); }
    return f;
  }

  /* A short muted looping clip that plays only while on screen.
     With reduced motion it shows the poster and play controls instead. */
  function caseVideo(m) {
    var f = el("figure", "cx__fig cx-rise");
    if (m.ratio) f.style.aspectRatio = m.ratio;
    var v = document.createElement("video");
    v.src = m.video.src; v.muted = true; v.loop = true; v.playsInline = true; v.preload = "metadata";
    v.setAttribute("muted", ""); v.setAttribute("playsinline", "");
    if (m.video.poster) v.poster = m.video.poster;
    if (m.video.alt) v.setAttribute("aria-label", m.video.alt);
    f.appendChild(v);
    var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) { v.controls = true; }
    else if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { v.currentTime = 0; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
          else v.pause();
        });
      }, { threshold: 0.4 }).observe(f);
    } else { v.autoplay = true; }
    return f;
  }

  function caseMedia(list) {
    var box = el("div", "cx__media cx__media--" + Math.min(list.length, 3));
    list.forEach(function (m) {
      if (m.before || m.after) { box.appendChild(caseCompare(m)); return; }
      if (m.scroll) { box.appendChild(caseScroll(m)); return; }
      if (m.video) { box.appendChild(caseVideo(m)); return; }
      var f = el("figure", "cx__fig cx-rise");
      var im = el("img");
      im.src = m.src; im.alt = m.alt || ""; im.loading = "lazy"; im.decoding = "async";
      f.appendChild(im);
      box.appendChild(f);
    });
    return box;
  }
  function renderCase(mount, p) {
    var c = p.case || {};
    var main = mount.parentNode;
    if (main) main.classList.add("cx");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var wrap = el("article", "cx__in");

    var head = el("header", "cx__head");
    head.appendChild(el("p", "cx__eyebrow mono", p.client || p.title));
    head.appendChild(el("h1", "cx__h", c.headline || p.title));
    wrap.appendChild(head);

    var meta = el("dl", "cx__meta");
    [["Scope", c.scope || (p.tags || []).join(", ")], ["Role", p.role], ["Client", p.client], ["Year", p.year]].forEach(function (m) {
      if (!m[1]) return;
      var d = el("div", "cx__metai");
      d.appendChild(el("dt", "mono", m[0]));
      d.appendChild(el("dd", null, m[1]));
      meta.appendChild(d);
    });
    wrap.appendChild(meta);

    var hero = c.hero || { src: p.cover || p.image, alt: p.alt || p.title };
    var hf = el("figure", "cx__hero");
    if (hero.video) {
      /* muted looping clip; with reduced motion it shows the poster and controls */
      var hv = document.createElement("video");
      hv.src = hero.video; hv.muted = true; hv.loop = true; hv.playsInline = true; hv.preload = "auto";
      hv.setAttribute("muted", ""); hv.setAttribute("playsinline", "");
      if (hero.poster) hv.poster = hero.poster;
      if (hero.alt) hv.setAttribute("aria-label", hero.alt);
      if (reduce) { hv.controls = true; }
      else { hv.autoplay = true; hv.setAttribute("autoplay", ""); }
      hf.appendChild(hv);
    } else {
      var hi = el("img");
      hi.src = hero.src; hi.alt = hero.alt || ""; hi.decoding = "async";
      hf.appendChild(hi);
    }
    wrap.appendChild(hf);

    /* fill a missing part from the older "sections" list, else a prompt */
    var old = p.sections || [];
    CASE_PARTS.forEach(function (part, i) {
      var data = c[part[0]] || {};
      var text = data.text;
      if (!text || !text.length) {
        var o = old[i === 0 ? 0 : i === 3 ? old.length - 1 : 1];
        text = [o && i !== 1 ? o.body : "Add the " + part[1].toLowerCase() + " for this project."];
      }
      var sec = el("section", "cx__sec");
      sec.id = part[0];
      sec.appendChild(el("h2", "cx__label cx-rise", part[1]));
      var body = el("div", "cx__body cx-rise");
      text.forEach(function (t) { body.appendChild(el("p", null, t.replace(/\*\*/g, ""))); });
      sec.appendChild(body);
      wrap.appendChild(sec);
      if (data.media && data.media.length) {
        /* media can be one row, or a list of rows shown one under another */
        var rows = Array.isArray(data.media[0]) ? data.media : [data.media];
        rows.forEach(function (row, ri) {
          var mb = caseMedia(row);
          if (ri) mb.classList.add("cx__media--next");
          wrap.appendChild(mb);
        });
      }
    });

    /* more projects */
    var others = projects.filter(function (x) { return x !== p && !/^project-/.test(x.slug) && x.title !== "Project name"; }).slice(0, 3);
    var more = el("section", "cx__more");
    more.appendChild(el("h2", "cx__moreh", "More projects"));
    var row = el("div", "cx__morerow");
    for (var k = 0; k < 3; k++) {
      var o2 = others[k];
      var a = el(o2 ? "a" : "div", "cx__card" + (o2 ? "" : " cx__card--soon"));
      var media = el("span", "cx__cardimg");
      if (o2) {
        a.href = "project.html?p=" + encodeURIComponent(o2.slug);
        var ci = el("img"); ci.src = o2.card || o2.cover || o2.image; ci.alt = ""; ci.loading = "lazy";
        media.appendChild(ci);
      } else {
        media.appendChild(el("span", "mono", "Soon"));
      }
      a.appendChild(media);
      var line = el("span", "cx__cardrow");
      line.appendChild(el("span", "cx__cardt", o2 ? o2.title : "Project name"));
      line.appendChild(el("span", "cx__cardy mono", o2 ? (o2.year || "") : ""));
      a.appendChild(line);
      a.appendChild(el("span", "cx__cards mono", o2 ? ((o2.case && o2.case.scope) || (o2.tags || []).slice(0, 2).join(", ")) : "Coming soon"));
      row.appendChild(a);
    }
    more.appendChild(row);
    wrap.appendChild(more);
    mount.appendChild(wrap);

    if (!reduce && "IntersectionObserver" in window) {
      document.documentElement.classList.add("cx-anim");
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      wrap.querySelectorAll(".cx-rise").forEach(function (n) { io.observe(n); });
    }
  }

  function renderDetail(mount) {
    var slug = new URLSearchParams(window.location.search).get("p");
    var p = projects.filter(function (x) { return x.slug === slug; })[0];

    if (!p) {
      document.title = "Project not found · Aezel Santillana";
      var miss = el("div", "pd__missing");
      miss.appendChild(el("h1", null, "That project isn't here."));
      miss.appendChild(el("p", null,
        slug ? "Nothing matches “" + slug + "”. It may have been renamed."
             : "No project was named in the address."));
      var back = el("a", "pill pill--solid", "Back to all projects");
      back.href = "index.html#projects";
      miss.appendChild(back);
      mount.appendChild(miss);
      return;
    }

    document.title = p.title + " · Aezel Santillana";

    /* every project page uses the Overview / Challenge / Approach / Outcome layout */
    renderCase(mount, p); return;

    var crumb = el("a", "pd__back", "← All projects");
    crumb.href = "index.html#projects";
    mount.appendChild(crumb);

    var head = el("header", "pd__head");
    var meta = el("p", "pd__meta eyebrow");
    meta.textContent = [p.eyebrow, p.client, p.year].filter(Boolean).join(" · ");
    head.appendChild(meta);
    head.appendChild(el("h1", "pd__title", p.title));
    if (p.summary) head.appendChild(el("p", "pd__summary", p.summary));
    mount.appendChild(head);

    if (p.hero) {
      mount.appendChild(renderHero(p));
    } else {
      var hero = el("figure", "pd__hero");
      var img = el("img");
      img.src = p.image;
      img.alt = p.alt || p.title;
      hero.appendChild(img);
      mount.appendChild(hero);
    }

    var facts = el("dl", "pd__facts");
    function fact(k, v) {
      if (!v) return;
      var row = el("div", "pd__fact");
      row.appendChild(el("dt", "eyebrow", k));
      row.appendChild(el("dd", null, v));
      facts.appendChild(row);
    }
    fact("Client", p.client);
    fact("Year", p.year);
    fact("Role", p.role);
    fact("Scope", (p.tags || []).join(", "));
    mount.appendChild(facts);

    if (p.sections && p.sections.length) {
      var body = el("div", "pd__body");
      p.sections.forEach(function (s) {
        var block = el("section", "pd__block");
        block.appendChild(el("h2", null, s.heading));
        block.appendChild(el("p", null, s.body));
        body.appendChild(block);
      });
      mount.appendChild(body);
    }

    if (p.gallery && p.gallery.length) {
      var gal = el("div", "pd__gallery");
      p.gallery.forEach(function (g) {
        if (g.video && !g.src) return;
        var f = el("figure");
        var gi = el("img");
        gi.src = typeof g === "string" ? g : g.src;
        gi.alt = typeof g === "string" ? "" : (g.alt || "");
        gi.loading = "lazy";
        f.appendChild(gi);
        if (g.caption) f.appendChild(el("figcaption", null, g.caption));
        gal.appendChild(f);
      });
      mount.appendChild(gal);
    }

    var foot = el("div", "pd__foot");
    if (p.link) {
      var live = el("a", "pill pill--solid", "Visit live site ↗");
      live.href = p.link;
      live.target = "_blank";
      live.rel = "noopener noreferrer";
      foot.appendChild(live);
    }
    var next = projects[(projects.indexOf(p) + 1) % projects.length];
    if (next && next !== p) {
      var nx = el("a", "pill", "Next project: " + next.title + " →");
      nx.href = "project.html?p=" + encodeURIComponent(next.slug);
      foot.appendChild(nx);
    }
    var talk = el("a", "pill", "Get in touch");
    talk.href = "index.html#contact";
    foot.appendChild(talk);
    mount.appendChild(foot);
  }

  function boot() {
    window.addEventListener("resize", function () { if (activeFit) activeFit(); }, { passive: true });
    window.addEventListener("load", function () { if (activeFit) activeFit(); });
    var carousel = document.getElementById("featuredCarousel");
    if (carousel) renderCarousel(carousel);
    var grid = document.getElementById("projectGrid");
    if (grid) renderGrid(grid);
    var filters = document.getElementById("projectFilters");
    if (filters && grid) renderFilters(filters, grid);
    var detail = document.getElementById("projectDetail");
    if (detail) {
      /* a project page always opens at its hero/title, never partway down */
      try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
      renderDetail(detail);
      window.scrollTo(0, 0);
      window.addEventListener("load", function () { window.scrollTo(0, 0); });
      window.addEventListener("pageshow", function () { window.scrollTo(0, 0); });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
