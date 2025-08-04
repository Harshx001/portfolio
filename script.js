var typed = new Typed("#typed-text", {
  strings: [
    "Back-end Developer.",
    "Software Developer.",
    "Full Stack Developer.",
    "Tech Enthusiast"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-cta-text", {
    strings: [
      "<span class='highlight-gradient'>Have a project</span> <span class='white-text'>in mind?</span><br><span class='blue-text'>Let's build</span> <span class='highlight-gradient'>something together!</span>"
    ],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000, // 2 second pause before erasing
    loop: true,
    showCursor: false
  });
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const res = await fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  });

  const result = await res.json();
  if (result.success) {
    alert('Message sent!');
    form.reset();
  } else {
    alert('Failed to send message.');
  }
});
