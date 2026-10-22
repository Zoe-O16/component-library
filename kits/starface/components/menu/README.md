# Menu drawer

**Status:** From code: values taken from the original site

**On Starface:** menu-drawer: the panel sits at translateX(−100%) with visibility hidden. Opening sets [open], then adds .menu-opening, and it slides to 0 with transform 600 ms ease, visibility 300 ms ease. It is full width with the right corners rounded 26 px. Closing removes .menu-opening and takes [open] off 400 ms later (a requestAnimationFrame timer), so the slide-out gets cut short.

**Mobile:** This is the menu under 990 px, opening full width. From 990 px the header shows its links inline, and their submenus use the dropdown fade-down.

Starface's phone and tablet menu. Tap menu and a black panel slides in from the left edge. The menu is a native details element, so it still opens without the script.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
