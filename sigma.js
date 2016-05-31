******************************************************************************************
SIGMA: Given a number, find the sum of the number + number -1 all the way till number = 1
example: given 5 - find 5+4+3+2+1
******************************************************************************************

Method 1:
function sigma(num){
	var sum = 0;
	for(var i = num; i > 0; i--){
		sum += i;
	}
	return sum;
}

****************
Method 2:

// sigma recursively
function sigma(num){
	if(num == 1){
		return 1;
	}else{
		return num + sigma(num - 1);
	}
}
console.log(sigma(5));