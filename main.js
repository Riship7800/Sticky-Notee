let newNoteButton = document.querySelector('#newNote');
let textArea = document.querySelector('textarea'); 
let notesContainer = document.querySelector('#notesContainer');

function getRandomColor() {
    const colors = ['#FFDDC1', '#FEC8D8', '#D4A5A5', '#A8D8EA', '#D4E157']; 
    return colors[Math.floor(Math.random() * colors.length)];
}

newNoteButton.addEventListener('click', () => {
    let noteText = textArea.value; 
    if (noteText) {
        let noteDiv = document.createElement('div');
        noteDiv.classList.add('container');

        let noteColor = getRandomColor();
        noteDiv.style.backgroundColor = noteColor;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button'); 

        deleteButton.addEventListener('click', () => {
            notesContainer.removeChild(noteDiv); 
        });

        noteDiv.textContent = noteText;
        noteDiv.appendChild(deleteButton); 

        notesContainer.append(noteDiv); 

        textArea.value = ''; 
    } else {
        alert("Please enter a note before adding."); 
    }
});
