function myFunction(id) {
  
    var input =  parseInt(document.getElementById("userInput").value);

    var input1 =  parseInt(document.getElementById("userInput1").value);
    var res
    
 
    if (id ==document.getElementById("add").id){
      
    
        res = (input + input1);
        document.getElementById("result").setAttribute("value", res);
      
    }
    else if (id ==document.getElementById("sub").id){
        res = (input - input1);
        document.getElementById("result").setAttribute("value", res);
    }
    else if (id ==document.getElementById("mul").id){
        res = (input * input1);
        document.getElementById("result").setAttribute("value", res);
    }
    else if (id ==document.getElementById("div").id){
        res = (input / input1);
        document.getElementById("result").setAttribute("value", res);
    }
}







