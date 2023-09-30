// Get a reference to the list containing the menu items
const menuList = document.querySelector('.menu');

// Get references to the articles you want to show/hide
const dimArticle = document.querySelector('#dim');
const agendaArticle = document.querySelector('#agenda');
const merchandiseArticle = document.querySelector('#merchan');
const contact = document.querySelector('#contact');
// Add a click event listener to the menu list
menuList.addEventListener('click', function (event) {
  // Check if a list item was clicked
  if (event.target.tagName === 'A') {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the text content of the clicked list item
    const clickedText = event.target.textContent;

    // Hide all articles
    dimArticle.classList.add('unactive');
    agendaArticle.classList.add('unactive');
    merchandiseArticle.classList.add('unactive');
    contact.classList.add('unactive');
    // Show the corresponding article based on the clicked text
    if (clickedText === 'D.I.M.') {
      dimArticle.classList.remove('unactive');
    } else if (clickedText === 'Agenda') {
      agendaArticle.classList.remove('unactive');
    } else if (clickedText === 'Merchandise') {
      merchandiseArticle.classList.remove('unactive');
    }
    else if (clickedText === 'Contact') {
      contact.classList.remove('unactive');
    }
  }
});