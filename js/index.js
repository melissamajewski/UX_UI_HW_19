console.log("Your index.js file is loaded correctly!")

document.getElementById('scrollToSection').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Get the target ID without the '#'
    smoothScroll(targetId); // Call smoothScroll function with target ID
  });






