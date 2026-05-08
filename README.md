# Personal Site

React/Vite personal site for portfolio, resume, projects, and college work.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build writes static files to `dist/` and copies `index.html` to both `200.html` and `404.html` so direct routes such as `/resume` work on static hosts and GitHub Pages.

## Deploy

```bash
npm run deploy
```

The deploy script builds the site and publishes `dist/` to the `gh-pages` branch.
