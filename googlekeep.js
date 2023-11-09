const addButton = document.querySelector('#add');

const updateLetestData = () =>{
    const textAreaData = document.querySelectorAll('textarea');

    const notes = [];
    console.log(textAreaData);
    textAreaData.forEach((note) =>{ return notes.push(note.value); })

    // console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}


const addNewNotes = ( text = '') =>{
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
    <div class="operation tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class ="${text ? "hidden" : ""}" ></textarea>  `;
    
    note.insertAdjacentHTML('afterbegin' , htmlData);
    // console.log(note);

    // getting the References

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    deleteBtn.addEventListener ('click' , () =>{
        note.remove();
    })

    textArea.value =text;
    mainDiv.innerHTML =text;

    editBtn.addEventListener('click' ,() =>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change' , (event) =>{
      
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML =value;

        updateLetestData();

    })


    document.body.appendChild(note );
    
    


}
    
// Getting The Data From localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) { notes.forEach((note) => addNewNotes(note))};

addButton.addEventListener('click',() => addNewNotes());
