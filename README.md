# Bun Astro Starter Kit

A modern, performance-focused Astro starter kit built with Bun runtime, featuring a comprehensive CSS architecture and PostCSS processing pipeline.

## 🚀 Project Overview

This starter kit provides a minimal yet powerful foundation for building Astro applications with:
- **Bun Runtime**: Ultra-fast JavaScript runtime and package manager
- **Astro 5.14.7**: Latest version with optimized build system
- **Advanced CSS Architecture**: Layered CSS system with custom properties
- **PostCSS Pipeline**: Modern CSS processing with future-CSS features
- **TypeScript Support**: Full TypeScript integration with strict configuration

## 📁 Project Structure

```
bun-astro-starter-kit/
├── .vscode/                    # VSCode configuration
│   ├── extensions.json         # Recommended extensions (Astro)
│   └── launch.json            # Debug configuration
├── public/                     # Static assets
│   └── favicon.svg            # Site favicon
├── src/                       # Source code
│   ├── assets/                # Build-time assets
│   │   ├── astro.svg         # Astro logo
│   │   └── background.svg    # Background graphics
│   ├── components/           # Reusable components
│   │   ├── Footer.astro      # Footer component
│   │   ├── Header.astro      # Header component  
│   │   └── Main.astro        # Main content wrapper
│   ├── layouts/              # Page layouts
│   │   └── Layout.astro      # Base page layout
│   ├── pages/                # File-based routing
│   │   └── index.astro       # Homepage
│   └── styles/               # CSS architecture
│       ├── abstracts/        # CSS custom properties & utilities
│       ├── base/             # Base styles & normalization
│       ├── components/       # Component-specific styles
│       ├── utilities/        # Utility classes
│       └── main.css          # Main CSS entry point
├── astro.config.mjs          # Astro configuration
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies & scripts
└── bun.lock                  # Bun lockfile
```

## 🎨 CSS Architecture & Styling System

### CSS Layers Strategy
The project uses CSS `@layer` for proper cascade management:

```css
@layer normalize, typography-props, color-props, size-props, 
       motion-props, system-props, theme-props, base, utilities, components;
```

### Style Organization

#### 1. **Abstracts** (`src/styles/abstracts/`)
Contains CSS custom properties and design tokens:

- **Colors**: Comprehensive color system with OKLCH color space
  - `colors/` - Color palettes (blue, red, green, etc.)
  - `hue.css` - Base hue definitions
  - `palette.css` - Color palette system
  - `neutral.css` - Neutral color variations

- **Typography**: Font properties and type scale
- **Sizes**: Spacing and sizing custom properties  
- **Motion**: Animation easings and transitions
- **Media Queries**: Breakpoint and feature queries
- **Theme Packs**: Light/dark theme configurations

#### 2. **Base** (`src/styles/base/`)
Foundational styles:

- `normalize.css` - Modern CSS reset with:
  - Box-sizing reset
  - Accessibility-focused defaults
  - Motion preferences support
  - Modern CSS features (view transitions, container queries)
  - OKLCH color integration

- `fonts.css` - Font loading and definitions
- `settings.css` - Root element and page-level styles

#### 3. **Components** (`src/styles/components/`)
Component-specific styles:
- `button.css` - Button component styles
- Extensible for additional components

#### 4. **Utilities** (`src/styles/utilities/`)
Utility classes for common patterns:
- `grid-layout.css` - Grid utilities
- `sr-only.css` - Screen reader only content
- `button-reset.css` - Button reset utilities
- `flow.css` - Spacing flow utilities
- `scroll-start.css` - Scroll behavior utilities

### Custom Properties System

The CSS system heavily relies on CSS custom properties for:
- **Colors**: `--gray-5`, `--blue-6`, `--link-color`
- **Typography**: `--font-family-sans`, `--font-size-3`
- **Spacing**: `--size-1`, `--size-24`
- **Motion**: `--ease-2`, `--ease-spring-3`

### Color System Features
- **OKLCH Color Space**: Modern perceptual color space
- **Comprehensive Palettes**: 20+ color families
- **Dark/Light Themes**: Automatic theme switching
- **Brand Colors**: Predefined brand color variables
- **Accessibility**: High contrast ratios

## 🏗️ Component Architecture

### Layout System
The layout uses CSS Grid for a robust page structure:

```astro
<!-- Layout.astro -->
<body class="page__body">
  <Header />
  <Main>
    <slot />
  </Main>  
  <Footer />
</body>
```

**Grid Configuration:**
```css
.page__body {
  display: grid;
  grid-template-rows: [header] auto [main] 1fr [footer] auto;
}
```

### Component Structure
Each Astro component follows this pattern:

```astro
---
interface Props {
  class?: string;
}
const { class: className, ...props } = Astro.props;
---

<element class="component-name">
  <slot />
</element>

<style>
  /* Component-scoped styles */
</style>
```

### Global Styles Integration
The main layout imports global styles:

```astro
<style is:global>
  @import '/src/styles/main.css';
</style>
```

## 🛠️ PostCSS Configuration

Advanced PostCSS pipeline with:

```js
// postcss.config.mjs
export default {
  plugins: [
    atImport(),                    // CSS @import resolution
    postcssPresetEnv({            // Future CSS features
      stage: 3,
      features: {
        "custom-media-queries": true
      }
    }),
    autoprefixer(),               // Vendor prefixes
    cssnano()                     // CSS optimization
  ]
}
```

**Features:**
- **PostCSS Import**: Resolves `@import` statements
- **Preset Env**: Enables future CSS features (custom media queries, nesting)
- **Autoprefixer**: Automatic vendor prefixing
- **CSSnano**: CSS minification and optimization

## 🚦 Development Workflow

### Scripts
```bash
bun install          # Install dependencies
bun dev             # Start development server (localhost:4321)
bun build           # Build for production  
bun preview         # Preview production build
bun astro ...       # Run Astro CLI commands
```

### TypeScript Configuration
- **Strict Mode**: `astro/tsconfigs/strict`
- **Full Type Safety**: Components, props, and APIs
- **Astro Types**: Automatic type generation in `.astro/`

### Development Extensions
Recommended VSCode extensions:
- `astro-build.astro-vscode` - Astro language support

## 🎯 Key Features

### Performance
- **Bun Runtime**: Fastest JavaScript runtime
- **Astro Islands**: Partial hydration architecture
- **Minimal JavaScript**: Static-first approach
- **Optimized CSS**: Layered cascade, tree-shaking ready

### Modern CSS Features
- **Container Queries**: Responsive components
- **View Transitions**: Smooth page transitions
- **Custom Properties**: Dynamic theming
- **OKLCH Colors**: Perceptual color space
- **Logical Properties**: Internationalization ready

### Accessibility
- **Focus Management**: Visible focus indicators
- **Motion Preferences**: `prefers-reduced-motion` support
- **Screen Reader**: Semantic HTML and ARIA
- **High Contrast**: Accessible color combinations

### Developer Experience
- **Hot Reloading**: Instant feedback during development
- **Type Safety**: Full TypeScript integration
- **Modern Tooling**: PostCSS, Bun, latest Astro
- **Extensible**: Modular architecture for easy scaling

## 🔧 Customization

### Adding New Components
1. Create component in `src/components/`
2. Add styles in `src/styles/components/`
3. Import in `components.css`

### Extending Color System
1. Add new color files in `src/styles/abstracts/colors/`
2. Import in `colors.css`
3. Use with `oklch(var(--your-color))`

### Custom Utilities
1. Create utility file in `src/styles/utilities/`
2. Import in `utilities.css`
3. Use throughout components

## 📦 Dependencies

### Core
- **astro**: `^5.14.7` - Static site generator
- **typescript**: `^5.8.3` - Type system

### Build Tools  
- **autoprefixer**: `^10.4.21` - CSS vendor prefixes
- **cssnano**: `^7.1.1` - CSS optimization
- **postcss-import**: `^16.1.1` - CSS import resolution
- **postcss-preset-env**: `^10.4.0` - Future CSS features

This starter kit provides a solid foundation for building fast, modern, and maintainable Astro applications with a comprehensive styling system and excellent developer experience.
