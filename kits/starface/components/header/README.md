# Hide-on-scroll header

**Status:** From code: values taken from the original site

**On Starface:** StickyHeader (scripts.js): under 990 px, scrolling down past the header adds .shopify-section-header-hidden (translateY(−100%)) and makes it sticky. Scrolling up adds .animate and removes hidden, so it slides back with transform 0.15 s ease-out. Back at the top, all classes are removed and the header sits in the page again.

**Mobile:** Phone and tablet only. The script checks window.innerWidth < 990, so from 990 px the header simply scrolls away with the page and never slides back.

On a phone the header gets out of the way while you read and comes back as soon as you scroll up a little. Scroll inside the box to try it. On Starface this only runs under 990 px (set data-max="990"). The demo uses data-max="9999" so it also works at desktop width.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
