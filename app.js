var displayInput = document.getElementById("displayInput");

function getValue(val){
    displayInput.value += val; 
}
function calculation(){
    displayInput.value = eval(displayInput.value) 
}

function clearValue(){
    displayInput.value = "";
}
