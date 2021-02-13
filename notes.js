const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.black.bgYellow("Your notes:"))
    notes.map((note)=>{
        console.log(`Title: ${note.title}`)
    })
}
const readNote = (title) =>{
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title)
    if(note){
      console.log(chalk.bgBlue(note.title)) 
      console.log(note.body)
    } else{
        console.log(chalk.black.bgRed("No note found"));
    }
    
}

const addNote = (title, body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Note added successfully"));
    }else{
        console.log(chalk.black.bgYellow("That title has been taken"));
    }
    
}
const deleteNote = (title)=>{
    const notes = loadNotes();
    const newNotesArr = notes.filter((note)=>note.title !== title)
    if(notes.length > newNotesArr.length){
        console.log(chalk.bgGreen(`Note titled ${title} removed.`));
       saveNotes(newNotesArr)
    }else{
        
        console.log(chalk.bgRed(`No note with the title ${title} found.`));
    }

}
const saveNotes = (notes) =>{
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSONdata)
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch(e){
       return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    readNote: readNote
};