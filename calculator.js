//step 1: get rid of the number placeholder and leave the div there
//make a function that has the index of the calculator
//Step 2: implement the clear all functionality to clear the incrementor
//Step 3: assign number values to the number buttons
//Step 4: implement add function to add to the index
window.onload = function(){
  var screen = document.getElementById('total');
  var buttons = document.querySelectorAll('.calc-item');
  var output = screen.innerText
  console.log('output', output)


  for(var i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
      var buttonValue = this.innerText
      console.log('buttonValue', buttonValue)
      buttonValue += output
      var limit = output.length;
  })
  }
  // document.getElementById('zero-button').addEventListener("click", function(){
  //   var zero = this.value;
  //   if(screen.innerHTML === ""){
  //     output = screen.innerHTML = zero;
  //   }
  //   else if(screen.innerHTML === output){
  //     output = screen.innerHTML+= zero;
  //   }
  // })
}
