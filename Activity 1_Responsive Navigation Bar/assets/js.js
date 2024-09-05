// JavaScript to handle dropdown behavior on mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    });
});

// CSS class to show the dropdown menu
document.styleSheets[0].insertRule('.dropdown-menu.show { display: block !important; }', 0);