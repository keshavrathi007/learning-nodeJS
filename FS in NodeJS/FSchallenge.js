const fs = require("fs")

//Challenge
//1. create a filder names yourName

fs.mkdirSync("Keshav")

//2. create a file named bio.txt and put the data into it

fs.writeFileSync("Keshav/bio.txt", "This is my BIO folder")

//3. add more dtaa into the file at the end of existing data

fs.appendFileSync("Keshav/bio.txt", "My college name is DSATM")

//4. Read the data without getting the buffer data

const org_data = fs.readFileSync('Keshav/bio.txt', 'utf8');
console.log(org_data)

//5. rename the file to mybio.txt

fs.renameSync("Keshav/bio.txt", "Keshav/MyBio.txt")

//6. now delete both the files and the folder
fs.unlinkSync("Keshav/MyBio.txt")
fs.rmdirSync("Keshav")