# Olivi - Psicóloga Website

## Overview

This is a modern, static, responsive website for psychologist Olivi featuring glassmorphism design elements and advanced interactive components. The site combines therapeutic warmth with contemporary aesthetics, built with pure HTML, CSS, and vanilla JavaScript for Netlify deployment.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern, beautiful, eye-catching with glassmorphism effects and transparency.
Testimonials: Interactive carousel with 10-second auto-rotation and smooth transitions.
Additional features: Dark mode toggle, auto-rotating quotes carousel, complete admin panel system.
Removed features: Welcome message overlay, custom cursor, Instagram integration (user preference for cleaner design).

## System Architecture

### Frontend Architecture
- **Static Site**: Pure HTML/CSS/JavaScript with no backend requirements
- **Mobile-First Design**: Responsive design prioritizing mobile devices
- **Component-Based Structure**: Modular JavaScript files handling specific functionality
- **CSS Custom Properties**: Centralized theming system using CSS variables

### Technology Stack
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **Vanilla JavaScript**: No frameworks or libraries, pure ES6+ JavaScript
- **Google Fonts**: Playfair Display (serif) and Inter (sans-serif) typography
- **Font Awesome**: Icon library for UI elements

## Key Components

### Navigation System
- **Fixed Header**: Sticky navigation with smooth scrolling
- **Hamburger Menu**: Mobile-friendly collapsible navigation
- **Accessibility**: ARIA attributes and keyboard navigation support

### Visual Components
- **Hero Carousel**: Rotating image slideshow with automatic progression
- **Glassmorphism Effects**: Modern frosted glass aesthetic with transparency and blur
- **Floating Particles**: Animated background particles for visual enhancement
- **Interactive Testimonial Carousel**: Modern carousel with 10-second auto-rotation
- **Responsive Cards**: Glassmorphism testimonial and content cards with hover effects

### Interactive Elements
- **FAQ Accordion**: Expandable/collapsible frequently asked questions with glassmorphism
- **Testimonial Navigation**: Arrow buttons, indicators, and swipe/touch support
- **Smooth Scrolling**: Enhanced navigation experience between sections
- **Intersection Observer**: Scroll-triggered animations for content reveal
- **Hover Effects**: Scale and glow animations on interactive elements
- **Dark Mode Toggle**: Smooth theme switching with rosé/beige dark colors
- **Auto-Rotating Quotes Carousel**: Inspirational quotes that change every 5 seconds
- **Admin Panel System**: Complete CMS with GitHub integration for content management

### Content Architecture
- **Professional Information**: CRP registration, education, specializations
- **Service Details**: Online and in-person therapy options
- **Contact Integration**: Direct WhatsApp and Instagram links
- **Social Proof**: Testimonials section with interactive carousel
- **Inspirational Content**: Auto-rotating quotes carousel with 5-second intervals
- **User Experience**: Smooth theme transitions and glassmorphism effects
- **Dynamic Content System**: JSON-based content management with admin panel
- **Admin Panel**: Complete CMS at `/admin` with GitHub API integration

## Data Flow

### Static Content Flow
1. **HTML Structure**: Semantic markup defines content hierarchy
2. **CSS Styling**: Visual presentation applied through modular stylesheets
3. **JavaScript Enhancement**: Progressive enhancement for interactivity
4. **Asset Loading**: External fonts and icons loaded from CDNs

### User Interaction Flow
1. **Navigation**: Users access sections through fixed header navigation
2. **Content Discovery**: Carousel and scroll animations reveal information
3. **Engagement**: Direct contact links facilitate user connection
4. **Information Access**: FAQ accordion provides quick answers

## External Dependencies

### CDN Resources
- **Google Fonts**: Typography resources (Playfair Display, Inter)
- **Font Awesome**: Icon library for UI elements
- **No JavaScript Frameworks**: Pure vanilla implementation

### Third-Party Integrations
- **WhatsApp**: Direct messaging integration (link-based)
- **Instagram**: Social media profile linking
- **Netlify**: Hosting platform (deployment target)
- **GitHub API**: Content management and automatic deployment
- **Personal Access Token**: Required for admin panel GitHub integration

## Deployment Strategy

### Static Site Hosting
- **Platform**: Netlify (specified in requirements)
- **Build Process**: No build step required - direct file upload
- **Asset Management**: All assets served statically
- **Performance**: Optimized for fast loading with minimal dependencies

### File Structure
```
/
├── index.html (main HTML file)
├── content.json (dynamic content data)
├── admin/
│   ├── index.html (admin login page)
│   ├── painel.html (admin dashboard)
│   ├── admin-styles.css (admin panel styles)
│   ├── login.js (authentication logic)
│   ├── admin-panel.js (admin panel functionality)
│   └── github-api.js (GitHub integration)
├── assets/
│   ├── css/
│   │   └── style.css (glassmorphism styles)
│   ├── js/
│   │   ├── carousel.js
│   │   ├── content-loader.js (dynamic content loading)
│   │   ├── dark-mode.js
│   │   ├── faq.js
│   │   ├── menu.js
│   │   ├── particles.js
│   │   ├── quotes-carousel.js (auto-rotating quotes)
│   │   ├── smooth-scroll.js
│   │   └── testimonials.js (carousel functionality)
│   ├── imgs/
│   │   ├── placeholder-hero1.svg
│   │   ├── placeholder-hero2.svg
│   │   ├── placeholder-hero3.svg
│   │   └── placeholder-testimonial[1-5].svg
│   └── php/
│       └── .gitkeep (future backend functionality)
```

### Performance Considerations
- **Minimal Dependencies**: Only essential external resources
- **Optimized Loading**: Preconnect hints for external fonts
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile Optimization**: Mobile-first responsive design approach

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Support**: Screen reader compatibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: Careful color palette selection for readability

### Design System
- **Color Palette**: Soft, therapeutic colors (beige, pale pink, lavender, moss green)
- **Typography Scale**: Hierarchical text sizing with serif/sans-serif pairing
- **Spacing System**: Consistent spacing using CSS custom properties
- **Component Library**: Reusable UI components with consistent styling

This architecture provides a solid foundation for a professional psychology practice website that can be easily maintained and updated without complex backend infrastructure.