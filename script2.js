window.userLogin = function (event) {
    event.preventDefault(); // Prevent form submission
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
};
document.getElementById('signup-email').addEventListener('input', function() {
    validateField(this, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email-error');
});

document.getElementById('signup-password').addEventListener('input', function() {
    validateField(this, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password-error');
});

function validateField(field, regex, errorId) {
    const errorElement = document.getElementById(errorId);
    if (!regex.test(field.value)) {
        field.style.borderColor = 'red';
        errorElement.style.display = 'block';
    } else {
        field.style.borderColor = 'green';
        errorElement.style.display = 'none';
    }
}