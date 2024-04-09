const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

const cisla2 = cisla.map((cisla) => {
  return cisla * 2;
});

console.log(cisla2);

const zvirataLen = zvirata.map((zvirata) => {
  return zvirata.length;
});

console.log(zvirataLen);

const napojeNazev = napoje.map((napoje) => {
  return napoje.nazev;
});

console.log(napojeNazev);

const napojeNazev2 = napoje.map((napoje) => {
  if (napoje.skladem === true) {
    return napoje.nazev;
  } else {
    return 'Není skladem';
  }
});

console.log(napojeNazev2);
