// JavaScript to run the login page

function CheckExpired(){
    //Gets the current date (not machine local) and checks how long the user is licensed to use program.
    var date = new Date();
    

    var today = date.getDate()   //Formatted "Year-Month-Day"
    var expire = date.setDate(2020, 1, 30)  //Date that program license expires

    if (today < expire){
        var diff = expire - today
        if (diff.days < 60){
            print("The program license expires in " + str(diff.days) + " days")
        }
    }
    else{
        print("The program license has expired!")
    }
}

var path = window.location.pathname
window.print(path)