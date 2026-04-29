# My Portfolio

**A high-performance portfolio for a Minecraft Developer.**

![React](https://img.shields.io/badge/React-18.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)

---


## Key Features

- **Link-in-bio Architecture**: The home page is a centralized, high-density profile with card-style layout.
- **Product Showcase**: Projects are displayed as premium products. The UI dynamically supports version tracking, pricing metadata, and star ratings.
- **Developer Notes**: Project details feature a dedicated "Developer Notes" section utilizing a terminal-aesthetic log format (`~`) for a genuine builder's feel.
- **SEO Ready**: Dynamically injected meta tags and JSON-LD structured data for both `Person` and `SoftwareApplication` entities.


## Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Installation

Clone the repository and install dependencies using `npm`:

```bash
npm install
```

### 2. Start Development Server

Run the Vite dev server with Hot Module Replacement (HMR):

```bash
npm run dev
```

> **Note:** The site will be available at `http://localhost:5173`.

### 3. Production Build

To compile the application for production deployment:

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory, ready to be deployed to Vercel, Netlify, Cloudflare Pages, or any static host.

## Managing Data

The portfolio is fully static and avoids complex CMS dependencies. All product and portfolio data is managed via a strongly-typed TypeScript configuration file.

**Location:** `src/data/projects.ts`

To add a new project, simply push a new object to the `projects` array. The TypeScript interface ensures type safety and requires specific fields, while allowing optional additions like `price`, `version`, `demoUrl`, and `stars`.

```typescript
{
  id: "my-new-plugin",
  name: "Custom Plugin",
  hook: "A high-performance system.",
  // ... other required fields
  version: "v1.0.0", // Optional
  price: "$9.99",    // Optional
  stars: 5.0         // Optional
}
```

## SEO Configuration

This project handles SEO dynamically using `react-helmet-async` to ensure that standard meta tags, OpenGraph data, Twitter cards, and Schema.org structured data are injected correctly on every page load.

**Core Component:** `src/components/seo/SEO.tsx`

### How to Edit Global SEO Defaults
To edit the base name or default settings, modify the `SEOProps` defaults in `src/components/seo/SEO.tsx`:

```typescript
export function SEO({ 
  title, 
  description, 
  type = 'website', 
  name = 'Mazurovej', // Change your default site name here
  schema 
}: SEOProps) { ... }
```

### How to Edit Page-Specific SEO
On any page (e.g., `src/pages/Home.tsx` or `src/pages/ProjectDetail.tsx`), the `<SEO />` component is placed at the top of the render tree. You can modify the props directly within the page file to change the SEO data for that specific route.

**Example from `Home.tsx`:**
```tsx
import { SEO } from '../components/seo/SEO';

export function Home() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    // ... edit your JSON-LD schema here
  });

  return (
    <>
      <SEO 
        title="Minecraft Plugin & Skript Developer" 
        description="High-performance backend logic and custom economy systems..."
        schema={schema}
      />
      {/* Page Content */}
    </>
  );
}
```

By passing different `title`, `description`, or `schema` props to the `<SEO />` component, you automatically update the `<head>` of the HTML document to perfectly match the current page context.

---
*Crafted with precision.*
