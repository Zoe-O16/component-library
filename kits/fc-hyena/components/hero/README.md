# Hero slide-in + typewriter

**Status:** From code: values taken from the original site

**On FC Hyena:** Hero "Wij houden / Van film / Eten en wijn": lines move in from x −40 / +40 px over 1 s on ease (.44, 0, 0, 1), with delays of 2.4 s, 2.6 s and 2.8 s. A second line types itself out one character every 0.1 s, starting at 2.8 s, 3.0 s and 3.2 s.

**Mobile:** Same slide-in (±40 px, 1 s, delays 2.4, 2.6 and 2.8 s) and typewriter on phones. Only the headline size changes: 220 px from 1500 px up, then 180, 160, and 85 px under 810 px.

On the real site this runs after the 2.4-second intro. Change --hy-start to 0s to skip that wait. Lines only move sideways, they never fade, so the text can always be read. The typed letters appear one at a time with no fade.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
