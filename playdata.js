/* Playground projects. Placeholders for now: each one gets a generated cover until real images arrive.
   Same fields as the old Passion projects list: title, line, kind (and later img, href). */
var PLAY = [
  { title: "Salo Salo Events", kind: "Vibe-coded web app", cover: "salo", href: "https://salosaloevents.com",
    line: "A directory of party and event suppliers in Metro Manila, Cavite, Laguna and Batangas, with prices shown upfront.",
    status: "Waitlist open, launching early 2027", tools: "Next.js, Supabase, Netlify, Claude Code", year: "2026",
    overview: ["Salo Salo Events is a directory where families planning a debut, binyag, birthday or wedding can find local suppliers, from caterers and cake makers to hosts, photobooths and venues.",
               "Suppliers list for free and show their prices and packages upfront. Families send an inquiry straight from the listing."],
    process: ["I'm building it myself with Claude Code, one feature at a time: the coming soon page and waitlist, the supplier directory, inquiries, and supplier accounts with Facebook and Google sign-in. Admin pages come next.",
              "Alongside the build I run the Facebook page and reach out to suppliers, so the directory has real listings before it opens to families."],
    outcome: ["The coming soon page and the supplier waitlist are live at salosaloevents.com. The full directory opens to families in early 2027."] },
  { title: "Wolf in halftone", kind: "3D · WebGL", line: "Placeholder for a low-poly character study." },
  { title: "Signal garden", kind: "Generative", line: "Placeholder for a generative pattern experiment." },
  { title: "Pocket synth", kind: "Vibe-coded app", line: "Placeholder for a small browser instrument." },
  { title: "Night shift", kind: "3D modeling", line: "Placeholder for a moody room render." },
  { title: "Type in motion", kind: "Motion", line: "Placeholder for a kinetic type sketch." },
  { title: "Paper planets", kind: "Illustration", line: "Placeholder for a soft-shaded illustration set." },
  { title: "Glitch mirror", kind: "Webcam toy", line: "Placeholder for a camera filter prototype." },
  { title: "Mono icons", kind: "Icon set", line: "Placeholder for a monoline icon family." },
  { title: "Tiny towns", kind: "3D modeling", line: "Placeholder for isometric building studies." },
  { title: "Prompt deck", kind: "AI prototype", line: "Placeholder for an AI-assisted brainstorming tool." },
  { title: "Grid lab", kind: "Layout study", line: "Placeholder for editorial grid explorations." },
  { title: "Pixel pets", kind: "Character design", line: "Placeholder for a set of pixel characters." }
];
/* generated placeholder cover for experiment i, drawn on a 480x300 design grid at any size */
var PAL = [["#5400D2", "#8B5CF6"], ["#1B1B2E", "#5F77FF"], ["#E1275B", "#5400D2"], ["#0F0F14", "#2A2A3A"], ["#5F77FF", "#B7C4FF"], ["#16161C", "#8B5CF6"],
             ["#2B0A57", "#E1275B"], ["#101018", "#3B3B52"], ["#8B5CF6", "#F0EAFF"], ["#0B1A2E", "#5F77FF"], ["#1A1A1A", "#4A4A4A"], ["#3A0CA3", "#5F77FF"]];
function makeCover(i, w, h) {
  var c = document.createElement("canvas"); c.width = w || 480; c.height = h || 300; var g = c.getContext("2d"), p = PLAY[i];
  g.scale(c.width / 480, c.height / 300);
  if (p && p.cover === "salo") return saloCover(c, g);
  var sd = 97 + i * 131; function R() { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; }
    var pal = PAL[i % PAL.length], gr = g.createLinearGradient(0, 0, 480, 300); gr.addColorStop(0, pal[0]); gr.addColorStop(1, pal[1]);
    g.fillStyle = gr; g.fillRect(0, 0, 480, 300);
    var k = i % 4; g.save();
    if (k === 0) { /* low-poly shards */
      for (var n = 0; n < 26; n++) { g.globalAlpha = .12 + R() * .35; g.fillStyle = R() < .5 ? "#fff" : pal[0]; g.beginPath();
        var x = R() * 480, y = R() * 300; g.moveTo(x, y); g.lineTo(x + (R() - .5) * 220, y + (R() - .5) * 160); g.lineTo(x + (R() - .5) * 220, y + (R() - .5) * 160); g.fill(); }
    } else if (k === 1) { /* halftone sphere */
      for (var yy = 8; yy < 300; yy += 14) for (var xx = 8; xx < 480; xx += 14) {
        var d = Math.hypot(xx - 240, yy - 150) / 130, r = Math.max(0, (1 - d) * 6.2); if (r > .2) { g.fillStyle = "rgba(255,255,255,.85)"; g.beginPath(); g.arc(xx, yy, r, 0, 7); g.fill(); } }
    } else if (k === 2) { /* rings */
      g.strokeStyle = "rgba(255,255,255,.55)"; for (var q = 0; q < 9; q++) { g.lineWidth = 1 + q % 3; g.beginPath(); g.arc(240 + (R() - .5) * 60, 150, 20 + q * 16, 0, 7); g.stroke(); }
    } else { /* blocks */
      for (var b = 0; b < 40; b++) { g.globalAlpha = .15 + R() * .6; g.fillStyle = R() < .3 ? "#fff" : pal[1]; var s = 12 * (1 + Math.floor(R() * 4)); g.fillRect(Math.floor(R() * 40) * 12, Math.floor(R() * 25) * 12, s, s); }
    }
    g.restore();
    return c;
}

/* Salo Salo Events cover: the brand's cream, terracotta and mustard, a table of plates seen from above, and the name */
function saloCover(c, g) {
  g.fillStyle = "#fbf7f0"; g.fillRect(0, 0, 480, 300);
  var cols = ["#b5523b", "#c9921a", "#4f7a4a", "#b5523b", "#c9921a", "#7a4a6e"];
  g.fillStyle = "#f3ddd5"; g.beginPath(); g.ellipse(240, 150, 200, 112, 0, 0, 7); g.fill();
  for (var k = 0; k < 10; k++) {
    var a = k / 10 * Math.PI * 2 - Math.PI / 2, x = 240 + Math.cos(a) * 168, y = 150 + Math.sin(a) * 88;
    g.fillStyle = "#ffffff"; g.beginPath(); g.arc(x, y, 19, 0, 7); g.fill();
    g.strokeStyle = "#e8dfd3"; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 13, 0, 7); g.stroke();
    g.fillStyle = cols[k % cols.length]; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill();
  }
  g.fillStyle = "#2a211c"; g.textAlign = "center"; g.textBaseline = "middle";
  g.font = "600 44px 'PP Mori', 'Helvetica Neue', Arial, sans-serif"; g.fillText("Salo Salo", 240, 138);
  g.fillStyle = "#b5523b"; g.font = "400 13px 'PP Supply Mono', ui-monospace, monospace";
  if ("letterSpacing" in g) g.letterSpacing = "4px"; g.fillText("EVENTS", 242, 176);
  return c;
}
