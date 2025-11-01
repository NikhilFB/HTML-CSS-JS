const cartButton = document.querySelector(".cart-button");
const cart =  document.querySelector(".Cart"); 
cartButton.addEventListener('click',() => {
  cart.classList.add('active');

})
