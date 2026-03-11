// =========================================
//   ITZ DK PLAYZ — MAIN JAVASCRIPT
// =========================================

// ---- CUSTOM CURSOR ----
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

if (cursor && cursorRing) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX - 19}px, ${ringY - 19}px)`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.querySelectorAll('a, button, .card, .video-card, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });
}

// ---- NAVBAR SCROLL ----
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ---- HAMBURGER ----
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const isOpen = navLinks.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    });
  });
}

// ---- SCROLL ANIMATIONS ----
const animateEls = document.querySelectorAll('.animate-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateEls.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 100;
  observer.observe(el);
});

// ---- LIVE SUBSCRIBER COUNT ----
// Uses the YouTube Data API v3. Replace API_KEY and CHANNEL_ID.
const CHANNEL_ID = 'YOUR_CHANNEL_ID'; // Replace with actual channel ID
const API_KEY = 'YOUR_YT_API_KEY';    // Replace with your YouTube Data API key

async function fetchChannelStats() {
  const subEl = document.getElementById('live-subs');
  const viewEl = document.getElementById('live-views');
  const vidEl = document.getElementById('live-videos');
  if (!subEl) return;

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      const stats = data.items[0].statistics;
      if (subEl) subEl.textContent = formatNumber(stats.subscriberCount);
      if (viewEl) viewEl.textContent = formatNumber(stats.viewCount);
      if (vidEl) vidEl.textContent = formatNumber(stats.videoCount);
    }
  } catch (e) {
    // Keep placeholder values on error
  }
}

function formatNumber(n) {
  n = parseInt(n);
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

// ---- ANIMATED COUNTER ----
function animateCounter(el, target, duration = 1800) {
  const start = 0;
  const startTime = performance.now();
  const update = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(update);
}

// Run counter animation when stats are visible
const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(c => {
        animateCounter(c, parseInt(c.dataset.count));
      });
      statsObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObs.observe(statsBar);

// ---- GLITCH TEXT EFFECT ----
function applyGlitch(el) {
  const text = el.textContent;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
  let iterations = 0;
  const interval = setInterval(() => {
    el.textContent = text.split('').map((char, i) => {
      if (i < iterations) return text[i];
      if (char === ' ') return ' ';
      return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    if (iterations >= text.length) clearInterval(interval);
    iterations += 0.5;
  }, 30);
}

document.querySelectorAll('[data-glitch]').forEach(el => {
  const glitchObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => applyGlitch(el), parseInt(el.dataset.glitch) || 0);
        glitchObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  glitchObs.observe(el);
});

// ---- VIDEO MODAL ----
function openVideoModal(videoId) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  if (!modal || !iframe) return;
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  if (!modal || !iframe) return;
  iframe.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeVideoModal();
});

// ---- ACTIVE NAV LINK ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ---- PARTICLE BACKGROUND ----
function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.offsetWidth;
  let H = canvas.offsetHeight;
  canvas.width = W;
  canvas.height = H;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,23,68,${p.opacity})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  };
  draw();

  window.addEventListener('resize', () => {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
  });
}

initParticles('hero-particles');

// Fetch stats on load
fetchChannelStats();
