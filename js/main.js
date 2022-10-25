'use strict'
// NavbAR
const mobileNav = document.getElementById('mobile-navbar')
const navIcon = document.querySelector('.nav-toggler')
function toggleNav(){
    if(mobileNav.style.display=='block'){
        navIcon.classList.add('flip')
        navIcon.hidden=false
        mobileNav.style.display='none'
    }else{
        mobileNav.style.display='block'
        navIcon.hidden=true
    }
}
setInterval(() => {
    if (window.innerWidth>576) {
        mobileNav.style.display='none'
        navIcon.hidden=false
    }
}, 1000);

const navbar = document.querySelectorAll('.navbar li')
navbar.forEach((element,i)=>{
    element.addEventListener('click',function(){
        // navbar.forEach(element=>{element.classList.remove('active')})
        // element.classList.add('active')
        set(i)
    })
})
function set(i){
    setInterval(() => {
        navbar.forEach(element=>{element.classList.remove('active')})
        navbar[i].classList.add('active')
    }, 10);
}
// DESTINATIONS
const destionationButtons = document.getElementById('destinationBtn')
let btns = document.querySelectorAll('#destinationBtn button') 
let crewbuttons = document.querySelectorAll('.crewBtns button')
let techBtns = document.querySelectorAll('#techBtns button')

// DESTINATION
btns.forEach((element,i)=>{
    element.addEventListener('click',function(){
       btns.forEach(element=>{element.classList.remove('active-btn')})
        element.classList.add('active-btn','eff')
        get_data(i)
        
    })
})

 let get_data = async(index)=>{
     let response = await fetch('./data.json')
     let final = await response.json()
     document.getElementById('mainWord').innerHTML = final.destinations[index].name.toUpperCase()
     document.getElementById('mainImg').src = final.destinations[index].images.webp
     document.getElementById('mainDescription').innerHTML = final.destinations[index].description.toUpperCase()
     document.getElementById('mainDistance').innerHTML = final.destinations[index].distance.toUpperCase()
     document.getElementById('mainTravel').innerHTML = final.destinations[index].travel.toUpperCase()
 }

// CREW
crewbuttons.forEach((element,i)=>{
    element.addEventListener('click',function(){
        crewbuttons.forEach(element=>{element.classList.remove('text-white')})
        element.classList.add('text-white')
        getCrewData(i)
    })
})

 const getCrewData = async(index)=>{
    let response = await fetch('./data.json')
    let final = await response.json()
    setTimeout(() => {
        document.getElementById('crewRole').innerHTML = final.crew[index].role.toUpperCase()
        document.getElementById('crewImg').src = final.crew[index].images.webp
        document.getElementById('crewBio').innerHTML = final.crew[index].bio.toUpperCase()
        document.getElementById('crewName').innerHTML = final.crew[index].name.toUpperCase()
    }, 200);
 }

//  TECHNOLOGY
techBtns.forEach((element,i)=>{
    element.addEventListener('click',function(){
        techBtns.forEach(element=>{element.classList.remove('bg-white','text-dark')})
        element.classList.add('bg-white','text-dark')
        getTechData(i)
    })
})

const getTechData = async(index)=>{
    let response = await fetch('./data.json')
    let final = await response.json()
    setTimeout(() => {
        document.getElementById('techName').innerHTML = final.technology[index].name.toUpperCase()
        if (window.innerWidth >992) {
            document.getElementById('techImage').src = final.technology[index].images.portrait
        }else{
            document.getElementById('techImage').src = final.technology[index].images.landscape
        }
        
        document.getElementById('techDescription').innerHTML = final.technology[index].description
    }, 200);
 }


 