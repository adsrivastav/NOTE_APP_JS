document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user input
        const username = signInForm.elements.username.value;
        const password = signInForm.elements.password.value;

        // Here, you would typically validate credentials against a database
        // For this example, we'll use a hardcoded check (not secure)
        if (username === "user123" && password === "password123") {
            // Successful login
            window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
        } else {
            // Invalid login
            alert("Invalid username or password. Please try again.");
        }
    });
});
