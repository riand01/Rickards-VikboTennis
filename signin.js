

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
var pswError = document.getElementById("psw-error");
var submit2Error = document.getElementById("submit-error2");


function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Användanamn ska motsvara email"
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Mailadressen är ogilltig"
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePsw(){
    var psw = document.getElementById('contact-psw').value;

    if(psw.length == 0){
        pswError.innerHTML = 'Lösenordet bör vara minst 6 karaktärer långt';
        return false;
    }
    if(psw.length !== 6){
        pswError.innerHTML = 'Lösenordet bör vara minst 6 karaktärer långt';
        return false;
    }
    pswError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}



function validateForm(){
    if(!validateEmail() || !validatePsw()){
        submitError2.innerHTML = 'Fyll i alla nödvändiga fält';
        return false;
    }
    submitError2.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


// (!fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){