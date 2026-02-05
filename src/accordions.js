export default function Accordion() {
  return `
<div class="max-w-4xl mx-auto px-6">



<div id="accordion-card" class="p-5 w-4/5 mx-auto" data-accordion="collapse">

  <h1 class="traffic-title mt-20 text-center mb-10 flex items-center justify-center gap-4">
  <i class="fa-solid fa-circle-question text-[#27a6df] text-xl"></i>
  <span class="text-[#333]">F.A.Q.</span>
</h1>

  <!-- 1 -->
  <h2 id="accordion-card-heading-1">
    <button type="button"
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
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
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
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
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
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
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
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
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
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
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
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
      class="flex items-center justify-between w-full py-5 border-b border-gray-300 text-left text-[#333] font-medium transition"
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
    class="hidden border-b border-gray-300"
    aria-labelledby="accordion-card-heading-7">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">
        Siamo qui per voi 24 ore su 24, sia che preferiate conversazioni quotidiane o check-in settimanali, il tutto gestito attraverso una comoda piattaforma di chat di gruppo. Grazie alle nostre abbondanti risorse e ai nostri sistemi efficienti, garantiamo un’elevata produttività e un’attenzione personalizzata. La vostra soddisfazione è la nostra massima priorità e ci impegniamo a rispondere a tutti i vostri dubbi in modo rapido e completo.
      </p>
    </div>
  </div>

</div>
</div>
`;
}
