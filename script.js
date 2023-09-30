//Modo escuro
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Menu responsivo
var nav = document.getElementById("nav");
var showMenu = document.getElementById("showMenu");
var hideMenu = document.getElementById("hideMenu");
showMenu.addEventListener("click", function () {
    nav.classList.add("show");
});

hideMenu.addEventListener("click", function () {
    nav.classList.remove("show");
});