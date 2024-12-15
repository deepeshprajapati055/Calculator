const input = document.getElementById('calcInput');
function append(value) {
    input.value += value;
}
        
function clearLast() {
    input.value = input.value.slice(0, -1);
}
        
function clearAll() {
    input.value = '';
}

function calculate() {
    try 
    {
        input.value = eval(input.value);
    } 
    catch (e) 
    {
        alert("Invalid Expression");
        input.value = '';
    }
}