# BoldPath HR & Business Solutions Website

A modern, production-ready corporate website for BoldPath HR & Business Solutions built with React, TypeScript, Vite, and Tailwind CSS.

## 🎯 Features

- **Modern UI/UX**: Clean, professional design with responsive layout
- **TypeScript**: Strictly typed for better code quality and maintainability
- **Vite**: Lightning fast build tool with instant hot module replacement
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Smooth animations and transitions
- **Mobile-First**: Fully responsive design for all devices
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Performance**: Optimized for fast loading and smooth interactions

## 📁 Project Structure

```
boldpath-hr-react/
├── src/
│   ├── components/
│   │   ├── layout/     # Navbar, Footer, StructuredData
│   │   ├── sections/   # Hero, About, Services, etc.
│   │   └── ui/         # BackToTop, ErrorBoundary, LoadingSkeleton
│   ├── lib/            # Content data, utilities
│   └── styles/         # Global CSS
├── public/             # Static assets (robots.txt, sitemap.xml)
├── dist/               # Production build
└── node_modules/       # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd boldpath-hr-react

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

- **Primary Color**: #0B2B40 (Dark Slate)
- **Accent Color**: #C4452C (Burnt Sienna)
- **Typography**: 
  - Display: Space Grotesk
  - Body: Inter
- **Layout**: 12-column grid system with responsive breakpoints

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

## ✨ Key Features

### Hero Section
- Interactive particle background with mouse repulsion effect
- Responsive typography that scales beautifully
- Animated call-to-action buttons
- Stats counters with smooth animations

### Services Section
- Expandable/collapsible service cards
- Touch-friendly interactions
- Accessible keyboard navigation
- Smooth animations on scroll

### Case Studies
- Detailed client success stories
- Visual metrics display
- Responsive grid layout

### Testimonials
- Client feedback carousel
- Star ratings
- Professional presentation

### Newsletter Signup
- Email capture form
- Validation and feedback
- Local storage integration

### Contact Form
- Comprehensive contact form
- Validation and error handling
- Loading states
- Success/error feedback

### Additional Features
- Back to top button
- Mobile-friendly navigation
- Structured data for SEO
- Sitemap and robots.txt
- Service worker for offline caching
- Error boundaries for crash protection
- Loading skeletons for better UX

## 🛠️ Technologies Used

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Helmet Async** - Meta tags
- **Web Workers** - Service worker

## 📈 Performance

- **Bundle size**: ~177KB gzipped
- **Load time**: <1s on modern connections
- **Optimizations**: Tree-shaking, code splitting, minification
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Structured data, meta tags, sitemap

## 🔧 Technical Improvements

### Responsiveness
- Mobile-first approach
- Flexible grid layouts
- Appropriate touch targets (minimum 44x44px)
- Fluid typography
- Adaptive spacing

### Accessibility
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast compliance

### Performance
- Code splitting
- Lazy loading
- Image optimization
- Efficient animations
- Service worker caching

### SEO
- Dynamic meta tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs

## 🔄 Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 License

Copyright © 2026 BoldPath HR & Business Solutions. All rights reserved.

## 🤝 Support

For support, contact info@boldpathhrandbusinesssolutions.co.ke