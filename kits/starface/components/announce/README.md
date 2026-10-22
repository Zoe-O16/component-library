# Announcement carousel

**Status:** From code: values taken from the original site

**On Starface:** Announcement bar above the header (inline theme script): each message waits off to the right at translateX(100%), slides to 0 and leaves to −100% with transform 0.3 s ease-in-out. It rotates every 5 s (delaySeconds = 5). The bar is at least 34 px high with 14 px text. A message that has left snaps back to the right once its transition ends.

**Mobile:** Same on every screen size: the script has no breakpoint logic and the bar keeps its 34 px height and 14 px text.

A thin bar that swaps its message every five seconds. Every message slides in from the right and pushes the old one out to the left. The first message is in place before any script runs, and the hidden ones are kept from screen readers until their turn.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
