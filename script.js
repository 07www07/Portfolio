// Select the toggle button, menu, and close button
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');
const navbarMenu = document.getElementById('navbarMenu');

// Show menu when toggle button is clicked
toggleButton.addEventListener('click', () => {
  navbarMenu.classList.add('show');
});

// Hide menu when close button is clicked
closeButton.addEventListener('click', () => {
  navbarMenu.classList.remove('show');
});


