const validator = require("validator")
const notes = require('./notes.js')
const notesmsg = notes()
console.log(notesmsg)
console.log(validator.isEmail("ihatetoast@gmail.com"));