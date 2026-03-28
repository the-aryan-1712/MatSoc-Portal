# MatSoc - The Materials Society Portal

Welcome to the official frontend portal for **MatSoc** (The Materials Society). This project is a modern, high-performance React application built to showcase the society's mission, events, team, news, and resources.

The application leverages a stunning deep-navy/terracotta aesthetic inspired by high-end tech startups and Discord's design system, focusing heavily on gorgeous glassmorphism overlays, fluid `framer-motion` animations, and a rich dark/light mode ecosystem.

## 🚀 Quick Start

Ensure you have Node.js installed, then run the following commands to view the website locally:

```bash
# Install all required dependencies
npm install

# Spin up the local development server (Exposed to your WiFi network automatically)
npm run dev
```

Visit the `Local` or `Network` URL provided in your terminal (usually `http://localhost:5173`) to view the application.

## 📂 Project Architecture

The codebase has been meticulously structured to cleanly separate reusable UI components from full-page views, and specifically isolates all written content into a dedicated `data` layer so that non-technical team members can update the website without touching React code.

```text
Matsoc-Portal/
├── public/                 # Static assets (logos, favicons)
│   └── matsoc-logo-clean.png
├── src/
│   ├── components/         # Reusable UI elements
│   │   ├── Navbar.jsx      # Animated Discord-style dropdown navigation
│   │   ├── Footer.jsx      # Global footer
│   │   ├── Hero.jsx        # Landing page hero with floating Material Science icons
│   │   ├── About.jsx       # Mission & Vision section
│   │   └── ThemeToggle.jsx # Dark/Light mode switcher and logic
│   │
│   ├── pages/              # Distinct routed page components
│   │   ├── Events.jsx      # Events grid and interactive detail modals
│   │   ├── Gallery.jsx     # Masonry photo grid
│   │   ├── Team.jsx        # Hierarchical team directory
│   │   ├── News.jsx        # Vertical chronological news timeline
│   │   ├── Resources.jsx   # Downloadable resource cards
│   │   └── Contact.jsx     # Contact forms and maps
│   │
│   ├── data/               # ⚠️ The Content Layer (Edit these to update site content)
│   │   ├── events.js       
│   │   ├── team.js         
│   │   ├── news.js         
│   │   └── resources.js    
│   │
│   ├── index.css           # Global Tailwind directives & Theme color variables
│   ├── App.jsx             # Main router and loading splash screen wrapper
│   └── main.jsx            # React root mount
```

## 📝 How to Update Website Content

You **do not need to know React** to update the text on this website. 

All dynamic text, events, team members, news posts, and downloadable resources are decoupled from the UI code and stored in the `src/data/` folder as plain JavaScript objects. 

To add a new event or remove a team member:
1. Open the corresponding file in `src/data/` (e.g., `src/data/events.js`).
2. Add, edit, or delete the object in the array.
3. Save the file. The UI will instantly, natively reflect your changes and automatically generate the correct UI cards, layouts, and modals!

## 🎨 Theme & Styling

The site uses **Tailwind CSS** heavily. The global theme colors (like the rustic IITK Terracotta Orange and deep charcoals) are defined as CSS variables inside `src/index.css` under the `:root` and `.dark` layers. 

To adjust the core color of the entire website, simply tweak the `--primary` variable in `index.css`. All buttons, glowing shadows, text gradients, and dropdown elements will dynamically adapt.

## 🛠️ Tech Stack

- **React 19**
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling & Responsive Design)
- **Framer Motion** (Physics-based Scroll & Entrance Animations)
- **Lucide React** & **React Icons** (SVG Iconography)
- **React Router DOM** (Multi-page routing and animated transitions)
