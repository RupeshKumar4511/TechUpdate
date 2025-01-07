let message = document.querySelector("#contact");
let dialog = document.querySelector("#contact-popup");
message.addEventListener("click", () => {

    dialog.style.visibility = "visible";
    dialog.show();

});

const link2 = document.getElementById("link2");
link2.addEventListener("click", () => {
    dialog.style.visibility = "hidden";
    
  
  });