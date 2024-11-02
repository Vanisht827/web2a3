document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();


    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const outputHtml = `
    <h3>Your Submission:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Surname:</strong> ${surname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>`;

    document.getElementById("output").innerHTML = outputHtml;
});
