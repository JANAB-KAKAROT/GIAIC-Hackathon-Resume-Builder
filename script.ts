//Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElment = document.getElementById('resume-display') as HTMLDivElement;

//Handle Form Submission
form.addEventListener('submit' ,(event: Event)=> {
    event.preventDefault(); //prevent page reload

    // Collect inpt values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const number = (document.getElementById('number') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate the Resume and Content Dynamically
    const resumeHTML = `

    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>

    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${number}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Display the Generated Resume
    if(resumeDisplayElment){
        resumeDisplayElment.innerHTML = resumeHTML;
    } else {
        console.error ('The resume display element is Missing.');
    }
})