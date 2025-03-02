// Login Validasi
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const userNotFoundModal = document.getElementById("userNotFoundModal");
const passwordInput = document.getElementById("passwordInput");
const loginErrorMsg = document.getElementById("email-error");
const loginErrorMsg2 = document.getElementById("password-error");
const adminUsername = "admin@gmail.com";
const adminPassword = "123";

// Old Login Validasi
// document.getElementById("loginBtn").onclick = function (event)
// {
//     event.preventDefault();
//     event.stopPropagation();
//     if (usernameInput.value.trim() === "") {
//         loginErrorMsg.style.display = "block"
//         $("#userNotFoundModal").offcanvas("invisble");

//     }
//     if (passwordInput.value.trim() === "") {
//         loginErrorMsg2.style.display = "block"
//     }
//     if (usernameInput.value.trim() !== adminUsername) {
//         $("#userNotFoundModal").offcanvas("show");
//     }
//     if (passwordInput.value.trim() !== adminPassword) {
//         loginErrorMsg2.style.display = "block"
//     }
//     if (usernameInput.value.trim() === adminUsername && passwordInput.value.trim() === adminPassword) {
//         const loadingAccept = document.getElementById("loading-accept");
//         if (loadingAccept) {
//             loadingAccept.style.display = "flex";
//             setTimeout(() =>
//             {
//                 loadingAccept.style.display = "none";

//                 window.location.href = "/public/pages/Homepage.html";
//             }, 2000);
//         }
       
//     }
// };

//New Login Validasi 
document.getElementById("loginBtn").onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        if (username === "") loginErrorMsg.style.display = "block";
        if (password === "") loginErrorMsg2.style.display = "block";
        return;
    }

    let userRole = "";

    if (username === "customer@gmail.com" && password === "123") {
        userRole = "admin";
    } else if (username === "register@gmail.com" && password === "456") {
        userRole = "register";
    } else {
        $("#userNotFoundModal").offcanvas("show");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("role", userRole);

    document.getElementById("loading-accept").style.display = "flex";
    setTimeout(() => {
        document.getElementById("loading-accept").style.display = "none";
        window.location.href = "/public/pages/Homepage.html";
    }, 2000);
};



// Register Step 1 - Phone Number
function formatPhoneNumber(input)
{
    const value = input.value.trim();
    const maxLength = 14;
    const sanitizedValue = value.replace(/\D/g, '');

    if (sanitizedValue.length > maxLength) {
        input.value = sanitizedValue.slice(0, maxLength);
    } else if (sanitizedValue.startsWith("0")) {
        input.value = "62" + sanitizedValue.substring(1);
    }
}

document.getElementById("validatePhoneNumberRegister").onclick = function (event)
{
    event.preventDefault();

    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const phoneNumberError = document.getElementById('phone-number-error');
    const phoneNumberErrorLength = document.getElementById('phone-number-error-maxlength');
    const phoneNumberRegisteredModal = document.getElementById('phoneNumberRegisteredModal');
    const phoneNumberRegister = "628123456789000";
    const maxLengthPhoneNumber = 14;
    const minLengthPhoneNumber = 10;


    phoneNumberError.classList.add('hidden');

    if (phoneNumberInput.value.trim() === "") {
        phoneNumberError.classList.remove('hidden');
    }
    else if (phoneNumberInput.value.trim() === phoneNumberRegister) {
        $("#phoneNumberRegisteredModal").offcanvas("show");
    } 
    else if (phoneNumberInput.value.trim().length >= maxLengthPhoneNumber || phoneNumberInput.value.trim().length <= minLengthPhoneNumber) {
        phoneNumberErrorLength.classList.remove('hidden');
    } 
    else {
        $("#registerStepOneModal").offcanvas("hide");
        $("#registerStepOneOTPModal").offcanvas("show");
    }
};

// Register Step 2 - Email Address
document.getElementById("validateEmailAddressRegister").onclick = function (event)
{
    event.preventDefault();

    const emailAddressInput = document.getElementById('emailAddressInput');
    const emailAddressError = document.getElementById('email-address-error');
    const emailAddressRegister = "melawai@gmail.com";

    emailAddressError.classList.add('hidden');

    if (emailAddressInput.value.trim() === "") {
        emailAddressError.classList.remove('hidden');
    }
    else if (emailAddressInput.value.trim() === emailAddressRegister) {
        $("#emailAddressRegisteredModal").offcanvas("show");
    } else {
        $("#registerStepSecondModal").offcanvas("hide"); 
        $("#registerStepSecondOTPModal").offcanvas("show");
    }
};




// Register Validasi
document.getElementById("btnRegistrasi").onclick = function (event)
{
    event.preventDefault();
    event.stopPropagation();

    const passInputReg = document.getElementById("passInputReg");
    const errorPassReg = document.getElementById("errorPassReg");
    const addressInputReg = document.getElementById("addressInputReg");
    const errorAddressReg = document.getElementById("errorAddressReg");
    const provinceInputReg = document.getElementById("provinceInputReg");
    const errorProvinceReg = document.getElementById("errorProvinceReg");
    const cityInputReg = document.getElementById("cityInputReg");
    const errorCityReg = document.getElementById("errorCityReg");
    const storeInputReg = document.getElementById("storeInputReg");
    const errorStoreReg = document.getElementById("errorStoreReg");
    const titleNameInputReg = document.getElementById("titleNameInputReg");
    const errorTitleNameReg = document.getElementById("errorTitleNameReg");
    const fullNameInputReg = document.getElementById("fullNameInputReg");
    const errorFullNameReg = document.getElementById("errorFullNameReg");
    const genderInputReg = document.getElementById("genderInputReg");
    const errorGenderReg = document.getElementById("errorGenderReg");
    const yearInputReg = document.getElementById("yearInputReg");
    const monthInputReg = document.getElementById("monthInputReg");
    const daynputReg = document.getElementById("daynputReg");


    const toastErrorReg = document.getElementById("toastErrorReg");
    const passRegex = /^(?=[A-Z])(?=\w*\d)(?!.*\s).{6,16}$/;
    toastErrorReg.classList.add("hidden")

    if (!passRegex.test(passInputReg.value.trim())) {
        errorPassReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorPassReg.style.display = "none";
            }, 4000); 
        }, 3000);
    }

    else if (addressInputReg.value.trim() === "") {
        errorAddressReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorAddressReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (provinceInputReg.value === "") {
        errorProvinceReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorProvinceReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (cityInputReg.value === "") {
        errorCityReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorCityReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (storeInputReg.value === "") {
        errorStoreReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorStoreReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (titleNameInputReg.value === "") {
        errorTitleNameReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorTitleNameReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (fullNameInputReg.value === "") {
        errorFullNameReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorFullNameReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (genderInputReg.value === "") {
        errorGenderReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorGenderReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else if (yearInputReg.value === "" || monthInputReg.value === "" || daynputReg.value === "") {
        errorDateBirthReg.style.display = "block";
        toastErrorReg.classList.remove("hidden");

        setTimeout(() =>
        {
            toastErrorReg.classList.add("hidden");
            setTimeout(() =>
            {
                errorDateBirthReg.style.display = "none";
            }, 4000);
        }, 3000);
    }
    else {
        const loadingAccept = document.getElementById("loading-accept");
        if (loadingAccept) {
            loadingAccept.style.display = "flex";
            setTimeout(() =>
            {
                loadingAccept.style.display = "none";

                $("#registerFormModal").offcanvas("hide");
                $("#successRegistrasiModal").offcanvas("show");
            }, 2000);
        }
    }
};




// Validasi OTP
function handleInput(inputField)
{
    if (inputField.value.length > 1) {
        inputField.value = inputField.value[inputField.value.length - 1];
    }
}

const inputElements = Array.from(document.getElementsByClassName('inputOTPReg'));

inputElements.forEach((input, index) =>
{
    input.addEventListener('input', function ()
    {
        handleInput(this);

        if (this.value.length === 1) {
            if (index < inputElements.length - 1) {
                inputElements[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', function (event)
    {
        if (event.key === 'Backspace' && this.value === '' && index > 0) {
            inputElements[index - 1].focus();
        }
    });
});


function getOTPPhoneNumber()
{
    const otpInput1Phone = document.getElementById('otpInput1Phone').value;
    const otpInput2Phone = document.getElementById('otpInput2Phone').value;
    const otpInput3Phone = document.getElementById('otpInput3Phone').value;
    const otpInput4Phone = document.getElementById('otpInput4Phone').value;

    const otpPhone = otpInput1Phone + otpInput2Phone + otpInput3Phone + otpInput4Phone;

    if (otpPhone === '1234') {
        $("#registerStepOneOTPModal").offcanvas("hide");
        $("#registerStepSecondModal").offcanvas("show");
    } else {
        // toastErrorOtpPhone.classList.remove("hidden");
        // setTimeout(() =>
        // {
        //     toastErrorOtpPhone.classList.add("hidden");
        // }, 5000);
        $("#otpErrorModal").offcanvas("show");
    }
}

function getOTPEmail()
{
    const otpInput1Email = document.getElementById('otpInput1Email').value;
    const otpInput2Email = document.getElementById('otpInput2Email').value;
    const otpInput3Email = document.getElementById('otpInput3Email').value;
    const otpInput4Email = document.getElementById('otpInput4Email').value;

    const otpEmail = otpInput1Email + otpInput2Email + otpInput3Email + otpInput4Email;

    if (otpEmail === '1234') {
        $("#registerStepSecondOTPModal").offcanvas("hide");
        $("#registerFormModal").offcanvas("show");
    } else {
        $("#otpErrorModal").offcanvas("show");
        // toastErrorOtp.classList.remove("hidden");
        // setTimeout(() =>
        // {
        //     toastErrorOtp.classList.add("hidden");
        // }, 5000);
    }
}

const tabMenuNotification = document.querySelectorAll('.tab-menu-notification');
tabMenuNotification.forEach(button =>
{
    button.addEventListener('click', (e) =>
    {
        e.preventDefault();
        e.stopPropagation();
    });
});



// Forgot Password
document.addEventListener("DOMContentLoaded", function () {
    const radioEmail = document.getElementById("radioEmail");
    const radioPhone = document.getElementById("radioPhone");
    const radioUsername = document.getElementById("radioUsername");
    const userInput = document.getElementById("userInput");
    const labelInput = document.getElementById("labelInput");
    const inputHint = document.getElementById("inputHint");

    function updateForm(type) {
        if (type === "email") {
            labelInput.innerText = "Email";
            userInput.placeholder = "loremipsum@gmail.com";
            userInput.type = "email";
            inputHint.innerText = "ex : melawai@gmail.com";
        } else if (type === "phone") {
            labelInput.innerText = "Nomor Telepon";
            userInput.placeholder = "08XXXXXXXXXX";
            userInput.type = "tel";
            inputHint.innerText = "ex : 081234567890";
        } else if (type === "username") {
            labelInput.innerText = "Username";
            userInput.placeholder = "Masukkan username Anda";
            userInput.type = "text";
            inputHint.innerText = "ex : johndoe123";
        }
    }

    // Event listener untuk setiap radio button
    radioEmail.addEventListener("change", function () {
        updateForm("email");
    });

    radioPhone.addEventListener("change", function () {
        updateForm("phone");
    });

    radioUsername.addEventListener("change", function () {
        updateForm("username");
    });
});
