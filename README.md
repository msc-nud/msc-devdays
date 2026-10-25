# GitHub Copilot Dev Days: Attendee Cards

Website for GitHub Copilot Dev Days at Microsoft Student Community NU Dasmariñas showing every attendee's card, built with [Astro](https://astro.build), Mona Sans, and GitHub-style design.

## Add your card

Fork the repo, add `src/content/cards/<your-github-username>.md` (copy `example-card.md`), and open a pull request. `github` is optional; `name`, `program`, and `bio` are required. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/msc-devdays/
npm run build
```

## Deploy

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Source: GitHub Actions**.