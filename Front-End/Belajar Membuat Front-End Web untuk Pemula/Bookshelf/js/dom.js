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
    
    container1.append(createGreenButton(),createRedButton());

    textContainer.append(container1);

    
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
        //addTaskToCompleted(event.target.parentElement);
    });
}

function createRedButton() {
    return createButton("red","Hapus Buku",function(event){
        //addTaskToCompleted(event.target.parentElement);
    });
}
