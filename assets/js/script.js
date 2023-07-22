const toggleTombol = document.getElementById('nav-togle');
const navToggle = document.getElementById('nav');
const main = document.getElementById('main');

toggleTombol.addEventListener("click", function(){
    navToggle.classList.toggle("nav-togle");

    navToggle.addEventListener("click", function(){
        navToggle.classList.remove("nav-togle");
    });

    main.addEventListener("click", function(){
        navToggle.classList.remove("nav-togle");
    });
})