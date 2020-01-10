import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import './style.css';

let names = ['Bernard', 'Hanifa', 'Jules'];

// boucle classique
console.warn('boucle classique');
for (const name of names) {
  console.log('Coucou ' + name);
}

// boucle forEach
console.warn('boucle forEach');
names.forEach(name => { 
  console.log('Salut ' + name);
  console.log('Gutten Morgen ' + name);
})

// C'est la même chose
names.forEach(function(name) {
   console.log('Kalimera ' + name);
});

// Tri
console.warn('Tri inverse');
names.sort((name1, name2) => name2.localeCompare(name1));
console.log(names);

// Filter
let team = [
  {
    name: 'Hanifa',
    gender: 'Mme',
    age: 31
  },
  {
    name: 'Bernard',
    gender: 'M',
    age: 42
  },
  {
    name: 'Jules',
    gender: 'M',
    age: 30
  },
];

console.warn('Filtrer seulement les Mme');

let filteredTeam = [];
for (let person of team) {
  if (person.gender === 'Mme') {
    filteredTeam.push(person);
  }
}

console.log(filteredTeam);

console.log(team.filter(person => person.gender === 'Mme'));

// Map
console.warn('Modifier le nom pour avoir "Padawan <name>" si age < 40 et sinon "Maitre <name>"');

console.log(team.map(person => {
  let test = (person.age < 40) ? 'Padawan ' : 'Maitre ';
  person.name = test + person.name;
  
  return person;
}));



















/*
const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(x => console.log(x));
*/