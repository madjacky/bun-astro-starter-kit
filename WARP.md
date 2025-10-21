# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Bun + Astro starter kit** - a minimal Astro project configured to use Bun as the runtime and package manager instead of Node.js/npm. Astro is a modern static site generator that supports component-based development with TypeScript.

## Development Commands

All commands use Bun as the runtime and package manager:

- **Install dependencies**: `bun install`
- **Start development server**: `bun dev` (serves at localhost:4321)
- **Build for production**: `bun build` (outputs to `./dist/`)
- **Preview production build**: `bun preview`
- **Run Astro CLI commands**: `bun astro [command]` (e.g., `bun astro add`, `bun astro check`)
- **Get Astro CLI help**: `bun astro -- --help`

### Single File Operations

- **Add integrations**: `bun astro add [integration-name]`
- **Type check**: `bun astro check`

## Architecture

### Core Structure

- **Pages**: `src/pages/` - File-based routing, `.astro` files become routes
- **Layouts**: `src/layouts/` - Reusable page layouts (main layout is `Layout.astro`)
- **Components**: `src/components/` - Astro components (Header, Main, Footer)
- **Assets**: `src/assets/` - Static assets like SVGs
- **Styles**: `src/styles/` - Advanced CSS architecture with layered imports

### Component Architecture

The project uses a **three-tier layout system**:
1. **Layout.astro** - Root layout with HTML structure and CSS Grid
2. **Header/Main/Footer components** - Structural components with dedicated grid areas
3. **Page content** - Injected via `<slot />` in the Main component

### CSS Architecture

Sophisticated **layered CSS system** using `@layer` for cascade control:

```
@layer normalize, typography-props, color-props, size-props, motion-props, system-props, theme-props, base, utilities, components
```

**Directory structure**:
- `abstracts/` - Design tokens and CSS custom properties
  - `colors/` - Color palettes (neutral, brand colors, neon-p3)
  - `typography/` - Font scales, families, weights
  - `sizes/` - Spacing scales, fluid sizing, content widths
  - `motion/` - Animation curves, easings, transitions
  - `packs/` - Theme configurations (light/dark modes)
- `base/` - Reset styles, fonts, base element styling
- `components/` - Component-specific styles
- `utilities/` - Utility classes for layout and common patterns

### Build Configuration

- **PostCSS pipeline**: Configured with autoprefixer, cssnano, postcss-preset-env
- **TypeScript**: Strict mode enabled with Astro's recommended config
- **Bun types**: Included for Bun-specific APIs

## Key Patterns

### Astro Component Pattern
```astro
---
interface Props {
  title: string;
  class?: string;
}
const { title, class: className, ...props } = Astro.props;
---

<element class={className}>
  <slot />
</element>

<style>
  /* Component-scoped styles */
</style>
```

### CSS Custom Properties
The project heavily uses CSS custom properties organized by category (colors, sizes, typography, motion). When working with styles, reference existing design tokens in the abstracts layer.

### Grid-Based Layout
The main layout uses CSS Grid with named grid lines (`[header]`, `[main]`, `[footer]`) for semantic layout structure.

## Development Notes

- Uses **Bun** instead of Node.js - ensure Bun commands are used
- **TypeScript strict mode** is enabled
- **PostCSS** processes all CSS with modern features and optimization
- **File-based routing** - new pages go in `src/pages/`
- **Component-scoped styles** - each `.astro` file can have its own `<style>` block