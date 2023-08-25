const nightswitch = document.querySelectorAll(".bios > div");
const menuswitch = document.querySelector("nav ul");
const hamburgerswitch = document.querySelector("#hamburger-menu")
function nightToggle() {
    for (var i=0; i<nightswitch.length; i++){
        nightswitch[i].classList.toggle("night-mode-bios");
    };    
    document.body.classList.toggle("night-mode");
    menuswitch.classList.toggle("night-mode");
    hamburgerswitch.classList.toggle("night-hamburger");
}