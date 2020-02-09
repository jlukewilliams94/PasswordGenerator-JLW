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

    // If Statement to ensure password length meets necessary criteria.
    if(passwordLength >= 8 && passwordLength <= 128) {
        // Confirm which character type want to use in random password. 
        passCharSet.forEach(set => {
        var useChar = (confirm(`Do you want your password to contain ${set.name}?`));
        if (useChar == true) {
        set.use = true;
        }             
        if (set.use) {
        passCharString = passCharString + set.characters;
        }
        });
        
        //Console Log to verify new array after confirm. 
        console.log(passCharSet)
    }
    // Else statement to let User know password did not meet required criteria. 
     else {
    alert("Your password must be between 8 and 128 characters long, please try again!")
    }
    

}

 // Event Listener
genRanPass.addEventListener("click", generate);
