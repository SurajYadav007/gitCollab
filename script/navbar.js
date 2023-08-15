// Assuming this is your navbar.js file

// Function to handle submenu display
function toggleSubMenu(event) {
    event.preventDefault();
    const subMenu = event.target.nextElementSibling;
    subMenu.classList.toggle("active");
 }
 
 // Function to handle profile dropdown display
 function toggleProfileDropdown(event) {
    event.preventDefault();
    const profileDropdown = document.getElementById("signin");
    profileDropdown.classList.toggle("active");
 }
 
 // Event listeners for submenu and profile dropdown
 const menLink = document.querySelector("#men a");
 menLink.addEventListener("click", toggleSubMenu);
 
 const womenLink = document.querySelector("#women a");
 womenLink.addEventListener("click", toggleSubMenu);
 
 const kidsLink = document.querySelector("#kids a");
 kidsLink.addEventListener("click", toggleSubMenu);
 
 const homeLivingLink = document.querySelector("#homeLiving a");
 homeLivingLink.addEventListener("click", toggleSubMenu);
 
 const beautyLink = document.querySelector("#beauty a");
 beautyLink.addEventListener("click", toggleSubMenu);
 
 const studioLink = document.querySelector("#studio a");
 studioLink.addEventListener("click", toggleSubMenu);
 
 const profileIcon = document.querySelector(".rightSideIcons.profile img");
 profileIcon.addEventListener("click", toggleProfileDropdown);
 
 // Additional event listeners for other icons can be added similarly
 