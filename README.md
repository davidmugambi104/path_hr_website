# BoldPath HR & Business Solutions Website

A modern, production-ready corporate website for BoldPath HR & Business Solutions built with React, TypeScript, Vite, and Tailwind CSS.

## 🎯 Features

- **Modern UI/UX**: Clean, professional design with responsive layout
- **TypeScript**: Strictly typed for better code quality and maintainability
- **Vite**: Lightning fast build tool with instant hot module replacement
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive Components**: Expandable service cards, animated navigation
- **Form Handling**: Functional contact form with validation
- **Performance Optimized**: Minimal bundle size, optimized assets

## 📁 Project Structure

```
boldpath-hr-react/
├── src/
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   └── sections/   # Hero, About, Services, etc.
│   ├── lib/            # Content data, utilities
│   └── styles/         # Global CSS
├── public/             # Static assets
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

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🛠️ Technologies Used

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations (planned for future enhancement)

## 📞 Contact Form

The contact form includes:
- Name, Email, Phone, Company fields
- Service selection dropdown
- Message textarea
- Form validation
- Success/error feedback

## 📄 Content

All content is stored in `src/lib/content.ts`:
- Company information
- Services with detailed descriptions
- Team member profiles
- Contact information
- Social media links

## 🏗️ Architecture

- **Component-based**: Reusable, modular components
- **Separation of concerns**: UI, logic, and data separated
- **Type safety**: Strict TypeScript interfaces
- **Scalable**: Easy to add new sections or modify existing ones

## 📈 Performance

- **Bundle size**: ~177KB gzipped
- **Load time**: <1s on modern connections
- **Optimizations**: Tree-shaking, code splitting, minification

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

For support, contact info@boldpathhrandbusinesssolutions.co.ke# path_hr_website
