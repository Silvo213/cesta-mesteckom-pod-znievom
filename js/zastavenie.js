// Stránka zastavenia — obsah sa načíta z js/data.js podľa ?id= v adrese.
// Napr. zastavenie.html?id=kalvaria

(function () {
  const params = new URLSearchParams(location.search);
  const stop = stopById(params.get("id")) || STOPS[0];
  const i = STOPS.indexOf(stop);

  document.title = stop.title + " — Cesta mestečkom pod Znievom";
  document.getElementById("stop-bignum").textContent = String(stop.num).padStart(2, "0");
  document.getElementById("stop-kicker").textContent = "Zastavenie " + stop.num + " / 12";
  document.getElementById("stop-title").textContent = stop.title;
  document.getElementById("crumb-title").textContent = stop.title;
  document.getElementById("stop-short").textContent = stop.short;
  document.getElementById("stop-sketch").src = "img/sketch/" + stop.id + ".svg";

  // video alebo zástupný rámik
  const frame = document.getElementById("video-frame");
  if (stop.youtubeId) {
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${stop.youtubeId}"
      title="Filmový príbeh: ${stop.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  } else {
    frame.innerHTML = `
      <div class="video-placeholder">
        <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <b>Filmový príbeh — ${stop.title}</b>
        <small>Video sem vložíte doplnením YouTube ID do súboru js/data.js pri zastavení „${stop.id}“.</small>
      </div>`;
  }

  // text príbehu
  document.getElementById("stop-text").innerHTML =
    stop.text.map(p => `<p>${p}</p>`).join("");

  // fotografia miesta — automaticky „gravírovaná“ do znievskej modrej
  if (stop.image) {
    const aside = document.querySelector(".stop-body aside");
    const fig = document.createElement("figure");
    fig.className = "engrave-fig";
    fig.innerHTML = `
      <div class="engrave"><img src="${stop.image}" alt="${stop.imageCaption || stop.title}" loading="lazy"></div>
      <figcaption>${stop.imageCaption || stop.title}</figcaption>`;
    aside.prepend(fig);
  }

  // postava z filmu
  if (stop.scene) {
    const card = document.getElementById("scene-card");
    card.hidden = false;
    if (stop.scene.photo) {
      const ph = document.createElement("div");
      ph.className = "scene-photo engrave";
      ph.innerHTML = `<img src="${stop.scene.photo}" alt="${stop.scene.character}" loading="lazy">`;
      card.prepend(ph);
    }
    document.getElementById("scene-character").textContent = stop.scene.character;
    document.getElementById("scene-desc").textContent = stop.scene.desc;
    if (stop.scene.actor) {
      const a = document.createElement("div");
      a.className = "actor";
      a.textContent = "hrá: " + stop.scene.actor;
      document.getElementById("scene-character").after(a);
    }
  }

  // osobnosti
  if (stop.persons.length) {
    const card = document.getElementById("persons-card");
    card.hidden = false;
    document.getElementById("persons-list").innerHTML =
      stop.persons.map(p => `<li>${p}</li>`).join("");
  }

  // predchádzajúce / nasledujúce zastavenie
  const prev = STOPS[(i + STOPS.length - 1) % STOPS.length];
  const next = STOPS[(i + 1) % STOPS.length];
  document.getElementById("stop-nav").innerHTML = `
    <a href="${stopUrl(prev)}"><small>← Predchádzajúce</small><b>${String(prev.num).padStart(2, "0")} · ${prev.title}</b></a>
    <a href="${stopUrl(next)}"><small>Nasledujúce →</small><b>${String(next.num).padStart(2, "0")} · ${next.title}</b></a>`;
})();
