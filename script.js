//Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElment = document.getElementById('resume-display');
//Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // Collect inpt values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the Resume and Content Dynamically
    var resumeHTML = "\n\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(number, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display the Generated Resume
    if (resumeDisplayElment) {
        resumeDisplayElment.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is Missing.');
    }
});
