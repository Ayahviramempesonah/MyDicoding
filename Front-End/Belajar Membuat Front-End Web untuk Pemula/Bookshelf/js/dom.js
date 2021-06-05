const UNCOMPLETED_BOOK = "incompleteBookshelfList";
const COMPLETED_BOOK = "completeBookshelfList";

function makeBook(id,BookTitle,BookAuthor,BookYear,BookIsComplete) {

    const Bookid = id;

    const Title = document.createElement("h3");
    Title.innerText = BookTitle;

    const Author = document.createElement("p");
    Author.innerText = "Penulis: " + BookAuthor;

    const Year = document.createElement("p");
    Year.innerText = "Tahun: " + BookYear;

    const textContainer = document.createElement("article");
    textContainer.classList.add("book_item")
    textContainer.append(Title, Author,Year);


    const container1 = document.createElement("div");
    container1.classList.add("action")
    if(BookIsComplete){
        container1.append(createGreen2Button(),createRedButton());
    }else{
        container1.append(createGreenButton(),createRedButton());
    }

    textContainer.append(container1);

    return textContainer;
}

function moveBook(id,BookTitle,BookAuthor,BookYear,BookIsComplete) {

    const Bookid = id;

    const Title = document.createElement("h3");
    Title.innerText = BookTitle;

    const Author = document.createElement("p");
    Author.innerText = BookAuthor;

    const Year = document.createElement("p");
    Year.innerText = BookYear;

    const textContainer = document.createElement("article");
    textContainer.classList.add("book_item")
    textContainer.append(Title, Author,Year);


    const container1 = document.createElement("div");
    container1.classList.add("action")
    if(BookIsComplete){
        container1.append(createGreen2Button(),createRedButton());
    }else{
        container1.append(createGreenButton(),createRedButton());
    }

    textContainer.append(container1);

    return textContainer;
}

function addBook() {
    const Tgl = Date.now();
    const BookTitle = document.getElementById("inputBookTitle").value;
    const BookAuthor = document.getElementById("inputBookAuthor").value;
    const BookYear = document.getElementById("inputBookYear").value;
    const completedBook = document.getElementById(COMPLETED_BOOK);
    const uncompletedBook = document.getElementById(UNCOMPLETED_BOOK);

    let isComplete;
    if (document.getElementById('inputBookIsComplete').checked) {
        isComplete  = true;
        
    }else{
        isComplete  = false;
    }

    const book = makeBook(Tgl,BookTitle,BookAuthor,BookYear,isComplete);
    if(isComplete){
        completedBook.append(book);
    }else{
        uncompletedBook.append(book);
    }

}

function createButton(buttonTypeClass /* string */,text, eventListener /* callback function */) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.innerText = text
    
    button.addEventListener("click", function (event) {
        eventListener(event);
    });

    return button;
}

function createGreenButton() {
    return createButton("green","Selesai Dibaca" ,function(event){
        addBookToRead(event.target.closest(".book_item"));
    });
}

function createRedButton() {
    return createButton("red","Hapus Buku",function(event){
        removeBook(event.target.closest(".book_item"));
    });
}
function createGreen2Button() {
    return createButton("green","Belum Selesai Dibaca" ,function(event){
        addBookToUnread(event.target.closest(".book_item"));
    });
}

function removeBook(taskElement /* HTMLELement */) {
    taskElement.remove();
}

function addBookToRead(taskElement /* HTMLELement */) {
    const Tgl = new Date();
    const listCompleted = document.getElementById(COMPLETED_BOOK);
    const BookTitle = taskElement.querySelector("h3").innerText;
    const BookAuthor = taskElement.getElementsByTagName("p")[0].innerText;
    const BookYear = taskElement.getElementsByTagName("p")[1].innerText;
    const isComplete = true;

    const book = moveBook(Tgl,BookTitle,BookAuthor,BookYear,isComplete);

    listCompleted.append(book);
    taskElement.remove();
}

function addBookToUnread(taskElement /* HTMLELement */) {
    const Tgl = new Date();
    const listUncompleted = document.getElementById(UNCOMPLETED_BOOK);
    const BookTitle = taskElement.querySelector("h3").innerText;
    const BookAuthor = taskElement.getElementsByTagName("p")[0].innerText;
    const BookYear = taskElement.getElementsByTagName("p")[1].innerText;
    const isComplete = false;

    const book = moveBook(Tgl,BookTitle,BookAuthor,BookYear,isComplete);

    listUncompleted.append(book);
    taskElement.remove();
}


