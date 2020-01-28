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
