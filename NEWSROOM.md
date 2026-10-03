# SuperRobots newsroom

The homepage is a China-focused robotics news edition in English. The former
coding homepage remains at `learn.html`. Games, tutorials, and team pages retain
their existing URLs. This repository is a static site, without a React or Express
application, package installation, or a runtime backend.

## Updating an edition

1. Read and verify original Chinese news reports or primary technical sources.
2. Edit `content/robotics-news.json`: set the edition date, select a featured
   story, and write concise English summaries with source links and source dates.
3. Keep company claims attributed. Distinguish announcements, demonstrations,
   released features, and future plans. Do not copy full articles.
   Each story must have a relevant local image in `assets/news/`, descriptive
   English alt text, a caption, and linked credit in its `image` metadata.
   Keep the original image URL and any applicable license notices. Optimize
   images as WebP; use `fit: "contain"` for posters or diagrams to avoid cropping
   text. The build rejects stories with missing images or incomplete metadata.
4. Run `node scripts/build-news.cjs` to regenerate the homepage, individual
   English briefs in `news/`, `news-feed.xml`, and the sitemap. Commit the source
   content and generated pages together.

This is a curated edition, not a live scraped feed. Its public review date is the
edition date; viewing the page does not refresh its stories. No API key, account,
or translation service is required at runtime. All briefs are readable without
JavaScript; JavaScript enables local topic and keyword filtering.

## Publishing

Pushing `main` runs `.github/workflows/pages.yml`, regenerates the newsroom, and
publishes the root static site to `gh-pages`. The `scripts/` and `content/`
directories are excluded from publishing. The custom domain is in `CNAME`.

The existing learning RSS feed is `feed.xml`; robotics news uses `news-feed.xml`.
Serve the repository root with any static HTTP server for local preview.

## Shared visual theme

`site.css` owns the site-wide colors, fonts, and masthead. `news.css` and
`theme.css` style newsroom and learning layouts using those shared tokens.
The navigation markup lives in `scripts/site-header.cjs`. After changing it,
run `node scripts/apply-site-chrome.cjs` and `node scripts/build-news.cjs`
and commit the generated HTML together.
