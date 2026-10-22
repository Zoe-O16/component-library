# Footer word ticker

**Status:** Partly guessed: some timing was not in the original code

**On FC Hyena:** "Footer ticker": a component that cycles through 3 variants (text versions) on its own, using ease (.5, 0, 0, 1). The 2.2-second interval is my guess.

The last word of the footer line keeps changing. Each word slides up and out, and the next slides in from below. Screen readers hear the full list once and not each change.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
