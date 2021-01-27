const fs = require('fs')

const getNotes = function(){
    return "Your notes ..."
}


const addNote = function(title, body){
    const notes = loadNotes();
    console.log(notes);
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString(dataBuffer)
        return JSON.parse(dataString)
    } catch(e){
       return []
    }
   
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
};