# Cart line spinner

**Status:** From code: values taken from the original site

**On Starface:** component-loading-overlay.css: an 18 px SVG spinner (Dawn's). The svg turns 0 → 270° with rotator, 1.4 s linear infinite. The circle's stroke (dasharray 280) runs dash, 1.4 s ease-in-out infinite: dashoffset 280 → 75 (rotate 135°) → 280 (rotate 450°). While it shows, the line's price drops to opacity 0.5 and the remove button stops responding. On phones it sits top right, from 750 px on the left.

**Mobile:** Under 750 px the spinner sits at the top right of the line (top:0; right:0). From 750 px it sits on the left. The animation is the same.

Change the quantity and the line shows a small spinner while the cart updates. The two rotations at different speeds make the arc look like it chases itself. Here the update is faked with a 1.2-second wait.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
