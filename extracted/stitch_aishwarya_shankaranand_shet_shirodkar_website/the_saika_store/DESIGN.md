---
name: The Saika Store
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#4f4540'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#81756f'
  outline-variant: '#d3c3bd'
  surface-tint: '#705a4f'
  primary: '#25160e'
  on-primary: '#ffffff'
  primary-container: '#3c2a21'
  on-primary-container: '#aa9084'
  inverse-primary: '#dec1b3'
  secondary: '#845143'
  on-secondary: '#ffffff'
  secondary-container: '#ffbcab'
  on-secondary-container: '#7b493c'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdcce'
  primary-fixed-dim: '#dec1b3'
  on-primary-fixed: '#281810'
  on-primary-fixed-variant: '#574238'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#f9b7a5'
  on-secondary-fixed: '#341007'
  on-secondary-fixed-variant: '#693a2e'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-padding: 120px
---

## Brand & Style
The design system is rooted in the philosophy of "Quiet Luxury"—an aesthetic that prioritizes substance, tactility, and intentionality over overt branding. It is designed for a discerning audience that appreciates the "Little Things That Spark Joy." 

The visual style blends **Editorial Minimalism** with **Modern Classicism**. It utilizes expansive whitespace to create a sense of "breathing room," mirroring the experience of a high-end physical boutique. Layouts are asymmetric and rhythmic, moving away from dense grids toward a curated gallery feel. The emotional response should be one of calm, sophistication, and timelessness.

## Colors
The palette is organic and grounded, avoiding pure blacks or clinical whites.
- **Background (#FAF9F6):** A warm, "off-white" parchment tone that reduces eye strain and feels more premium than default white.
- **Primary Text (#3C2A21):** A deep Mocha used for maximum contrast against the background while maintaining a warmth that black lacks.
- **Secondary Accents (#A56D5E):** Terracotta Rose, used sparingly for call-to-actions or to highlight curated collections.
- **Highlight (#D4AF37):** Soft Gold, reserved for thin borders, iconography, or subtle decorative elements to signify quality.
- **Soft Neutrals (#D4C9B0):** Sage Beige for secondary containers, dividers, and subtle UI backgrounds.

## Typography
The typography strategy relies on high-contrast pairings. **Playfair Display** provides the editorial, literary voice for headings, while **Montserrat** (at lighter weights) offers a clean, modern counterpoint for functional text.

Generous letter spacing (tracking) is applied to all Montserrat styles to enhance legibility and evoke a premium, "spaced-out" aesthetic typical of luxury fashion magazines. Use `label-caps` for navigation items, small buttons, and metadata to maintain a structured, organized feel.

## Layout & Spacing
This design system employs a **Fixed Grid** for content consistency, centered within the viewport. 
- **The 8px Rhythm:** All padding and margins should be multiples of 8px.
- **Editorial Spacing:** Vertical breathing room between sections is intentional and aggressive (typically 120px on desktop) to ensure products never feel crowded.
- **Asymmetric Balance:** Use 12 columns for desktop, but encourage "offset" layouts where content spans columns 2 through 10 to create elegant, centered margins.
- **Mobile Reflow:** On mobile, margins shrink to 24px, and section padding reduces to 64px to maintain momentum while keeping the airy feel.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows** rather than heavy 3D effects.
- **Surface Strategy:** The primary background is #FAF9F6. Cards and floating elements use the same color or a subtle Sage Beige (#D4C9B0) shift.
- **Shadows:** Use extremely diffused shadows (Blur: 40px, Opacity: 4%) with a hint of the Dark Mocha (#3C2A21) color mixed into the shadow tint to keep it natural.
- **Borders:** Hairline borders (0.5px or 1px) in Soft Gold (#D4AF37) or Sage Beige provide structure without visual noise.

## Shapes
The design system adopts a **Sharp (0px)** edge profile. This decision reinforces the architectural, high-end nature of the brand. Rectilinear containers create a formal, gallery-like structure for photography. 

Exceptions: Small utility icons and circular profile avatars may use 100% rounding, but all structural containers (cards, buttons, inputs) must remain sharp.

## Components
- **Buttons:** Primary buttons are solid Dark Mocha (#3C2A21) with white text, utilizing the `label-caps` typography style. Secondary buttons use a Ghost style with a 1px Gold (#D4AF37) border.
- **Input Fields:** Minimalist design—bottom border only (1px Sage Beige). Labels float above the line in `label-caps`. Focus state shifts the border to Dark Mocha.
- **Cards:** Product cards are borderless with the image taking up 80% of the vertical space. Information below is left-aligned with ample leading.
- **Chips/Tags:** Small, rectangular tags with #D4C9B0 background and #3C2A21 text. No rounding.
- **Lists:** Horizontal dividers should be 0.5px thick using the Sage Beige color, spanning the full width of the container.
- **Featured Carousel:** Large-scale imagery with text overlays using `display-lg`. Controls should be simple, thin arrows (Soft Gold) rather than dots.