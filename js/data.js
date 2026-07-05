// ============================================================
// DÁTA NÁUČNÉHO CHODNÍKA — CESTA MESTEČKOM POD ZNIEVOM
// Tu sa upravujú všetky texty, videá a osobnosti.
// Video pridáte tak, že do "youtubeId" vložíte ID videa z YouTube
// (časť adresy za v= , napr. z https://youtube.com/watch?v=AbCdEf123
// je to "AbCdEf123"). Kým je youtubeId null, zobrazí sa ozdobný
// zástupný rámik.
// ============================================================

const STOPS = [
  {
    id: "cintorin",
    num: 1,
    title: "Cintorín",
    short: "Miesto posledného odpočinku znievskych osobností a klasicistické náhrobky rodiny Točekovcov.",
    text: [
      "Cintorín v Kláštore pod Znievom sa začal používať v 18. storočí, keď Kráľovská miestodržiteľská rada na príkaz panovníčky Márie Terézie zakázala z hygienických dôvodov pochovávanie v blízkosti kostolov. Cintoríny museli byť premiestnené na okraj dediny. Pred vydaním tohto príkazu sa pôvodný cintorín nachádzal pri kostole sv. Mikuláša.",
      "Na cintoríne je pochovaných viacero významných osobností, napr. básnik Ján Capko Znievsky. Za najvýznamnejšie pamiatky na cintoríne sú považované neskoro klasicistické náhrobky rodiny Točekovcov, ktoré pochádzajú z prvej polovice 19. storočia. Evidované sú ako Národná kultúrna pamiatka."
    ],
    persons: [
      "Zemiansky rod Točekovcov",
      "Dr. Imrich Matej Korauš (1835 – 1918) – plukovný lekár, profesor gymnázia",
      "Juraj Maro (1853 – 1918) – kupec, prekladateľ",
      "Ernest Polóni (1844 – 1928) – prekladateľ, riaditeľ gymnázia"
    ],
    scene: {
      character: "Ján Capko-Znievsky",
      actor: "Jozef Vojt",
      photo: "img/cast/cintorin.jpg",
      desc: "Nocou zahaleným cintorínom vás so svetlom lampáša prevedie básnik a národovec Ján Capko-Znievsky. Pri starých náhrobkoch spomína na osobnosti, ktoré tu odpočívajú, aj na svojho otca – richtára, ktorý stál pri zrode slávneho znievskeho gymnázia."
    },
    image: "img/cintorin.jpg",
    imageCaption: "Historický cintorín s náhrobkami rodiny Točekovcov",
    youtubeId: null
  },
  {
    id: "kostol-sv-mikulasa",
    num: 2,
    title: "Kostol sv. Mikuláša",
    short: "Gotický kostol z 13. storočia s kamennou krstiteľnicou a slnečnými hodinami s rokom 1666.",
    text: [
      "Podľa dávnej tradície, na mieste staršieho románskeho kostolíka sv. Michala, bol v polovici 13. storočia postavený gotický kostol zasvätený sv. Mikulášovi. Jeho vybudovanie súviselo so snahou zabezpečiť cirkevnú nezávislú farnosť kráľovského mestečka od kláštora premonštrátov. Z tejto doby môžeme v kostole obdivovať kamennú krstiteľnicu, alebo gotický portál do sakristie so zachovalými jednokrídlovými dverami.",
      "Kostol prešiel za stáročia rôznymi prestavbami. Najviac však po roku 1728, keď vyhorel. Z barokového obdobia pochádza oltár sv. Mikuláša s motívom svätca, ako zachraňuje život troch chlapcov. Z 19. storočia pochádza obraz Panny Márie Ružencovej od známeho maliara Jozefa Božetecha Klemensa.",
      "Na južnej vonkajšej stene kostola sa nachádzajú slnečné hodiny z roku 1766. Inštalované boli pri stom výročí popravy kláštorského richtára Jána Kužela, preto pri hodinách môžeme vidieť aj rok 1666, kedy sa táto udalosť udiala."
    ],
    persons: [
      "František Šujanský (1832 – 1907) – kňaz, jazykovedec, etnograf",
      "Ján Valentíni (1756 – 1812) – bernolákovský básnik, slúžil v kostole ako farár v roku 1788"
    ],
    scene: null,
    image: "img/kostol-sv-mikulasa.jpg",
    imageCaption: "Veža kostola sv. Mikuláša s hodinami",
    youtubeId: null
  },
  {
    id: "druha-budova-gymnazia",
    num: 3,
    title: "Druhá budova gymnázia",
    short: "Čulenove gymnázium — budova, ktorá zažila zatvorenie školy, okresný súd s väznicou i znovuotvorenie v roku 1919.",
    text: [
      "Druhá budova gymnázia, alebo tzv. Čulenove gymnázium, bola postavená v rokoch 1874 – 1875. Pôvodne mala slúžiť ako sídlo prvého patronátneho katolíckeho gymnázia, ktoré sa dovtedy nachádzalo v Točekovskej kúrii. Gymnázium muselo ukončiť svoju činnosť v roku 1874 na základe ministerského dekrétu, ktorému prekážala proslovenská činnosť gymnázia. Ako oficiálny dôvod zatvorenia však boli uvedené nevyhovujúce hygienické a zdravotné podmienky.",
      "Po zatvorení prvých slovenských gymnázií, ako aj Matice slovenskej v roku 1875, sa budova stala sídlom okresného súdu s väznicou. Postupne sa do budovy nasťahoval hlavný úrad Mošovsko-Kláštorského slúžnovského okresu. Po vzniku Československej republiky v roku 1918 ožili aj snahy o znovuotvorenie gymnázia, čo sa o rok neskôr stalo skutočnosťou a v budove sa konečne začalo naplno učiť."
    ],
    persons: [
      "Martin Čulen (1823 – 1894) – riaditeľ prvého patronátneho katolíckeho gymnázia 1869 – 1874",
      "Ernest Polóni (1844 – 1928) – riaditeľ znovuotvoreného gymnázia 1921 – 1928"
    ],
    scene: {
      character: "Ostrý spor o gymnázium",
      actor: "Pavel Siráň, Jozef Vojt a ďalší",
      desc: "Na tmavom javisku sa odohráva vyhrotený konflikt: riaditeľ Čulen a richtár Capko bránia slovenské gymnázium pred arogantným úradníkom, ktorý kričí, že škola je protištátna — a nariaďuje jej okamžité zatvorenie. Obraz tvrdej maďarizácie a potláčania národného obrodenia."
    },
    image: "img/druha-budova-gymnazia.jpg",
    imageCaption: "Čulenovo gymnázium",
    youtubeId: null
  },
  {
    id: "hasicska-straznica",
    num: 4,
    title: "Hasičská strážnica a obecný úrad",
    short: "Miesto, kde sa rozhodovalo o osude mestečka — a strážnica dobrovoľných hasičov z roku 1883.",
    text: [
      "Miesto, kde sa aj dnes nachádza obecný úrad, bolo miestom, kde sa aj v minulosti rozhodovalo o budúcnosti Kláštora pod Znievom. Môžeme predpokladať, že práve v týchto miestach, v blízkosti kostola, sa nachádzalo sídlo richtára. Kláštor pod Znievom sa hrdil mestskými právami od roku 1266 do roku 1666. Vtedy počas rebélie voči Jezuitom bol popravený richtár Ján Kužel. Poprava sa mala odohrať na mieste, na ktorom dnes stojí socha sv. Anny.",
      "O dvesto rokov neskoršie, v roku 1874, bol dr. J. Koraušom založený Spolok dobrovoľných hasičov, ktorého sídlom sa stala strážnica postavená v roku 1883."
    ],
    persons: [
      "Janko Kráľ (1822 – 1876) – štúrovský básnik, obecný notár v rokoch 1849 – 1852",
      "Ján Capko Znievsky (1846 – 1867) – poštúrovský básnik, znievsky rodák"
    ],
    scene: {
      character: "Nočný hlásnik",
      actor: "Maroš Halahija",
      photo: "img/cast/hasicska-straznica.jpg",
      desc: "V historickej hasičskej uniforme s mosadznou prilbou trúbi hlásnik polnoc a spieva tradičný nápev. Z vyvýšenej strážnice bdie nad spiacim mestečkom — dáva pozor na oheň a vodu, tak ako jeho predchodcovia po stáročia."
    },
    image: "img/hasicska-straznica.jpg",
    imageCaption: "Hasičská strážnica z roku 1883",
    youtubeId: null
  },
  {
    id: "lipova-alej",
    num: 5,
    title: "Lipová alej biskupa Klucha",
    short: "Dominanta obce s umelým korytom potoka Vríca z roku 1656, ktoré poháňalo mlyn i najstaršie uhorské papierne.",
    text: [
      "Dominantou obce je nepochybne Lipová alej biskupa Klucha s umelým korytom potoka Vríca. Tento kanál bol vybudovaný v roku 1656 za účelom napájania kláštorských rybníkov. Zároveň poháňal miestny mlyn a zásoboval vodou najstaršie uhorské papierne, ktoré boli založené v tom istom roku.",
      "Pravdepodobne už v tomto čase tu boli vysadené prvé lipy, ktoré nielenže spevňovali breh kanála, ale poskytovali Kláštorčanom v novovekom lekárstve tak cenený lipový kvet. Rokmi pribúdali ďalšie lipy, až v 19. storočí získala alej dnešnú podobu. V živote mestečka pod Znievom zohrávalo toto miesto dôležitú úlohu. Tu, v tieni mohutných líp, sa odohrával každodenný spoločenský život a pravdepodobne sa tu konali aj trhy."
    ],
    persons: [
      "Martin Szentiványi (1633 – 1705) – prefekt trnavskej univerzitnej kníhtlačiarne, pričinil sa o rozvoj papierní, ktoré viedol v rokoch 1687 – 1696"
    ],
    scene: {
      character: "Marka Mácová",
      actor: "Janka Frličková",
      photo: "img/cast/lipova-alej.jpg",
      desc: "Za jasného slnečného dňa perie meštianka Marka Mácová v potoku biele plátno a rozpráva o každodennom živote mestečka — o znievskych papierňach, vodnom kanáli jezuitov aj o ničivom požiari z roku 1666, po ktorom si ľudia museli pomáhať."
    },
    image: "img/lipova-alej.jpg",
    imageCaption: "Lipová alej biskupa Klucha",
    youtubeId: null
  },
  {
    id: "tretia-budova-gymnazia",
    num: 6,
    title: "Tretia budova gymnázia",
    short: "Funkcionalistická škola z rokov 1935 – 1936, ktorej otvorenie pozdravil aj prezident Beneš.",
    text: [
      "Tretia budova gymnázia predstavuje vyvrcholenie budovania moderného slovenského školstva. Postavená bola v rokoch 1935 – 1936 v štýle československého funkcionalizmu. V čase, kedy bola vybudovaná, patrila k najmodernejším školám. Jej otvorenie pozdravil aj prezident Československej republiky Dr. E. Beneš počas svojej návštevy v Kláštore pod Znievom.",
      "Trojposchodová budova umožňovala kvalitné štúdium viac ako 400 študentom. Spomedzi nich sa viacero zapísalo do vedeckého, spoločenského a kultúrneho života. Gymnázium ukončilo svoju bohatú činnosť v roku 1959, kedy bolo presťahované do Turčianskych Teplíc. Avšak žiaci budovu neopustili. Pokračovateľkou gymnázia sa stala základná škola, ktorá tu sídli dodnes."
    ],
    persons: [
      "Ján Chryzostom Korec (1924 – 2015) – kardinál",
      "prof. Milan Kolibiar (1922 – 1994) – zakladateľ modernej slovenskej matematiky"
    ],
    scene: {
      character: "Ľudmila Pajdušáková",
      actor: "Lucia Smiková",
      photo: "img/cast/tretia-budova-gymnazia.jpg",
      desc: "Prvá slovenská astronómka a objaviteľka komét sa v bielom plášti pozerá do hvezdárskeho ďalekohľadu a s úsmevom spomína na študentské časy — na chodby plné maturitných tabiel, recitačné súťaže a základy, ktoré jej dala znievska škola."
    },
    image: "img/tretia-budova-gymnazia.jpg",
    imageCaption: "Funkcionalistická budova gymnázia, dnes základná škola",
    youtubeId: null
  },
  {
    id: "klastor",
    num: 7,
    title: "Kláštor",
    short: "Benediktíni, premonštráti aj jezuiti — miesto, od ktorého obec odvodzuje svoje meno, spomínané už v Zoborských listinách z roku 1113.",
    text: [
      "Obec Kláštor pod Znievom odvodzuje svoje pomenovanie od kláštora, ktorý sa nachádzal pod hradom Zniev. Avšak dejiny kláštora sa začali písať už skôr, pred založením hradu. Prví mnísi z Rádu benediktínov si tu pravdepodobne už v 11. alebo na začiatku 12. storočia založili kláštor, v ktorom sa mal nachádzať kostol zasvätený sv. Hypolitovi. Takto to uvádza najstarší písomný prameň k dejinám Turca, tzv. Zoborské listiny z roku 1113.",
      "Benediktíni vlastnili kláštor až do roku 1252, kedy prešiel do vlastníctva Rádu premonštrátov. Tí kláštor zveľadili a dali postaviť kostol zasvätený Panne Márii. Kamenná huta, ktorú prevádzkovali, vybudovala väčšinu gotických kostolov v Turci. Mnísi a obyvatelia mestečka spolunažívali až do nepokojných časov 16. storočia. V roku 1550 kláštorné majetky premonštráti nadobro stratili. V roku 1586 prevzali kláštor Jezuiti, ktorí ho vybudovali do súčasnej renesančnej podoby. Práve s ich pôsobením sa začalo v Turci rozvíjať školstvo a liečiteľstvo, a v neposlednom rade aj remeselná výroba. V roku 1773 bola rehoľa Jezuitov rozpustená – a tým sa aj skončilo ich pôsobenie pod Znievom.",
      "Budova kláštora slúžila v 19. storočí od roku 1871 štátnemu učiteľskému ústavu, kde sa vyučovalo po maďarsky. Ten tvoril protipól vtedy otvorenému slovenskému gymnáziu. V ústave, až do jeho zatvorenia v roku 1912, študovalo viacero významných slovenských dejateľov. Po prvej svetovej vojne tu sídlil až do roku 1950 sirotinec. Neskoršie slúžil ako sústreďovacie stredisko rehoľných sestier. Dnes tu sídli charitatívna organizácia Dobrý pastier."
    ],
    persons: [
      "Mikuláš Moyzes (1872 – 1944) – významný skladateľ a pedagóg, otec A. Moyzesa",
      "Martin Kukučín (1860 – 1922) – známy slovenský spisovateľ",
      "Jozef Gregor-Tajovský (1874 – 1940) – známy slovenský spisovateľ a dramaturg"
    ],
    scene: {
      character: "Martin Kukučín",
      actor: "Pavel Siráň ml.",
      photo: "img/cast/klastor.jpg",
      desc: "Prozaik Martin Kukučín, ktorý študoval v tunajšom maďarskom učiteľskom ústave, kráča s knihou v ruke popri kláštore. Recituje verše najprv po maďarsky, potom ich prekladá — a rozjíma nad tvrdými osudmi ľudí i nezlomnosťou tohto miesta."
    },
    image: "img/klastor.jpg",
    imageCaption: "Budova kláštora s kostolnou vežou",
    youtubeId: null
  },
  {
    id: "prva-budova-gymnazia",
    num: 8,
    title: "Prvá budova gymnázia",
    short: "Točekovská kúria, v ktorej v rokoch 1869 – 1874 sídlilo prvé katolícke patronátne gymnázium.",
    text: [
      "Budova, v ktorej v rokoch 1869 – 1874 sídlilo prvé katolícke patronátne gymnázium, bola postavená v druhej polovici 18. storočia. Vtedy sa tu nachádzali dva barokové meštianske domy, ktorých spojením a prestavbou v roku 1822 získala budova súčasnú vonkajšiu podobu. Pravdepodobne v tomto období ju už vlastnila bohatá obchodnícka rodina Točekovcov.",
      "Tí svoje sídlo nevyužívali len pre seba, ale v roku 1869 ho prenajali ako dočasné sídlo gymnáziu. O jeho založenie v Kláštore sa zaslúžil znievsky richtár Ján Capko. V prvom školskom roku tu študovalo 73 študentov, ktorých vyučovali piati profesori na čele s riaditeľom Martinom Čulenom. Po zatvorení gymnázia budova slúžila opäť Točekovskému rodu."
    ],
    persons: [
      "Martin Čulen (1823 – 1894) – prvý riaditeľ gymnázia v Kláštore pod Znievom"
    ],
    scene: {
      character: "Martin Čulen",
      actor: "Pavel Siráň",
      photo: "img/cast/prva-budova-gymnazia.jpg",
      desc: "V starej triede s drevenými lavicami píše husím brkom riaditeľ gymnázia Martin Čulen. S hrdosťou rozpráva o 3. októbri 1869 — dni, keď sa otvorilo prvé slovenské katolícke patronátne gymnázium, ktoré sa zaviazalo vyučovať „v jazyku našich otcov a materí“."
    },
    image: "img/prva-budova-gymnazia.jpg",
    imageCaption: "Točekovská kúria — prvé sídlo gymnázia",
    youtubeId: null
  },
  {
    id: "dom-olejkara",
    num: 9,
    title: "Dom olejkára",
    short: "Odtiaľto putovali znievski olejkári s liečivými olejčekmi po Uhorsku, Európe aj Ázii.",
    text: [
      "Olejkárstvo sa začalo v Kláštore pod Znievom rýchlo rozvíjať s príchodom jezuitov v 16. storočí. Pravdepodobne už v roku 1586 tu založili najstaršiu botanickú záhradu na pestovanie byliniek a liečivých rastlín. Kláštor sa postupne preslávil výrobou rôznych liečivých olejčekov, z ktorých najznámejší bol oleum carpathicum – olejček z kosodreviny, ktorý pomáhal pri rôznych žalúdočných ochoreniach.",
      "Postupne sa umenie olejkárstva rozšírilo aj za brány kláštora a miestni obyvatelia si začali sami vyrábať liečivé prípravky. O olejkároch z Turca sa zmieňuje aj Matej Bel vo svojich „Notíciach o Turčianskej župe“. Približne od 18. storočia začali za účelom predaja olejčekov opúšťať rodnú obec. Na svojich obchodných cestách, ktoré sa veľmi rýchlo prestali obmedzovať len na vtedajšie Uhorsko, zavítali aj do vzdialenejších kútov Európy alebo Ázie.",
      "V 19. storočí sa olejkári nevenovali len predaju olejčekov, ale rozšírili svoju predajnú činnosť aj o ďalšie výrobky potrebné pre každodenný život. Niektorí z nich objavili v sebe talent pre tento druh podnikateľskej činnosti a založili vo svete prosperujúce obchody. Do popredia sa dostala aktivita bratov Juraja a Jozefa Országovcov, rodákov zo Znieva, ktorí založili prvý veľký obchodný dom vo Varšave."
    ],
    persons: [
      "Matej Bel z Očovej (1684 – 1749) – významný uhorský polyhistor slovenského pôvodu",
      "bratia Országovci – kupci"
    ],
    scene: {
      character: "Olejkár Országh",
      actor: "Silvester Cintula",
      photo: "img/cast/dom-olejkara.jpg",
      desc: "V tmavej lekárnickej dielni plnej sušených byliniek a sklenených fľaštičiek mieša olejkár v bielom habite slávny Uhorský balzam — oleum carpathicum. Rozpráva, ako sa Kláštor stal centrom liečiteľstva a ako boli znievske výrobky žiadané až vo Varšave."
    },
    image: "img/dom-olejkara.jpg",
    imageCaption: "Dom olejkára s klenutou bránou",
    youtubeId: null
  },
  {
    id: "luky-nad-klastorom",
    num: 10,
    title: "Lúky nad Kláštorom",
    short: "Zelená lekáreň mestečka — lúky, z ktorých olejkári a bylinkárky po stáročia zbierali liečivé rastliny.",
    text: [
      "Lúky rozprestierajúce sa nad mestečkom boli po stáročia jeho zelenou lekárňou i špajzou. Kláštorčania na nich pásli dobytok a kosili seno, no predovšetkým tu od jari do jesene zbierali liečivé byliny. Keď jezuiti v roku 1586 založili pri kláštore najstaršiu botanickú záhradu na pestovanie liečivých rastlín, práve okolité lúky a stráne im poskytovali to, čo sa pestovať nedalo — bohatstvo divorastúcich druhov.",
      "Z lúčnych bylín sa v kláštornej lekárni i v domácnostiach olejkárov pripravovali čaje, masti a povestné olejčeky. Medzi najvyhľadávanejšie patrili rebríček, ľubovník bodkovaný, materina dúška, repík či lipový kvet z neďalekej aleje. Bylinky sa sušili na povalách a v humnách a znievski olejkári ich potom spolu s liečivými prípravkami rozvážali po celom Uhorsku, Európe aj Ázii. Vedieť, ktorá rastlina lieči, kedy ju zbierať a ako ju uchovať, bolo umenie, ktoré sa v znievskych rodinách dedilo z pokolenia na pokolenie.",
      "Kvetnaté lúky nad Kláštorom si svoju druhovú pestrosť zachovali dodnes — vďačia za ňu práve stáročiam pravidelného kosenia a pasenia. Ak sa na chvíľu zastavíte, nájdete tu voňavú živú učebnicu, z ktorej čerpali generácie olejkárov a bylinkárok."
    ],
    persons: [
      "znievski olejkári a bylinkárky — bezmenní nositelia liečiteľského umenia, ktoré preslávilo Kláštor pod Znievom v celej Európe"
    ],
    scene: null,
    image: "img/luky-nad-klastorom.jpg",
    imageCaption: "Pohľad zo Skaličiek, v pozadí Tlstá a Ostrá",
    youtubeId: null
  },
  {
    id: "pohlad-na-klastor",
    num: 11,
    title: "Pohľad na Kláštor pod Znievom",
    short: "Vyhliadka na mestečko, hrad Zniev a panorámu Turca.",
    text: [
      "[TEXT NA DOPLNENIE — pošlite mi fotografiu tabule alebo text tohto zastavenia a doplním ho.]"
    ],
    persons: [],
    scene: null,
    image: "img/pohlad-na-klastor.jpg",
    imageCaption: "Kláštor pod Znievom z vyhliadky pod Znievom",
    youtubeId: null
  },
  {
    id: "kalvaria",
    num: 12,
    title: "Kalvária",
    short: "Baroková kalvária s kostolom Sv. Kríža, osemuholníkovým múrom, tromi bránami a šiestimi kaplnkami.",
    text: [
      "Jednou z ikonických pamiatok v malebnom mestečku pod Znievom je baroková kalvária s kostolom Sv. Kríža. Začiatok jej výstavby sa začal v rokoch 1728 – 1729, kedy tu bol Jezuitmi vybudovaný kostol. Už v tomto období bol ohradený múrom v tvare osemuholníka, v ktorom sa nachádzajú tri brány a šesť kaplniek. Areál kostola Sv. Kríža slúžil procesiám, ktoré sa tu organizovali v rámci rôznych cirkevných sviatkov.",
      "V roku 1816 bol kostol poškodený, čo viedlo k jeho obnove vďaka aktivite nitrianskeho biskupa Jozefa Klucha. V 30. rokoch 20. storočia boli na svahu pod kostolom vybudované kaplnky, čím vlastne vznikol súčasný areál kalvárie. Krížová cesta bola zdobená hodnotnými obrazmi od Jozefa Božetecha Klemensa z roku 1877. Dnes môžeme v kostole obdivovať zachovalý barokový oltár."
    ],
    persons: [
      "Jozef Kluch (1748 – 1826) – nitriansky biskup, znievsky rodák"
    ],
    scene: {
      character: "Biskup Jozef Kluch",
      actor: "Igor Mikula",
      photo: "img/cast/kalvaria.jpg",
      desc: "V sýtočervenom biskupskom rúchu kľačí pred oltárom a modlí sa, potom kráča lúkou ku kostolíku na kopci. Rázne, no s láskou rozpráva, ako v roku 1816 z vlastných prostriedkov obnovil zničenú Kalváriu — a prečo celý život pomáhal chudobným a sirotám."
    },
    image: "img/kalvaria.jpg",
    imageCaption: "Púť na Kalváriu na historickej fotografii",
    youtubeId: null
  }
];

// Pomocné funkcie
function stopById(id) { return STOPS.find(s => s.id === id); }
function stopUrl(s) { return "zastavenie.html?id=" + s.id; }
