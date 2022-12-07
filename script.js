


//------------------------------------------PopupImage-----------------------------------------------------------

document.querySelectorAll('.company-info img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popupimage').style.display = 'block';
        document.querySelector('.popupimage img').src = image.getAttribute('src');
    }
});

document.querySelector('.popupimage span').onclick = () =>{
    document.querySelector('.popupimage').style.display = 'none';
}

//------------------------------------------Hamburger-----------------------------------------------------------

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".ctasign").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".ctalog").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))