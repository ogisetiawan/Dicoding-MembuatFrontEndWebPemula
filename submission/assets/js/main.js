document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");
  const searchBook = document.getElementById("searchBook");

  submitBook.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookId = +new Date();
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const bookIsComplete = document.getElementById("inputBookIsComplete").checked;

    createBook(bookId, bookTitle, bookAuthor, bookYear, bookIsComplete, true);

    document.getElementById("inputBookTitle").value = "";
    document.getElementById("inputBookAuthor").value = "";
    document.getElementById("inputBookYear").value = "";
    document.getElementById("inputBookIsComplete").checked = false;
  });

  searchBook.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchBookTitle = document.getElementById("searchBookTitle").value;
    searchBooks(searchBookTitle);
  });

  if (isStorageSupported()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondataloaded", function () {
    renderFromBooks();
    console.log(books);
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
});
