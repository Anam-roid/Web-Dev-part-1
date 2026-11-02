document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle (if adding a hamburger button later)
  const nav = document.querySelector('nav');
  
  // Example Form Validation / Alert for Enquiry Form
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your enquiry! We will get back to you shortly.');
      enquiryForm.reset();
    });
  }

  // Example Contact Form Alert
  const contactForm = document.getElementById('contact-form-el');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    });
  }
});