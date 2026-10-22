# Smooth scroll

**Status:** From code: values taken from the original site

**On FC Hyena:** shared-lib "Smooth Scroll" (Lenis-style): the page eases toward your scroll position each frame, using value = lerp(value, target, 1 − e^(−60·lerp·dt))

Scrolling on FC Hyena feels heavy and smooth because the page follows your wheel with a little lag. Scroll inside the box to feel it. A lerp of 0.1 is the usual default. Lower values glide longer.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
