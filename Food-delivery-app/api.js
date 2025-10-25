const apiKey = "";
const searchButton = document.querySelector(".search-button");
const itemHolder = document.querySelector(".item-holder");
const item = document.querySelector(".item");


function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Your location:", lat, lon);
        getNearbyRestaurants(lat, lon);
      },
      error => {
        console.error("Error getting location:", error);
        alert("Unable to fetch location. Please enable location access.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}


async function getNearbyRestaurants(lat, lon) {
  const radius = 8000; // 8km radius
  const url = `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${lon},${lat},${radius}&limit=50&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.features) {
      const restaurants = data.features.map(place => ({
        name: place.properties.name,
        address: place.properties.formatted,
        country: place.properties.country,
        lat: place.properties.lat,
        lon: place.properties.lon
      }));

      console.log("Nearby restaurants:", restaurants);
      render(restaurants)

    } else {
      console.log("No nearby restaurants found.");
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}

function render(restaurants) {
  let html = "";
  restaurants.forEach((item) => {
    html += `
    <div class="item">
      
      <div class = "second">
        <p class="name">${item.name}</p>
        <p class="country-item">${item.country}</p>
      </div>

    </div>
  `;
  });
  itemHolder.innerHTML = html;
  


}
searchButton.addEventListener('click',() => {getUserLocation()})


