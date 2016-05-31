/************************************************************************************************************
FasterFactorial: If factorial of that number already exists, find that product and return that otherwise find 
the factorial, add it to the factorials array and return that product
*************************************************************************************************************/

var factorials = [1, 2, 6, 24, 120];
var lastFactorial;

function fasterFactorial(n){
	var product = 1;
	
	if(n <= factorials.length){
		console.log('exists');
		return factorials[n -1];
	}
	else{
		lastFactorial = 5;
		
	  for(var i = lastFactorial; i <= n; i++){
		  product = factorials[lastFactorial - 1] * i;
		  factorials.push(product);
	  }
	
	  return product;
	}
	
}

console.log(fasterFactorial(4));