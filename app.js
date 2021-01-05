const fs = require('fs')

fs.writeFileSync("notes.txt", "My name is not Fred")
fs.appendFileSync("notes.txt","Oh yes you are!" )