# 🎮 Itz DK Playz — Official Website

A full static website for the **Itz DK Playz** YouTube gaming channel. Built with pure HTML, CSS, and JavaScript — no frameworks, no build tools. Just drop it on GitHub Pages and go!

---

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `dkplayz-website`)
2. Upload all files to the repo
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch → `/ (root)`
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/dkplayz-website/`

---

## 📁 File Structure

```
├── index.html        → Home page
├── videos.html       → Videos page (with filter + modal)
├── about.html        → About page (FAQ, games, setup)
├── contact.html      → Contact page (form + socials)
├── css/
│   ├── style.css     → Global styles (nav, footer, cards)
│   ├── home.css      → Hero + home-specific
│   ├── videos.css    → Videos page styles
│   ├── about.css     → About page styles
│   └── contact.css   → Contact page styles
└── js/
    └── main.js       → All interactivity (cursor, animations, API)
```

---

## 🔧 Customization

### 1. Add Your Real YouTube Stats (Live Subscriber Count)

In `js/main.js`, replace these two values:

```js
const CHANNEL_ID = 'YOUR_CHANNEL_ID';  // Your YouTube channel ID
const API_KEY = 'YOUR_YT_API_KEY';     // Your YouTube Data API v3 key
```

**How to get your Channel ID:**
- Go to YouTube Studio → Settings → Channel → Basic Info → Channel ID

**How to get an API Key:**
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a project → Enable "YouTube Data API v3"
- Create API Key credentials

### 2. Update Video IDs

In `index.html` and `videos.html`, replace `dQw4w9WgXcQ` with your actual YouTube video IDs:
```html
<div class="card video-card" onclick="openVideoModal('YOUR_VIDEO_ID')">
```
And update thumbnails:
```html
<img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg" />
```

### 3. Update Social Links

Search for `href="#"` in the footer and nav and replace with your actual social media URLs.

### 4. Update Channel Description

In `about.html`, update the paragraph text in the intro section with your real bio.

### 5. Replace Placeholder Stats

In `index.html` and `about.html`, update the `data-count` values on stat elements:
```html
<span class="stat-number" data-count="YOUR_REAL_SUB_COUNT">...</span>
```

---

## ✨ Features

- 🎨 **Custom fire/neon aesthetic** — dark gaming theme with red/orange/gold gradients
- 🖱️ **Custom cursor** — glowing cursor with magnetic ring effect
- 📱 **Fully responsive** — mobile-friendly hamburger menu
- 🎬 **Video modal** — click any video card to watch in a popup
- 🔢 **Animated counters** — stats count up on scroll
- 🔴 **Live subscriber count** — plugs into YouTube Data API v3
- 🎯 **Video filter** — filter by category on the Videos page
- 🌐 **Particle background** — animated canvas particles on hero
- ⚡ **Scroll animations** — elements fade in as you scroll
- 🔤 **Glitch text effect** — title scramble animation on load
- ❓ **Accordion FAQ** — smooth open/close FAQ items
- 📬 **Contact form** — with character counter and success state

---

## 📝 License

Free to use and modify for your own YouTube channel website.

Built with ❤️ for Itz DK Playz 🎮
