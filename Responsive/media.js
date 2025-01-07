let line = document.querySelector(".caret");
let nav_elements= Array.from(document.querySelectorAll(".nav-elements"));
let login2_popup = document.querySelector(".login-popup");
let check2 = true;

line.addEventListener('click', () => {
    if (check2) {
        
        for (let i of nav_elements){
            i.style.display = "inline-block";
        }
        
        document.querySelector(".navbar-content").style.height = "15rem";
        document.querySelector(".login2").style.display = "inline-block";
         
    } else {
        for (let i of nav_elements){
            i.style.display = "none";
        }
        
        document.querySelector(".navbar-content").style.height = "4rem";
        login2_popup.style.visibility = "hidden"; 
        
    }
    check2 = !check2; 
});


login2 = document.querySelector(".login2");

let check3 = true;
login2.addEventListener('click',()=>{
    if(check3){
        login2_popup.show();
        login2_popup.style.visibility = "visible"; 
        
    }

    else{
        login2_popup.style.visibility = "hidden"; 
    }

    check3 = !check3;
});