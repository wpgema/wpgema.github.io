const reveal = (el, cls, point) => {
    if(el){
        for(let i = 0; i < el.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = el[i].getBoundingClientRect().top;
            let revealPoint = point;
            if(revealTop < windowHeight - revealPoint){
                el[i].classList.remove('display-none');
                el[i].classList.add(cls);
            } else {
                el[i].classList.remove(cls);
            }
        }
    }
}

const revealAbout = () => {
    let reveals = document.querySelectorAll(".reveal");
    reveal(reveals, 'active', 180)
}

const revealCardServices = () => {
    let card = document.getElementById("container-services").children;
    reveal(card, 'upAnimate', 180)
}

const revealCardTechnology = () => {
    let card = document.getElementById("container-technology").children;
    reveal(card, 'upAnimate', 140)
}

const revealCardProvide = () => {
    let card = document.getElementById("container-provide").children;
    reveal(card, 'upAnimate', 180)
}

const revealCardProvide2 = () => {
    let card = document.getElementById("container-provide2").children;
    reveal(card, 'upAnimate', 180)
}

const revealCardAnswer = () => {
    let card = document.getElementById("faq").children;
    reveal(card, 'upAnimate', 140)
}

const revealCardIMG = () => {
    let card = document.querySelectorAll(".img-laptop");
    reveal(card, 'upAnimate', 140)
}

window.addEventListener("scroll", revealAbout)
window.addEventListener("scroll", revealCardServices)
window.addEventListener("scroll", revealCardTechnology)
window.addEventListener("scroll", revealCardProvide)
window.addEventListener("scroll", revealCardProvide2)
window.addEventListener("scroll", revealCardAnswer)
window.addEventListener("scroll", revealCardIMG)