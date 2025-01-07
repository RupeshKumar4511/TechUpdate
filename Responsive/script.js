let currentIndex = 0;
let forward = true;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
const slideInterval = setInterval(changeSlide, 3000);

function changeSlide() {
    if (forward) {
        currentIndex++;
        if (currentIndex >= totalSlides - 1) {
            forward = false;
        }
    } else {
        currentIndex--;
        if (currentIndex <= 0) {
            forward = true;
        }
    }

    // Translate the slider horizontally based on the current index
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    slider.style.transition = 'transform 0.8s ease';  // Smooth transition effect
}


// for contact us popup in index

let message = document.querySelector("#contact");
let dialog = document.querySelector("#contact-popup");
message.addEventListener("click", () => {

    dialog1.style.visibility = "hidden";
    dialog2.style.visibility = "hidden";
    dialog3.style.visibility = "hidden";
    dialog.style.visibility = "visible";
    dialog.show();

});





// for login popup

let message1 = document.querySelector(".login");
let dialog1 = document.querySelector(".login-popup");
let check = true;

message1.addEventListener("click", () => {
    if (check) {
        dialog1.show();
        dialog2.style.visibility = "hidden";
        dialog.style.visibility = "hidden";
        dialog3.style.visibility = "hidden";
        dialog1.style.visibility = "visible";
        check = false;
    } else {
        dialog1.style.visibility = "hidden";
        check = true;
    }

});



// for signIn popup

let message2 = document.querySelector(".signIn");
let dialog2 = document.querySelector("#signIn-popup")
message2.addEventListener("click", () => {
    dialog.style.visibility = "hidden";
    dialog1.style.visibility = "hidden";
    dialog3.style.visibility = "hidden";

    dialog2.show();
    dialog2.style.visibility = "visible";
});




// for signUp popup

let message3 = document.querySelector(".signUp");
let dialog3 = document.querySelector("#signUp-popup");
message3.addEventListener("click", () => {
    dialog.style.visibility = "hidden";
    dialog1.style.visibility = "hidden";
    dialog2.style.visibility = "hidden";

    dialog3.show();
    dialog3.style.visibility = "visible";

});


// for signOut 
let signout_message = document.querySelector('.signout');
signout_message.addEventListener('click', () => {
    alert("Sign Out Successfully");
    signout_message.style.display = "none";
    document.querySelector('.user').style.display = "none";
    message2.style.display = "block";
    document.querySelector('.signUp').style.display = "block";



});


let dialog7 = document.querySelector("#verify-otp");
const link = Array.from(document.querySelectorAll("#link"));
for(let i of link){
i.addEventListener("click", () => {
    dialog.style.visibility = "hidden";
    dialog1.style.visibility = "hidden";
    dialog2.style.visibility = "hidden";
    dialog3.style.visibility = "hidden";
    dialog7.style.visibility = "hidden";
  
  });
}