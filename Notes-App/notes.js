const fs = require('fs');
const chalk = require('chalk');
const getNotes = function(){

}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        console.log(note.title === title);
        return note.title === title;
    })
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added");
    }else{
        console.log("Note title taken");
    }
    console.log(duplicateNotes);

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNote = function(title){
  const notes = loadNotes();
  const matchNotes = notes.filter((note)=>{
      return note.title === title;
  })
  if(matchNotes.length === 0){
      console.log(chalk.red("Not exist"));
  }else{
      notes.splice(notes.indexOf(matchNotes[0]),1);
      saveNotes(notes);
      console.log(chalk.green("Note deleted " + title));
  }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}