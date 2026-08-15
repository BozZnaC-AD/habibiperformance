/* =========================================================
   HABIBI PERFORMANCE — FINAL CLEAN APP.JS
   Default language: EN
   Languages: EN / DE / BS
   Live tuning database
   ========================================================= */

let cars = [];
let lang = "EN";

const $ = (id) => document.getElementById(id);

const portal =
  "https://portal.habibi-performance.com/login";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const T = {

  EN: {
    navHome: "HOME",
    navDatabase: "ECU DATABASE",
    navDyno: "DYNO RESULTS",
    navServices: "SERVICES",
    filePortal: "FILE PORTAL",

    officialPartner: "OFFICIAL PARTNER",
    clickScan: "Click or scan",
    verifiedCustomer: "VERIFIED CUSTOMER",

    stockLabel: "STOCK",
    powerLabel: "POWER",
    torqueLabel: "TORQUE",
    gainLabel: "GAIN",

    headline:
      'HOW MUCH <span>POWER</span> IS HIDING IN YOUR CAR?',

    sub:
      "Select your vehicle and see stock power and available tuning potential.",

    make: "MAKE",
    model: "MODEL",
    gen: "GENERATION",
    engine: "ENGINE / POWER",

    search: "FIND VEHICLE",

    quick:
      "Select make, model and generation",

    safe: "100% SAFE & RELIABLE",
    safeSub: "Your data is safe with us.",

    fast: "FAST DELIVERY",
    fastSub: "Fast processing & delivery.",

    quality: "PROFESSIONAL QUALITY",
    qualitySub: "Verified tuning files.",

    world: "Customers worldwide.",

    brands: "BRANDS",
    cars: "VEHICLES",

    dynoTitle:
      'REAL PARAMETERS. <span>CLEAR PERFORMANCE.</span>',

    dynoSub:
      "Professional display – only the values that matter.",

    servicesTitle:
      'OUR <span>SERVICES</span>',

    s1:
      "Performance calibrations for supported vehicles.",

    s2:
      "Professional ECU and TCU file solutions.",

    s3:
      "Individual vehicle-specific solutions.",

    s4:
      "Upload and download through the File Portal.",

    popular:
      'POPULAR <span>VEHICLES</span>',

    faqTitle:
      'FREQUENT <span>QUESTIONS</span>',

    q1:
      "Is the displayed power guaranteed?",

    a1:
      "No. Actual output depends on ECU, fuel, hardware and vehicle condition.",

    q2:
      "Do I need to visit you?",

    a2:
      "No. File service is available worldwide through the portal.",

    q3:
      "How do I order a file?",

    a3:
      "Select your vehicle and continue through the File Portal.",

    ready:
      "READY FOR MORE POWER?",

    readySub:
      "Upload a file, buy credits and download the finished file through the portal.",

    selMake:
      "Select manufacturer",

    selModel:
      "Select model",

    selGen:
      "Select generation",

    selEngine:
      "Select engine",

    original:
      "STOCK",

    tuned:
      "TUNING",

    order:
      "ORDER FILE →",

    estimate:
      "Power data comes from the vehicle catalogue. Real-world results may vary with vehicle condition and hardware.",

    loading:
      "LOADING…",

    unavailable:
      "Data currently unavailable."
  },


  DE: {
    navHome: "HOME",
    navDatabase: "ECU DATENBANK",
    navDyno: "DYNO ERGEBNISSE",
    navServices: "SERVICES",
    filePortal: "FILE PORTAL",

    officialPartner: "OFFIZIELLER PARTNER",
    clickScan: "Klicken oder scannen",
    verifiedCustomer: "VERIFIZIERTER KUNDE",

    stockLabel: "SERIE",
    powerLabel: "LEISTUNG",
    torqueLabel: "DREHMOMENT",
    gainLabel: "ZUWACHS",

    headline:
      'WIE VIEL <span>LEISTUNG</span> STECKT IN DEINEM AUTO?',

    sub:
      "Wähle dein Fahrzeug und sieh Serienleistung und verfügbares Tuning-Potenzial.",

    make: "HERSTELLER",
    model: "MODELL",
    gen: "GENERATION",
    engine: "MOTOR / LEISTUNG",

    search: "FAHRZEUG FINDEN",

    quick:
      "Fahrzeug über Hersteller, Modell und Generation wählen",

    safe: "100% SICHER & ZUVERLÄSSIG",
    safeSub: "Deine Daten sind bei uns sicher.",

    fast: "SCHNELLE LIEFERUNG",
    fastSub: "Schnelle Bearbeitung & Lieferung.",

    quality: "PROFESSIONELLE QUALITÄT",
    qualitySub: "Geprüfte Tuning-Files.",

    world: "Kunden weltweit.",

    brands: "MARKEN",
    cars: "FAHRZEUGE",

    dynoTitle:
      'ECHTE PARAMETER. <span>KLARE LEISTUNG.</span>',

    dynoSub:
      "Professionelle Darstellung – nur die Werte, die zählen.",

    servicesTitle:
      'UNSERE <span>LEISTUNGEN</span>',

    s1:
      "Performance-Kalibrierungen für unterstützte Fahrzeuge.",

    s2:
      "Professionelle Motor- und Getriebe-Dateilösungen.",

    s3:
      "Individuelle Lösungen passend zum Fahrzeug.",

    s4:
      "Upload und Download über das File Portal.",

    popular:
      'BELIEBTE <span>FAHRZEUGE</span>',

    faqTitle:
      'HÄUFIGE <span>FRAGEN</span>',

    q1:
      "Ist die angezeigte Leistung garantiert?",

    a1:
      "Nein. Das tatsächliche Ergebnis hängt von ECU, Kraftstoff, Hardware und Fahrzeugzustand ab.",

    q2:
      "Muss ich zu euch kommen?",

    a2:
      "Nein. Der File Service ist weltweit über das Portal verfügbar.",

    q3:
      "Wie bestelle ich eine Datei?",

    a3:
      "Fahrzeug auswählen und im File Portal fortfahren.",

    ready:
      "BEREIT FÜR MEHR LEISTUNG?",

    readySub:
      "Datei hochladen, Credits kaufen und fertige Datei über das Portal herunterladen.",

    selMake:
      "Hersteller wählen",

    selModel:
      "Modell wählen",

    selGen:
      "Generation wählen",

    selEngine:
      "Motor wählen",

    original:
      "SERIE",

    tuned:
      "TUNING",

    order:
      "DATEI BESTELLEN →",

    estimate:
      "Leistungsangaben aus dem Fahrzeugkatalog. Das reale Ergebnis kann je nach Fahrzeugzustand und Hardware abweichen.",

    loading:
      "WIRD GELADEN…",

    unavailable:
      "Daten momentan nicht verfügbar."
  },


  BS: {
    navHome: "POČETNA",
    navDatabase: "ECU BAZA",
    navDyno: "DYNO REZULTATI",
    navServices: "USLUGE",
    filePortal: "FILE PORTAL",

    officialPartner: "SLUŽBENI PARTNER",
    clickScan: "Klikni ili skeniraj",
    verifiedCustomer: "POTVRĐENA MUŠTERIJA",

    stockLabel: "FABRIČKI",
    powerLabel: "SNAGA",
    torqueLabel: "OBRTNI MOMENT",
    gainLabel: "DOBITAK",

    headline:
      'KOLIKO <span>SNAGE</span> SE KRIJE U TVOM AUTU?',

    sub:
      "Izaberi vozilo i pogledaj fabričku snagu i dostupni tuning potencijal.",

    make: "MARKA",
    model: "MODEL",
    gen: "GENERACIJA",
    engine: "MOTOR / SNAGA",

    search: "PRONAĐI VOZILO",

    quick:
      "Izaberi marku, model i generaciju",

    safe: "100% SIGURNO & POUZDANO",
    safeSub: "Tvoji podaci su sigurni.",

    fast: "BRZA ISPORUKA",
    fastSub: "Brza obrada i isporuka.",

    quality: "PROFESIONALNI KVALITET",
    qualitySub: "Provjereni tuning fajlovi.",

    world: "Mušterije širom svijeta.",

    brands: "BRENDOVA",
    cars: "VOZILA",

    dynoTitle:
      'PRAVI PARAMETRI. <span>JASNA SNAGA.</span>',

    dynoSub:
      "Profesionalan prikaz – samo parametri koji su bitni.",

    servicesTitle:
      'NAŠE <span>USLUGE</span>',

    s1:
      "Performance kalibracije za podržana vozila.",

    s2:
      "Profesionalna ECU i TCU rješenja.",

    s3:
      "Individualna rješenja za konkretno vozilo.",

    s4:
      "Upload i download preko File Portala.",

    popular:
      'POPULARNA <span>VOZILA</span>',

    faqTitle:
      'ČESTA <span>PITANJA</span>',

    q1:
      "Da li je prikazana snaga garantovana?",

    a1:
      "Ne. Stvarni rezultat zavisi od ECU-a, goriva, hardvera i stanja vozila.",

    q2:
      "Moram li doći kod vas?",

    a2:
      "Ne. File servis je dostupan worldwide preko portala.",

    q3:
      "Kako naručujem file?",

    a3:
      "Izaberi vozilo i nastavi preko File Portala.",

    ready:
      "SPREMAN ZA VIŠE SNAGE?",

    readySub:
      "Uploaduj file, kupi kredite i preuzmi gotov file preko portala.",

    selMake:
      "Izaberi marku",

    selModel:
      "Izaberi model",

    selGen:
      "Izaberi generaciju",

    selEngine:
      "Izaberi motor",

    original:
      "FABRIČKI",

    tuned:
      "TUNING",

    order:
      "NARUČI FILE →",

    estimate:
      "Podaci o snazi dolaze iz kataloga vozila. Stvarni rezultat može odstupati zavisno od stanja vozila i hardvera.",

    loading:
      "UČITAVANJE…",

    unavailable:
      "Podaci trenutno nisu dostupni."
  }
};


/* =========================================================
   HELPERS
   ========================================================= */

function tr(key) {
  return T[lang]?.[key] || key;
}


function arr(data) {

  if (Array.isArray(data)) {
    return data;
  }

  if (data && Array.isArray(data.data)) {
    return data.data;
  }

  if (data && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}


function textVal(value) {

  if (
    typeof value === "string" ||
    typeof value === "number"
  ) {
    return String(value);
  }

  return String(
    value?.name ??
    value?.Make ??
    value?.Model ??
    value?.Generation ??
    ""
  );
}


async function api(path) {

  const response =
    await fetch(path);

  if (!response.ok) {
    throw new Error("catalogue");
  }

  return response.json();
}


function opts(element, items, label) {

  if (!element) {
    return;
  }

  const unique =
    [...new Set(
      items.filter(Boolean)
    )].sort();

  element.innerHTML =
    `<option value="">${label}</option>` +
    unique
      .map((value) => {

        const safe =
          String(value)
            .replaceAll(
              '"',
              "&quot;"
            );

        return (
          `<option value="${safe}">${value}</option>`
        );

      })
      .join("");

  element.disabled = false;
}


function reset(element, label) {

  if (!element) {
    return;
  }

  element.innerHTML =
    `<option value="">${label}</option>`;

  element.disabled = true;
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLang(selectedLanguage) {

  if (!T[selectedLanguage]) {
    selectedLanguage = "EN";
  }

  lang =
    selectedLanguage;

  document.documentElement.lang =
    lang === "DE"
      ? "de"
      : lang === "BS"
        ? "bs"
        : "en";


  document
    .querySelectorAll("[data-i]")
    .forEach((element) => {

      const value =
        tr(
          element.dataset.i
        );

      if (value) {
        element.innerHTML =
          value;
      }

    });


  document
    .querySelectorAll("[data-ph]")
    .forEach((element) => {

      element.placeholder =
        tr(
          element.dataset.ph
        );

    });


  /* Desktop selector */

  const desktopLang =
    $("lang");

  if (desktopLang) {
    desktopLang.value =
      lang;
  }


  /* Mobile selector, ako postoji */

  const mobileLang =
    $("mobileLang");

  if (mobileLang) {
    mobileLang.value =
      lang;
  }


  refreshSelectLabels();
}


/* =========================================================
   UPDATE VEHICLE SELECT LABELS AFTER LANGUAGE CHANGE
   ========================================================= */

function refreshSelectLabels() {

  const make =
    $("make");

  const model =
    $("model");

  const gen =
    $("gen");

  const engine =
    $("engine");


  if (
    make &&
    !make.value &&
    make.options.length
  ) {
    make.options[0].textContent =
      tr("selMake");
  }


  if (
    model &&
    !model.value &&
    model.options.length
  ) {
    model.options[0].textContent =
      tr("selModel");
  }


  if (
    gen &&
    !gen.value &&
    gen.options.length
  ) {
    gen.options[0].textContent =
      tr("selGen");
  }


  if (
    engine &&
    !engine.value &&
    engine.options.length
  ) {
    engine.options[0].textContent =
      tr("selEngine");
  }
}


/* =========================================================
   INIT
   ========================================================= */

async function init() {

  /*
   * VAŽNO:
   * EN je uvijek prvi jezik.
   */

  setLang("EN");


  const make =
    $("make");

  const model =
    $("model");

  const gen =
    $("gen");

  const engine =
    $("engine");


  try {

    const response =
      await api(
        "/api/tuning/makes"
      );

    const makes =
      arr(response)
        .map(textVal);


    opts(
      make,
      makes,
      tr("selMake")
    );


    if ($("brandsCount")) {

      $("brandsCount")
        .textContent =
        makes.length + "+";

    }


    if ($("carsCount")) {

      $("carsCount")
        .textContent =
        "LIVE";

    }

  } catch (error) {

    if ($("result")) {

      $("result").innerHTML =
        `
        <div class="tune">
          <div class="tuneHead">
            <h3>
              ${tr("unavailable")}
            </h3>
          </div>
        </div>
        `;

    }

  }


  if (make) {
    make.onchange =
      loadModels;
  }


  if (model) {
    model.onchange =
      loadGenerations;
  }


  if (gen) {
    gen.onchange =
      loadResults;
  }


  if (engine) {

    engine.onchange =
      () => {

        const current =
          cars.find(
            (item) =>
              String(item.id) ===
              engine.value
          );

        if (current) {
          show(current);
        }

      };

  }


  if ($("quickSearch")) {

    $("quickSearch")
      .style.display =
      "none";

  }


  if ($("suggestions")) {

    $("suggestions")
      .style.display =
      "none";

  }


  renderPopular();
}


/* =========================================================
   LOAD MODELS
   ========================================================= */

async function loadModels() {

  cars = [];


  reset(
    $("model"),
    tr("selModel")
  );

  reset(
    $("gen"),
    tr("selGen")
  );

  reset(
    $("engine"),
    tr("selEngine")
  );


  const make =
    $("make")?.value;


  if (!make) {
    return;
  }


  try {

    const response =
      await api(
        "/api/tuning/models?make=" +
        encodeURIComponent(make)
      );


    const models =
      arr(response)
        .map(textVal);


    opts(
      $("model"),
      models,
      tr("selModel")
    );

  } catch (error) {

    reset(
      $("model"),
      tr("unavailable")
    );

  }

}


/* =========================================================
   LOAD GENERATIONS
   ========================================================= */

async function loadGenerations() {

  cars = [];


  reset(
    $("gen"),
    tr("selGen")
  );

  reset(
    $("engine"),
    tr("selEngine")
  );


  const make =
    $("make")?.value;

  const model =
    $("model")?.value;


  if (
    !make ||
    !model
  ) {
    return;
  }


  try {

    const query =
      `make=${encodeURIComponent(make)}` +
      `&model=${encodeURIComponent(model)}`;


    const response =
      await api(
        "/api/tuning/generations?" +
        query
      );


    const generations =
      arr(response)
        .map(textVal);


    opts(
      $("gen"),
      generations,
      tr("selGen")
    );

  } catch (error) {

    reset(
      $("gen"),
      tr("unavailable")
    );

  }

}


/* =========================================================
   LOAD ENGINE RESULTS
   ========================================================= */

async function loadResults() {

  reset(
    $("engine"),
    tr("loading")
  );


  const make =
    $("make")?.value;

  const model =
    $("model")?.value;

  const generation =
    $("gen")?.value;


  if (
    !make ||
    !model ||
    !generation
  ) {
    return;
  }


  try {

    const query =
      `make=${encodeURIComponent(make)}` +
      `&model=${encodeURIComponent(model)}` +
      `&generation=${encodeURIComponent(generation)}`;


    const response =
      await api(
        "/api/tuning/results?" +
        query
      );


    cars =
      arr(response);


    opts(
      $("engine"),
      cars.map(
        (car) =>
          car.Engine ||
          car.engine
      ),
      tr("selEngine")
    );


    const engine =
      $("engine");


    if (engine) {

      [...engine.options]
        .forEach(
          (option, index) => {

            if (!index) {
              return;
            }


            const car =
              cars[index - 1];


            option.value =
              String(
                car?.id ??
                index - 1
              );

          }
        );

    }

  } catch (error) {

    cars = [];


    reset(
      $("engine"),
      tr("unavailable")
    );

  }

}


/* =========================================================
   NUMBER PARSER
   ========================================================= */

function n(value) {

  const match =
    String(
      value ?? ""
    ).match(
      /[\d.]+/
    );


  return match
    ? Number(match[0])
    : 0;
}


/* =========================================================
   SHOW VEHICLE RESULT
   ========================================================= */

function show(car) {

  if (!car) {
    return;
  }


  const stockHp =
    n(
      car.BHP_standard
    );

  const tunedHp =
    n(
      car.BHP_tuned
    );

  const stockNm =
    n(
      car.TORQUE_standard
    );

  const tunedNm =
    n(
      car.TORQUE_tuned
    );


  const title =
    `${car.Make || ""} ` +
    `${car.Model || ""} — ` +
    `${car.Engine || ""}`;


  const slug =
    [
      car.Make,
      car.Model,
      car.Generation,
      car.Engine
    ]
      .filter(Boolean)
      .join("-");


  const hpGain =
    Math.max(
      0,
      tunedHp - stockHp
    );


  const nmGain =
    Math.max(
      0,
      tunedNm - stockNm
    );


  const result =
    $("result");


  if (!result) {
    return;
  }


  result.innerHTML =
    `
    <div class="tune">

      <div class="tuneHead">

        <small>
          ${car.Generation || ""}

          ${
            car.Engine_ECU
              ? " • ECU " +
                car.Engine_ECU
              : ""
          }
        </small>

        <span class="dataBadge verified">
          LIVE DATA
        </span>

        <h3>
          ${title}
        </h3>

      </div>


      <div class="power">

        <div>

          <small>
            ${tr("original")}
          </small>

          <strong>
            ${stockHp || "—"} PS
          </strong>

          <span>
            ${stockNm || "—"} Nm
          </span>

        </div>


        <div class="hot">

          <small>
            ${tr("tuned")}
          </small>

          <strong>
            ${tunedHp || "—"} PS
          </strong>

          <span>
            ${tunedNm || "—"} Nm
          </span>

        </div>

      </div>


      <div class="gains">

        <div class="gain">

          +${hpGain} PS
          /
          +${nmGain} Nm

        </div>

      </div>


      <div class="actions">

        <a
          href="${portal}?vehicle=${encodeURIComponent(slug)}"
        >
          ${tr("order")}
        </a>

        <small>
          ${tr("estimate")}
        </small>

      </div>

    </div>
    `;


  result.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}


/* =========================================================
   FIND VEHICLE BUTTON
   ========================================================= */

function selectCurrent() {

  const engine =
    $("engine");


  if (!engine) {
    return;
  }


  const current =
    cars.find(
      (item) =>
        String(item.id) ===
        engine.value
    );


  if (current) {
    show(current);
  }

}


/* =========================================================
   POPULAR VEHICLES
   ========================================================= */

function renderPopular() {

  const grid =
    $("popularGrid");


  if (grid) {
    grid.innerHTML =
      "";
  }

}


/* =========================================================
   REVIEWS
   ========================================================= */

function initReviews() {

  document
    .querySelectorAll(
      ".reviewStack"
    )
    .forEach(
      (stack, stackIndex) => {

        const cards =
          [
            ...stack.querySelectorAll(
              ".reviewCard"
            )
          ];


        const dots =
          [
            ...stack.querySelectorAll(
              ".reviewDots button"
            )
          ];


        if (!cards.length) {
          return;
        }


        let current =
          0;

        let timer;


        const showReview =
          (index) => {

            current =
              index;


            cards.forEach(
              (card, i) => {

                card.classList.toggle(
                  "active",
                  i === index
                );

              }
            );


            dots.forEach(
              (dot, i) => {

                dot.classList.toggle(
                  "on",
                  i === index
                );

              }
            );

          };


        const startAuto =
          () => {

            clearInterval(
              timer
            );


            timer =
              setInterval(
                () => {

                  showReview(
                    (
                      current + 1
                    ) %
                    cards.length
                  );

                },
                5500 +
                stackIndex * 500
              );

          };


        dots.forEach(
          (dot, index) => {

            dot.addEventListener(
              "click",
              () => {

                showReview(
                  index
                );

                startAuto();

              }
            );

          }
        );


        showReview(0);

        startAuto();

      }
    );

}


/* =========================================================
   PAGE START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
     * ENGLISH JE UVIJEK PRVI.
     * Ne pamtimo prošli izbor.
     */

    lang =
      "EN";


    const desktopLang =
      $("lang");

    if (desktopLang) {

      desktopLang.value =
        "EN";

    }


    const mobileLang =
      $("mobileLang");

    if (mobileLang) {

      mobileLang.value =
        "EN";

    }


    setLang(
      "EN"
    );


    init();

    initReviews();

  }
);
