const apiKey = "";
const searchButton = document.querySelector(".search-button");
const itemHolder = document.querySelector(".item-holder");
const Items = document.querySelector(".Items");
import restaurants from "./data.js"; 


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
  const url = `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${lon},${lat},${radius}&limit=30&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.features) {
      const nearbyRestaurants = data.features.map((place, index) => ({
        id: index + 1,
        name: place.properties.name || "Unnamed Restaurant",
        address: place.properties.formatted || "No address available",
        country: place.properties.country || "Unknown",
        lat: place.properties.lat,
        lon: place.properties.lon
      }));

      console.log("Nearby restaurants:", nearbyRestaurants);
      localStorage.setItem('fetchedRestaurants',JSON.stringify(nearbyRestaurants));
      render(nearbyRestaurants);
    } else {
      console.log("No nearby restaurants found.");
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}


function render(restaurantsList) {
  let html = "";
  restaurantsList.forEach((item) => {
    html += `
      <div class="item" data-id="${item.id}">
        <div class="second">
          <p class="name">${item.name}</p>
          <p class="country-item">${item.country}</p>
        </div>
      </div>
    `;
  });
  itemHolder.innerHTML = html;
}


searchButton.addEventListener("click", () => {
  getUserLocation();
});


itemHolder.addEventListener("click", (e) => {
  const item = e.target.closest(".item");
  if (!item) return; 
  const storedRestaurants = JSON.parse(localStorage.getItem("fetchedRestaurants")) || [];
  const restaurantId = parseInt(item.dataset.id);
  const restaurant = storedRestaurants.find(r => r.id === restaurantId);

  if (restaurant) {
    localStorage.setItem("selectedRestaurant", JSON.stringify(restaurant));
    window.location.href = "menu.html";
  } 
});
window.addEventListener("DOMContentLoaded",() => {
  const storedRestaurants = JSON.parse(localStorage.getItem("fetchedRestaurants")) || [];
  if(storedRestaurants.length > 0){
    render(storedRestaurants);
  }
  
})




