# EnerGen Solutions Design System

## 1. Atmosphere & Tone
- Extremely premium, stark, and modern minimal B2B feel for the EnerGen Solutions brand. Target audience is C-level Oil & Gas executives. Absolute trust and professionalism.

## 2. Colors
- **Brand Accents**: Use EnerGen Blue `#5BB8DF` and EnerGen Orange `#F05A28`. Limit use to meaningful CTAs, highlights, active states.
- **Backgrounds**: Slate-900 `#0f172a` for hero/dark sections; very crisp White `#FFFFFF` for the main pages, light Slate-50 `#f8fafc` for subtle offsetting.
- **Typography/Ink**: High-contrast Slate-900 `#0f172a` for massive headers on light mode. Slate-500 `#64748b` for standard body copy.

## 3. Typography
- **Primary Font**: `Inter`
- Large geometry: Headings should be large, tight letter-tracking (`tracking-tighter`), and `font-black`. Body should be clean, readable `text-lg`.

## 4. Components & Shapes
- Use very subtle glassmorphism (translucent white/black backgrounds with `backdrop-blur-lg`) to create depth without relying on heavy colors.
- Component curvature: Rely consistently on slightly rounded corners `rounded-2xl` for cards, and `rounded-sm` or `rounded-md` for buttons/interactables. 
- Avoid heavy box-shadows. Use only soft, diffused `shadow-sm` or `shadow-md` for floating elements. Use a sub-pixel border `border-slate-200` to separate light-on-light cards.
- **Buttons**: Should look sturdy, sleek. "Primary" uses EnerGen Blue or Orange. "Secondary" uses transparent/bordered or crisp white-on-dark.

## 5. Motion
- Interaction feedback must be extremely subtle (`hover:scale-[1.02]`, slight opacity shifts, very gentle GSAP scroll triggers). Do not use jarring, bouncing, or chaotic animations.

## 6. Design System Notes for Stitch Generation
**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first
- Palette: EnerGen Blue (#5BB8DF) as primary accent, EnerGen Orange (#F05A28) as secondary highlighting. Deep slate backgrounds (#0f172a / #1e293b) for strong contrast, and stark white (#ffffff) for crisp body areas.
- Typographic style: "Inter", massive `font-black` headers with tight tracking. Use minimal border colors (e.g., slate-200) to separate components with significant `py-24` and `gap-16` spacing.
- Styles: `rounded-2xl` for big containers, `rounded-sm`/`rounded-md` for buttons. Very soft, elegant glassmorphism for sticky navs and overlaid cards. High contrast. Zero visual clutter.
