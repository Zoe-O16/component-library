# FC Hyena motion kit

Source: [fchyena.nl](https://fchyena.nl/), a Framer site. Studied 2026-10-22 from the site's own code and rebuilt from scratch in plain HTML, CSS and JS, with no libraries. No original images, logos or copy are included.

- **Overview page:** [index.html](index.html), the live gallery with copy buttons
- **Tokens:** [tokens.css](tokens.css)
- **Library page:** [FC Hyena Motion](https://claude.ai/artifact/U8Bx86aAQqnx89BgxNYeHS), with live previews and tokens in Claude

## Signature
- One random brand colour per visit: `#A0DC00` `#FFA000` `#00BEE6` `#DC0000` `#FFE100`, on a black and white base
- Main ease `cubic-bezier(.44,0,0,1)`, springs for anything you can touch
- Fonts on the site: Rhode MediumCondensed and Aaux Pro (paid). The kit uses Big Shoulders Display and Instrument Sans instead.

## Mobile
- Breakpoints from the site: phone under 810 px, tablet 810 to 1199, desktop 1200 to 1499, large from 1500 px (`--bp-*` in [tokens.css](tokens.css)).
- Most motion is the same on phones. What changes: the menu blocks swing in faster (0.8 s each) at full width, the hero headline drops to 85 px, the FAQ stacks, and hover effects (sticker grow, ticket tilt, corner fold) don't fire on touch. Smooth scroll leaves touch scrolling native.
- Every component README has a **Mobile** line, and the overview page has a Desktop / Mobile switch that shows each demo at 390 px.

## Components
| Component | Status | What it does |
|---|---|---|
| [Random colour per visit](components/colour/) | From code | FC Hyena's signature move: the whole site gets a new accent colour each time you open it. |
| [Hero slide-in + typewriter](components/hero/) | From code | On the real site this runs after the 2.4-second intro. |
| [Hero text parallax](components/parallax/) | From code | The headline glides slightly faster than the photo behind it, so it seems to float off the image. |
| [Draggable genre stickers](components/stickers/) | From code | This is the playful part of FC Hyena. |
| [Swinging menu blocks](components/menu/) | From code | Open the menu and the blocks swing down from the top-left corner like signs on a hinge. |
| [Ticket button tilt](components/ticket/) | From code | Every "tickets" button and small link tilts on hover, like a ticket stub that's been knocked. |
| [Folded-corner sticker](components/corner/) | Partly guessed | The specials carry a little folded corner. |
| [Smooth scroll](components/smooth/) | From code | Scrolling on FC Hyena feels heavy and smooth because the page follows your wheel with a little lag. |
| [FAQ accordion](components/faq/) | From code | The question row is a button. |
| [Footer word ticker](components/ticker/) | Partly guessed | The last word of the footer line keeps changing. |
