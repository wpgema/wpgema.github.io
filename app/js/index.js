window.addEventListener('load', function() {
    let imgHero = document.querySelectorAll(".img-laptop")[0];
    imgHero.classList.add("opacity-0");
    imgHero.classList.add("upAnimate");
});

import { translateToIndonesia, translateToEngland} from "./language.js";

const tombolTranslate = document.getElementById("tombol");
let IDN = true;
translateToEngland()
// Event listener untuk tombol
tombolTranslate.addEventListener("click", function() {
    if (IDN) {
        translateToIndonesia()
    } else {
        translateToEngland()
    }
    IDN = !IDN; // Balikkan status
});

// script bagian services
const containerServices = document.getElementById('container-services');
if(containerServices){
    let subContainer = Array.from(containerServices.children);
    subContainer.forEach(el => {
        el.classList.add("display-flex-center-beetwen");
        el.classList.add("opacity-0");
        el.addEventListener("mouseenter", ()=>{
            el.classList.add("transform");
        })
        el.classList.remove("transform")
    })
}

// script bagian faq
const faqs = document.querySelectorAll('.faqs');

faqs.forEach(faq => {
    faq.addEventListener('click', function(){
        faq.classList.toggle('active')
    })
})

import { getDataYoutube, getDataVideo} from "./getApiYoutube.js";

getDataYoutube('https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBEHWEJeM559bL3HyjKZwjtC06PGqBlqtQ&part=snippet,statistics&id=UCCw2AZCpuNKZQnU9447iCNQ');
getDataVideo('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBEHWEJeM559bL3HyjKZwjtC06PGqBlqtQ&part=snippet&channelId=UCCw2AZCpuNKZQnU9447iCNQ&maxResults=1&order=date');