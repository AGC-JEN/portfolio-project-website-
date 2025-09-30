// Show project alert
function showProject(projectName) {
  alert("You clicked on " + projectName + "! More info coming soon.");
}

// Contact form handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Simple validation
  if(name && email && message) {
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    form.reset();
  } else {
    formMessage.textContent = "Please fill out all fields.";
  }
});
