# SPS Landing — Tailwind Template

This repository is scaffolded to build a responsive landing page similar to the screenshot you shared. It uses Tailwind CSS and a small JS file for interactions.

Important notes:
- Place your exact images into `assets/images/` and name them `hero.jpg` (for the large hero image) and `logo.png` (for the header logo). I used these filenames in `index.html` as placeholders.
- Tailwind is already in `devDependencies`. Run the build/watch scripts below to generate `assets/output.css` which `index.html` references.

Place images
- Copy your exact images into `assets/images/` and name them exactly:
	- `hero.jpg` — hero/hero-section image
	- `logo.png` — site logo used in the header

Development (PowerShell)

```powershell
npm install
npm run dev    # Tailwind watch — regenerates assets/output.css while you edit
```

Build for production

```powershell
npm run build
```

Preview built site (serves the folder statically)

```powershell
npm run preview
```

Notes
- `index.html` currently references `assets/output.css` (the built Tailwind CSS). It also includes a CDN fallback to preview without building, but for production always run `npm run build`.
- After you copy the images into `assets/images/`, run `npm run build` (or `npm run dev`) and then `npm run preview` to view the final site locally at `http://localhost:3000` (or the port `serve` displays).

What I will do next when images are placed
- Rebuild CSS if needed and verify exact styling.
- Fine-tune spacing, typography, overlay positions and colors to match the screenshot pixel-for-pixel.
- Test responsiveness across breakpoints and finalize small interactions (hover transitions, focus rings).
- Provide a final summary and optional zip of the project for download.
