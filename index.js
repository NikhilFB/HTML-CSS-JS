let button = document.querySelector(".button");
let message1 = document.querySelector("#message1");
let message2 = document.querySelector("#message2");
let message3 = document.querySelector("#message3");


button.addEventListener('click',() => {
  let username = document.querySelector(".username").value.trim();
  let email = document.querySelector(".email").value.trim();
  let password = document.querySelector(".password").value.trim();
  if(username.length < 3){
    message1.textContent = 'Username should not be less than 3 characters'

  }
  if(!email.includes('@') || !email.includes('.')){
    message2.textContent = 'Enter a valid email'


  }
  if(password.length < 8){
    message3.textContent = 'Enter a valid password'
  }
})
