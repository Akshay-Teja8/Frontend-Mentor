# Raviteja Digital Photo Studio Website

## Overview
A professional website for Raviteja Digital Photo Studio located in Husnabad, Telangana, India. The website showcases photography, videography, printing, and document services.

## Project Structure

### Frontend (React + TypeScript)
- `client/src/App.tsx` - Main app component with routing
- `client/src/pages/Home.tsx` - Landing page with all sections
- `client/src/components/` - Reusable components:
  - `Navbar.tsx` - Navigation bar with smooth scroll and theme toggle
  - `Hero.tsx` - Hero section with studio branding
  - `Services.tsx` - Services showcase (8 service cards)
  - `Gallery.tsx` - Photo gallery with lightbox and category filters
  - `Pricing.tsx` - Pricing section (prices left blank for owner to fill)
  - `About.tsx` - About section with studio info and stats
  - `Contact.tsx` - Contact form with validation and Google Maps embed
  - `Footer.tsx` - Footer with quick links and contact info

### Backend (Express.js)
- `server/routes.ts` - API routes for contact form
- `server/storage.ts` - In-memory storage for contact inquiries
- `shared/schema.ts` - Data models and Zod validation schemas

### Assets
- `attached_assets/generated_images/` - AI-generated images for:
  - Wedding photography
  - Family portraits
  - Birthday celebrations
  - Wedding reception venue
  - Photo studio interior
  - Passport photos

## API Endpoints
- `POST /api/contact` - Submit contact inquiry
  - Body: `{ name, phone, email?, service?, message? }`
  - Response: `{ success: true, inquiry: {...} }`
- `GET /api/contact` - Get all contact inquiries

## Business Information
- **Name**: Raviteja Digital Photo Studio and Xerox
- **Phone**: +91 94909 77486
- **Address**: Hanamkonda Rd, Husnabad, Telangana 505467, India
- **Google Maps**: https://maps.app.goo.gl/LqPdhpE9RGysuP58A

## Services Offered
1. **Videography** - Weddings, receptions, birthdays, functions
2. **Photoshoots** - Portraits, family photos, pre-wedding, studio sessions
3. **Photo Prints** - Passport size, 4x6 photos, custom sizes, conversions
4. **Photo Albums** - Wedding albums, event albums, custom designs
5. **Color Printing** - Documents, posters, brochures, ID cards
6. **Xerox Services** - B&W copies, color copies, bulk printing, scanning
7. **Lamination** - ID cards, certificates, A4 documents, legal papers
8. **Document Services** - Scanning, formatting, applications, forms

## Design System
- **Colors**: Warm amber/gold theme (hue 35)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Dark Mode**: Fully supported with theme toggle

## Running the Application
```bash
npm run dev
```
The application runs on port 5000.

## Future Enhancements
- Add actual pricing information
- Online booking system for appointments
- Customer testimonials section
- Admin dashboard for managing inquiries
- Portfolio filtering by event type
