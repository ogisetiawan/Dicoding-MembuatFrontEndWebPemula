document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");
  const searchBook = document.getElementById("searchBook");
  const inputBookIsComplete = document.getElementById("inputBookIsComplete");
  const labelList = document.getElementById("labelList");

  submitBook.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookId = +new Date();
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const bookIsComplete = document.getElementById(
      "inputBookIsComplete"
    ).checked;

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

  inputBookIsComplete.addEventListener("change", function (event) {
    event.preventDefault();
    if (this.checked) {
      labelList.innerText = "[Selesai dibaca] ";
    } else {
      labelList.innerText = "[Belum dibaca] ";
    }
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
