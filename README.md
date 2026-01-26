# CoreSynq Landing Page

Modern landing page for CoreSynq ESG platform built with Astro + Svelte.

## 🚀 Features

- **Astro + Svelte**: Modern static site generation with reactive components
- **Video Background**: Dynamic hero section with background video
- **Interactive Animations**: Node graph visualization and scroll-reveal effects
- **ESG Content**: Comprehensive metrics, frameworks, and case studies
- **Docker Ready**: Containerized for easy deployment
- **Coolify Compatible**: Optimized for Coolify platform deployment

## 🏗️ Project Structure

```text
/
├── public/
│   ├── bv.mp4              # Hero background video
│   └── favicon.svg
├── src/
│   ├── components/         # Svelte components
│   │   ├── Hero.svelte
│   │   ├── DynamicNodes.svelte
│   │   ├── Features.svelte
│   │   ├── CaseStudy.svelte
│   │   ├── Metrics.svelte
│   │   ├── Frameworks.svelte
│   │   ├── ImpactDemo.svelte
│   │   ├── Waitlist.svelte
│   │   └── Navbar.svelte
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── Dockerfile
├── docker-compose.yml
└── .coolify                # Coolify deployment config
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🐳 Docker Deployment

### Local Development
```bash
docker-compose up --build
# Access at http://localhost:8080
```

### Production Build
```bash
docker build -t coresynq-landing .
docker run -p 8080:80 coresynq-landing
```
