const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    let titleAbouts = document.querySelectorAll(".title-about");
    if(reveal){
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 80;
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
}

window.addEventListener("scroll", reveal)