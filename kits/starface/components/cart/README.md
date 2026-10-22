# Cart drawer

**Status:** From code: values taken from the original site

**On Starface:** cart-drawer: .drawer__inner starts at translate(−100%) and moves to 0 with transform 0.6 s ease once .active is added (in a setTimeout after opening). The backdrop is the foreground colour at 50% and only toggles visibility over 0.2 s ease. From 750 px the panel is pinned left, 400 px wide (w-[40rem]), with 20 px rounded right corners.

**Mobile:** Under 750 px the bag fills the whole screen (min-w-[100vw]), with square corners and centred. The slide is still 0.6 s ease from translate(−100%).

The bag slides in from the left, not the right as on most shops. Close it with the ×, by clicking the backdrop or with Escape. Because the backdrop hides after 0.2 s, closing is a quick cut and not a slide back out, just like on the site.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
