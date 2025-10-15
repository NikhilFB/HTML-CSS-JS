import restaurants from "./data.js";
const itemHolder = document.querySelector(".item-holder");
const item =  document.querySelector(".item");
let html = "";

restaurants.forEach((item) => {
  html +=`
    <div class="item">
      <div class="food">
        <img class="image" src="${item.img}">
      </div>
      <div class = "second">
        <p class="name">${item.name}</p>
        <p class="country-item">${item.country}</p>
        <div class="rating-time">
          <div class="rating">⭐️ ${item.rating}</div>
          <p class="time">${item.deliveryTime}</p>
        </div>
        <p class="min-order">Min-Order:${item.minOrderPrice}</p>

      </div>

    </div>
  `;
});

itemHolder.innerHTML = html;
item.addEventListener('click',() => {
  
})

