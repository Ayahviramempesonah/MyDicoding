
//inisialiasi variabel untuk menampung elemen dokumen
const localTotalVictoryField = document.getElementById("local-total-victory-field");
const localMaximumAttempField = document.getElementById("local-maximum-attemp-field");
const destroyDataButton = document.getElementById("destroy-data-button");
const playButton = document.getElementById("play-button");
const beforeGameDisplay = document.getElementById("before-game-display");
const duringGameDisplay = document.getElementById("during-game-display");
const afterGameDisplay = document.getElementById("after-game-display");
const answerButton1 = document.getElementById("answer-1-button");
const answerButton2 = document.getElementById("answer-2-button");
const answerButton3 = document.getElementById("answer-3-button");
const sessionUserAnswerField = document.getElementById("session-user-answer-field");
const sessionUserWrongAnswerField = document.getElementById("session-user-wrong-answer-field");
const sessionTrueAnswerField = document.getElementById("session-true-answer-field");
const sessionUserAttempsField = document.getElementById("session-user-attemps-amount-field");

//inisialisasi key untuk local storage
const localCompletedBook = "LOCAL_COMPLETED_BOOK";
const localUncompletedBook = "LOCAL_UNCOMPLETED_BOOK";

window.addEventListener("load", function(){
    if (typeof(Storage) !== "undefined") {
        // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
        if (localStorage.getItem(localCompletedBook) === null){
            localStorage.setItem(localCompletedBook, "");
        }if (localStorage.getItem(localUncompletedBook) === null){
            localStorage.setItem(localUncompletedBook, "")
        }
    }else{
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
    }
})