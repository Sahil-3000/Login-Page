// JavaScript to add form validation and interactive functionality
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password === '') {
        alert('Please enter your password.');
        return;
    }

    // If everything is valid, simulate successful login
    alert('Login successful!');
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Password show/hide functionality
const togglePasswordIcon = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordIcon.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the icon class between eye and eye-slash
    togglePasswordIcon.classList.toggle('fa-eye');
    togglePasswordIcon.classList.toggle('fa-eye-slash');
});
