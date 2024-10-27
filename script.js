function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = document.getElementById("email").value.trim(); // Get email from input
    const password = document.getElementById("password").value.trim(); // Get password from input
    const admin = document.getElementById("admin").checked;
    const student = document.getElementById("student").checked;

    // Check for student login
    if (student) {
        window.location.href = "index.html"; 
    } 
    // Check for admin login
    else if (admin) {
        if (email === "mc23bt002@iitdh.ac.in" && password === "Admin@123") {
            window.location.href = "4.html"; // Redirect to admin panel
        } else {
            alert("Invalid admin credentials. Only the specified admin can log in.");
        }
    } 
    else {
        console.log("No valid option selected.");
    }
}
