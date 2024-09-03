document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a simple alert for demo purposes
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Here you can add code to send the form data to a server using fetch or XMLHttpRequest

  // Clear form fields
  document.getElementById('contactForm').reset();
});

function switchLanguage(lang) {
  if (lang == 'fr') {
    window.location.href = 'index.html';
  } else if (lang == 'en') {
    window.location.href = 'index_en.html';
  }
}
