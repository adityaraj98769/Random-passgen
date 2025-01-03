// Function to generate a random password
function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const passwordLength = 12; // Set the desired password length
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Adding functionality to the "Generate Password" button
document.querySelector('.sign').addEventListener('click', () => {
    const password = generatePassword();
    const inputField = document.querySelector('.search input');
    inputField.value = password; // Display the password in the input field
});

// Adding functionality to the "Copy" button
document.querySelector('.search button').addEventListener('click', () => {
    const inputField = document.querySelector('.search input');
    inputField.select();
    inputField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy'); // Copy the text to clipboard
    alert('Password copied to clipboard!');
});
