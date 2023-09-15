document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById("signUpForm");

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user input
        const username = signUpForm.elements.username.value;
        const email = signUpForm.elements.email.value;
        const password = signUpForm.elements.password.value;

        // Here, you would typically send this data to a server for storage
        // For this example, we'll just simulate success and redirect to login
        alert("Sign-up successful! You can now log in.");
        window.location.href = "login.html";
    });
});
