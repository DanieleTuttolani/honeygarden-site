export default function Hero() {
  /* ---------------- BACKGROUND SLIDER ---------------- */
  setTimeout(() => {
    const slides = document.querySelectorAll(".hg-bg-slide");
    if (!slides.length) return;

    let current = 0;

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 6000);
  }, 100);

  /* ---------------- LOGO FADE + HIDE ON SCROLL ---------------- */
  setTimeout(() => {
    const logo = document.getElementById("hg-hero-logo");
    if (!logo) return;

    requestAnimationFrame(() => logo.classList.add("visible"));

    window.addEventListener("scroll", () => {
      const hideAt = window.innerHeight * 0.35;
      logo.style.opacity = window.scrollY > hideAt ? "0" : "1";
    });
  }, 150);

  return `
<section class="hg-hero relative ">

  <!-- BACKGROUND SLIDER -->
  <div class="hg-hero-bg">
    <div class="hg-bg-slide active" style="background-image:url('/media/hero/hero-1.jpg')"></div>
    <div class="hg-bg-slide" style="background-image:url('/media/hero/hero-2.jpg')"></div>
  </div>

  <!-- OVERLAY -->
  <div class="hg-hero-overlay"></div>
  <div class="hg-light-sweep"></div>


  <!-- NOISE TEXTURE -->
  <div class="bg-noise"></div>

  <!-- CONTENT -->
  <div class="hg-hero-inner relative z-30 reveal">

    <!-- LOGO -->
    <img
      id="hg-hero-logo"
      src="/media/public/logo-honeygarden.png"
      alt="Honey Garden"
      class="
        hg-hero-logo
        absolute
        top-0
        right-0
        w-[220px]
        md:w-[320px]
        h-auto
        z-40
        select-none 
        pointer-events-none
      "
      title="Honey garden Logo"
    />



    <div class="hg-rotating-text">
      <span>Più Clienti</span>
      <span>Più Visibilità</span>
      <span>Più Fans</span>
    </div>

    <h1 class="hg-hero-title">
      Con La Migliore<br>
      <span>Agenzia di OnlyFans</span>
    </h1>

    <p class="hg-hero-desc">
      Da oltre 4 anni ci occupiamo della crescita dei Talent OF,
      offrendo strumenti di crescita e gestione che ottimizzano
      il tuo lavoro e incrementano i profitti ottenuti.
    </p>
    <div class="pt-5 flex"> 
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfq355ScYV57FSh5ES5Zsq34eymZt7-Rkv7QvnsTxqqL_z4LQ/viewform?usp=sharing&ouid=115609736214063956727"
        class="text-center btn-gold-xl scrollto  w-100">
        INIZIA ORA
      </a>
    </div>
  </div>

</section>
`;
}
