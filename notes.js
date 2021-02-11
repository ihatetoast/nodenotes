const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return "Your notes ..."
}


const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })

    if(duplicateNotes.length === 0){
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
const deleteNote = function(title){
    const notes = loadNotes();
    const newNotesArr = notes.filter((note)=>{
        return note.title !== title;
    })
    if(notes.length > newNotesArr.length){
        console.log(chalk.bgGreen(`Note titled ${title} removed.`));
       saveNotes(newNotesArr)
    }else{
        
        console.log(chalk.bgRed(`No note with the title ${title} found.`));
    }

}
const saveNotes = function(notes){
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSONdata)
}
const loadNotes = function(){
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
    deleteNote: deleteNote
};