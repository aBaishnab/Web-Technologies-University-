console.log("connected");

errCount = 1;

function collect_data()
{
    count1 = 0;
    count2 = 0;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(!email) {
        document.getElementById("emailErr").innerHTML = "Email is requied";
    } 
    else {
        if(!email.includes("@") ) {
           document.getElementById("emailErr").innerHTML = "Email doesn't contain @"; 
        }
        else{
            document.getElementById("emailErr").innerHTML = "";
            count1 = 1;
        }
       

    }

    if(!password) {
        document.getElementById("passwordErr").innerHTML = "Password is required";
    }
    else {
       if(password.length<6) {
            document.getElementById("passwordErr").innerHTML = "Password must be more than 6 character";
        }
        else if(!password.includes("#")) {
            document.getElementById("passwordErr").innerHTML = "Password doesn't contain #"; 
        }
        else{
            document.getElementById("passwordErr").innerHTML = "";
            count2 = 1;
        }
        
    }
    if (count1==0 || count2==0){
        document.getElementById("submitErr").innerHTML = "Wrong submission: " + errCount;
    }
    else{
        document.getElementById("submitErr").innerHTML = "";
        errCount=0;
    }
    errCount++;
    return false;

   
}
