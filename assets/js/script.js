const toggleTombol = document.getElementById('nav-togle');
const navToggle = document.getElementById('nav');

toggleTombol.addEventListener("click", function(){
    navToggle.classList.toggle("nav-togle");
})