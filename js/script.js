const hamburgerMobile = document.querySelector('.head__navbar__hamburger');
const navbarSection = document.querySelector('.head__navbar__section')
const year = document.querySelector('#year');
const date = new Date();
const currentYear = date.getFullYear()
year.innerText = currentYear;
const navbarBody = document.querySelector('.body');
hamburgerMobile.addEventListener('click', () => {
	hamburgerMobile.classList.toggle('mobileHam__active')
	navbarSection.classList.toggle('MobileNav__bar');
	navbarBody.classList.toggle('navBody')
})

const toggleBar=document.querySelector('.toggle');


const toggleball=document.querySelector('.toggle__ball')

toggleBar.addEventListener('click',()=>{
    
    toggleball.classList.toggle('toggle__active');
    
    })
