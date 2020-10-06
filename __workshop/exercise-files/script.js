// add js here

//terms window.alert
//pword length 10 char min
//match confpword
//error box 
//pword forms put inside function
//if pword.value  (assign new) < 10 add error .innertext

// let terms = document.getElementById("#terms");
const form = document.getElementById("form");
let pword = document.getElementById("pword");
let pwordConf = document.getElementById("confpword");
let perrorText = document.getElementById("perrorText");
let perror = document.getElementById("perror");

form.addEventListener("submit", pwCheck);

function pwCheck(event) {

    event.preventDefault();
    
    if (pword.value.length < 10) {
        perror.style.display = "block";
        perrorText.innerText = "Your password is too short! Please provide a password that is at least 10 characters long.";
        //red outline bored ... focus
        pword.focus();
        // perror.style.border = "2px solid red";
        pword.classList.add("redborder");
    } else if (pword.value != pwordConf.value) {
        perror.style.display = "block";
        perrorText.innerText = "Your password and confirmation password do not match."
        pwordConf.focus();
        pwordConf.classList.add("redborder");
    } else {
        window.alert("Success!");
        clearErrors();
    }
};

function clearErrors() {
    perror.style.display = "none";
    pword.classList.remove("redborder");
    pwordConf.classList.remove("redborder");
}


// function Validate() {
//     var password = document.getElementById("txtPassword").value;
//     var confirmPassword = document.getElementById("txtConfirmPassword").value;
//     if (password != confirmPassword) {
//         alert("Passwords do not match.");
//         return false;
//     }
//     return true;
// }