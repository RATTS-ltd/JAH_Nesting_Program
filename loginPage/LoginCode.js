// JavaScript to run the login page
CheckExpired();

function CheckExpired(){
    //Checks the date and then compares it to the expirey date
    var expire = new Date();
    var exdd = String(10).padStart(2, '0'); // Date  (padding length 2 with a 0 if 1)
    var exmm = String(2).padStart(2, '0'); // Month (Jan is 0)
    var exyyyy = String(2020); // Year
    
    expire = exyyyy + '' + exmm + '' + exdd;
    
    var today = new Date();
    var dd = String(today.getUTCDate()).padStart(2, '0');
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getUTCFullYear();
    
    today = yyyy + '' + mm + '' + dd;
    
    var todayint = parseInt(today, 10);
    var expireint = parseInt(expire, 10)
    
    var diff = Math.abs(expire-today)
    
    var timeleft = expireint - todayint
    
    if (todayint < expireint){    
        if (timeleft <= 200){
            document.getElementById("ExpireLbl").innerHTML = "Months till program will expire: " + String(Math.ceil(timeleft/100));
        }
    }
    else{
        document.getElementById("ExpireLbl").innerHTML = "Your program has expired";
    }    
}

function ActivationCode(){
    var inputcode = document.getElementById('activationcode').value;  
    var codes = {month3: "13HG65", month6: "16ER29", month12: "74OS72", month24: "62KM85"}

    for(var key in codes){
        var code = codes[key]
        document.getElementById("temp").innerHTML = "... " + code + "..." + inputcode;
        if(inputcode == code){
            if(code == "13HG65"){
                expireint + 0300;
                document.getElementById("temp").innerHTML =  "Date is 1" + expireint;
                out();
            }
            if(code == "16ER29"){
                expireint + 0600;
                document.getElementById("temp").innerHTML =  "Date is 2" + expireint;
            }
            if(code == "74OS72"){
                expireint + 1000;
                document.getElementById("temp").innerHTML =  "Date is 3" + String(expireint);
            }
            if(code == "62KM85"){
                expireint + 2000;
                document.getElementById("temp").innerHTML =  "Date is 4" + String(expireint);
            }
        }
        else{
            document.getElementById("temp").innerHTML = "Code not accepted!";

        }
    }

    function out(){
        var testing = 13;
        document.getElementById("temp").innerHTML = "spooky";

    }
}
