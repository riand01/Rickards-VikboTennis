
flatpickr("#date", {
    enableTime: true,
    time_24hr: true,
    minTime: "08:00",
    maxTime: "22:00",
    weekNumbers: true,
    dateFormat: "Y-m-d H:i",
    altInput: true,
    altFormat: "d - m - Y  (H:i)",
    minDate: "today"
});

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
var amountError = document.getElementById("amount-error");
var menError = document.getElementById("men-error");
var femaleError = document.getElementById("female-error");

function validateDate() {
    var date = document.getElementById('date').value;

    if (date.length == 0) {
        dateError.innerHTML = 'Namn är obligatoriskt';
        return false;
    } else {
        dateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    // dateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    // return true;
}

function validateFname() {
    var fname = document.getElementById('contact-fname').value;

    if (fname.length == 0) {
        nameError.innerHTML = 'Namn är obligatoriskt';
        return false;
    }
    if (!fname.match(/^[A-Öa-ö]*$/)) {
        nameError.innerHTML = 'Ett namn, inga siffror';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateLname() {
    var lname = document.getElementById('contact-lname').value;

    if (lname.length == 0) {
        lnameError.innerHTML = 'Efternamn är obligatoriskt';
        return false;
    }
    if (!lname.match(/^[A-Za-z]*$/)) {
        lnameError.innerHTML = 'Ett namn, inga siffror';
        return false;
    }
    lnameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Mailadress är obligatoriskt"
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Mailadressen är ogilltig"
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Telefonnummer är obligatorsikt';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Telefonnummer skall vara 10 siffror';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Bara siffror';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePost() {
    var post = document.getElementById('contact-post').value;

    if (post.length == 0) {
        postError.innerHTML = 'Användar id är obligatorsikt';
        return false;
    }
    if (post.length !== 4) {
        postError.innerHTML = 'Användar id skall vara 4 siffror';
        return false;
    }
    if (!post.match(/^[0-9]{4}$/)) {
        postError.innerHTML = 'Bara siffror';
        return false;
    }
    postError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMen() {
    var men = document.getElementById('contact-men').value;

    if (men.length == 0) {
        menError.innerHTML = 'Antal är obligatorsikt';
        return false;
    }

    if (!men.match(/^[0-9]{1}$/)) {
        menError.innerHTML = 'Bara siffror';
        return false;
    }
    menError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateFemale() {
    var female = document.getElementById('contact-female').value;

    if (female.length == 0) {
        femaleError.innerHTML = 'Antal är obligatorsikt';
        return false;
    }

    if (!female.match(/^[0-9]{1}$/)) {
        femaleError.innerHTML = 'Bara siffror';
        return false;
    }
    femaleError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateAmount() {
    var amount = document.getElementById('contact-amount').value;

    if (amount.length == 0) {
        amountError.innerHTML = 'Antal är obligatorsikt';
        return false;
    }

    if (!amount.match(/^[0-9]{10}$/)) {
        amountError.innerHTML = 'Bara siffror';
        return false;
    }
    amountError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateDate() || !validateFname() || !validateLname() || !validatePost() || !validateEmail() || !validatePhone() || !validateMen() || !validateFemale() || !validateAmount()) {
        submitError.innerHTML = 'Fyll i alla nödvändiga fält';
        return false;
    }
    submitError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


// (!fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){