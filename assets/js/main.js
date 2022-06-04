

/*============================ shoow menu ========================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


// validation 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')      
    })
}

//button close 
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
  
/*============================ REMOVE MENU MOBILE OR ICON ========================*/
const navlink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
   
}
//chaque click
navlink.forEach((items) => items.addEventListener("click", linkAction));