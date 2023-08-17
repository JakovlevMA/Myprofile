let modalW = document.getElementById("modalW");
let avatar = document.getElementById("avatar");
let btn = document.getElementsByClassName("btn")[0];
let container = document.getElementById("container");

avatar.onclick = function() {
    modalW.style.display = "flex";
    container.style.display = "none";
}

btn.onclick = function() {
    modalW.style.display = "none";
    container.style.display = "flex"
}