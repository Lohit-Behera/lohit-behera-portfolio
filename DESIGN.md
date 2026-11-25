# Design: "Schematic" (direction B, chosen by Lohit)

Index page only; /print/ keeps the legacy PDF styling (tokens ink/accent/accent-2/font-sans stay in global.css for it). Railway variant: ../site-variant-railway.

## World
A working system drawing on graphite. The hero is a pipeline diagram (PDFs, XLSX, scans -> RAG, LLM, MCP -> Web, iOS, Android, desktop). Sections are measured sheets: hairline rules, mono spec labels, dimension lines over screenshots. One signal colour, used for actions and for the signal moving through the system.

## Tokens (@theme in src/styles/global.css)
sch-bg #0f1214 · sch-bg2 #151a1d · sch-line #283035 · sch-line2 #3a4448 · sch-tx #e8eae5 · sch-tx2 #a2aaab (7.6:1) · sig #ff6b2c / sig2 #ff8a55 (actions, signal) · live #4cd38a (availability dot only) · ease-out-expo cubic-bezier(.16,1,.3,1)

## Type
Familjen Grotesk Variable (display 600, -0.035em; body 400) and Martian Mono 400/500 for labels, prices, dates, tech lists and numbers (data only). Fontsource, latin subsets, both preloaded.

## Signature + motion
- Focal: the diagram draws itself (wires stroke in, nodes switch on, numbered callouts land), then a signal packet runs from document to shipped app on loop; the loop only runs while the diagram is on screen and the tab is visible. Phone gets a vertical diagram.
- The four work numbers are the diagram's numbered callouts, listed in a "By the numbers" legend (replaces the 4-stat template row).
- Products: dimension line extends over each screenshot, screenshot scans in top-down.
- AI work + experience rows: an orange signal trace passes along the row's rule once, then fades.
- Feedback: arrow nudge, 1px press, service row tint + price turns orange, nav underline marks the current section.
- prefers-reduced-motion: everything static and fully visible, no packet, no traces/scans.

## Bans kept
No eyebrows above headings, no card grids, no gradient text, no glass, no grid-line background, no pulsing dots, no marquee.
