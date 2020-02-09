// Assignment Code 
var genRanPass = document.querySelector("#generate")

//Random Password String to be created.
var passCharString = "";

// Created an Array of Objects. Invididual Object contains the type of Charatrers, Name and Use. 
var passCharSet = [

    // Object Set 1: Uppercase Letters.
    
    {
        characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        name: "Uppercase Letters",
        use: false,
    },
    
    // Object Set 2: lowercase Letters.
    
    {             
        characters:"abcdefghijklmnopqrstuvwxyz",
        name: "LowerCase Letters",
        use: false,
    },
    
    // Object Set 3: Special Characters.
    
    {             
        characters: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        name: "Special Characters",
        use: false
    },
    
    // Object Set 4: Numbers.
    
    {
        characters:"0123456789",
        name: "Numbers",
        use: false,
    }
]

// Console log to Verify Array. 
console.log(passCharSet)



 
// Function to prompt random password length. 
function generate(event) {

    var passwordLength = prompt("How many characters would you like your password to have?");
    var ranPassString = "";

    console.log(passwordLength);
}
 

 // Event Listener
genRanPass.addEventListener("click", generate);
