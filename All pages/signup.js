document.getElementById("signup-form").addEventListener("submit", function(event) {
   event.preventDefault();

   const formData = new FormData(event.target);
   const name = formData.get("fullname");
   const email = formData.get("email");

   const responseMessage = `
     <h2>Thank You!</h2>
     <p>Hello, ${name}!</p>
     <p>We have received your submission with the email address: ${email}.</p>
   `;

   document.getElementById("response").innerHTML = responseMessage;
});