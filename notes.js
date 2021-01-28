const fs = require('fs')

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
        console.log("Note added successfully");
    }else{
        console.log("That title has been taken");
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
    addNote: addNote
};