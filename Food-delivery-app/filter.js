import restaurants from "./data.js";
const pizza = document.querySelector(".pizza");
const burger = document.querySelector(".burger");
const sushi = document.querySelector(".sushi");
const curry = document.querySelector(".curry");
const itemHolder = document.querySelector(".item-holder");
const input = document.querySelector('.sort');
const all = document.querySelector(".all-button");


function renderList(list) {

  itemHolder.innerHTML = list.map(item => `
    <div class="item">
      <div class="food">
        <img class="image" src="${item.img}">
      </div>
      <div class="second">
        <p class="name">${item.name}</p>
        <p class="country-item">${item.country}</p>
        <div class="rating-time">
          <div class="rating">⭐️ ${item.rating}</div>
          <p class="time">${item.deliveryTime}</p>
        </div>
        <p class="min-order">Min-Order:${item.minOrderPrice}</p>
      </div>
    </div>
  `).join("");
}
all.addEventListener('click',() => {renderList(restaurants)});
pizza.addEventListener('click',() => {renderList(restaurants.filter(r => r.typeId === 1))});
sushi.addEventListener('click',() => {renderList(restaurants.filter(r => r.typeId === 2 ))});
burger.addEventListener('click',() => {renderList(restaurants.filter(r => r.typeId === 3))});
curry.addEventListener('click',() => {renderList(restaurants.filter(r => r.typeId === 4))});

input.addEventListener('change',() => {
  let filtered = [...restaurants];  
  if(input.value === "Highest"){ 
    filtered = filtered.filter(r => r.rating >= 3.9);
  }
  else if(input.value === "Lowest"){
    filtered = filtered.filter(r => r.rating <= 2.5);
  }
  else if(input.value === "High-Low"){
    filtered = filtered.sort((a,b) => b.rating - a.rating);
    
  }
  else if(input.value === "Low-High"){
    filtered = filtered.sort((a,b) => a.rating - b.rating);
    
  }
  renderList(filtered);
});