const noteListDiv = document.querySelector('.note-list');
let noteID = 1;

function Note(id, title, content){
    this.id = id;
    this.title = title;
    this.content = content;
}

function eventListeners(){
    document.addEventListener('DOMContentLoaded', displayNotes);
    document.getElementById('add-note-btn').addEventListener('click', addNewNote);
    noteListDiv.addEventListener('click', deleteNote);
}

eventListeners();

function getDataFromStorage(){
    return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
}

function addNewNote(){
    const noteTitle = document.getElementById('note-title'),
          noteContent = document.getElementById('note-content');
    if(validateInput(noteTitle, noteContent)){
        let notes = getDataFromStorage();
        let noteItem = new Note(noteID, noteTitle.value, noteContent.value);
        noteID++;
        notes.push(noteItem);
        createNote(noteItem);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteTitle.value = "";
        noteContent.value = "";
    }
}

function deleteNote(e){
    if(e.target.classList.contains('delete-note-btn')){
        e.target.parentElement.remove();
        let divID = e.target.parentElement.dataset.id;
        let notes = getDataFromStorage();
        let newNotesList = notes.filter(item => {
            return item.id !== parseInt(divID);
        });
        localStorage.setItem('notes', JSON.stringify(newNotesList));
    }
}