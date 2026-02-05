export default function Footer() {
  return `

  <!-- MAIN FOOTER -->
  <footer class="
    relative
    py-28
    text-center
    bg-gradient-to-b
    from-[#1a1a1a]
    via-[#141414]
    to-[#0e0e0e]
  ">

    <div class="relative z-10 max-w-5xl mx-auto px-6">

      <!-- LOGO -->
      <div class="mb-12">

        <!-- LAVORA CON NOI -->
        <div class="
          text-sm
          tracking-[0.35em]
          uppercase
          text-gray-300
          opacity-80
          mb-6
        ">
          Lavora con noi
        </div>

        <!-- LOGO IMAGE -->
        <img
          src="/media/public/logo-honeygarden.png"
          alt="Honey Garden"
          class="
            mx-auto
            w-48 md:w-56
          "
        />

        <!-- DIVENTA CHATTER -->
        <div class="mt-6 text-center">

          <!-- TITLE -->
          <div class="
            text-lg md:text-xl
            text-white
            font-medium
            mb-3
          ">
            Non perdere l'occasione
          </div>

          <!-- DESCRIPTION -->
          <p class="
            text-sm md:text-base
            text-gray-300
            max-w-xl
            mx-auto
            leading-relaxed
          ">
            Gestisci le chat social dei nostri Talent e trasforma le conversazioni in risultati.
            Lavoro 100% smart working, compenso a provvigione, formazione inclusa.
            Cerchiamo ogni giorno persone affidabili, comunicative e orientate agli obiettivi. 
            Contattaci su WhatsApp dal bottone a destra!
          </p>

        </div>

        <!-- TAGLINE -->
        <p class="
          text-lg md:text-xl
          text-gray-200
          mt-6
          mb-14
          max-w-xl
          mx-auto
        ">
          Il tuo riferimento per il progresso
        </p>

      </div>

      <!-- DIVIDER -->
      <div class="
        h-px w-full
        bg-gray-600/40
        mb-16
      "></div>

      <!-- SOCIAL TITLE -->
      <div class="
        text-sm
        tracking-[0.3em]
        uppercase
        text-gray-300
        mb-10
      ">
        I NOSTRI CONTATTI
      </div>

      <!-- SOCIAL ICONS -->
      <div class="flex justify-center gap-10 mb-24">

        ${socialIcon("youtube", "https://www.youtube.com/@honeygardenof")}
        ${socialIcon("tiktok", "https://www.tiktok.com/@honeygarden.of/")}
        ${socialIcon("instagram", "https://www.instagram.com/honeygardenmgmt")}

      </div>

      <!-- COPYRIGHT -->
      <div class="
        text-xs
        text-gray-400
        tracking-wide
      ">
        © ${new Date().getFullYear()} Honey Garden — Tutti i diritti riservati
      </div>

    </div>

  </footer>
  `
}

/* =========================
   SOCIAL ICON COMPONENT
========================= */

function socialIcon(type, url) {
  const icons = {
    youtube: youtubeIcon(),
    tiktok: tiktokIcon(),
    instagram: instagramIcon()
  }

  return `
    <a href="${url}" target="_blank" rel="noopener"
      class="
        w-16 h-16
        flex items-center justify-center
        rounded-full
        border border-white/20
        text-white
        transition-all duration-300
        hover:border-white
        hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
        hover:scale-110
        bg-white/5
      ">
      ${icons[type]}
    </a>
  `
}

/* =========================
   SVG ICONS
========================= */

function youtubeIcon() {
  return `
  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.5 6.5s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.9 2.8 12 2.8 12 2.8s-4.9 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.3 0 10v4c0 1.7.5 3.5.5 3.5s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s4.9 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.8.5-3.5v-4c0-1.7-.5-3.5-.5-3.5zM9.6 14.5v-6l6.4 3-6.4 3z"/>
  </svg>
  `
}

function tiktokIcon() {
  return `
  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.8 2h3.3c.4 2.2 1.7 3.5 3.9 3.7v3.3c-1.5.1-3-.4-4.1-1.2v6.4c0 4-4.3 6.3-7.6 4.4-2.2-1.3-3.1-4-2.1-6.4 1-2.5 3.9-3.9 6.4-3.2v3.6c-1.3-.4-2.8.3-3 1.7-.3 1.8 1.8 3 3.3 2.1.5-.3.9-.9.9-1.6V2z"/>
  </svg>
  `
}

function instagramIcon() {
  return `
  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 12 9a2.9 2.9 0 0 1 0 5.9zm4.8-7.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"/>
  </svg>
  `
}
