let button = document.querySelector(".button");
let tooltip1 = document.querySelector("#message1");
let tooltip2 = document.querySelector("#message2");
let tooltip3 = document.querySelector("#message3")


button.addEventListener('click',() => {
  let username = document.querySelector(".username").value.trim();
  let email = document.querySelector(".email").value.trim();
  let password = document.querySelector(".password").value.trim();

  if(username.length < 3){
    tooltip1.innerHTML = 'Username should not be less than 3 characters'
    setTimeout(() => {
      tooltip1.innerHTML  = '';
     
    },3000);
    return; 
  }

  if(!email.includes('@') || !email.includes('.')){
    tooltip2.innerHTML = 'Enter a valid email';
     setTimeout(() => {
      tooltip2.innerHTML  = '';
      
    },3000);
    return;
   
  }
  
  if(password.length < 8){
     tooltip3.innerHTML = 'Enter a valid password';
     setTimeout(() => {
      tooltip3.innerHTML  = '';
  
    },3000);
    return;
   
  }
})
