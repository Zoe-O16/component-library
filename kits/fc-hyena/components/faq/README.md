# FAQ accordion

**Status:** From code: values taken from the original site

**On FC Hyena:** Veelgestelde vragen (Accordion / FAQ components): open and close use 0.4 s on ease (.44, 0, .23, .98), and the button changes between Open and Close

**Mobile:** Same 0.4 s open and close on phones. The site swaps in a "FAQ mobile" layout where the question sits above a full-width answer, with 20 px top padding.

The question row is a button. The answer opens with a smooth height change using the 0fr to 1fr grid trick, and the + turns into ×. Only one answer is open at a time.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
