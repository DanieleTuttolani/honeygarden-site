export default function Apply() {
  return `
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
  `
}
