const form = document.getElementById("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phoneNo = document.getElementById("phoneNo");


// This is for sign in popup
const signIn_popup = document.getElementById("signIn-popup");
const form2 = document.getElementById("form2");
const username = document.getElementById("username");
const userpassword = document.getElementById("userpassword");





// This is for sign up popup
const form3 = document.getElementById("form3");
const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const otp = document.getElementById("otp");
const otpVerify = document.getElementById("otp-verify");
const signUp2 = document.getElementById("signUp2-popup");

const setusername = document.getElementById("setusername");
const setuserpassword = document.getElementById("setuserpassword");


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




// This is for sign in popup
document.querySelector("#signIn-sub").addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;
    if (username.value.trim().length === 0) {
        errorMsg(username, "User Name cannot be blank");
        isValid = false;
    }
    else {
        const usernameRegex = /^[a-zA-Z]{5,11}(?:[.\s_][[0-9]{0,4})*$/;
        if (usernameRegex.test(username.value)) {
            successMsg(username);
        }
        else {
            errorMsg(username, "User Name must contains atleast 5 characters and maximum 16 \n characters(including: alpahabets,digits,space and underscore)");
            isValid = false;

        }
    }

    if (userpassword.value.trim().length === 0) {

        errorMsg(userpassword, "Password cannot be blank");
        isValid = false;
    }
    else {
        const userpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@#$_!%*?&])[A-Za-z\d@#$_!%*?&]{5,8}$/;
        if (userpasswordRegex.test(userpassword.value)) {
            successMsg(userpassword);
        } else {
            errorMsg(userpassword, "Password must contains atleast 5 characters and maximum 8 \n characters(including: atleast a smallcase, uppercase alphabet,digit,@#$_!%*?&)");
            isValid = false;
        }
    }




    if (isValid) {

        const formData = new FormData(document.getElementById('form2'));

        // Use fetch to send the form data to the PHP script
        fetch('../PHP/signin.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.error);
                    });
                }
                return response.json();
            })
            .then(() => {
                alert("Sign In Successfully");
                document.getElementById('signIn-popup').style.visibility = "hidden";
                document.getElementById('form2').reset();
                document.querySelector('.signIn').style.display = "none";
                document.querySelector('.signUp').style.display = "none";
                document.querySelector('.user').style.display = "block";
                document.querySelector('.signout').style.display = "block";



            })
            .catch(error => {
                console.error('Error:', error);
                alert('Incorrect UserName or password.');
            });

    }



});









// This is for sign Up popup
document.querySelector(".send-otp").addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = false;
    if (gmail.value.trim().length === 0) {
        errorMsg(gmail, "email ID cannot be blank");

    }
    else {
        const gmailRegex = /^[a-zA-Z0-9]+(?:[.+%_][a-zA-Z0-9]+)*@[A-Za-z]+\.[a-zA-Z]{2,}$/;
        if (gmailRegex.test(gmail.value)) {
            successMsg(gmail);
            isValid = true;
        } else {
            errorMsg(gmail, "This is not a valid email id");

        }
    }


    if (isValid) {

        const formData = new FormData(document.getElementById('form3'));


        fetch('../PHP/mail.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(() => {

                alert("OTP sent Successfully");

                document.getElementById('verify-otp').style.visibility = "visible";

            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending the email.');
            });

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


            const formData = new FormData(document.getElementById('otp-form'));

            // Use fetch to send the form data to the PHP script
            fetch('../PHP/otp.php', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errorData => {
                            throw new Error(errorData.error); // Get error message from PHP response
                        });
                    }
                    return response.json(); // Parse successful response as JSON
                })
                .then(() => {

                    document.getElementById('signUp-popup').style.visibility = "hidden";
                    document.getElementById('verify-otp').style.visibility = "hidden";
                    signUp2.show();

                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Incorrect OTP.');
                });


        } else {
            errorMsg(otp, "Incorrect OP");


        }

    }
});




document.querySelector("#signUp2-sub").addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;
    if (setusername.value.trim().length === 0) {
        errorMsg(setusername, "User Name cannot be blank");
        isValid = false;
    }
    else {
        const setusernameRegex = /^[a-zA-Z]{5,11}(?:[.\s_][[0-9]{0,4})*$/;
        if (setusernameRegex.test(setusername.value)) {
            successMsg(setusername);
        }
        else {
            errorMsg(setusername, "User Name must contains atleast 5 characters and maximum 16 \n characters(including: alpahabets,digits,space and underscore)");
            isValid = false;

        }
    }

    if (setuserpassword.value.trim().length === 0) {

        errorMsg(setuserpassword, "Password cannot be blank");
        isValid = false;
    }
    else {
        const setuserpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@#$_!%*?&])[A-Za-z\d@#$_!%*?&]{5,8}$/;
        if (setuserpasswordRegex.test(setuserpassword.value)) {
            successMsg(setuserpassword);
        } else {
            errorMsg(setuserpassword, "Password must contains atleast 5 characters and maximum 8 \n characters(including: atleast a smallcase, uppercase alphabet,digit,@#$_!%*?&)");
            isValid = false;
        }
    }

    if (isValid) {



        const formData = new FormData(document.getElementById('form4'));


        fetch('../PHP/signup.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.error); // Get error message from PHP response
                    });
                }
                return response.json(); // Parse successful response as JSON
            })
            .then(() => {
                alert("Sign Up Succesfully.");
                document.getElementById('signUp2-popup').style.visibility = "hidden";
                signIn_popup.show();
                signIn_popup.style.visibility = "visible";


            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error .');
            });
    }






});


