const addBtn = document.querySelector('.add');

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
   notes.forEach((note) => {
       addNewNote(note);
   });
}

addBtn.addEventListener('click',() => {
    addNewNote();
});

function addNewNote(text = ""){
  const note = document.createElement('div');
  note.classList.add("note");
  note.innerHTML = `
  <div class="notes">
  <div class="tools">
      <button class="save"><i class="fas fa-save fa-lg"></i></button>
      <button class="edit"><i class="fas fa-edit fa-lg"></i></button>
      <button class="delete"><i class="fas fa-trash-alt fa-lg"></i></button>
  </div>
       <div class="main ${text ? "" : "hidden"}">
      <textarea class="${text ? "hidden" : ""}"></textarea>
  </div>
  </div>
  `;

const main = note.querySelector('.main');
const textArea = note.querySelector('textarea');

const saveBtn = note.querySelector('.save');
const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete');

editBtn.addEventListener('click',()=>{
   textArea.classList.remove('saved');
});

saveBtn.addEventListener('click',()=>{
   textArea.classList.add('saved');
});

deleteBtn.addEventListener("click", () => {
   note.remove();
});

textArea.addEventListener("input", (e) => {
   const { value } = e.target;

   main.innerHTML = marked(value);

   updateLS();
});

  document.querySelector('main').appendChild(note);
}



