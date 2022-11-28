
// ------------------------------------------Get the modal-------------------------------------------------------

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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

//--------------------------------------------Footer-----------------------------------------------------------

// const btns = document.querySelectorAll('.btn');
// const dropMenus = document.querySelectorAll('.drop-menu');

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         removeActive();
//         btn.classList.add('active');
//         document.querySelector(btn.dataset.target).classList.add('active');
//     })
// })

// const removeActive = () => {
//     btns.forEach(btn => btn.classList.remove('active'));
//     dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
// }

// window.onclick = (e) => {
//     if (!e.target.matches('.btn')) {
//         removeActive()
//     }
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }