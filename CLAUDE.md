# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Project Overview

MacroLoop Web is a **Next.js 16 + React 19** marketing website for an AI-powered macro nutrition tracker mobile app. This is a single-page landing site that showcases the app's features and links to the App Store.

**Tech Stack:**
- Next.js 16.0.6 (App Router)
- React 19.2.0
- TypeScript 5 (strict mode)
- Tailwind CSS v4
- Framer Motion v12
- next-themes (theme management)
- Nunito font (next/font)

## Architecture

### Directory Structure

```
app/
├── layout.tsx          # Root layout (Server Component)
├── page.tsx            # Main landing page (Client Component)
└── globals.css         # Design system tokens + Tailwind config

components/
├── theme-provider.tsx  # next-themes wrapper
└── language-toggle.tsx # EN/DE language switcher

lib/
├── utils.ts            # cn() utility for class merging
└── translations.ts     # i18n translations (EN & DE)

public/assets/cropped/  # App screenshot images
```

### Component Strategy

This codebase **intentionally uses minimal component abstraction**. Most UI is defined inline in `app/page.tsx` because:
- It's a simple single-page marketing site
- Inline code is easier to scan and modify for this use case
- No need for reusability across multiple pages

**When to create components:**
- Reused across multiple sections (e.g., `LanguageToggle`)
- Complex state management logic
- Significantly improves readability (>150 lines)

### Server vs Client Components

- **`app/layout.tsx`**: Server Component
  - Handles metadata, font loading, theme provider setup
  - No interactivity needed

- **`app/page.tsx`**: Client Component (`"use client"`)
  - Manages language state
  - Browser language detection
  - Framer Motion animations
  - User interactions

## Internationalization (i18n)

**Custom manual i18n system** - no heavy libraries like next-intl or react-i18next.

### How It Works

1. **Translations**: All copy stored in `/lib/translations.ts`
   - Exports `translations` object with `en` and `de` keys
   - Nested structure mirrors UI sections: `hero`, `pain`, `how`, `deep`, `focus`, `footer`

2. **Language Detection**: `app/page.tsx` detects browser language on mount
   ```typescript
   useEffect(() => {
     const browserLang = navigator.language.split("-")[0];
     if (browserLang === "de") setLanguage("de");
   }, []);
   ```

3. **Usage Pattern**:
   ```typescript
   const t = translations[language]; // "en" | "de"
   <h1>{t.hero.headline}</h1>
   ```

### Why This Approach?

- Only 2 languages (EN/DE)
- Simple static content
- No need for dynamic routes, middleware, or complex translation features
- Keeps bundle size minimal

## Design System

### Color Tokens (app/globals.css)

All colors are defined as CSS variables and exposed to Tailwind:

```css
:root {
  /* Base Colors */
  --background: #000000;           /* bg-background */
  --foreground: #F2F2F7;           /* text-foreground */
  --primary: #44EBD4;              /* bg-primary (teal) */

  /* Semantic Nutrition Colors */
  --semantic-calories: #44EBD4;    /* Teal */
  --semantic-protein: #6A9BFF;     /* Blue */
  --semantic-carbs: #FF8A8A;       /* Red */
  --semantic-fat: #FFD740;         /* Yellow */

  /* Surface Colors (for backgrounds) */
  --semantic-calories-surface: #103833;
  --semantic-protein-surface: #19253D;
}
```

**Usage in components:**
```typescript
className="bg-semantic-protein text-white"
className="bg-semantic-calories-surface"
```

### Dark Theme Only

The site uses **forced dark theme** - this is intentional branding:
```typescript
<ThemeProvider attribute="class" forcedTheme="dark">
```

No light mode exists. Do not add light mode variants unless explicitly requested.

### Tailwind Configuration

- Uses **Tailwind CSS v4** with PostCSS plugin
- No `tailwind.config.ts` file - configuration is in `app/globals.css` via `@theme inline`
- CSS variables automatically available as Tailwind utilities

### Typography

- **Font**: Nunito (loaded via `next/font/google` in `app/layout.tsx`)
- Exposed as CSS variable: `var(--font-nunito)`
- Applied globally in `body` tag

## Asset Management

### Language-Specific Images

App screenshots use a **clever indexing system** to support both languages with a single codebase:

```typescript
// English screenshots: EVEN numbers (2, 4, 6, 8, 10)
// German screenshots: ODD numbers (1, 3, 5, 7, 9)

const imageIndex = language === "en"
  ? [2, 4, 6, 8, 10]
  : [1, 3, 5, 7, 9];

<Image
  src={`/assets/cropped/app-${imageIndex[0]}.png`}
  alt="Screenshot"
/>
```

**Storage Location**: `/public/assets/cropped/`

**Why this pattern?**
- Avoids complex language-specific directory structures
- Simple numerical indexing
- Easy to maintain and understand

## Configuration Files

### tsconfig.json
- **Strict mode enabled**: Ensures type safety
- **Path alias**: `@/*` maps to root directory
  ```typescript
  import { translations } from "@/lib/translations";
  ```
- **Target**: ES2017 with ESNext modules
- **Incremental compilation**: Faster rebuilds

### app/globals.css
- **Single source of truth** for design system
- Defines CSS variables for colors, spacing, typography
- Includes Tailwind v4 import and inline theme configuration
- Custom utility: `.text-balance` for balanced text wrapping

### postcss.config.mjs
- Uses `@tailwindcss/postcss` plugin
- No additional PostCSS plugins needed

### eslint.config.mjs
- ESLint v9 flat config format
- Extends `next/core-web-vitals` rules
- TypeScript support included

## Animation Patterns

### Framer Motion Usage

All animations use **scroll-triggered animations** for performance:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ type: "spring", stiffness: 400, damping: 30 }}
>
```

**Key patterns:**
- `whileInView` - Only animate when element enters viewport
- `viewport={{ once: true }}` - Animate only once per session
- `transition={{ type: "spring" }}` - Physics-based animations (preferred over linear)
- `margin: "-100px"` - Trigger animation slightly before element is visible

**Note**: Current implementation does not respect `prefers-reduced-motion`. Consider adding this if accessibility is prioritized:

```typescript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const transition = prefersReducedMotion
  ? { duration: 0 }
  : { type: "spring", stiffness: 400, damping: 30 };
```

## Key Patterns & Conventions

### Import Organization

Follow this hierarchy (per global CLAUDE.md standards):

```typescript
// 1. React/Next.js
import { useState, useEffect } from "react";
import Image from "next/image";

// 2. Third-party libraries
import { motion } from "framer-motion";

// 3. Internal utils/stores
import { cn } from "@/lib/utils";

// 4. Components
import { LanguageToggle } from "@/components/language-toggle";

// 5. Types
import type { Language } from "@/lib/translations";
```

### Class Name Utility

Use the `cn()` utility for conditional/merged class names:

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  "more-classes"
)} />
```

This utility combines `clsx` + `tailwind-merge` to handle conflicts properly.

### Component Naming

- **PascalCase** for components: `LanguageToggle`, `ThemeProvider`
- **Files match component names**: `language-toggle.tsx` exports `LanguageToggle`
- **Descriptive names**: Focus on purpose, not appearance

### TypeScript Patterns

- Use `interface` for object shapes
- Use `type` for unions and aliases
- Export types alongside components
- Strict typing - no `any` types

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export type Language = "en" | "de";
```

## Common Modifications

### Adding New Translations

1. Edit `/lib/translations.ts`
2. Add new keys to both `en` and `de` objects
3. Maintain parallel structure between languages

```typescript
export const translations = {
  en: {
    newSection: {
      title: "English Title",
      body: "English body text",
    },
  },
  de: {
    newSection: {
      title: "Deutscher Titel",
      body: "Deutscher Textinhalt",
    },
  },
};
```

### Adding New Semantic Colors

1. Define CSS variable in `app/globals.css`:
   ```css
   --semantic-newcolor: #HEXCODE;
   ```

2. Expose to Tailwind in `@theme inline` block:
   ```css
   --color-semantic-newcolor: var(--semantic-newcolor);
   ```

3. Use in components:
   ```typescript
   className="bg-semantic-newcolor"
   ```

### Adding New Components

For components that warrant extraction:

1. Create in `/components/component-name.tsx`
2. Use PascalCase for component name
3. Export as named export
4. Include proper TypeScript interface

```typescript
interface NewComponentProps {
  title: string;
  onClick: () => void;
}

export function NewComponent({ title, onClick }: NewComponentProps) {
  return <button onClick={onClick}>{title}</button>;
}
```

## Performance Considerations

- **Image Optimization**: Always use Next.js `<Image>` component
- **Priority Loading**: Use `priority` prop on hero/above-fold images
- **Lazy Animations**: Use Framer Motion's `whileInView` for scroll-triggered animations
- **Code Splitting**: App Router automatically code-splits pages
- **Font Optimization**: Nunito loaded via `next/font` for optimal performance

## Build Output

```bash
npm run build
# Generates optimized production build in .next/

npm run start
# Serves production build on localhost:3000
```

The production build is optimized for Vercel deployment but can be deployed to any Node.js hosting platform.

## Things NOT to Do

- ❌ Don't add light mode variants (forced dark theme is intentional)
- ❌ Don't create unnecessary component abstractions (inline is preferred for this site)
- ❌ Don't add heavy i18n libraries (custom system works well for 2 languages)
- ❌ Don't hardcode colors (always use CSS variables/Tailwind tokens)
- ❌ Don't use `any` types (strict TypeScript is enforced)
- ❌ Don't bypass the translations system (all copy should be in `translations.ts`)
