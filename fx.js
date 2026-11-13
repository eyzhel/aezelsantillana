/* Ambient background: faint glowing dots on every page, plus a soft comet of
   light that follows the cursor. Sits behind the content and never blocks clicks.
   Reduced motion: still dots only. Touch screens: dots only. */
(function () {
  "use strict";
  var canvas = document.createElement("canvas");
  canvas.className = "fx";
  canvas.setAttribute("aria-hidden", "true");
  document.body.insertBefore(canvas, document.body.firstChild);
  document.documentElement.classList.add("has-fx");
  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var W = 0, H = 0, dpr = 1, dots = [];
  /* the three colours of the logo: pink, violet, blue */
  var PAL = [[225, 39, 91], [150, 96, 255], [95, 119, 255]];

  function sprite(rgb, size) {
    var c = document.createElement("canvas");
    c.width = c.height = size;
    var g = c.getContext("2d");
    var r = size / 2;
    var gr = g.createRadialGradient(r, r, 0, r, r, r);
    gr.addColorStop(0, "rgba(" + rgb + ",1)");
    gr.addColorStop(.25, "rgba(" + rgb + ",.55)");
    gr.addColorStop(1, "rgba(" + rgb + ",0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, size, size);
    return c;
  }
  var dotSprite = sprite("170,190,255", 32);

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.max(24, Math.min(110, Math.round(W * H / 16000)));
    dots = [];
    for (var i = 0; i < n; i++) {
      dots.push({
        x: Math.random() * W, y: Math.random() * H,
        r: 1.2 + Math.random() * 2.6,
        a: .10 + Math.random() * .34,
        p: Math.random() * 6.283, s: .25 + Math.random() * .7,
        vx: (Math.random() - .5) * 4, vy: -1 - Math.random() * 4
      });
    }
  }

  /* cursor comet */
  var mx = -1, my = -1, hx = 0, hy = 0, seen = false, energy = 0, orb = 0, inside = false, trail = [], lastMove = 0;
  if (hover && !calm) {
    window.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      mx = e.clientX; my = e.clientY; lastMove = performance.now(); inside = true;
      if (!seen) { seen = true; hx = mx; hy = my; }
    }, { passive: true });
    document.addEventListener("mouseleave", function () { lastMove = 0; inside = false; });
  }

  function colour(t) {
    var k = (t / 5000) % PAL.length, i = Math.floor(k), f = k - i;
    f = f * f * (3 - 2 * f);
    var a = PAL[i], b = PAL[(i + 1) % PAL.length];
    return [Math.round(a[0] + (b[0] - a[0]) * f), Math.round(a[1] + (b[1] - a[1]) * f), Math.round(a[2] + (b[2] - a[2]) * f)];
  }

  var last = 0, running = false;
  function frame(t) {
    if (!running) return;
    var dt = Math.min(.05, (t - last) / 1000 || 0); last = t;
    ctx.clearRect(0, 0, W, H);

    /* dots: slow upward drift and a gentle twinkle */
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      if (!calm) {
        d.x += d.vx * dt; d.y += d.vy * dt;
        if (d.y < -8) { d.y = H + 8; d.x = Math.random() * W; }
        if (d.x < -8) d.x = W + 8; else if (d.x > W + 8) d.x = -8;
      }
      var tw = calm ? 1 : .6 + .4 * Math.sin(t / 1000 * d.s + d.p);
      ctx.globalAlpha = d.a * tw;
      var s = d.r * 4;
      ctx.drawImage(dotSprite, d.x - s / 2, d.y - s / 2, s, s);
    }

    if (seen) {
      var px = hx, py = hy;
      var ease = 1 - Math.pow(.0009, dt);
      hx += (mx - hx) * ease; hy += (my - hy) * ease;
      var speed = Math.hypot(hx - px, hy - py) / (dt || .016);
      var target = (t - lastMove < 900) ? Math.min(1, speed / 500) : 0;
      energy += (target - energy) * (target > energy ? .14 : .035);
      trail.push(hx, hy);
      if (trail.length > 52) trail.splice(0, 2);
      /* when the cursor settles, the light gathers into a bright orb:
         full for a few seconds, then it rests at a soft glow */
      var idle = t - lastMove;
      var orbT = !inside ? 0 : (idle < 3500 ? 1 : .4);
      orbT *= 1 - Math.min(1, energy * 1.3);
      orb += (orbT - orb) * (orbT > orb ? .06 : .03);
      if (energy > .01 || orb > .01) {
        var c = colour(t), rgb = c.join(",");
        var lit = Math.min(255, c[0] + 110) + "," + Math.min(255, c[1] + 110) + "," + Math.min(255, c[2] + 110);
        ctx.globalCompositeOperation = "lighter";
        /* wide soft halo */
        var hr = 190;
        var hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, hr);
        hg.addColorStop(0, "rgba(" + rgb + "," + (.2 * Math.max(energy, orb)).toFixed(3) + ")");
        hg.addColorStop(1, "rgba(" + rgb + ",0)");
        ctx.globalAlpha = 1; ctx.fillStyle = hg;
        ctx.fillRect(hx - hr, hy - hr, hr * 2, hr * 2);
        /* tail to head: small and faint, growing bright */
        var n = trail.length / 2;
        for (var j = 0; j < n; j++) {
          var k = (j + 1) / n, x = trail[j * 2], y = trail[j * 2 + 1];
          var r = 6 + 30 * k * k;
          var g = ctx.createRadialGradient(x, y, 0, x, y, r);
          var al = .34 * k * k * energy;
          g.addColorStop(0, "rgba(" + Math.min(255, c[0] + 70) + "," + Math.min(255, c[1] + 70) + "," + Math.min(255, c[2] + 70) + "," + al.toFixed(3) + ")");
          g.addColorStop(1, "rgba(" + rgb + ",0)");
          ctx.fillStyle = g;
          ctx.fillRect(x - r, y - r, r * 2, r * 2);
        }
        if (orb > .01) {
          var pulse = 1 + .05 * Math.sin(t / 700);
          var or = 58 * pulse;
          var og = ctx.createRadialGradient(hx, hy, 0, hx, hy, or);
          og.addColorStop(0, "rgba(" + lit + "," + (.85 * orb).toFixed(3) + ")");
          og.addColorStop(.22, "rgba(" + lit + "," + (.5 * orb).toFixed(3) + ")");
          og.addColorStop(.55, "rgba(" + rgb + "," + (.2 * orb).toFixed(3) + ")");
          og.addColorStop(1, "rgba(" + rgb + ",0)");
          ctx.fillStyle = og;
          ctx.fillRect(hx - or, hy - or, or * 2, or * 2);
        }
        ctx.globalCompositeOperation = "source-over";
      }
    }
    ctx.globalAlpha = 1;
    if (calm) { running = false; return; }
    requestAnimationFrame(frame);
  }
  function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }

  resize();
  start();
  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { resize(); if (calm) start(); }, 150); }, { passive: true });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
})();
