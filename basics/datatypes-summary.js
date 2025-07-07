// #Primitive

// 7 types : string, Number, Boolean, Null, undefined, Symbol, BigInt 


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id  = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 34565437665432n


//Reference (Non Primitive)

// Array, Objects, Function

const heros =["ironmen","hulk","thor"];

let myObj = {
    name : "Imran",
    Age : 20,
}

const myFunction = function(){
    console.log ("Hello World ");
}

console.log(typeof bigNumber);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack (primitive)   Heap (non primitive)

  let myYoutubename = "Imrandevradocom"

  let anothername = myYoutubename
  anothername= "mrimran"


  console.log(myYoutubename);
   console.log(anothername);