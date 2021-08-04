const INCOMPLETE_BOOK = document.getElementById('incompleteBookshelfList');
const UNCOMPLETE_BOOK = document.getElementById('completeBookshelfList');


function createBook(bookId, bookTitle, bookAuthor, bookYear, bookIsComplete, bookStorage){
    const eContainer = document.createElement("article");
    eContainer.classList.add("book_item") 
    eContainer.setAttribute("id", bookId);

    const eTitle = document.createElement("h3");
    eTitle.innerHTML = '<span class="fa fa-book"></span> <i>'+ bookTitle +'</i>';

    const eAuthor = document.createElement("p");
    eAuthor.innerHTML = '<span class="fa fa-user"></span> Penulis : '+ bookAuthor;

    const eYear = document.createElement("p");
    eYear.innerHTML = '<span class="fa fa-calendar-o"></span> Tahun : ' + bookYear;
    
    const button = createButton(bookIsComplete, bookId, bookTitle);
    eContainer.append(eTitle, eAuthor, eYear, button);
    if(bookStorage){
        const bookObject = composeBookObject(bookId, bookTitle, bookAuthor, bookYear, bookIsComplete);
        books.push(bookObject);
        addDataToStorage();
    }

    if (bookIsComplete) {
        UNCOMPLETE_BOOK.append(eContainer);
    } else {
        INCOMPLETE_BOOK.append(eContainer);
    }
    return eContainer;
}


function createButton(bookIsComplete, bookId, bookTitle){
    const btnAction = document.createElement("div");
    btnAction.classList.add("action");
    
    const btnRead = document.createElement("button");
    btnRead.classList.add("green");
    if(bookIsComplete){
        btnRead.innerHTML = '<span class="fa fa-repeat"></span> Belum selesai dibaca';
        btnRead.addEventListener("click", function () {
            let confirmBelumBaca = confirm("Apakah anda yakin memindahkan buku '"+ bookTitle +"' ke rak belum selesai dibaca?");
            if (confirmBelumBaca) {
                moveBook(bookId, false);
            }
        });
    }else{
        btnRead.innerHTML = '<span class="fa fa-check"></span> Selesai dibaca';
        btnRead.addEventListener("click", function () {
            let confirmSudahBaca = confirm("Apakah anda yakin memindahkan buku '"+ bookTitle +"' ke rak selesai dibaca?");
            if (confirmSudahBaca) {
                moveBook(bookId, true);
            }
        });
    }

    const btnTrash = document.createElement("button");
    btnTrash.classList.add("red");
    btnTrash.innerHTML = '<span class="fa fa-trash"></span> Hapus';
    btnTrash.addEventListener("click", function () {
        let confirmHapus = confirm("Apakah anda yakin ingin menghapus buku '"+ bookTitle +"' ?");
        if (confirmHapus) {
            const idBook = document.getElementById(bookId);
            idBook.addEventListener("eventDelete", function (event) {
                event.target.remove();
            });
            idBook.dispatchEvent(new Event("eventDelete"));
            deleteBook(bookId);
            addDataToStorage();
        }
    });

    btnAction.append(btnRead, btnTrash);
    return btnAction;
}

function moveBook(bookId, bool){
    const cardParent = document.getElementById(bookId);
        
    const bookTitle  = cardParent.querySelector(".book_item > h3").innerText;
    let   bookAuthor = cardParent.querySelectorAll(".book_item > p")[0].innerText;
          bookAuthor = bookAuthor.split(" : ");
    let   bookYear   = cardParent.querySelectorAll(".book_item > p")[1].innerText;
          bookYear   = bookYear.split(" : ");
    
    cardParent.remove();
    deleteBook(bookId);
    createBook(bookId, bookTitle, bookAuthor[1], bookYear[1], bool, true);
}

function searchBooks(bookTitle) {
    const filter = bookTitle.toUpperCase();
    const judulBuku = document.getElementsByTagName("h3");
    for (let i = 0; i < judulBuku.length; i++) {
        const judul = judulBuku[i].textContent || judulBuku[i].innerText;

        if (judul.toUpperCase().indexOf(filter) > -1) {
            judulBuku[i].closest(".book_item").style.display = "";
        } else {
            judulBuku[i].closest(".book_item").style.display = "none";
            flag = true;
        }
    }
}