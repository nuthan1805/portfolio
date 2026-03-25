# Nuthan S - Portfolio (React Version)

A modern, responsive portfolio website built with React.js showcasing professional projects, skills, and experience.

## 🚀 Features

- **Component-Based Architecture**: Modular and reusable React components
- **Custom Hooks**: Reusable logic for theme management, animations, and interactions
- **Dark/Light Theme**: Toggle between elegant dark and light modes
- **Smooth Animations**: Scroll-triggered animations and typing effects
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Project Filtering**: Dynamic project filtering by category
- **Contact Form**: Interactive form with validation
- **SEO Optimized**: Semantic HTML and meta tags

## 🛠️ Technologies Used

- **React 18.2** - UI Library
- **React Hooks** - State management and side effects
- **CSS3** - Styling with CSS Variables for theming
- **Font Awesome** - Icons
- **Google Fonts** - Poppins & Fira Code fonts

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Layout/        # Navbar, Footer, BackToTop
│   │   ├── Hero/          # Hero section
│   │   ├── About/         # About section
│   │   ├── Skills/        # Skills section
│   │   ├── Projects/      # Projects section with filtering
│   │   ├── Experience/    # Timeline component
│   │   ├── Services/      # Services section
│   │   └── Contact/       # Contact form
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.js           # Theme management
│   │   ├── useNavigation.js      # Navigation state
│   │   ├── useTypingEffect.js    # Typing animation
│   │   ├── useScrollAnimation.js # Scroll animations
│   │   ├── useBackToTop.js       # Scroll-to-top button
│   │   └── useProjectFilter.js   # Project filtering
│   ├── App.js             # Main App component
│   ├── index.js           # ReactDOM render
│   └── styles.css         # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎯 Component Architecture

### Layout Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Site footer with social links
- **BackToTop** - Scroll to top button
- **AnimatedBackground** - Floating shapes animation

### Section Components
- **Hero** - Landing section with typing effect
- **About** - About me section with info cards
- **Skills** - Skills showcase with categories
- **Projects** - Portfolio projects with filtering
- **Experience** - Timeline of work and education
- **Services** - Services offered
- **Contact** - Contact form with validation

### Custom Hooks
- **useTheme** - Dark/light theme toggle with localStorage
- **useNavigation** - Navigation state and scroll effects
- **useTypingEffect** - Animated typing text effect
- **useScrollAnimation** - Intersection Observer animations
- **useBackToTop** - Back to top button visibility
- **useProjectFilter** - Project category filtering

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates an optimized build in the `build` folder

## 📝 Customization

### Personal Information
Update personal details in the respective component files:
- Social links: `src/components/Hero/Hero.jsx`, `src/components/Layout/Footer.jsx`
- Contact info: `src/components/Contact/Contact.jsx`
- About text: `src/components/About/About.jsx`

### Skills
Edit the skills arrays in `src/components/Skills/Skills.jsx`:
```javascript
const frontendSkills = [
  { icon: 'fab fa-html5', name: 'HTML5', level: '95%' },
  // Add more skills
];
```

### Projects
Add or modify projects in `src/components/Projects/Projects.jsx`:
```javascript
const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Description',
    tags: ['Tech1', 'Tech2'],
    category: 'fullstack'
  },
  // Add more projects
];
```

### Theme Colors
Customize colors in `src/styles.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  /* Modify other colors */
}
```

## 🔄 Migration from Vanilla JS

This project was converted from vanilla HTML/CSS/JS to React with:
- ✅ All functionality preserved
- ✅ Component-based structure
- ✅ Custom hooks for reusable logic
- ✅ Same design and styling
- ✅ Improved maintainability
- ✅ Better performance with React's virtual DOM

### Key Changes:
- Separated concerns into individual components
- Extracted JavaScript logic into custom hooks
- Converted event handlers to React event system
- Improved state management with React hooks
- Maintained exact same CSS styling

## 📫 Contact

- **Email**: nuthan.s@email.com
- **GitHub**: [nuthan-s](https://github.com/nuthan-s)
- **LinkedIn**: [nuthan-s](https://linkedin.com/in/nuthan-s)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Nuthan S**
