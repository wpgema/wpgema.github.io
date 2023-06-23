const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdowns_menu');

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
}