function validateForm() {
    // Reset error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("contactNumberError").innerText = "";

    // Perform simple validation
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const contactNumberRegex = /^[0-9]+$/;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const contactNumber = document.getElementById("contactNumber").value;

    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("emailError").innerText = "Enter a valid email address";
    }

    if (!passwordRegex.test(password)) {
        isValid = false;
        document.getElementById("passwordError").innerText = "Password should be at least 8 characters long and contain at least one letter and one number";
    }

    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    }

    if (!contactNumberRegex.test(contactNumber)) {
        isValid = false;
        document.getElementById("contactNumberError").innerText = "Enter a valid contact number";
    }

    if (isValid) {
        // If the form is valid, you can proceed with further actions (e.g., submit the form or send data to the server).
        alert("Form validated successfully! Proceed to signup.");
    }
}
