let line = document.querySelector(".caret");
let nav_elements= Array.from(document.querySelectorAll(".nav-elements"));
let check2 = true;

line.addEventListener('click', () => {
    if (check2) {
        
        for (let i of nav_elements){
            i.style.display = "inline-block";
        }
        
        document.querySelector(".navbar-content").style.height = "15rem";
         
    } else {
        for (let i of nav_elements){
            i.style.display = "none";
        }
        
        document.querySelector(".navbar-content").style.height = "4rem"; // Changed width to height for consistency
    }
    check2 = !check2; 
});
