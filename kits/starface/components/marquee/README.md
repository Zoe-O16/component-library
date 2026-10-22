# Yellow marquee

**Status:** From code: values taken from the original site

**On Starface:** Product page marquee (section-main-product.css): two copies of the content each move translate(0) → translate(−100%) with @keyframes scrolling, 30 s linear infinite (the copy starts 0.01 s later). The track is 55 px high on a yellow rounded band (26 px), headings 22 px lowercase, small text 16 px, items spread with space-around.

**Mobile:** Under 750 px the theme shows a separate .marquee-mobile block instead of .marquee. The same scrolling keyframes apply, but the mobile block's own sizes weren't checked.

A slow ribbon of words that never stops. Because each copy is exactly as wide as the band, the loop has no seam. The second copy is hidden from screen readers.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css`.

Open `index.html` to see a live demo.
