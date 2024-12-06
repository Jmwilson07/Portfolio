document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('clicked', 'active'));
            this.classList.add('clicked', 'active');
        });
    });
});


// Initialize EmailJS with your user ID
emailjs.init('pvuLhbBzi5kyyLJSt'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

// Form submission event listener
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Send email using EmailJS
    emailjs.sendForm('service_n15w40c', 'template_euliiaq', this)
        .then(function (response) {
            alert('Email sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('Failed to send email. Please try again.');
            console.log('FAILED...', error);
        });
});
