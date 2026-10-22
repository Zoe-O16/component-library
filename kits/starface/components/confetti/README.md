# Star confetti burst

**Status:** From code: values taken from the original site

**On Starface:** Free-gift modal (inline theme script) calls canvas-confetti 1.6.0 with particleCount 100, startVelocity 30, spread 360, shapes ['star'] from the centre (0.5, 0.5). The library defaults fill in the rest: decay 0.9, gravity 1, ticks 200, star radius 8/4 px, and colours #26ccff #a25afd #ff5e7e #88ff5a #fcff42 #ffa62d #ff36ff.

**Mobile:** Same burst on every screen size. The confetti is fixed to the viewport, so it fills a phone screen just the same.

When you unlock the free gift, 100 little stars burst out in every direction and drift down as they fade. Here it's a small canvas script with the same physics, so no library is needed. For a full-screen burst, give the canvas position:fixed and inset:0.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
