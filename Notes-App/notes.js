const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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

const removeNote = title => {
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

const listNotes = () => loadNotes().map(note => note.title);

const readNote = title => {
  const result = loadNotes().find(note => note.title === title);
  if (!result) {
    console.log(chalk.bold.red("Not found"));
  } else {
    console.log(chalk.bold.blue(result.title));
    console.log(result.body);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
