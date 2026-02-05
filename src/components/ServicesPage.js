export default function ServicesPage() {
  return `
  <section class="services-page min-h-screen pt-32 pb-24 px-6 reveal">

    <div class="max-w-6xl mx-auto">

      <h1 class="text-4xl font-bold mb-6">Our Services</h1>
      <p class="text-gray-400 mb-16 max-w-2xl">
        We provide full-stack creator management, growth systems and monetization infrastructure.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        ${card("OnlyFans Management", "Pricing strategy, content planning, upsell systems, retention, chatter management.")}
        ${card("Social Media Growth", "TikTok, Instagram, X and Telegram growth systems to drive constant traffic.")}
        ${card("Automation Systems", "Discord bots, CRM, funnel automation and analytics dashboards.")}
        ${card("Branding & Positioning", "Personal brand development, niche positioning and visual identity.")}
        ${card("Content Strategy", "Viral content frameworks, posting schedules and performance analysis.")}
        ${card("Monetization Funnels", "Advanced funnels to maximize LTV and monthly recurring revenue.")}

      </div>

    </div>
  </section>
  `
}

function card(title, desc) {
  return `
  <div class="service-gradient-card">

    <div class="service-text">

      <div class="service-label">
        PERCORSO PER IL SUCCESSO
      </div>

      <h3 class="service-title">
        ${title}
      </h3>

      <div class="service-line"></div>

      <p class="service-desc">
        ${desc}
      </p>

    </div>

  </div>
  `
}

