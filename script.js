// JavaScript file (not required for layout, included as requested)

const enrollButtons = document.querySelectorAll('.card button');

enrollButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You have enrolled successfully!');
  });
});
