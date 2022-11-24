
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('.company-info img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popupimage').style.display = 'block';
        document.querySelector('.popupimage img').src = image.getAttribute('src');
    }
});

document.querySelector('.popupimage span').onclick = () =>{
    document.querySelector('.popupimage').style.display = 'none';
}

