// Get the buttons
const nextButton = document.querySelector('.card.active .submit-section .submit-btn');
const backButton = document.querySelector('.card:not(.active) .submit-section .submit-btn');

// Get the cards
const step1Card = document.querySelector('.card.w-50.active');
const step2Card = document.querySelector('.card.w-50:not(.active)');

// Add click event listeners to the buttons
nextButton.addEventListener('click', function (e) {
    e.preventDefault();
    step1Card.classList.remove('active');
    step2Card.classList.add('active');
});

backButton.addEventListener('click', function (e) {
    e.preventDefault();
    step2Card.classList.remove('active');
    step1Card.classList.add('active');
});
