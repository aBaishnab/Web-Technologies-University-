function appendToDisplay(input){
    const display = document.getElementById("display");

    if(display.value =="Invalid" || display.value =="undefined" || display.value =="Infinity" || display.value =="NaN"){
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

    if(display.value =="Invalid" || display.value =="undefined" || display.value =="Infinity" || display.value =="NaN"){
        display.value ="";
        return;
    }
    display.value = display.value.slice(0, -1);
}

function calculate(){
    const display = document.getElementById("display");

    try{
        if(display.value.includes("**")){
            display.value = "Invalid";
            return;
        }
        else if(display.value.includes("//")){
            display.value = "Invalid";
            return;
        }

        display.value = eval(display.value);
    }
    catch(error){
        display.value ="Invalid";
    }
}  