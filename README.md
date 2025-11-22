# SuperRobots Website

This is the React reimplementation of the SuperRobots team website.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.
The workflow builds the React app and deploys the `dist` folder.

## Project Structure

-   `src/components`: React components for each section.
-   `src/index.css`: Global styles ported from the original site.
-   `public`: Static assets (images, videos, CNAME).

## Legacy

The original static site files are preserved:
-   `legacy_index.html`: The original HTML file.
-   `legacy_README.md`: The original README.
