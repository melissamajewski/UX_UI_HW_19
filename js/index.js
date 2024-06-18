console.log("Your index.js file is loaded correctly!")

document.addEventListener('DOMContentLoaded', function() {
  // Function to handle smooth scrolling
  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }



