const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

yargs.command({
    command: 'add', 
    describe: 'add a new note',
    handler: function(){
        console.log("New note added.");
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
    command: 'edit', 
    describe: 'edit a note',
    handler: function(){
        console.log("Note edited.");
    }
});
console.log(yargs.argv);