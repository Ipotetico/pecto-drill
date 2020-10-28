const mainy = document.querySelectorAll("main");

const asy = document.querySelectorAll("a");

const skutecznosc = document.getElementById("skutecznosc");

const dawkowanie = document.getElementById("dawkowanie");

const szybkosc = document.getElementById("szybkosc");

const section01 = document.getElementById("section01");
console.log(section01);

const section02 = document.getElementById("section02");

const section03 = document.getElementById("section03");

const section04 = document.getElementById("section04");

const section05 = document.getElementById("section05");

// =====    STRONA GLOWNA   =====

const strGlowna = document.getElementById("strona_glowna");

for (let el of asy) {
  el.style.color = "#004087";
  el.style.background = "#f1f9feaa";
}

strGlowna.addEventListener("touchstart", () => {
  for (let el of mainy) {
    el.classList.remove("active");
  }
  for (let el of asy) {
    el.classList.remove("active");
    el.style.color = "#004087";
    el.style.background = "#f1f9feaa";
  }
  section01.classList.add("active");
  strGlowna.classList.add("active");
});

// =====    SKUTECZNOSC   =====

skutecznosc.addEventListener("touchstart", () => {
  for (let el of mainy) {
    el.classList.remove("active");
  }
  for (let el of asy) {
    el.classList.remove("active");
    el.style.color = "#f1f9fe";
    el.style.background = "";
  }
  section02.classList.add("active");
  skutecznosc.classList.add("active");
});

// =====    SZYBKOSC   =====

szybkosc.addEventListener("touchstart", () => {
  for (let el of mainy) {
    el.classList.remove("active");
  }
  for (let el of asy) {
    el.classList.remove("active");
    el.style.color = "#004087";
  }
  section03.classList.add("active");
  szybkosc.classList.add("active");
});

const kolka = document.querySelectorAll(".kolko");

const przysp = document.getElementById("przysp");
const norma = document.getElementById("norma");
const zwiek = document.getElementById("zwiek");
const viru = document.getElementById("viru");
const antibo = document.getElementById("antibo");
const bact = document.getElementById("bact");

przysp.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el !== przysp && el.classList.contains("active"))
      el.classList.remove("active");
  }
  przysp.classList.toggle("active");
});

norma.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el !== norma && el.classList.contains("active"))
      el.classList.remove("active");
  }
  norma.classList.toggle("active");
});

zwiek.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el !== zwiek && el.classList.contains("active"))
      el.classList.remove("active");
  }
  zwiek.classList.toggle("active");
});

viru.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el !== viru && el.classList.contains("active"))
      el.classList.remove("active");
  }
  viru.classList.toggle("active");
});

antibo.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el !== antibo && el.classList.contains("active"))
      el.classList.remove("active");
  }
  antibo.classList.toggle("active");
});

bact.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el !== bact && el.classList.contains("active"))
      el.classList.remove("active");
  }
  bact.classList.toggle("active");
});

// =====    REKOMENDACJE  =====

const reko = document.getElementById("reko");

reko.addEventListener("touchstart", () => {
  for (let el of mainy) {
    el.classList.remove("active");
  }
  for (let el of asy) {
    el.classList.remove("active");
    el.style.color = "#004087";
  }
  section04.classList.add("active");
  reko.classList.add("active");
});

const recoContent = section04.querySelector(".content");

const overlay = document.getElementById("overlay");

const gold2019 = document.getElementById("reco01");
console.log(gold2019);

gold2019.addEventListener("touchstart", () => {
  gold2019.classList.toggle("active");
  overlay.classList.toggle("active");
});

const reco2016 = document.getElementById("reco02");
console.log(reco2016);

reco2016.addEventListener("touchstart", () => {
  reco2016.classList.toggle("active");
  overlay.classList.toggle("active");
});

const recoPTP = document.getElementById("reco03");

recoPTP.addEventListener("touchstart", () => {
  recoPTP.classList.toggle("active");
  overlay.classList.toggle("active");
});

const recoPTO = document.getElementById("reco04");

recoPTO.addEventListener("touchstart", () => {
  recoPTO.classList.toggle("active");
  overlay.classList.toggle("active");
});

// =====   DAWKOWANIE   =====

// const dawkowanie = document.getElementById("dawkowanie");

dawkowanie.addEventListener("touchstart", () => {
  for (let el of mainy) {
    el.classList.remove("active");
  }
  for (let el of asy) {
    el.classList.remove("active");
    el.style.color = "#004087";
  }
  section05.classList.add("active");
  dawkowanie.classList.add("active");
});

const syrop = document.querySelector("#syrop");

syrop.addEventListener("touchstart", () => {
  syrop.classList.toggle("active");
});

const tablety = document.querySelector("#tablety");
tablety.addEventListener("touchstart", () => {
  tablety.classList.toggle("active");
});

const pojemnikKwadraty = document.querySelector(".pojemnik--na--kwadraty");

const kwadraty = document.querySelectorAll(".kwadratung");

const mili = document.querySelector("#mili");
const mies = document.querySelector("#mies");
const temp = document.querySelector("#temp");
const smak = document.querySelector("#smak");

mili.addEventListener("touchstart", () => {
  for (let el of kwadraty) {
    if (el !== mili) {
      el.classList.remove("active");
    }
  }
  mili.classList.toggle("active");
});

mies.addEventListener("touchstart", () => {
  for (let el of kwadraty) {
    if (el !== mies) {
      el.classList.remove("active");
    }
  }
  mies.classList.toggle("active");
});

temp.addEventListener("touchstart", () => {
  for (let el of kwadraty) {
    if (el !== temp) {
      el.classList.remove("active");
    }
  }
  temp.classList.toggle("active");
});

smak.addEventListener("touchstart", () => {
  for (let el of kwadraty) {
    if (el !== smak) {
      el.classList.remove("active");
    }
  }
  smak.classList.toggle("active");
});

// const fota1 = document.querySelector(".fota");

// fota1.addEventListener("touchstart", () => {
//   fota1.classList.toggle("active");
// });

// const fota2 = document.querySelector(".fota_2");

// fota2.addEventListener("touchstart", () => {
//   fota2.classList.toggle("active");
// });

// const kwadracik1 = document.querySelector(".kwadracik:nth-of-type(1)");
// kwadracik1.addEventListener("touchstart", () =>
//   kwadracik1.classList.toggle("active")
// );

// const kwadracik2 = document.querySelector(".kwadracik:nth-of-type(2)");
// kwadracik2.addEventListener("touchstart", () =>
//   kwadracik2.classList.toggle("active")
// );

// const kwadracik3 = document.querySelector(".kwadracik:nth-of-type(3)");
// kwadracik3.addEventListener("touchstart", () =>
//   kwadracik3.classList.toggle("active")
// );

// const kwadracik4 = document.querySelector(".kwadracik:nth-of-type(4)");
// kwadracik4.addEventListener("touchstart", () =>
//   kwadracik4.classList.toggle("active")
// );

// =====   SIL   =====

const btnSil = document.getElementById("sil");

const sil = document.getElementById("sectionSil");

btnSil.addEventListener("touchstart", () => {
  for (let el of mainy) {
    el.classList.remove("active");
  }
  for (let el of asy) {
    el.classList.remove("active");
    el.style.color = "#004087";
  }
  sil.classList.add("active");
  btnSil.classList.add("active");
});

const switcz = document.querySelector(".switch");

const sirup = document.querySelector(".sirup");

const tabsy = document.querySelector(".tabsy");

switcz.addEventListener("touchstart", () => {
  switcz.classList.toggle("active");
  sirup.classList.toggle("active");
  tabsy.classList.toggle("active");
});
