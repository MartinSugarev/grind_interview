let openNavBtn = document.body.querySelector(".fa-solid.fa-arrow-down-short-wide")
let closeNavBtn = document.body.querySelector("#close_btn")
openNavBtn.addEventListener("click", () => {
    let navbar = document.getElementById("navbar");
    closeNavBtn.classList.add("active")
    openNavBtn.classList.add("active")
    navbar.classList.add("active")
})

closeNavBtn.addEventListener("click", () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.remove("active");
    closeNavBtn.classList.remove("active")
    openNavBtn.classList.remove("active")
})
