const petsData = [
  {
    "name":"Black Creek",
    "area":"St Ann",
    "favSpot":["Dolphin Cove", "Dunn's River", "<strong>any</strong> food"],
    "birthYear":2018,
    "photo":"img/1.jpg"
  },

  {
    "name":"Spot",
    "area":"St Elizabeth",
    "birthYear":2010,
    "photo":"img/2.jpg"
  },

  {
    "name":"Mystic Mountain",
    "area":"Entertainment Zone",
    "birthYear": 2012,
    "photo":"img/2.jpg"
  },

  {
    "name":"Island Village",
    "area":"Ocho Rios",
      "favSpot":["Green Grato cave", "Dunn's River", "<strong>any</strong> Place"],
    "birthYear": 2016,
    "photo":"img/1.jpg"
  }
]

function age(birthYear) {
  let calculatedAge = new  Date().getFullYear() - birthYear;

  if (calculatedAge == 1) {
    return '1 year old';
  }else if (calculatedAge == 0) {
    return 'Baby';
  }else {
    return `${calculatedAge} years old`;
  }
}
function island(place) {
  return `
  <h4>Favorite Spots</h4>
  <ul class="enter-island">
  ${place}
  </ul>
  `;
}
//template lieral implimentation ``
function placeTemplate(place) {
  return `
  <div class="animal">
    <img class="photo" src="${place.photo}">
    <h3>${place.name}</h3> <p>${place.area}</p>
    <p><strong>Age:</strong> ${age(place.birthYear)}</p>
    <p>${place.favSpot ? island(place.favSpot): ''}</p>
  </div>
  `
}
document.getElementById('output').innerHTML = `
  <h4 class="h4">Pets (${petsData.length} results)</h4>
  ${petsData.map(placeTemplate).join(' ')}
  <p>These Spots ${petsData.length} were added recently.</p>
`
