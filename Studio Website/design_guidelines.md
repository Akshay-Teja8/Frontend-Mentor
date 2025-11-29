# Design Guidelines: Raviteja Digital Photo Studio Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium photography portfolio sites (Unsplash, 500px) combined with service-oriented businesses (Vistaprint, Shutterfly). The design emphasizes visual storytelling while maintaining clear service accessibility.

**Core Principles**:
- Visual-first presentation showcasing photography quality
- Clean, modern aesthetics that don't compete with photo content
- Service clarity with easy navigation to pricing and contact
- Trust-building through professional presentation

## Typography System

**Font Families**:
- Primary (Headings): 'Playfair Display' - serif, elegant, photography-appropriate
- Secondary (Body): 'Inter' - clean, highly readable sans-serif
- Accent (CTAs): 'Inter' medium weight

**Hierarchy**:
- Hero Title: text-5xl md:text-7xl, font-bold, tracking-tight
- Section Headings: text-3xl md:text-4xl, font-bold
- Service Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text (captions): text-sm, font-medium

## Layout & Spacing System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20
- Component internal spacing: p-4, p-6, p-8
- Section vertical spacing: py-12 md:py-20
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl

**Grid System**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery: masonry-style grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Pricing: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Page Structure & Components

### 1. Hero Section (100vh)
**Layout**: Full-viewport with background image overlay
- Large hero image showcasing studio's best wedding/event photography work
- Centered content with studio name, tagline, dual CTAs
- Blurred background buttons: "View Services" (primary), "Contact Us" (secondary)
- Subtle scroll indicator at bottom

### 2. Services Showcase
**Layout**: Two-column approach alternating left/right
- Service categories with icons (using Heroicons)
- Each service block: Icon + Title + Description + "Learn More" link
- Categories:
  - Photography & Videography (weddings, events, functions)
  - Print Services (xerox, color printing)
  - Photo Products (albums, passport photos, 4x6 prints, conversions)
  - Professional Services (lamination for ID/documents)

### 3. Gallery Section
**Layout**: Masonry grid with lightbox capability
- Photo categories: Weddings, Events, Portraits, Albums
- Hover effect revealing category/event name
- "View Full Portfolio" CTA at bottom
- Mix of landscape and portrait orientations

### 4. Pricing Section
**Layout**: Three-column cards (Photography, Printing, Special Services)
- Card structure: Service category header + bullet list of items + price placeholders ("Contact for pricing")
- Clean, scannable list format
- "Request Custom Quote" CTA button in each card

### 5. About Section
**Layout**: Two-column split (60/40)
- Left: Text content about studio, experience, commitment
- Right: Studio front photo or owner/team photo
- Trust indicators: Years in business, happy customers count, completed projects

### 6. Contact Section
**Layout**: Two-column (Form 50% | Info + Map 50%)
- Contact form: Name, Phone, Email, Service Interest dropdown, Message
- Right column:
  - Phone: +91 94909 77486 (clickable tel: link)
  - Address: Hanamkonda Rd, Husnabad, Telangana 505467
  - Embedded Google Maps
  - Business hours placeholder
  - WhatsApp CTA button

### 7. Footer
**Layout**: Three-column grid
- Column 1: Studio name, brief tagline, social media icons
- Column 2: Quick links (Services, Gallery, Pricing, Contact)
- Column 3: Contact info, business hours
- Bottom bar: Copyright, "Designed & Developed" credit

## Component Library

**Navigation**:
- Fixed header on scroll with logo left, menu center/right
- Mobile: Hamburger menu
- Links: Home, Services, Gallery, Pricing, About, Contact

**Buttons**:
- Primary: Solid with hover lift effect
- Secondary: Outline style
- Icon buttons: Consistent size (h-10 w-10 or h-12 w-12)
- On images: Backdrop blur (backdrop-blur-sm bg-white/20)

**Cards**:
- Service cards: p-6, rounded-lg, border subtle
- Pricing cards: p-8, rounded-xl, featured card with border accent
- Hover: subtle scale transform (hover:scale-105 transition-transform)

**Forms**:
- Input fields: p-4, rounded-lg, border-2
- Labels: font-medium, mb-2
- Submit button: w-full on mobile, auto on desktop

**Gallery Items**:
- Aspect ratio maintained (aspect-w-4 aspect-h-3 or aspect-square)
- Rounded corners (rounded-lg)
- Overlay on hover with view icon

## Images

**Hero Image**: Large, high-quality wedding or event photography showcasing studio's work - couple portrait or grand event setup. Should evoke emotion and professionalism.

**Gallery**: 12-16 sample images across categories (weddings, birthdays, corporate events, portraits)

**About Section**: Studio front exterior or team photo showing welcoming atmosphere

**Service Icons**: Use Heroicons - Camera, Film, Printer, Photo, Document, Sparkles

**Background Patterns**: Subtle texture or gradient overlays on service/pricing sections for depth

## Accessibility & Interactions

- Focus states: ring-2 ring-offset-2 for keyboard navigation
- Alt text for all images
- ARIA labels for icon buttons
- Form validation with clear error states
- Mobile: Touch targets minimum 44x44px
- Smooth scroll behavior for anchor links

## Responsive Behavior

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hero text scales from text-4xl to text-7xl
- Grids collapse to single column on mobile
- Navigation converts to hamburger menu below md
- Contact section stacks vertically on mobile (form first, then map/info)