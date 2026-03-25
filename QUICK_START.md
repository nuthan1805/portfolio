# 🚀 Quick Start Guide - React Portfolio

## Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

## Installation & Setup

### Step 1: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

This will install:
- React & ReactDOM
- react-scripts (build tools)
- All necessary dependencies

### Step 2: Start Development Server
```bash
npm start
```

Your portfolio will open automatically at: **http://localhost:3000**

The page will reload automatically when you make changes!

### Step 3: Build for Production
When ready to deploy:
```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

---

## 📁 File Structure

```
portfolio/
│
├── public/                  # Static files
│   └── index.html          # HTML template
│
├── src/                    # Source code
│   ├── components/        # React components
│   │   ├── Layout/       # Navbar, Footer, BackToTop
│   │   ├── Hero/         # Hero section
│   │   ├── About/        # About section
│   │   ├── Skills/       # Skills section
│   │   ├── Projects/     # Projects with filtering
│   │   ├── Experience/   # Timeline
│   │   ├── Services/     # Services section
│   │   └── Contact/      # Contact form
│   │
│   ├── hooks/            # Custom React hooks
│   │   ├── useTheme.js          # Theme toggle
│   │   ├── useNavigation.js     # Nav state
│   │   ├── useTypingEffect.js   # Typing animation
│   │   ├── useScrollAnimation.js # Scroll effects
│   │   ├── useBackToTop.js      # Scroll button
│   │   └── useProjectFilter.js  # Project filtering
│   │
│   ├── App.js            # Main App component
│   ├── index.js          # React entry point
│   └── styles.css        # Global styles
│
├── package.json          # Dependencies & scripts
├── README.md            # Documentation
└── MIGRATION_GUIDE.md   # Conversion details
```

---

## ✏️ Customization

### Update Personal Information

#### 1. Contact Details
**File**: `src/components/Contact/Contact.jsx`
```javascript
// Update email, phone, and location
<a href="mailto:YOUR_EMAIL@email.com">YOUR_EMAIL@email.com</a>
```

#### 2. Social Links
**Files**: 
- `src/components/Hero/Hero.jsx`
- `src/components/Layout/Footer.jsx`

```javascript
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_PROFILE">
```

#### 3. About Me Text
**File**: `src/components/About/About.jsx`
```javascript
<p>
  Update your bio and background information here...
</p>
```

### Add/Edit Skills

**File**: `src/components/Skills/Skills.jsx`

```javascript
const frontendSkills = [
  { icon: 'fab fa-html5', name: 'HTML5', level: '95%' },
  { icon: 'fab fa-css3-alt', name: 'CSS3', level: '90%' },
  // Add more skills here
];
```

### Add/Edit Projects

**File**: `src/components/Projects/Projects.jsx`

```javascript
const projectsData = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    category: 'fullstack' // or 'frontend', 'backend'
  },
  // Add more projects
];
```

### Update Experience

**File**: `src/components/Experience/Experience.jsx`

```javascript
const experiences = [
  {
    id: 1,
    type: 'work', // or 'education'
    title: 'Job Title',
    company: 'Company Name',
    date: '2024 - Present',
    description: 'Job description...',
    tags: ['Skill1', 'Skill2']
  },
  // Add more experiences
];
```

### Change Theme Colors

**File**: `src/styles.css`

```css
:root {
  --primary: #6366f1;      /* Main purple color */
  --secondary: #ec4899;     /* Pink accent */
  --accent: #14b8a6;        /* Teal accent */
  /* Modify as needed */
}
```

---

## 🎨 Available NPM Scripts

```bash
npm start          # Start development server (port 3000)
npm run build      # Create production build
npm test           # Run tests
npm run eject      # Eject from Create React App (⚠️ one-way operation)
```

---

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### 3. GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then deploy:
```bash
npm run deploy
```

### 4. Traditional Hosting
1. Run `npm run build`
2. Upload `build/` folder contents to your server

---

## 🐛 Common Issues & Solutions

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Node modules issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear cache and rebuild
npm run build -- --reset-cache
```

---

## 📖 Learn More

- **React Basics**: [https://react.dev/learn](https://react.dev/learn)
- **React Hooks**: [https://react.dev/reference/react](https://react.dev/reference/react)
- **Create React App**: [https://create-react-app.dev/](https://create-react-app.dev/)

---

## ✅ Checklist After Setup

- [ ] Installed Node.js
- [ ] Ran `npm install`
- [ ] Successfully ran `npm start`
- [ ] Portfolio opens at localhost:3000
- [ ] Updated personal information
- [ ] Updated social media links
- [ ] Added/edited projects
- [ ] Customized skills
- [ ] Changed theme colors (optional)
- [ ] Tested all features work
- [ ] Created production build
- [ ] Deployed to hosting

---

## 🆘 Need Help?

1. Check the **MIGRATION_GUIDE.md** for detailed conversion information
2. Read the **README.md** for comprehensive documentation
3. Check browser console for error messages
4. Verify all npm packages are installed correctly

---

**Happy Coding! 🎉**

Your portfolio is now powered by React!
