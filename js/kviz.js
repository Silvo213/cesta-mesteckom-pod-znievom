// Znievsky kvíz — otázky vychádzajú z textov tabúľ a filmových príbehov.
// Otázky upravíte / pridáte v poli QUESTIONS.

const QUESTIONS = [
  {
    q: "V ktorom roku sa podľa Zoborských listín prvý raz písomne spomína kláštor pod Znievom?",
    opts: ["1113", "1266", "1586", "1252"],
    a: 0,
    expl: "Zoborské listiny z roku 1113 sú najstarším písomným prameňom k dejinám Turca."
  },
  {
    q: "Ako sa volal najznámejší liečivý olejček znievskych olejkárov?",
    opts: ["Oleum carpathicum", "Balsamum slavicum", "Oleum turcense", "Aqua vitae"],
    a: 0,
    expl: "Oleum carpathicum — olejček z kosodreviny, známy aj ako Uhorský balzam — pomáhal pri žalúdočných ochoreniach."
  },
  {
    q: "Kedy bolo v Kláštore pod Znievom otvorené prvé slovenské katolícke patronátne gymnázium?",
    opts: ["3. októbra 1869", "3. októbra 1874", "28. októbra 1918", "1. septembra 1935"],
    a: 0,
    expl: "Gymnázium sa otvorilo 3. októbra 1869 a zaviazalo sa vyučovať „v jazyku našich otcov a materí“."
  },
  {
    q: "Kto bol prvým riaditeľom znievskeho gymnázia?",
    opts: ["Martin Čulen", "Ján Capko", "Ernest Polóni", "Martin Kukučín"],
    a: 0,
    expl: "Martin Čulen (1823 – 1894) viedol gymnázium od jeho otvorenia; o založenie sa zaslúžil richtár Ján Capko."
  },
  {
    q: "Ktorá udalosť sa spája s rokom 1666?",
    opts: [
      "Poprava richtára Jána Kužela a koniec mestských práv",
      "Otvorenie kalvárie",
      "Príchod jezuitov do Kláštora",
      "Založenie hasičského spolku"
    ],
    a: 0,
    expl: "Počas rebélie voči jezuitom bol popravený richtár Ján Kužel — pripomínajú to aj slnečné hodiny na kostole sv. Mikuláša."
  },
  {
    q: "Kto v roku 1816 z vlastných prostriedkov obnovil poškodenú kalváriu?",
    opts: ["Biskup Jozef Kluch", "Matej Bel", "Martin Szentiványi", "Rodina Točekovcov"],
    a: 0,
    expl: "Nitriansky biskup Jozef Kluch (1748 – 1826), znievsky rodák, ktorý celý život podporoval chudobných a siroty."
  },
  {
    q: "Na čo slúžil umelý kanál potoka Vríca vybudovaný v roku 1656?",
    opts: [
      "Napájal rybníky, poháňal mlyn a zásoboval papierne",
      "Privádzal pitnú vodu do kláštora",
      "Slúžil na plavenie dreva",
      "Chránil mestečko pred povodňami"
    ],
    a: 0,
    expl: "Kanál napájal kláštorské rybníky, poháňal mlyn a zásoboval vodou najstaršie uhorské papierne."
  },
  {
    q: "Kde si bratia Országovci, rodáci zo Znieva, založili prvý veľký obchodný dom?",
    opts: ["Vo Varšave", "V Budapešti", "Vo Viedni", "V Prahe"],
    a: 0,
    expl: "Olejkárski kupci Juraj a Jozef Országovci založili prvý veľký obchodný dom vo Varšave."
  },
  {
    q: "Ktorá absolventka znievskej školy sa stala prvou slovenskou astronómkou?",
    opts: ["Ľudmila Pajdušáková", "Marka Mácová", "Mária Terézia", "Ľudmila Podjavorinská"],
    a: 0,
    expl: "Ľudmila Pajdušáková objavila niekoľko komét — a na znievske študentské časy spomínala celý život."
  },
  {
    q: "Kto pozdravil otvorenie tretej budovy gymnázia v rokoch 1935 – 1936?",
    opts: [
      "Prezident ČSR Dr. Edvard Beneš",
      "Prezident T. G. Masaryk",
      "Andrej Hlinka",
      "Kardinál Ján Chryzostom Korec"
    ],
    a: 0,
    expl: "Funkcionalistickú školu, jednu z najmodernejších v republike, pozdravil pri návšteve Kláštora prezident Beneš."
  }
];

const RESULTS = [
  { min: 0, title: "Turista na začiatku cesty", text: "Nevadí! Prejdite si chodník ešte raz — postavy z filmov vám radi všetko porozprávajú znova." },
  { min: 4, title: "Znalec mestečka", text: "Solídny výkon! Zopár príbehov vám ešte ušlo — mních olejkár aj nočný hlásnik na vás počkajú." },
  { min: 7, title: "Znievsky vzdelanec", text: "Výborne! Martin Čulen by vás prijal na gymnázium bez prijímačiek." },
  { min: 10, title: "Čestný Znievčan", text: "Plný počet! Históriu mestečka poznáte lepšie než niektorí rodáci. Klobúk (aj cylinder) dole." }
];

(function () {
  const el = document.getElementById("quiz");
  // otázky sa pri každom spustení zamiešajú, aj možnosti v rámci otázky
  let order, current, score;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function start() {
    order = shuffle(QUESTIONS.map((q, i) => i));
    current = 0;
    score = 0;
    render();
  }

  function render() {
    if (current >= order.length) return renderResult();
    const q = QUESTIONS[order[current]];
    const opts = shuffle(q.opts.map((t, i) => ({ t, correct: i === q.a })));

    el.innerHTML = `
      <div class="quiz-progress"><i style="width:${(current / order.length) * 100}%"></i></div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts">
        ${opts.map((o, i) => `<button class="quiz-opt" data-c="${o.correct ? 1 : 0}">${o.t}</button>`).join("")}
      </div>
      <div class="quiz-expl" id="expl">${q.expl}</div>
      <div class="quiz-foot">
        <span class="quiz-count">OTÁZKA ${current + 1} / ${order.length}</span>
        <button class="btn btn-solid" id="next" style="visibility:hidden">Ďalej →</button>
      </div>`;

    el.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const correct = btn.dataset.c === "1";
        if (correct) score++;
        el.querySelectorAll(".quiz-opt").forEach(b => {
          b.disabled = true;
          if (b.dataset.c === "1") b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");
        document.getElementById("expl").classList.add("show");
        document.getElementById("next").style.visibility = "visible";
      });
    });
    document.getElementById("next").addEventListener("click", () => { current++; render(); });
  }

  function renderResult() {
    const r = RESULTS.filter(r => score >= r.min).pop();
    el.innerHTML = `
      <div class="quiz-result">
        <div class="score">${score} / ${order.length}</div>
        <h3>${r.title}</h3>
        <p>${r.text}</p>
        <button class="btn btn-gold" id="again">Skúsiť znova</button>
        <a class="btn" href="index.html#zastavenia" style="margin-left:8px">Späť na chodník</a>
      </div>`;
    document.getElementById("again").addEventListener("click", start);
  }

  start();
})();
