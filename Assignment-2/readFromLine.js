
const readline = require("readline"); 
const readFromLine = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

readFromLine.question("Please enter your name : " ,(name)=>{
    console.log("Hello",name);
    readFromLine.close()
})
