export default function Features() {
return `
<section class="reveal pt-32 bg-gradiant z-20">

<div class="max-w-6xl mx-auto px-6 text-center">

<h2 class="traffic-title mb-20">

  È una questione di <br>

  <span class="traffic-underline">

    Traffico

    <svg class="underline-svg" viewBox="0 0 260 60">
      <path d="M20 40 Q130 65 240 40"></path>
    </svg>

  </span>

</h2>




<div class="traffic-wrapper">

<div class="traffic-grid">

<!-- LEFT COLUMN -->
<div class="traffic-column">
${platform("Tiktok", tiktokIcon())}
<span class="node"></span>
${platform("Snapchat", snapchatIcon())}
<div class="line"></div>
</div>

<!-- CENTER COLUMN -->
<div class="traffic-column center">
${platform("Instagram", instagramIcon())}
<span class="node"></span>
${platform("Reddit", redditIcon())}
<span class="node"></span>
${platform("Twitter", twitterIcon())}
<div class="line"></div>
</div>

<!-- RIGHT COLUMN -->
<div class="traffic-column">
${platform("Facebook", facebookIcon())}
<span class="node"></span>
${platform("Youtube", youtubeIcon())}
<div class="line"></div>
</div>

</div>


<!-- MAIN BOX -->
<div class="traffic-main-box card-gold">

<img src="/media/public/logo-honeygarden.png" class="traffic-logo"/>

<h3>È tutto sotto il nostro controllo.</h3>

<p>
Il tuo successo inizia dalla capacità di generare traffico.
Sviluppiamo strategie su misura per ampliare la tua visibilità,
creando processi efficaci che guidano le persone verso la piattaforma.
</p>

<a class="btn-gold-xl">CONTATTACI ADESSO</a>

</div>

</div>

</div>
</section>
`;
}


/* ================= COMPONENT ================= */

function platform(name, icon){
return `
<div class="traffic-platform">
<div class="icon">${icon}</div>
<span>${name}</span>
</div>`;
}


/* ================= ICONS ================= */

function tiktokIcon(){return '<i class="fa-brands fa-tiktok"></i>'}
function snapchatIcon(){return '<i class="fa-brands fa-snapchat"></i>'}
function instagramIcon(){return '<i class="fa-brands fa-instagram"></i>'}
function redditIcon(){return '<i class="fa-brands fa-reddit"></i>'}
function facebookIcon(){return '<i class="fa-brands fa-facebook"></i>'}
function youtubeIcon(){return '<i class="fa-brands fa-youtube"></i>'}
function twitterIcon(){return '<i class="fa-brands fa-twitter"></i>'}
