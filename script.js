emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      document.getElementById('formStatus').textContent = 'Message sent successfully!';
    }, (error) => {
      document.getElementById('formStatus').textContent = 'Failed to send message.';
      console.error(error);
    });
});
