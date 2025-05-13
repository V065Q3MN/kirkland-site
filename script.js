document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navMenu').classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const property = document.getElementById('property').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (name && email && property && message) {
    status.textContent = "Thank you! We'll be in touch shortly.";
    this.reset();
  } else {
    status.textContent = "Please fill in all fields.";
  }
});
