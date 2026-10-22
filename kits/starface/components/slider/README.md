# Slider arrows and dots

**Status:** From code: values taken from the original site

**On Starface:** component-slider.css + SliderComponent (global.js): slides snap with scroll-snap-type x mandatory and the buttons move by one slide with scrollTo({behavior:'smooth'}). The 44 px arrow buttons are chevrons rotated ±90°; on hover the icon jumps to scale(1.1) with no transition. The 10 px dots and number links ease with transform 0.2 s ease-in-out to scale(1.1) on hover and when active. Arrows are disabled at the ends.

**Mobile:** Under 750 px the dot links get 7 px padding instead of 10 px. Whether arrows show depends on the slider's class: slider--mobile hides them from 750 px, slider--desktop hides them under 990 px.

Arrows and dots for a row of products. Scroll with the arrows, the dots or by swiping, and the active dot follows. The arrow hover is a hard snap on the site, so the kit leaves it without a transition as well.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
