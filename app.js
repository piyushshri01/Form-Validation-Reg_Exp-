// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur' , validateName);
document.getElementById('zip').addEventListener('blur' , validateZip);
document.getElementById('email').addEventListener('blur' , validateEmail);
document.getElementById('phone').addEventListener('blur' , validatePhone);


// Function
function validateName() {
    const name = document.getElementById('name');
    const nameErr = document.getElementById('name-err');
    const re = /^[a-z A-Z]{2,10}$/;

    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
        nameErr.style.display = 'block';
    } else {
        name.classList.remove('is-invalid');
        nameErr.style.display = 'none';
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const zipErr = document.getElementById('zip-err');
    const re = /^[0-9]{4,6}$/;

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        zipErr.style.display = 'block';
    } else {
        zip.classList.remove('is-invalid');
        zipErr.style.display = 'none';
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const emailErr = document.getElementById('email-err');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    // console.log(re.test(email.value));
    

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
        emailErr.style.display = 'block';
    } else {
        email.classList.remove('is-invalid');
        emailErr.style.display = 'none';
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const phoneErr = document.getElementById('phone-err');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        phoneErr.style.display = 'block';
    } else {
        phone.classList.remove('is-invalid');
        phoneErr.style.display = 'none';
    }
}













