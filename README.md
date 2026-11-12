# Cozard — studio website

Marketing site for Cozard, built from the "Cozard — Homepage" design on the Doop canvas.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · Bun

```bash
bun install
bun dev        # local dev server
bun run build  # type-check + production build
bun run lint
```

## Structure

```
src/
├─ assets/
│  ├─ asset.ts              # the ONLY place assets are imported; everything else imports from here
│  ├─ brand/                # Cozard mark, client marks (Fernhouse demo store)
│  ├─ icons/                # custom icons (double arrow)
│  ├─ illustrations/work/   # project illustrations (imported as React components via svgr)
│  ├─ images/showcase/      # product photography for the device mockups
│  └─ logos/tech/           # technology logos used in chips
├─ components/
│  ├─ layout/               # Navbar, Footer, Logo
│  └─ ui/                   # Button, Chip, Reveal, HandNote, DashedArrow, CountUp…
├─ data/content.ts          # all copy: services, toolbox, process, projects, standards, footer
├─ hooks/                   # useTypewriter, useScaleToFit
├─ lib/                     # motion presets, cn()
├─ sections/                # one file per page section (+ showcase/ for the MacBook + iPhone mockup)
└─ styles/index.css         # Tailwind import + design tokens (@theme)
```

## Conventions

- **Assets:** add the file under `src/assets/<kind>/`, import and export it in `asset.ts`, then use
  `import { techLogos, images, illustrations, brand, icons } from '../assets/asset'`.
  Never import an asset file path directly from a component.
- **Design tokens** live in `src/styles/index.css` under `@theme` (`bg-paper`, `text-graphite`,
  `text-pen`, `shadow-hard`, `font-hand`, `ease-soft`…). Use them instead of raw hex values.
- **UI icons** come from `lucide-react`.
- **Animation** uses `motion/react`; `<MotionConfig reducedMotion="user">` respects the OS setting.
