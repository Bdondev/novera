# Novéra Design System

**Status:** Existing prototype audit  
**Scope:** `tailwind.config.js`, `src/input.css`, and `index.html`  
**Last audited:** 2026-10-19

This document describes the visual language currently implemented by the Novéra storefront prototype. It is an implementation reference for the prototype and a starting point for a future Shopify theme system.

The system is intentionally editorial, quiet, and fashion-led: warm neutrals, a vermilion accent, serif display typography, compact sans-serif metadata, rounded controls, and image-led layouts.

## Design principles

- **Editorial first:** Large serif headlines and immersive imagery carry the brand expression.
- **Quiet utility:** Product metadata, controls, and navigation stay compact and low-contrast.
- **Vermilion for action:** The accent color identifies primary actions, prices, sale states, and active emphasis.
- **Soft structure:** White space, light borders, rounded surfaces, and restrained shadows separate content without heavy chrome.
- **Responsive by composition:** Rails become grids at larger sizes, while content hierarchy remains consistent across breakpoints.

## Color tokens

### Named Tailwind tokens

| Token | Value | Intended use |
| --- | --- | --- |
| `oxblood` | `#520000` | Reserved deep brand tone; defined but not currently used in the audited markup. |
| `vermilion` | `#c80d19` | Primary action, brand wordmark, prices, sale badges, active states, focus rings. |
| `porcelain` | `#f7f5f2` | Product media background. |
| `ink` | `#11100f` | Primary text, navigation, controls, and dark active filter state. |

### Core surface and utility colors

These values are implemented through Tailwind utilities rather than named project tokens:

| Role | Current implementation |
| --- | --- |
| Page surface | `white` / `#ffffff` |
| Dark media surface | `black` and `neutral-900` |
| Campaign fallback surface | `#b7b7b7` |
| Editorial fallback surface | `#302a23` |
| Subtle border | `black/10` |
| Secondary text | `ink/45`, `ink/55`, `ink/35` |
| Inverse secondary text | `white/75`, `white/80`, `white/90` |
| Soft interaction surface | `black/5` |

### Usage guidance

- Use `vermilion` for one primary action or emphasis within a local region.
- Use `ink` for primary text; use opacity variants for supporting information.
- Use white surfaces for product and navigation UI.
- Keep overlays dark and transparent so photography remains visible. Current hero overlays use black gradients between `35%` and `10%` opacity; campaign and editorial overlays use stronger directional gradients.
- Avoid introducing new saturated colors without a clear semantic role.

## Typography

### Families

| Token | Stack | Role |
| --- | --- | --- |
| `font-display` | `Georgia, Times New Roman, serif` | Headlines, product names, editorial labels, large brand expression. |
| `font-sans` | `Arial, Helvetica Neue, sans-serif` | Body copy, navigation, prices, badges, controls, metadata. |

The body defaults to `font-sans`, `text-ink`, and antialiasing. Display text is applied explicitly with `font-display`.

### Type scale in use

The prototype uses a compact, mostly custom scale:

| Role | Current size | Weight / treatment | Typical use |
| --- | --- | --- | --- |
| Hero display | `42px` → `55px` → `62px` | Medium, tight tracking, `0.92` line-height | Main hero heading at base / `sm` / `lg`. |
| Editorial heading | `32px` → `42px` / `43px` | Bold, tight tracking, approximately `1.02`–`1.05` line-height | Campaign and editorial banners. |
| Section heading | `30px` → `36px` → `40px` | Semibold, tight tracking | Category, arrival, and curated sections. |
| Brand wordmark | `25px` | Bold, `-0.075em` tracking | Header logo. |
| Product title | `13px` → `15px` → `16px` | Semibold, display family | Product cards, with smaller grid treatment. |
| Product price | `12px` | Bold, vermilion | Product cards. |
| Body / navigation | `13px`–`16px` | Medium or regular | Primary navigation and supporting copy. |
| Supporting copy | `11px`–`12px` | Regular, relaxed line-height | Campaign descriptions and product metadata. |
| Microcopy | `8px`–`10px` | Medium or bold | Badges, category counts, labels, filter buttons. |

### Typography conventions

- Use negative tracking for display headlines and the wordmark.
- Keep uppercase text limited to primary button labels and compact utility labels.
- Product names use the display family; prices and metadata use the sans family.
- Maintain strong contrast for headings and use opacity for secondary information rather than lighter gray tokens.

## Spacing and sizing

The project uses Tailwind's default spacing scale plus deliberate arbitrary values for the mockup. There is no separate spacing-token file yet.

### Common layout values

| Pattern | Current values |
| --- | --- |
| Storefront content width | `max-w-[1280px]` for the hero and category content; `max-w-[1360px]` for product and editorial sections. |
| Desktop header width | `max-w-[1200px]`. |
| Horizontal page padding | `px-5` base, `px-8` at `sm`, `px-10` or `px-12` at `lg`, depending on section. |
| Section vertical padding | Commonly `py-12`, `sm:py-14`, and larger `pb-16` / `lg:pb-24` for editorial sections. |
| Standard control height | `min-h-8` (`32px`) for compact controls; `min-h-10` (`40px`) for primary actions. |
| Icon button | `size-9` (`36px`). |
| Carousel button | `size-8` (`32px`). |
| Product media ratio | `aspect-[4/5]`. |
| Category media ratio | `aspect-[4/5]`. |
| Grid gaps | `gap-3` base, `gap-4` at `sm`, `gap-5` at `lg`; larger editorial gaps use `gap-7` and `gap-12`. |

### Responsive product sizing

- Product rails use `min-w-[78vw]` on small screens, `sm:min-w-[43vw]`, and four columns at `lg` with `min-w-[calc((100%-3.75rem)/4)]`.
- Curated products use two columns by default, three at `md`, and four at `lg`.
- Category cards scroll horizontally on smaller screens and become a six-column grid at `lg`.

## Border radii

| Token / pattern | Current value | Usage |
| --- | --- | --- |
| `rounded-full` | `9999px` | Buttons, pills, badges, header, circular icon controls. |
| `rounded-2xl` | `16px` | Campaign and editorial banners, mobile menu. |
| `rounded-xl` | `12px` | Floating campaign product card. |
| `rounded-lg` | `8px` | Product media, mobile menu links. |
| `rounded-[12px]` | `12px` | Category cards. |

Prefer the existing semantic pattern: full pills for controls and statuses, `8px` media corners for product cards, and `16px` corners for large feature surfaces.

## Shadows and depth

| Token / pattern | Current value | Usage |
| --- | --- | --- |
| `shadow-nav` | `0 8px 30px rgb(0 0 0 / 0.10)` | Floating header and its scrolled state. |
| `shadow-sm` | Tailwind default small shadow | Product badges and compact labels. |
| `shadow-xl` | Tailwind default extra-large shadow | Floating campaign product card. |
| `backdrop-blur-md` | Tailwind utility | Scrolled header surface. |
| `backdrop-blur-sm` | Tailwind utility | Campaign labels. |

Depth is reserved for floating UI. Content sections generally rely on spacing, borders, and photography instead of shadows.

## Responsive breakpoints

The project uses Tailwind's default breakpoints; `tailwind.config.js` does not override them.

| Breakpoint | Width | System behavior |
| --- | ---: | --- |
| Base | `<640px` | Mobile-first layout, horizontal rails, compact type, stacked editorial benefits. |
| `sm` | `640px` | Larger page padding, two-up product rails, taller hero, larger type. |
| `md` | `768px` | Curated product grid becomes three columns; some feature layouts become horizontal. |
| `lg` | `1024px` | Desktop navigation, six-column category grid, four-column product grid, expanded banner layouts. |

The CSS also contains a `max-width: 767px` rule for mobile editorial refinements and uses `prefers-reduced-motion` to disable reveal animations when appropriate.

## Components

### Buttons and actions

#### Primary button

Class: `.primary-button`

- Vermilion background with white text.
- Pill shape, minimum height `40px`, horizontal padding `20px`.
- Sans-serif, bold, `11px`, uppercase, `0.08em` tracking.
- Hover lifts by `2px`.
- Visible keyboard focus uses a white ring with a vermilion offset.

Use for high-priority actions such as `Shop now` and `Shop Now`.

#### Filter button

Class: `.filter-button`

- Compact `32px` minimum height.
- White background, subtle border, muted ink text.
- Pill shape with `16px` horizontal padding.
- Pressed state becomes ink background with white text through `[aria-pressed="true"]`.
- Filter controls are horizontally scrollable on narrow screens.

#### Carousel button

Classes: `.carousel-button`, `.carousel-button--accent`

- Circular `32px` control with a light border.
- Accent variant uses vermilion fill and white iconography.
- Disabled state reduces contrast and prevents interaction.
- Visible keyboard focus uses a vermilion ring.

#### Icon button

Class: `.icon-button`

- Circular `36px` hit area.
- Ink icon, transparent background by default.
- `black/5` hover surface.
- Visible keyboard focus uses a vermilion ring.

### Cards

#### Product card

Classes: `.product-card`, `.product-card__media`, `.product-card__details`, `.product-card__price`, `.product-card__compare-price`, `.product-card__title`, `.product-card__type`

- Image-first `4:5` media with `8px` corners and porcelain fallback.
- Image gently scales on hover (`1.025`), respecting reduced-motion preferences for other animations.
- Details begin with `16px` top padding.
- Price is bold vermilion; compare price is smaller, muted, and struck through.
- Product title uses the display family and semibold weight.
- Product type is compact muted metadata.
- `.product-card--grid` removes rail sizing and slightly reduces typography and badge dimensions.

#### Category card

Class: `.category-card`

- `4:5` image card with `12px` corners.
- Dark bottom gradient overlay supports white labels.
- Image scales subtly on hover.
- Mobile width is `162px`, increasing to `178px` at `sm`; desktop cards fill a six-column grid.

#### Campaign product card

Class: `.campaign-product`

- Floating white card with `12px` corners, light border, and large shadow.
- Compact product summary paired with a cropped image.
- Vermilion circular plus action is centered on the bottom edge.
- Width/height expands from `210px × 94px` to `300px × 124px` at `sm`.

### Badges and labels

Classes: `.product-card__badge`, `.product-card__sale-badge`, `.campaign-banner__eyebrow`, `.campaign-label`

- Pill-shaped, compact sans-serif labels with bold or medium weight.
- Standard status badge: white background with vermilion text.
- Sale badge: vermilion background with white text.
- Campaign eyebrow follows the standard white/vermilion status treatment.
- Campaign labels use translucent white, muted ink text, backdrop blur, and bold vermilion prices.
- Badges sit inside media at `12px` from the edge, reduced to `8px` in the grid treatment on smaller cards.

### Navigation

#### Desktop header

- Fixed, centered floating header with a maximum width of `1200px`.
- White pill surface, `54px` base height and `58px` at `lg`.
- Left-aligned text navigation uses `13px` medium sans-serif text.
- Centered vermilion wordmark uses `25px` bold text with tight tracking.
- Right-side search, bag, and account actions use `.icon-button`.
- The bag count is a `15px` vermilion circular badge with white `8px` text.

#### Mobile header

- Desktop links collapse below `lg`.
- Menu trigger uses `.icon-button` and an animated three-line icon.
- Expanded menu is a white `rounded-2xl` panel with `p-5` and `shadow-nav`.
- Menu links use `rounded-lg`, compact padding, and a `black/5` hover surface.

#### Announcement bar

- Minimum height `32px`.
- White surface with a subtle bottom border.
- Centered `10px` medium text with slight positive tracking.
- Dismiss action is positioned at the right and uses muted ink with vermilion hover.

## Form and selection controls

The current prototype does not contain text inputs, selects, checkboxes, radio buttons, or a form submission pattern.

The implemented selection control is the curated-product filter:

- Use a semantic `<button>`.
- Represent selection with `aria-pressed`.
- Keep the selected state visually distinct with ink background and white text.
- Keep controls keyboard reachable and support Arrow, Home, and End navigation as implemented in `src/app.js`.
- If forms are added later, extend this system with explicit input height, border, placeholder, error, disabled, and focus tokens rather than styling controls ad hoc.

## Interaction and accessibility patterns

- Use `focus-visible` rings on interactive controls; the standard accent ring is vermilion.
- Preserve visible text alternatives through `aria-label`, `aria-expanded`, `aria-controls`, and `aria-pressed` where applicable.
- Use `prefers-reduced-motion` for entrance animations and smooth carousel scrolling.
- Keep icon-only actions inside the existing `36px` hit area.
- Use semantic landmarks: announcement aside, header, navigation, main, sections, articles, and labeled regions.

## Current gaps and future systemization

This is a practical prototype system, not yet a complete design-token package. The main opportunities for future refinement are:

1. Promote repeated arbitrary colors such as `#b7b7b7`, `#302a23`, and overlay recipes into named theme tokens.
2. Define a documented spacing scale and section-spacing tokens instead of relying on repeated utility combinations.
3. Add explicit semantic tokens for border, muted text, inverse text, focus, and disabled states.
4. Add a component reference page or Storybook-style catalog if the system grows beyond the storefront prototype.
5. Add a formal form-control family before introducing checkout, account, or newsletter forms.
6. Map the component names to future Shopify snippets and sections: `product-card`, `category-card`, `primary-button`, `filter-button`, and `campaign-product` are already suitable boundaries.

## Source mapping

- **Tokens:** `tailwind.config.js`
- **Base styles and reusable components:** `src/input.css`
- **Composition and usage examples:** `index.html`
- **Interaction behavior:** `src/app.js`

