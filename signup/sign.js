

var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");
var lnameError = document.getElementById("lname-error");
var ssnrError = document.getElementById("ssnr-error");
var adressError = document.getElementById("adress-error");
var postError = document.getElementById("post-error");
var cityError = document.getElementById("city-error");
var radioError = document.getElementById("radio-error");


function validateFname(){
    var fname = document.getElementById('contact-fname').value;

    if(fname.length == 0){
        nameError.innerHTML = 'Namn är obligatoriskt';
        return false;
    }
    if(!fname.match(/^[A-Öa-ö]*$/)){
        nameError.innerHTML = 'Ett namn, inga siffror';
        return false;
    }
    nameError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateLname(){
    var lname = document.getElementById('contact-lname').value;

    if(lname.length == 0){
        lnameError.innerHTML = 'Efternamn är obligatoriskt';
        return false;
    }
    if(!lname.match(/^[A-Za-z]*$/)){
        lnameError.innerHTML = 'Ett namn, inga siffror';
        return false;
    }
    lnameError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Mailadress är obligatoriskt"
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Mailadressen är ogilltig"
        return false;
    }
    emailError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Telefonnummer är obligatorsikt';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = '10 siffror';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Bara siffror';
        return false;
    }
    phoneError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateSSnr(){
    var ssnr = document.getElementById('contact-ssnr').value;

    if(ssnr.length == 0){
        ssnrError.innerHTML = 'Personnr är obligatorsikt';
        return false;
    }
    if(ssnr.length !== 10){
        ssnrError.innerHTML = '10 siffror';
        return false;
    }
    if(!ssnr.match(/^[0-9]{10}$/)){
        ssnrError.innerHTML = 'Bara siffror';
        return false;
    }
    ssnrError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateAdress(){
    var adress = document.getElementById('contact-adress').value;

    if(adress.length == 0){
        adressError.innerHTML = 'Adress är obligatoriskt';
        return false;
    }
    if(!adress.match(/^[A-Öa-ö]*$/)){
        adressError.innerHTML = 'En adress, inga siffror';
        return false;
    }
    adressError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validatePost(){
    var post = document.getElementById('contact-post').value;

    if(post.length == 0){
        postError.innerHTML = 'Postnr är obligatorsikt';
        return false;
    }
    if(post.length !== 5){
        postError.innerHTML = '5 siffror';
        return false;
    }
    if(!post.match(/^[0-9]{5}$/)){
        postError.innerHTML = 'Bara siffror';
        return false;
    }
    postError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateCity(){
    var city = document.getElementById('contact-city').value;

    if(city.length == 0){
        cityError.innerHTML = 'Stad är obligatoriskt';
        return false;
    }
    if(!city.match(/^[A-Öa-ö]*$/)){
        cityError.innerHTML = 'En stad, inga siffror';
        return false;
    }
    cityError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateRadio(){
    var valid = false;
    var radio = document.myform.gender;

    for(var i=0;i<radio.length;i++){
        if(radio[i].checked){
            valid = true;
            break;
        }
    }

    if (valid){
        radioError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    }
    else{
        radioError.innerHTML = 'Välj Man eller Kvinna';
        return false;
    }
    cityError.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
    return true;
}

function validateForm(){
    if(!validateFname() || !validateLname() || !validateEmail() || !validatePhone() || !validateSSnr() || !validateAdress() || !validatePost() || !validateCity() || !validateRadio()){
        submitError.innerHTML = 'Fyll i alla nödvändiga fält';
        return false;
    }
}


// (!fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){