/*
1} Password Validator

Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.
*/

const confirmedPassword = "abc#1000"

function passwordValidation(password) {
    if(password === confirmedPassword){
        console.log(`Password Matched, Password validation Successful`)
    }
    else{
        console.log(`Password didn't match, Password validation unsuccessful`)
    }    
}

passwordValidation("xyz#2000") // Password didn't match. Password validation unsuccessful
passwordValidation("abc#1000") // Password Matched, Password validation Successful

