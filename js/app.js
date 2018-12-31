// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks () {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '2343234'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '5443234'
            }
        ];

        const books = StoredBooks;

        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <a href="#" class="text-danger">
                    <i class="delete fas fa-trash-alt"></i>
                </a></td>
        `;
        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.parentElement.remove();
        }
    }

    // Clear Fields
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields!');
    } else {
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Add Book To UI
        UI.addBookToList(book);

        // Clear Fields
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', e => {
    UI.deleteBook(e.target);
});