function appendToDisplay(input){
    const display = document.getElementById("display");

    if(display.value =="Invalid" || display.value =="undefined" || display.value.includes("Infinity") || display.value =="NaN"){
        display.value = "";
    }
    display.value += input;
    
}

function clearDisplay(){
    const display = document.getElementById("display");
     display.value = "";
}

function remove(){
    const display = document.getElementById("display");

    if(display.value =="Invalid" || display.value =="undefined" || display.value.includes("Infinity")|| display.value =="NaN"){
        display.value ="";
    }
    display.value = display.value.slice(0, -1);
}

function calculate(){
    const display = document.getElementById("display");
    if(display.value =="Invalid" || display.value =="undefined" || display.value.includes("Infinity") || display.value =="NaN"){
        display.value = "";
    }
    else{
        try{
            if(display.value.includes("**")){
                display.value = "Invalid";
            }
            else if(display.value.includes("//")){
                display.value = "Invalid";
            }

            display.value = eval(display.value);
        }
        catch(error){
            display.value ="Invalid";
        }
    }
    
}  