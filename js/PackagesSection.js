const modalOverlay = document.getElementById("packageModalOverlay");
const modalContent = document.getElementById("modalContent");
const section = document.getElementById("packagesSection");

/* ================= INTERSECTION OBSERVER ================= */
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      section.classList.add("packagesVisible");
      observer.disconnect();
    }
  },
  { threshold: 0.2 }
);

observer.observe(section);

/* ================= DATA (UNCHANGED) ================= */

const doublePlayInternetMobile = [
  {
    title: "1 Gbps / 2 Gbps*",
    features: ["Ultra-fast speed", "Ultra-connected homes", "Great for multiple devices"],
    footer: ["1-year price lock", "Gateway included"],
  },
  {
    title: "500 Mbps",
    features: ["Streaming 4K UHD", "Multiplayer gaming", "Remote work & school"],
    footer: ["1-year price lock", "Gateway included"],
  },
  {
    title: "300 Mbps",
    features: ["Streaming", "Gaming", "Downloading large files"],
    footer: ["1-year price lock", "Gateway included"],
  },
];

function renderCards(cards, highlightIndex = null) {
  let html = `<div class="triplePricingGrid">`;

  cards.forEach((card, index) => {
    html += `
      <div class="pricingCard ${highlightIndex === index ? "bestValue" : ""}">
        ${highlightIndex === index ? '<div class="badge">Best value</div>' : ""}
        <h4>${card.title}</h4>
        ${
          card.features && card.features.length > 0
            ? `<ul>${card.features.map(f => `<li>${f}</li>`).join("")}</ul>`
            : ""
        }
        <div class="cardFooter">
          ${card.footer.map(f => `<span>${f}</span>`).join("")}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  return html;
}

function openPackage(type) {
  modalOverlay.style.display = "flex";

  if (type === "single") {
    modalContent.innerHTML = `
      <h3>Internet</h3>
      <div class="tripleIcons"><i class="fas fa-wifi"></i></div>
      ${renderCards(doublePlayInternetMobile)}

      <h3 style="margin-top:50px;">Entertainment TV</h3>
      <div class="tripleIcons"><i class="fas fa-tv"></i></div>
      ${renderCards(doublePlayInternetMobile)}

      <h3 style="margin-top:50px;">Mobile Phone</h3>
      <div class="tripleIcons"><i class="fas fa-mobile-alt"></i></div>
      ${renderCards(doublePlayInternetMobile, 1)}
    `;
  }

  if (type === "double") {
    modalContent.innerHTML = `
      <h3>Internet + Mobile</h3>
      <div class="tripleIcons"><i class="fas fa-wifi"></i><i class="fas fa-mobile-alt"></i></div>
      ${renderCards(doublePlayInternetMobile, 0)}

      <h3 style="margin-top:50px;">Internet + Entertainment TV</h3>
      <div class="tripleIcons"><i class="fas fa-wifi"></i><i class="fas fa-tv"></i></div>
      ${renderCards(doublePlayInternetMobile, 0)}
    `;
  }

  if (type === "triple") {
    modalContent.innerHTML = `
      <h3>Internet + Mobile + Entertainment TV</h3>
      <div class="tripleIcons">
        <i class="fas fa-wifi"></i>
        <i class="fas fa-mobile-alt"></i>
        <i class="fas fa-tv"></i>
      </div>
      ${renderCards(doublePlayInternetMobile, 0)}
    `;
  }
}

function closePackage() {
  modalOverlay.style.display = "none";
}
