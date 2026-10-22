# Hero text parallax

**Status:** From code: values taken from the original site

**On FC Hyena:** Hero "Text overlay" uses Framer's scroll parallax at speed 110, which means it moves 10% faster than the page as you scroll

**Mobile:** No phone override. The text overlay keeps speed 110 at every breakpoint.

The headline glides slightly faster than the photo behind it, so it seems to float off the image. Scroll inside the box to try it. Set data-speed to anything other than 100 (above 100 is faster, below is slower).

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
