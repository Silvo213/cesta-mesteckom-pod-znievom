// Spoločné správanie: menu, animácie, mapa a zoznam zastavení na úvodnej stránke

// mobilné menu
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });
}

// jemné odhalenie sekcií pri scrolli
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ---- mapa + zoznam zastavení (len na úvodnej stránke) ----
const mapStops = document.getElementById("map-stops");
const stopList = document.getElementById("stop-list");

// súradnice bodov na trase — presne podľa mapy na tabuliach
const MAP_POINTS = [
  [331, 189], [359, 107], [362, 122], [393, 121], [429, 141], [479, 143],
  [518, 72], [509, 168], [482, 184], [469, 212], [390, 305], [304, 273]
];

if (mapStops && stopList && typeof STOPS !== "undefined") {
  const svgNS = "http://www.w3.org/2000/svg";

  STOPS.forEach((s, i) => {
    const [x, y] = MAP_POINTS[i];

    // bod na mape — naskočí postupne, keď sa mapa objaví na obrazovke
    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "map-stop");
    g.dataset.id = s.id;
    g.style.transitionDelay = (i * 80) + "ms";
    g.innerHTML =
      `<circle class="dot" cx="${x}" cy="${y}" r="11"></circle>` +
      `<text x="${x}" y="${y + 4}" text-anchor="middle" font-size="11.5">${s.num}</text>` +
      `<title>${s.num} – ${s.title}</title>`;
    g.addEventListener("click", () => { location.href = stopUrl(s); });
    mapStops.appendChild(g);

    // riadok v zozname — s gravírovanou miniatúrou, ak má zastavenie fotku
    const thumb = s.image
      ? `<span class="thumb engrave"><img src="${s.image}" alt="" loading="lazy"></span>`
      : `<span class="thumb thumb-empty"></span>`;
    const li = document.createElement("li");
    li.innerHTML =
      `<a href="${stopUrl(s)}" data-id="${s.id}">
         <span class="n">${String(s.num).padStart(2, "0")}</span>
         ${thumb}
         <span><b>${s.title}</b><small>${s.short}</small></span>
         <span class="arrow">→</span>
       </a>`;
    stopList.appendChild(li);
  });

  // body naskočia, keď je mapa vo výreze
  const mapSvg = document.getElementById("trail-map");
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { mapSvg.classList.add("drawn"); obs.disconnect(); }
    });
  }, { threshold: 0.35 }).observe(mapSvg);

  // prepojenie hover: mapa <-> zoznam
  const hl = (id, on) => {
    document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.toggle("hl", on));
  };
  document.querySelectorAll("[data-id]").forEach(el => {
    el.addEventListener("mouseenter", () => hl(el.dataset.id, true));
    el.addEventListener("mouseleave", () => hl(el.dataset.id, false));
  });
}

// ---- časová os: ťahanie myšou ----
const tl = document.getElementById("timeline");
if (tl) {
  let down = false, startX = 0, startScroll = 0;
  tl.addEventListener("pointerdown", (e) => {
    down = true; startX = e.clientX; startScroll = tl.scrollLeft;
    tl.style.cursor = "grabbing";
  });
  window.addEventListener("pointermove", (e) => {
    if (down) tl.scrollLeft = startScroll - (e.clientX - startX);
  });
  window.addEventListener("pointerup", () => { down = false; tl.style.cursor = "grab"; });
}
