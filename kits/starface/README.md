# Starface motion kit

Source: [starface.world](https://starface.world/), a Shopify shop on the Dawn theme with no animation library. Studied 2026-10-22 from the theme's own CSS and JS and rebuilt from scratch in plain HTML, CSS and JS, with no libraries. No original images, logos or copy are included.

- **Overview page:** [index.html](index.html), the live gallery with copy buttons
- **Tokens:** [tokens.css](tokens.css)
- **Library page:** [Starface Motion](https://claude.ai/artifact/7YTgq1X8VhANRXSa18Jg2X), the overview page with live demos, published in Claude

## Signature
- Black body, a loud yellow `#FDFF00`, and side colours pink `#FF00D3`, blue `#00BFFA`, green `#26BA28`, purple `#9B74E7` and red `#FF3C3A`
- Everything rounded: 26 px on media and cards, 25 px on buttons. Headings are lowercase.
- Short, plain timing: `--duration-short` 0.1 s, `--duration-default` 0.2 s, `--duration-long` 0.5 s, nearly always on `ease`. Drawers take 0.6 s.
- Dawn sets `html{font-size:62.5%}`, so 1rem on the site is 10 px. The kit gives every value in pixels.
- Fonts on the site: ABC Diatype Rounded Heavy/Black and GT Pressura Mono (paid). The kit uses Nunito and Space Mono instead.

## Mobile
- Breakpoints from the theme: phone under 750 px, tablet 750 to 989, desktop from 990 px (`--bp-*` in [tokens.css](tokens.css)).
- What changes on phones: the header hides on scroll down and comes back on scroll up (under 990 px only), the menu becomes the slide-in drawer, the bag fills the whole screen, the product card hover swap is turned off (under 990 px), and the marquee uses a separate mobile block.
- Every component README has a **Mobile** line, and the overview page has a Desktop / Mobile switch that shows each demo at 390 px.

## Components
| Component | Status | What it does |
|---|---|---|
| [Announcement carousel](components/announce/) | From code | A thin bar that swaps its message every five seconds, sliding right to left. |
| [Hide-on-scroll header](components/header/) | From code | On phones the header hides when you scroll down and slides back when you scroll up. |
| [Menu drawer](components/menu/) | From code | The phone and tablet menu slides in from the left over 0.6 s. |
| [Dropdown fade-down](components/dropdown/) | From code | Submenus drop 15 px and fade in over 0.2 s. |
| [Cart drawer](components/cart/) | From code | The bag slides in from the left, 400 px wide on desktop and full screen on phones. |
| [Product card image swap](components/card/) | From code | On hover a product shows its second image with a 1.03 zoom (desktop only). |
| [Yellow marquee](components/marquee/) | From code | A yellow band of words scrolling at 30 s per loop. |
| [Star confetti burst](components/confetti/) | From code | 100 stars burst from the centre when you unlock the free gift. |
| [Slider arrows and dots](components/slider/) | From code | Snap slider with smooth arrow scrolling and dots that grow to 1.1. |
| [Cart line spinner](components/spinner/) | From code | Dawn's 18 px spinner while a cart line updates. |
