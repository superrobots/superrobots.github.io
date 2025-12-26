# GitHub Copilot Instructions for SuperRobots

## Repository Overview

This repository hosts the SuperRobots team website, a static site for FIRST LEGO League (FLL) Challenge Team #70620. The site showcases team members, projects, achievements, and provides contact information.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **No build framework**: This is a static HTML site with no build step
  - **Note**: The README is outdated and incorrectly mentions React, npm dependencies, and a `/src` folder that don't exist
- **Hosting**: GitHub Pages (deployed from `gh-pages` branch)
- **Deployment**: Automated via GitHub Actions (`.github/workflows/pages.yml`)

## Project Structure

```
/
├── index.html          # Main website file (all pages in one file)
├── images/             # Team photos, favicons, and assets
│   ├── awards/         # Award ceremony photos
│   └── robot/          # Robot design photos
├── videos/             # Team videos
├── CNAME               # Custom domain configuration (superrobots.org)
├── README              # Repository documentation
└── .github/
    └── workflows/
        └── pages.yml   # GitHub Pages deployment workflow
```

## Coding Conventions

### HTML
- Use semantic HTML5 elements
- Include proper accessibility attributes (alt text, ARIA labels where needed)
- Maintain consistent indentation (4 spaces)
- Keep all content in `index.html` with tab-based navigation

### CSS
- Use inline `<style>` tags in the `<head>` section
- Follow existing naming conventions (kebab-case for classes)
- Maintain the current color scheme:
  - Primary: `#263159` (dark blue)
  - Background: `#f4f8fb` (light blue)
  - Accent: `#e6eaf3` (light gray-blue)
- Responsive design using flexbox and grid

### JavaScript
- Use vanilla JavaScript (no frameworks or libraries)
- Place scripts at the end of `<body>` in `<script>` tags
- Use modern ES6+ syntax where appropriate
- Keep functionality simple and maintainable

## Content Guidelines

- **Team Focus**: The site represents a youth robotics team (grades 3-5)
- **FLL Context**: Content relates to FIRST LEGO League challenges and competitions
- **Educational Tone**: Keep language appropriate and encouraging for young students
- **Privacy**: Do not add personal information beyond what's already present (first names and grade levels only)

## Deployment

- **Automatic**: All changes pushed to `main` branch are automatically deployed
- **Process**: GitHub Actions copies all files to `gh-pages` branch
- **Domain**: Custom domain configured via CNAME file
- **No build step**: Files are deployed as-is

## Common Tasks

### Adding a new team member
1. Add photo to `/images/` directory (140x140px recommended)
2. Add new `<li class="team-member">` to the team list in `index.html`
3. Follow existing structure and styling

### Adding photos to gallery
1. Add images to appropriate directory (`/images/`, `/images/awards/`, or `/images/robot/`)
2. Update relevant section in `index.html` with new `<img>` tags
3. Use `loading="lazy"` for performance

### Adding new sections
1. Add navigation link to `.tab-nav` in header
2. Create new `<section id="new-section">` in `<main>`
3. Add JavaScript event handler in existing tab navigation code
4. Set `display:none` initially

## Important Notes

- **Single-file architecture**: Everything is in `index.html` - do not split into multiple HTML files
- **Image optimization**: Keep images reasonably sized for web (< 500KB per image)
- **Testing**: Open `index.html` in a browser to test changes locally
- **Browser compatibility**: Ensure compatibility with modern browsers (Chrome, Firefox, Safari, Edge)

## Maintenance

- Update team information annually as members change
- Add new FLL season information to the Projects section as seasons progress
- Keep awards and gallery sections current with latest achievements
- Verify all external links remain valid (FLL website links)

## Security Considerations

- Do not commit sensitive information (email passwords, API keys, etc.)
- Keep personal information minimal (first names only, no last names or addresses)
- Ensure external links use `rel="noopener"` for security
- Use HTTPS for all external resources
