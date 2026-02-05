export default function Stats() {
  return `
<section class="stats-section pt-24 pb-24 reveal">

  <!-- PRESS BAR -->
  <div class="press-bar">
    <div class="press-inner">
      <span class="press-label">Parlano di noi</span>

      <div class="press-marquee">
        <div class="press-track">
          <img src="/media/press/fortune.png">
          <img src="/media/press/of.png">
          <img src="/media/press/fanpage.png">

          <!-- DUPLICATO per loop infinito -->
          <img src="/media/press/fortune.png">
          <img src="/media/press/of.png">
          <img src="/media/press/fanpage.png">
        </div>
      </div>
    </div>
  </div>

  <!-- glow soft centrale -->
  <div class="stats-glow"></div>

  <div class="container mx-auto">

    <div class="flex flex-col items-center text-center">

      <h2 class="text-3xl md:text-4xl font-extrabold mt-14 mb-8">
        Delusa dai tuoi risultati attuali?
      </h2>

      <p class="w-full md:w-1/2 italic mb-12">
        Unisciti a noi per raggiungere nuovi traguardi straordinari, che da soli potrebbero sembrare irraggiungibili.
        Grazie ai nostri servizi, avrai l’opportunità di trasformarti in un marchio di successo, non solo da influencer.
      </p>

      <div class="stats-grid flex gap-x-6 justify-center">
        ${stat("creators", "120+", "Talent gestiti")}
        ${stat("revenue", "3.2M", "Ricavi generati")}
        ${stat("views", "25.0M", "Visualizzazioni mensili")}
      </div>

    </div>

  </div>

</section>
`;
}

/* ================= COMPONENT ================= */

function startCard() {
  return `
  <div class="problem-block">

    <div class="problem-header">

      <div class="problem-icon">
        <i class="fa-solid fa-face-sad-tear"></i>
      </div>

      <h2 class="problem-title">
        Delusa dai tuoi risultati attuali?
      </h2>

    </div>

    <p class="problem-text">
      Unisciti a noi per raggiungere nuovi traguardi straordinari,
      che da soli potrebbero sembrare irraggiungibili.
      Grazie ai nostri servizi, avrai l’opportunità di trasformarti
      in un marchio di successo, non solo da influencer.
    </p>

  </div>
  `;
}

function stat(id, value, label) {
  return `
  <div class="stat-card card-gold">

    <div id="${id}" class="stat-number">
      ${value}
    </div>

    <div class="stat-label">
      ${label}
    </div>

  </div>
  `;
}
