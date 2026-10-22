# Swinging menu blocks

**Status:** From code: values taken from the original site

**On FC Hyena:** Menu Final: the colour blocks (BlockCinema yellow, BlockPetitResto orange, BlockAbout…) start rotated −90° around their top-left corner and swing down to 0°, each one triggered 200 ms after the last, over 2 s, 1.7 s and 1.3 s on ease (.5, 0, 0, 1), so they land almost together. The highlighted block tilts −6°.

**Mobile:** Under 810 px the menu opens full width with 20 px padding, and each block swings in over 0.8 s on ease (.5, 0, 0, 1), still 200 ms apart (variants 4, 5, 6 instead of 1, 2, 3).

Open the menu and the blocks swing down from the top-left corner like signs on a hinge. Hover over a block and it tilts a little.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
