const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// ✅ Mets TON email ici
const CONTACT_EMAIL = "contact@octafer.fr";

function buildMailto(subject, body) {
  return `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.getElementById("quickForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const name = data.get("name") || "";
  const phone = data.get("phone") || "";
  const type = data.get("type") || "";
  const city = data.get("city") || "";

  const subject = `Octafer — Demande de rappel (${name})`;
  const body =
`Bonjour,

Je souhaite être rappelé.

Nom: ${name}
Téléphone: ${phone}
Type de chantier: ${type}
Ville: ${city}

Merci.`;

  window.location.href = buildMailto(subject, body);
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const name = data.get("name") || "";
  const email = data.get("email") || "";
  const phone = data.get("phone") || "(non renseigné)";
  const city = data.get("city") || "";
  const msg = data.get("message") || "";

  const subject = `Octafer — Demande de devis (${name})`;
  const body =
`Bonjour,

Demande de devis :
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Ville: ${city}

Message:
${msg}

Merci.`;

  window.location.href = buildMailto(subject, body);
});
