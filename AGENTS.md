---
description: Novéra ecommerce prototype and future Shopify theme development rules
alwaysApply: true
---

# NOVÉRA THEME — PROJECT RULES

You are working on a custom fashion ecommerce storefront called Novéra.

The current objective is to recreate the supplied Novéra ecommerce mockup as a high-quality frontend prototype.

This prototype will later be converted into a custom Shopify Online Store 2.0 theme.

The architecture must therefore be designed from the beginning with Shopify migration in mind.

The supplied mockup is the primary visual source of truth.

---

# 1. CURRENT TECHNOLOGY STACK

Use:

- Semantic HTML5
- Tailwind CSS
- Vanilla JavaScript
- Modern browser APIs
- Local image/font assets when available

Build tooling such as Tailwind CLI or Vite is acceptable if useful.

Do NOT use:

- React
- Next.js
- Vue
- Angular
- Svelte
- Bootstrap
- jQuery
- Shopify Liquid during the prototype phase
- Large UI/component frameworks

Do not introduce a JavaScript framework unless explicitly requested.

---

# 2. PROJECT GOAL

The implementation should follow this progression:

Mockup
→ HTML + Tailwind CSS + Vanilla JavaScript
→ Responsive visual prototype
→ Visual QA and refinement
→ Shopify theme architecture
→ Liquid sections, blocks and snippets
→ Shopify product/collection/cart integration

Do NOT prematurely implement Shopify during the prototype phase.

However, every architectural decision should make the eventual Shopify conversion easier.

---

# 3. VISUAL FIDELITY

Recreate the supplied mockup as faithfully as reasonably possible.

Pay particular attention to:

- Overall proportions
- Container widths
- Section heights
- Typography
- Font hierarchy
- Font weight
- Line height
- Letter spacing
- Whitespace
- Vertical rhythm
- Grid structure
- Product-card dimensions
- Image aspect ratios
- Image cropping
- Border radius
- Buttons
- Badges
- Navigation
- Hero proportions
- Section spacing
- Alignment
- Editorial layouts
- Footer proportions
- Responsive behavior

Do NOT replace intentional design decisions with generic ecommerce styling.

Do NOT create a screenshot-like implementation using excessive absolute positioning.

The result must remain a genuine responsive web page.

---

# 4. TAILWIND CSS RULES

Tailwind CSS is the primary styling system.

Prefer standard Tailwind utilities whenever possible.

Example:

```html
<section class="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10"></section>
```
