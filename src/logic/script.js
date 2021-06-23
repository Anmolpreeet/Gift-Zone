// note for veiwer 


// mobile navbar menu
const burger = document.querySelector('#burger')
const navlinks = document.querySelector('#nav-links')

    // logic for navbar
    burger.addEventListener('click',()=>{
        navlinks.classList.toggle('is-active')
    }) 