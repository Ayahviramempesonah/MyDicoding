const STORAGE_KEY = "BOOK_APPS";

/**
 * [
 *    {
 *      id: <int>
 *      task: <string>
 *      timestamp: <string>
 *      isCompleted: <boolean>
 *    }
 * ]
 */

let books = [];

/**
  * Fungsi ini digunakan untuk memeriksa apakah localStorage didukung oleh browser atau tidak
  * 
  * @returns boolean 
  */
 function isStorageExist() /* boolean */ {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    } 
    return true;
}

/**
 * Fungsi ini digunakan untuk menyimpan data ke localStorage
 * berdasarkan KEY yang sudah ditetapkan sebelumnya.
 */
function saveData() {
    const parsed /* string */ = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}


function loadDataFromStorage() {
    const serializedData /* string */ = localStorage.getItem(STORAGE_KEY);
    
    let data = JSON.parse(serializedData);
    
    if(data !== null)
        books = data;

    document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
    if(isStorageExist())
        saveData();
}

function composeBookObject(Tgl,BookTitle,BookAuthor,BookYear,isComplete) {
    return {
        id: Tgl,
        BookTitle,
        BookAuthor,
        BookYear,
        isComplete
    };
}

function findBook(bookId) {

    for(book of books){
        if(book.id === bookId)
            return book;
    }

    return null;
}

function findBookIndex(bookId) {
    
    let index = 0
    for (book of books) {
        if(book.id === bookId)
            return index;

        index++;
    }

    return -1;
}
