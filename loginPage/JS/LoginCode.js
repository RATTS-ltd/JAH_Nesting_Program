// JavaScript to run the login page
var expireint;

CheckExpired();


function CheckExpired(){
    //Checks the date and then compares it to the expirey date
    var expire = new Date();
    var exdd = String(10).padStart(2, '0'); // Date  (padding length 2 with a 0 if 1)
    var exmm = String(2).padStart(2, '0'); // Month (Jan is 0)
    var exyyyy = String(2020); // Year
    
    expire = exyyyy + '' + exmm + '' + exdd; // Formatting the expire date (e.g. 20200120)
    
    var today = new Date();
    var dd = String(today.getUTCDate()).padStart(2, '0');  // Gets the UTC day (not local)
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getUTCFullYear(); 
    
    today = yyyy + '' + mm + '' + dd; // Formatting the expire date (e.g. 20200120)
    
    var todayint = parseInt(today, 10); // Changes dates into integers with base10 (0-9)
    expireint = parseInt(expire, 10)
    
    var timeleft = expireint - todayint // Gets the time left before exirey

    if (todayint < expireint){ // If the date is greater than the expirey date
        if (timeleft <= 200){ // If there are less than 2 months left in the time till expire
            document.getElementById("ExpireLbl").innerHTML = "Months till program will expire: " + String(Math.ceil(timeleft/100)); // Tell the user they have x amount of months left (/100 to remove trailing 0's)
        }
    }
    else{ // If date is after expirey date
        document.getElementById("ExpireLbl").innerHTML = "Your program has expired"; // Tell the user the progam has expired
        // ADD DISABLE BUTTON
    }    
}

function ActivationCode(){ // function is ran if user presses the submit button on login page
    var inputcode = document.getElementById('activationcode').value;  // Gathering users input
    var codes = {month3: "13HG65", month6: "16ER29", month12: "74OS72", month24: "62KM85"} // These are the codes and can be changed for new ones
 
    for(var key in codes){ // key = pos in dictionary codes
        var code = codes[key] // code is assigned the value of the key
        document.getElementById("return").innerHTML = "... " + code + "... " + inputcode; // DELETE THIS
        if(inputcode == code){ // if user input is equal to the current code chosen in dictionary
            if(code == "13HG65"){ // if code = 3 months
                expireint += 300; // add 3 months to expirey date
                //document.getElementById("return").innerHTML =  "Date is " + expireint;  // DELETE THIS
                out()
            }
            else if(code == "16ER29"){ // if code = 6 months
                expireint += 600; // add 6 months to expirey date
                out()
            }
            else if(code == "74OS72"){ // if code == 12 months
                expireint += 10000; // add 1 year to expirey date
                out()
            }
            else if(code == "62KM85"){ // if code == 24 months
                expireint += 20000; // add 2 years to expirey date
                out()
            }
        }
    }
    document.getElementById("return").innerHTML = "Please enter a valid code!";  // tell user code incorrect
}
function out(){  // go to next page
    window.location = '../ProgramPage/NestingProgram.html' //Opens the main program web page
}
function outAdmin(){ // go to admin page

}
function exit(){ // close tab
    close();
}


