function validateForm() {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  var enquiry = document.getElementById("enquiry").value.trim();
  var location = document.getElementById("location").value.trim();

  // Regular expressions for email and mobile number validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var mobileRegex = /^\d{10}$/;

  // Check if all fields are filled
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    mobile === "" ||
    enquiry === "" ||
    location === ""
  ) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Check email format
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check mobile number format
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  // Display confirmation dialog
  var confirmation = confirm(
    "Please confirm the data entered:\n\nFirst Name: " +
      firstName +
      "\nLast Name: " +
      lastName +
      "\nEmail: " +
      email +
      "\nMobile: " +
      mobile +
      "\nEnquiry: " +
      enquiry +
      "\nLocation: " +
      location +
      "\n\nIs this information correct?"
  );

  // If user confirms, thank the visitor
  if (confirmation) {
    alert("Thank you for your submission!");
    return true; // Form submission will proceed
  } else {
    // If user cancels, prevent form submission
    return false;
  }
}
