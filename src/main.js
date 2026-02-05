import './style.css'

import Preloader from './components/Preloader.js'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Features from './components/Features.js'
import Stats from './components/Stats.js'
import HowItWorks from './components/HowItWorks.js'
import Apply from './components/Apply.js'
import Footer from './components/Footer.js'
import CreatorsPage from './components/CreatorsPage.js'
import HeroSlider from './components/HeroSlider.js';
import Accordion from './accordions.js';
import WhatWeDo from './components/WhatWeDo.js';


/* ---------------- PAGES ---------------- */

function Home() {
  return `
    ${Hero()}
    ${Stats()}
    ${HowItWorks()}
    ${WhatWeDo()}
    ${Features()}
  `
}

function Creators() {
  return CreatorsPage()
}

/* ---------------- ROUTER ---------------- */

function router() {
  const path = window.location.pathname

  let page = Home()

  if (path === '/creators') page = Creators()
  if (path === '/apply') page = Apply()

  document.querySelector('#app').innerHTML = `
    ${page}
    ${Accordion()}
    ${Footer()}
  `
  HeroSlider();
  initMobileMenu()
  initScrollAnimations()
  initTrafficUnderline()
  animateStats()
  initHeroSlider()
  hidePreloader()
  initGardenPreloader()
}

window.addEventListener('popstate', router)
router()

/* ---------------- SCROLL ANIMATIONS ---------------- */

function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal')
  if (!elements.length) return

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  }, { threshold: 0.15 })

  elements.forEach(el => observer.observe(el))
}

/* ---------------- TRAFFIC UNDERLINE ANIMATION ---------------- */

function initTrafficUnderline(){

  const underline = document.querySelector(".traffic-underline");

  if(!underline) return;

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){
        underline.classList.add("underline-visible");
      } else {
        underline.classList.remove("underline-visible");
      }

    });

  }, { threshold: 0.6 });

  observer.observe(underline);
}


// slide to contact form w/ btn class scrollto
document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll('.scrollto');

  buttons.forEach((btn) =>{

    btn.addEventListener('click', function () {
      document.getElementById('my_form')
      .scrollIntoView({ behavior: "smooth" });
    });
  })

});
/* ---------------- HERO SLIDER ---------------- */

function initHeroSlider() {
  const slides = document.querySelectorAll('.hg-slide')
  if (!slides.length) return

  let current = 0

  // 🔒 GARANZIA: una slide è SEMPRE visibile
  slides.forEach(slide => slide.classList.remove('active'))
  slides[0].classList.add('active')

  setInterval(() => {
    slides[current].classList.remove('active')
    current = (current + 1) % slides.length
    slides[current].classList.add('active')
  }, 5000)
}

function initHeroBackgroundSlider() {
  const slides = document.querySelectorAll('.hg-bg-slide')
  if (!slides.length) return

  let current = 0

  slides.forEach(s => s.classList.remove('active'))
  slides[0].classList.add('active')

  setInterval(() => {
    slides[current].classList.remove('active')
    current = (current + 1) % slides.length
    slides[current].classList.add('active')
  }, 6000)
}

/* ---------------- STATS ANIMATION ---------------- */

function animateStats() {
  const counters = document.querySelectorAll('[data-value]')
  if (!counters.length) return

  let started = false

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true
        counters.forEach(counter => animateCounter(counter))
      }
    })
  }, { threshold: 0.4 })

  observer.observe(counters[0])
}

function animateCounter(el) {
  const target = +el.dataset.value
  let current = 0
  const increment = target / 90

  const update = () => {
    current += increment
    if (current < target) {
      el.innerText = formatNumber(Math.floor(current))
      requestAnimationFrame(update)
    } else {
      el.innerText = formatNumber(target)
    }
  }

  update()
}

function formatNumber(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M"
  if (num >= 1_000) return Math.floor(num / 1_000) + "K"
  return num + "+"
}

/* ---------------- PRELOADER ---------------- */

function hidePreloader() {
  const loader = document.getElementById('preloader')
  if (!loader) return

  setTimeout(() => {
    loader.style.transition = 'opacity 0.8s ease'
    loader.style.opacity = '0'

    setTimeout(() => loader.remove(), 800)
  }, 1400)
}

/* ---------------- MOBILE MENU ---------------- */

function initMobileMenu() {
  const btn = document.getElementById('menu-toggle')
  const menu = document.getElementById('mobile-menu')

  if (!btn || !menu) return

  btn.onclick = () => {
    menu.classList.toggle('hidden')
  }

  menu.querySelectorAll('a').forEach(link => {
    link.onclick = () => menu.classList.add('hidden')
  })
}

/* ---------------- PRELOADER CANVAS ---------------- */

function initGardenPreloader() {
  const canvas = document.getElementById("garden-canvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const w = canvas.width = window.innerWidth
  const h = canvas.height = window.innerHeight

  const particles = []
  const center = { x: w / 2, y: h / 2 }

  for (let i = 0; i < 300; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * 0.4,
      vy: (Math.random() - .5) * 0.4,
      size: Math.random() * 1.6 + 0.4
    })
  }

  let collapse = false
  setTimeout(() => collapse = true, 2000)

  function draw() {
    ctx.clearRect(0, 0, w, h)

    particles.forEach(p => {
      if (collapse) {
        p.x += (center.x - p.x) * 0.05
        p.y += (center.y - p.y) * 0.05
      } else {
        p.x += p.vx
        p.y += p.vy
      }

      ctx.fillStyle = "rgba(212,175,55,0.85)"
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(draw)
  }

  draw()
}

/* ---------------- CURSOR LUXURY ---------------- */

const core = document.getElementById('lux-cursor-core')
const aura = document.getElementById('lux-cursor-aura')

if (core && aura && window.matchMedia('(pointer: fine)').matches) {

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2

  let coreX = mouseX
  let coreY = mouseY
  let auraX = mouseX
  let auraY = mouseY

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  function animateCursor() {
    coreX += (mouseX - coreX) * 0.45
    coreY += (mouseY - coreY) * 0.45

    auraX += (mouseX - auraX) * 0.12
    auraY += (mouseY - auraY) * 0.12

    core.style.left = coreX + 'px'
    core.style.top = coreY + 'px'
    aura.style.left = auraX + 'px'
    aura.style.top = auraY + 'px'

    requestAnimationFrame(animateCursor)
  }

  animateCursor()

  const hoverTargets = 'a, button, input, textarea, .btn-gold, .btn-outline-gold, .card-gold'

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      core.classList.add('cursor-hover-core')
      aura.classList.add('cursor-hover-aura')
    }
  })

  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) {
      core.classList.remove('cursor-hover-core')
      aura.classList.remove('cursor-hover-aura')
    }
  })
}
