# Portfolio (static HTML/CSS/JS)

No build step, no framework, no bundler. Just open `index.html` or push these files as-is to GitHub Pages.
[Click to see](https://superguine.github.io/Portfolio/)
## Files
- `index.html` — page shell
- `style.css` — all styling
- `data.js` — your content (name, projects, bio, etc.) — edit this to update the site
- `icons.js` — tool icon SVGs
- `app.js` — hash-based router (`#/`, `#/work`, `#/about`, `#/work/<slug>`) and page rendering
- `favicon.svg` — site icon

## Deploy to GitHub Pages
1. Push all these files to the ROOT of your repo (no subfolder).
2. Repo Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)`.
3. Done. No Actions workflow needed, no base path config, no build step.

Because routing uses `#/work` style hash URLs instead of real paths, there's no server-side routing needed and no 404-on-refresh issue — this works as plain static files anywhere, including GitHub Pages subpaths like `username.github.io/repo-name/`.
