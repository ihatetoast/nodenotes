const notes = require('./notes.js')
const chalk = require('chalk')

const command = process.argv[2].toLowerCase()

if(command === 'add'){
    console.log("add shit")
} else {
    console.log("don't add shit")
}