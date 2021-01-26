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
    handler: function(argv){
        console.log("Note added with title: ", argv.title);
        console.log( argv.body);
    }
});
yargs.command({
    command: 'remove', 
    describe: 'remove a note',
    handler: function(){
        console.log("Note removed.");
    }
});
yargs.command({
    command: 'read', 
    describe: 'retrieve note to read',
    handler: function(){
        console.log("Note avail to read.");
    }
});
yargs.command({
    command: 'list', 
    describe: 'list all notes',
    handler: function(){
        console.log("Look at all the notes.");
    }
});
yargs.parse()