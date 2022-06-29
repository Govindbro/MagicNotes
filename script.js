console.log("Welcome to notes app. This is js file");
// If user adds a note, add it to the localStorage
showNotes()
let addBtn = document.getElementById("btn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();
});
// funnction to get elements from the local storage
// To clear local storage => localstorage.clear()
function showNotes() {
  // console.log(notes);
  console.log("showing ")
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  let value = "";
  notesObj.forEach(function(element, index) {
    value += `
            
                <div class="card-body">
                    <h5 >Note ${index + 1}</h5>
                    <p > ${element} </p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn2">Delete Note</button>
                </div>
            `;
  });
  console.log(notes);
  let notesItem = document.getElementById("noteCard");
  if (notesObj.length != 0) {
    notesItem.innerHTML="hii";
    notesItem.innerHTML = value;
  } else {
    notesItem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
  
  
}
// funtion to delete the notes 
function deleteNote(index){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  console.log(`The ${index} is now deleted `);
  // now updating the localStorage 
  localStorage.setItem("notes", JSON.stringify(notesObj));

  showNotes();
}


// for Searching the notes 
let search=document.getElementById("search");
search.addEventListener('input',()=>{
  let searchInput=search.value.toLowerCase();
  // let cardbody=document.getElementById('noteCard');
  let cardbody=document.getElementsByClassName('card-body');
  Array.from(cardbody).forEach((elements)=>{
    let cardtext=elements.getElementsByTagName("p")[0].innerText;
    if(cardtext.includes(searchInput)){
      elements.style.display = "block";
    }
    else{
      elements.style.display = "none";
    }
  })
})

