# Dropdown fade-down

**Status:** From code: values taken from the original site

**On Starface:** @keyframes animateMenuOpen: opacity 0 → 1 and translateY(−15px) → 0, over 0.2 s ease (--duration-default), fill-mode forwards. Used on desktop header submenus, the search modal and the share box whenever their details element opens.

**Mobile:** Header submenus only exist from 990 px, since under that the drawer takes over. The search modal and share box keep the same 0.2 s fade-down on phones.

Each submenu drops in from just above and fades up at the same time. It's short enough that it never gets in the way. Opening one closes the other.

## Use it
1. Load `../../tokens.css` (or copy its variables).
2. Copy the markup from `index.html`.
3. Add `style.css` and `script.js`.

Open `index.html` to see a live demo.
