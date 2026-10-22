# Draggable genre stickers

**Status:** From code: values taken from the original site

**On FC Hyena:** Genre tags (HORROR, Documentaire, KINDERFILMS…): each is tilted (7°, −5°…) and gets its own brand colour. They pop in from scale 0 with a spring (bounce .5, 0.6 s) once fully on screen, grow to scale 1.1 and tilt to 4° on hover (spring .45 s), shrink to 0.9 when pressed, and can be dragged with no momentum.

**Mobile:** Phones keep dragging (no momentum) and the 0.9 press. On the site the hover grow and tilt don't fire on touch, because Framer's motion ignores touch pointers for hover. The kit keeps plain CSS :hover. Only the sticker positions change.

This is the playful part of FC Hyena. Grab a sticker and throw it around. The pop-in uses an overshoot curve to stand in for Framer's spring. Each sticker remembers where you dropped it and moves to the top when you pick it up.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
