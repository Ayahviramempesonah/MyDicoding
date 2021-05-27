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

    const container = document.createElement("div");
    container.classList.add("book_list")
    container.append(textContainer);
    
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

    return container;
}

function addBook() {
    const Tgl = Date.now();
    const BookTitle = document.getElementById("inputBookTitle").value;
    const BookAuthor = document.getElementById("inputBookAuthor").value;
    const BookYear = document.getElementById("inputBookYear").value;
    const completedTODOList = document.getElementById(COMPLETED_BOOK);
    
    const book = makeBook(Tgl,BookTitle,BookAuthor,BookYear);
    
    completedTODOList.append(book);

    console.log(book);
}