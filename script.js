const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');
const header = document.getElementById('header');
const heroMedia = document.querySelector('.hero-media');
const heroSection = document.querySelector('.hero');
const connectors = document.querySelectorAll('.connector');
const immersiveSections = document.querySelectorAll('[data-immersive="true"]');

function openMenu() {
  body.classList.add('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'true');
  menuOverlay?.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuOverlay?.setAttribute('aria-hidden', 'true');
}

menuToggle?.addEventListener('click', () => {
  if (body.classList.contains('menu-open')) closeMenu();
  else openMenu();
});
menuClose?.addEventListener('click', closeMenu);
menuOverlay?.addEventListener('click', (event) => {
  if (event.target === menuOverlay) closeMenu();
});
document.querySelectorAll('.menu-links a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

function handleHeaderState() {
  if (!header || header.classList.contains('always-solid')) return;
  if (window.scrollY > 24) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}

function handleHeroMotion() {
  if (!heroMedia || !heroSection) return;
  const y = Math.min(window.scrollY, window.innerHeight * 0.8);
  const progress = Math.min(1, y / (window.innerHeight * 0.72));
  const scale = 1.08 + y * 0.00022;
  const translateY = y * 0.028;
  heroMedia.style.transform = `scale(${scale}) translate3d(0, ${translateY}px, 0)`;

  const opacity = Math.min(0.82, 0.42 + y * 0.0005);
  document.documentElement.style.setProperty('--hero-overlay-opacity', opacity);
  document.documentElement.style.setProperty('--hero-progress', progress.toFixed(3));

  immersiveSections.forEach((section, index) => {
    const depth = 1 + progress * (0.014 + index * 0.004);
    section.style.transform = `translate3d(0, 0, 0) scale(${depth})`;
  });
}

function handleConnectorParallax() {
  const y = window.scrollY;
  const mouseX = parseFloat(document.documentElement.style.getPropertyValue('--pointer-x') || 0);
  connectors.forEach((connector, index) => {
    const drift = ((y * 0.02) + index * 18) % 360;
    connector.style.strokeDashoffset = `${drift}`;
    connector.style.opacity = `${Math.max(0.18, 0.85 - y / 3200)}`;
    connector.style.transform = `translate3d(${mouseX * (index + 1) * 2}px, 0, 0)`;
  });
}

window.addEventListener('scroll', () => {
  handleHeaderState();
  handleHeroMotion();
  handleConnectorParallax();
}, { passive: true });
handleHeaderState();
handleHeroMotion();
handleConnectorParallax();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {
  threshold: 0.18,
  rootMargin: '0px 0px -8% 0px'
});

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));


window.addEventListener('pointermove', (event) => {
  const centerX = window.innerWidth / 2;
  const offsetX = (event.clientX - centerX) / centerX;
  document.documentElement.style.setProperty('--pointer-x', offsetX.toFixed(3));
  handleConnectorParallax();
}, { passive: true });
