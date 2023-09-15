document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the email and password from the form
        const email = document.getElementById("user").value;
        const password = document.getElementById("pass").value;

        if (email.trim() === "") {
            alert("Please enter an email address.");
            return;
        }

        if (password.trim() === "") {
            alert("Please enter a password.");
            return;
        }

        // Simulate a successful login for demonstration purposes
        // In your actual code, replace this with your authentication logic
        const isAuthenticated = true; // Change to false for testing failed login

        if (isAuthenticated) {
            // Authentication successful, redirect to the welcome page
            window.location.href = `welcome.html?email=${encodeURIComponent(email)}`;
        } else {
            // Authentication failed, show an error message
            alert("Invalid email or password. Please try again.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the email and password from the form
        const email = document.getElementById("user").value;
        const password = document.getElementById("pass").value;

        if (email.trim() === "") {
            alert("Please enter an email address.");
            return;
        }

        if (password.trim() === "") {
            alert("Please enter a password.");
            return;
        }

        // Simulate a successful login for demonstration purposes
        // In your actual code, replace this with your authentication logic
        const isAuthenticated = true; // Change to false for testing failed login

        if (isAuthenticated) {
            // Authentication successful, show the pop-up
            const popup = document.getElementById("popup");
            const closePopup = document.getElementById("closePopup");

            popup.style.display = "block";

            // Close the pop-up when the close button is clicked
            closePopup.addEventListener("click", function() {
                popup.style.display = "none";
            });

            // You can also close the pop-up after a certain time
            setTimeout(function() {
                popup.style.display = "none";
            }, 5000); // Close the pop-up after 5 seconds
        } else {
            // Authentication failed, show an error message
            alert("Invalid email or password. Please try again.");
        }
    });
});
