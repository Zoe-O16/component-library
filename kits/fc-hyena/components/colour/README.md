# Random colour per visit

**Status:** From code: values taken from the original site

**On FC Hyena:** Allinone2 override: every visit picks one of 5 colours (lime #A0DC00, orange #FFA000, cyan #00BEE6, red #DC0000, yellow #FFE100) and applies it to text, frames, borders and icons

FC Hyena's signature move: the whole site gets a new accent colour each time you open it. It's one CSS variable set when the page loads, and every accented element reads that variable. Text on red gets switched to white so it stays readable.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
