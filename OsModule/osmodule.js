const os = require('os')

//type of architecture
console.log(os.arch())

const freeMemory = os.freemem()
console.log(`${freeMemory / 1024 / 1024 / 1024}`)

const totalMemory = os.totalmem()
console.log(`${totalMemory / 1024 / 1024 / 1024}`)

console.log(os.homedir())

console.log(os.version())

//refer https://nodejs.org/api/os.html for more