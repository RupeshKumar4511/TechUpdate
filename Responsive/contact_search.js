// This is for contact us

document.querySelector("#form").addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    if (fullname.value.trim().length === 0) {
        errorMsg(fullname, "Name cannot be blank");
        isValid = false;
    }
    else {
        const nameRegex = /^[a-zA-Z]{3,14}(?:[\s_]{0,2})$/;
        if (nameRegex.test(fullname.value)) {
            successMsg(fullname);
        }
        else {
            errorMsg(fullname, "Name must contains atleast 3 characters and maximum 16 \n characters(including: alphabets,space and underscore)");
            isValid = false;

        }
    }

    if (email.value.trim().length === 0) {

        errorMsg(email, "Email ID cannot be blank");
        isValid = false;
    }
    else {
        const emailRegex = /^[a-zA-Z0-9]+(?:[.+%_][a-zA-Z0-9]+)*@[A-Za-z]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email.value)) {
            successMsg(email);
        } else {
            errorMsg(email, "This is not a valid email id");
            isValid = false;
        }
    }

    if (phoneNo.value.trim().length === 0) {

        errorMsg(phoneNo, "Phone No cannot be blank");
        isValid = false;
    }
    else {
        const phoneNoRegex = /^[0-9]{10}$/;
        if (phoneNoRegex.test(phoneNo.value)) {
            successMsg(phoneNo);
        } else {
            errorMsg(phoneNo, "This is not a valid Phone No");
            isValid = false;
        }

    }


    if (isValid) {



        const formData = new FormData(document.getElementById('form'));


        fetch('../PHP/contact.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(() => {
                alert("form data submitted Succesfully.");
                document.getElementById('form').reset();

            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending the email.');
            });
    }




});



// for search button 

const searchbtn = document.getElementById('search-btn');
const searchBar = document.querySelector(".search");


function findElementsByText(text) {
    let elements = document.querySelectorAll('*');
    return Array.from(elements).filter(el => el.textContent.includes(text));
}

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let elements = findElementsByText(searchBar.value);
    if (elements.length > 0) {
        elements.forEach(element => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    } else {
        alert('Word not found!');
    }
});

