(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();function h(){return setTimeout(()=>{const e=document.querySelectorAll(".hg-bg-slide");if(!e.length)return;let t=0;setInterval(()=>{e[t].classList.remove("active"),t=(t+1)%e.length,e[t].classList.add("active")},6e3)},100),setTimeout(()=>{const e=document.getElementById("hg-hero-logo");e&&(requestAnimationFrame(()=>e.classList.add("visible")),window.addEventListener("scroll",()=>{const t=window.innerHeight*.35;e.style.opacity=window.scrollY>t?"0":"1"}))},150),`
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
      <span>Più clienti</span>
      <span>Più visibilità</span>
      <span>Più fans</span>
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
      <button  class="text-center btn-gold-xl scrollto  w-100">
        INIZIA ORA
      </button>
    </div>
  </div>

</section>
`}function x(){return`
  <section class="reveal pt-32 pb-10 section-traffic border-t-2 border-cyan-950 z-20">

    <!-- TITLE -->
    <div class="text-center mb-24">
      <h2 class="traffic-title mb-6">
        È una questione di
        <span class="underline-wrap">
          Traffico
          <span class="underline-anim"></span>
        </span>
      </h2>

    </div>

    <!-- TRAFFIC SYSTEM -->
    <div class="max-w-6xl mx-auto px-6 mb-36 ">

      <div class="traffic-layout md:flex">

        <!-- LEFT -->
        <div class="traffic-col left ">
          ${d("Instagram",k())}
        </div>
        
        <!-- CENTER -->
        <div class="traffic-center md:flex block my-5">

          <div class="traffic-line hidden md:block"></div> 
          <div class="traffic-line-vert vert-top-left md:hidden block"></div> 
          <div class="traffic-line-vert vert-top-right md:hidden block"></div> 
        
          <div class=" flex md:flex-col gap-y-2 gap-x-4 text-center traffic-hub justify-center">
          
            ${d("TikTok",w())}
            ${d("YouTube",E())}
          
          </div>
        </div>
        
        <!-- RIGHT -->
        <div class="md:flex-col relative md:gap-y-2 gap-x-5 right flex justify-center  md:block ">
          <div class="traffic-line line-top hidden md:block"></div>
          <div class="traffic-line hidden md:block"></div>
          <div class="traffic-line line-bot hidden md:block"></div>

          
          <div class="traffic-line-vert vert-bot-left md:hidden block"></div> 
          <div class="traffic-line-vert vert-bot-center1 md:hidden block"></div> 
          <div class="traffic-line-vert vert-bot-center2 md:hidden block"></div> 
          <div class="traffic-line-vert vert-bot-right md:hidden block"></div> 
        

          ${d("Facebook",z())}
          ${d("Reddit",I())}
          ${d("Snapchat",y())}
        </div>
      </div>

      <div class="text-white card-gold p-5 mt-20 relative">
        

        <i class="fa fa-solid fa-eye text-amber-300 eye hidden md:block md:text-9xl"></i>
        
        <h1 class="traffic-title">
          TUTTO SOTTO IL 
          <span class="underline-wrap">
            NOSTRO 
            <span class="underline-anim"></span>
          </span> 
          CONTROLLO.
        </h1>
        <p class="font-light max-w-1/2 text-center my-3">
          Il tuo successo inizia dalla capacità di generare traffico. Per questo motivo, sviluppiamo strategie su misura per ampliare la tua visibilità, creare processi efficaci che guidino le persone verso la piattaforma Blu e trasformare ogni interazione in opportunità di vendita.
        </p>
      </div>
    </div>

    </div>
    
  </section>
  `}function d(e,t){return`
  <div class="
    card-gold
    traffic-platform
    flex items-center gap-4
    px-6 py-4
    w-fit
    self-center
  ">
    <div class="text-xl text-[color:var(--gold-2)]">
      ${t}
    </div>
    <span class="tracking-wide text-xl hidden md:block">
      ${e}
    </span>
  </div>
  `}function w(){return'<i class="fa-brands fa-tiktok"></i>'}function y(){return'<i class="fa-brands fa-snapchat"></i>'}function k(){return'<i class="fa-brands fa-instagram"></i>'}function I(){return'<i class="fa-brands fa-reddit"></i>'}function z(){return'<i class="fa-brands fa-facebook"></i>'}function E(){return'<i class="fa-brands fa-youtube"></i>'}function C(){return`
<section class="stats-section pt-12 reveal border-t-2 border-amber-300">

  <!-- glow soft centrale -->
  <div class="stats-glow"></div>

  <div class="container mx-auto">
    
    <div class="flex flex-col">
      <h2 class="text-center text-3xl md:text-4xl font-extrabold mb-20">
      I nostri <span class="text-[color:var(--gold-2)]">Risultati</span> parlano chiaro
      </h2>
      
      <div class="md:flex self-center gap-x-2">
      
        ${L()}
        <div class="stats-grid self-center flex flex-col gap-y-1">
          
          ${p("creators","120+","Creator gestiti")}
          ${p("revenue","3.2M","Ricavi generati")}
          ${p("views","25.0M","Visualizzazioni mensili")}
        </div>
      </div>
    </div>
  </div>

  <div class="hg-wave-wrapper  bottom-0 left-0 w-full z-40 pointer-events-none">
    <img src="/svg/blackwave.svg" class="w-full block" />
  </div>
</section>
`}function L(){return`
  <div class="stat-card card-gold">
        <div class="stat-number">
          Deluso dai tuoi risultati attuali ?
          <i class="fa-solid fa-umbrella"></i>

        </div>
        <div class="stat-label">
          bla bla bla ecco i nostri
        </div>
    </div>
  `}function p(e,t,a){return`
  <div class="stat-card card-gold">

    <div
      id="${e}"
      class="stat-number"
    >
      ${t}
    </div>

    <div class="stat-label">
      ${a}
    </div>

  </div>
  `}function T(){return`
  <section class="reveal relative z-10 bg-black">

    <div class="max-w-6xl mx-auto px-6 py-10">

      <!-- TITLE -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-[color:var(--gold-2)]">
          Delusa dai tuoi risultati attuali?
        </h2>

        <p class="text-[color:var(--gold-1)] opacity-80 max-w-2xl mx-auto">
          Unisciti a noi per raggiungere nuovi traguardi straordinari che da solo sembrerebbero irraggiungibili.
        </p>
      </div>

      <div class="text-center mb-16">
        <h3 class="text-2xl md:text-3xl font-bold">
          La tua crescita è a <span class="text-[color:var(--gold-2)]">5 semplici</span> passi.
        </h3>
      </div>

      <!-- STEPS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

        ${m("1","Gestiamo profili di successo da oltre 2 anni; sfruttiamo il nostro expertise e la nostra conoscenza del settore OnlyFans per aumentare significativamente il tuo guadagno.")}

        ${m("2","Marketing su misura","Strategie personalizzate su TikTok, Instagram, X e Reddit per aumentare traffico qualificato.")}

        ${m("3","Creazione contenuti","Ti aiutiamo a creare contenuti ottimizzati per massimizzare l’interesse e la fidelizzazione.")}

        ${m("4","Automazione processi","Gestione chat, assistenza, pagamenti e funnel automatizzati con sistemi proprietari.")}

      </div>

      <!-- FINAL STEP -->
      <div class="card-gold p-12 text-center max-w-4xl mx-auto">

        <div class="text-4xl font-extrabold text-[color:var(--gold-2)] mb-4">
          5.
        </div>

        <h3 class="text-2xl md:text-3xl font-bold mb-6">
          L’ultimo passo è conoscerci.
        </h3>

        <button class="btn-gold-xl mt-4 inline-block scrollto">
          CONTATTACI ADESSO
        </button>

      </div>

    </div>

  </section>
  `}function m(e,t,a){return`
  <div class="card-gold p-8 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] transition">

    <div class="text-3xl font-extrabold text-[color:var(--gold-2)] mb-3">
      ${e}.
    </div>

    <h4 class="text-xl font-bold mb-3 text-[color:var(--gold-2)]">
      ${t}
    </h4>

    <p class="text-[color:var(--gold-1)] opacity-80 leading-relaxed">
      ${a}
    </p>

  </div>
  `}function f(){return`
  <section id="my_form" class="reveal border-t-2 border-amber-300">

    <div class="max-w-5xl mx-auto p-10">

      <!-- TITLE -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-[color:var(--gold-2)]">
          Candidati a Honey Garden
        </h2>

        <p class="text-[color:var(--gold-1)] opacity-80 max-w-2xl mx-auto">
          Compila il modulo. Il nostro team analizzerà il tuo profilo e ti contatterà entro 24 ore.
        </p>
      </div>

      <!-- FORM -->
      <form class="card-gold p-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        <input class="input" placeholder="Nome e cognome" required />
        <input class="input" placeholder="Email" type="email" required />

        <input class="input" placeholder="Username Telegram" />
        <input class="input" placeholder="Guadagni mensili attuali (€)" type="number" />

        <textarea 
          class="input md:col-span-2 h-32 resize-none"
          placeholder="Parlaci brevemente di te, dei tuoi obiettivi e delle piattaforme che utilizzi"
        ></textarea>

        <div class="md:col-span-2 text-center mt-4">
          <button type="submit" class="btn-gold-xl">
            INVIA CANDIDATURA
          </button>

          <p class="text-xs text-[color:var(--gold-1)] opacity-60 mt-3">
            I tuoi dati non verranno condivisi con terze parti.
          </p>
        </div>

      </form>

    </div>

  </section>
  `}function O(){return`
  <!-- MAIN FOOTER -->
  <footer class="
    relative
    overflow-hidden
    py-28
    text-center
    border-t border-[rgba(212,175,55,0.25)]
    bg-gradient-to-b
    from-[#0b0b0b]
    via-[#070707]
    to-black
  ">

    <!-- GLOW BACKGROUND -->
    <div class="
      pointer-events-none
      absolute inset-0
      bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.18),transparent_65%)]
    "></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6">

      <!-- LOGO -->
      <div class="mb-12">
        <div class="
          text-5xl md:text-6xl
          font-extrabold
          tracking-[0.35em]
          text-[color:var(--gold-2)]
          leading-tight
          drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]
        ">
          HONEY<br/>GARDEN
        </div>
      </div>

      <!-- TAGLINE -->
      <p class="
        text-lg md:text-xl
        text-[color:var(--gold-1)]
        opacity-80
        mb-20
        max-w-xl
        mx-auto
      ">
        Il tuo riferimento per il progresso
      </p>

      <!-- DIVIDER -->
      <div class="
        h-px w-full
        bg-gradient-to-r
        from-transparent
        via-[rgba(212,175,55,0.35)]
        to-transparent
        mb-16
      "></div>

      <!-- SOCIAL TITLE -->
      <div class="
        text-sm
        tracking-[0.3em]
        uppercase
        text-[color:var(--gold-1)]
        opacity-70
        mb-10
      ">
        Seguici
      </div>

      <!-- SOCIAL ICONS -->
      <div class="flex justify-center gap-10 mb-24">

        ${v("youtube","https://www.youtube.com/@honeygardenof")}
        ${v("tiktok","https://www.tiktok.com/@honeygarden.of/")}
        ${v("instagram","https://www.instagram.com/honeygardenmgmt")}

      </div>

      <!-- COPYRIGHT -->
      <div class="
        text-xs
        text-[color:var(--gold-1)]
        opacity-50
        tracking-wide
      ">
        © ${new Date().getFullYear()} Honey Garden — Tutti i diritti riservati
      </div>

    </div>

  </footer>
  `}function v(e,t){const a={youtube:S(),tiktok:A(),instagram:$()};return`
    <a href="${t}" target="_blank" rel="noopener"
      class="
        w-16 h-16
        flex items-center justify-center
        rounded-full
        border border-[rgba(212,175,55,0.35)]
        text-[color:var(--gold-2)]
        transition-all duration-300
        hover:border-[color:var(--gold-2)]
        hover:shadow-[0_0_35px_rgba(212,175,55,0.65)]
        hover:scale-110
        bg-black/40
        backdrop-blur
      ">
      ${a[e]}
    </a>
  `}function S(){return`
  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.5 6.5s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.9 2.8 12 2.8 12 2.8s-4.9 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.3 0 10v4c0 1.7.5 3.5.5 3.5s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s4.9 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.8.5-3.5v-4c0-1.7-.5-3.5-.5-3.5zM9.6 14.5v-6l6.4 3-6.4 3z"/>
  </svg>
  `}function A(){return`
  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.8 2h3.3c.4 2.2 1.7 3.5 3.9 3.7v3.3c-1.5.1-3-.4-4.1-1.2v6.4c0 4-4.3 6.3-7.6 4.4-2.2-1.3-3.1-4-2.1-6.4 1-2.5 3.9-3.9 6.4-3.2v3.6c-1.3-.4-2.8.3-3 1.7-.3 1.8 1.8 3 3.3 2.1.5-.3.9-.9.9-1.6V2z"/>
  </svg>
  `}function $(){return`
  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 12 9a2.9 2.9 0 0 1 0 5.9zm4.8-7.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"/>
  </svg>
  `}function R(){return`
  <section class="min-h-screen pt-32 pb-24 px-6 reveal">

    <div class="max-w-6xl mx-auto">

      <!-- HEADER -->
      <div class="text-center">
        <h1 class="text-4xl font-extrabold mb-4 text-[color:var(--gold-2)]">
          Parlano di noi
        </h1>

        <p class="text-[color:var(--gold-1)] opacity-80 max-w-2xl mx-auto">
          Creator e partner che hanno scelto Honey Garden per far crescere il proprio brand.
        </p>
      </div>

    </div>

  </section>
  `}function q(){setTimeout(()=>{const e=document.querySelectorAll(".hg-slide");if(!e.length)return;let t=0;e.forEach(a=>a.classList.remove("active")),e[0].classList.add("active"),setInterval(()=>{e[t].classList.remove("active"),t=(t+1)%e.length,e[t].classList.add("active")},6e3)},100)}function M(){return`
<div class="container-lg">
<div id="accordion-card" class="p-5" data-accordion="collapse">

  <!-- 1 -->
  <h2 id="accordion-card-heading-1">
    <button type="button"
      class="border-amber-300 border-2  flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-1"
      aria-expanded="true"
      aria-controls="accordion-card-body-1">
      <span>Cosa distingue Honey Garden dalle altre agenzie OnlyFans?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-1"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-1">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        In Honey Garden, la qualità guida le nostre azioni. Il nostro team di professionisti dedicati fornisce competenze e strategie di alto livello che producono risultati di alta qualità. Ci impegniamo a trasformare il vostro viaggio su OnlyFans in una storia di notevole successo.
      </p>
    </div>
  </div>

  <!-- 2 -->
  <h2 id="accordion-card-heading-2">
    <button type="button"
      class="border-amber-300 border-2  flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-2"
      aria-expanded="false"
      aria-controls="accordion-card-body-2">
      <span>Quali sono i costi da sostenere?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-2"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-2">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        In Honey Garden crediamo nel successo reciproco. Seguiamo il modello “prima il profitto, poi il pagamento”: nessun costo anticipato, guadagniamo solo quando lo fate voi. Questo favorisce la condivisione degli obiettivi e ribadisce il nostro impegno per il vostro successo.
      </p>
    </div>
  </div>

  <!-- 3 -->
  <h2 id="accordion-card-heading-3">
    <button type="button"
      class="border-amber-300 border-2  flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-3"
      aria-expanded="false"
      aria-controls="accordion-card-body-3">
      <span>È necessario un contratto?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-3"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-3">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        Per garantire la comprensione e la protezione reciproca, abbiamo bisogno di contratti. Ma teniamo anche alla flessibilità: i nostri contratti possono essere annullati con un preavviso di 30 giorni. Questi rinnovi mensili riflettono il nostro continuo successo e la fiducia che i nostri creatori investono in noi.
      </p>
    </div>
  </div>

  <!-- 4 -->
  <h2 id="accordion-card-heading-4">
    <button type="button"
      class="border-amber-300 border-2  flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-4"
      aria-expanded="false"
      aria-controls="accordion-card-body-4">
      <span>Come posso iniziare?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-4"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-4">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        Entrare a far parte di Honey Garden è facile. Iniziate facendo domanda sul nostro sito web e raccontandoci qualcosa di voi. Se c’è un potenziale accordo, fisseremo una telefonata per capire la vostra esperienza e i vostri obiettivi. Vi spiegheremo anche i nostri servizi e come possiamo migliorare il vostro marchio e la vostra pagina OnlyFans. Se decidiamo di collaborare, vi guideremo attraverso il nostro semplice processo di onboarding.
      </p>
    </div>
  </div>

  <!-- 5 -->
  <h2 id="accordion-card-heading-5">
    <button type="button"
      class="border-amber-300 border-2  flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-5"
      aria-expanded="false"
      aria-controls="accordion-card-body-5">
      <span>In che modo Honey Garden può aiutarmi?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-5"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-5">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        Forniamo un’analisi approfondita del vostro account per favorire una crescita ottimale. Eliminando gli ostacoli e impostando il successo, le nostre strategie di marketing si integrano perfettamente con le nostre pratiche di gestione dei clienti. Il nostro obiettivo non è solo quello di aumentare le entrate, ma anche di dare vita alla visione del vostro marchio.
      </p>
    </div>
  </div>

  <!-- 6 -->
  <h2 id="accordion-card-heading-6">
    <button type="button"
      class="border-amber-300 border-2  flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-6"
      aria-expanded="false"
      aria-controls="accordion-card-body-6">
      <span>Posso candidarmi se sono nuovo di OnlyFans?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-6"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-6">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        Sebbene il nostro obiettivo sia quello di espandere gli account esistenti, diamo il benvenuto ai nuovi arrivati. Valutiamo le candidature in base a una serie di fattori per formare partnership di successo.
      </p>
    </div>
  </div>

  <!-- 7 -->
  <h2 id="accordion-card-heading-7">
    <button type="button"
      class="border-amber-300 border-2   flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
      data-accordion-target="#accordion-card-body-7"
      aria-expanded="false"
      aria-controls="accordion-card-body-7">
      <span>Con quale frequenza comunicheremo?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  </h2>

  <div id="accordion-card-body-7"
    class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
    aria-labelledby="accordion-card-heading-7">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        Siamo qui per voi 24 ore su 24, sia che preferiate conversazioni quotidiane o check-in settimanali, il tutto gestito attraverso una comoda piattaforma di chat di gruppo. Grazie alle nostre abbondanti risorse e ai nostri sistemi efficienti, garantiamo un’elevata produttività e un’attenzione personalizzata. La vostra soddisfazione è la nostra massima priorità e ci impegniamo a rispondere a tutti i vostri dubbi in modo rapido e completo.
      </p>
    </div>
  </div>

</div>
</div>
`}function j(){return`

        <!-- what we do -->
    <section
      id="what_we_do"
      class="border-t-2 what-we-do-section border-amber-400 "
    >
      <div class="py-5 w-100 relative container mx-auto ">

        <div class="z-10 relative flex flex-col gap-y-10">
          <h1
            class="text-center text-3xl md:text-4xl font-extrabold mb-4 text-[color:var(--gold-2)]"
          >
            Il Nostro servizio
          </h1>

          <div class="card h-full flex justify-center align-content-center">
            <div class="card-gold rounded-lg flex flex-col md:flex-row px-10 pt-10 justify-between gap-y-10 md:gap-x-10">
              <div class="text-wrapper flex flex-col max-w-xl z-10">
                <h2 class="wwd-card-title font-light mb-2">
                  PERCORSO PER IL
                  <span class="underline-wrap font-bold">
                    SUCCESSO
                    <span class="underline-anim"></span>
                  </span>
                </h2>
                <h1 class="text-4xl font-semibold">Consulenza per Creatori</h1>
                <hr class="my-1 border-amber-200">
                <p class="grow-0">
                  Scopri il potere di una fusione tra strategia, testo seducente
                  e competenza di marketing di alto livello. Approfondiamo ed
                  identifichiamo le forze che plasmano il tuo account, svelando
                  le opportunità che favoriscono un notevole aumento dei tuoi
                  ricavi. Insieme, creeremo un marchio che rifletta veramente il
                  tuo successo e la tua visione.
                </p>
              </div>

              <img
                class="w-100 md:w-1/3 h-fit self-end "
                src="https://honeygarden.fun/wp-content/uploads/2024/10/2E5CAD04-8C48-43A8-AC98-88078A0C895F.webp"
                alt=""
              />
            </div>
          </div>
          <!--seconda-->
          <div class="card h-full flex justify-center align-content-center">
            <div class="card-gold rounded-lg flex flex-col md:flex-row px-10 pt-10 justify-between gap-y-10 md:gap-x-10">
              <div class="text-wrapper flex flex-col max-w-xl z-10 gap-x-10">
                <h2 class="wwd-card-title font-light mb-2">
                  PERCORSO PER IL
                  <span class="underline-wrap font-bold">
                    SUCCESSO
                    <span class="underline-anim"></span>
                  </span>
                </h2>
                <h1 class="text-4xl font-semibold">Attrai con strategie specializzate</h1>
                <hr class="my-1 border-amber-200">
                <p>
                  Tutti possono emergere sui social media. Noi creiamo connessioni significative ogni giorno, unendo te e il tuo contenuto con il tuo pubblico ideale. Attraverso funnel progettati con efficacia, guidiamo il tuo target verso risultati concreti. Scegli di fare la differenza con noi.
                </p>
              </div>

              <img
                class="w-100 md:w-1/3 h-fit self-end"
                src="https://honeygarden.fun/wp-content/uploads/2024/10/111.png"
                alt=""
              />
            </div>
          </div>
          <div class="card h-full flex justify-center align-content-center">
            <div class="card-gold rounded-lg flex px-10 pt-10 justify-between gap-y-10 md:gap-x-10 flex-col md:flex-row">
              <div class="text-wrapper flex flex-col max-w-xl z-10">
                <h2 class="wwd-card-title font-light mb-2">
                  PERCORSO PER IL
                  <span class="underline-wrap font-bold">
                    SUCCESSO
                    <span class="underline-anim"></span>
                  </span>
                </h2>
                <h1 class="text-4xl font-semibold">Chatters interni</h1>
                <hr class="my-1 border-amber-200">
                <p class="">
                  Definiamo costantemente il coinvolgimento con un’enfasi sulla costruzione di legami autentici con ogni fan, trattandoli come una persona reale. Il nostro team interno in Italia garantisce che i fan non si sentano venduti, ma piuttosto, chiedano naturalmente ulteriori contenuti e coinvolgimento.
                </p>
              </div>

              <img
                class="w-100 md:w-1/3 h-fit self-center md:self-end"
                src="https://honeygarden.fun/wp-content/uploads/2024/10/112.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    `}function P(){return`
    ${h()}
    ${C()}
    ${T()}
    ${j()}
    ${x()}
    ${f()}
  `}function H(){return R()}function g(){const e=window.location.pathname;let t=P();e==="/creators"&&(t=H()),e==="/apply"&&(t=f()),document.querySelector("#app").innerHTML=`
    ${t}
    ${M()}
    ${O()}
  `,q(),D(),N(),G(),F(),B(),Y()}window.addEventListener("popstate",g);g();function N(){const e=document.querySelectorAll(".reveal");if(!e.length)return;const t=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&n.target.classList.add("active")})},{threshold:.15});e.forEach(a=>t.observe(a))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".scrollto").forEach(t=>{t.addEventListener("click",function(){document.getElementById("my_form").scrollIntoView({behavior:"smooth"})})})});function F(){const e=document.querySelectorAll(".hg-slide");if(!e.length)return;let t=0;e.forEach(a=>a.classList.remove("active")),e[0].classList.add("active"),setInterval(()=>{e[t].classList.remove("active"),t=(t+1)%e.length,e[t].classList.add("active")},5e3)}function G(){const e=document.querySelectorAll("[data-value]");if(!e.length)return;let t=!1;new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&!t&&(t=!0,e.forEach(r=>_(r)))})},{threshold:.4}).observe(e[0])}function _(e){const t=+e.dataset.value;let a=0;const n=t/90,o=()=>{a+=n,a<t?(e.innerText=b(Math.floor(a)),requestAnimationFrame(o)):e.innerText=b(t)};o()}function b(e){return e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?Math.floor(e/1e3)+"K":e+"+"}function B(){const e=document.getElementById("preloader");e&&setTimeout(()=>{e.style.transition="opacity 0.8s ease",e.style.opacity="0",setTimeout(()=>e.remove(),800)},1400)}function D(){const e=document.getElementById("menu-toggle"),t=document.getElementById("mobile-menu");!e||!t||(e.onclick=()=>{t.classList.toggle("hidden")},t.querySelectorAll("a").forEach(a=>{a.onclick=()=>t.classList.add("hidden")}))}function Y(){const e=document.getElementById("garden-canvas");if(!e)return;const t=e.getContext("2d"),a=e.width=window.innerWidth,n=e.height=window.innerHeight,o=[],r={x:a/2,y:n/2};for(let i=0;i<300;i++)o.push({x:Math.random()*a,y:Math.random()*n,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,size:Math.random()*1.6+.4});let s=!1;setTimeout(()=>s=!0,2e3);function l(){t.clearRect(0,0,a,n),o.forEach(i=>{s?(i.x+=(r.x-i.x)*.05,i.y+=(r.y-i.y)*.05):(i.x+=i.vx,i.y+=i.vy),t.fillStyle="rgba(212,175,55,0.85)",t.beginPath(),t.arc(i.x,i.y,i.size,0,Math.PI*2),t.fill()}),requestAnimationFrame(l)}l()}const c=document.getElementById("lux-cursor-core"),u=document.getElementById("lux-cursor-aura");if(c&&u&&window.matchMedia("(pointer: fine)").matches){let s=function(){a+=(e-a)*.45,n+=(t-n)*.45,o+=(e-o)*.12,r+=(t-r)*.12,c.style.left=a+"px",c.style.top=n+"px",u.style.left=o+"px",u.style.top=r+"px",requestAnimationFrame(s)};var U=s;let e=window.innerWidth/2,t=window.innerHeight/2,a=e,n=t,o=e,r=t;document.addEventListener("mousemove",i=>{e=i.clientX,t=i.clientY}),s();const l="a, button, input, textarea, .btn-gold, .btn-outline-gold, .card-gold";document.addEventListener("mouseover",i=>{i.target.closest(l)&&(c.classList.add("cursor-hover-core"),u.classList.add("cursor-hover-aura"))}),document.addEventListener("mouseout",i=>{i.target.closest(l)&&(c.classList.remove("cursor-hover-core"),u.classList.remove("cursor-hover-aura"))})}
