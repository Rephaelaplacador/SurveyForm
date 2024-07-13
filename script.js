function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    const terms = document.querySelector('input[name="terms"]:checked');

    let valid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(elem => elem.textContent = '');

    if (name === '') {
        document.getElementById('nameError').textContent = 'Please enter your name';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Please enter your email';
        valid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        valid = false;
    }

    if (age === '') {
        document.getElementById('ageError').textContent = 'Please enter your age';
        valid = false;
    } else if (age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Please enter a valid age between 18 and 100';
        valid = false;
    }

    if (gender === '') {
        document.getElementById('genderError').textContent = 'Please select your gender';
        valid = false;
    }

    if (feedback === '') {
        document.getElementById('feedbackError').textContent = 'Please provide your feedback';
        valid = false;
    }

    if (!terms) {
        document.getElementById('termsError').textContent = 'Please agree to the terms';
        valid = false;
    }

    return valid;
}

function isValidEmail(email) {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
