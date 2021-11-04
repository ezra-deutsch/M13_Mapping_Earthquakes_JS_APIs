// 13.2.4 - Add console.log to check to see if our code is working.
console.log("working");

// 13.2.4 - Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// 13.2.4 - Alternative Method - Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// 13.2.4 - We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',

    // id: 'mapbox/dark-v10',


    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// 13.2.4 - Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100,

//  }).addTo(map);

//  let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 100,
//     color: "black",
//     fillColor: '#ffffa1'
//  }).addTo(map);

 // 13.4.2 - An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];

// 13.4.2
// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// for (var i = 0; i < cities.length; i++) {
//   var city = cities[i];
//   L.marker(city.location)
//     .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
//     .addTo(myMap);
// }

// Bonus
// User forEach to Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// cities.forEach(city =>   L.marker(city.location)
// .bindPopup("<h1>" + city.city + "</h1> <hr> <h3>Population " + city.population + "</h3>")
// .addTo(Map);
// );

// 13.4.2
// Get data from cities.js
let cityData = cities;

// 13.4.2 - Just city marker points
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// 13.4.2 - Changed to circleMarker points with radius setting
cityData.forEach(function(city) {
    console.log(city)
        L.circleMarker(city.location, {
        radius: city.population/100000})
    .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

