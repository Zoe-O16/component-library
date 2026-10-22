# Component Library

Motion kits studied from websites I love and rebuilt as drop-in HTML, CSS and JS with no libraries. Open `index.html` to browse all kits. On GitHub Pages it's the site's home page.

## Kits
| Kit | Source | Components | Library page |
|---|---|---|---|
| [FC Hyena](kits/fc-hyena/) | fchyena.nl | 10 | [FC Hyena Motion](https://claude.ai/artifact/U8Bx86aAQqnx89BgxNYeHS) |

## Layout
```
index.html                    collection page (lists every kit)
kits/<slug>/index.html        kit overview: live demos + copy buttons
kits/<slug>/README.md         source, signature, component table
kits/<slug>/tokens.css        colours, fonts, easing for the kit
kits/<slug>/components/<id>/  index.html (demo), style.css, script.js, README.md
```

## Adding a kit
Every site gets its own kit folder and its own library page (a Claude Design System artifact named "<Site> Motion").
1. Make `kits/<slug>/` with the same layout.
2. Publish the kit's own "<Site> Motion" library page.
3. Add an entry to `KITS` in `index.html` (with its `library` link) and a row to the table above.

Every component is rebuilt from scratch. No original images, logos or copy are included.
