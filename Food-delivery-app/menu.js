const menuItems = document.querySelector(".menu-items");


function displayMenu(restaurant) {
  const data = localStorage.getItem("selectedRestaurant");
  const restaurantData = JSON.parse(data);
  menuItems.innerHTML = `
    <h2>${restaurantData.name}</h2>
    <div class="menu-container">
      ${restaurantData.menu.map(item => `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
          <p>₹${item.price}</p>
          <p>⭐ ${item.rating}</p>
        </div>
      `).join("")}
    </div>
  `;
}
displayMenu();
