function calculate() {
    var bill = document.getElementById("billAmt").value;	
	var tip = document.getElementById("tipValue").value;
	var tipAmt= document.getElementById("tip");	
	var result = bill * tip;
	    tipAmt.innerHTML = result;
    } 


