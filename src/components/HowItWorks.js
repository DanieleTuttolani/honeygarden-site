export default function HowItWorks() {
  return `
  <section class="reveal relative z-10 bg-gradiant">

    <div class="max-w-6xl mx-auto px-6 py-10">

      <!-- TITLE -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-black">
            Scopri la <span class="text-[#27a6df]">nostra realtà</span>
        </h2>

        <p class="text-gray-600 max-w-2xl mx-auto">
          <span class="text-[#27a6df] font-semibold">Honey Garden</span>
          valorizza i Talent trasformando la loro presenza online in un business strutturato e scalabile.
          Uniamo strategia, creatività e tecnologia per far crescere brand digitali solidi,
          riconoscibili e orientati ai risultati.
          <span class="text-[#27a6df] font-medium">Trasformiamo le idee in valore.</span>
        </p>
      </div>

      <div class="text-center mb-16">
        <h3 class="text-2xl md:text-3xl font-bold tracking-tight">
          La tua crescita è a <span class="text-[#27a6df]">5 semplici</span> passi.
        </h3>
      </div>

      <!-- STEPS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

        ${stepCard("1", "Account<br>Management", "Gestiamo profili di successo da oltre 4 anni; sfruttiamo il nostro expertise e la nostra conoscenza del settore OnlyFans per aumentare significativamente il tuo guadagno. Proteggiamo immagine, privacy e ricavi dei Talent attraverso sistemi di sicurezza avanzati e interventi legali mirati.")}

        ${stepCard("2", "Marketing<br>Su Misura", "Promuoviamo e ampliamo la tua base di fan attraverso strategie di crescita personalizzate e mirate su tutti i tuoi canali social (TikTok, X, Instagram e altre piattaforme). Al Talent è richiesto di concentrarsi esclusivamente sulla creazione attiva dei contenuti, mentre il nostro team gestisce strategia, distribuzione e ottimizzazione.")}

        ${stepCard("3", "Creazione<br>dei Contenuti", "Ti assistiamo nella creazione dei giusti contenuti per le piattaforme Social, incluso OnlyFans, per massimizzare il tuo potenziale di guadagno.")}

        ${stepCard("4", "Automazione<br>dei Processi", "Hai bisogno di un team che possa dislocare tutte le figure per la gestione del tuo progetto. Assistenza, chatting e molto altro. Dal 2024, integriamo anche l’IA.")}

      </div>

      <!-- FINAL STEP -->

<div class="text-center max-w-4xl mx-auto py-20">

  <div class="text-6xl font-light text-[#27a6df] mb-6">
    5.
  </div>

  <h3 class="text-3xl md:text-4xl font-medium text-[#444] mb-10">
    L’ultimo passo è conoscerci.
  </h3>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfq355ScYV57FSh5ES5Zsq34eymZt7-Rkv7QvnsTxqqL_z4LQ/viewform?usp=sharing&ouid=115609736214063956727"
    class="btn-gold-xl inline-block">
    CONTATTACI ADESSO
  </a>

</div>


  </section>
  `
}


/* -------- COMPONENT -------- */

function stepCard(num, title, desc) {
  return `
  <div class="card-gold how-card p-8 transition duration-300">

    <!-- NUMERO + TITOLO -->
    <div class="flex items-start gap-6 mb-4">

      <div class="text-5xl font-light text-[#27a6df] leading-none translate-y-[3px]">
        ${num}.
      </div>

      <h4 class="text-xl font-normal text-[#333] leading-tight">
        ${title}
      </h4>

    </div>

    <p class="text-gray-600 leading-relaxed">
      ${desc}
    </p>

  </div>
  `
}

