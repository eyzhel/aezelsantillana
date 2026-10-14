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
     alt       Describe the screenshot for screen readers and when images fail.
     tags      Short list of skills or deliverables.
     link      OPTIONAL. A live site URL — adds a "Visit live site" button
               on the detail page. Delete the line if there isn't one.
     sections  The detail page body. Each { heading, body } becomes one
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
    role: "Logo Design, Branding, UI/UX Design",
    tools: "Figma, Adobe CC Apps",
    summary: "Logo, brand identity and the website and learning dashboard for a consulting firm that trains IT teams in standardized problem identification.",
    image: "images/deductive-lab-hero.webp",
    cover: "images/deductive-lab-cover-laptop.webp",
    alt: "Deductive Lab landing page: the headline 'Build High Performing Teams with Standardized Troubleshooting Training and AI-Driven Tools' above an illustration of two green laptops.",
    tags: ["Logo Design", "LMS Dashboard", "Web Design"],
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
        "I worked with Deductive Lab on the brand, and on the website and learning platform that carry it. The goal was to make a technical subject feel clear and approachable, for the IT managers who buy the training and the learners who take it.",
        "It started with the logo and brand: a bright green on deep navy, with a pixel-built hexagon mark. From there I designed the landing page, the course page and the My Courses dashboard, where every learner sees their courses, hours, progress and certificates in one place."
      ],
      closing: "One brand, carried from the first impression to the learner's dashboard.",
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
    role: "UX/UI Design",
    summary: "A ticket resale app that lets people buy and sell tickets for the events they love with confidence.",
    image: "images/dibsd-cover.webp",
    cover: "images/dibsd-cover.webp",
    hero: {
      word: "dibsd",
      phone: "images/dibsd-phone.webp",
      meta: [["Role", "UX/UI Design"], ["Service", "Mobile app"], ["Category", "Ticket marketplace"]],
      /* faded event tiles behind the phone, like the reference layout */
      events: [
        { img: "images/dibsd-ev-yankees.webp", date: "Sat, July 30", title: "Royal at Yankees" },
        { img: "images/dibsd-ev-woods.webp", date: "Sat, Aug 19", title: "Into the Woods" },
        { img: "images/dibsd-ev-hadestown.webp", date: "Fri, Aug 19", title: "Hadestown" },
        { img: "images/dibsd-ev-mcr.webp", date: "Sat, Aug 27", title: "My Chemical Romance" },
        { img: "images/dibsd-ev-coldplay.webp", date: "Fri, Aug 11", title: "Coldplay - Music of Spheres" },
        { img: "images/dibsd-ev-dream.webp", date: "Sun, Dec 25", title: "Dream Nation Festival" }
      ]
    },
    alt: "Dibsd event tickets marketplace: three phone screens showing trending events, a Moulin Rouge ticket page with seat, price and buyer protection, and a seller account with listings and badges.",
    tags: ["Mobile App", "UX Research", "UI Design", "Marketplace"],
    tools: "Figma",
    study: {
      eyebrow: "Case study",
      overview: [
        "**Dibsd** is a ticket resale app where people buy and sell tickets for the events they love, with **confidence**.",
        "People feel unsafe buying tickets online. There are reports of **scams**, **invalid tickets** and sky-rocketing prices, so buyers and sellers hesitate. The goal was to make sure every ticket bought on Dibsd results in a **valid entry** to the event.",
        "I designed the app's screens around that idea of trust: official box office listings, a **buyer guarantee** on every ticket, and seller profiles with badges, reviews and sales."
      ],
      closing: "One promise on every screen: a ticket that gets you in.",
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
      img.src = p.cover || p.image;
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
      chip.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1.5 1.2l5.4 13.4 2.1-5.6 5.6-2.1z" fill="#FF5470" stroke="#14070A" stroke-width="1.1" stroke-linejoin="round"/></svg><b>View project</b>';
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
    var meta = el("div", "dh__meta");
    h.meta.forEach(function (m) {
      var d = el("div");
      d.appendChild(el("span", null, m[0]));
      d.appendChild(el("b", null, m[1]));
      meta.appendChild(d);
    });
    box.appendChild(meta);
    var word = el("div", "dh__word", h.word);
    word.setAttribute("aria-hidden", "true");
    box.appendChild(word);
    var evs = el("ul", "dh__events");
    evs.setAttribute("aria-hidden", "true");
    (h.events || []).forEach(function (ev) {
      var li = el("li");
      li.appendChild(el("span", "dh__date", ev.date));
      var im = el("img"); im.src = ev.img; im.alt = ""; im.loading = "lazy";
      li.appendChild(im);
      li.appendChild(el("b", null, ev.title));
      evs.appendChild(li);
    });
    box.appendChild(evs);
    ["dh__sun", "dh__dots", "dh__stripes", "dh__tri"].forEach(function (c) {
      var d = el("i", "dh__deco " + c);
      d.setAttribute("aria-hidden", "true");
      box.appendChild(d);
    });
    var ph = el("img", "dh__phone");
    ph.src = h.phone;
    ph.alt = p.alt || p.title;
    box.appendChild(ph);
    return box;
  }

  function renderDetail(mount) {
    var slug = new URLSearchParams(window.location.search).get("p");
    var p = projects.filter(function (x) { return x.slug === slug; })[0];

    if (!p) {
      document.title = "Project not found — Aezel Santillana";
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

    document.title = p.title + " — Aezel Santillana";

    if (p.study) { renderStudy(mount, p); return; }

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
