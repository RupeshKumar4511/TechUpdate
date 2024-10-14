let message = document.querySelector("#contact");
let dialog = document.querySelector("#contact-popup");
message.addEventListener("click", () => {

    dialog.style.visibility = "visible";
    dialog.show();

});
