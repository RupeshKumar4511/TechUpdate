const form = document.getElementById("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phoneNo = document.getElementById("phoneNo");


function errorMsg(input, message) {
    const form_control = input.parentElement;
    form_control.className = "form-control error";
    const small = form_control.querySelector("small");
    input.style.border = "2px solid red";
    small.innerText = message;

}

function successMsg(input) {
    const form_control = input.parentElement;
    form_control.className = "form-control success";
    const small = form_control.querySelector("small");
    small.innerText = "";
    input.style.border = "2px solid green";
}

// This is for contact us
document.querySelector("#contact-sub").addEventListener('click', (e) => {
    e.preventDefault();
    if (fullname.value.trim().length === 0) {
        errorMsg(fullname, "Name cannot be blank");
    }
    else {
        const nameRegex = /^[a-zA-Z\s_]{5,16}$/;
        if (nameRegex.test(fullname.value)) {
            successMsg(fullname);
        }
        else {
            errorMsg(fullname, "Name must contains atleast 5 characters and maximum 16 \n characters(including: alphabets,space and underscore)");

        }
    }

    if (email.value.trim().length === 0) {

        errorMsg(email, "Email ID cannot be blank");
    }
    else {
        const emailRegex = /^[a-zA-Z0-9]+(?:[.+%_][a-zA-Z0-9]+)*@[A-Za-z]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email.value)) {
            successMsg(email);
        } else {
            errorMsg(email, "This is not a valid email id");
        }
    }

    if (phoneNo.value.trim().length === 0) {

        errorMsg(phoneNo, "Phone No cannot be blank");
    }
    else {
        const phoneNoRegex = /^[0-9]{10}$/;
        if (phoneNoRegex.test(phoneNo.value)) {
            successMsg(phoneNo);
        } else {
            errorMsg(phoneNo, "This is not a valid Phone No");
        }

    }

});




// This is for sign in popup

const form2 = document.getElementById("form2");
const username = document.getElementById("username");
const userpassword = document.getElementById("userpassword");
document.querySelector("#signIn-sub").addEventListener('click', (e) => {
    e.preventDefault();
    if (username.value.trim().length === 0) {
        errorMsg(username, "User Name cannot be blank");
    }
    else {
        const usernameRegex = /^[a-zA-Z]{5,11}(?:[.\s_][[0-9]{0,4})*$/;
        if (usernameRegex.test(username.value)) {
            successMsg(username);
        }
        else {
            errorMsg(username, "User Name must contains atleast 5 characters and maximum 16 \n characters(including: alpahabets,digits,space and underscore)");

        }
    }

    if (userpassword.value.trim().length === 0) {

        errorMsg(userpassword, "Password cannot be blank");
    }
    else {
        const userpasswordRegex = /^[a-zA-Z]{4,6}(?:[.@#$_][0-9]{0,1})*/;
        if (userpasswordRegex.test(password.value)) {
            successMsg(userpassword);
        } else {
            errorMsg(userpassword, "Password must contains atleast 5 characters and maximum 8 \n characters(including: alphabet,digit,@#$_)");
        }
    }



});


// This is for sign up popup
const form3 = document.getElementById("form3");
const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const otp = document.getElementById("otp");
const otpVerify = document.getElementById("otp-verify");



// port = 2525
// let otp_value;
// function sendOTP(gmail) {
//     otp_value = Math.floor(1000 + Math.random() * 9000);
//     Email.send({,
//         Body: `<h2>Your otp is ${otp_value}</h2>`,
//     }).then(
//         message => {
//             return message;
//         }
//     );
// }


if (password.value.trim().length === 0) {

    errorMsg(password, "Password cannot be blank");
}
else {
    const passwordRegex = /^[a-zA-Z]{4,8}(?:[.@#$_][0-9]+)*/;
    if (passwordRegex.test(password.value)) {
        successMsg(password);
    } else {
        errorMsg(password, "This is not a valid password");
    }

}

// This is for sign Up popup
document.querySelector(".send-otp").addEventListener('click', (e) => {
    e.preventDefault();
    if (gmail.value.trim().length === 0) {
        errorMsg(gmail, "email ID cannot be blank");
    }
    else {
        const gmailRegex = /^[a-zA-Z0-9]+(?:[.+%_][a-zA-Z0-9]+)*@[A-Za-z]+\.[a-zA-Z]{2,}$/;
        if (gmailRegex.test(gmail.value)) {
            successMsg(gmail);
        } else {
            errorMsg(gmail, "This is not a valid email id");
        }
    }




    if (gmailRegex.test(gmail.value)) {

        let otp_message = sendOTP(gmail.value);
        if (otp_message === "OK") {
            otpVerify.style.visibility = "visible";
        } else {
            alert("Network Issue");
        }

    }



});

document.getElementById("signUp-sub").addEventListener("click", (e) => {
    e.preventDefault();
    if (otp.value.trim().length === 0) {
        errorMsg(otp, "OTP cannot be blank");
    }
    else {
        const otpRegex = /^[0-9]{4}$/;
        if (otpRegex.test(otp.value)) {

            if (otp.value === otp_value) {
                successMsg(otp);
            } else {
                errorMsg(otp, "Incorrect OTP");
            }
        } else {
            errorMsg(otp, "Incorrect OTP");
        }

    }
});




