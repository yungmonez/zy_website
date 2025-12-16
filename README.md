# Zach Yungst - Personal Website

A clean, modern, and responsive personal website for Zach Yungst.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight
- 🎭 Smooth animations and transitions
- 🧭 Easy navigation
- 🎯 Sections: About, Skills, Contact

## Quick Start

### Viewing the Website Locally

Simply open `index.html` in your web browser:

```bash
# Option 1: Open directly
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Using Node.js HTTP Server

```bash
npx http-server
```

## Deployment

This website can be deployed to various platforms:

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the branch (e.g., `main`) and root folder
4. Save and wait for deployment

### Netlify

1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository

### Vercel

```bash
vercel deploy
```

## File Structure

```
zy_website/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... more colors */
}
```

### Content

Edit the content directly in `index.html` to personalize the website with your information.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## License

© 2025 Zach Yungst. All rights reserved.