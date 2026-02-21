# Muhammad Umer - DevOps Portfolio

A professional portfolio website showcasing DevOps engineering skills, experience, and projects.

## Live Site

Visit: [muhammadumer.work](https://muhammadumer.work)

## Features

- Modern, responsive design
- Dark theme with professional aesthetics
- Terminal-style animations
- Smooth scroll navigation
- Typing effect for role showcase
- Scroll-triggered animations
- Mobile-friendly layout
- Fast loading (pure HTML/CSS/JS)

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter, JetBrains Mono)

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Set it to **Public**
3. Don't initialize with README (we'll push our code)

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (in the left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select `main` branch and `/ (root)` folder
6. Click **Save**
7. Wait 1-2 minutes for deployment

### Step 3: Configure Custom Domain (muhammadumer.work)

1. Configure DNS at your domain registrar:

   **For Apex Domain (muhammadumer.work):**
   Add these A records pointing to GitHub's servers:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **For www subdomain (optional):**
   Add a CNAME record:
   ```
   CNAME: www -> YOUR_USERNAME.github.io
   ```

2. In GitHub repo Settings > Pages:
   - Enter your custom domain: `muhammadumer.work`
   - Check "Enforce HTTPS"
   - Wait for DNS verification (can take up to 24 hours)

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization

### Update Personal Information

1. Edit `index.html`:
   - Update name, email, phone
   - Modify experience and projects
   - Change social links (LinkedIn, GitHub, Medium)

2. Edit `CNAME`:
   - Already set to `muhammadumer.work`

3. Replace `assets/profile.png`:
   - Add your own profile photo

4. Replace `Muhammad_Umer_Resume.pdf`:
   - Add your own resume/CV

### Update Styling

Edit `css/style.css`:
- Colors are defined as CSS variables at the top
- Primary color: `--primary: #6366f1`
- Secondary color: `--secondary: #10b981`

## File Structure

```
devops-portfolio/
├── index.html              # Main HTML file
├── 404.html                # Custom 404 page
├── CNAME                   # Custom domain (muhammadumer.work)
├── .nojekyll               # Disable Jekyll processing
├── Muhammad_Umer_Resume.pdf # Resume for download
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # All JavaScript
└── assets/
    └── profile.png         # Profile photo
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License

---

Built by Muhammad Umer | DevOps Engineer
