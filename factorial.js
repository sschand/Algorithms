*************************************************************************************
FACTORIAL: Given a number, find the product of the factorial - ex 5 - find 5*4*3*2*1
*************************************************************************************

Method 1:
function factorial(num){
  var product = 1;
	
	for(var i = num; i > 0; i--){
		product = product * i;
	}
	return product;
}

****************
Method 2:

// Factorial recursively
function factorial(num){
	if(num == 1){
		return 1;
	}else{
		return num * factorial(num - 1);
	}
}


console.log(factorial(5));