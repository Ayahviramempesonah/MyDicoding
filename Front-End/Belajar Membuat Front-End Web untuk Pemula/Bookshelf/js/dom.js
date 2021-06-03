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

    textContainer.append(createCheckButton());

    
    // if(isCompleted){
    //     container.append(
    //         createUndoButton(),
    //         createTrashButton()
    //     );
    // } else {
    //     container.append(
    //         createCheckButton()
    //     );
    // }
    //console.log(Bookid);
    return textContainer;
}

function addBook() {
    const Tgl = Date.now();
    const BookTitle = document.getElementById("inputBookTitle").value;
    const BookAuthor = document.getElementById("inputBookAuthor").value;
    const BookYear = document.getElementById("inputBookYear").value;
    const completedTODOList = document.getElementById(COMPLETED_BOOK);
    
    const book = makeBook(Tgl,BookTitle,BookAuthor,BookYear);
    
    completedTODOList.append(book);
    
}

function createButton(buttonTypeClass /* string */, eventListener /* callback function */) {
    const container = document.createElement("div");
    container.classList.add("action")
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.innerText ="Selesai Dibaca"
    
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    container.append(button)
    return container;
}

function createCheckButton() {
    return createButton("green", function(event){
        //addTaskToCompleted(event.target.parentElement);
    });
}
