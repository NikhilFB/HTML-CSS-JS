let button = document.querySelector(".signup-button");
let tooltip1 = document.querySelector("#message1");
let tooltip2 = document.querySelector("#message2");
let tooltip3 = document.querySelector("#message3");

let sidebar = document.querySelector(".ham1");
let openButton = document.querySelector(".ham-button");
let closeButton = document.querySelector(".close-button");
let final = document.querySelector(".final");



button.addEventListener('click',() => {
  let user = 0,email1 = 0,pass = 0;
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
  else{
    user = 1;
  }

  if(!email.includes('@') || !email.includes('.')){
    tooltip2.innerHTML = 'Enter a valid email';
     setTimeout(() => {
      tooltip2.innerHTML  = '';
      
    },3000);
    return;
   
  }
   else{
    email1 = 1;
  }
  
  if(password.length < 8){
     tooltip3.innerHTML = 'Enter a valid password';
     setTimeout(() => {
      tooltip3.innerHTML  = '';
      count++;
  
    },3000);
    return;
   
  }
   else{
    pass = 1;
  }

  if(user == 1 && email1 == 1 && pass == 1 ){
    final.classList.add('active');
    setTimeout(() => {
      final.classList.remove('active');

    },1000);
   

  }
});
openButton.addEventListener('click',() => {
  sidebar.classList.add('active');

});

closeButton.addEventListener('click',() => {
  sidebar.classList.remove('active');

});

