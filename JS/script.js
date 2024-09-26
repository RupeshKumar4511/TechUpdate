let currentIndex = 0;
let forward = true;  // Track the direction of the slide (true means forward, false means backward)
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');  // Target the slider container
const slideInterval = setInterval(changeSlide, 3000); // Change slide every 3 seconds

function changeSlide() {
    if (forward) {
        currentIndex++;
        if (currentIndex >= totalSlides - 1) {
            forward = false;  // Change direction when the last slide is reached
        }
    } else {
        currentIndex--;
        if (currentIndex <= 0) {
            forward = true;  // Change direction when the first slide is reached
        }
    }

    // Translate the slider horizontally based on the current index
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    slider.style.transition = 'transform 0.8s ease';  // Smooth transition effect
}


function popup(){
    let message = document.querySelector("#contact");
    let dialog = document.querySelector(".popup")
    message.addEventListener("click",()=>{
    dialog.show()
    });
}
popup();