// Create a book object
class Book {
  constructor(id, name, author) {
      this.id = id;
      this.name = name;
      this.author = author;
  }
}

class BookCollection {
  constructor() {
      this.bookData = [];
      this.bookList = document.getElementById('books-container');
      this.form = document.getElementById('submit-form');
      this.loadBooks();
      this.displayBooks();

      this.form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.addBook();
      });
  }

  loadBooks() {
      const storedBookData = localStorage.getItem('bookData');
      if (storedBookData) {
          this.bookData = JSON.parse(storedBookData).map(
              (book) => new Book(book.id, book.name, book.author)
          );
      }
  }

  displayBooks() {
      this.bookList.innerHTML = '';

      this.bookData.forEach((book) => {
          const bookDiv = document.createElement('div');
          bookDiv.classList.add('book-plate');
          bookDiv.innerHTML = `
        <p>"${book.name}" by ${book.author}</p>
        <button class="delete-btn" onClick= "bookCollection.removeBook('${book.id}')">Remove</button>
      `;
          this.bookList.appendChild(bookDiv);
      });
  }

  addBook() {
      const bookName = document.getElementById('title').value;
      const bookAuthor = document.getElementById('book-author').value;

      const newBook = new Book(this.bookData.length + 1, bookName, bookAuthor);
      this.bookData.push(newBook);

      document.getElementById('title').value = '';
      document.getElementById('book-author').value = '';

      this.displayBooks();
      this.updateLocalStorage();
  }

  // Remove a book
  // eslint-disable-next-line no-unused-vars
  removeBook(id) {
      // Convert the id to a number
      const bookId = Number(id);
      
      // Filter the bookData array
      this.bookData = this.bookData.filter((book) => book.id !== bookId);
      
      // Display the books
      this.displayBooks();
      this.updateLocalStorage();
  }

  // Update the local storage after removing the book
  updateLocalStorage() {
      localStorage.setItem('bookData', JSON.stringify(this.bookData));
  }
}

// Create an instance of the BookCollection class
const bookCollection = new BookCollection();
