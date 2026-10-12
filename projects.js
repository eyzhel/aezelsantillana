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
     alt       Describe the screenshot for screen readers and when images fail.
     tags      Short list of skills or deliverables.
     link      OPTIONAL. A live site URL — adds a "Visit live site" button
               on the detail page. Delete the line if there isn't one.
     sections  The detail page body. Each { heading, body } becomes one
               block. Add or remove as many as you like.
     gallery   OPTIONAL. More images on the detail page.
               Delete the line if you only have the one screenshot.
   ========================================================================= */

window.PROJECTS = [

  {
    slug: "project-one",
    title: "Project name",
    client: "Client name",
    year: "2025",
    role: "UX Research, UI Design",
    summary: "One or two sentences on the problem and what changed.",
    image: "images/placeholder-1.svg",
    alt: "Placeholder artwork — replace with a screenshot of your project",
    tags: ["UX Research", "UI Design", "Figma"],
    sections: [
      {
        heading: "The brief",
        body: "What was the client trying to do, and what was getting in the way? Write this the way you'd explain it to someone over coffee — no jargon needed."
      },
      {
        heading: "What I did",
        body: "Walk through your process. Research, sitemaps, wireframes, prototypes, handoff — whatever actually happened. This is the part hiring managers read most closely."
      },
      {
        heading: "The outcome",
        body: "What shipped, and what difference did it make? Numbers help if you have them, but a clear description of the result works too."
      }
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
  function renderGrid(mount) {
    if (!projects.length) {
      mount.appendChild(el("p", "pj-empty", "No projects listed yet."));
      return;
    }


    var grid = el("div", "pj-grid");

    projects.forEach(function (p) {
      var card = el("article", "pj");

      var media = el("a", "pj__media");
      media.href = "project.html?p=" + encodeURIComponent(p.slug);
      media.setAttribute("tabindex", "-1");
      media.setAttribute("aria-hidden", "true");

      var img = el("img");
      img.src = p.image;
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
      grid.appendChild(card);
    });

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
    fitTags();
    window.addEventListener("resize", fitTags, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTags);
    window.addEventListener("load", fitTags);
  }

  /* ---------- detail page ---------- */
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

    var crumb = el("a", "pd__back", "← All projects");
    crumb.href = "index.html#projects";
    mount.appendChild(crumb);

    var head = el("header", "pd__head");
    var meta = el("p", "pd__meta eyebrow");
    meta.textContent = [p.client, p.year].filter(Boolean).join(" · ");
    head.appendChild(meta);
    head.appendChild(el("h1", "pd__title", p.title));
    if (p.summary) head.appendChild(el("p", "pd__summary", p.summary));
    mount.appendChild(head);

    var hero = el("figure", "pd__hero");
    var img = el("img");
    img.src = p.image;
    img.alt = p.alt || p.title;
    hero.appendChild(img);
    mount.appendChild(hero);

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
    var grid = document.getElementById("projectGrid");
    if (grid) renderGrid(grid);
    var detail = document.getElementById("projectDetail");
    if (detail) renderDetail(detail);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
