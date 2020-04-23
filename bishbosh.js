

function bishBosh(){
    // Selecting the input element and get its value
var inputLoopVal = document.getElementById("myLoopInput").value;
var inputD1Val = document.getElementById("myDivisorOneInput").value;
var inputD2Val = document.getElementById("myDivisorTwoInput").value;
var result = "";
    // Displaying the value
    document.getElementById("demo1").innerHTML  = inputLoopVal;
    document.getElementById("demo2").innerHTML  = inputD1Val;
    document.getElementById("demo3").innerHTML  = inputD2Val;

    for (var i = 1; i <= inputLoopVal; i++){
      if(i % (inputD1Val*inputD2Val) === 0)
      { result += "BishBosh <br>";}
      else if(i % inputD1Val === 0)
      { result += "Bish <br>";}
      else if( i % inputD2Val === 0)
      { result += "Bosh <br>";}
      else
      result += i+" <br>";
    }
    document.getElementById("demo4").innerHTML  = result;
}
