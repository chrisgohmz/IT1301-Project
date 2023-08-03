document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Here, you can implement the code to submit the form data to the server
    // For demonstration purposes, we'll simply display the confirmation message
 
    // Hide the form
    document.getElementById("signup-form").style.display = "none";
  
    // Display the confirmation message
    document.getElementById("confirmation-message").style.display = "block";
  }); 