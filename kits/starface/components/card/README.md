# Product card image swap

**Status:** From code: values taken from the original site

**On Starface:** component-card.css, from 990 px only: on hover a card with two images hides the first (opacity 0) and shows the second (opacity 1) scaled to 1.03 with transform 0.5 s ease (--duration-long). A card with one image just scales it to 1.03 over 0.5 s ease. Images fade with opacity 0.4 s cubic-bezier(.25, .46, .45, .94). Card corners 26 px.

**Mobile:** No hover effect under 990 px: the whole swap-and-zoom block is inside @media (min-width: 990px), so phones and tablets always show the first image.

Hover a product to see it from a second angle, with a slight zoom. The swap is instant on the way in and fades back over 0.4 s on the way out, because the hover rule swaps the transition for transform only. The right-hand card has one image, so it only zooms. Keyboard focus does the same as hover.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css`.

Open `index.html` to see a live demo.
