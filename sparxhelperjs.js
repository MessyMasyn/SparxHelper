const buttons = document.querySelectorAll('.ro');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Handle button click
    console.log('Button clicked: ' + button.id);
    // You can perform any action here when the button is clicked
  });
});