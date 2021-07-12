const display = document.getElementById("display")
const btn = document.querySelectorAll(".button")
const clear = document.getElementById("clear")
const decimal = document.getElementById("decimal")

function updateDisplay (){
  btn.forEach((item)=>{
    item.addEventListener("click", (e)=>{
      var current = e.target.value
     display.value += current
    })
  })
  //only one decimal point allow
  decimal.addEventListener("click",()=>{
    if(display.value.includes(".")){
        display.value += ""
    } else {
      display.value+= decimal.value
    }  
  })
}
updateDisplay();

//clear display
function clearDisplay() {
  clear.addEventListener("click", ()=>{
    display.value = ""
  })
}
clearDisplay();

//calculate function

function calculate() {
  document.getElementById("equals").addEventListener("click", ()=>{
    
    display.value = eval(display.value)
  })
}
calculate();