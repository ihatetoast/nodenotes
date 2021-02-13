const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

yargs.command({
    command: 'add', 
    describe: 'add a new note',
    builder:{
        title:{
            describe: 'title for note',
            demandOption: true,
            type: 'string'
        }, 
        body:{
            describe: 'content of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
});
yargs.command({
    command: 'remove', 
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'title for note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.deleteNote(argv.title);
    }
});
yargs.command({
    command: 'read', 
    describe: 'retrieve note to read',
    builder: {
        title:{
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});
yargs.command({
    command: 'list', 
    describe: 'list all notes',
    handler(){
        notes.getNotes();
    }
});
yargs.parse()