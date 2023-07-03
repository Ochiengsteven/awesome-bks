const bookData = [];

const form = document.getElementById('submit-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the values from the input fields
  const bookName = document.getElementById('title').value;
  const bookAuthor = document.getElementById('book-author').value;

  // Create a book object
  const book = {
    name: bookName,
    author: bookAuthor,
  };

  // Add book object to the array
  bookData.push(book);

  // Clear the input fields
  document.getElementById('title').value = '';
  document.getElementById('book-author').value = '';
});