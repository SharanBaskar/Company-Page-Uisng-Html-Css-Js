// Predefined usernames and passwords
const predefinedCredentials = [
    { username: "sharan", password: "sharanb@21" },
    { username: "gowtham", password: "gowtham@8" },
    { username: "kasi", password: "kasi@15" }
];

// Function to handle form submission
function submitForm() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('Password').value;
    
    // Validate input (you can add more validation rules)
    if (name === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    // Check if the entered credentials match any predefined data
    const matchedCredential = predefinedCredentials.find(cred => cred.username === name && cred.password === password);
    if (matchedCredential) {
        // Redirect to the admin page (replace with your actual admin page URL)
        window.location.href = "admin.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.getElementById('submitButton').addEventListener('click', submitForm);
document.getElementById('username').textContent = username;

// JavaScript for handling section visibility
function showSection(sectionId) {
    // Hide all sections
    
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
