const BOOKS_KEY = "BOOKSHELF_APPS_OGI"; //? initiali key storage
let books = [];

function isStorageSupported() {
  if (typeof Storage === "undefined") {
    alert("browser anda tidak mendukung web storage!");
    return false;
  } else {
    return true;
  }
}

function composeBookObject(bookId, bookTitle, bookAuthor, bookYear, bookIsComplete) {
    return {
        bookId, bookTitle, bookAuthor, bookYear, bookIsComplete
    };
 }

function addDataToStorage() {
  if (isStorageSupported()) {
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
    document.dispatchEvent(new Event("ondatasaved"));
  }
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(BOOKS_KEY);
    let data = JSON.parse(serializedData);
    if(data !== null)
        books = data;
    
    document.dispatchEvent(new Event("ondataloaded"));
}

function renderFromBooks() {
    for (book of books) {
        createBook(book.bookId, book.bookTitle, book.bookAuthor, book.bookYear, book.bookIsComplete, false);
    }
}

function deleteBook(bookId) {
    for (let arrayPosition = 0; arrayPosition < books.length; arrayPosition++) {
        if (books[arrayPosition].bookId == bookId) {
            books.splice(arrayPosition, 1);
            break;
        }
    }
}