const fs = require("fs");
const chalk = require("chalk");
const getNotes = function() {};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const saveNotes = notes =>
  fs.writeFileSync("notes.json", JSON.stringify(notes));

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (error) {
    return [];
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const matchNotes = notes.filter(note => note.title === title);
  if (matchNotes.length === 0) {
    console.log(chalk.red("Not exist"));
  } else {
    notes.splice(notes.indexOf(matchNotes[0]), 1);
    saveNotes(notes);
    console.log(chalk.green("Note deleted " + title));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
