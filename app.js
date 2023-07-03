let bookData = [];

const form = document.getElementById('submit-form');

// Display the books
const displayBooks = () => {
  const bookList = document.getElementById('books-container');
  bookList.innerHTML = ''; // Clear the book list container

  // Loop through the bookData array and display the books
  bookData.forEach((book) => {
    bookList.innerHTML += `
      <div class="book-plate">
        <p>${book.name}</p>
        <p>${book.author}</p>
        <button class="delete-btn" onClick= "removeBook('${book.id}')">Remove</button>
      </div>`;
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the values from the input fields
  const bookName = document.getElementById('title').value;
  const bookAuthor = document.getElementById('book-author').value;

  // Create a book object
  const book = {
    id: bookData.length + 1,
    name: bookName,
    author: bookAuthor,
  };

  // Add book object to the array
  bookData.push(book);

  // Clear the input fields
  document.getElementById('title').value = '';
  document.getElementById('book-author').value = '';

  // Display the books
  displayBooks();
  console.log('Form submitted!');
  console.log(bookData);
});

// Remove a book
// eslint-disable-next-line no-unused-vars
const removeBook = (id) => {
  // Convert the id to a number
  const bookId = Number(id);

  // Filter the bookData array
  bookData = bookData.filter((book) => book.id !== bookId);

  // Display the books
  displayBooks();
};
