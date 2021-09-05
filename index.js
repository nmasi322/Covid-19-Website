// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('active');
//     });
// });

const menutoggle = document.querySelector(".toggle");
        const navigation = document.querySelector(".navbar");
        menutoggle.onclick = function(){
            menutoggle.classList.toggle("active")
            navigation.classList.toggle("active")
        }


// js
window.onscroll = function(){
    myFunction()
};
var header = document.getElementById('myheader');
var sticky = header.offsetTop;
function myFunction(){
    if (window.pageYOffset > sticky){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}

//scroll to top
const links = document.querySelectorAll(".scrolltotop a");

for (const link of links){
    link.addEventListener('click', clickHandler);
}

function clickHandler(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

// scroll spy 
const menuSection = document.querySelectorAll('nav li');

// for clickable event

menuSection.forEach( v => {
    v.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove('active'))
            v.classList.add('active')
        }, 300)
    })
})

//for windows scrolldown event

// window.onscroll = (() => {
//     const mainSection = document.querySelector('section');

//     mainSection.forEach((v,i) => {
//         const rect = v.getBoundingClientRect().y
//         if (rect < window.innerHeight-200){
//             menuSection.forEach(v => v.classList.remove('active'))
//             menuSection[i].classList.add('active')
//         }
//     })
// })