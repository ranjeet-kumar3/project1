document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementsByClassName('fas');
    const navbar = document.getElementById('navbar');
    const closeIcon = document.getElementById('closeIcon');

    // Open the navbar when the nav icon is clicked
    navIcon.addEventListener('click', function() {
        navbar.style.display = 'block';
    });

    // Close the navbar when the close icon is clicked
    closeIcon.addEventListener('click', function() {
        navbar.style.display = 'none';
    });
});