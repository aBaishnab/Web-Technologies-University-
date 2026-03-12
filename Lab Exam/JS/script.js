const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value =="Invalid" || display.value =="undefined"){
        display.value = "";
    }
    display.value += input;
    
}

function clearDisplay(){
     display.value = "";
}

function remove(){
    if(display.value =="Invalid" || display.value =="undefined"){
        display.value ="";
        return;
    }
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        if(display.value =="Infinity" || display.value =="NaN"){
            display.value ="undefined";
        }
        if(display.value.includes("**")){
        display.value = "Invalid";
        return;
        }
        else if(display.value.includes("//")){
        display.value = "Invalid";
        return;
        }


        display.value = eval(display.value);
        if(display.value =="Infinity" || display.value =="NaN"){
            display.value ="undefined";
        }
    }
    catch(error){
        display.value ="Invalid";
    }
}  